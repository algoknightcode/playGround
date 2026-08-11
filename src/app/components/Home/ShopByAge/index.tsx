'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AgeCategory {
  id: number;
  label: string;
  subLabel: string;
  color: string;
  pathD: string;
  link: string;
}

// 5-pointed blobby star SVG path definition
const STAR_BLOB_PATH = "M65 8.5C69.3 2.1 78.7 2.1 83 8.5L92.2 22.3C94.4 25.6 98.4 27.2 102.2 26.2L118.2 22.1C125.7 20.2 132.3 26.8 130.4 34.3L126.3 50.3C125.3 54.1 126.9 58.1 130.2 60.3L144 69.5C150.4 73.8 150.4 83.2 144 87.5L130.2 96.7C126.9 98.9 125.3 102.9 126.3 106.7L130.4 122.7C132.3 130.2 125.7 136.8 118.2 134.9L102.2 130.8C98.4 129.8 94.4 131.4 92.2 134.7L83 148.5C78.7 154.9 69.3 154.9 65 148.5L55.8 134.7C53.6 131.4 49.6 129.8 45.8 130.8L29.8 134.9C22.3 136.8 15.7 130.2 17.6 122.7L21.7 106.7C22.7 102.9 21.1 98.9 17.8 96.7L4 87.5C-2.4 83.2-2.4 73.8 4 69.5L17.8 60.3C21.1 58.1 22.7 54.1 21.7 50.3L17.6 34.3C15.7 26.8 22.3 20.2 29.8 22.1L45.8 26.2C49.6 27.2 53.6 25.6 55.8 22.3L65 8.5Z";

const AGE_CATEGORIES: AgeCategory[] = [
  {
    id: 1,
    label: '0-3',
    subLabel: 'years',
    color: '#00C4B5', // Vibrant Cyan / Teal
    pathD: STAR_BLOB_PATH,
    link: '/#contact',
  },
  {
    id: 2,
    label: '4-5',
    subLabel: 'years',
    color: '#FF4081', // Playful Hot Pink
    pathD: STAR_BLOB_PATH,
    link: '/#contact',
  },
  {
    id: 3,
    label: '6-7',
    subLabel: 'years',
    color: '#00A859', // Fresh Green
    pathD: STAR_BLOB_PATH,
    link: '/#contact',
  },
  {
    id: 4,
    label: '8-9',
    subLabel: 'years',
    color: '#FF3B30', // Energetic Coral Red
    pathD: STAR_BLOB_PATH,
    link: '/#contact',
  },
  {
    id: 5,
    label: '10-11',
    subLabel: 'years',
    color: '#0277BD', // Deep Ocean Blue
    pathD: STAR_BLOB_PATH,
    link: '/#contact',
  },
  {
    id: 6,
    label: '12+',
    subLabel: 'years',
    color: '#FF8F00', // Sunburst Orange
    pathD: STAR_BLOB_PATH,
    link: '/#contact',
  },
];

export default function ShopByAge() {
  return (
    <section className="py-6 bg-white font-quicksand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Section Title Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 max-w-2xl mx-auto"
        >
          <span className="bg-[#FFE66D] text-[#2D3436] text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full border-2 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436] inline-block mb-3">
            AGE-BASED DISCOVERY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D3436] tracking-tight leading-tight">
            Shop by <span className="text-[#00C4B5] underline decoration-wavy decoration-[#FF4081]">Age</span>
          </h2>
          <p className="text-gray-500 font-semibold text-sm sm:text-base mt-3 leading-relaxed">
            Find the perfect toys, furniture, and play equipment tailored specifically for your child’s developmental stage.
          </p>
        </motion.div>

        {/* 6 Blobby Star Cards Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-2">
          {AGE_CATEGORIES.map((cat, idx) => (
            <motion.a
              key={cat.id}
              href={cat.link}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ 
                scale: 1.15,
                rotate: 6,
                transition: { type: 'spring', stiffness: 350, damping: 15 }
              }}
              whileTap={{ scale: 0.95 }}
              className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center cursor-pointer group select-none"
            >
              {/* SVG Blobby Star Background */}
              <svg 
                viewBox="0 0 148 157" 
                className="w-full h-full drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300"
              >
                <path 
                  d={cat.pathD} 
                  fill={cat.color} 
                />
              </svg>

              {/* Text Label inside Blob Star */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
                <span className="text-2xl sm:text-3xl font-black tracking-tight drop-shadow-sm leading-none">
                  {cat.label}
                </span>
                <span className="text-xs sm:text-sm font-bold opacity-90 mt-1 uppercase tracking-wider">
                  {cat.subLabel}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
