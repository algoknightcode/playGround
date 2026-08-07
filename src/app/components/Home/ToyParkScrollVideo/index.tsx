'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ToyParkScrollVideo() {
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
      return 'cover';
    }

    function resizeCanvas() {
      if (!container || !cv) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const parentW = cv.parentElement?.clientWidth || container.clientWidth;
      cv.width = Math.round(parentW * dpr);
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

    function render() {
      const totalFrames = N || frames.length;
      if (!totalFrames || !container || !cv) return;
      const stickyH = cv.parentElement?.clientHeight || window.innerHeight;
      const total = container.offsetHeight - stickyH;
      const rect = container.getBoundingClientRect();
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      const i = Math.round(p * (totalFrames - 1));
      if (i !== drawn && frames[i]) draw(i);
    }

    const handleResize = () => {
      resizeCanvas();
      render();
    };

    window.addEventListener('scroll', render, { passive: true });
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
          draw(0);
        }
        render();
      } catch (e) {
        console.error('Frame grab error', e);
      }
    }

    function finish() {
      N = frames.length;
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
      window.removeEventListener('scroll', render);
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
    <section ref={containerRef} className="relative w-full h-[150vh] bg-white py-20">
      {/* Hidden source video element */}
      <video
        ref={videoRef}
        src="/video/toy_park_3.mp4"
        className="absolute top-0 left-0 w-1 h-1 opacity-0 pointer-events-none"
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
      />

      {/* Sticky viewport container - split layout */}
      <div className="sticky top-[15vh] w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Side: Interactive Text Content */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <span className="text-[#00C4B5] font-extrabold text-sm uppercase tracking-widest">
            Interactive Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#2D3436] font-quicksand leading-tight">
            Welcome to the ultimate <span className="text-[#FF7675]">Toy Park</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Scroll down to watch our colorful blocks stack up, bringing creative toy manufacturing directly to life right before your eyes.
          </p>
          <div className="flex items-center gap-4">
            <span className="w-12 h-1 bg-[#00C4B5] rounded-full animate-pulse"></span>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">
              Scroll down to explore
            </span>
          </div>
        </div>

        {/* Right Side: Video Canvas */}
        <div className="lg:col-span-7 w-full aspect-video overflow-hidden flex items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-lg relative">
          <canvas ref={canvasRef} className="w-full h-full block object-cover saturate-[1.25] contrast-[1.12] brightness-[1.03] transition-all duration-300" />

          {/* Loading overlay indicator */}
          {!isLoaded && (
            <div className="absolute inset-0 z-10 bg-white/80 backdrop-blur-md flex items-center justify-center transition-opacity duration-500">
              <div className="flex flex-col items-center gap-3 text-gray-700 font-quicksand">
                <div className="w-10 h-10 border-4 border-[#00C4B5] border-t-transparent rounded-full animate-spin" />
                <span className="text-sm font-extrabold uppercase tracking-wider">Loading Toy Park...</span>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
