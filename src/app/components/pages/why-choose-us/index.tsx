"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Sparkles, Star, Zap, Rocket, Gamepad2, Heart, ArrowRight } from "lucide-react";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const reasons = [
  { 
    title: "Safety Certified", 
    desc: "Every piece of furniture we design undergoes rigorous testing to meet global safety standards. Non-toxic finishes, rounded corners, and sturdy construction keep your little explorers safe.", 
    color: "bg-pink-500", 
    top: "22%", 
    left: "8%" 
  },
  { 
    title: "Eco-Friendly Sourcing", 
    desc: "We love the earth as much as children do. We use FSC-certified sustainable timber, recycled materials, and green production processes to ensure a better planet for future generations.", 
    color: "bg-cyan-500", 
    top: "48%", 
    left: "72%" 
  },
  { 
    title: "Child-Centric Growth", 
    desc: "Our designs are inspired by play-based learning theories. We craft spaces and furniture that encourage active curiosity, build independence, and adapt to children as they grow.", 
    color: "bg-amber-500", 
    top: "74%", 
    left: "14%" 
  },
];

const pillars = [
  { title: "Scandinavian Design", dept: "Modern Aesthetics", label1: "Sleek", label2: "Design", color: "from-cyan-400 to-blue-500" },
  { title: "Ergonomic Layouts", dept: "Child Comfort", label1: "Comfy", label2: "Fit", color: "from-pink-400 to-rose-500" },
  { title: "Tough & Durable", dept: "Built to Last", label1: "Solid", label2: "Build", color: "from-amber-400 to-orange-500" },
  { title: "Interactive Elements", dept: "Play Integration", label1: "Active", label2: "Play", color: "from-emerald-400 to-teal-500" },
];

