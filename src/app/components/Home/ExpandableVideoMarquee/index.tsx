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

  // 2. Grow width and height symmetrically to full viewport size
  const videoWidth = useTransform(scrollYProgress, [0, 1], ['32%', '100%']);
  const videoHeight = useTransform(scrollYProgress, [0, 1], ['36vh', '100vh']);
  
  // 3. Flatten the border radius as it becomes full screen
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['36px', '0px']);
  
  // 4. Parallax scroll transforms for background elements
  const marqueeOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const cloud1X = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const cloud2X = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const planeX = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const helicopterY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  const repeatedText = Array(4).fill(tickerText).join('');

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-gradient-to-b from-[#E0F2FE] via-[#E6F8F6] to-[#E0F8F5] text-[#2D3436] font-sans antialiased selection:bg-[#FFE66D] selection:text-[#2D3436]"
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
            style={{ scale: textScale }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 22,
            }}
            className="whitespace-nowrap flex text-[9vw] sm:text-[7.5vw] md:text-[6vw] font-black tracking-tighter select-none text-[#2D3436]/8 uppercase"
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

        {/* ═══ MAGICAL KIDS WOW FACTOR: FLOATING BUBBLES & TWINKLING SPARKLES ═══ */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
          {/* Bubble 1 */}
          <motion.div
            animate={{ y: ['100vh', '-10vh'], x: [0, 30, -30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            className="absolute left-[10%] w-8 h-8 rounded-full bg-gradient-to-br from-white/50 to-sky-200/40 border-2 border-white/80 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_8px_rgba(0,183,172,0.1)] backdrop-blur-[1px]"
          />
          {/* Bubble 2 */}
          <motion.div
            animate={{ y: ['100vh', '-10vh'], x: [0, -45, 45, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: 4 }}
            className="absolute left-[25%] w-12 h-12 rounded-full bg-gradient-to-br from-white/40 to-sky-200/30 border-2 border-white/70 shadow-[inset_0_3px_6px_rgba(255,255,255,0.8),0_6px_12px_rgba(0,183,172,0.1)] backdrop-blur-[1px]"
          />
          {/* Bubble 3 */}
          <motion.div
            animate={{ y: ['100vh', '-10vh'], x: [0, 25, -25, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear', delay: 8 }}
            className="absolute right-[20%] w-6 h-6 rounded-full bg-gradient-to-br from-white/60 to-sky-200/50 border-2 border-white/90 shadow-[inset_0_2px_3px_rgba(255,255,255,0.8),0_3px_6px_rgba(0,183,172,0.1)] backdrop-blur-[1px]"
          />
          {/* Bubble 4 */}
          <motion.div
            animate={{ y: ['100vh', '-10vh'], x: [0, -35, 35, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: 12 }}
            className="absolute right-[35%] w-10 h-10 rounded-full bg-gradient-to-br from-white/45 to-sky-200/35 border-2 border-white/70 shadow-[inset_0_3px_5px_rgba(255,255,255,0.8),0_5px_10px_rgba(0,183,172,0.1)] backdrop-blur-[1px]"
          />
          {/* Twinkling Sparkle 1 */}
          <motion.div
            animate={{ scale: [0, 1, 0], rotate: [0, 90, 180], opacity: [0, 0.7, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[15%] top-[25%] text-yellow-300/80 text-xl font-bold select-none"
          >
            ✦
          </motion.div>
          {/* Twinkling Sparkle 2 */}
          <motion.div
            animate={{ scale: [0, 1, 0], rotate: [0, -90, -180], opacity: [0, 0.7, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            className="absolute right-[22%] top-[30%] text-pink-300/80 text-2xl font-bold select-none"
          >
            ✦
          </motion.div>
          {/* Twinkling Sparkle 3 */}
          <motion.div
            animate={{ scale: [0, 1, 0], rotate: [0, 90, 180], opacity: [0, 0.6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="absolute left-[40%] top-[15%] text-cyan-300/70 text-lg font-bold select-none"
          >
            ✦
          </motion.div>
        </div>

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
            width: videoWidth,
            height: videoHeight,
            borderRadius: borderRadius,
          }}
          className="relative z-10 overflow-hidden border-3 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436] bg-[#FFE66D] flex items-center justify-center cursor-pointer transition-shadow duration-300 will-change-transform group"
        >
          {/* Background Video */}
          <video
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