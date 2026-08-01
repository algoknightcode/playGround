'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Cloud, Box, Star, Rocket } from 'lucide-react';

interface ToyCategory {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  overlayLabel: string;
  accentBg: string;
}

const categories: ToyCategory[] = [
  {
    id: 1,
    title: 'Creativity & Imagination',
    subtitle: 'Easels, Drawers & Playhouses',
    description: 'Art stations and play spaces that spark endless childhood imagination.',
    image: '/assets/ToysEveryNeed/kids1.webp',
    overlayLabel: '| Creativity',
    accentBg: 'bg-[#FEF3C7]/60 border-amber-200/80',
  },
  {
    id: 2,
    title: 'Balance & Coordination',
    subtitle: 'Swings, Boards & Active Play',
    description: 'Indoor swings and rockers designed to develop core stability.',
    image: '/assets/ToysEveryNeed/kids2.webp',
    overlayLabel: '| Balance',
    accentBg: 'bg-[#E0F2FE]/60 border-sky-200/80',
  },
  {
    id: 3,
    title: 'Fine Motor Skills',
    subtitle: 'Slides, Blocks & Towers',
    description: 'Slides and stacking sets built to hone hand-eye coordination.',
    image: '/assets/ToysEveryNeed/kids3.webp',
    overlayLabel: '| Motor Skills',
    accentBg: 'bg-[#D1FAE5]/60 border-emerald-200/80',
  },
  {
    id: 4,
    title: 'Cognitive Development',
    subtitle: 'Puzzles & Memory Kits',
    description: 'Engaging brain puzzles tailored for early childhood problem solving.',
    image: '/assets/ToysEveryNeed/kids4.webp',
    overlayLabel: '| Cognitive',
    accentBg: 'bg-[#EDE9FE]/60 border-purple-200/80',
  },
  {
    id: 5,
    title: 'Sensory Exploration',
    subtitle: 'Tactile Kits & Soft Play',
    description: 'Textured exploration kits designed for safe tactile discovery.',
    image: '/assets/ToysEveryNeed/kids5.webp',
    overlayLabel: '| Sensory',
    accentBg: 'bg-[#FFE4E6]/60 border-rose-200/80',
  },
];

// Duplicate list for infinite marquee loop
const marqueeItems = [...categories, ...categories];

export const ToysForEveryNeed: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative w-full py-12 bg-[#FAF6F0] text-slate-800 select-none overflow-hidden">
      
      {/* ═══ ANIMATED BACKGROUND CHILDISH ELEMENTS ═══ */}
      
      {/* 1. Wiggling Hot Air Balloon (Top Right) */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-6 right-8 z-0 hidden lg:flex flex-col items-center opacity-80 pointer-events-none"
      >
        <div className="w-10 h-12 bg-[#F472B6] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-sm border border-white flex items-center justify-center">
          <div className="w-2 h-4 bg-white/40 rounded-full -ml-3 -mt-2 blur-[0.5px]" />
        </div>
        <div className="w-1.5 h-2 bg-[#FDE68A] rounded-xs mt-0.5" />
      </motion.div>

      {/* 2. Floating Cloud (Top Left) */}
      <motion.div 
        animate={{ x: [0, 16, 0], y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-8 left-6 z-0 hidden md:flex items-center justify-center p-2.5 bg-white/80 backdrop-blur-xs rounded-full border border-sky-100 shadow-xs text-sky-400 opacity-80 pointer-events-none"
      >
        <Cloud className="w-6 h-6 stroke-[2]" />
      </motion.div>

      {/* 3. Floating Toy Block (Bottom Left) */}
      <motion.div 
        animate={{ y: [0, 10, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-5 left-6 z-0 hidden md:flex items-center justify-center p-2.5 bg-[#FDE68A]/70 backdrop-blur-xs rounded-2xl border border-amber-200/60 text-amber-700 opacity-80 pointer-events-none"
      >
        <Box className="w-6 h-6 stroke-[2.5]" />
      </motion.div>

      {/* 4. Twinkling Star (Top Center-Left) */}
      <motion.div 
        animate={{ scale: [1, 1.25, 1], rotate: [0, 20, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-1/3 z-0 hidden lg:flex text-amber-400 pointer-events-none"
      >
        <Star className="w-5 h-5 fill-amber-300 stroke-amber-400" />
      </motion.div>

      {/* 5. Floating Rocket (Bottom Right) */}
      <motion.div 
        animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 right-8 z-0 hidden md:flex items-center justify-center p-2.5 bg-rose-100/80 rounded-2xl border border-rose-200 text-rose-500 opacity-80 pointer-events-none"
      >
        <Rocket className="w-6 h-6 stroke-[2]" />
      </motion.div>

      {/* ═══ CENTERED HEADER ═══ */}
      <div className="max-w-2xl mx-auto text-center px-4 mb-10 space-y-2 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE7D8] border border-amber-200/60 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Made for Joy & Growth</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 tracking-tight flex items-center justify-center gap-3">
          <span>Toys for Every Need</span>
          
          {/* ANIMATED WAVING TEDDY BEAR */}
          <motion.span
            className="inline-block origin-bottom-right cursor-pointer"
            animate={{ rotate: [0, 16, -10, 16, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            🧸
          </motion.span>
        </h2>
        
        <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed max-w-lg mx-auto">
          Explore play collections crafted to nurture creativity, movement, and essential developmental skills.
        </p>
      </div>

      {/* ═══ TRUE EDGE-TO-EDGE MARQUEE (PAUSES ON HOVER) ═══ */}
      <style>{`
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-scroll {
          animation: scroll-marquee 40s linear infinite;
        }
        .marquee-container:hover .marquee-scroll {
          animation-play-state: paused;
        }
      `}</style>
      <div className="relative w-full overflow-hidden py-2 my-2 marquee-container">
        <div className="flex gap-6 w-max marquee-scroll">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[280px] sm:w-[320px] lg:w-[340px] flex-shrink-0 group"
            >
              {/* Card Container */}
              <div className="bg-[#FFFDF8] border-2 border-[#F0E6D8] rounded-[1.8rem] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all duration-300 group-hover:shadow-[0_14px_30px_rgba(2,132,199,0.12)] group-hover:border-sky-300 group-hover:-translate-y-1">
                
                {/* Image Container with object-contain */}
                <div className={`relative w-full h-44 sm:h-48 rounded-[1.3rem] overflow-hidden border ${item.accentBg} p-3 mb-3 flex items-center justify-center`}>
                  
                  

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain transform group-hover:scale-108 transition-transform duration-500 ease-out drop-shadow-xs"
                  />
                </div>

                {/* Card Info & Shop Now Button */}
                <div className="space-y-3 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">
                      {item.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-sky-600 transition-colors duration-200 leading-snug mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* 100% VISIBLE SHOP NOW BUTTON */}
                  <button className="w-full mt-2 py-3 px-4 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] active:bg-[#075985] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all duration-200 group/btn">
                    <span>SHOP NOW</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5] transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ToysForEveryNeed;