'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ExpandableVideoMarqueeProps {
  videoSrc?: string;
  tickerText?: string;
  badgeText?: string;
}

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
  const videoWidth = useTransform(scrollYProgress, [0, 1], ['28%', '100%']);
  const videoHeight = useTransform(scrollYProgress, [0, 1], ['32vh', '100vh']);
  
  // 3. Flatten the border radius as it becomes full screen
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['32px', '0px']);
  
  // Optional enhancements based on scroll
  const marqueeOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.2, 0]);

  const repeatedText = Array(4).fill(tickerText).join('');

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#FAF8F5] text-slate-800 selection:bg-orange-200 selection:text-orange-950 font-sans"
      style={{ height: '160vh' }}
    >
      {/* INNER STICKY CONTAINER: Pins to screen while scrolling */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* ═══ INFINITE SCROLLING MARQUEE (PASTEL LIGHT) ═══ */}
        <motion.div 
          style={{ opacity: marqueeOpacity }}
          className="absolute inset-0 flex items-center pointer-events-none z-0 overflow-hidden"
        >
          <motion.div
            style={{ scale: textScale }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 25,
            }}
            className="whitespace-nowrap flex text-[9vw] sm:text-[7.5vw] md:text-[6vw] font-black tracking-tight select-none text-slate-800/10 uppercase"
          >
            <span className="pr-4">{repeatedText}</span>
            <span className="pr-4">{repeatedText}</span>
          </motion.div>
        </motion.div>

        {/* Ambient Pastel Glows (Warm Peach, Soft Mint, Butter Yellow) */}
        <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[500px] h-[300px] bg-orange-200/40 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-1/3 w-[500px] h-[300px] bg-teal-200/35 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-200/30 blur-[150px] pointer-events-none rounded-full" />

        {/* ═══ SCATTERED ANIMATED ICONS PLACED ON TOP & BOTTOM OUTSIDE MARQUEE TEXT ═══ */}
        {/* Icon 1 - Top Far Left */}
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[6%] top-[6%] z-5 w-7 sm:w-8 max-w-[32px] pointer-events-none opacity-80"
        >
          <img src="/assets/icons/icon1.avif" alt="Icon 1" className="w-full h-auto drop-shadow-sm" />
        </motion.div>

        {/* Icon 2 - Top Far Right */}
        <motion.div
          animate={{ y: [0, 8, 0], rotate: [4, -4, 4] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          className="absolute right-[6%] top-[7%] z-5 w-6 sm:w-7 max-w-[28px] pointer-events-none opacity-80"
        >
          <img src="/assets/icons/icon2.avif" alt="Icon 2" className="w-full h-auto drop-shadow-sm" />
        </motion.div>

        {/* Icon 3 - Bottom Far Left */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute left-[8%] bottom-[8%] z-5 w-12 sm:w-15 pointer-events-none opacity-90"
        >
          <img src="/assets/icons/icon3.avif" alt="Icon 3" className="w-full h-auto drop-shadow-sm" />
        </motion.div>

        {/* Icon 5 - Bottom Far Right */}
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [-6, 6, -6] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
          className="absolute right-[8%] bottom-[8%] z-5 w-12 sm:w-15 pointer-events-none opacity-90"
        >
          <img src="/assets/icons/icon5.webp" alt="Icon 5" className="w-full h-auto drop-shadow-sm" />
        </motion.div>

        {/* Icon 7 - Top Center */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          className="absolute left-[38%] top-[5%] z-5 w-10 sm:w-12 pointer-events-none opacity-85"
        >
          <img src="/assets/icons/icon7.webp" alt="Icon 7" className="w-full h-auto drop-shadow-sm" />
        </motion.div>

        {/* ═══ EXPANDING VIDEO CONTAINER (CLEAN & UNCLUTTERED) ═══ */}
        <motion.div
          style={{
            width: videoWidth,
            height: videoHeight,
            borderRadius: borderRadius,
          }}
          className="relative z-10 overflow-hidden shadow-[0_20px_50px_rgba(180,140,110,0.18)] border border-white/80 bg-stone-100 flex items-center justify-center will-change-transform"
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

          {/* Soft Glass Rim Highlight */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/60 rounded-[inherit] pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
};

export default ExpandableVideoMarquee;