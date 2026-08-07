'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Heart, Check, Truck, ShieldCheck, ArrowRight, Minus, Plus, Mail, MessageSquare } from 'lucide-react';
import PlayfulHeader from '../../components/Navbar';
import Footer2 from '../../components/Footer2';

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    '/assets/split_vantage_images/kids_playsHouse.png',
    '/assets/split_vantage_images/Kids_Furniture.png',
    '/assets/split_vantage_images/Kids_Trampoline.png'
  ];

  return (
    <div className="min-h-screen bg-white font-quicksand text-[#2D3436] flex flex-col justify-between">
      <PlayfulHeader />

      <div className="max-w-[1440px] mx-auto py-10 px-4 sm:px-6 lg:px-10 w-full flex-1">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-8 uppercase tracking-wider">
          <Link href="/" className="hover:text-[#00C4B5] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#00C4B5] transition-colors">Products</Link>
          <span>/</span>
          <span className="text-[#2D3436]">Wondear Dolls Dreamhouse</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* 1. LEFT COLUMN: Image Gallery (Sticky) */}
          <div className="lg:col-span-4 flex flex-col gap-4 lg:sticky lg:top-28 self-start">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full h-[380px] md:h-[460px] bg-[#EAF8F9] rounded-[2.5rem] border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex items-center justify-center p-6 relative overflow-hidden"
            >
              <div className="absolute top-5 left-5 bg-[#FF6B6B] text-white px-3.5 py-1.5 rounded-full text-xs font-black uppercase shadow-sm">
                Ages 3-6
              </div>
              <motion.img
                key={activeImage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                src={images[activeImage]}
                alt="Product"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto py-2 scrollbar-hide">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 rounded-2xl flex-shrink-0 flex items-center justify-center p-2 transition-all cursor-pointer ${
                    activeImage === idx 
                      ? 'border-2 border-[#00C4B5] shadow-md bg-[#FFE66D]/30 scale-105' 
                      : 'border border-gray-200 bg-gray-50 hover:border-[#00C4B5]'
                  }`}
                >
                  <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* 2. MIDDLE COLUMN: Main Product Details & Specs */}
          <div className="lg:col-span-5 flex flex-col py-2">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4 text-[#2D3436]">
                Wondear Dolls Dreamhouse Play Tent
              </h1>
              
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center text-[#FFB800]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-500">(156 Parent Reviews)</span>
              </div>

              <div className="flex items-end gap-3 mb-6">
                <span className="text-4xl font-black text-[#00C4B5]">$85.00</span>
                <span className="text-xl font-bold text-gray-400 line-through mb-1">$110.00</span>
              </div>

              <p className="text-gray-600 font-semibold text-base md:text-lg leading-relaxed mb-6">
                Transform any room into a magical kingdom! Built with 100% breathable, non-toxic materials perfect for roleplay and active imagination.
              </p>
            </div>

            {/* Quick Features Checklist */}
            <div className="border-t-2 border-dashed border-gray-200 py-6 mb-6">
              <ul className="space-y-3">
                {['100% Safe & Non-Toxic Materials', 'Easy 5-Minute Assembly', 'Enhances Creative Roleplay'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 font-extrabold text-sm md:text-base text-[#2D3436]">
                    <div className="w-6 h-6 rounded-full bg-[#A7F3D0] text-[#00C4B5] flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Area */}
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex gap-4">
                {/* Enquiry Button */}
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#contact';
                    }
                  }}
                  className="flex-1 bg-[#FF6B6B] text-white font-black text-base tracking-wider uppercase rounded-2xl shadow-md hover:bg-[#ff5252] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 px-6 py-4 cursor-pointer whitespace-nowrap"
                >
                  Enquiry Now
                  <ArrowRight className="w-5 h-5 stroke-[3]" />
                </button>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/?text=Hi%20ToyPark!%20I'm%20interested%20in%20Wondear%20Dolls%20Dreamhouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-base tracking-wider uppercase rounded-2xl shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 px-6 py-4 cursor-pointer whitespace-nowrap"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* KEY SPECIFICATIONS TABLE */}
            <div className="bg-[#F4F9FF] border border-[#D0E2FF] rounded-3xl overflow-hidden shadow-xs">
              <div className="bg-[#E5F0FF] px-6 py-4 border-b border-[#D0E2FF] flex items-center justify-between">
                <h3 className="text-sm font-black text-[#1E3A8A] uppercase tracking-wider">Key Specifications</h3>
                <span className="text-xs font-bold bg-[#3B82F6] text-white px-3 py-1 rounded-full">Official Specs</span>
              </div>
              <div className="divide-y divide-[#E2E8F0] text-sm md:text-base">
                <div className="grid grid-cols-2 px-6 py-4 font-medium">
                  <span className="font-bold text-[#334155]">Storage Capacity</span>
                  <span className="text-[#0F172A] font-extrabold">12 L</span>
                </div>
                <div className="grid grid-cols-2 px-6 py-4 font-medium bg-white/50">
                  <span className="font-bold text-[#334155]">Mounting Type</span>
                  <span className="text-[#0F172A] font-extrabold">Wall Mounted / Free</span>
                </div>
                <div className="grid grid-cols-2 px-6 py-4 font-medium">
                  <span className="font-bold text-[#334155]">Usage / Application</span>
                  <span className="text-[#0F172A] font-extrabold">Creative & Active Play</span>
                </div>
                <div className="grid grid-cols-2 px-6 py-4 font-medium bg-white/50">
                  <span className="font-bold text-[#334155]">Material</span>
                  <span className="text-[#0F172A] font-extrabold">ABS Plastic & Birch Wood</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. STICKY TOYPARK BRANDING & TRUST SIDEBAR WITH GIRAFFE */}
          <div className="lg:col-span-3 lg:sticky lg:top-28 self-start z-10 w-full ml-auto">
            <div className="bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-[2rem] p-6 shadow-md relative overflow-hidden flex flex-col gap-6">
              
              {/* Floating Decorative Giraffe in Top Right Corner */}
              <img 
                src="/assets/clouds/giraffe-svgrepo-com.svg" 
                alt="Giraffe Mascot" 
                className="absolute -top-1 -right-1 w-16 h-16 pointer-events-none drop-shadow-sm rotate-6 z-10"
              />

              {/* Top Logo & Header Header */}
              <div className="border-b border-gray-200/80 pb-5">
                <img 
                  src="/assets/clean_logo_toypark.webp" 
                  alt="ToyPark Logo" 
                  className="h-14 w-auto object-contain mb-3"
                />
                <h3 className="text-2xl font-black text-[#FF5722] tracking-tight uppercase leading-none">
                  TOYPARK
                </h3>
                <p className="text-sm font-bold text-gray-500 mt-1.5">
                  Authentic &amp; Premium Quality Products
                </p>
              </div>

              {/* Section 1: Why Choose ToyPark */}
              <div>
                <h4 className="text-base font-black text-[#0F172A] uppercase tracking-wider mb-3">
                  Why Choose ToyPark
                </h4>
                <ul className="space-y-3 text-sm font-bold text-gray-600">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FF5722] text-base">•</span>
                    <span>Quality-focused Indian manufacturing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FF5722] text-base">•</span>
                    <span>Reliable and consistent safety standards</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FF5722] text-base">•</span>
                    <span>Built for modern play & active learning</span>
                  </li>
                </ul>
              </div>

              {/* Section 2: About ToyPark */}
              <div className="border-t border-gray-200/80 pt-5">
                <h4 className="text-base font-black text-[#0F172A] uppercase tracking-wider mb-3">
                  About ToyPark
                </h4>
                <ul className="space-y-3 text-sm font-bold text-gray-600">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00C4B5] text-base">•</span>
                    <span>Premium product solutions & designs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00C4B5] text-base">•</span>
                    <span>Trust, EN71 & BIS certified safety</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00C4B5] text-base">•</span>
                    <span>Unwavering commitment to excellence</span>
                  </li>
                </ul>
              </div>

              {/* Direct WhatsApp Callout */}
              <a
                href="https://wa.me/?text=Hi%20ToyPark!%20I'm%20interested%20in%20Wondear%20Dolls%20Dreamhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <span>Whatsapp Us</span>
              </a>

            </div>
          </div>

        </div>

        {/* ═══ DETAILED DESCRIPTION & FEATURE CARDS SECTION ═══ */}
        <div className="mt-16 pt-10 border-t-2 border-dashed border-gray-200">
          
          {/* 1. Full Rich Description Article First */}
          <div className="bg-[#F9FAFB] border border-gray-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm font-medium text-gray-700 leading-relaxed space-y-6 mb-16">
            <h3 className="text-2xl md:text-3xl font-black text-[#2D3436]">About Wondear Dolls Dreamhouse Play Tent</h3>
            <p className="text-base md:text-lg">
              The Wondear Dolls Dreamhouse Play Tent is designed to provide kids with their very own magical retreat right inside your home or classroom. Built with durable high-grade ABS polymer and solid natural wooden supports, it seamlessly combines stability with lightweight portability.
            </p>
            <p className="text-base md:text-lg">
              Whether used for quiet storytimes, creative house roleplaying, or interactive fun with siblings and friends, this set offers a safe, spacious interior with breathable mesh windows for constant airflow and parent visibility.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-200 flex items-start gap-3">
                <span className="text-xl">✨</span>
                <div>
                  <h4 className="font-extrabold text-[#2D3436] text-sm md:text-base mb-1">Easy Washable Fabric</h4>
                  <p className="text-xs md:text-sm text-gray-500">Fabric elements are machine-washable for hassle-free cleaning after active play sessions.</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-200 flex items-start gap-3">
                <span className="text-xl">🌱</span>
                <div>
                  <h4 className="font-extrabold text-[#2D3436] text-sm md:text-base mb-1">Eco-Friendly Materials</h4>
                  <p className="text-xs md:text-sm text-gray-500">Sustainably sourced wood and recyclable plastics crafted with environment care.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Feature Cards Section After Description */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="bg-[#FFE66D] text-[#2D3436] text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full border-2 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436]">
                Key Highlights
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#2D3436] tracking-tight mt-3">
                Crafted for Endless Joy & Safety
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-[#FDF6ED] border-3 border-[#2D3436] rounded-[2rem] p-7 shadow-[6px_6px_0px_0px_#2D3436] flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-[#FF6B6B] text-white rounded-2xl border-2 border-[#2D3436] shadow-[3px_3px_0px_0px_#2D3436] flex items-center justify-center text-2xl font-black mb-5">
                    🎨
                  </div>
                  <h3 className="text-xl font-black text-[#2D3436] mb-3">Imaginative Roleplay</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    Designed to encourage social interaction, creativity, and cognitive development through open-ended pretend play. Perfect for playdates and cozy reading nooks.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/60 font-bold text-xs text-[#FF6B6B] uppercase tracking-wider">
                  • Sparks Creativity
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-[#EAF8F9] border-3 border-[#2D3436] rounded-[2rem] p-7 shadow-[6px_6px_0px_0px_#2D3436] flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-[#4ECDC4] text-[#2D3436] rounded-2xl border-2 border-[#2D3436] shadow-[3px_3px_0px_0px_#2D3436] flex items-center justify-center text-2xl font-black mb-5">
                    🛡️
                  </div>
                  <h3 className="text-xl font-black text-[#2D3436] mb-3">Certified Kid Safety</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    Constructed with smooth rounded edges, non-toxic organic dyes, and heavy-duty reinforced joints certified under EN71 and BIS safety standards.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/60 font-bold text-xs text-[#00C4B5] uppercase tracking-wider">
                  • 100% Non-Toxic
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-[#F5EFFB] border-3 border-[#2D3436] rounded-[2rem] p-7 shadow-[6px_6px_0px_0px_#2D3436] flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-[#9B59B6] text-white rounded-2xl border-2 border-[#2D3436] shadow-[3px_3px_0px_0px_#2D3436] flex items-center justify-center text-2xl font-black mb-5">
                    🚀
                  </div>
                  <h3 className="text-xl font-black text-[#2D3436] mb-3">Quick Tool-Free Assembly</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    Includes modular interlocking components that snap together effortlessly in under 5 minutes without needing extra tools or hardware.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/60 font-bold text-xs text-[#9B59B6] uppercase tracking-wider">
                  • Modular Setup
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ═══ PRODUCT INQUIRY FORM SECTION (BEFORE FOOTER) ═══ */}
        <div id="contact" className="mt-20 bg-[#EAF8F9] border-3 border-[#2D3436] rounded-[2.5rem] p-8 md:p-12 shadow-[8px_8px_0px_0px_#2D3436] relative overflow-hidden">
          
          {/* Animated Background Floating Clouds */}
          <motion.img 
            src="/assets/cloud-svgrepo-com.svg" 
            alt="Floating Cloud 1" 
            className="absolute top-4 left-[-40px] w-32 md:w-44 opacity-35 pointer-events-none z-0"
            animate={{ x: [0, 80, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img 
            src="/assets/cloud-svgrepo-com.svg" 
            alt="Floating Cloud 2" 
            className="absolute bottom-6 right-[-20px] w-36 md:w-48 opacity-35 pointer-events-none z-0"
            animate={{ x: [0, -70, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-8">
              <span className="bg-[#FF6B6B] text-white text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full shadow-xs inline-flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#2D3436] tracking-tight mt-3 flex items-center justify-center gap-2.5">
                <span>Have Questions About This Product?</span>
                <MessageSquare className="w-7 h-7 text-[#FF6B6B] hidden sm:inline-block" />
              </h2>
              <p className="text-gray-600 font-semibold text-sm md:text-base mt-2">
                Send us a quick message and our ToyPark support team will get back to you right away!
              </p>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you! Your inquiry for Wondear Dolls Dreamhouse has been submitted successfully.');
              }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-black text-[#2D3436] uppercase tracking-wider mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-white border-2 border-[#2D3436] rounded-2xl px-4 py-3 text-sm font-bold text-[#2D3436] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C4B5] shadow-[2px_2px_0px_0px_#2D3436]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-[#2D3436] uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@example.com"
                    className="w-full bg-white border-2 border-[#2D3436] rounded-2xl px-4 py-3 text-sm font-bold text-[#2D3436] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C4B5] shadow-[2px_2px_0px_0px_#2D3436]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-black text-[#2D3436] uppercase tracking-wider mb-2">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full bg-white border-2 border-[#2D3436] rounded-2xl px-4 py-3 text-sm font-bold text-[#2D3436] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C4B5] shadow-[2px_2px_0px_0px_#2D3436]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-[#2D3436] uppercase tracking-wider mb-2">
                    Interested Product
                  </label>
                  <input
                    type="text"
                    readOnly
                    value="Wondear Dolls Dreamhouse Play Tent"
                    className="w-full bg-gray-100 border-2 border-[#2D3436] rounded-2xl px-4 py-3 text-sm font-bold text-[#2D3436] cursor-not-allowed shadow-[2px_2px_0px_0px_#2D3436]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-[#2D3436] uppercase tracking-wider mb-2">
                  Your Message or Special Request *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Ask about bulk orders, delivery times, or custom sizes..."
                  className="w-full bg-white border-2 border-[#2D3436] rounded-2xl px-4 py-3 text-sm font-bold text-[#2D3436] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C4B5] shadow-[2px_2px_0px_0px_#2D3436]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-black text-base uppercase tracking-wider py-4 rounded-2xl border-2 border-[#2D3436] shadow-[4px_4px_0px_0px_#2D3436] hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Send Inquiry Now
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </button>
            </form>
          </div>
        </div>

      </div>

      <Footer2 />
    </div>
  );
}
