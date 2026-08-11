'use client';

import React from 'react';
import ContactForm from '@/app/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7FDFF] text-[#0F2942] font-quicksand overflow-x-hidden selection:bg-[#4ECDC4] selection:text-white">
      
      {/* ═══ TOP HERO SECTION ═══ */}
      <section className="relative pt-16 pb-8 md:pt-20 md:pb-10 px-6 sm:px-12 max-w-7xl mx-auto">
        
        {/* Playful Floating Background Accents */}
        <div className="absolute top-10 left-5 text-[#70C1D6] opacity-40 text-2xl select-none animate-bounce">✦</div>
        <div className="absolute top-24 right-10 text-[#70C1D6] opacity-50 text-xl select-none">✦</div>
        <div className="absolute bottom-10 left-1/3 text-[#4ECDC4] opacity-30 text-3xl select-none">✦</div>

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#BDECF0]/50 border border-[#70C1D6]/30 text-[#0F2942] text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-6 shadow-sm">
            <span>💬</span> We'd Love To Hear From You <span>💬</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0F2942] leading-[1.15] mb-6">
            Contact <span className="text-[#FF6B6B]">ToyPark</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl font-medium text-[#0F2942]/80 max-w-2xl leading-relaxed mb-4">
            Have questions about our products, bulk inquiries, or custom orders? Reach out to us anytime and we'll respond promptly!
          </p>
        </div>

      </section>

      {/* ═══ SIDE-BY-SIDE CONTENT: CARDS ON LEFT, FORM ON RIGHT ═══ */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: CONTACT CARDS (Stacked vertical list on desktop) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            
            {/* Phone Card */}
            <div className="bg-white border-2 border-[#2D3436] p-6 rounded-3xl shadow-[4px_4px_0px_0px_#2D3436] flex items-center gap-4 hover:-translate-y-0.5 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-[#FFE66D] text-[#0F2942] flex items-center justify-center shrink-0 border-2 border-[#2D3436]">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-sm font-black text-[#2D3436] uppercase tracking-wider mb-0.5">Call / WhatsApp</h3>
                <p className="text-sm sm:text-base font-bold text-gray-700">+91 98765 43210</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white border-2 border-[#2D3436] p-6 rounded-3xl shadow-[4px_4px_0px_0px_#2D3436] flex items-center gap-4 hover:-translate-y-0.5 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-[#FF6B6B] text-white flex items-center justify-center shrink-0 border-2 border-[#2D3436]">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-sm font-black text-[#2D3436] uppercase tracking-wider mb-0.5">Email Us</h3>
                <p className="text-sm sm:text-base font-bold text-gray-700">support@toypark.com</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white border-2 border-[#2D3436] p-6 rounded-3xl shadow-[4px_4px_0px_0px_#2D3436] flex items-center gap-4 hover:-translate-y-0.5 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-[#4ECDC4] text-[#0F2942] flex items-center justify-center shrink-0 border-2 border-[#2D3436]">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-sm font-black text-[#2D3436] uppercase tracking-wider mb-0.5">Location</h3>
                <p className="text-sm sm:text-base font-bold text-gray-700">Mumbai, Maharashtra, India</p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white border-2 border-[#2D3436] p-6 rounded-3xl shadow-[4px_4px_0px_0px_#2D3436] flex items-center gap-4 hover:-translate-y-0.5 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-[#BDECF0] text-[#0F2942] flex items-center justify-center shrink-0 border-2 border-[#2D3436]">
                <Clock className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-sm font-black text-[#2D3436] uppercase tracking-wider mb-0.5">Working Hours</h3>
                <p className="text-sm sm:text-base font-bold text-gray-700">Mon - Sat: 9 AM - 7 PM</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: MAIN CONTACT FORM */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

        </div>
      </section>

    </main>
  );
}