export default function WhyChooseUsPageContent() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const toyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.ticker.lagSmoothing(0, 0);

    const ctx = gsap.context(() => {

      // 1. HERO PARALLAX (stable, no pin, no clipping glitch)
      //    Background image moves slower than scroll = depth effect
      gsap.to(heroBgRef.current, {
        y: "30%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // Hero text fades up and slides out as user scrolls away
      gsap.to(heroTextRef.current, {
        y: "-25%",
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "60% top",
          scrub: true,
        }
      });

      // 2. BOARD GAME PATH REVEAL (draw the line)
      const pathLength = pathRef.current?.getTotalLength?.() || 2000;
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".board-game-section",
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      // Rocket moving along path
      if (pathRef.current && toyRef.current) {
        gsap.to(toyRef.current, {
          motionPath: {
            path: pathRef.current,
            align: pathRef.current,
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
          ease: "none",
          scrollTrigger: {
            trigger: ".board-game-section",
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          },
        });
      }

      // 3. POP-UP PERKS
      gsap.utils.toArray(".perk-station").forEach((station: any) => {
        gsap.from(station, {
          scale: 0,
          rotation: -20,
          opacity: 0,
          ease: "back.out(2.5)",
          scrollTrigger: {
            trigger: station,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // 4. SECTION REVEALS
      gsap.utils.toArray(".reveal-up").forEach((el: any) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          ease: "power3.out",
          duration: 0.9,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

    }, mainRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <div
      ref={mainRef}
      className="bg-[#082f49] text-white font-sans selection:bg-pink-500 selection:text-white relative"
    >
      {/* Toy Box 3D Styles */}
      <style>{`
        .preserve-3d { transform-style: preserve-3d; }
        .toy-box-lid {
          transform-origin: top center;
          transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
          backface-visibility: hidden;
        }
        .toy-box:hover .toy-box-lid {
          transform: rotateX(115deg);
        }
        .jack-in-box {
          transform: translateY(60%) scale(0.6);
          opacity: 0;
          transition: transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s,
                      opacity 0.3s ease 0.15s;
        }
        .toy-box:hover .jack-in-box {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
      `}</style>

      {/* ─── 1. HERO ─────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Parallax background image */}
        <div
          ref={heroBgRef}
          className="absolute inset-0 w-full h-[130%] -top-[15%] will-change-transform"
        >
          <Image
            src="/assets/WHOWEARE/Brightly_lit_empty_playroom_toys_202608081652.jpeg"
            alt="ToyPark Design Lab"
            fill
            className="object-cover saturate-150 brightness-50"
            priority
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#082f49]/60 via-transparent to-[#082f49]" />

        {/* Hero text content */}
        <div
          ref={heroTextRef}
          className="relative z-10 text-center px-6 will-change-transform"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-cyan-300 px-5 py-2 rounded-full font-bold text-sm uppercase tracking-widest mb-8">
            <Sparkles className="w-4 h-4" /> Why Choose ToyPark
          </div>
          <h1 className="text-[13vw] md:text-[10vw] font-black leading-[0.85] uppercase tracking-tighter text-white drop-shadow-2xl mb-6">
            Built For Play<br />
            <span className="text-cyan-300">Safe & Sweet</span>
          </h1>
          <p className="text-lg md:text-2xl text-cyan-200 font-medium max-w-xl mx-auto">
            Discover why parents and partners trust ToyPark for children spaces.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs font-bold tracking-widest uppercase">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
          </div>
          Scroll
        </div>
      </section>

      {/* ─── 2. BOARD GAME CULTURE PATH ─────────────────── */}
      <section className="board-game-section relative w-full min-h-[200vh] bg-[#0ea5e9] overflow-hidden rounded-t-[4rem] border-t-8 border-cyan-300 shadow-[0_-20px_60px_rgba(14,165,233,0.5)]">

        <div className="absolute top-20 inset-x-0 text-center z-20 reveal-up px-6">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white drop-shadow-lg">
            Our Core Promises
          </h2>
          <p className="text-cyan-100 font-medium text-lg mt-4">
            Hover over each station to discover what sets us apart.
          </p>
        </div>

        {/* SVG winding path */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1000 2000"
          >
            <path
              ref={pathRef}
              d="M 500,0 C 700,350 200,650 500,1000 C 800,1350 300,1650 500,2000"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray="30 18"
            />
          </svg>
        </div>

        {/* Moving Rocket Icon on the River Path */}
        <div
          ref={toyRef}
          className="absolute top-0 left-0 w-16 h-16 z-30 pointer-events-none -ml-8 -mt-8"
        >
          <div className="w-full h-full bg-white rounded-full shadow-2xl flex items-center justify-center text-pink-500 rotate-90 border-2 border-pink-300">
            <Rocket className="w-8 h-8 animate-pulse" />
          </div>
        </div>

        {/* Perk stations */}
        {reasons.map((reason, i) => {
          // Adjust position slightly to ensure the wider cards do not bleed off the screen edges
          const positionStyles = i === 1 
            ? { top: reason.top, right: "8%" } // Align second card from the right side
            : { top: reason.top, left: "8%" };  // Align first and third from the left side

          return (
            <div
              key={i}
              className="perk-station absolute z-20"
              style={positionStyles}
            >
              <div className="group relative cursor-help">
                <div
                  className={`w-80 sm:w-[26rem] p-6 sm:p-8 rounded-[2.2rem] ${reason.color} border-4 border-white shadow-2xl flex flex-col gap-3 items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                >
                  <span className="font-black text-white text-2xl sm:text-3xl leading-none uppercase tracking-wider text-center select-none">
                    {reason.title}
                  </span>
                  <p className="text-white/90 text-sm sm:text-base font-semibold leading-relaxed text-center select-none">
                    {reason.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ─── 3. TOY BOX JOB LISTINGS ─────────────────────── */}
      <section className="relative py-32 px-6 md:px-12 bg-[#082f49] z-10" style={{ perspective: "1000px" }}>
        <div className="text-center mb-20 reveal-up">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight inline-block mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-400">
              Unbox Our Pillars
            </span>
          </h2>
          <p className="text-xl text-cyan-200 font-medium max-w-2xl mx-auto">
            Hover each box to reveal how we design our playroom products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto reveal-up">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="toy-box preserve-3d relative w-full aspect-square cursor-pointer"
              style={{ perspective: "800px" }}
            >
              {/* Inside — revealed on hover */}
              <div className="absolute inset-0 bg-white rounded-3xl p-6 shadow-xl border-8 border-cyan-100 flex flex-col items-center justify-center overflow-hidden">
                <div className="jack-in-box flex flex-col items-center text-center">
                  <Star className="w-12 h-12 text-amber-400 fill-amber-300 mb-4" />
                  <span className="text-[#0ea5e9] font-bold text-xs uppercase tracking-widest mb-2">{pillar.dept}</span>
                  <h3 className="text-2xl font-black text-[#082f49] leading-tight mb-6">{pillar.title}</h3>
                  <a href="/products" className="bg-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-pink-600 transition-colors flex items-center gap-2 text-sm">
                    Explore Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Lid */}
              <div
                className={`toy-box-lid absolute inset-0 bg-gradient-to-br ${pillar.color} rounded-3xl p-8 shadow-2xl flex flex-col justify-between border-4 border-white/20 overflow-hidden z-10`}
              >
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <span className="text-white/70 font-black tracking-widest uppercase text-xs">
                  Pillar #{idx + 1}
                </span>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30 mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white leading-none">{pillar.label1}<br/>{pillar.label2}</h3>
                </div>
                <p className="text-center text-white/50 font-bold uppercase text-xs tracking-widest">
                  Hover to Open ↑
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 4. BOTTOM CTA ───────────────────────────────── */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] text-center relative overflow-hidden rounded-t-[3rem]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto reveal-up">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-8">
            Create Playful<br />Magic Today.
          </h2>
          <p className="text-cyan-50 text-xl font-medium mb-12 max-w-xl mx-auto">
            Ready to design the ultimate playroom space for kids? Explore our wholesale catalog.
          </p>
          <a href="/products" className="inline-block bg-white text-[#0ea5e9] px-10 py-5 rounded-full font-black text-lg shadow-[0_8px_0_rgb(2,132,199)] hover:translate-y-2 hover:shadow-[0_2px_0_rgb(2,132,199)] transition-all duration-200 uppercase tracking-wide">
            Explore Collections
          </a>
        </div>
      </section>
    </div>
  );
}
