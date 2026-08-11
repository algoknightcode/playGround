'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

interface ContactFormProps {
  productName?: string;
  className?: string;
}

export default function ContactForm({ productName = '', className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    product: productName,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your inquiry has been submitted successfully.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      product: productName,
      message: ''
    });
  };

  return (
    <div id="contact-form-section" className={`bg-[#EAF8F9] border-3 border-[#2D3436] rounded-[2.5rem] p-8 md:p-12 shadow-[8px_8px_0px_0px_#2D3436] relative overflow-hidden ${className}`}>
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

      <div className="max-w-3xl mx-auto relative z-10 font-quicksand">
        <div className="text-center mb-8">
          <span className="bg-[#FF6B6B] text-white text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full shadow-xs inline-flex items-center gap-2">
            <Mail className="w-4 h-4" />
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#2D3436] tracking-tight mt-3 flex items-center justify-center gap-2.5">
            <span>Have Questions About This Product?</span>
            <MessageSquare className="w-7 h-7 text-[#FF6B6B] hidden sm:inline-block" />
          </h2>
          <p className="text-gray-600 font-semibold text-sm md:text-base mt-2">
            Send us a quick message and our ToyPark support team will get back to you right away!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-black text-[#2D3436] uppercase tracking-wider mb-2">
                YOUR FULL NAME *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Sarah Jenkins"
                className="w-full bg-white border-2 border-[#2D3436] rounded-2xl px-4 py-3 text-sm font-bold text-[#2D3436] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C4B5] shadow-[2px_2px_0px_0px_#2D3436]"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-[#2D3436] uppercase tracking-wider mb-2">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. sarah@example.com"
                className="w-full bg-white border-2 border-[#2D3436] rounded-2xl px-4 py-3 text-sm font-bold text-[#2D3436] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C4B5] shadow-[2px_2px_0px_0px_#2D3436]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-black text-[#2D3436] uppercase tracking-wider mb-2">
                PHONE / WHATSAPP NUMBER
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full bg-white border-2 border-[#2D3436] rounded-2xl px-4 py-3 text-sm font-bold text-[#2D3436] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C4B5] shadow-[2px_2px_0px_0px_#2D3436]"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-[#2D3436] uppercase tracking-wider mb-2">
                INTERESTED PRODUCT
              </label>
              <input
                type="text"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                placeholder="e.g. Wondear Dolls Dreamhouse Play Tent"
                className="w-full bg-white border-2 border-[#2D3436] rounded-2xl px-4 py-3 text-sm font-bold text-[#2D3436] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C4B5] shadow-[2px_2px_0px_0px_#2D3436]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-[#2D3436] uppercase tracking-wider mb-2">
              YOUR MESSAGE OR SPECIAL REQUEST *
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Ask about bulk orders, delivery times, or custom sizes..."
              className="w-full bg-white border-2 border-[#2D3436] rounded-2xl px-4 py-3 text-sm font-bold text-[#2D3436] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C4B5] shadow-[2px_2px_0px_0px_#2D3436]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-black text-base uppercase tracking-wider py-4 rounded-2xl border-2 border-[#2D3436] shadow-[4px_4px_0px_0px_#2D3436] hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            SEND INQUIRY NOW
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </button>
        </form>
      </div>
    </div>
  );
}
