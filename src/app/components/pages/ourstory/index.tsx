'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, ChevronUp, Sparkles, Award, Shapes } from 'lucide-react';
import Lenis from 'lenis';

// --- HELPER: HOT LAB STYLE ANIMATED COUNTER ---
interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  prefix = '',
  suffix = '',
  label,
}) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    const current = counterRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [target, hasAnimated]);

  return (
    <div ref={counterRef} className="flex items-center gap-3">
      {/* Huge Thin Number (Hot Lab Style) */}
      <span className="text-6xl sm:text-7xl md:text-8xl font-serif text-[#0F2228] font-extralight tracking-tight leading-none">
        {prefix}{count}{suffix}
      </span>
      {/* 2-line Label beside number */}
      <span className="text-xs sm:text-sm font-sans text-[#475569] font-normal max-w-[100px] leading-tight text-left">
        {label}
      </span>
    </div>
  );
};

export default function OurStoryComponent() {
  // Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // 1st Scroll Progress logic for vertical line & text color transition
  const lineSectionRef = useRef<HTMLDivElement>(null);
  const [lineProgress, setLineProgress] = useState(0);

  // 2nd Scroll Progress logic for vertical line above cards
  const cardsLineSectionRef = useRef<HTMLDivElement>(null);
  const [cardsLineProgress, setCardsLineProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1st Line calculation - Fast scroll mapping
      if (lineSectionRef.current) {
        const rect = lineSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Start moving when top reaches 85% of screen, finish by 45%
        const startPoint = windowHeight * 0.85;
        const distance = windowHeight * 0.4;
        const currentProgress = (startPoint - rect.top) / distance;
        setLineProgress(Math.min(Math.max(currentProgress, 0), 1));
      }

      // 2nd Cards Line calculation - Fast scroll mapping
      if (cardsLineSectionRef.current) {
        const rect = cardsLineSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Start moving when top reaches 85% of screen, finish by 45%
        const startPoint = windowHeight * 0.85;
        const distance = windowHeight * 0.4;
        const currentProgress = (startPoint - rect.top) / distance;
        setCardsLineProgress(Math.min(Math.max(currentProgress, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#FAFCFC] font-quicksand text-[#2D3436] relative overflow-hidden">
      
      {/* ═══ 1. BACKGROUND VIDEO (95vh COVER) WITH WHITE OVERLAY NAVBAR ═══ */}
      <div className="w-full h-[95vh] overflow-hidden bg-black relative">
        <video
          src="/video/Website_video_showing_playground…_1080p_202608070041.mp4"
          className="w-full h-full object-cover block absolute inset-0 z-0 brightness-[1.02] contrast-[1.04]"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay Navbar with Centered OUR STORY */}
        <header className="absolute top-0 left-0 right-0 z-50 text-white font-quicksand">
          <nav className="px-6 lg:px-12 py-6 flex items-center justify-between">
            <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between">
              
              {/* LEFT: ToyPark Logo */}
              <div className="flex items-center">
                <a href="/" className="flex items-center gap-2 cursor-pointer">
                  <img 
                    src="/assets/ToyPark_logo.png" 
                    alt="ToyPark Logo" 
                    className="h-14 sm:h-18 md:h-20 w-auto object-contain max-w-[260px] transform hover:scale-105 transition-transform brightness-0 invert" 
                  />
                </a>
              </div>

              {/* CENTER: OUR STORY (Clean White Overlay Text) */}
              <div className="flex items-center justify-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-[0.2em] text-white drop-shadow-lg bg-white/10 backdrop-blur-md px-8 py-2.5 rounded-full border-2 border-white/80">
                  OUR STORY
                </span>
              </div>

              {/* RIGHT: Home Button */}
              <div className="flex items-center">
                <a href="/">
                  <button className="px-6 py-2.5 rounded-full border-2 border-white text-white font-extrabold text-sm sm:text-base flex items-center gap-2 transition-all hover:bg-white/20 backdrop-blur-md">
                    <span>Home</span>
                    <ArrowRight className="w-4 h-4 stroke-[3] text-white" />
                  </button>
                </a>
              </div>

            </div>
          </nav>
        </header>
      </div>

      {/* ═══ 2. INTERACTIVE SCROLL STORY SECTION (EDITORIAL LUXURY) ═══ */}
      <section className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto text-center flex flex-col items-center">
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#0F2228] leading-tight tracking-tight max-w-5xl w-full mb-12 font-normal">
          For those who make play their destination
        </h1>

        {/* 1st Story Text Paragraph */}
        <div className="max-w-4xl w-full text-center space-y-4 text-lg md:text-2xl leading-relaxed text-[#475569] font-medium mb-16">
          <p>Toy Park is a premier playground & toy manufacturing studio based in Delhi since 2002.</p>
          <p>Ergonomic safety and vibrant aesthetics are developed as one clear vision.</p>
          <p>Every line is intentional. Every structure is designed to move, play, and endure.</p>
          <p>Innovation is never an end in itself, but a tool to create distinction.</p>
          <p>This is design for those who set their own standard of play.</p>
          <p>A Toy Park project is more than equipment; it's a statement of joy and quality.</p>
        </div>

        {/* Interactive Link Button */}
        <a 
          href="/about" 
          className="inline-flex items-center gap-2 text-base uppercase tracking-widest font-bold text-[#0F2228] border-b-2 border-[#0F2228] pb-1 hover:text-[#00A89B] hover:border-[#00A89B] transition-colors mb-16"
        >
          <span>ABOUT US</span>
          <ArrowUpRight className="w-5 h-5" />
        </a>

        {/* ═══ 3. ANIMATED SCROLL LINE & BULLET INTERACTION ═══ */}
        <div ref={lineSectionRef} className="relative w-full py-10 flex flex-col items-center">
          
          {/* Vertical Line Container */}
          <div className="relative w-[1.5px] h-36 md:h-52 bg-gray-300 rounded-full overflow-visible my-4">
            
            {/* Moving Thick Line Bullet Indicator */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 w-[3.5px] bg-[#00A89B] rounded-full shadow-sm"
              style={{ 
                height: '44px',
                top: `calc(${lineProgress * 100}% - ${lineProgress * 44}px)`
              }}
            />
          </div>

          {/* 2nd Section Scroll Text Reveal */}
          <div className="mt-12 space-y-6 max-w-4xl w-full text-center">
            <h2 
              className={`text-4xl md:text-6xl font-serif transition-all duration-700 font-normal ${
                lineProgress > 0.2 
                  ? 'text-[#00A89B] opacity-100 scale-100' 
                  : 'text-gray-400 opacity-50 scale-95'
              }`}
            >
              Craftsmanship & Identity
            </h2>

            <div 
              className={`space-y-4 text-lg md:text-xl leading-relaxed font-medium transition-all duration-700 ${
                lineProgress > 0.35 
                  ? 'text-[#0F2228] opacity-100' 
                  : 'text-gray-400 opacity-40'
              }`}
            >
              <p>Design recognized at the highest level of safety and engineering.</p>
              <p>International standards earned through indoor, outdoor, and full park creations.</p>
              <p>Each milestone reflects consistency, vision, and enduring impact.</p>
            </div>
          </div>

        </div>

      </section>

      {/* ═══ 4. FEATURED MASTERPIECES OVERLAY WITH BABY CYAN TINT & ALL PROJECTS LINK ═══ */}
      <section className="relative w-full min-h-[650px] my-16 overflow-hidden bg-slate-900 group shadow-2xl">
        
        {/* Full Width Background Image */}
        <img
          src="/assets/ourStory/Children_playroom_interior_design_2K_202608081257.jpeg"
          alt="Featured Playroom Interior Design"
          className="absolute inset-0 w-full h-full object-cover block group-hover:scale-[1.02] transition-transform duration-1000 z-0"
        />

        {/* Soft Baby Blue / Cyan Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#E0F7F6]/95 via-[#E0F7F6]/80 to-transparent pointer-events-none z-10 w-full lg:w-[60%]" />

        <div className="relative z-20 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[650px] items-center px-6 lg:px-12 py-12">
          
          {/* Left Side: Overlaid Text on Image Wall - Shifted Left with Baby Cyan Tint */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 py-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#0F2228] mb-10 font-normal">
                Featured masterpieces
              </h2>

              {/* List items with bottom border */}
              <div className="space-y-4 font-sans text-sm md:text-base">
                {[
                  { name: "KIDZA PLAYROOM SYSTEM", category: "INDOOR PLAY 2-6 YRS" },
                  { name: "OUTDOOR ADVENTURE TOWER", category: "MULTIPLAY PARK" },
                  { name: "JUNGLE GYM & SLIDES", category: "PRESCHOOL SERIES" },
                  { name: "SAFETY TRAMPOLINE PARK", category: "SPORTS & RECREATION" },
                  { name: "CREATIVE BLOCK ZONE", category: "TODDLER ACTIVITY" },
                  { name: "ECO WOODEN PLAY SET", category: "NATURAL WOOD" },
                  { name: "MODERN SOFT PLAY AREA", category: "COMMERCIAL MALLS" },
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between border-b border-[#0F2228]/20 pb-3 hover:border-[#00A89B] transition-colors cursor-pointer group/item"
                  >
                    <span className="font-bold text-[#0F2228] group-hover/item:text-[#00A89B] transition-colors tracking-wide">
                      {item.name}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#475569] font-semibold group-hover/item:text-[#00A89B] transition-colors">
                      {item.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom All Projects Link */}
            <a 
              href="/products" 
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-extrabold text-[#0F2228] border-b-2 border-[#0F2228] pb-1 hover:text-[#00A89B] hover:border-[#00A89B] transition-colors w-fit pt-2"
            >
              <span>ALL PROJECTS</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

        </div>

      </section>

      {/* ═══ 5. SEA OF HONORS & 3 CODE-DESIGNED UI AWARD CARDS SECTION WITH VERTICAL SCROLL LINE ═══ */}
      <section className="pt-16 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto text-center flex flex-col items-center">
        
        {/* Animated Scroll Line & Bullet Indicator Above Cards Section */}
        <div ref={cardsLineSectionRef} className="relative w-full py-4 flex flex-col items-center mb-2">
          <div className="relative w-[1.5px] h-36 md:h-48 bg-gray-300 rounded-full overflow-visible my-2">
            <div 
              className="absolute left-1/2 -translate-x-1/2 w-[3.5px] bg-[#00A89B] rounded-full shadow-sm"
              style={{ 
                height: '44px',
                top: `calc(${cardsLineProgress * 100}% - ${cardsLineProgress * 44}px)`
              }}
            />
          </div>
        </div>

        {/* Section Heading */}
        <div className="space-y-4 max-w-4xl text-center mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#00A89B] bg-white px-6 py-2 rounded-full border border-[#00C4B5]/40 shadow-sm inline-block">
            GLOBAL RECOGNITION & CERTIFICATIONS
          </span>
          <h2 
            className={`text-4xl sm:text-5xl md:text-6xl font-serif transition-all duration-700 font-normal ${
              cardsLineProgress > 0.2 
                ? 'text-[#00A89B] opacity-100 scale-100' 
                : 'text-gray-400 opacity-50 scale-95'
            }`}
          >
            Sea of honors
          </h2>
          <p className="text-lg md:text-xl text-[#475569] font-medium leading-relaxed max-w-2xl mx-auto">
            Design recognized at the highest level of craftsmanship. International safety standards earned through indoor, outdoor, and full park designs.
          </p>
        </div>

        {/* 3 Pure Code-Designed UI Cards Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              year: "2025",
              title: "International Safety & Ergonomics Award",
              desc: "Certified for zero-compromise child ergonomics, rounded safety edges, and eco-certified non-toxic play materials.",
              badge: "SAFETY STANDARDS CERTIFIED",
              icon: Sparkles,
              gradient: "from-[#00A89B]/10 via-[#00C4B5]/20 to-white",
              accent: "#00A89B"
            },
            {
              year: "2025",
              title: "Design Elite Playroom Award",
              desc: "Honored for modular playroom integration, spatial flexibility, and interactive sensory play environments.",
              badge: "EXCELLENCE IN PLAY INFRASTRUCTURE",
              icon: Award,
              gradient: "from-[#E0F7F6] via-teal-50 to-white",
              accent: "#00C4B5"
            },
            {
              year: "2025",
              title: "Global Outdoor Park Concept",
              desc: "Awarded for groundbreaking multiplay tower architecture and eco-sustainable outdoor play structures.",
              badge: "INNOVATIVE PLAY CONCEPTS",
              icon: Shapes,
              gradient: "from-sky-100/70 via-blue-50 to-white",
              accent: "#1E293B"
            }
          ].map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div 
                key={idx}
                className="group relative flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-white border-2 border-[#00C4B5]/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-left overflow-hidden"
              >
                {/* Top Badge & Code Graphic */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center border border-[#00C4B5]/30 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <IconComp className="w-7 h-7 text-[#00A89B]" />
                    </div>
                    <span className="text-2xl font-serif font-black text-[#0F2228]/20 group-hover:text-[#00A89B] transition-colors">
                      {card.year}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0F2228] group-hover:text-[#00A89B] transition-colors leading-tight mb-4">
                    {card.title}
                  </h3>

                  <p className="text-sm md:text-base text-[#64748B] leading-relaxed font-medium mb-8">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Badge */}
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#00A89B] bg-[#E0F7F6] px-4 py-2 rounded-full inline-block border border-[#00C4B5]/30">
                    {card.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* ═══ 6. OPEN BOOK FEATURE IMAGE SECTION WITH HEADLINE & SVG BESIDE IT ═══ */}
      <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Headline with SVG beside it */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0F2228] font-normal tracking-tight">
            The Toy Park Storybook
          </h2>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#E0F7F6] p-2 flex items-center justify-center border border-[#00C4B5]/30 shadow-sm flex-shrink-0">
            <img
              src="/assets/ourStory/animal-kangaroo-svgrepo-com.svg"
              alt="Toy Park Animal Mascot"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Main Open Book Image */}
        <div className="w-full flex justify-center items-center drop-shadow-2xl hover:scale-[1.01] transition-transform duration-700">
          <img
            src="/assets/ourStory/Open_book_featuring_logo_and_202608081207 Background Removed.png"
            alt="Toy Park Open Book Story"
            className="w-full max-w-5xl h-auto object-contain block"
          />
        </div>
      </section>

      {/* ═══ 7. BOTTOM FOOTER BAR WITH SCROLL TO TOP BUTTON ═══ */}
      <div className="py-8 px-6 md:px-16 max-w-[1400px] mx-auto flex justify-end items-center">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-[#1E293B] text-white flex items-center justify-center hover:bg-[#00A89B] transition-colors duration-300 shadow-md"
          title="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
