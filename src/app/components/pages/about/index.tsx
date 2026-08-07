'use client';

import React, { useEffect, useRef, useState } from 'react';

// --- HELPER COMPONENT: Handles scroll detection and applies Tailwind classes ---
interface ScrollRevealProps {
  children: React.ReactNode;
  baseClass: string;
  activeClass: string;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  baseClass,
  activeClass,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? activeClass : baseClass
      } ${className}`}
    >
      {children}
    </div>
  );
};

// --- HELPER COMPONENT: For Word-by-Word staggered animation using Tailwind ---
interface StaggeredTextRevealProps {
  text: string;
  className?: string;
}

const StaggeredTextReveal: React.FC<StaggeredTextRevealProps> = ({
  text,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
        else setIsVisible(false);
      },
      { threshold: 0.3 }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <p ref={domRef} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className={`inline-block transition-all duration-500 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0 blur-none'
              : 'opacity-0 translate-y-4 blur-sm'
          }`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
};

// --- MAIN PAGE COMPONENT WITH IMAGES & BABY CYAN THEME ---
function AboutUsScrollAnimation() {
  return (
    <div className="bg-[#E0F7F6] text-[#2D3436] overflow-hidden font-quicksand">
      
      {/* 1. TOP HERO BANNER (CONTAINED WITH ROUNDED CORNERS, CROPPED BORDERS) */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-8 pb-4">
        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
          <img
            src="/assets/aboutus/aboutus_banner.jpeg"
            alt="About Us Banner"
            className="w-full h-auto max-h-[400px] object-cover scale-[1.05] block"
          />
        </div>
      </section>

      {/* 2. Intro Indicator */}
      <div className="py-10 flex items-center justify-center bg-[#E0F7F6]">
        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md px-8 py-3.5 rounded-full shadow-lg border-2 border-[#00C4B5]/40">
          <h2 className="text-4xl md:text-5xl font-black text-[#00A89B] tracking-wider uppercase">
            Our Story
          </h2>
          {/* Giraffe SVG Image Asset */}
          <img
            src="/assets/clouds/giraffe-svgrepo-com.svg"
            alt="Giraffe Icon"
            className="w-12 h-12 inline-block animate-bounce"
          />
        </div>
      </div>

      {/* 3. Who We Are (Image + ScrollReveal) */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ScrollReveal
          baseClass="opacity-0 -translate-x-12 blur-sm"
          activeClass="opacity-100 translate-x-0 blur-none"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
            <img
              src="/assets/aboutus/who_We_are.jpeg"
              alt="Who We Are"
              className="w-full h-[400px] object-cover object-[center_35%] scale-105 hover:scale-110 transition-transform duration-700"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal
          baseClass="opacity-0 translate-y-8 blur-md"
          activeClass="opacity-100 translate-y-0 blur-none"
        >
          <div className="space-y-6 text-left">
            <span className="text-[#00C4B5] font-extrabold uppercase tracking-widest text-sm">
              Established in 2002
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#2D3436] leading-tight">
              Leading Supplier of Playground & Playing Equipment
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Incepted in the year 2002, <strong className="text-[#2D3436]">Toy Park Delhi Pvt. Ltd.</strong> is known to be one of the leading suppliers, wholesalers, distributors, and retailers of an impeccable range of playground equipment, kids toys, trampolines, and children's furniture. Manufacturing follows strict industry norms to ensure sturdiness, durability, and safety.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. The Team Vibe (Cohesive Full-Width Card Layout) */}
      <section className="py-16 px-6 md:px-16 bg-[#E0F7F6] flex justify-center">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-[#00C4B5]/20 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex-1 text-left">
            <StaggeredTextReveal
              text="we are a collective of dreamers and doers ✨"
              className="text-3xl md:text-5xl lowercase font-extrabold text-[#00A89B] leading-tight"
            />
          </div>

          <ScrollReveal
            baseClass="opacity-0 translate-x-8 blur-sm"
            activeClass="opacity-100 translate-x-0 blur-none"
            className="flex items-center gap-6 flex-shrink-0"
          >
            {/* Cute Kitty peeking next to logo */}
            <img
              src="/assets/clouds/cat-halloween-kitty-svgrepo-com.svg"
              alt="Playful Kitty"
              className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 -rotate-6 transition-transform duration-300 drop-shadow-sm"
            />

            {/* Toy Park Logo */}
            <img
              src="/assets/clean_logo_toypark.webp"
              alt="Toy Park Clean Logo"
              className="w-36 md:w-48 h-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-500"
            />
          </ScrollReveal>

        </div>
      </section>

      {/* 5. Advanced Warehousing & Infrastructure (Image + ScrollReveal) */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ScrollReveal
          baseClass="opacity-0 translate-x-12 blur-sm"
          activeClass="opacity-100 translate-x-0 blur-none"
          className="order-1 md:order-2"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
            <img
              src="/assets/aboutus/what_makes_us different_aboutus.jpeg"
              alt="What Makes Us Different"
              className="w-full h-[400px] object-cover object-[center_35%] scale-105 hover:scale-110 transition-transform duration-700"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal
          baseClass="opacity-0 -translate-x-12"
          activeClass="opacity-100 translate-x-0"
          className="order-2 md:order-1 text-left"
        >
          <div className="space-y-6">
            <span className="text-[#00C4B5] font-extrabold uppercase tracking-widest text-sm">
              State-of-the-Art Infrastructure
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#2D3436] leading-tight">
              Advanced Warehousing & Compartmentalized Facility
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Our highly advanced, spacious warehousing facility at Toy Park Delhi Pvt. Ltd. is laced with modern machinery. Undergoing regular up-gradation, our climate-safe, compartmentalized setup ensures effective management and long-term preservation of equipment.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 6. Leadership & Vision (Image + Closing Reveal) */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ScrollReveal
          baseClass="opacity-0 -translate-y-12 blur-sm"
          activeClass="opacity-100 translate-y-0 blur-none"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
            <img
              src="/assets/aboutus/why_choose_us.jpeg"
              alt="Why Choose Us"
              className="w-full h-[400px] object-cover object-[center_35%] scale-105 hover:scale-110 transition-transform duration-700"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal
          baseClass="opacity-0 translate-y-12"
          activeClass="opacity-100 translate-y-0"
          className="text-left space-y-6"
        >
          <span className="text-[#00C4B5] font-extrabold uppercase tracking-widest text-sm">
            Visionary Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#2D3436] leading-tight">
            Guided by Director Mr. Pulkit Singal
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Under the leadership and guidance of our Director, <strong className="text-[#2D3436]">Mr. Pulkit Singal</strong>, we have attained greater heights of success. His deep market insight and client-centric approach continue to drive our ethical standards and market leadership.
          </p>
        </ScrollReveal>
      </section>

    </div>
  );
}

export default AboutUsScrollAnimation;
