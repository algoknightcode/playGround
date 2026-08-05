'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const UpperFooter: React.FC = () => {
  // Ref for intersection observer trigger
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Ref-based mouse parallax (Zero re-renders = extremely light & smooth performance)
  const cloudsRef = useRef<{ 
    c1: HTMLDivElement | null; 
    c2: HTMLDivElement | null; 
    c3: HTMLDivElement | null 
  }>({
    c1: null,
    c2: null,
    c3: null,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    if (cloudsRef.current.c1) {
      cloudsRef.current.c1.style.transform = `translate(${x * 0.04}px, ${y * 0.04}px)`;
    }
    if (cloudsRef.current.c2) {
      cloudsRef.current.c2.style.transform = `translate(${x * 0.07}px, ${y * 0.07}px)`;
    }
    if (cloudsRef.current.c3) {
      cloudsRef.current.c3.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px)`;
    }
  };

  const handleMouseLeave = () => {
    if (cloudsRef.current.c1) cloudsRef.current.c1.style.transform = 'translate(0px, 0px)';
    if (cloudsRef.current.c2) cloudsRef.current.c2.style.transform = 'translate(0px, 0px)';
    if (cloudsRef.current.c3) cloudsRef.current.c3.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div className="relative w-full bg-white overflow-hidden font-sans antialiased">
      
      {/* ═══ DUAL LAYERED HIGH-CONTRAST SCALLOP WAVE OVERLAY ═══ */}
      <div className="relative w-full leading-none z-10 -mb-1">
        <svg 
          className="w-full h-28 sm:h-40 md:h-48 block" 
          viewBox="0 0 1440 190" 
          preserveAspectRatio="none"
        >
          {/* BACK WAVE (ALTERNATE OFFSET PHASE #70C1D6) */}
          <g transform="translate(1440, 0) scale(-1, 1)">
            <path 
              d="M0,25 C120,-15 240,-15 360,25 C480,65 600,65 720,25 C840,-15 960,-15 1080,25 C1200,65 1320,65 1440,25 L1440,190 L0,190 Z" 
              fill="#70C1D6" 
            />
          </g>
          {/* FRONT MAIN WAVE (SOFT BABY CYAN #BDECF0) */}
          <path 
            d="M0,75 C100,40 200,40 300,75 C400,105 500,105 600,75 C700,40 800,40 900,75 C1000,105 1100,105 1200,75 C1300,40 1400,50 1440,65 L1440,190 L0,190 Z" 
            fill="#BDECF0" 
          />
        </svg>
      </div>

      {/* ═══ MAIN SOFT BABY CYAN SECTION ═══ */}
      <div 
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full bg-[#BDECF0] text-[#0F2942] pt-6 pb-16 px-6 sm:px-12 z-30 overflow-hidden"
      >
        
        {/* Hanging Clouds (Optimized with direct ref transforms for silky smooth parallax) */}
        <div 
          ref={(el) => { cloudsRef.current.c1 = el; }}
          className="absolute opacity-70 pointer-events-none z-10 transition-transform duration-200 ease-out"
          style={{ 
            left: '8%', 
            top: '-48px',
          }}
        >
          <img src="/assets/upperFooter/cloud_string.webp" alt="Hanging Cloud 1" className="w-24 sm:w-32 h-auto" />
        </div>
        
        <div 
          ref={(el) => { cloudsRef.current.c2 = el; }}
          className="absolute opacity-70 pointer-events-none z-10 transition-transform duration-200 ease-out"
          style={{ 
            left: '45%', 
            top: '-16px',
          }}
        >
          <img src="/assets/upperFooter/cloud_string.webp" alt="Hanging Cloud 2" className="w-28 sm:w-36 h-auto" />
        </div>
        
        <div 
          ref={(el) => { cloudsRef.current.c3 = el; }}
          className="absolute opacity-70 pointer-events-none z-10 transition-transform duration-200 ease-out"
          style={{ 
            right: '8%', 
            top: '-80px',
          }}
        >
          <img src="/assets/upperFooter/cloud_string.webp" alt="Hanging Cloud 3" className="w-32 sm:w-44 h-auto" />
        </div>

        {/* Floating Stars */}
        <div className="absolute top-[20%] left-[25%] text-[#0F2942]/30 animate-pulse w-5 h-5">⭐</div>
        <div className="absolute top-[15%] right-[35%] text-[#0F2942]/30 animate-pulse w-4 h-4" style={{ animationDelay: '1s' }}>⭐</div>
        <div className="absolute bottom-[25%] left-[15%] text-[#0F2942]/30 animate-pulse w-4 h-4" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="absolute top-[40%] right-[15%] text-[#0F2942]/30 animate-pulse w-5 h-5" style={{ animationDelay: '1.5s' }}>⭐</div>

        {/* Flying Rocket Illustration (reversed flight direction) */}
        <motion.img 
          src="/assets/rocket_icon.webp" 
          alt="Flying Rocket"
          animate={isInView ? {
            x: ["-80vw", "50vw"],
            y: ["-50vh", "35vh"],
            opacity: [0, 1, 1, 0]
          } : {
            x: "-80vw",
            y: "-50vh",
            opacity: 0
          }}
          transition={{ duration: 4.2, ease: "easeInOut", delay: 0.3 }}
          className="absolute pointer-events-none z-20 w-20 sm:w-28 h-auto"
          style={{ bottom: "25%", right: "20%", rotate: "45deg" }}
        />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-20">
          
          {/* Left: Baby on Cloud */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square flex items-center justify-center">
              <img 
                src="/assets/upperFooter/babay_cloud.webp" 
                alt="Happy Baby on Cloud" 
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right: Text Content & Social Share Buttons */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide uppercase font-serif leading-tight text-[#0F2942]">
              We Will Take Care <br className="hidden sm:inline" />
              Of Your Kids
            </h2>
            
            <p className="text-base sm:text-lg font-bold text-[#0F2942]/80 max-w-md">
              Share this page with friends who need help, too.
            </p>

            {/* Social Share Buttons */}
            <div className="flex gap-4 mt-2">
              {/* Twitter */}
              <a 
                href="#" 
                className="w-11 h-11 rounded-xl bg-[#55ACEE] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md border-2 border-white/20"
                title="Share on Twitter"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                </svg>
              </a>
              {/* Facebook */}
              <a 
                href="#" 
                className="w-11 h-11 rounded-xl bg-[#3B5998] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md border-2 border-white/20"
                title="Share on Facebook"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a 
                href="#" 
                className="w-11 h-11 rounded-xl bg-[#0077B5] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md border-2 border-white/20"
                title="Share on LinkedIn"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* Google+ */}
              <a 
                href="#" 
                className="w-11 h-11 rounded-xl bg-[#DD4B39] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md border-2 border-white/20"
                title="Share on Google+"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.548 10.748V13.2h4.29c-.183 1.135-1.285 3.327-4.29 3.327-2.595 0-4.71-2.148-4.71-4.795s2.115-4.795 4.71-4.795c1.478 0 2.472.613 3.037 1.155l1.93-1.856C11.39 5.097 9.61 4.3 7.548 4.3 3.38 4.3 0 7.68 0 11.85s3.38 7.55 7.548 7.55c4.35 0 7.24-3.056 7.24-7.37 0-.496-.052-.876-.117-1.25H7.548zm16.452 0h-2.235v-2.23h-2.235v2.23H17.3v2.23h2.23v2.235h2.235v-2.235h2.23V10.75z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default UpperFooter;