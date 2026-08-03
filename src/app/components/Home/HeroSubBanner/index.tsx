'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const HeroSubBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#FEF9F0] py-6 md:py-8 px-4 sm:px-6 font-sans select-none">
      <div className="max-w-[96vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* Left Card (hero7) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group overflow-hidden rounded-[1.8rem] border-4 border-[#2D3436] cursor-pointer aspect-[16/7]"
        >
          <img 
            src="/assets/heroSubBanner/hero7.webp" 
            alt="Toy Park Showcase Left" 
            className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700"
          />
        </motion.div>

        {/* Right Card (hero8) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative group overflow-hidden rounded-[1.8rem] border-4 border-[#2D3436] cursor-pointer aspect-[16/7]"
        >
          <img 
            src="/assets/heroSubBanner/hero8.webp" 
            alt="Toy Park Showcase Right" 
            className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSubBanner;
