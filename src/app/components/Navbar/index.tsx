'use client';

import React, { useState, useRef } from 'react';
import { ChevronDown, Mail, Phone, Search, Heart, ArrowRight, LayoutGrid, Shapes, Armchair, Menu, X } from 'lucide-react';
import { LiquidButton } from '../ui/buttonUi';

export default function KidzaNavbar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <header className="w-full font-quicksand relative z-50">
      
      {/* ═══ 1. CYAN TOP BAR ═══ */}
      <div className="relative bg-[#62C4D2] text-white text-xs sm:text-sm px-4 sm:px-6 lg:px-12 pt-2 pb-3.5 sm:pb-4 z-20">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-center md:text-left">
          
          {/* Left Text */}
          <div className="flex items-center justify-center gap-1.5 font-medium tracking-wide">
            <span className="truncate max-w-[280px] sm:max-w-none">Kindergarten is an early childhood educational environment</span>
            <a href="#learn-more" className="underline font-bold hover:text-gray-200 transition-colors shrink-0">
              Learn More
            </a>
          </div>

          {/* Right Info Items (hidden on small mobile to keep top bar compact & clean) */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-white/95 font-medium text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-gray-200 transition-colors">
              <Mail className="w-4 h-4 stroke-[2.5]" />
              <span>kidza@gmial.com</span>
            </div>
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-gray-200 transition-colors">
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>+00 (47) 939 4888</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 cursor-pointer hover:text-gray-200 transition-colors">
              <span>Graaf Floriss 22A CH NY</span>
            </div>
          </div>

        </div>

        {/* Seamless Scalloped Wave Overlay */}
        <div className="absolute left-0 right-0 -bottom-3 sm:-bottom-4 w-full h-5 sm:h-8 overflow-hidden leading-none z-20 pointer-events-none">
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
      <nav className="bg-white px-4 sm:px-6 lg:px-12 pt-1.5 pb-1 flex items-center justify-between relative z-50">
        
        <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between gap-4">
          
          {/* LEFT: Logo & Categories */}
          <div className="flex items-center gap-4 lg:gap-7 relative">
            
            {/* ToyPark Logo */}
            <a href="/" className="flex items-center gap-2 cursor-pointer shrink-0">
              <img 
                src="/assets/ToyPark_logo.png" 
                alt="ToyPark Logo" 
                className="h-10 sm:h-14 md:h-18 w-auto object-contain max-w-[160px] sm:max-w-[240px] transform hover:scale-105 transition-transform" 
              />
            </a>

            {/* Categories Button with Dropdown (Desktop) */}
            <div className="relative hidden md:block" ref={dropdownRef}>
              <button 
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center gap-2.5 border-2 border-[#94A3B8]/60 rounded-full px-4 sm:px-5 py-2 hover:bg-black/5 transition-colors text-[#334155] focus:outline-none"
              >
                <LayoutGrid className="w-5 h-5 text-[#f97316]" />
                <span className="font-bold text-sm sm:text-base">Categories</span>
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

          {/* CENTER: Navigation Links (Desktop) */}
          <div className="hidden xl:flex items-center gap-8">
            
            {/* 1. About Us (Dropdown on Hover) */}
            <div className="relative group py-2">
              <a 
                href="/about" 
                className="flex items-center gap-1 font-extrabold text-[#334155] hover:text-[#62C4D2] transition-colors text-base sm:text-lg cursor-pointer"
              >
                <span>About Us</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-[#62C4D2]" />
              </a>

              <div className="absolute left-0 top-full pt-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3 pb-3 space-y-1">
                  <a href="/ourstory" className="flex items-center justify-between px-4 py-2.5 text-base font-bold text-gray-700 hover:bg-[#62C4D2]/10 hover:text-[#62C4D2] transition-colors rounded-xl">
                    <span>Our Story</span>
                  </a>
                  <a href="/whoweare" className="flex items-center justify-between px-4 py-2.5 text-base font-bold text-gray-700 hover:bg-[#62C4D2]/10 hover:text-[#62C4D2] transition-colors rounded-xl">
                    <span>Who We Are</span>
                  </a>
                  <a href="/why-choose-us" className="flex items-center justify-between px-4 py-2.5 text-base font-bold text-gray-700 hover:bg-[#62C4D2]/10 hover:text-[#62C4D2] transition-colors rounded-xl">
                    <span>Why Choose Us</span>
                  </a>
                  <a href="/careers" className="flex items-center justify-between px-4 py-2.5 text-base font-bold text-gray-700 hover:bg-[#62C4D2]/10 hover:text-[#62C4D2] transition-colors rounded-xl">
                    <span>Careers</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 2. News & Events (Dropdown on Hover) */}
            <div className="relative group py-2">
              <a 
                href="/exhibition" 
                className="flex items-center gap-1 font-extrabold text-[#334155] hover:text-[#62C4D2] transition-colors text-base sm:text-lg cursor-pointer"
              >
                <span>News & Events</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-[#62C4D2]" />
              </a>

              <div className="absolute left-0 top-full pt-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3 pb-3 space-y-1">
                  <a href="/exhibition" className="flex items-center justify-between px-4 py-2.5 text-base font-bold text-gray-700 hover:bg-[#62C4D2]/10 hover:text-[#62C4D2] transition-colors rounded-xl">
                    <span>Exhibition</span>
                  </a>
                  <a href="/blogs" className="flex items-center justify-between px-4 py-2.5 text-base font-bold text-gray-700 hover:bg-[#62C4D2]/10 hover:text-[#62C4D2] transition-colors rounded-xl">
                    <span>Blogs</span>
                  </a>
                  <a href="/certification" className="flex items-center justify-between px-4 py-2.5 text-base font-bold text-gray-700 hover:bg-[#62C4D2]/10 hover:text-[#62C4D2] transition-colors rounded-xl">
                    <span>Certification</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Gallery */}
            <a href="/gallery" className="font-extrabold text-[#334155] hover:text-[#62C4D2] transition-colors text-base sm:text-lg">
              Gallery
            </a>

            {/* 4. Contact Us */}
            <a href="/whoweare#contact" className="font-extrabold text-[#334155] hover:text-[#62C4D2] transition-colors text-base sm:text-lg">
              Contact Us
            </a>

          </div>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Search Icon */}
            <button className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-[#94A3B8]/60 flex items-center justify-center text-[#334155] hover:bg-black/5 transition-colors">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
            </button>

            {/* Wishlist Heart Icon */}
            <button className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-[#94A3B8]/60 flex items-center justify-center text-[#334155] hover:bg-black/5 transition-colors">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
            </button>

            {/* All Products Liquid Button */}
            <a href="/products" className="hidden sm:block">
              <LiquidButton className="px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-base">
                <span>All Products</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" />
              </LiquidButton>
            </a>

            {/* Mobile Hamburger Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-[#334155] hover:text-[#62C4D2] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
            </button>
            
          </div>
        </div>

        {/* ═══ MOBILE NAVIGATION DRAWER ═══ */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl p-6 space-y-4 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col space-y-3 font-bold text-gray-700 text-base">
              <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-[#62C4D2] transition-colors">Home</a>
              <a href="/about" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-[#62C4D2] transition-colors">About Us</a>
              <a href="/exhibition" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-[#62C4D2] transition-colors">News & Events</a>
              <a href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-[#62C4D2] transition-colors">Gallery</a>
              <a href="/whoweare#contact" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-[#62C4D2] transition-colors">Contact Us</a>
              <div className="pt-2">
                <a href="/products" onClick={() => setIsMobileMenuOpen(false)}>
                  <LiquidButton className="w-full justify-center py-3 text-sm">
                    <span>All Products</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </LiquidButton>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

    </header>
  );
}