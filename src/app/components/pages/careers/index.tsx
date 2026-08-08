"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Sparkles, Star, Zap, Rocket, Gamepad2, Heart, ArrowRight } from "lucide-react";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const perks = [
  { title: "Infinite Play", desc: "Our offices are giant playgrounds. Ideas come from fun, not boardrooms.", color: "bg-pink-500", icon: Gamepad2, top: "22%", left: "8%" },
  { title: "Family Magic", desc: "World-class parental leave and family health benefits. Family is everything.", color: "bg-cyan-500", icon: Heart, top: "48%", left: "72%" },
  { title: "Rocket Growth", desc: "Huge learning budgets to skyrocket your skills and career trajectory.", color: "bg-amber-500", icon: Rocket, top: "74%", left: "14%" },
];

const jobs = [
  { title: "Master Toy Architect", dept: "Design", color: "from-cyan-400 to-blue-500" },
  { title: "Frontend Sorcerer", dept: "Engineering", color: "from-pink-400 to-rose-500" },
  { title: "Vibe Manager", dept: "Community", color: "from-amber-400 to-orange-500" },
  { title: "3D Dream Weaver", dept: "Animation", color: "from-emerald-400 to-teal-500" },
];

export default function CareersPageContent() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const toyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
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
            alt="ToyPark Play Lab"
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
            <Sparkles className="w-4 h-4" /> Careers at ToyPark
          </div>
          <h1 className="text-[13vw] md:text-[10vw] font-black leading-[0.85] uppercase tracking-tighter text-white drop-shadow-2xl mb-6">
            Enter The<br />
            <span className="text-pink-400">Play Lab</span>
          </h1>
          <p className="text-lg md:text-2xl text-cyan-200 font-medium max-w-xl mx-auto">
            Where imagination is your job title.
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
            Life at ToyPark
          </h2>
          <p className="text-cyan-100 font-medium text-lg mt-4">
            Hover over each stop to discover the perks.
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
        {perks.map((perk, i) => {
          const Icon = perk.icon;
          return (
            <div
              key={i}
              className="perk-station absolute z-20"
              style={{ top: perk.top, left: perk.left }}
            >
              <div className="group relative cursor-help">
                <div
                  className={`w-24 h-24 rounded-3xl ${perk.color} border-4 border-white shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-12 h-12 text-white" />
                </div>
                {/* Tooltip */}
                <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white text-[#082f49] p-6 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 origin-top z-30">
                  <h3 className="text-xl font-black mb-2 uppercase">{perk.title}</h3>
                  <p className="text-sm font-medium leading-relaxed">{perk.desc}</p>
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
              Unbox Your Future
            </span>
          </h2>
          <p className="text-xl text-cyan-200 font-medium max-w-2xl mx-auto">
            Hover each box to reveal the role hiding inside.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto reveal-up">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="toy-box preserve-3d relative w-full aspect-square cursor-pointer"
              style={{ perspective: "800px" }}
            >
              {/* Inside — revealed on hover */}
              <div className="absolute inset-0 bg-white rounded-3xl p-6 shadow-xl border-8 border-cyan-100 flex flex-col items-center justify-center overflow-hidden">
                <div className="jack-in-box flex flex-col items-center text-center">
                  <Star className="w-12 h-12 text-amber-400 fill-amber-300 mb-4" />
                  <span className="text-[#0ea5e9] font-bold text-xs uppercase tracking-widest mb-2">{job.dept}</span>
                  <h3 className="text-2xl font-black text-[#082f49] leading-tight mb-6">{job.title}</h3>
                  <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-pink-600 transition-colors flex items-center gap-2 text-sm">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Lid */}
              <div
                className={`toy-box-lid absolute inset-0 bg-gradient-to-br ${job.color} rounded-3xl p-8 shadow-2xl flex flex-col justify-between border-4 border-white/20 overflow-hidden z-10`}
              >
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <span className="text-white/70 font-black tracking-widest uppercase text-xs">
                  Opening #{idx + 1}
                </span>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30 mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white leading-none">Mystery<br/>Box</h3>
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
      <section className="py-32 px-6 bg-pink-500 text-center relative overflow-hidden rounded-t-[3rem]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto reveal-up">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-8">
            Create Magic<br />Every Day.
          </h2>
          <p className="text-pink-100 text-xl font-medium mb-12 max-w-xl mx-auto">
            Don't see a fit? Send us your open application and we'll be in touch.
          </p>
          <button className="bg-white text-pink-500 px-10 py-5 rounded-full font-black text-lg shadow-[0_8px_0_rgb(190,24,93)] hover:translate-y-2 hover:shadow-[0_2px_0_rgb(190,24,93)] transition-all duration-200 uppercase tracking-wide">
            Send Open Application
          </button>
        </div>
      </section>
    </div>
  );
}
