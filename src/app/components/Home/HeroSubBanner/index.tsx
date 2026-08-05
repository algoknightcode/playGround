'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HeroSubBanner: React.FC = () => {
  return (
    <section className="w-full bg-white py-8 md:py-12 px-6 lg:px-12 font-fredoka select-none">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* ═══ LEFT BANNER: HALLOWEEN / TABLE SET (YELLOW) ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative group overflow-hidden rounded-[2.2rem] bg-[#FFD400] p-7 sm:p-10 flex flex-col sm:flex-row items-center justify-between min-h-[260px] sm:min-h-[290px] shadow-md hover:shadow-xl transition-all"
        >
          {/* Text Content */}
          <div className="z-10 flex-1 max-w-[280px] sm:max-w-[320px]">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B1A30] leading-[1.15] mb-2 tracking-tight">
              Kids Table &amp; Play Sets
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#0B1A30]/85 mb-6">
              Discover Amazing Offers!
            </p>
            <a
              href="#shop"
              className="inline-flex items-center gap-2 bg-[#0B1A30] text-white hover:bg-[#1E293B] font-extrabold text-sm sm:text-base px-6 py-3 rounded-full transition-all shadow-md group-hover:scale-105 active:scale-95"
            >
              <span>See Collection</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>

          {/* Right Image */}
          <div className="relative mt-6 sm:mt-0 flex-1 h-full w-full max-w-[220px] sm:max-w-[260px] flex items-center justify-center">
            <img
              src="/assets/heroSubBanner/table.png"
              alt="Kids Table Set"
              className="w-full h-auto object-contain max-h-[220px] transform group-hover:scale-108 transition-transform duration-500 drop-shadow-md"
            />
          </div>
        </motion.div>

        {/* ═══ RIGHT BANNER: CHILDREN DAY / KIDS (PINK/RED) ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative group overflow-hidden rounded-[2.2rem] bg-[#F83B58] p-7 sm:p-10 flex flex-col sm:flex-row items-center justify-between min-h-[260px] sm:min-h-[290px] shadow-md hover:shadow-xl transition-all"
        >
          {/* Text Content */}
          <div className="z-10 flex-1 max-w-[280px] sm:max-w-[320px]">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white leading-[1.15] mb-2 tracking-tight">
              Children Day Collection 2023
            </h2>
            <p className="text-sm sm:text-base font-semibold text-white/90 mb-6">
              15% Off on Kids&apos; Toys and Gifts!
            </p>
            <a
              href="#shop"
              className="inline-flex items-center gap-2 bg-white text-[#F83B58] hover:bg-slate-50 font-extrabold text-sm sm:text-base px-6 py-3 rounded-full transition-all shadow-md group-hover:scale-105 active:scale-95"
            >
              <span>See Collection</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>

          {/* Right Image */}
          <div className="relative mt-6 sm:mt-0 flex-1 h-full w-full max-w-[220px] sm:max-w-[280px] flex items-center justify-center">
            <img
              src="/assets/heroSubBanner/kids_1.png"
              alt="Children Day Kids"
              className="w-full h-auto object-contain max-h-[230px] transform group-hover:scale-108 transition-transform duration-500 drop-shadow-md"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSubBanner;
