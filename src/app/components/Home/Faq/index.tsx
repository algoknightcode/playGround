'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, Cloud } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(' ');
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'billing' | 'account';
  img: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'g1',
    category: 'general',
    question: '1. What Makes ToyPark, ToyPark?',
    answer:
      'A little imagination. A lot of play. And products designed to make childhood more exciting. From clever toys to creative play spaces, we make it easier for kids to learn, explore, move, and simply have fun.',
    img: '/assets/split_vantage_images/kids_playsHouse.png',
  },
  {
    id: 'g2',
    category: 'general',
    question: '2. Can I order in bulk?',
    answer:
      'Yes. We work with retailers, schools, daycares, distributors, and businesses looking for wholesale quantities.',
    img: '/assets/split_vantage_images/Kids_Furniture.png',
  },
  {
    id: 't1',
    category: 'technical',
    question: '3. How do I get a wholesale quote?',
    answer:
      'Share the products, quantities, and requirements you have in mind. We’ll take it from there and help you with the right options and pricing.',
    img: '/assets/split_vantage_images/Kids_Trampoline.png',
  },
  {
    id: 't2',
    category: 'technical',
    question: '4. Which age groups do you cater to?',
    answer:
      'Our range covers different age groups, from early learners to active older children, with age recommendations provided for individual products.',
    img: '/assets/split_vantage_images/kids_playsHouse.png',
  },
  {
    id: 'b1',
    category: 'billing',
    question: '5. Where do you deliver?',
    answer:
      'We fulfil wholesale orders across India, with delivery arrangements based on your order and location.',
    img: '/assets/split_vantage_images/Kids_Furniture.png',
  },
  {
    id: 'b2',
    category: 'billing',
    question: '6. Still Not Sure What Fits?',
    answer:
      'Tell us what you’re looking to stock, build, or sell. We’ll help you choose the right products, quantities, and options for your business.',
    img: '/assets/split_vantage_images/Kids_Trampoline.png',
  },
];

export const FaqInteractivePreview = () => {
  const [activeItem, setActiveItem] = useState<FAQItem>(FAQ_DATA[0]);

  return (
    <section className="w-full flex flex-col justify-center items-center relative bg-gradient-to-br from-[#38BDF8] via-[#0284C7] to-[#00C4B5] overflow-hidden font-quicksand py-8 md:py-10">
      
      {/* Absolute Background Image Container - Scoped only to FAQ section */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/assets/faq/sky-image.png_202608121708.jpeg"
          alt="FAQ Sky Background"
          className="w-full h-full object-cover opacity-85 mix-blend-overlay"
        />
      </div>

      {/* ═══ FLOATING BOBBING CLOUDS (PLAYFUL ACCENTS) ═══ */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none z-10 overflow-hidden">
        {/* Right Floating Cloud */}
        <motion.div
          animate={{ y: [0, 16, 0], x: [0, -8, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-12 right-4 sm:right-10 lg:right-14 hidden sm:flex items-center justify-center text-white/90"
        >
          <Cloud className="w-12 h-12 md:w-16 md:h-16 stroke-[2.2] drop-shadow-md" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md">
            Got Questions? We’ve Got Answers.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Question List */}
          <div className="space-y-3">
            {FAQ_DATA.map((item) => (
              <motion.button
                key={item.id}
                onMouseEnter={() => setActiveItem(item)}
                onClick={() => setActiveItem(item)}
                className={cn(
                  'w-full text-left px-6 py-5 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between group backdrop-blur-md border',
                  activeItem.id === item.id
                    ? 'bg-[#0D1C3A] text-white shadow-2xl scale-[1.02] border-2 border-[#00C4B5]'
                    : 'bg-white/70 hover:bg-white/90 text-[#007A70] border-white/60 shadow-sm'
                )}
              >
                <span 
                  className={cn(
                    "text-base sm:text-lg font-extrabold tracking-tight transition-colors duration-300",
                    activeItem.id === item.id ? "text-white" : "text-[#007A70]"
                  )}
                >
                  {item.question}
                </span>
                <ArrowRight
                  className={cn(
                    'w-5 h-5 flex-shrink-0 transition-all duration-300',
                    activeItem.id === item.id
                      ? 'translate-x-0 opacity-100 text-[#00C4B5]'
                      : '-translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-[#007A70]'
                  )}
                />
              </motion.button>
            ))}
          </div>

          {/* Right Column: Spacious Preview Panel */}
          <div className="relative min-h-[500px] lg:min-h-[530px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, x: 20, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0 bg-white/95 backdrop-blur-xl rounded-3xl p-8 lg:p-10 flex flex-col justify-between shadow-2xl border border-white/60 overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Sparkles className="w-4 h-4 text-[#00C4B5]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#00C4B5]">
                      Magic Preview
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    {activeItem.question}
                  </h3>
                  
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed font-semibold">
                    {activeItem.answer}
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl shadow-md border border-slate-100 mt-auto w-full h-52 sm:h-60 relative">
                  <img
                    src={activeItem.img}
                    alt={activeItem.question}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqInteractivePreview;