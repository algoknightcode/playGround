"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Phone, CloudDownload, Menu } from "lucide-react";

// Playful colors for each nav item on hover
const NAV_ITEMS = [
  { name: "About Us", hoverColor: "hover:text-pink-500" },
  { name: "Products", hoverColor: "hover:text-amber-500", hasDropdown: true },
  { name: "Credentials", hoverColor: "hover:text-emerald-500" },
  { name: "Exhibitions", hoverColor: "hover:text-purple-500" },
  { name: "Gallery", hoverColor: "hover:text-rose-500" },
  { name: "Contact", hoverColor: "hover:text-cyan-600" },
  { name: "Blog", hoverColor: "hover:text-orange-500" },
];

export default function PlayfulHeader() {
  const [isHoveringPhone, setIsHoveringPhone] = useState(false);

  return (
    <header className="relative w-full overflow-hidden bg-[#cbe3ff] px-6 py-1 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:px-10">
      {/* Decorative Background Clouds (Subtle wow factor) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
        <motion.div
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-4 left-10 h-16 w-32 rounded-full bg-white/60 blur-xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-2 right-20 h-20 w-40 rounded-full bg-white/60 blur-xl"
        />
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-4">
        
        {/* 1. Playful Logo */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 flex shrink-0 cursor-pointer items-center"
        >
          <img
            src="/assets/ToyPark_logo.png"
            alt="Toy Park Logo"
            className="h-20 sm:h-24 lg:h-28 w-auto object-contain"
          />
        </motion.div>

        {/* 2. Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 lg:flex xl:gap-2">
          {NAV_ITEMS.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.05,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="relative"
            >
              <motion.button
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[15px] font-bold text-indigo-950 transition-colors ${item.hoverColor}`}
              >
                {item.name}
                {item.hasDropdown && (
                  <motion.span
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group-hover:rotate-180"
                  >
                    <ChevronDown className="h-4 w-4 stroke-[3]" />
                  </motion.span>
                )}
              </motion.button>
            </motion.div>
          ))}
        </nav>

        {/* 3. Right Side: Phone & CTA */}
        <div className="flex items-center gap-3 xl:gap-6">
          
          {/* Phone Number */}
          <motion.a
            href="tel:+919292924692"
            onHoverStart={() => setIsHoveringPhone(true)}
            onHoverEnd={() => setIsHoveringPhone(false)}
            whileHover={{ scale: 1.05 }}
            className="hidden items-center gap-2 whitespace-nowrap font-black tracking-wide text-indigo-950 md:flex"
          >
            <motion.div
              animate={isHoveringPhone ? { rotate: [0, -15, 15, -15, 15, 0] } : {}}
              transition={{ duration: 0.4 }}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400 text-indigo-950 shadow-sm"
            >
              <Phone className="h-4 w-4 fill-current stroke-[2]" />
            </motion.div>
            9292924692
          </motion.a>

          {/* Download CTA Button - Game UI Style */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ y: 4, boxShadow: "0 0px 0 0 #1e40af" }}
            className="group relative flex shrink-0 items-center gap-2 rounded-full border-2 border-indigo-900 bg-blue-500 px-6 py-2.5 font-black text-white shadow-[0_6px_0_0_#1e3a8a] transition-all hover:bg-blue-400 hover:shadow-[0_8px_0_0_#1e3a8a]"
          >
            <CloudDownload className="h-5 w-5 stroke-[2.5] transition-transform group-hover:-translate-y-1" />
            <span className="hidden sm:inline">Download Catalog</span>
            <span className="sm:hidden">Catalog</span>
            
            {/* Playful shine effect */}
            <span className="absolute -left-full top-0 block h-full w-1/2 -skew-x-12 bg-white/20 opacity-0 group-hover:animate-[shine_0.6s_ease-in-out]" />
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-indigo-900 bg-white text-indigo-900 shadow-[0_4px_0_0_#312e81] lg:hidden"
          >
            <Menu className="h-6 w-6 stroke-[3]" />
          </motion.button>
        </div>
      </div>
      
      {/* Tailwind animation for the CTA shine */}
      <style>{`
        @keyframes shine {
          100% { left: 200%; opacity: 1; }
        }
      `}</style>
    </header>
  );
}