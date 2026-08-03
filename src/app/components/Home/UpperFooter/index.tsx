'use client';

import React from 'react';

const instagramPhotos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=600&q=80',
    alt: 'Toddler playing with ring stacker',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    alt: 'Mother and baby smiling together',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80',
    alt: 'Baby playing with colorful building blocks',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80',
    alt: 'Baby sitting happily',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
    alt: 'Toddler walking in nursery room',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=600&q=80',
    alt: 'Baby playing with toys on carpet',
  },
];

export const UpperFooter: React.FC = () => {
  return (
    <div className="relative w-full bg-[#FEF9F0] overflow-hidden font-sans antialiased">
      
      {/* ═══ COMBINED TEAL AND PURPLE SCALLOP WAVES ═══ */}
      <div className="relative w-full leading-none z-10 -mb-1">
        <svg 
          className="w-full h-24 sm:h-36 md:h-48 block" 
          viewBox="0 0 1440 200" 
          preserveAspectRatio="none"
        >
          {/* TEAL WAVE */}
          <path 
            d="M0,80 C60,40 140,30 200,60 C260,90 320,120 400,90 C480,60 540,20 620,40 C700,60 760,110 840,90 C920,70 980,20 1060,40 C1140,60 1220,100 1300,70 C1380,40 1420,50 1440,60 L1440,200 L0,200 Z" 
            fill="#70C1D6" 
          />
          {/* PURPLE WAVE (Flipped horizontally so curves alternate beautifully) */}
          <g transform="translate(1440, 0) scale(-1, 1)">
            <path 
              d="M0,100 C70,50 150,40 220,80 C290,120 360,140 440,100 C520,60 590,30 670,60 C750,90 820,130 900,100 C980,70 1050,30 1130,60 C1210,90 1290,120 1370,90 C1410,75 1430,80 1440,85 L1440,200 L0,200 Z" 
              fill="#6C4AB6" 
            />
          </g>
        </svg>
      </div>

      {/* ═══ MAIN PURPLE SECTION ═══ */}
      <div className="relative w-full bg-[#6C4AB6] text-white pt-2 pb-12 px-4 sm:px-8 z-30">
        
        {/* Centered Instagram Handle Tag */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            @Cutie Site
          </h2>
        </div>

        {/* 6 Photo Grid Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {instagramPhotos.map((photo) => (
            <div 
              key={photo.id}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border-2 border-white/20 group cursor-pointer"
            >
              <img 
                src={photo.url} 
                alt={photo.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white">
                  ✨
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default UpperFooter;
