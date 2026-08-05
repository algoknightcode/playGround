'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Roma',
    role: 'DEVELOPER',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'Tortor pretium viverra suspendisse potenti nullam ac. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. elementum et est nec, ultrices lobortis est. Pellentesque habitant morbi tristique senectus et netus et malesuada.',
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'PRESCHOOL TEACHER',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'Awesome quality toys! My kids absolutely love playing with the wooden blocks and creative sets every single day. Highly recommend to all parents!',
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'PRODUCT DESIGNER',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'The design aesthetic and safety standards are unmatched. Beautiful colors, sturdy build, and endless imaginative play for our little dreamers.',
  },
];

export const ClientTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <div className="relative w-full bg-[#FFFFFF] py-16 sm:py-24 px-6 md:px-12 font-sans antialiased overflow-hidden select-none">
      
      {/* ═══ MAIN LAYOUT ═══ */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: Section Header */}
        <div className="lg:col-span-5 relative flex flex-col justify-between h-full">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#2D3436]/70 block mb-2">
              TOP REVIEWS
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2D3436] tracking-tight mb-4">
              Client Testimonials
            </h2>
            <p className="text-[#636E72] text-base sm:text-lg leading-relaxed max-w-md mb-8">
              Commodo viverra maecenas accumsan lacus vel facilisis volutpat. vulputate dignissim suspendisse.
            </p>
          </div>
 
          {/* Interactive Pagination Dots */}
          <div className="flex items-center gap-2 mb-6">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => swiperRef?.slideTo(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === idx 
                    ? 'w-8 h-3 bg-[#4ECDC4]' 
                    : 'w-3 h-3 bg-[#2D3436]/30 hover:bg-[#2D3436]/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
 
        {/* RIGHT COLUMN: Purple Card with Swiper and Floating SVGs */}
        <div className="lg:col-span-7 relative">
          
          {/* Playful Giraffe SVG standing at the card's edge */}
          <motion.div 
            animate={{ x: [-6, 6, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-16 bottom-0 z-20 pointer-events-none hidden sm:block"
          >
            <svg className="w-28 sm:w-32 h-auto drop-shadow-md" viewBox="0 0 100 160" fill="none">
              {/* Legs */}
              <rect x="26" y="110" width="6" height="45" rx="3" fill="#D8BE9A" />
              <rect x="38" y="110" width="6" height="45" rx="3" fill="#C5AA85" />
              <rect x="62" y="110" width="6" height="45" rx="3" fill="#D8BE9A" />
              <rect x="72" y="110" width="6" height="45" rx="3" fill="#C5AA85" />
 
              {/* Body */}
              <ellipse cx="50" cy="100" rx="30" ry="20" fill="#E8D2B4" />
              {/* Giraffe Spots */}
              <circle cx="38" cy="105" r="4.5" fill="#4ECDC4" opacity="0.6" />
              <circle cx="48" cy="90" r="3" fill="#4ECDC4" opacity="0.6" />
              <circle cx="60" cy="102" r="4" fill="#4ECDC4" opacity="0.6" />
              <circle cx="55" cy="112" r="3.5" fill="#4ECDC4" opacity="0.6" />
 
              {/* Neck */}
              <path d="M28,95 C30,50 35,25 45,15 L58,18 C48,30 42,55 42,95 Z" fill="#E8D2B4" />
              {/* Mane */}
              <path d="M44,15 C40,25 38,40 32,60 M42,20 C38,30 36,45 30,65" stroke="#F4A261" strokeWidth="4" strokeLinecap="round" />
 
              {/* Head */}
              <ellipse cx="52" cy="15" rx="12" ry="8" fill="#E8D2B4" />
              {/* Snout */}
              <ellipse cx="62" cy="16" rx="6" ry="5" fill="#F4A261" />
              {/* Eye */}
              <circle cx="52" cy="12" r="1.5" fill="#2D3436" />
              {/* Ears / Horns */}
              <line x1="45" y1="10" x2="42" y2="3" stroke="#2D3436" strokeWidth="2" strokeLinecap="round" />
              <circle cx="41" cy="2" r="2" fill="#F4A261" />
 
              {/* Tail */}
              <path d="M78,100 Q88,105 85,115" stroke="#E8D2B4" strokeWidth="3" fill="none" />
              {/* Giraffe Spot on tail */}
              <circle cx="85" cy="115" r="3" fill="#F4A261" />
            </svg>
          </motion.div>
 
          {/* Main Purple Testimonial Card */}
          <div className="relative bg-[#4ECDC4] text-white rounded-[2.5rem] p-6 sm:p-10 shadow-2xl overflow-hidden border-4 border-white/20 min-h-[320px] flex items-center justify-center">
            
            {/* --- FLOATING DECORATIVE SVGS ON CARD --- */}
            
            {/* 1. Top Left Dotted Cloud SVG */}
            <div className="absolute top-4 left-6 w-12 h-8 text-white/40 pointer-events-none">
              <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4">
                <path d="M20,50 C10,50 0,40 0,28 C0,15 15,8 30,10 C40,0 65,0 75,12 C88,12 100,20 100,32 C100,45 85,50 70,50 Z" />
              </svg>
            </div>

            {/* 2. Top Middle Flying Red Car SVG */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-4 left-[50%] -translate-x-1/2 z-20 pointer-events-none opacity-80"
            >
              <svg className="w-16 h-12 text-[#FF6B6B]" viewBox="0 0 100 60" fill="currentColor">
                <path d="M15,35 L25,18 C28,12 35,10 50,10 L70,10 C80,10 85,15 88,25 L95,35 C98,35 100,40 100,45 L100,50 C100,52 98,55 95,55 L85,55 C85,48 78,42 70,42 C62,42 55,48 55,55 L35,55 C35,48 28,42 20,42 C12,42 5,48 5,55 L0,55 L0,45 C0,40 5,35 15,35 Z" />
                <circle cx="20" cy="52" r="7" fill="#FFE66D" stroke="#2D3436" strokeWidth="2" />
                <circle cx="70" cy="52" r="7" fill="#FFE66D" stroke="#2D3436" strokeWidth="2" />
                <rect x="32" y="16" width="18" height="15" rx="3" fill="#FFFFFF" opacity="0.8" />
                <rect x="54" y="16" width="20" height="15" rx="3" fill="#FFFFFF" opacity="0.8" />
              </svg>
            </motion.div>

            {/* 3. Top Right Smiling Sun SVG */}
            <motion.div 
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-4 right-32 z-20 pointer-events-none opacity-80"
            >
              <svg className="w-14 h-14 text-[#FFE66D]" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="20" />
                {/* Sun Rays */}
                <path d="M50,10 L50,22 M50,78 L50,90 M10,50 L22,50 M78,50 L90,50 M22,22 L30,30 M70,70 L78,78 M22,78 L30,70 M70,30 L78,22" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                {/* Face */}
                <circle cx="43" cy="46" r="2.5" fill="#2D3436" />
                <circle cx="57" cy="46" r="2.5" fill="#2D3436" />
                <path d="M44,55 Q50,60 56,55" stroke="#2D3436" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* 4. Top Far Right Rainbow with Clouds SVG */}
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-6 right-6 z-20 pointer-events-none opacity-80"
            >
              <svg className="w-16 h-12" viewBox="0 0 100 70" fill="none">
                <path d="M10,60 A40,40 0 0,1 90,60" stroke="#FF6B6B" strokeWidth="5" strokeLinecap="round" />
                <path d="M20,60 A30,30 0 0,1 80,60" stroke="#FFE66D" strokeWidth="5" strokeLinecap="round" />
                <path d="M30,60 A20,20 0 0,1 70,60" stroke="#4ECDC4" strokeWidth="5" strokeLinecap="round" />
                <circle cx="12" cy="58" r="10" fill="#FFFFFF" />
                <circle cx="88" cy="58" r="10" fill="#FFFFFF" />
              </svg>
            </motion.div>

            {/* 5. Bottom Solid White Cloud SVG */}
            <motion.div 
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-4 left-[54%] z-20 pointer-events-none opacity-50"
            >
              <svg className="w-12 h-8 text-white" viewBox="0 0 100 60" fill="currentColor">
                <path d="M20,50 C10,50 0,40 0,28 C0,15 15,8 30,10 C40,0 65,0 75,12 C88,12 100,20 100,32 C100,45 85,50 70,50 Z" />
              </svg>
            </motion.div>

            {/* 6. Bottom Right Smiling Star SVG */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-6 right-8 z-20 pointer-events-none text-[#D8BE9A]"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                {/* Face */}
                <circle cx="10" cy="12" r="1" fill="#2D3436" />
                <circle cx="14" cy="12" r="1" fill="#2D3436" />
                <path d="M10.5,15 Q12,17 13.5,15" stroke="#2D3436" strokeWidth="1" fill="none" />
              </svg>
            </motion.div>

            <Swiper
              onSwiper={setSwiperRef}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              modules={[Autoplay]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="w-full"
            >
              {testimonialsData.map((t) => (
                <SwiperSlide key={t.id}>
                  <div className="flex flex-col md:flex-row items-center gap-8 px-2 py-4">
                    
                    {/* --- CARD LEFT COLUMN: AVATAR & NAME --- */}
                    <div className="flex flex-col items-center text-center space-y-3 min-w-[140px]">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white/40 shadow-lg">
                        <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-white tracking-wide">{t.name}</h3>
                        <p className="text-xs font-bold text-white/70 tracking-widest uppercase">{t.role}</p>
                      </div>
                    </div>

                    {/* Middle Dashed Separator Line */}
                    <div className="hidden md:block w-0.5 h-36 border-r-2 border-dashed border-white/30 mx-2" />

                    {/* --- CARD RIGHT COLUMN: RATING & QUOTE --- */}
                    <div className="flex-1 space-y-3 text-left">
                      {/* 5 Playful Wobbling Stars */}
                      <div className="flex items-center gap-1 text-white">
                        {[...Array(t.rating)].map((_, i) => (
                          <motion.svg
                            key={i}
                            animate={{
                              scale: [1, 1.15, 0.95, 1.1, 1],
                              rotate: [0, 10, -10, 5, 0]
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: i * 0.2
                            }}
                            className="w-5 h-5 fill-[#FFE66D]"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </motion.svg>
                        ))}
                      </div>

                      <p className="text-white/95 text-sm sm:text-base leading-relaxed font-normal">
                        &quot;{t.quote}&quot;
                      </p>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ClientTestimonials;
