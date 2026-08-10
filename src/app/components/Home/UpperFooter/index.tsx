'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const UpperFooter: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Ref-based mouse parallax (Zero re-renders = high performance)
  const cloudsRef = useRef<{ 
    c1: HTMLDivElement | null; 
    c2: HTMLDivElement | null; 
    c3: HTMLDivElement | null 
  }>({ c1: null, c2: null, c3: null });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    if (cloudsRef.current.c1) cloudsRef.current.c1.style.transform = `translate(${x * 0.04}px, ${y * 0.04}px)`;
    if (cloudsRef.current.c2) cloudsRef.current.c2.style.transform = `translate(${x * 0.07}px, ${y * 0.07}px)`;
    if (cloudsRef.current.c3) cloudsRef.current.c3.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px)`;
  };

  const handleMouseLeave = () => {
    if (cloudsRef.current.c1) cloudsRef.current.c1.style.transform = 'translate(0px, 0px)';
    if (cloudsRef.current.c2) cloudsRef.current.c2.style.transform = 'translate(0px, 0px)';
    if (cloudsRef.current.c3) cloudsRef.current.c3.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div className="relative w-full overflow-visible font-sans antialiased mt-32 md:mt-48 lg:mt-64">
      
      {/* ═══ SCALLOP WAVE OVERLAY ═══ */}
      <div className="absolute top-0 left-0 w-full leading-none z-10 -translate-y-[99%] pointer-events-none">
        <svg 
          className="w-full h-24 sm:h-32 md:h-40 block" 
          viewBox="0 0 1440 190" 
          preserveAspectRatio="none"
        >
          <g transform="translate(0, -45)">
            <path 
              d="M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,48C672,32,768,32,864,48C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,250L0,250Z" 
              fill="#70C1D6" 
            />
          </g>
          <path 
            d="M0,128L48,117.3C96,107,192,85,288,85.3C384,85,480,107,576,128C672,149,768,171,864,165.3C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,190L0,190Z" 
            fill="#BDECF0" 
          />
        </svg>
      </div>

      {/* ═══ MAIN SECTION ═══ */}
      <div 
        id="contact"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full bg-[#BDECF0] text-[#0F2942] pt-8 pb-20 sm:pb-28 px-6 sm:px-12 z-20 scroll-mt-10 overflow-hidden"
      >
        
        {/* Parallax Clouds */}
        <div ref={(el) => { cloudsRef.current.c1 = el; }} className="absolute opacity-80 pointer-events-none z-10 transition-transform duration-300 ease-out left-[10%] top-0">
          <img src="/assets/upperFooter/cloud_string.webp" alt="Cloud" className="w-28 sm:w-36 h-auto drop-shadow-md" />
        </div>
        <div ref={(el) => { cloudsRef.current.c2 = el; }} className="absolute opacity-80 pointer-events-none z-10 transition-transform duration-300 ease-out left-[45%] top-10">
          <img src="/assets/upperFooter/cloud_string.webp" alt="Cloud" className="w-32 sm:w-40 h-auto drop-shadow-md" />
        </div>
        <div ref={(el) => { cloudsRef.current.c3 = el; }} className="absolute opacity-80 pointer-events-none z-10 transition-transform duration-300 ease-out right-[10%] -top-5">
          <img src="/assets/upperFooter/cloud_string.webp" alt="Cloud" className="w-40 sm:w-48 h-auto drop-shadow-md" />
        </div>

        {/* Floating Stars */}
        <div className="absolute top-[20%] left-[25%] text-[#70C1D6] animate-pulse w-5 h-5">✦</div>
        <div className="absolute top-[15%] right-[35%] text-[#70C1D6] animate-pulse w-4 h-4" style={{ animationDelay: '1s' }}>✦</div>
        <div className="absolute bottom-[20%] left-[15%] text-[#70C1D6] animate-pulse w-6 h-6" style={{ animationDelay: '0.5s' }}>✦</div>
        <div className="absolute top-[40%] right-[10%] text-[#70C1D6] animate-pulse w-5 h-5" style={{ animationDelay: '1.5s' }}>✦</div>

        {/* Flying Rocket */}
        <motion.img 
          src="/assets/rocket_icon.webp" 
          alt="Flying Rocket"
          animate={isInView ? {
            x: ["-20vw", "90vw"],
            y: ["10vh", "-40vh"],
            opacity: [0, 1, 1, 0]
          } : { x: "-20vw", y: "10vh", opacity: 0 }}
          transition={{ duration: 5, ease: "easeInOut", delay: 0.2 }}
          className="absolute pointer-events-none z-20 w-24 sm:w-32 h-auto rotate-[65deg]"
          style={{ bottom: "10%", left: "0%" }}
        />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 relative z-20 mt-10">
          
          {/* Left: Text & Video Container */}
          <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start justify-center font-quicksand z-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F2942] mb-3 text-center lg:text-left">
              Let's Connect!
            </h2>
            <p className="text-base sm:text-lg font-semibold text-[#0F2942]/70 mb-10 text-center lg:text-left">
              Have questions? We'd love to hear from you. Drop us a message below.
            </p>
            
            {/* Playful Video Frame */}
            <div className="relative w-full max-w-[520px] aspect-video transition-transform duration-500">
              <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(15,41,66,0.2)]"></div>
              <div className="relative w-full h-full p-3 bg-white rounded-[2.5rem] shadow-lg z-10">
                <video 
                  src="/video/toy_park_3.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover rounded-[2rem] bg-gray-100"
                />
              </div>
            </div>
          </div>

          {/* Right: Clean Glassmorphism Contact Form */}
          <div className="w-full lg:w-7/12 flex justify-center lg:justify-end relative z-20">
            <form 
              onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your message has been sent.'); }} 
              className="w-full max-w-2xl flex flex-col gap-5 bg-white/15 backdrop-blur-[4px] p-8 sm:p-10 rounded-[2.5rem] border-2 border-white/30 shadow-[0_24px_60px_-15px_rgba(15,41,66,0.04)]"
            >
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-extrabold text-[#0F2942]/70 uppercase tracking-widest pl-1">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe" 
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/30 border-2 border-transparent text-[#0F2942] text-sm font-semibold focus:bg-white/80 focus:outline-none focus:border-[#70C1D6] transition-all shadow-sm placeholder:text-[#0F2942]/30"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-extrabold text-[#0F2942]/70 uppercase tracking-widest pl-1">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john@example.com" 
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/30 border-2 border-transparent text-[#0F2942] text-sm font-semibold focus:bg-white/80 focus:outline-none focus:border-[#70C1D6] transition-all shadow-sm placeholder:text-[#0F2942]/30"
                  />
                </div>
              </div>

              {/* Row 2: Company & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-extrabold text-[#0F2942]/70 uppercase tracking-widest pl-1">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Optional" 
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/30 border-2 border-transparent text-[#0F2942] text-sm font-semibold focus:bg-white/80 focus:outline-none focus:border-[#70C1D6] transition-all shadow-sm placeholder:text-[#0F2942]/30"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-extrabold text-[#0F2942]/70 uppercase tracking-widest pl-1">Phone Number</label>
                  <div className="flex items-center bg-white/30 rounded-2xl border-2 border-transparent focus-within:border-[#70C1D6] focus-within:bg-white/80 transition-all shadow-sm overflow-hidden">
                    <span className="pl-4 pr-3 py-3.5 text-[#0F2942]/50 font-semibold border-r border-[#0F2942]/10 select-none">
                      +91
                    </span>
                    <input 
                      type="tel" 
                      required 
                      placeholder="98765 43210" 
                      className="w-full px-4 py-3.5 bg-transparent text-[#0F2942] text-sm font-semibold focus:outline-none placeholder:text-[#0F2942]/30"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: State & City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-extrabold text-[#0F2942]/70 uppercase tracking-widest pl-1">State</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Maharashtra" 
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/30 border-2 border-transparent text-[#0F2942] text-sm font-semibold focus:bg-white/80 focus:outline-none focus:border-[#70C1D6] transition-all shadow-sm placeholder:text-[#0F2942]/30"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-extrabold text-[#0F2942]/70 uppercase tracking-widest pl-1">City</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Mumbai" 
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/30 border-2 border-transparent text-[#0F2942] text-sm font-semibold focus:bg-white/80 focus:outline-none focus:border-[#70C1D6] transition-all shadow-sm placeholder:text-[#0F2942]/30"
                  />
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-extrabold text-[#0F2942]/70 uppercase tracking-widest pl-1">Your Message</label>
                <textarea 
                  rows={3} 
                  required 
                  placeholder="How can we help you today?" 
                  className="w-full px-5 py-4 rounded-2xl bg-white/30 border-2 border-transparent text-[#0F2942] text-sm font-semibold focus:bg-white/80 focus:outline-none focus:border-[#70C1D6] transition-all shadow-sm placeholder:text-[#0F2942]/30 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full mt-2 py-4 rounded-2xl bg-[#0F2942] text-white font-bold text-sm tracking-widest uppercase hover:bg-[#70C1D6] hover:text-[#0F2942] active:scale-[0.98] transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group"
              >
                <span>Send Message</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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