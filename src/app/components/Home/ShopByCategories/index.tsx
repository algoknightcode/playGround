'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Sparkles, Star, Cloud } from 'lucide-react';

const categories = [
  { 
    title: 'Games and puzzle', 
    image: '/assets/favcategories/hero6a.png',
    bg: 'bg-[#FFE66D]',
    delay: 0.1 
  },
  { 
    title: 'Indoor Play', 
    image: '/assets/favcategories/hero6b.png',
    bg: 'bg-[#FF6B6B]',
    delay: 0.2 
  },
  { 
    title: 'Kids Books', 
    image: '/assets/favcategories/hero6c.png',
    bg: 'bg-[#4ECDC4]',
    delay: 0.3 
  },
  { 
    title: 'Rockers & Rides', 
    image: '/assets/favcategories/hero6d.png',
    bg: 'bg-[#9B59B6]',
    delay: 0.4 
  },
];

export const ShopByCategories: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, y: 0, scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 25 } 
    },
  };

  return (
    <section className="relative w-full bg-[#00C4B5] py-6 md:py-8 px-6 md:px-12 overflow-hidden font-quicksand">
      
      {/* ═══ PINNED STICKY VIEWPORT ═══ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-4 left-10 hidden lg:flex flex-col items-center opacity-80"
        >
          <div className="w-8 h-10 bg-[#FF6B6B] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] flex items-center justify-center">
            <div className="w-2 h-3 bg-white/60 rounded-full -ml-2 -mt-1 blur-[0.5px]" />
          </div>
        </motion.div>

        <motion.div 
          animate={{ x: [0, 16, 0], y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-8 right-16 hidden md:flex text-white/90"
        >
          <Cloud className="w-7 h-7 stroke-[2.5]" />
        </motion.div>

        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-4 left-1/4 hidden lg:flex text-[#FFE66D]"
        >
          <Star className="w-5 h-5 fill-[#FFE66D] stroke-none" />
        </motion.div>

        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-6 right-[15%] hidden md:flex text-white/90"
        >
          <Sparkles className="w-6 h-6 stroke-[2]" />
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-5 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-1.5 bg-white/20 border border-white/40 rounded-full px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase mb-2 backdrop-blur-xs">
            <span className="w-1.5 h-1.5 bg-[#FFE66D] rounded-full animate-pulse" />
            Explore Universes
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-1.5 tracking-tight">
            Shop by Categories
          </h2>
          <p className="text-white/90 text-xs md:text-sm max-w-lg leading-relaxed font-semibold">
            Lorem ipsum dolor sit amet consectetur. Id fames there are many vulputate eget dolor.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-[1.75rem] p-4 md:p-5 flex flex-col items-center justify-center cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Image Container with Dynamic Colorful Circle */}
              <motion.div 
                className={`w-[95px] h-[95px] md:w-[110px] md:h-[110px] rounded-full flex items-center justify-center mb-3.5 relative z-10 ${cat.bg}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] object-contain drop-shadow-sm transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>

              {/* Category Title */}
              <h3 className="text-base md:text-lg font-bold text-[#0D1C3A] text-center relative z-10 group-hover:text-[#FF6B6B] transition-colors duration-300">
                {cat.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ShopByCategories;
