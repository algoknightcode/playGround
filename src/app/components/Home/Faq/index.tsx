'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
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
    question: 'What is this platform about?',
    answer:
      'This is a premium showcase platform designed to demonstrate modern UI patterns, including sophisticated accordions and AI-driven features.',
    img: 'https://images.unsplash.com/photo-1768280511074-3b3effe7a139?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'g2',
    category: 'general',
    question: 'How do I get started?',
    answer:
      'Simply browse through our various sections. If you have a specific question, use our AI Assistant at the bottom of the page.',
    img: 'https://images.unsplash.com/photo-1759269834957-3457c9ee46c7?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 't1',
    category: 'technical',
    question: 'Is it mobile responsive?',
    answer:
      'Absolutely. Every component is built with a mobile-first approach using Tailwind CSS, ensuring a seamless experience across all devices.',
    img: 'https://images.unsplash.com/photo-1754405300142-246a9bf917d9?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 't2',
    category: 'technical',
    question: 'What technologies are used?',
    answer:
      'We use React 18, TypeScript, Framer Motion for animations, and the Gemini AI API for our intelligent features.',
    img: 'https://images.unsplash.com/photo-1738510992679-41f599ec9399?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'b1',
    category: 'billing',
    question: 'What payment methods are accepted?',
    answer:
      'We accept all major credit cards, PayPal, and cryptocurrency for our premium enterprise plans.',
    img: 'https://images.unsplash.com/photo-1688909906484-738d78601884?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'b2',
    category: 'billing',
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel your subscription from your account dashboard at any time. Your features will remain active until the end of the billing cycle.',
    img: 'https://images.unsplash.com/photo-1703600091728-8d0a2bf13396?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const FaqInteractivePreview = () => {
  const [activeItem, setActiveItem] = useState<FAQItem>(FAQ_DATA[0]);

  return (
    <section className="w-full flex flex-col justify-center items-center relative bg-gradient-to-br from-[#38BDF8] via-[#0284C7] to-[#00C4B5] overflow-hidden font-quicksand py-6 md:py-8">
      
      {/* Absolute Background Image Container - Scoped only to FAQ section */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-85 mix-blend-overlay"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
        
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
                <span className="text-lg font-bold tracking-wide">
                  {item.question}
                </span>
                <ArrowRight
                  className={cn(
                    'w-5 h-5 transition-all duration-300',
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
                  
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                    {activeItem.answer}
                  </p>
                </div>

                <div className="pt-3 overflow-hidden rounded-2xl shadow-md border border-slate-100 mt-auto">
                  <img
                    src={activeItem.img}
                    alt={activeItem.question}
                    className="w-full h-52 sm:h-60 object-cover transform hover:scale-105 transition-transform duration-700"
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