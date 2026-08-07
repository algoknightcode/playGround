"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Swiper CSS styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// ═══ EASY POSITIONING & SIZING CONTROLS ═══
// You can edit top/bottom/left/right & size directly here in the code:
const PLANE_POSITION = {
  bottom: "16%",   // Vertical position (e.g., '12%', '20%')
  left: "32%",     // Horizontal position (e.g., '25%', '35%')
  size: "w-14 sm:w-20 md:w-24 lg:w-28", // Size classes
};

const HELICOPTER_POSITION = {
  top: "16%",      // Vertical position (keeps away from navbar, e.g., '15%', '20%')
  right: "22%",    // Horizontal position (e.g., '18%', '25%')
  size: "w-12 sm:w-16 md:w-20 lg:w-24", // Size classes
};

const BANNERS = [
  { id: 1, src: "/assets/banner/new_banner.png", alt: "Toy Park Hero Banner" },
  { id: 2, src: "/assets/banner/banner2.jpeg", alt: "Toy Park Special Banner" },
];

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden flex justify-center items-center -mt-10 sm:-mt-16 md:-mt-24 lg:-mt-32">
      {/* Component-Specific Swiper Styles */}
      <style>{`
        .hero-banner-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ffffff;
          opacity: 0.5;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }

        .hero-banner-swiper .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 6px;
          background: #ffffff;
          opacity: 1;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full overflow-hidden"
      >
        {/* ═══ FLOATING PLANE & HELICOPTER OVERLAY ═══ */}
        <style>{`
          @keyframes planeFloat {
            0%, 100% { transform: translate3d(0, 0, 0) rotate(-3deg); }
            50% { transform: translate3d(0, -12px, 0) rotate(4deg); }
          }
          @keyframes helicopterFloat {
            0%, 100% { transform: translate3d(0, 0, 0) rotate(4deg); }
            50% { transform: translate3d(0, -14px, 0) rotate(-4deg); }
          }
          .animate-plane-float {
            animation: planeFloat 4.5s ease-in-out infinite;
            will-change: transform;
          }
          .animate-helicopter-float {
            animation: helicopterFloat 5.2s ease-in-out 0.6s infinite;
            will-change: transform;
          }
        `}</style>
        <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
          
          {/* Floating Toy Plane */}
          <img
            src="/assets/plane_icon.webp"
            alt="Toy Plane"
            style={{
              bottom: PLANE_POSITION.bottom,
              left: PLANE_POSITION.left,
            }}
            className={`absolute ${PLANE_POSITION.size} h-auto drop-shadow-lg select-none animate-plane-float`}
          />

          {/* Floating Helicopter */}
          <img
            src="/assets/helicopter_icon.svg"
            alt="Helicopter"
            style={{
              top: HELICOPTER_POSITION.top,
              right: HELICOPTER_POSITION.right,
            }}
            className={`absolute ${HELICOPTER_POSITION.size} h-auto drop-shadow-lg select-none animate-helicopter-float`}
          />

        </div>
        {/* Permanent Hero Banner Image (new_banner1.webp) */}
        <div className="w-full overflow-hidden flex justify-center items-center">
          <img
            src="/assets/banner/new_banner1.webp"
            alt="Toy Park Hero Banner"
            className="w-full h-auto object-cover block"
            loading="eager"
            decoding="async"
          />
        </div>
      </motion.div>
    </section>
  );
}
