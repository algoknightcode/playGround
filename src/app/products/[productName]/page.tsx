'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Heart, Check, Truck, ShieldCheck, ArrowRight, Minus, Plus } from 'lucide-react';
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

      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-12 w-full flex-1">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-8 uppercase tracking-wider">
          <Link href="/" className="hover:text-[#00C4B5] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#00C4B5] transition-colors">Products</Link>
          <span>/</span>
          <span className="text-[#2D3436]">Wondear Dolls Dreamhouse</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: Image Gallery (Sticky) */}
          <div className="lg:col-span-6 flex flex-col gap-4 lg:sticky lg:top-24 self-start">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full h-[400px] md:h-[550px] bg-[#EAF8F9] rounded-[2.5rem] border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex items-center justify-center p-8 relative overflow-hidden"
            >
              <div className="absolute top-6 left-6 bg-[#FF6B6B] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase shadow-sm">
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
            <div className="flex gap-4 overflow-x-auto py-2 scrollbar-hide">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-24 h-24 rounded-2xl flex-shrink-0 flex items-center justify-center p-2 transition-all ${
                    activeImage === idx 
                      ? 'border-2 border-[#00C4B5] shadow-md bg-[#FFE66D]/30' 
                      : 'border border-gray-200 bg-gray-50 hover:border-[#00C4B5]'
                  }`}
                >
                  <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Information */}
          <div className="lg:col-span-6 flex flex-col py-4">
            
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4 text-[#2D3436]">
                Wondear Dolls Dreamhouse Play Tent
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-[#FFB800]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-500">(156 Parent Reviews)</span>
              </div>

              <div className="flex items-end gap-3 mb-6">
                <span className="text-4xl font-black text-[#00C4B5]">$85.00</span>
                <span className="text-lg font-bold text-gray-400 line-through mb-1">$110.00</span>
              </div>

              <p className="text-gray-600 font-medium text-lg leading-relaxed mb-8">
                Transform any room into a magical kingdom! This beautifully crafted, ergonomic playhouse is built with 100% breathable, non-toxic materials perfect for roleplay and imagination.
              </p>
            </div>

            <div className="border-t-2 border-dashed border-gray-200 py-8 space-y-6">
              {/* Features List */}
              <ul className="space-y-3">
                {['100% Safe & Non-Toxic Materials', 'Easy 5-Minute Assembly', 'Enhances Creative Roleplay'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-[#2D3436]">
                    <div className="w-6 h-6 rounded-full bg-[#A7F3D0] text-[#00C4B5] flex items-center justify-center">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Area */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 mt-4">
              {/* Quantity Selector */}
              <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2 w-full sm:w-40 shadow-sm">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:text-[#FF6B6B]">
                  <Minus className="w-5 h-5 stroke-[3]" />
                </button>
                <span className="font-black text-xl">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:text-[#00C4B5]">
                  <Plus className="w-5 h-5 stroke-[3]" />
                </button>
              </div>

              {/* Enquiry Now Button */}
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
                className="flex-1 bg-[#FF6B6B] text-white font-black text-lg tracking-widest uppercase rounded-2xl shadow-lg hover:bg-[#ff5252] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 px-8 py-4 cursor-pointer"
              >
                Enquiry Now
                <ArrowRight className="w-6 h-6 stroke-[3]" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-[#E8FAF8] rounded-xl border border-[#B2EDE6]">
                <Truck className="w-8 h-8 text-[#00C4B5]" />
                <div className="flex flex-col">
                  <span className="font-black text-sm text-[#1F4E4B]">Free Shipping</span>
                  <span className="text-xs font-bold text-[#4A8C88]">On orders over $50</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-[#FFF0F3] rounded-xl border border-[#FFE4E6]">
                <ShieldCheck className="w-8 h-8 text-[#FF6B6B]" />
                <div className="flex flex-col">
                  <span className="font-black text-sm text-[#881337]">BIS Certified</span>
                  <span className="text-xs font-bold text-[#BE123C]">100% Safe for Kids</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer2 />
    </div>
  );
}