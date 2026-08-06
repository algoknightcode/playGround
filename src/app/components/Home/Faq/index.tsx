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
    question: 'What is ToyPark about?',
    answer:
      'ToyPark is a magical universe created for kids, parents, and educators! We offer premium educational toys, play structures, and creative activities.',
    img: '/assets/ToysEveryNeed/kids1.webp',
  },
  {
    id: 'g2',
    category: 'general',
    question: 'How do I get started with orders?',
    answer:
      'Simply explore our shop categories above, pick your favorite play sets, and enjoy fast home delivery with safe, non-toxic certified products.',
    img: '/assets/favcategories/hero6a.png',
  },
  {
    id: 't1',
    category: 'technical',
    question: 'Are all toys safety certified for kids?',
    answer:
      'Yes! Every single toy and play set in our catalog undergoes rigorous child-safety testing and uses 100% eco-friendly, non-toxic materials.',
    img: '/assets/ToysEveryNeed/kids2.webp',
  },
  {
    id: 't2',
    category: 'technical',
    question: 'What age groups do you cater to?',
    answer:
      'We curate special collections for all growing ages — from toddlers (0-2 yrs) to active kids (3-8+ yrs) and young puzzle builders!',
    img: '/assets/favcategories/hero6b.png',
  },
  {
    id: 'b1',
    category: 'billing',
    question: 'What payment & shipping methods work?',
    answer:
      'We support all major credit cards, UPI, digital wallets, and Cash on Delivery with free express shipping on orders above $50.',
    img: '/assets/ToysEveryNeed/kids3.webp',
  },
  {
    id: 'b2',
    category: 'billing',
    question: 'Can I return or exchange an item anytime?',
    answer:
      'Yes! We offer a hassle-free 30-day play guarantee. If your little one isn’t completely happy, returns and exchanges are quick and easy.',
    img: '/assets/favcategories/hero6c.png',
  },
];

export const FaqInteractivePreview = () => {
  const [activeItem, setActiveItem] = useState<FAQItem>(FAQ_DATA[0]);

  return (
    <section className="w-full flex flex-col justify-center items-center relative bg-gradient-to-br from-[#38BDF8] via-[#0284C7] to-[#00C4B5] overflow-hidden font-quicksand py-8 md:py-10">
      
      {/* Absolute Background Image Container - Scoped only to FAQ section */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-75 mix-blend-overlay"></div>
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
            Frequently Asked Questions
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
                    ? 'bg-white text-slate-900 shadow-2xl scale-[1.02] border-white'
                    : 'bg-white/20 text-white hover:bg-white/30 border-white/30'
                )}
              >
                <span className="text-base sm:text-lg font-bold tracking-wide">
                  {item.question}
                </span>
                <ArrowRight
                  className={cn(
                    'w-5 h-5 flex-shrink-0 transition-all duration-300',
                    activeItem.id === item.id
                      ? 'translate-x-0 opacity-100 text-slate-900'
                      : '-translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-white'
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

                <div className="pt-3 overflow-hidden rounded-2xl shadow-md border border-slate-100 mt-auto bg-[#F6F7F0]/60 p-1">
                  <img
                    src={activeItem.img}
                    alt={activeItem.question}
                    className="w-full h-52 sm:h-60 object-contain rounded-xl transform hover:scale-105 transition-transform duration-700"
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