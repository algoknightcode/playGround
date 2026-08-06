'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroTextSection: React.FC = () => {
  return (
    <section className="relative min-h-[48vh] flex items-center w-full overflow-hidden py-6 md:py-8 font-quicksand">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/playground.webp" 
          alt="Toy Park Playground Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Left Content Container */}
        <div className="w-full lg:w-[55%] flex flex-col gap-6 text-white items-start">
          
          <div className="flex flex-col gap-3 items-start">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#00A7C4] text-white text-xs font-black tracking-widest px-3.5 py-1.5 rounded-full uppercase border-2 border-white"
            >
              Toy Park Play
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#2D3436]"
            >
              Creating Happy <br />
              Spaces For Children
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#08B7AC] font-black tracking-wide"
            >
              Premium Indian Manufacturing
            </motion.p>
          </div>

          {/* Solid Teal Card (No blur, no shadow, solid borders) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#08B7AC] p-6 sm:p-8 rounded-3xl border-4 border-[#2D3436] flex flex-col gap-5 text-white max-w-xl"
          >
            <p className="text-base sm:text-lg leading-relaxed font-bold">
              Here at <strong className="text-[#FFE66D] font-black">Toy Park</strong>, we aim to provide high-quality manufacturing with our toys, setups, Playground equipment, etc. This equipment helps in shaping young minds with motor skills, cognition, and creativity while having fun!
            </p>
            <div className="w-full h-px bg-[#2D3436]/40" />
            <p className="text-sm sm:text-base leading-relaxed font-bold text-white/90">
              Our designs are safe, innovative, and diverse to suit the requirements of every age group.
            </p>
          </motion.div>

          {/* Action Buttons (No shadow, solid borders) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <button className="bg-[#0093D3] hover:bg-[#007bb3] text-white text-xs sm:text-sm font-black tracking-wider px-6 py-3.5 rounded-full uppercase border-2 border-white cursor-pointer transition-colors">
              Explore Playground
            </button>
            <button className="bg-[#FFE66D] hover:bg-[#e6cf5c] text-black text-xs sm:text-sm font-black tracking-wider px-6 py-3.5 rounded-full uppercase border-2 border-[#2D3436] cursor-pointer transition-colors">
              View Catalog
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroTextSection;
