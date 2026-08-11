'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ExpandableVideoMarqueeProps {
  videoSrc?: string;
  mobileVideoSrc?: string;
  tickerText?: string;
  badgeText?: string;
}

export const ExpandableVideoMarquee: React.FC<ExpandableVideoMarqueeProps> = ({
  videoSrc = '/video/Toy_park1.mp4',
  mobileVideoSrc = '/video/Toy_park1_mobile.mp4',
  tickerText = 'play.Grow KIDS toys and Furniture • ',
  badgeText = 'NEW COLLECTION 2026',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // IntersectionObserver controlling video play/pause
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.play().catch(() => {});
        } else {
          videoEl.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(videoEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Track scroll progress through the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Scale transform
  const videoScale = useTransform(scrollYProgress, [0, 1], [0.35, 1]);

  // Flatten border radius as video expands
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['36px', '0px']);

  // Fade out marquee text as video expands
  const marqueeOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  const repeatedText = Array(4).fill(tickerText).join('');

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#c7f3f7] text-[#2D3436] font-sans antialiased selection:bg-[#FFE66D] selection:text-[#2D3436]"
      style={{ height: '160vh' }}
    >
      {/* Lightweight CSS Animations */}
      <style>
        {`
          @keyframes marquee-slide {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-marquee-css {
            animation: marquee-slide 22s linear infinite;
            will-change: transform;
          }
          @keyframes drift-l2r {
            0% { transform: translateX(-20vw); }
            100% { transform: translateX(110vw); }
          }
          @keyframes drift-r2l {
            0% { transform: translateX(110vw); }
            100% { transform: translateX(-20vw); }
          }
          .animate-cloud-1 { animation: drift-l2r 32s linear infinite; }
          .animate-cloud-2 { animation: drift-r2l 38s linear infinite; animation-delay: -12s; }
          .animate-cloud-3 { animation: drift-r2l 48s linear infinite; animation-delay: -25s; }
          .animate-cloud-4 { animation: drift-l2r 52s linear infinite; animation-delay: -18s; }
          .animate-cloud-5 { animation: drift-l2r 44s linear infinite; animation-delay: -8s; }
          .animate-cloud-6 { animation: drift-r2l 36s linear infinite; animation-delay: -28s; }
        `}
      </style>

      {/* INNER STICKY CONTAINER */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* INFINITE SCROLLING MARQUEE (Fades out gracefully as video expands) */}
        <motion.div
          style={{ opacity: marqueeOpacity }}
          className="absolute inset-0 flex items-center pointer-events-none z-6 overflow-hidden"
        >
          <div className="animate-marquee-css whitespace-nowrap flex text-[9vw] sm:text-[7.5vw] md:text-[6vw] font-black tracking-tighter select-none text-white/80 uppercase">
            <span className="pr-4">{repeatedText}</span>
            <span className="pr-4">{repeatedText}</span>
          </div>
        </motion.div>

        {/* Neubrutalist Accent Blobs (Desktop Only) */}
        <div className="hidden sm:block absolute top-12 left-1/4 w-72 h-72 bg-[#FF6B6B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="hidden sm:block absolute bottom-12 right-1/4 w-72 h-72 bg-[#4ECDC4]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FFE66D]/15 rounded-full blur-3xl pointer-events-none" />

        {/* SKY BACKGROUND LAYER (Standard <div> Elements with CSS Animation) */}
        
        {/* Cloud 1 (Mobile & Desktop) */}
        <div className="absolute top-[10%] z-5 w-20 sm:w-28 pointer-events-none animate-cloud-1">
          <img
            src="/assets/cloud.png"
            alt="Sky Cloud"
            className="w-full h-auto object-contain drop-shadow-sm opacity-85"
          />
        </div>

        {/* Cloud 2 (Mobile & Desktop) */}
        <div className="absolute bottom-[15%] z-5 w-16 sm:w-24 pointer-events-none animate-cloud-2">
          <img
            src="/assets/cloud.png"
            alt="Sky Cloud"
            className="w-full h-auto object-contain drop-shadow-sm opacity-80"
          />
        </div>

        {/* Cloud 3 (Desktop Only) */}
        <div className="hidden sm:block absolute top-[18%] z-5 w-12 sm:w-16 pointer-events-none animate-cloud-3">
          <img
            src="/assets/cloud.png"
            alt="Sky Cloud"
            className="w-full h-auto object-contain drop-shadow-sm opacity-70"
          />
        </div>

        {/* Cloud 4 (Desktop Only) */}
        <div className="hidden sm:block absolute bottom-[25%] z-5 w-14 sm:w-18 pointer-events-none animate-cloud-4">
          <img
            src="/assets/cloud.png"
            alt="Sky Cloud"
            className="w-full h-auto object-contain drop-shadow-sm opacity-75"
          />
        </div>

        {/* Cloud 5 (Desktop Only) */}
        <div className="hidden sm:block absolute top-[8%] z-5 w-11 sm:w-14 pointer-events-none animate-cloud-5">
          <img
            src="/assets/cloud.png"
            alt="Sky Cloud"
            className="w-full h-auto object-contain drop-shadow-sm opacity-75"
          />
        </div>

        {/* Cloud 6 (Desktop Only) */}
        <div className="hidden sm:block absolute top-[14%] z-5 w-12 sm:w-16 pointer-events-none animate-cloud-6">
          <img
            src="/assets/cloud.png"
            alt="Sky Cloud"
            className="w-full h-auto object-contain drop-shadow-sm opacity-80"
          />
        </div>

        {/* ORIGINAL VIBRANT 5-COLOR RAINBOW */}
        <div className="absolute top-[94vh] left-1/2 -translate-x-1/2 -translate-y-full w-[200vh] max-w-none z-5 pointer-events-none opacity-100">
          <svg viewBox="0 0 100 50" fill="none" className="w-full h-auto">
            <path d="M5,50 A45,45 0 0,1 95,50" stroke="#FF6B6B" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M7.1,50 A42.9,42.9 0 0,1 92.9,50" stroke="#FCA311" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M9.2,50 A40.8,40.8 0 0,1 90.8,50" stroke="#FFE66D" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M11.3,50 A38.7,38.7 0 0,1 88.7,50" stroke="#4ECDC4" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M13.4,50 A36.6,36.6 0 0,1 86.6,50" stroke="#6C4AB6" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* EXPANDING VIDEO CONTAINER */}
        <motion.div
          style={{
            scale: videoScale,
            borderRadius: borderRadius,
          }}
          className="relative z-10 w-full h-full max-w-[100vw] max-h-[100vh] overflow-hidden border-3 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436] bg-[#FFE66D] flex items-center justify-center transition-shadow duration-300 will-change-transform group"
        >
          {/* Background Video */}
          <video
            ref={videoRef}
            preload="metadata"
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={mobileVideoSrc} media="(max-width: 767px)" type="video/mp4" />
            <source src={videoSrc} media="(min-width: 768px)" type="video/mp4" />
            <source src={videoSrc} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </div>
  );
};

export default ExpandableVideoMarquee;