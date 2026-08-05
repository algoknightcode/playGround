'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';

interface ToyCardData {
  cat: string;
  age: string;
  sub: string;
  title: string;
  desc: string;
  img: string;
  fallback: string;
  emoji: string;
  stars: string;
  reviews: string;
}

const cards: ToyCardData[] = [
  { 
    cat: 'Creativity', 
    age: '3–8 yrs', 
    sub: 'Easels, Drawers & Playhouses', 
    title: 'Creativity & Imagination', 
    desc: 'Art stations and play spaces that spark endless childhood imagination.', 
    img: '/assets/ToysEveryNeed/kids1.webp', 
    fallback: '#b2ede6', 
    emoji: '🎨', 
    stars: '★★★★★', 
    reviews: '(2.4k)' 
  },
  { 
    cat: 'Balance', 
    age: '2–6 yrs', 
    sub: 'Swings, Boards & Active Play', 
    title: 'Balance & Coordination', 
    desc: 'Indoor swings and rockers designed to develop core stability.', 
    img: '/assets/ToysEveryNeed/kids2.webp', 
    fallback: '#7de8f4', 
    emoji: '⚖️', 
    stars: '★★★★★', 
    reviews: '(1.8k)' 
  },
  { 
    cat: 'Motor Skills', 
    age: '1–5 yrs', 
    sub: 'Slides, Blocks & Towers', 
    title: 'Fine Motor Skills', 
    desc: 'Slides and stacking sets built to hone hand-eye coordination.', 
    img: '/assets/ToysEveryNeed/kids3.webp', 
    fallback: '#a7f3d0', 
    emoji: '🧱', 
    stars: '★★★★☆', 
    reviews: '(3.1k)' 
  },
  { 
    cat: 'Cognitive', 
    age: '4–10 yrs', 
    sub: 'Puzzles & Memory Kits', 
    title: 'Cognitive Development', 
    desc: 'Engaging brain puzzles tailored for early childhood problem solving.', 
    img: '/assets/ToysEveryNeed/kids4.webp', 
    fallback: '#c4b5fd', 
    emoji: '🧩', 
    stars: '★★★★★', 
    reviews: '(980)' 
  },
  { 
    cat: 'Sensory', 
    age: '0–3 yrs', 
    sub: 'Tactile Kits & Soft Play', 
    title: 'Sensory Exploration', 
    desc: 'Textured exploration kits designed for safe tactile discovery.', 
    img: '/assets/ToysEveryNeed/kids5.webp', 
    fallback: '#fca5a5', 
    emoji: '🌈', 
    stars: '★★★★★', 
    reviews: '(1.2k)' 
  },
];

// Double it for a continuous loop marquee
const doubledCards = [...cards, ...cards, ...cards];

