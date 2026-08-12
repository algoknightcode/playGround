'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// ============================================================================
// 🖼️ BANNER SLIDES DATA
// ============================================================================
const BANNER_SLIDES = [
  {
    id: 1,
    desktopImg: '/assets/banner/home_banner1.png',
    mobileImg: '/assets/banner/mobile_banner_1.png',
    hasTextOverlay: true,
    hasSlide2TextOverlay: false,
    hasSlide3TextOverlay: false,
    hasSlide4TextOverlay: false,
  },
  {
    id: 2,
    desktopImg: '/assets/banner/home_banner2.png',
    mobileImg: '/assets/banner/mobile_banner2.png',
    hasTextOverlay: false,
    hasSlide2TextOverlay: true,
    hasSlide3TextOverlay: false,
    hasSlide4TextOverlay: false,
  },
  {
    id: 3,
    desktopImg: '/assets/banner/home_banner3.png',
    mobileImg: '/assets/banner/mobile_banner3.png',
    hasTextOverlay: false,
    hasSlide2TextOverlay: false,
    hasSlide3TextOverlay: true,
    hasSlide4TextOverlay: false,
  },
  {
    id: 4,
    desktopImg: '/assets/banner/home_banner4.png',
    mobileImg: '/assets/banner/mobile_banner4.png',
    hasTextOverlay: false,
    hasSlide2TextOverlay: false,
    hasSlide3TextOverlay: false,
    hasSlide4TextOverlay: true,
  },
];

// ============================================================================
// 📝 SLIDE 2 (CLASSROOM RUG) TEXT OVERLAY POSITION & SIZE CONTROLS
// ============================================================================
const SLIDE2_TEXT_CONFIG = {
  top: '22%',
  left: '6%',
  maxWidth: '42vw',
};

// ============================================================================
// 📝 DESKTOP TEXT OVERLAY POSITION & SIZE CONTROLS
// ============================================================================
const DESKTOP_TEXT_OVERLAY_CONFIG = {
  top: '10.5%',
  left: '5%',
  maxWidth: '48vw',
};

// ============================================================================
// 📱 MOBILE TEXT OVERLAY POSITION & SIZE CONTROLS
// ============================================================================
const MOBILE_TEXT_OVERLAY_CONFIG = {
  top: '4.5%',
  left: '0%',
  width: '100%',
};

// Helper constants for text white outline shadow
const WHITE_OUTLINE_STYLE = {
  textShadow: '0.25vw 0.25vw 0px #ffffff, -0.25vw -0.25vw 0px #ffffff, 0.25vw -0.25vw 0px #ffffff, -0.25vw 0.25vw 0px #ffffff, 0px 0.3vw 0.8vw rgba(0,0,0,0.12)'
};

const MOBILE_WHITE_OUTLINE_STYLE = {
  textShadow: '1.5px 1.5px 0px #ffffff, -1.5px -1.5px 0px #ffffff, 1.5px -1.5px 0px #ffffff, -1.5px 1.5px 0px #ffffff, 0px 2px 6px rgba(0,0,0,0.12)'
};

// ============================================================================
// ✈️ PAPER PLANE WITH TRAIL POSITION & SIZE CONTROLS
// ============================================================================
const PAPER_PLANE_CONFIG = {
  top: '5%',
  bottom: 'auto',
  left: '35%',
  right: 'auto',
  widthDesktop: '180px',
  widthMobile: '90px',
  rotation: -10,
  floatY: 20,
  filter: 'brightness(0) saturate(100%) invert(14%) sepia(91%) saturate(3419%) hue-rotate(215deg) brightness(91%) contrast(97%)',
};

// ============================================================================
// 🚁 HELICOPTER POSITION & SIZE CONTROLS
// ============================================================================
const HELICOPTER_CONFIG = {
  top: '87%',
  bottom: 'auto',
  left: '1%',
  right: 'auto',
  widthDesktop: '100px',
  widthMobile: '60px',
  rotation: 5,
  floatY: 15,
  filter: 'none',
};

