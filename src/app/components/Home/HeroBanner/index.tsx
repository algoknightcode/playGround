"use client";

import React from "react";
import { motion } from "motion/react";

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fcece3] flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full overflow-hidden"
      >
        {/* Full-width Banner Image */}
        <img
          src="/assets/banner.jpeg"
          alt="Toy Park Hero Banner"
          className="h-auto w-full object-contain"
        />

        {/* Floating Moving Icon 1 - Top Left (icon4) */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-[6%] top-[12%] z-10 w-[10%] max-w-[100px] min-w-[45px]"
        >
          <img
            src="/assets/icons/icon4.webp"
            alt="Playful Icon 4"
            className="w-full h-auto drop-shadow-md"
          />
        </motion.div>

        {/* Floating Moving Icon 2 - Bottom Left (icon5) */}
        <motion.div
          animate={{ y: [0, 14, 0], rotate: [5, -5, 5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="pointer-events-none absolute left-[12%] top-[46%] z-10 w-[9%] max-w-[90px] min-w-[40px]"
        >
          <img
            src="/assets/icons/icon5.webp"
            alt="Playful Icon 5"
            className="w-full h-auto drop-shadow-md"
          />
        </motion.div>

        {/* Floating Moving Icon 3 - Right Side (icon6) */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [-6, 6, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="pointer-events-none absolute right-[8%] top-[20%] z-10 w-[11%] max-w-[110px] min-w-[50px]"
        >
          <img
            src="/assets/icons/icon6.webp"
            alt="Playful Icon 6"
            className="w-full h-auto drop-shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
