'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

// Playful Windmill SVG Icon
const WindmillIcon = ({ className = "w-6 h-6", isSpinning = true }: { className?: string; isSpinning?: boolean }) => (
  <svg
    className={`${className} ${isSpinning ? 'animate-spin' : ''}`}
    style={{ animationDuration: '6s' }}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v20M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path d="m19 12-7 7-7-7 7-7 7 7Z" />
    <circle cx="12" cy="12" r="1" className="fill-current" />
  </svg>
);

// Happy Star icon for kids theme
const HappyStarIcon = ({ className = "w-5 h-5 text-amber-400" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export const ToyWindmillScroll: React.FC = () => {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-0 pb-10 lg:pb-16 px-6 sm:px-10 overflow-hidden bg-[#fcece3] font-sans antialiased text-zinc-800">
      
      {/* ═══ SHARP AUTO-LOOP BACKGROUND VIDEO ═══ */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          src="/video/Toy_windmill_on_green_hill_202607311719.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
        />
        
        {/* Crisp gradient mask: leaves left windmill clear while offering subtle contrast for text on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFF8F0]/30 to-[#FFF8F0]/85 z-1 pointer-events-none hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F0]/40 via-transparent to-[#FFF8F0]/70 z-1 pointer-events-none lg:hidden" />
      </div>

      {/* ═══ FOREGROUND CONTENT (GRID LAYOUT: WINDMILL SHIFTED LEFT, TEXT ON RIGHT) ═══ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Spacer Column on Left — Keeps moving windmill 100% visible */}
        <div className="hidden lg:block lg:col-span-4 xl:col-span-5 h-full min-h-[300px]" />

        {/* Text & Stats Container — Shifted to Right Column */}
        <div className="lg:col-span-8 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-8">
          
          {/* Title and copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start gap-4 max-w-2xl"
          >
            {/* Made with love badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A59]/10 border border-[#FF7A59]/25 shadow-sm backdrop-blur-md">
              <HappyStarIcon className="w-4 h-4 text-[#FF7A59] animate-bounce" />
              <span className="font-kalam text-[#FF7A59] text-xs font-bold uppercase tracking-wider">
                Made With 100% Love
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black leading-[1.25] tracking-tight text-zinc-950">
              Built With Experience<br />
              <span>For Your </span>
              <span className="bg-gradient-to-r from-[#FF7A59] via-[#FF9F43] to-[#FFC83B] bg-clip-text text-transparent drop-shadow-sm">
                Child's Better Experience
              </span>
              <button className="inline-flex items-center rounded-full bg-gradient-to-r from-[#FF7A59] to-[#FF9F43] hover:from-[#e05f3e] hover:to-[#e08630] text-white font-bold text-xs sm:text-sm px-6 py-2.5 shadow-md shadow-[#FF7A59]/25 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap align-middle ml-4 -translate-y-1">
                Explore Toys Catalog
              </button>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-700 leading-relaxed max-w-xl font-medium">
              Reliability, safety and love are things only a family could provide. We built it like a strong family.
              We ensure the safest kid's equipment manufactured in India.
            </p>
          </motion.div>

          {/* ═══ STATS GRID ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full bg-white/80 backdrop-blur-md border border-white/90 rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_45px_rgba(255,122,89,0.1)] flex flex-col sm:flex-row justify-between items-stretch gap-6 sm:gap-2 relative overflow-hidden"
          >
            {/* Stat 1: Years of Work */}
            <div className="flex-1 flex flex-col justify-center items-center text-center p-2 group">
              <div className="w-11 h-11 rounded-2xl bg-[#FF7A59]/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <svg className="w-5 h-5 text-[#FF7A59]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight flex items-baseline justify-center">
                <CountUp end={20} duration={2} enableScrollSpy scrollSpyOnce />
                <span className="text-[#FF7A59] text-2xl sm:text-3xl ml-0.5 font-bold">+</span>
              </div>
              <span className="font-kalam text-[#FF7A59] text-base font-bold mt-1.5">
                Years Of Work
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px bg-zinc-200/60 self-stretch my-2" />

            {/* Stat 2: Kids Products */}
            <div className="flex-1 flex flex-col justify-center items-center text-center p-2 group">
              <div className="w-11 h-11 rounded-2xl bg-[#FFC83B]/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                <svg className="w-5 h-5 text-[#FFC83B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight flex items-baseline justify-center">
                <CountUp end={820} duration={2.5} enableScrollSpy scrollSpyOnce />
                <span className="text-[#FFC83B] text-2xl sm:text-3xl ml-0.5 font-bold">+</span>
              </div>
              <span className="font-kalam text-[#FFC83B] text-base font-bold mt-1.5">
                Kids Products
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px bg-zinc-200/60 self-stretch my-2" />

            {/* Stat 3: Safe for Kids */}
            <div className="flex-1 flex flex-col justify-center items-center text-center p-2 group">
              <div className="w-11 h-11 rounded-2xl bg-[#4CAF50]/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <svg className="w-5 h-5 text-[#4CAF50]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight flex items-baseline justify-center">
                <CountUp end={100} duration={2} enableScrollSpy scrollSpyOnce />
                <span className="text-[#4CAF50] text-2xl sm:text-3xl ml-0.5 font-bold">%</span>
              </div>
              <span className="font-kalam text-[#4CAF50] text-base font-bold mt-1.5">
                Safe For Kids
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ToyWindmillScroll;