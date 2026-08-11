'use client';

import React from 'react';
import UpperFooter from '@/app/components/Home/UpperFooter'; // Adjust path if needed

export default function PartnerPage() {


  return (
    <main className="min-h-screen bg-[#F7FDFF] text-[#0F2942] font-sans overflow-x-hidden selection:bg-[#4ECDC4] selection:text-white">
      
      {/* ═══ TOP HERO SECTION ═══ */}
      <section className="relative pt-20 pb-8 md:pt-28 md:pb-12 px-6 sm:px-12 max-w-7xl mx-auto">
        
        {/* Playful Floating Background Accents */}
        <div className="absolute top-10 left-5 text-[#70C1D6] opacity-40 text-2xl select-none animate-bounce">✦</div>
        <div className="absolute top-24 right-10 text-[#70C1D6] opacity-50 text-xl select-none">✦</div>
        <div className="absolute bottom-10 left-1/3 text-[#4ECDC4] opacity-30 text-3xl select-none">✦</div>

        <div className="flex flex-col items-center text-center max-w-5xl mx-auto relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#BDECF0]/50 border border-[#70C1D6]/30 text-[#0F2942] text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-6 shadow-sm animate-pulse">
            <span>✨</span> Partnership Program <span>✨</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0F2942] leading-[1.15] mb-6">
            Let’s Build Something <br className="hidden sm:inline" />
            <span className="text-[#4ECDC4] relative inline-block">
              Extraordinary
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#BDECF0]" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,5 Q50,12 100,5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
              </svg>
            </span> Together
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl font-medium text-[#0F2942]/80 max-w-2xl leading-relaxed mb-6">
            Whether you are a retailer, brand collaborator, or distributor — we empower our partners with world-class support, co-marketing, and scalable growth.
          </p>
        </div>

      </section>

      {/* ═══ CONTACT FORM (Using UpperFooter - Full Width) ═══ */}
      <div id="contact" className="w-full relative">
        <UpperFooter className="mt-4 md:mt-8" />
      </div>

      

      {/* ═══ WHY PARTNER WITH US (BENEFITS) ═══ */}
      <section id="benefits" className="py-16 md:py-24 px-6 sm:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-extrabold text-[#4ECDC4] uppercase tracking-widest">Built For Success</span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0F2942] mt-2">Everything You Need To Grow</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-[#F7FDFF] border border-[#BDECF0] hover:border-[#70C1D6] transition-all duration-300 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#BDECF0] text-[#0F2942] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                🚀
              </div>
              <h3 className="text-2xl font-black text-[#0F2942] mb-3">Co-Marketing & Growth</h3>
              <p className="text-sm font-semibold text-[#0F2942]/70 leading-relaxed">
                Gain access to featured campaigns, exclusive digital assets, and joint promotional events to maximize audience reach.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-[#F7FDFF] border border-[#BDECF0] hover:border-[#70C1D6] transition-all duration-300 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#BDECF0] text-[#0F2942] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                🤝
              </div>
              <h3 className="text-2xl font-black text-[#0F2942] mb-3">Dedicated Support</h3>
              <p className="text-sm font-semibold text-[#0F2942]/70 leading-relaxed">
                Work directly with a designated partner manager to streamline onboarding, communication, and order fulfillment.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-[#F7FDFF] border border-[#BDECF0] hover:border-[#70C1D6] transition-all duration-300 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#BDECF0] text-[#0F2942] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 className="text-2xl font-black text-[#0F2942] mb-3">Flexible Terms</h3>
              <p className="text-sm font-semibold text-[#0F2942]/70 leading-relaxed">
                Custom commercial arrangements, priority inventory allocation, and tailored packages for high-volume partners.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}