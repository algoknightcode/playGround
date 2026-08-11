'use client';

import React, { useRef, useState, useEffect } from 'react';

interface UpperFooterProps {
  className?: string;
}

export const UpperFooter: React.FC<UpperFooterProps> = ({ className = "mt-16 md:mt-24 lg:mt-32" }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const rafId = useRef<number | null>(null);

  // Lazy-load video when footer approaches viewport
  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Preloads 200px before coming into view
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // Ref-based mouse parallax throttled with requestAnimationFrame
  const cloudsRef = useRef<{ 
    c1: HTMLDivElement | null; 
    c2: HTMLDivElement | null; 
    c3: HTMLDivElement | null 
  }>({ c1: null, c2: null, c3: null });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rafId.current !== null) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    rafId.current = requestAnimationFrame(() => {
      if (cloudsRef.current.c1) cloudsRef.current.c1.style.transform = `translate3d(${x * 0.04}px, ${y * 0.04}px, 0)`;
      if (cloudsRef.current.c2) cloudsRef.current.c2.style.transform = `translate3d(${x * 0.07}px, ${y * 0.07}px, 0)`;
      if (cloudsRef.current.c3) cloudsRef.current.c3.style.transform = `translate3d(${x * 0.03}px, ${y * 0.03}px, 0)`;
      rafId.current = null;
    });
  };

  const handleMouseLeave = () => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    if (cloudsRef.current.c1) cloudsRef.current.c1.style.transform = 'translate3d(0px, 0px, 0)';
    if (cloudsRef.current.c2) cloudsRef.current.c2.style.transform = 'translate3d(0px, 0px, 0)';
    if (cloudsRef.current.c3) cloudsRef.current.c3.style.transform = 'translate3d(0px, 0px, 0)';
  };

  return (
    <div className={`relative w-full overflow-visible font-sans antialiased ${className}`}>
      
      {/* ═══ SCALLOP WAVE OVERLAY ═══ */}
      <div className="absolute top-0 left-0 w-full leading-none z-10 -translate-y-[99%] pointer-events-none">
        <svg 
          className="w-full h-24 sm:h-32 md:h-40 block" 
          viewBox="0 0 1440 190" 
          preserveAspectRatio="none"
        >
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
        className="relative w-full bg-[#BDECF0] text-[#0F2942] pt-6 pb-12 sm:pb-16 px-6 sm:px-12 z-20 scroll-mt-10 overflow-hidden"
      >
        
        {/* Parallax Clouds (Removed drop-shadow) */}
        <div ref={(el) => { cloudsRef.current.c1 = el; }} className="absolute opacity-80 pointer-events-none z-10 transition-transform duration-300 ease-out left-[10%] top-0">
          <img src="/assets/upperFooter/cloud_string.webp" alt="Cloud" className="w-28 sm:w-36 h-auto" />
        </div>
        <div ref={(el) => { cloudsRef.current.c2 = el; }} className="absolute opacity-80 pointer-events-none z-10 transition-transform duration-300 ease-out left-[45%] top-10">
          <img src="/assets/upperFooter/cloud_string.webp" alt="Cloud" className="w-32 sm:w-40 h-auto" />
        </div>
        <div ref={(el) => { cloudsRef.current.c3 = el; }} className="absolute opacity-80 pointer-events-none z-10 transition-transform duration-300 ease-out right-[10%] -top-5">
          <img src="/assets/upperFooter/cloud_string.webp" alt="Cloud" className="w-40 sm:w-48 h-auto" />
        </div>

        {/* Static Decorative Stars (Removed continuous animate-pulse) */}
        <div className="absolute top-[20%] left-[25%] text-[#70C1D6] opacity-70 w-5 h-5 select-none">✦</div>
        <div className="absolute top-[15%] right-[35%] text-[#70C1D6] opacity-70 w-4 h-4 select-none">✦</div>
        <div className="absolute bottom-[20%] left-[15%] text-[#70C1D6] opacity-70 w-6 h-6 select-none">✦</div>
        <div className="absolute top-[40%] right-[10%] text-[#70C1D6] opacity-70 w-5 h-5 select-none">✦</div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-20 mt-4">
          
          {/* Left: Text & Video Container */}
          <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start justify-center font-quicksand z-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#4ECDC4] mb-3 text-center lg:text-left">
              Partner With Us
            </h2>
            <p className="text-base sm:text-lg font-extrabold text-[#4ECDC4] mb-6 text-center lg:text-left">
              Have questions? We'd love to hear from you. Drop us a message below.
            </p>
            
            {/* Playful Video Frame (Lightweight Shadow) */}
            <div className="relative w-full max-w-[520px] aspect-video">
              <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-md"></div>
              <div className="relative w-full h-full p-3 bg-white rounded-[2.5rem] shadow-md z-10">
                {isVideoVisible ? (
                  <video 
                    src="/video/toy_park_3.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    preload="metadata"
                    className="w-full h-full object-cover rounded-[2rem] bg-gray-100"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 rounded-[2rem]" />
                )}
              </div>
            </div>
          </div>
 
          {/* Right: Solid/Light Glass Form (Removed backdrop-blur & heavy shadows) */}
          <div className="w-full lg:w-7/12 flex justify-center lg:justify-end relative z-20">
            <form 
              onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your message has been sent.'); }} 
              className="w-full max-w-2xl flex flex-col gap-5 bg-white/35 p-8 sm:p-10 rounded-[2.5rem] border border-white/50 shadow-md"
            >
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-extrabold text-[#4ECDC4] uppercase tracking-widest pl-1">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe" 
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/40 border border-transparent text-[#0F2942] text-sm font-semibold focus:bg-white/90 focus:outline-none focus:border-[#70C1D6] transition-colors shadow-sm placeholder:text-[#0F2942]/30"
                  />
                </div>
 
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-extrabold text-[#4ECDC4] uppercase tracking-widest pl-1">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john@example.com" 
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/40 border border-transparent text-[#0F2942] text-sm font-semibold focus:bg-white/90 focus:outline-none focus:border-[#70C1D6] transition-colors shadow-sm placeholder:text-[#0F2942]/30"
                  />
                </div>
              </div>
 
              {/* Row 2: Company & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-extrabold text-[#4ECDC4] uppercase tracking-widest pl-1">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Optional" 
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/40 border border-transparent text-[#0F2942] text-sm font-semibold focus:bg-white/90 focus:outline-none focus:border-[#70C1D6] transition-colors shadow-sm placeholder:text-[#0F2942]/30"
                  />
                </div>
 
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-extrabold text-[#4ECDC4] uppercase tracking-widest pl-1">Phone Number</label>
                  <div className="flex items-center bg-white/40 rounded-2xl border border-transparent focus-within:border-[#70C1D6] focus-within:bg-white/90 transition-colors shadow-sm overflow-hidden">
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
                  <label className="text-[11px] font-extrabold text-[#4ECDC4] uppercase tracking-widest pl-1">State</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Maharashtra" 
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/40 border border-transparent text-[#0F2942] text-sm font-semibold focus:bg-white/90 focus:outline-none focus:border-[#70C1D6] transition-colors shadow-sm placeholder:text-[#0F2942]/30"
                  />
                </div>
 
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-extrabold text-[#4ECDC4] uppercase tracking-widest pl-1">City</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Mumbai" 
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/40 border border-transparent text-[#0F2942] text-sm font-semibold focus:bg-white/90 focus:outline-none focus:border-[#70C1D6] transition-colors shadow-sm placeholder:text-[#0F2942]/30"
                  />
                </div>
              </div>
 
              {/* Row 4: Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-extrabold text-[#4ECDC4] uppercase tracking-widest pl-1">Your Message</label>
                <textarea 
                  rows={3} 
                  required 
                  placeholder="How can we help you today?" 
                  className="w-full px-5 py-4 rounded-2xl bg-white/40 border border-transparent text-[#0F2942] text-sm font-semibold focus:bg-white/90 focus:outline-none focus:border-[#70C1D6] transition-colors shadow-sm placeholder:text-[#0F2942]/30 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full mt-2 py-4 rounded-2xl bg-[#4ECDC4] text-white font-black text-sm tracking-widest uppercase hover:bg-[#3dbcb3] active:scale-[0.98] transition-colors duration-200 shadow-md flex items-center justify-center gap-3 group"
              >
                <span>Send Message</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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