export default function ToysEveryNeed() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 bg-gradient-to-br from-[#e8faf8] via-[#cff4f8] to-[#dffaf7] font-quicksand">
      
      {/* ═══ BLURRY BACKGROUND BLOBS ═══ */}
      <div aria-hidden className="absolute -top-20 -left-16 w-[280px] h-[280px] bg-[#22d3e8]/18 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden className="absolute -bottom-16 -right-10 w-[200px] h-[200px] bg-[#2cbfb3]/18 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden className="absolute top-[40%] right-[5%] w-[120px] h-[120px] bg-[#7de8f4]/18 rounded-full blur-2xl pointer-events-none" />

      {/* ═══ FLOATING BOBBING MASCOTS (LEFT & RIGHT) ═══ */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none z-10">
        {/* Left Mascot */}
        <motion.div
          animate={{ y: [0, -24, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[10%] left-[8%] sm:left-[12%] md:left-[18%] lg:left-[24%] bg-[#b2ede6]/40 w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-xs p-2"
        >
          <img src="/assets/icons/icon_mastcoff.avif" className="w-full h-full object-contain" alt="Left Mascot Avatar" />
        </motion.div>

        {/* Right Mascot */}
        <motion.div
          animate={{ y: [0, -24, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute top-[8%] right-[8%] sm:right-[12%] md:right-[18%] lg:right-[24%] bg-[#a7f3d0]/40 w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-xs p-2"
        >
          <img src="/assets/icons/icon_mastcoff2.avif" className="w-full h-full object-contain" alt="Right Mascot Avatar" />
        </motion.div>
      </div>

      {/* ═══ SECTION HEADER ═══ */}
      <div className="relative text-center px-4 mb-10 z-20">
        <div className="inline-flex items-center gap-1.5 bg-white/75 border border-[#70d9ce] rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-wider text-[#1f4e4b] uppercase mb-4.5 backdrop-blur-xs">
          <span className="w-1.5 h-1.5 bg-[#2cbfb3] rounded-full animate-ping" />
          Made for joy & growth
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0d2b2a] tracking-tight mb-2.5">
          Toys for <span className="text-[#1a9e93]">Every</span> Need
        </h2>
        
        <p className="text-sm text-[#4a8c88] max-w-[420px] mx-auto leading-relaxed">
          Play collections crafted to nurture creativity, movement, and essential developmental milestones.
        </p>
      </div>

      {/* ═══ INFINITE MARQUEE SLIDER ═══ */}
      <div className="marquee-wrap relative overflow-hidden py-3 z-20">
        
        {/* Left/Right Gradients for soft fading edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#e8faf8] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#dffaf7] to-transparent z-10 pointer-events-none" />

        <div className="flex w-full select-none">
          <motion.div
            className="flex gap-5 pr-5"
            animate={{ x: [0, '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 38,
            }}
          >
            {doubledCards.map((card, idx) => (
              <div
                key={idx}
                className="toy-card w-[270px] shrink-0 bg-white/95 border border-[#b2ede6] rounded-[24px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_20px_48px_-8px_rgba(28,180,170,0.22)] hover:border-[#2cbfb3] cursor-pointer relative backdrop-blur-xs group"
              >
                {/* Card Image Wrapper */}
                <div className="w-full h-[190px] relative overflow-hidden bg-slate-100">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-107"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = card.fallback;
                        const fallbackDiv = document.createElement('div');
                        fallbackDiv.style.position = 'absolute';
                        fallbackDiv.style.inset = '0';
                        fallbackDiv.style.display = 'flex';
                        fallbackDiv.style.alignItems = 'center';
                        fallbackDiv.style.justifyContent = 'center';
                        fallbackDiv.style.fontSize = '56px';
                        fallbackDiv.innerHTML = card.emoji;
                        parent.appendChild(fallbackDiv);
                      }
                    }}
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 z-10 bg-white/90 border border-[#2cbfb3]/40 rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-wider text-[#1f4e4b] backdrop-blur-xs uppercase">
                    {card.cat}
                  </div>
                  
                  {/* Age Badge */}
                  <div className="absolute top-3 right-3 z-10 bg-[#2cbfb3] rounded-full px-2.5 py-0.5 text-[10px] font-extrabold text-white">
                    {card.age}
                  </div>

                  {/* Soft bottom vignette overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-[#0d2b2a]/50 to-transparent pointer-events-none" />
                </div>

                {/* Card Content Body */}
                <div className="p-4.5 flex flex-col">
                  <span className="text-[10px] font-extrabold text-[#1a9e93] tracking-widest uppercase mb-1 block">
                    {card.sub}
                  </span>
                  
                  <h3 className="text-[15px] font-extrabold text-[#0d2b2a] leading-snug mb-1.5">
                    {card.title}
                  </h3>

                  {/* Stars & Reviews */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="text-[#f59e0b] text-xs tracking-wider font-sans">
                      {card.stars}
                    </span>
                    <span className="text-[11px] font-semibold text-[#4a8c88]">
                      {card.reviews}
                    </span>
                  </div>

                  <p className="text-xs text-[#4a8c88] leading-relaxed mb-4 line-clamp-3 font-medium">
                    {card.desc}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-[#2cbfb3] hover:bg-[#1a9e93] text-white border-none rounded-[14px] py-2.5 text-xs font-bold tracking-wider flex items-center justify-center gap-1.5 uppercase transition-all active:scale-98">
                      <span>Shop now</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>
                    
                    <button className="w-[38px] h-[38px] rounded-[14px] border border-[#b2ede6] bg-transparent flex items-center justify-center text-[#2cbfb3] hover:bg-[#e0f7f4] hover:text-[#e11d48] transition-all flex-shrink-0 group/wish">
                      <Heart className="w-4 h-4 fill-transparent stroke-current group-hover/wish:fill-[#e11d48] group-hover/wish:stroke-[#e11d48] transition-colors" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* ═══ CLOUD SHAPE BOTTOM DIVIDER ═══ */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg 
          className="relative block w-full h-[40px] sm:h-[60px]" 
          viewBox="0 0 283.5 25" 
          preserveAspectRatio="none" 
        >
          <path 
            className="fill-white" 
            d="M265.8 3.5c-10.9 0-15.9 6.2-15.9 6.2s-3.6-3.5-9.2-.9c-9.1 4.1-4.4 13.4-4.4 13.4s-1.2.2-1.9.9c-.6.7-.5 1.9-.5 1.9s-1-.5-2.3-.2c-1.3.3-1.6 1.4-1.6 1.4s.4-3.4-1.5-5c-3.9-3.4-8.3-.2-8.3-.2s-.6-.7-.9-.9c-.4-.2-1.2-.2-1.2-.2s-4.4-3.6-11.5-2.6-10.4 7.9-10.4 7.9-.5-3.3-3.9-4.9c-4.8-2.4-7.4 0-7.4 0s2.4-4.1-1.9-6.4-6.2 1.2-6.2 1.2-.9-.5-2.1-.5-2.3 1.1-2.3 1.1.1-.7-1.1-1.1c-1.2-.4-2 0-2 0s3.6-6.8-3.5-8.9c-6-1.8-7.9 2.6-8.4 4-.1-.3-.4-.7-.9-1.1-1-.7-1.3-.5-1.3-.5s1-4-1.7-5.2c-2.7-1.2-4.2 1.1-4.2 1.1s-3.1-1-5.7 1.4-2.1 5.5-2.1 5.5-.9 0-2.1.7-1.4 1.7-1.4 1.7-1.7-1.2-4.3-1.2c-2.6 0-4.5 1.2-4.5 1.2s-.7-1.5-2.8-2.4c-2.1-.9-4 0-4 0s2.6-5.9-4.7-9c-7.3-3.1-12.6 3.3-12.6 3.3s-.9 0-1.9.2c-.9.2-1.5.9-1.5.9S99.4 3 94.9 3.9c-4.5.9-5.7 5.7-5.7 5.7s-2.8-5-12.3-3.9-11.1 6-11.1 6-1.2-1.4-4-.7c-.8.2-1.3.5-1.8.9-.9-2.1-2.7-4.9-6.2-4.4-3.2.4-4 2.2-4 2.2s-.5-.7-1.2-.7h-1.4s-.5-.9-1.7-1.4-2.4 0-2.4 0-2.4-1.2-4.7 0-3.1 4.1-3.1 4.1-1.7-1.4-3.6-.7c-1.9.7-1.9 2.8-1.9 2.8s-.5-.5-1.7-.2c-1.2.2-1.4.7-1.4.7s-.7-2.3-2.8-2.8c-2.1-.5-4.3.2-4.3.2s-1.7-5-11.1-6c-3.8-.4-6.6.2-8.5 1v21.2h283.5V11.1c-.9.2-1.6.4-1.6.4s-5.2-8-16.1-8z"
          />
        </svg>
      </div>
    </section>
  );
}