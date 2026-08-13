'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Sparkles, ShieldCheck, Wrench, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';

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
    url: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop&q=75',
    title: 'Interactive Wooden Learning Blocks',
    description: 'Vibrant non-toxic organic dyed Montessori building blocks that nurture spatial thinking and fine motor skills.',
    tags: ['Learning', 'Montessori', 'Blocks', 'Non-Toxic'],
    category: 'Learning'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1566454544259-f4b94c96758f?w=600&auto=format&fit=crop&q=75',
    title: 'Adventure Climber & Play Slide',
    description: 'All-weather modular indoor/outdoor slide unit engineered for smooth playdates and active coordination.',
    tags: ['Slide', 'Active', 'Climber', 'EN71 Certified'],
    category: 'Active Play'
  },
];

interface GalleryProps {
  items: GalleryItem[];
  index: number | undefined;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export function AccordionGallery({ items, setIndex, index }: GalleryProps) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Hardware-accelerated auto scroll active card into view on mobile
  useEffect(() => {
    if (index !== undefined && itemRefs.current[index]) {
      itemRefs.current[index]?.scrollIntoView({
        behavior: 'auto',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [index]);

  const showcaseItems = items.slice(0, 5);
  const currentIndex = index ?? 0;

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : showcaseItems.length - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < showcaseItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Accordion Horizontal Container */}
      <div className="mx-auto flex w-full max-w-6xl justify-start sm:justify-center gap-1.5 sm:gap-4 py-4 sm:py-8 overflow-x-auto scrollbar-hide px-3 sm:px-6 snap-x snap-mandatory">
        {showcaseItems.map((item, i) => {
          const isActive = index === i;

          return (
            <div
              key={item.id ?? item.title}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              onClick={() => setIndex(i)}
              onMouseEnter={() => setIndex(i)}
              className={`relative h-[360px] sm:h-[420px] md:h-[480px] shrink-0 overflow-hidden rounded-2xl sm:rounded-[2.5rem] border-2 sm:border-3 border-[#2D3436] shadow-[4px_4px_0px_0px_#2D3436] sm:shadow-[6px_6px_0px_0px_#2D3436] transition-[width] duration-300 ease-out cursor-pointer snap-center active:scale-[0.98] ${
                isActive ? 'w-[64vw] max-w-[280px] sm:max-w-none sm:w-[460px] md:w-[560px]' : 'w-[34px] sm:w-[75px] md:w-[90px]'
              }`}
            >
              <Image
                src={item.url}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 65vw, (max-width: 1024px) 500px, 560px"
                className="object-cover"
                draggable={false}
              />

              {/* Active Overlay Content */}
              <article
                className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#2D3436]/95 via-[#2D3436]/50 to-transparent p-3.5 sm:p-6 md:p-8 text-white transition-all duration-300 ${
                  isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                {item.category && (
                  <span className="bg-[#FFE66D] text-[#2D3436] text-[10px] md:text-xs font-black tracking-widest uppercase px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full w-fit mb-2 border border-[#2D3436]">
                    {item.category}
                  </span>
                )}
                <h3 className="text-base sm:text-xl md:text-2xl font-black tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1 sm:mt-2 text-[11px] sm:text-xs md:text-sm text-gray-200 font-medium leading-relaxed max-w-md line-clamp-3 sm:line-clamp-none">
                  {item.description}
                </p>

                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-4">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="bg-white/20 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>

              {/* Inactive Vertical Label Overlay */}
              {!isActive && (
                <div className="absolute inset-0 bg-black/40 hover:bg-transparent transition-colors flex items-center justify-center">
                  <span className="text-white font-black text-[11px] sm:text-sm md:text-base uppercase tracking-widest rotate-90 whitespace-nowrap opacity-90 select-none">
                    {item.title}
                  </span>
                </div>
              )}
            </div>
          );
        })}

        {/* Trailing spacer so the 4th & 5th items never get cut off at the right screen edge */}
        <div className="w-10 sm:w-0 shrink-0 select-none pointer-events-none" aria-hidden="true" />
      </div>

      {/* Mobile Next / Prev Controls & Indicators */}
      <div className="flex items-center justify-between w-full max-w-xs px-4 pb-2 pt-1 sm:hidden text-[#2D3436]">
        <button
          type="button"
          onClick={handlePrev}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436] active:scale-95 transition-transform"
          aria-label="Previous item"
        >
          <ChevronLeft className="w-5 h-5 text-[#2D3436]" />
        </button>

        {/* Slide Dots Indicator */}
        <div className="flex items-center gap-1.5">
          {showcaseItems.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === i
                  ? 'w-6 h-2.5 bg-[#FF5722]'
                  : 'w-2.5 h-2.5 bg-[#2D3436]/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFE66D] border-2 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436] active:scale-95 transition-transform"
          aria-label="Next item"
        >
          <ChevronRight className="w-5 h-5 text-[#2D3436]" />
        </button>
      </div>
    </div>
  );
}

export default function GalleryPageContent() {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Background Clouds (CSS Animated on Desktop, hidden on mobile) */}
      <div className="hidden sm:block absolute top-6 left-4 md:left-12 w-32 md:w-48 opacity-30 pointer-events-none z-0 animate-cloud-left">
        <Image
          src="/assets/cloud-svgrepo-com.svg"
          alt=""
          width={192}
          height={120}
          aria-hidden="true"
        />
      </div>
      <div className="hidden sm:block absolute top-10 right-4 md:right-16 w-36 md:w-52 opacity-30 pointer-events-none z-0 animate-cloud-right">
        <Image
          src="/assets/cloud-svgrepo-com.svg"
          alt=""
          width={208}
          height={130}
          aria-hidden="true"
        />
      </div>

      {/* Playful Hero Intro Banner */}
      <div className="text-center max-w-4xl mx-auto px-4 pt-6 sm:pt-10 pb-3 relative z-10">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#FFE66D] text-[#2D3436] text-[10px] sm:text-xs font-black tracking-widest uppercase px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436] mb-3 sm:mb-5">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6B6B]" />
          <span>ToyPark Interactive Showcase</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#2D3436] tracking-tight leading-tight">
          Where Imagination Meets <span className="text-[#FF5722] relative inline-block">Playful Innovation<span className="absolute left-0 bottom-1 w-full h-2.5 sm:h-3 bg-[#FFE66D]/60 -z-10 rounded-sm"></span></span>
        </h1>
        
        <p className="text-gray-600 font-semibold text-xs sm:text-base md:text-lg mt-3 sm:mt-5 max-w-2xl mx-auto leading-relaxed">
          Step into the magical world of ToyPark! From custom playhouses and ergonomic kids furniture to active trampolines and safety-certified Montessori toys.
        </p>

        {/* Quick Trust Highlights Pill Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-5 sm:mt-7 text-xs sm:text-sm font-black text-[#2D3436]">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl border-2 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436]">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00C4B5]" />
            <span>100% Non-Toxic &amp; BIS Certified</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl border-2 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436]">
            <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6B6B]" />
            <span>Handcrafted Quality</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl border-2 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436]">
            <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#9B59B6]" />
            <span>Easy 5-Min Assembly</span>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <AccordionGallery items={items} index={index} setIndex={setIndex} />
      </div>

      <style jsx>{`
        @keyframes cloudLeft {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(60px); }
        }
        @keyframes cloudRight {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-70px); }
        }
        .animate-cloud-left { animation: cloudLeft 18s ease-in-out infinite; }
        .animate-cloud-right { animation: cloudRight 22s ease-in-out infinite; }
      `}</style>
    </div>
  );
}