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
    <div className="relative w-full overflow-visible font-sans antialiased mt-32 md:mt-48 lg:mt-64">
      
      {/* ═══ DUAL LAYERED HIGH-CONTRAST SCALLOP WAVE OVERLAY ═══ */}
      <div className="absolute top-0 left-0 w-full leading-none z-10 -translate-y-[99%]">
        <svg 
          className="w-full h-24 sm:h-32 md:h-40 block" 
          viewBox="0 0 1440 190" 
          preserveAspectRatio="none"
        >
          {/* BACK WAVE (#70C1D6) - Shifted way up to be heavily visible */}
          <g transform="translate(0, -45)">
            <path 
              d="M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,48C672,32,768,32,864,48C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,250L0,250Z" 
              fill="#70C1D6" 
            />
          </g>
          {/* FRONT MAIN WAVE (SOFT BABY CYAN #BDECF0) - Smooth natural wave */}
          <path 
            d="M0,128L48,117.3C96,107,192,85,288,85.3C384,85,480,107,576,128C672,149,768,171,864,165.3C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,190L0,190Z" 
            fill="#BDECF0" 
          />
        </svg>
      </div>

      {/* ═══ MAIN SOFT BABY CYAN SECTION ═══ */}
      <div 
        id="contact"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full bg-[#BDECF0] text-[#0F2942] pt-12 pb-12 sm:pb-16 px-6 sm:px-12 z-20 scroll-mt-10"
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

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 relative z-20">
          
          {/* Left: Baby on Cloud with Contact Header */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center font-quicksand z-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wider text-[#0F2942] mb-2 text-center drop-shadow-sm">
              Contact Us
            </h2>
            <p className="text-sm sm:text-base font-bold text-[#0F2942]/75 mb-4 text-center">
              We'd love to hear from you!
            </p>
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square flex items-center justify-center">
              <img 
                src="/assets/upperFooter/babay_cloud.webp" 
                alt="Happy Baby on Cloud" 
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right: Contact Form (Transparent Cyan Blue Tinted Glass Overlay) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center font-quicksand relative z-20">
            <form 
              onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your message has been sent.'); }} 
              className="w-full max-w-xl flex flex-col gap-3.5 bg-gradient-to-br from-white/50 via-[#70C1D6]/25 to-white/40 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-white/90 shadow-[0_12px_36px_rgba(15,41,66,0.12)] relative z-40"
            >
              {/* Row 1: Full Name & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-[#0F2942]/85 uppercase tracking-wider mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      required 
                      placeholder="Name" 
                      className="w-full px-4 py-2.5 pr-9 rounded-xl bg-white/80 border border-white/80 text-[#0F2942] text-sm font-medium focus:bg-white focus:outline-none focus:border-[#70C1D6] focus:ring-2 focus:ring-[#70C1D6]/30 transition-all placeholder:text-[#0F2942]/45 shadow-sm"
                    />
                    <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#0F2942]/40 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#0F2942]/85 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <input 
                      type="email" 
                      required 
                      placeholder="Email" 
                      className="w-full px-4 py-2.5 pr-9 rounded-xl bg-white/80 border border-white/80 text-[#0F2942] text-sm font-medium focus:bg-white focus:outline-none focus:border-[#70C1D6] focus:ring-2 focus:ring-[#70C1D6]/30 transition-all placeholder:text-[#0F2942]/45 shadow-sm"
                    />
                    <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#0F2942]/40 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 2: Company Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-[#0F2942]/85 uppercase tracking-wider mb-1">
                    Company Name
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Company (optional)" 
                      className="w-full px-4 py-2.5 pr-9 rounded-xl bg-white/80 border border-white/80 text-[#0F2942] text-sm font-medium focus:bg-white focus:outline-none focus:border-[#70C1D6] focus:ring-2 focus:ring-[#70C1D6]/30 transition-all placeholder:text-[#0F2942]/45 shadow-sm"
                    />
                    <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#0F2942]/40 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#0F2942]/85 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <div className="relative flex items-center bg-white/80 rounded-xl border border-white/80 shadow-sm overflow-hidden focus-within:border-[#70C1D6] focus-within:ring-2 focus-within:ring-[#70C1D6]/30">
                    <span className="px-3 py-2.5 bg-white/40 text-base border-r border-[#70C1D6]/20 select-none">
                      🇮🇳
                    </span>
                    <input 
                      type="tel" 
                      required 
                      placeholder="10-digit Number" 
                      className="w-full px-3 py-2.5 bg-transparent text-[#0F2942] text-sm font-medium focus:outline-none placeholder:text-[#0F2942]/45"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: State & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-[#0F2942]/85 uppercase tracking-wider mb-1">
                    State
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="State" 
                    className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-white/80 text-[#0F2942] text-sm font-medium focus:bg-white focus:outline-none focus:border-[#70C1D6] focus:ring-2 focus:ring-[#70C1D6]/30 transition-all placeholder:text-[#0F2942]/45 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#0F2942]/85 uppercase tracking-wider mb-1">
                    City
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="City" 
                    className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-white/80 text-[#0F2942] text-sm font-medium focus:bg-white focus:outline-none focus:border-[#70C1D6] focus:ring-2 focus:ring-[#70C1D6]/30 transition-all placeholder:text-[#0F2942]/45 shadow-sm"
                  />
                </div>
              </div>

              {/* Row 4: Your Message */}
              <div>
                <label className="block text-[11px] font-bold text-[#0F2942]/85 uppercase tracking-wider mb-1">
                  Your Message
                </label>
                <div className="relative">
                  <textarea 
                    rows={2} 
                    required 
                    placeholder="How can we help you?" 
                    className="w-full px-4 py-2.5 pr-9 rounded-xl bg-white/80 border border-white/80 text-[#0F2942] text-sm font-medium focus:bg-white focus:outline-none focus:border-[#70C1D6] focus:ring-2 focus:ring-[#70C1D6]/30 transition-all placeholder:text-[#0F2942]/45 resize-none shadow-sm"
                  />
                  <svg className="w-4 h-4 absolute right-3 top-3 text-[#0F2942]/40 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full mt-1 py-3 px-6 rounded-xl bg-[#0F2942] text-white font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-[#163656] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
};

export default UpperFooter;