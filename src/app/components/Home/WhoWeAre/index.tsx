'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const WhoWeAre: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FFFFFF] -mt-17 md:-mt-17 pt-0 pb-16 px-6 sm:px-10 overflow-hidden font-quicksand antialiased text-[#2D3436] z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: School Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-6 flex justify-center items-center"
        >
          <div className="relative w-full max-w-xl">
            <img 
              src="/assets/school.png" 
              alt="Our Journey of Inspiring Children" 
              className="w-full h-auto object-contain drop-shadow-md"
            />
          </div>
        </motion.div>

        {/* Right Column: Text & Features */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-6 flex flex-col gap-6"
        >
          {/* Sub-badge */}
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#FF6B6B] text-xs uppercase tracking-widest">
              WHO WE ARE
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#2D3436] leading-[1.25] tracking-tight">
            Our Journey of Inspiring Children to Grow and Shine
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#636E72] leading-relaxed font-normal">
            Dictum dapibus pellentesque vehicula consectetur ligula pulvinar vestibulum vulputate. Pharetra montes integer senectus venenatis urna aptent proin finibus. Sollicitudin ligula mauris ipsum consectetur nisi maecenas pharetra malesuada volutpat.
          </p>

          <div className="w-full h-px bg-slate-200/80 my-1 border-dashed border-t border-slate-300" />

          {/* Features List */}
          <div className="space-y-6">
            
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#8BC34A] text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-[#2D3436] text-base">
                  Compassion & Care
                </h4>
                <p className="text-xs sm:text-sm text-[#636E72] leading-relaxed">
                  Platea volutpat lectus in enim eget curae quis mauris aliquam montes habitant
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#00ACC1] text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-[#2D3436] text-base">
                  Creativity & Imagination
                </h4>
                <p className="text-xs sm:text-sm text-[#636E72] leading-relaxed">
                  Platea volutpat lectus in enim eget curae quis mauris aliquam montes habitant
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FF5722] text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-[#2D3436] text-base">
                  Community & Collaboration
                </h4>
                <p className="text-xs sm:text-sm text-[#636E72] leading-relaxed">
                  Platea volutpat lectus in enim eget curae quis mauris aliquam montes habitant
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhoWeAre;
