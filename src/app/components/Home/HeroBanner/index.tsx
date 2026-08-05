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
          src="/assets/banner/banner_toy.jpeg"
          alt="Toy Park Hero Banner"
          className="h-auto w-full object-contain"
        />
      </motion.div>
    </section>
  );
}
