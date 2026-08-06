'use client';

import React, { useState, useRef } from 'react';
import { ChevronDown, Mail, Phone, Search, Heart, ArrowRight, LayoutGrid, Shapes, Armchair } from 'lucide-react';
import { LiquidButton } from '../ui/buttonUi';

export default function KidzaNavbar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <header className="w-full font-quicksand relative">
      
      {/* ═══ 1. CYAN TOP BAR ═══ */}
      <div className="relative bg-[#62C4D2] text-white text-sm sm:text-base px-6 lg:px-12 pt-2.5 pb-4 z-20">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left Text */}
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span>Kindergarten is an early childhood educational environment</span>
            <a href="#learn-more" className="underline font-bold hover:text-gray-200 transition-colors ml-1">
              Learn More
            </a>
          </div>

          {/* Right Info Items */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/95 font-medium">
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors">
              <Mail className="w-5 h-5 stroke-[2.5]" />
              {/* Exact spelling from the image */}
              <span>kidza@gmial.com</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors">
              <Phone className="w-5 h-5 stroke-[2.5]" />
              <span>+00 (47) 939 4888</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors">
              <span>Graaf Floriss 22A CH NY</span>
            </div>
          </div>

        </div>

        {/* Seamless Scalloped Wave Overlay bridging top bar & nav using the wavy design PNG */}
        <div className="absolute left-0 right-0 -bottom-3 sm:-bottom-4 w-full h-6 sm:h-8 overflow-hidden leading-none z-20 pointer-events-none">
          <div 
            className="w-full h-full bg-[#62C4D2]"
            style={{
              WebkitMaskImage: "url('/assets/navbar/wavy%20design%20.png')",
              maskImage: "url('/assets/navbar/wavy%20design%20.png')",
              WebkitMaskSize: '100% 100%',
              maskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'bottom center',
              maskPosition: 'bottom center',
            }}
          />
        </div>
      </div>

      {/* ═══ 2. MAIN WHITE NAVBAR ═══ */}
      <nav className="bg-white px-6 lg:px-12 pt-3.5 pb-3 flex items-center justify-between relative z-10">
        
        <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between">
          
          {/* LEFT: Logo & Categories */}
          <div className="flex items-center gap-7 relative">
            
            {/* ToyPark Logo */}
            <a href="/" className="flex items-center gap-2 cursor-pointer">
              <img 
                src="/assets/ToyPark_logo.png" 
                alt="ToyPark Logo" 
                className="h-13 sm:h-16 md:h-18 w-auto object-contain max-w-[240px] transform hover:scale-105 transition-transform" 
              />
            </a>

            {/* Categories Button with Dropdown */}
            <div className="relative hidden md:block" ref={dropdownRef}>
              <button 
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center gap-2.5 border-2 border-[#94A3B8]/60 rounded-full px-5 py-2.5 hover:bg-black/5 transition-colors text-[#334155] focus:outline-none"
              >
                <LayoutGrid className="w-5 h-5 text-[#f97316]" />
                <span className="font-bold text-base">Categories</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Categories Dropdown Menu */}
              {isCategoriesOpen && (
                <div className="absolute left-0 mt-2.5 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <a 
                    href="#toys" 
                    onClick={() => setIsCategoriesOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-base font-bold text-gray-700 hover:bg-[#F6F7F0] hover:text-[#f97316] transition-colors rounded-xl mx-2"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#f97316]/10 flex items-center justify-center text-[#f97316]">
                      <Shapes className="w-4 h-4" />
                    </div>
                    <span>1. Toys</span>
                  </a>
                  <a 
                    href="#furniture" 
                    onClick={() => setIsCategoriesOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-base font-bold text-gray-700 hover:bg-[#F6F7F0] hover:text-[#f97316] transition-colors rounded-xl mx-2"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#62C4D2]/15 flex items-center justify-center text-[#62C4D2]">
                      <Armchair className="w-4 h-4" />
                    </div>
                    <span>2. Furniture</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* CENTER: Navigation Links */}
          <div className="hidden xl:flex items-center gap-9">
            {['Home', 'Pages', 'Programs', 'Blog', 'Shop'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="flex items-center gap-1.5 font-extrabold text-[#334155] hover:text-[#62C4D2] transition-colors text-base sm:text-lg"
              >
                {link}
                <ChevronDown className="w-4.5 h-4.5" />
              </a>
            ))}
          </div>

          {/* RIGHT: Actions (Search, Wishlist/Heart, All Products) */}
          <div className="flex items-center gap-4">
            
            {/* Search Icon */}
            <button className="w-12 h-12 rounded-full border-2 border-[#94A3B8]/60 flex items-center justify-center text-[#334155] hover:bg-black/5 transition-colors">
              <Search className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Wishlist Heart Icon */}
            <button className="w-12 h-12 rounded-full border-2 border-[#94A3B8]/60 flex items-center justify-center text-[#334155] hover:bg-black/5 transition-colors">
              <Heart className="w-5 h-5 stroke-[2]" />
            </button>

            {/* All Products Liquid Button */}
            <LiquidButton className="px-6 py-3 text-sm sm:text-base">
              <span>All Products</span>
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </LiquidButton>
            
          </div>
        </div>
      </nav>

    </header>
  );
}