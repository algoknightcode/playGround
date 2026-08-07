'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function PlaygroundScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const vid = videoRef.current;
    const cv = canvasRef.current;
    if (!container || !vid || !cv) return;

    vid.muted = true;
    vid.setAttribute('playsinline', '');
    vid.removeAttribute('controls');
    vid.preload = 'auto';

    const ctx = cv.getContext('2d', { alpha: true });
    if (!ctx) return;

    const TARGET_W = 1280;
    const frames: ImageBitmap[] = [];
    let N = 0;
    let iw = 0;
    let ih = 0;
    let drawn = -1;

    function getFit() {
      return window.innerWidth > 1024 ? 'cover' : 'contain';
    }

    function resizeCanvas() {
      if (!container || !cv) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(container.clientWidth * dpr);
      const parentH = cv.parentElement?.clientHeight || window.innerHeight;
      cv.height = Math.round(parentH * dpr);
      drawn = -1;
    }

    function draw(i: number) {
      const b = frames[i];
      if (!b || !ctx || !cv) return;

      const cw = cv.width;
      const ch = cv.height;
      const fit = getFit();

      const s =
        fit === 'cover'
          ? Math.max(cw / iw, ch / ih)
          : Math.min(cw / iw, ch / ih);

      const dw = iw * s;
      const dh = ih * s;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(b, dx, dy, dw, dh);
      drawn = i;
    }

    let rafId: number | null = null;
    let containerTop = 0;
    let totalScroll = 0;

    function measureLayout() {
      if (!container || !cv) return;
      const stickyH = cv.parentElement?.clientHeight || window.innerHeight;
      totalScroll = Math.max(1, container.offsetHeight - stickyH);
      const rect = container.getBoundingClientRect();
      containerTop = rect.top + window.scrollY;
    }

    function render() {
      const totalFrames = N || frames.length;
      if (!totalFrames || !container || !cv) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const p = totalScroll > 0 ? Math.min(1, Math.max(0, (scrollY - containerTop) / totalScroll)) : 0;
      const i = Math.round(p * (totalFrames - 1));
      if (i !== drawn && frames[i]) draw(i);
    }

    function onScroll() {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          render();
          rafId = null;
        });
      }
    }

    const handleResize = () => {
      resizeCanvas();
      measureLayout();
      render();
    };

    let observer: IntersectionObserver | null = null;
    let isObserving = false;

    function enableScrollListener() {
      if (!isObserving) {
        isObserving = true;
        measureLayout();
        window.addEventListener('scroll', onScroll, { passive: true });
      }
    }

    function disableScrollListener() {
      if (isObserving) {
        isObserving = false;
        window.removeEventListener('scroll', onScroll);
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    }

    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry && entry.isIntersecting) {
            enableScrollListener();
          } else {
            disableScrollListener();
          }
        },
        { rootMargin: '200px 0px' }
      );
      observer.observe(container);
    } else {
      enableScrollListener();
    }

    window.addEventListener('resize', handleResize);

    function bitmapOpts() {
      if (!vid || !TARGET_W || !vid.videoWidth) return undefined;
      return {
        resizeWidth: TARGET_W,
        resizeHeight: Math.round((TARGET_W * vid.videoHeight) / vid.videoWidth),
        resizeQuality: 'high' as ResizeQuality,
      };
    }

    async function grab(slot: number) {
      if (!vid) return;
      try {
        const b = await createImageBitmap(vid, bitmapOpts());
        if (!iw) {
          iw = b.width;
          ih = b.height;
        }
        frames[slot] = b;
        if (slot === 0) {
          resizeCanvas();
          measureLayout();
          draw(0);
        }
        render();
      } catch (e) {
        console.error('Frame grab error', e);
      }
    }

    function finish() {
      N = frames.length;
      measureLayout();
      render();
      setIsLoaded(true);
    }

    function extractByPlay() {
      if (!vid) return;
      let slot = 0;
      const pending: Promise<void>[] = [];

      const cb = () => {
        if (!vid) return;
        pending.push(grab(slot++));
        if (!vid.ended && 'requestVideoFrameCallback' in vid) {
          (vid as any).requestVideoFrameCallback(cb);
        }
      };

      if ('requestVideoFrameCallback' in vid) {
        (vid as any).requestVideoFrameCallback(cb);
      }

      vid.addEventListener(
        'ended',
        async () => {
          await Promise.all(pending);
          finish();
        },
        { once: true }
      );

      const p = vid.play();
      if (p) {
        p.catch(extractBySeek);
      }
    }

    async function extractBySeek() {
      if (!vid) return;
      const dur = vid.duration || 1;
      const step = 1 / 30;
      let slot = 0;

      for (let t = 0; t < dur; t += step) {
        vid.currentTime = t;
        await new Promise((r) => vid.addEventListener('seeked', r, { once: true }));
        await grab(slot++);
      }

      finish();
    }

    function start() {
      resizeCanvas();
      measureLayout();
      if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
        extractByPlay();
      } else {
        extractBySeek();
      }
    }

    if (vid.readyState >= 1) {
      start();
    } else {
      vid.addEventListener('loadedmetadata', start, { once: true });
    }

    return () => {
      disableScrollListener();
      if (observer) observer.disconnect();
      window.removeEventListener('resize', handleResize);
      vid.removeEventListener('loadedmetadata', start);
      frames.forEach((b) => {
        try {
          b.close();
        } catch (e) {}
      });
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[200vh] -mt-6 md:-mt-10 bg-black">
      {/* Hidden source video element */}
      <video
        ref={videoRef}
        src="/video/Website_video_showing_playground…_1080p_202608070041.mp4"
        className="absolute top-0 left-0 w-1 h-1 opacity-0 pointer-events-none"
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
      />

      {/* Sticky viewport container - 95vh height centered with bg-black */}
      <div className="sticky top-[2.5vh] w-full h-[95vh] overflow-hidden flex items-center justify-center bg-black">
        <canvas ref={canvasRef} className="w-full h-full block object-cover" />

        {/* Loading overlay indicator */}
        {!isLoaded && (
          <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-md flex items-center justify-center transition-opacity duration-500">
            <div className="flex flex-col items-center gap-3 text-white font-quicksand">
              <div className="w-10 h-10 border-4 border-[#00C4B5] border-t-transparent rounded-full animate-spin" />
              <span className="text-sm font-extrabold uppercase tracking-wider">Loading Playground Experience...</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
