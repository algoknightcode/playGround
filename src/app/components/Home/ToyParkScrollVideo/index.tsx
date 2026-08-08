'use client';

import React, { useEffect, useRef } from 'react';

export default function ToyParkScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const vid = videoRef.current;
    const cv = canvasRef.current;
    if (!container || !vid || !cv) return;

    // Config: Balanced for memory vs smooth scrub performance
    const TARGET_W = 800;
    const TARGET_FPS = 24;

    const frames: ImageBitmap[] = [];
    let totalFrames = 0;
    let videoWidth = 0;
    let videoHeight = 0;
    let drawnIndex = -1;
    let isExtractionStarted = false;
    let rafScrollId: number | null = null;
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    let loadedMetadataHandler: (() => void) | null = null;

    let layoutCache = { dx: 0, dy: 0, dw: 0, dh: 0 };

    vid.muted = true;
    vid.setAttribute('playsinline', '');
    vid.removeAttribute('controls');
    vid.preload = 'auto';

    const ctx = cv.getContext('2d', { alpha: false });
    if (!ctx) return;

    function updateLayout() {
      if (!container || !cv) return;

      const isMobile = window.innerWidth < 768;
      const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);

      const parentW = cv.parentElement?.clientWidth || container.clientWidth;
      const parentH = cv.parentElement?.clientHeight || window.innerHeight;

      const cw = Math.round(parentW * dpr);
      const ch = Math.round(parentH * dpr);

      cv.width = cw;
      cv.height = ch;

      if (videoWidth && videoHeight) {
        const s = Math.max(cw / videoWidth, ch / videoHeight);
        const dw = videoWidth * s;
        const dh = videoHeight * s;
        const dx = (cw - dw) / 2;
        const dy = (ch - dh) / 2;

        layoutCache = { dx, dy, dw, dh };
      }

      drawnIndex = -1;
    }

    function draw(i: number) {
      const b = frames[i];
      if (!b || !ctx || !cv) return;

      const { dx, dy, dw, dh } = layoutCache;
      // Defensive clear to avoid edge bleeding during resizes or DPR subpixel shifts
      ctx.clearRect(0, 0, cv.width, cv.height);
      ctx.drawImage(b, dx, dy, dw, dh);
      drawnIndex = i;
    }

    let containerTop = 0;
    let totalScroll = 0;

    function measureLayout() {
      if (!container || !cv) return;
      const stickyH = cv.parentElement?.clientHeight || window.innerHeight;
      totalScroll = Math.max(1, container.offsetHeight - stickyH);
      const rect = container.getBoundingClientRect();
      containerTop = rect.top + window.scrollY;
    }

    function renderScroll() {
      const N = totalFrames || frames.length;
      if (!N || !container || !cv) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const progress = totalScroll > 0 ? Math.min(1, Math.max(0, (scrollY - containerTop) / totalScroll)) : 0;
      let frameIndex = Math.round(progress * (N - 1));

      // Fallback to closest available frame if target frame is still loading during active scroll
      if (!frames[frameIndex]) {
        for (let offset = 1; offset < 5; offset++) {
          if (frames[frameIndex - offset]) {
            frameIndex = frameIndex - offset;
            break;
          }
          if (frames[frameIndex + offset]) {
            frameIndex = frameIndex + offset;
            break;
          }
        }
      }

      if (frameIndex !== drawnIndex && frames[frameIndex]) {
        draw(frameIndex);
      }
    }

    function onScroll() {
      if (rafScrollId === null) {
        rafScrollId = requestAnimationFrame(() => {
          renderScroll();
          rafScrollId = null;
        });
      }
    }

    function onResize() {
      updateLayout();
      measureLayout();
      renderScroll();
    }

    let isObserving = false;

    function enableScrollListener() {
      if (!isObserving) {
        isObserving = true;
        measureLayout();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize);
      }
    }

    function disableScrollListener() {
      if (isObserving) {
        isObserving = false;
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onResize);
        if (rafScrollId !== null) {
          cancelAnimationFrame(rafScrollId);
          rafScrollId = null;
        }
      }
    }

    function getBitmapOpts() {
      if (!vid || !TARGET_W || !vid.videoWidth) return undefined;
      return {
        resizeWidth: TARGET_W,
        resizeHeight: Math.round((TARGET_W * vid.videoHeight) / vid.videoWidth),
        resizeQuality: 'low' as ResizeQuality,
      };
    }

    async function grabFrame(slot: number) {
      if (!vid) return;
      try {
        const bitmap = await createImageBitmap(vid, getBitmapOpts());
        if (!videoWidth) {
          videoWidth = bitmap.width;
          videoHeight = bitmap.height;
          updateLayout();
        }
        frames[slot] = bitmap;

        if (slot === 0) {
          measureLayout();
          draw(0);
        }
      } catch (e) {
        console.error('Frame grab error', e);
      }
    }

    function finish() {
      totalFrames = frames.length;
      measureLayout();
      renderScroll();

      if (loaderRef.current) {
        loaderRef.current.style.opacity = '0';
        setTimeout(() => {
          if (loaderRef.current) loaderRef.current.style.display = 'none';
        }, 500);
      }
    }

    function extractByPlay() {
      if (!vid) return;
      let slot = 0;
      let lastTime = -1;
      const interval = 1 / TARGET_FPS;
      const pending: Promise<void>[] = [];

      const cb = (_now: DOMHighResTimeStamp, metadata: VideoFrameCallbackMetadata) => {
        if (!vid) return;

        if (metadata.mediaTime - lastTime >= interval || lastTime === -1) {
          lastTime = metadata.mediaTime;
          pending.push(grabFrame(slot++));
        }

        if (!vid.ended && 'requestVideoFrameCallback' in vid) {
          (vid as any).requestVideoFrameCallback(cb);
        }
      };

      (vid as any).requestVideoFrameCallback(cb);

      vid.addEventListener(
        'ended',
        async () => {
          if (vid && !vid.paused) vid.pause();
          // Ensure final frame at video end is captured into slot
          try {
            const lastFrame = await createImageBitmap(vid, getBitmapOpts());
            frames[slot] = lastFrame;
          } catch {}
          await Promise.all(pending);
          finish();
        },
        { once: true }
      );

      vid.play().then(() => {
        // Pause playback after extracting frames or once end is reached
      }).catch(extractBySeek);
    }

    async function extractBySeek() {
      if (!vid) return;
      const dur = vid.duration || 1;
      const step = 1 / TARGET_FPS;
      let slot = 0;

      for (let t = 0; t < dur; t += step) {
        vid.currentTime = t;
        await new Promise((r) => vid.addEventListener('seeked', r, { once: true }));
        await grabFrame(slot++);
      }

      finish();
    }

    function startExtraction() {
      if (!vid || isExtractionStarted) return;
      isExtractionStarted = true;

      updateLayout();
      measureLayout();

      const run = () => {
        if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
          extractByPlay();
        } else {
          extractBySeek();
        }
      };

      if (vid.readyState >= 1) {
        run();
      } else {
        loadedMetadataHandler = run;
        vid.addEventListener('loadedmetadata', loadedMetadataHandler, { once: true });
        vid.load();
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (!isExtractionStarted) {
            startExtraction();
          }
          enableScrollListener();
        } else {
          disableScrollListener();
        }
      },
      { rootMargin: '0px 0px' }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      disableScrollListener();
      if (loadedMetadataHandler && vid) vid.removeEventListener('loadedmetadata', loadedMetadataHandler);

      frames.forEach((b) => {
        try {
          b?.close();
        } catch {}
      });
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[150vh] bg-white py-20">
      <video
        ref={videoRef}
        src="/video/toy_park_3.mp4"
        className="absolute top-0 left-0 w-1 h-1 opacity-0 pointer-events-none"
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
      />

      <div className="sticky top-[15vh] w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <span className="text-[#00C4B5] font-extrabold text-sm uppercase tracking-widest">
            Interactive Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#2D3436] font-quicksand leading-tight">
            Experience the ultimate <span className="text-[#00C4B5]">Toy Park</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Scroll down to watch our manufacturing world come alive, bringing creative toy craftsmanship directly to life right before your eyes.
          </p>
        </div>

        <div className="lg:col-span-7 w-full aspect-video overflow-hidden flex items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-lg relative">
          <canvas ref={canvasRef} className="w-full h-full block object-cover saturate-[1.25] contrast-[1.12] brightness-[1.03] transition-all duration-300" />

          <div
            ref={loaderRef}
            className="absolute inset-0 z-10 bg-white/80 backdrop-blur-md flex items-center justify-center transition-opacity duration-500"
          >
            <div className="flex flex-col items-center gap-3 text-gray-700 font-quicksand">
              <div className="w-10 h-10 border-4 border-[#00C4B5] border-t-transparent rounded-full animate-spin" />
              <span className="text-sm font-extrabold uppercase tracking-wider">Loading Toy Park...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}