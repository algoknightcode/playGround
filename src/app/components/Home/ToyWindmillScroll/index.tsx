'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export const ToyWindmillScroll: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const vid = videoRef.current;
    if (!section || !vid) return;

    // Observer 1: Lazy load the video early (500px before it enters the viewport)
    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !vid.getAttribute('src')) {
          vid.setAttribute('src', '/video/Toy_windmill_on_green_hill_202608061121.mp4');
          loadObserver.disconnect();
        }
      },
      { rootMargin: '500px' }
    );

    // Observer 2: Play/pause logic strictly when in view
    const playObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (vid.getAttribute('src')) {
            vid.play().catch(() => {});
          }
        } else {
          vid.pause();
        }
      },
      { rootMargin: '0px' }
    );

    loadObserver.observe(section);
    playObserver.observe(section);

    return () => {
      loadObserver.disconnect();
      playObserver.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-0 pb-10 lg:pb-16 px-6 sm:px-10 overflow-hidden bg-[#eef7fc] font-quicksand antialiased text-zinc-800"
    >
      
      {/* ═══ BACKGROUND MEDIA ═══ */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {/* Mobile Static Image (Optimized for performance) */}
        <img 
          src="/video/Toy_windmill_on_green_hill_mobile.webp" 
          alt="Green hill with windmill" 
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] block lg:hidden"
        />

        {/* Desktop Lazy-Loaded Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] hidden lg:block"
        />
        
        {/* Crisp gradient mask: leaves left windmill clear while offering subtle contrast for text on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#eef7fc]/40 to-[#eef7fc]/90 z-1 pointer-events-none hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#eef7fc]/40 via-transparent to-[#eef7fc]/80 z-1 pointer-events-none lg:hidden" />
      </div>

      {/* ═══ FOREGROUND CONTENT (GRID LAYOUT: WINDMILL SHIFTED LEFT, TEXT ON RIGHT) ═══ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-quicksand">
        
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
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold leading-[1.2] tracking-tight text-zinc-900 font-quicksand">
              Direct Factory Wholesale For<br />
              <span className="bg-gradient-to-r from-[#FF5A5F] to-[#FF7A59] bg-clip-text text-transparent">
                Kids Toys &amp;{' '}
              </span>
              <span className="bg-gradient-to-r from-[#00C4B5] to-[#0284C7] bg-clip-text text-transparent">
                School Furniture
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-700 leading-relaxed max-w-xl font-medium font-quicksand">
              Empower your preschool, daycare, activity center, or retail store with certified, non-toxic commercial play setups and ergonomic kids&apos; furniture straight from our state-of-the-art manufacturing plant.
            </p>

            {/* B2B Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00C4B5] to-[#0284C7] hover:from-[#00a89b] hover:to-[#026fa8] text-white font-extrabold text-xs sm:text-sm px-6 py-3 shadow-lg shadow-[#00C4B5]/25 hover:shadow-xl hover:scale-105 transition-[transform,background-color,box-shadow] duration-300 cursor-pointer whitespace-nowrap font-quicksand">
                <span>Request B2B Wholesale Quote</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-sky-200 text-[#0284C7] hover:bg-sky-50 font-extrabold text-xs sm:text-sm px-5 py-3 shadow-sm hover:scale-105 transition-[transform,background-color,box-shadow] duration-300 cursor-pointer whitespace-nowrap font-quicksand">
                <span>Bulk Catalog PDF</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* ═══ B2B TRUST STATS GRID ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full bg-white/95 border border-sky-100 rounded-[2rem] p-5 sm:p-7 shadow-[0_20px_45px_rgba(2,132,199,0.1)] grid grid-cols-2 sm:grid-cols-4 gap-4 relative overflow-hidden font-quicksand"
          >
            {/* Stat 1: Manufacturing Experience */}
            <div className="flex flex-col justify-center items-center text-center p-2 group">
              <div className="w-10 h-10 rounded-2xl bg-[#FF5A5F]/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-[transform,background-color,box-shadow] duration-300">
                <svg className="w-5 h-5 text-[#FF5A5F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight flex items-baseline justify-center font-quicksand">
                <CountUp end={20} duration={2} enableScrollSpy scrollSpyOnce />
                <span className="text-[#FF5A5F] text-xl sm:text-2xl ml-0.5 font-extrabold">+</span>
              </div>
              <span className="font-quicksand text-zinc-600 text-xs font-bold mt-1">
                Years Manufacturing
              </span>
            </div>

            {/* Stat 2: B2B Commercial Clients */}
            <div className="flex flex-col justify-center items-center text-center p-2 group">
              <div className="w-10 h-10 rounded-2xl bg-[#00C4B5]/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-[transform,background-color,box-shadow] duration-300">
                <svg className="w-5 h-5 text-[#00C4B5]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight flex items-baseline justify-center font-quicksand">
                <CountUp end={500} duration={2.5} enableScrollSpy scrollSpyOnce />
                <span className="text-[#00C4B5] text-xl sm:text-2xl ml-0.5 font-extrabold">+</span>
              </div>
              <span className="font-quicksand text-zinc-600 text-xs font-bold mt-1">
                Schools &amp; Daycares
              </span>
            </div>

            {/* Stat 3: Products Catalog */}
            <div className="flex flex-col justify-center items-center text-center p-2 group">
              <div className="w-10 h-10 rounded-2xl bg-[#0284C7]/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-[transform,background-color,box-shadow] duration-300">
                <svg className="w-5 h-5 text-[#0284C7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight flex items-baseline justify-center font-quicksand">
                <CountUp end={820} duration={2.5} enableScrollSpy scrollSpyOnce />
                <span className="text-[#0284C7] text-xl sm:text-2xl ml-0.5 font-extrabold">+</span>
              </div>
              <span className="font-quicksand text-zinc-600 text-xs font-bold mt-1">
                Wholesale Products
              </span>
            </div>

            {/* Stat 4: BIS Safety Certified */}
            <div className="flex flex-col justify-center items-center text-center p-2 group">
              <div className="w-10 h-10 rounded-2xl bg-[#FF7A59]/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-[transform,background-color,box-shadow] duration-300">
                <svg className="w-5 h-5 text-[#FF7A59]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight flex items-baseline justify-center font-quicksand">
                <CountUp end={100} duration={2} enableScrollSpy scrollSpyOnce />
                <span className="text-[#FF7A59] text-xl sm:text-2xl ml-0.5 font-extrabold">%</span>
              </div>
              <span className="font-quicksand text-zinc-600 text-xs font-bold mt-1">
                BIS Safety Certified
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ToyWindmillScroll;