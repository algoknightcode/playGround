'use client';

import React from 'react';
import { motion } from 'framer-motion';



const MouseSVG = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
    <circle cx="30" cy="35" r="20" fill="#E2B4B4"/>
    <circle cx="70" cy="35" r="20" fill="#E2B4B4"/>
    <circle cx="30" cy="35" r="12" fill="#F4D3D3"/>
    <circle cx="70" cy="35" r="12" fill="#F4D3D3"/>
    <path d="M 20 100 Q 20 45 50 45 Q 80 45 80 100 Z" fill="#D2E0E0"/>
    <circle cx="40" cy="65" r="4" fill="#333"/>
    <circle cx="60" cy="65" r="4" fill="#333"/>
    <circle cx="50" cy="75" r="5" fill="#333"/>
    <path d="M 35 75 L 20 70 M 35 78 L 20 80" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M 65 75 L 80 70 M 65 78 L 80 80" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);



interface ShopElementsProps {
  bgColor?: string;
}

export default function ShopElementsSection({ bgColor = "bg-white" }: ShopElementsProps) {
  return (
    <section className={`relative w-full ${bgColor} pt-12 pb-0 overflow-hidden`}>
      {/* Clouds and Characters Area */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] flex items-end justify-center">
        
        {/* Background Cloud (Cloud 3) */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            src="/assets/clouds/cloud3.png" 
            alt="Background Cloud" 
            className="w-full h-full object-cover object-top opacity-70"
          />
        </motion.div>

        {/* Characters between clouds */}
        <motion.div 
          className="absolute bottom-[35%] left-[5%] z-[5] w-18 sm:w-26 cursor-pointer pointer-events-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            whileHover={{ y: -20, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <img 
              src="/assets/clouds/cat-halloween-kitty-svgrepo-com.svg" 
              alt="Cat"
              className="w-full h-auto drop-shadow-md"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-[40%] left-[50%] -translate-x-1/2 z-[5] w-24 sm:w-32 cursor-pointer pointer-events-auto"
          initial={{ opacity: 0, y: 60, x: "-50%" }}
          whileInView={{ opacity: 1, y: 0, x: "-50%" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            whileHover={{ y: -20, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <MouseSVG />
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-[28%] right-[15%] z-[5] w-20 sm:w-32 cursor-pointer pointer-events-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            whileHover={{ y: -20, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <img 
              src="/assets/clouds/giraffe-svgrepo-com.svg" 
              alt="Giraffe"
              className="w-full h-auto drop-shadow-md"
            />
          </motion.div>
        </motion.div>

        {/* Foreground Cloud (Cloud 2) */}
        <motion.div 
          className="absolute bottom-[-10px] left-0 w-full z-10 pointer-events-none"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, delay: 0, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="w-full h-full pointer-events-none"
            animate={{
              x: [12, -12, 12],
              y: [3, -3, 3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img 
              src="/assets/clouds/cloud2.png" 
              alt="Foreground Cloud" 
              className="w-full h-auto object-cover object-bottom pointer-events-none"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
