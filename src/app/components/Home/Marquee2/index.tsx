'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

export default function Marquee2() {
  const marqueeText = "Previous your pro enjoy 10 months of toyup for $20/month on select plans.";
  const marqueeText2 = "Next your pro enjoy 12 months of toyup for $20/month on select plans.";

  // Combine into a repeated sequence for seamless looping
  const items = [
    { text: marqueeText },
    { text: marqueeText2 },
    { text: marqueeText },
    { text: marqueeText2 },
    { text: marqueeText },
    { text: marqueeText2 },
  ];

  return (
    <section className="relative w-full bg-[#00BFA6] text-white py-3 overflow-hidden font-sans select-none border-y border-[#00A38D] shadow-sm">
      <div className="flex whitespace-nowrap min-w-full">
        <motion.div
          className="flex gap-16 items-center pr-16"
          animate={{ x: [0, '-33.333%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 25,
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4 text-sm sm:text-base font-extrabold tracking-wide">
              <Flame className="w-5 h-5 fill-white text-white animate-pulse" />
              <span>{item.text}</span>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {items.map((item, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-4 text-sm sm:text-base font-extrabold tracking-wide">
              <Flame className="w-5 h-5 fill-white text-white animate-pulse" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
