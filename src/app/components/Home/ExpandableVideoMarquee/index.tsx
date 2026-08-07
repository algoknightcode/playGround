'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ExpandableVideoMarqueeProps {
  videoSrc?: string;
  tickerText?: string;
  badgeText?: string;
}

// Web Audio API synth sound trigger for tactile physical feedback
const playPopSound = () => {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
    
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch {
    // Ignore audio context autoplay restrictions
  }
};

export const ExpandableVideoMarquee: React.FC<ExpandableVideoMarqueeProps> = ({
  videoSrc = '/video/Toy_park1.mp4',
  tickerText = 'play.Grow KIDS toys and Furniture • ',
  badgeText = 'NEW COLLECTION 2026',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Track scroll progress through the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 2. Scale transform (hardware accelerated, zero layout reflow)
  const videoScale = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  
  // 3. Flatten the border radius as it becomes full screen
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['36px', '0px']);
  
  // 4. Parallax opacity
  const marqueeOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  const repeatedText = Array(4).fill(tickerText).join('');

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#c7f3f7] text-[#2D3436] font-sans antialiased selection:bg-[#FFE66D] selection:text-[#2D3436]"
      style={{ height: '160vh' }}
    >
      {/* Embedded animation keyframes */}
      <style>
        {`
          @keyframes float-gentle {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(3deg); }
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
          .animate-cloud-6 { animation: drift-l2r 36s linear infinite; animation-delay: -28s; }
        `}
      </style>

      {/* INNER STICKY CONTAINER: Pins to screen while scrolling */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* ═══ INFINITE SCROLLING MARQUEE (FRIENDLY NEUBRUTALISM) ═══ */}
        <motion.div 
          style={{ opacity: marqueeOpacity }}
          className="absolute inset-0 flex items-center pointer-events-none z-6 overflow-hidden"
        >
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 22,
            }}
            className="whitespace-nowrap flex text-[9vw] sm:text-[7.5vw] md:text-[6vw] font-black tracking-tighter select-none text-white/80 uppercase"
          >
            <span className="pr-4">{repeatedText}</span>
            <span className="pr-4">{repeatedText}</span>
          </motion.div>
        </motion.div>

        {/* Neubrutalist Accent Blobs (Warm Coral, Fresh Teal, Sunshine Yellow - Softened) */}
        <div className="absolute top-12 left-1/4 w-72 h-72 bg-[#FF6B6B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-12 right-1/4 w-72 h-72 bg-[#4ECDC4]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FFE66D]/15 rounded-full blur-3xl pointer-events-none" />

        {/* ═══ ELEGANT & LIGHT SKY BACKGROUND LAYER ═══ */}
        
        {/* 1. Soft Floating Cloud 1 (Left to Right Sky Drift) */}
        <motion.div 
          style={{ opacity: marqueeOpacity }}
          className="absolute top-[10%] z-5 w-20 sm:w-28 pointer-events-none animate-cloud-1"
        >
          <img 
            src="/assets/cloud.png" 
            alt="Sky Cloud" 
            className="w-full h-auto object-contain drop-shadow-sm opacity-85" 
          />
        </motion.div>

        {/* 2. Soft Floating Cloud 2 (Right to Left Sky Drift) */}
        <motion.div 
          style={{ opacity: marqueeOpacity }}
          className="absolute bottom-[15%] z-5 w-16 sm:w-24 pointer-events-none animate-cloud-2"
        >
          <img 
            src="/assets/cloud.png" 
            alt="Sky Cloud" 
            className="w-full h-auto object-contain drop-shadow-sm opacity-80" 
          />
        </motion.div>

        {/* 3. Soft Floating Cloud 3 (Top Right to Left Sky Drift - smaller) */}
        <motion.div 
          style={{ opacity: marqueeOpacity }}
          className="absolute top-[18%] z-5 w-12 sm:w-16 pointer-events-none animate-cloud-3"
        >
          <img 
            src="/assets/cloud.png" 
            alt="Sky Cloud" 
            className="w-full h-auto object-contain drop-shadow-sm opacity-70" 
          />
        </motion.div>

        {/* 4. Soft Floating Cloud 4 (Bottom Left to Right Sky Drift - smaller) */}
        <motion.div 
          style={{ opacity: marqueeOpacity }}
          className="absolute bottom-[25%] z-5 w-14 sm:w-18 pointer-events-none animate-cloud-4"
        >
          <img 
            src="/assets/cloud.png" 
            alt="Sky Cloud" 
            className="w-full h-auto object-contain drop-shadow-sm opacity-75" 
          />
        </motion.div>

        {/* 5. Soft Floating Cloud 5 (Top Left Sky Drift - smaller) */}
        <motion.div 
          style={{ opacity: marqueeOpacity }}
          className="absolute top-[8%] z-5 w-11 sm:w-14 pointer-events-none animate-cloud-5"
        >
          <img 
            src="/assets/cloud.png" 
            alt="Sky Cloud" 
            className="w-full h-auto object-contain drop-shadow-sm opacity-75" 
          />
        </motion.div>

        {/* 6. Soft Floating Cloud 6 (Top Left Sky Drift - small) */}
        <motion.div 
          style={{ opacity: marqueeOpacity }}
          className="absolute top-[14%] z-5 w-12 sm:w-16 pointer-events-none animate-cloud-6"
        >
          <img 
            src="/assets/cloud.png" 
            alt="Sky Cloud" 
            className="w-full h-auto object-contain drop-shadow-sm opacity-80" 
          />
        </motion.div>



        {/* ═══ LARGE PROFESSIONAL RAINBOW BACKGROUND (SCALED BY VH TO PREVENT CUTOFF) ═══ */}
        <motion.div 
          style={{ opacity: marqueeOpacity }}
          className="absolute top-[94vh] left-1/2 -translate-x-1/2 -translate-y-full w-[200vh] max-w-none z-5 pointer-events-none opacity-[0.07] drop-shadow-xl"
        >
          <svg viewBox="0 0 100 50" fill="none" className="w-full h-auto">
            <path d="M5,50 A45,45 0 0,1 95,50" stroke="#FF6B6B" strokeWidth="2.1" strokeLinecap="round" />
            <path d="M7.1,50 A42.9,42.9 0 0,1 92.9,50" stroke="#FCA311" strokeWidth="2.1" strokeLinecap="round" />
            <path d="M9.2,50 A40.8,40.8 0 0,1 90.8,50" stroke="#FFE66D" strokeWidth="2.1" strokeLinecap="round" />
            <path d="M11.3,50 A38.7,38.7 0 0,1 88.7,50" stroke="#4ECDC4" strokeWidth="2.1" strokeLinecap="round" />
            <path d="M13.4,50 A36.6,36.6 0 0,1 86.6,50" stroke="#6C4AB6" strokeWidth="2.1" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* ═══ EXPANDING VIDEO CONTAINER (NEUBRUTALIST BORDER & BLOCK SHADOW) ═══ */}
        <motion.div
          onClick={playPopSound}
          style={{
            scale: videoScale,
            borderRadius: borderRadius,
          }}
          className="relative z-10 w-full h-full max-w-[100vw] max-h-[100vh] overflow-hidden border-3 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436] bg-[#FFE66D] flex items-center justify-center cursor-pointer transition-shadow duration-300 will-change-transform group"
        >
          {/* Background Video */}
          <video
            ref={(vid) => {
              if (!vid) return;
              const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                  vid.play().catch(() => {});
                } else {
                  vid.pause();
                }
              });
              observer.observe(vid);
            }}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ExpandableVideoMarquee;