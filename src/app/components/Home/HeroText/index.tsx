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
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#00A7C4] text-white text-xs font-black tracking-widest px-3.5 py-1.5 rounded-full uppercase border-2 border-white"
            >
              PLAY SCHOOL FURNITURE
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#0D1C3A] drop-shadow-xs"
            >
              Small Hands. <br />
              <span className="bg-gradient-to-r from-[#FF5A5F] via-[#FF8E53] to-[#f97316] bg-clip-text text-transparent">Big Ideas.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#08B7AC] font-black tracking-wide flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFE66D] border border-white" />
              Premium Indian-Made Toys &amp; Play Spaces
            </motion.p>
          </div>

          {/* Solid Teal Card (No blur, no shadow, solid borders) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#08B7AC] p-6 sm:p-8 rounded-3xl border-4 border-white flex flex-col gap-5 text-white max-w-xl"
          >
            <p className="text-base sm:text-lg leading-relaxed font-bold">
              We make the kind of products kids can’t wait to play with—and businesses can count on. Thoughtful designs, dependable quality, and products built to bring more colour, creativity, and play into everyday spaces.
            </p>
            <div className="w-full h-px bg-white/40" />
            <p className="text-sm sm:text-base leading-relaxed font-bold text-white/90">
              For retailers, schools, daycares, activity centers, and wholesale partners.
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
              Explore Products
            </button>
            <button className="bg-[#FFE66D] hover:bg-[#e6cf5c] text-black text-xs sm:text-sm font-black tracking-wider px-6 py-3.5 rounded-full uppercase border-2 border-white cursor-pointer transition-colors">
              Let’s Work Together
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroTextSection;