// ============================================================================
// 🛩️ PLANE ICON POSITION & SIZE CONTROLS
// ============================================================================
const PLANE_ICON_CONFIG = {
  top: '4%',
  bottom: 'auto',
  left: 'auto',
  right: '5%',
  widthDesktop: '110px',
  widthMobile: '55px',
  rotation: -5,
  floatY: 18,
  filter: 'none',
};

const MainBanner = () => {
  return (
    <section className="w-full relative overflow-hidden bg-white select-none font-quicksand">
      
      {/* 🚀 Swiper Auto-Swiping Banner Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full h-auto main-banner-swiper"
      >
        {BANNER_SLIDES.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-auto overflow-hidden">
            {/* 🖥️ Desktop Banner Image */}
            <img
              src={slide.desktopImg}
              alt={`Main Banner Desktop ${slide.id}`}
              className="hidden sm:block w-full h-auto object-cover"
            />

            {/* 📱 Mobile Banner Image */}
            <img
              src={slide.mobileImg}
              alt={`Main Banner Mobile ${slide.id}`}
              className="block sm:hidden w-full h-auto object-cover object-top"
            />

            {/* Render Text Overlay for Slide 1 */}
            {slide.hasTextOverlay && (
              <>
                {/* 🖥️ DESKTOP TEXT OVERLAY */}
                <div 
                  style={{
                    top: DESKTOP_TEXT_OVERLAY_CONFIG.top,
                    left: DESKTOP_TEXT_OVERLAY_CONFIG.left,
                    maxWidth: DESKTOP_TEXT_OVERLAY_CONFIG.maxWidth,
                  }}
                  className="hidden sm:flex absolute z-30 flex-col justify-center text-left"
                >
                  <div>
                    {/* Main 4-line Colored Headline */}
                    <h1 className="font-black text-[7.2vw] tracking-tight leading-[0.98] uppercase drop-shadow-sm">
                      <span className="block text-[#E52421]" style={WHITE_OUTLINE_STYLE}>PLAY,</span>
                      <span className="block text-[#0047BA]" style={WHITE_OUTLINE_STYLE}>LEARN,</span>
                      <span className="block text-[#008B74]" style={WHITE_OUTLINE_STYLE}>GROW</span>
                      <span className="block text-[#F56B00]" style={WHITE_OUTLINE_STYLE}>TOGETHER!</span>
                    </h1>

                    {/* Divider Line with Center Dot */}
                    <div className="flex items-center gap-[0.6vw] my-[1.2vw] w-full max-w-[22vw]">
                      <div className="h-[0.18vw] flex-1 bg-[#0047BA]/30 rounded-full"></div>
                      <div className="w-[0.8vw] h-[0.8vw] min-w-[4px] min-h-[4px] rounded-full bg-[#0047BA]"></div>
                      <div className="h-[0.18vw] flex-1 bg-[#0047BA]/30 rounded-full"></div>
                    </div>

                    {/* Subtitle */}
                    <div className="text-[1.9vw] font-bold text-slate-800 leading-snug">
                      <p className="font-black text-slate-900">
                        Premium Outdoor Playgrounds
                      </p>
                      <p className="mt-[0.2vw] font-extrabold text-slate-700">
                        for <span className="text-[#0047BA]">Active Play</span> and <span className="text-[#008B74]">Happy Memories</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* 📱 MOBILE TEXT OVERLAY */}
                <div 
                  style={{
                    top: MOBILE_TEXT_OVERLAY_CONFIG.top,
                    left: MOBILE_TEXT_OVERLAY_CONFIG.left,
                    width: MOBILE_TEXT_OVERLAY_CONFIG.width,
                  }}
                  className="block sm:hidden absolute z-30 px-3 text-center"
                >
                  <div className="flex flex-col items-center">
                    {/* Mobile 2-Row Centered Headline */}
                    <h1 className="font-black text-[7.5vw] tracking-tight leading-[1.05] uppercase drop-shadow-sm flex flex-col items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-[#E52421]" style={MOBILE_WHITE_OUTLINE_STYLE}>PLAY,</span>
                        <span className="text-[#0047BA]" style={MOBILE_WHITE_OUTLINE_STYLE}>LEARN,</span>
                      </div>
                      <div className="flex items-center gap-2 mt-[0.5vw]">
                        <span className="text-[#008B74]" style={MOBILE_WHITE_OUTLINE_STYLE}>GROW</span>
                        <span className="text-[#F56B00]" style={MOBILE_WHITE_OUTLINE_STYLE}>TOGETHER!</span>
                      </div>
                    </h1>

                    {/* Subtitle Centered for Mobile */}
                    <div className="mt-1.5 text-[2.8vw] font-extrabold text-slate-800 leading-snug text-center">
                      <p className="font-black text-slate-900">
                        Premium Outdoor Playgrounds
                      </p>
                      <p className="mt-0.5 font-extrabold text-slate-700">
                        for <span className="text-[#0047BA]">Active Play</span> and <span className="text-[#008B74]">Happy Memories</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* ✈️ Paper Plane with Trail Overlay (Desktop Only - Slide 1) */}
                <motion.div
                  style={{
                    top: PAPER_PLANE_CONFIG.top,
                    bottom: PAPER_PLANE_CONFIG.bottom,
                    left: PAPER_PLANE_CONFIG.left,
                    right: PAPER_PLANE_CONFIG.right,
                    rotate: PAPER_PLANE_CONFIG.rotation,
                  }}
                  animate={{
                    y: [0, -PAPER_PLANE_CONFIG.floatY, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="hidden sm:block absolute z-20 pointer-events-none drop-shadow-md"
                >
                  <img
                    src="/assets/paper_plane_with_trail.png"
                    alt="Paper Plane"
                    className="w-auto h-auto object-contain"
                    style={{
                      maxWidth: PAPER_PLANE_CONFIG.widthDesktop,
                      filter: PAPER_PLANE_CONFIG.filter,
                    }}
                  />
                </motion.div>

                {/* 🚁 Helicopter Overlay (Desktop Only - Slide 1) */}
                <motion.div
                  style={{
                    top: HELICOPTER_CONFIG.top,
                    bottom: HELICOPTER_CONFIG.bottom,
                    left: HELICOPTER_CONFIG.left,
                    right: HELICOPTER_CONFIG.right,
                    rotate: HELICOPTER_CONFIG.rotation,
                  }}
                  animate={{
                    y: [0, -HELICOPTER_CONFIG.floatY, 0],
                  }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                  className="hidden sm:block absolute z-20 pointer-events-none drop-shadow-md"
                >
                  <img
                    src="/assets/helicopter_icon.svg"
                    alt="Helicopter"
                    className="w-auto h-auto object-contain"
                    style={{
                      maxWidth: HELICOPTER_CONFIG.widthDesktop,
                      filter: HELICOPTER_CONFIG.filter,
                    }}
                  />
                </motion.div>

                {/* 🛩️ Plane Icon Overlay (Desktop Only - Slide 1) */}
                <motion.div
                  style={{
                    top: PLANE_ICON_CONFIG.top,
                    bottom: PLANE_ICON_CONFIG.bottom,
                    left: PLANE_ICON_CONFIG.left,
                    right: PLANE_ICON_CONFIG.right,
                    rotate: PLANE_ICON_CONFIG.rotation,
                  }}
                  animate={{
                    y: [0, -PLANE_ICON_CONFIG.floatY, 0],
                  }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.2,
                  }}
                  className="hidden sm:block absolute z-20 pointer-events-none drop-shadow-md"
                >
                  <img
                    src="/assets/plane_icon.webp"
                    alt="Plane Icon"
                    className="w-auto h-auto object-contain"
                    style={{
                      maxWidth: PLANE_ICON_CONFIG.widthDesktop,
                      filter: PLANE_ICON_CONFIG.filter,
                    }}
                  />
                </motion.div>
              </>
            )}

            {/* Render Slide 2 Text Overlay (EDUCATIONAL CLASSROOM RUG) */}
            {slide.hasSlide2TextOverlay && (
              <>
                {/* 🖥️ Slide 2 Desktop Text Overlay */}
                <div 
                  style={{
                    top: SLIDE2_TEXT_CONFIG.top,
                    left: SLIDE2_TEXT_CONFIG.left,
                    maxWidth: SLIDE2_TEXT_CONFIG.maxWidth,
                  }}
                  className="hidden sm:flex absolute z-30 flex-col justify-center text-left"
                >
                  <div>
                    <h1 className="font-black text-[5.8vw] sm:text-[5.5vw] tracking-tight leading-[0.98] uppercase drop-shadow-sm flex flex-col">
                      {/* Line 1: EDUCATIONAL */}
                      <span className="text-[#0F2942]">EDUCATIONAL</span>

                      {/* Line 2: CLASSROOM (Multicolor Letters) */}
                      <div className="flex items-center gap-[0.1vw] my-[0.2vw]">
                        <span className="text-[#00A859]">C</span>
                        <span className="text-[#0047BA]">L</span>
                        <span className="text-[#F56B00]">A</span>
                        <span className="text-[#7B1FA2]">S</span>
                        <span className="text-[#512DA8]">S</span>
                        <span className="text-[#D32F2F]">R</span>
                        <span className="text-[#E64A19]">O</span>
                        <span className="text-[#689F38]">O</span>
                        <span className="text-[#7B1FA2]">M</span>
                      </div>

                      {/* Line 3: ≡ RUG ≡ */}
                      <div className="flex items-center gap-[1.2vw] text-[#0F2942]">
                        <span className="text-[#FFB300] tracking-tighter text-[4vw] sm:text-[3.5vw] leading-none">≡</span>
                        <span>RUG</span>
                        <span className="text-[#FFB300] tracking-tighter text-[4vw] sm:text-[3.5vw] leading-none">≡</span>
                      </div>
                    </h1>
                  </div>
                </div>

                {/* 📱 Slide 2 Mobile Text Overlay (Centered in top white space) */}
                <div 
                  style={{
                    top: '4.5%',
                    left: '0%',
                    width: '100%',
                  }}
                  className="block sm:hidden absolute z-30 px-3 text-center"
                >
                  <div className="flex flex-col items-center">
                    <h1 className="font-black text-[6vw] tracking-tight leading-[1] uppercase drop-shadow-sm flex flex-col items-center">
                      <span className="text-[#0F2942]">EDUCATIONAL</span>
                      <div className="flex items-center gap-1 my-0.5">
                        <span className="text-[#00A859]">C</span>
                        <span className="text-[#0047BA]">L</span>
                        <span className="text-[#F56B00]">A</span>
                        <span className="text-[#7B1FA2]">S</span>
                        <span className="text-[#512DA8]">S</span>
                        <span className="text-[#D32F2F]">R</span>
                        <span className="text-[#E64A19]">O</span>
                        <span className="text-[#689F38]">O</span>
                        <span className="text-[#7B1FA2]">M</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#0F2942]">
                        <span className="text-[#FFB300] tracking-tighter text-[4.5vw] leading-none">≡</span>
                        <span>RUG</span>
                        <span className="text-[#FFB300] tracking-tighter text-[4.5vw] leading-none">≡</span>
                      </div>
                    </h1>
                  </div>
                </div>
              </>
            )}

            {/* Render Slide 3 Text Overlay (Desktop & Mobile) */}
            {slide.hasSlide3TextOverlay && (
              <>
                {/* 🖥️ Slide 3 Desktop Text Overlay */}
                <div 
                  style={{
                    top: DESKTOP_TEXT_OVERLAY_CONFIG.top,
                    left: DESKTOP_TEXT_OVERLAY_CONFIG.left,
                    maxWidth: DESKTOP_TEXT_OVERLAY_CONFIG.maxWidth,
                  }}
                  className="hidden sm:flex absolute z-30 flex-col justify-center text-left"
                >
                  <div>
                    {/* Main 4-line Colored Headline */}
                    <h1 className="font-black text-[7.2vw] tracking-tight leading-[0.98] uppercase drop-shadow-sm">
                      <span className="block text-[#E52421]" style={WHITE_OUTLINE_STYLE}>EXPLORE,</span>
                      <span className="block text-[#0047BA]" style={WHITE_OUTLINE_STYLE}>CREATE,</span>
                      <span className="block text-[#008B74]" style={WHITE_OUTLINE_STYLE}>DISCOVER</span>
                      <span className="block text-[#F56B00]" style={WHITE_OUTLINE_STYLE}>MORE!</span>
                    </h1>
                  </div>
                </div>

                {/* 📱 Slide 3 Mobile Text Overlay */}
                <div 
                  style={{ top: '4.5%', left: '0%', width: '100%' }}
                  className="block sm:hidden absolute z-30 px-3 text-center"
                >
                  <div className="flex flex-col items-center">
                    <h1 className="font-black text-[6.8vw] tracking-tight leading-[1.05] uppercase drop-shadow-sm flex flex-col items-center">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#E52421]" style={MOBILE_WHITE_OUTLINE_STYLE}>EXPLORE,</span>
                        <span className="text-[#0047BA]" style={MOBILE_WHITE_OUTLINE_STYLE}>CREATE,</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-[0.3vw]">
                        <span className="text-[#008B74]" style={MOBILE_WHITE_OUTLINE_STYLE}>DISCOVER</span>
                        <span className="text-[#F56B00]" style={MOBILE_WHITE_OUTLINE_STYLE}>MORE!</span>
                      </div>
                    </h1>
                    <div className="mt-1 text-[2.7vw] font-extrabold text-slate-800 leading-snug text-center">
                      <p className="font-black text-slate-900">
                        Interactive Toys & Play Sets
                      </p>
                      <p className="mt-0.5 font-extrabold text-slate-700">
                        for <span className="text-[#0047BA]">Imaginative</span> <span className="text-[#008B74]">Young Minds</span>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Render Slide 4 Text Overlay (Desktop & Mobile) */}
            {slide.hasSlide4TextOverlay && (
              <>
                {/* 🖥️ Slide 4 Desktop Text Overlay */}
                <div 
                  style={{
                    top: DESKTOP_TEXT_OVERLAY_CONFIG.top,
                    left: DESKTOP_TEXT_OVERLAY_CONFIG.left,
                    maxWidth: DESKTOP_TEXT_OVERLAY_CONFIG.maxWidth,
                  }}
                  className="hidden sm:flex absolute z-30 flex-col justify-center text-left"
                >
                  <div>
                    {/* Main 4-line Colored Headline */}
                    <h1 className="font-black text-[7.2vw] tracking-tight leading-[0.98] uppercase drop-shadow-sm">
                      <span className="block text-[#0047BA]" style={WHITE_OUTLINE_STYLE}>ACTIVE PLAY,</span>
                      <span className="block text-[#008B74]" style={WHITE_OUTLINE_STYLE}>ENDLESS</span>
                      <span className="block text-[#F56B00]" style={WHITE_OUTLINE_STYLE}>FUN!</span>
                    </h1>
                  </div>
                </div>

                {/* 📱 Slide 4 Mobile Text Overlay */}
                <div 
                  style={{ top: '4.5%', left: '0%', width: '100%' }}
                  className="block sm:hidden absolute z-30 px-3 text-center"
                >
                  <div className="flex flex-col items-center">
                    <h1 className="font-black text-[6.8vw] tracking-tight leading-[1.05] uppercase drop-shadow-sm flex flex-col items-center">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#0047BA]" style={MOBILE_WHITE_OUTLINE_STYLE}>ACTIVE PLAY,</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-[0.3vw]">
                        <span className="text-[#008B74]" style={MOBILE_WHITE_OUTLINE_STYLE}>ENDLESS</span>
                        <span className="text-[#F56B00]" style={MOBILE_WHITE_OUTLINE_STYLE}>FUN!</span>
                      </div>
                    </h1>
                    <div className="mt-1 text-[2.7vw] font-extrabold text-slate-800 leading-snug text-center">
                      <p className="font-black text-slate-900">
                        Safe & Premium Playgrounds
                      </p>
                      <p className="mt-0.5 font-extrabold text-slate-700">
                        built for <span className="text-[#0047BA]">Every</span> <span className="text-[#008B74]">Adventure</span>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Pagination Styling */}
      <style dangerouslySetInnerHTML={{ __html: `
        .main-banner-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #00C4B5;
          opacity: 0.4;
          transition: all 0.3s ease;
        }
        .main-banner-swiper .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 6px;
          background: #00C4B5;
          opacity: 1;
        }
        .main-banner-swiper .swiper-pagination {
          bottom: 12px !important;
        }
      ` }} />
    </section>
  );
};

export default MainBanner;
