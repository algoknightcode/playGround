'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Link from 'next/link';

import { Sparkles, ShieldCheck, Wrench, Rocket, Heart, Smile, Star } from 'lucide-react';
export interface GalleryItem {
  id: number;
  url: string;
  title: string;
  description: string;
  tags?: string[];
  category?: string;
}

export const items: GalleryItem[] = [
  {
    id: 1,
    url: '/assets/split_vantage_images/kids_playsHouse.png',
    title: 'Wondear Dreamhouse Play Tent',
    description: 'A magical retreat crafted with durable ABS polymer and breathable mesh windows for endless roleplay.',
    tags: ['Playhouse', 'Indoor', 'Ages 3-6', 'Roleplay'],
    category: 'Playhouses'
  },
  {
    id: 2,
    url: '/assets/split_vantage_images/Kids_Furniture.png',
    title: 'Modern Ergonomic Kids Furniture Set',
    description: 'Sustainably sourced birch wood study & activity table set designed for comfort, safety, and creative sessions.',
    tags: ['Furniture', 'Wooden', 'Activity', 'Ergonomic'],
    category: 'Furniture'
  },
  {
    id: 3,
    url: '/assets/split_vantage_images/Kids_Trampoline.png',
    title: 'Safety Enclosed Active Trampoline',
    description: 'Heavy-duty steel framed active jump arena featuring 360-degree safety netting and padded spring guards.',
    tags: ['Trampoline', 'Outdoor', 'Active Play', 'Safety Certified'],
    category: 'Active Play'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1200&auto=format',
    title: 'Interactive Wooden Learning Blocks',
    description: 'Vibrant non-toxic organic dyed Montessori building blocks that nurture spatial thinking and fine motor skills.',
    tags: ['Learning', 'Montessori', 'Blocks', 'Non-Toxic'],
    category: 'Learning'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1566454544259-f4b94c96758f?q=80&w=1200&auto=format',
    title: 'Adventure Climber & Play Slide',
    description: 'All-weather modular indoor/outdoor slide unit engineered for smooth playdates and active coordination.',
    tags: ['Slide', 'Active', 'Climber', 'EN71 Certified'],
    category: 'Active Play'
  },
];

// Parent animation variants for the content overlay
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

// Child animation variants for text stagger
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 14 },
  },
};

interface GalleryProps {
  items: GalleryItem[];
  index: number | undefined;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export function AccordionGallery({ items, setIndex, index }: GalleryProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl justify-center gap-3 md:gap-4 py-8 overflow-x-auto scrollbar-hide px-4">
      {items.slice(0, 5).map((item, i) => {
        const isActive = index === i;

        return (
          <motion.div
            key={item.id ?? item.title}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIndex(i)}
            onMouseEnter={() => setIndex(i)}
            className={`relative h-[380px] md:h-[480px] shrink-0 overflow-hidden rounded-[2.5rem] border-3 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436] transition-all duration-500 ease-out cursor-pointer ${
              isActive ? 'w-[320px] sm:w-[480px] md:w-[560px]' : 'w-[75px] md:w-[90px]'
            }`}
          >
            <img
              src={item.url}
              alt={item.title}
              className="h-full w-full object-cover"
            />

            <AnimatePresence mode="wait">
              {isActive ? (
                <motion.article
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#2D3436]/95 via-[#2D3436]/40 to-transparent p-6 md:p-8 text-white"
                >
                  {item.category && (
                    <motion.span
                      variants={itemVariants}
                      className="bg-[#FFE66D] text-[#2D3436] text-[10px] md:text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full w-fit mb-3 border border-[#2D3436]"
                    >
                      {item.category}
                    </motion.span>
                  )}
                  <motion.h3
                    variants={itemVariants}
                    className="text-xl md:text-2xl font-black tracking-tight"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    variants={itemVariants}
                    className="mt-2 text-xs md:text-sm text-gray-200 font-medium leading-relaxed max-w-md"
                  >
                    {item.description}
                  </motion.p>

                  {item.tags && (
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </motion.article>
              ) : (
                <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors flex items-center justify-center">
                  <span className="text-white font-black text-sm md:text-base uppercase tracking-widest rotate-90 whitespace-nowrap opacity-80">
                    {item.title}
                  </span>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function GalleryPageContent() {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Animated Background Clouds */}
      <motion.img
        src="/assets/cloud-svgrepo-com.svg"
        alt="Cloud 1"
        className="absolute top-6 left-4 md:left-12 w-32 md:w-48 opacity-30 pointer-events-none z-0"
        animate={{ x: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src="/assets/cloud-svgrepo-com.svg"
        alt="Cloud 2"
        className="absolute top-10 right-4 md:right-16 w-36 md:w-52 opacity-30 pointer-events-none z-0"
        animate={{ x: [0, -70, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Playful Hero Intro Banner */}
      <div className="text-center max-w-4xl mx-auto px-4 pt-10 pb-4 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#FFE66D] text-[#2D3436] text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full border-2 border-[#2D3436] shadow-[3px_3px_0px_0px_#2D3436] mb-5">
          <Sparkles className="w-4 h-4 text-[#FF6B6B]" />
          <span>ToyPark Interactive Showcase</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#2D3436] tracking-tight leading-tight">
          Where Imagination Meets <span className="text-[#FF5722] relative inline-block">Playful Innovation<span className="absolute left-0 bottom-1 w-full h-3 bg-[#FFE66D]/60 -z-10 rounded-sm"></span></span>
        </h1>
        
        <p className="text-gray-600 font-semibold text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
          Step into the magical world of ToyPark! From custom playhouses and ergonomic kids furniture to active trampolines and safety-certified Montessori toys, explore how our creations inspire joy, growth, and endless adventures in homes across India.
        </p>

        {/* Quick Trust Highlights Pill Row with Lucide Icons */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mt-7 text-xs md:text-sm font-black text-[#2D3436]">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border-2 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436]">
            <ShieldCheck className="w-4 h-4 text-[#00C4B5]" />
            <span>100% Non-Toxic &amp; BIS Certified</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border-2 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436]">
            <Wrench className="w-4 h-4 text-[#FF6B6B]" />
            <span>Handcrafted Indian Quality</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border-2 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436]">
            <Rocket className="w-4 h-4 text-[#9B59B6]" />
            <span>Easy 5-Min Assembly</span>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <AccordionGallery items={items} index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}
