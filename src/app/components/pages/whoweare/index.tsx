"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

// --- Data ---
const concepts = [
  {
    title: "playful spaces",
    desc: "By merging ergonomic safety with vibrant imaginative designs, ToyPark creates playrooms and kids' spaces that welcome, inspire, and nurture young minds. Years of dedicated craft guide every furniture piece we build.",
    image: "/assets/WHOWEARE/Empty_children_playroom_with_toys_202608081653.jpeg",
  },
  {
    title: "modular furniture",
    desc: "ToyPark's innovative modular kids furniture redefines children's spaces—combining multi-functional storage, active play elements, and Scandinavian minimalism tailored for growing families.",
    image: "/assets/WHOWEARE/Brightly_lit_empty_playroom_toys_202608081652.jpeg",
  },
  {
    title: "eco-friendly craft",
    desc: "Child safety is at the heart of our design. Crafted using sustainably sourced non-toxic wood, smooth rounded edges, and certified eco-paints, our furniture offers durability you can trust.",
    image: "/assets/WHOWEARE/Playroom_with_castle_and_toys_202608081652.jpeg",
  },
  {
    title: "active play design",
    desc: "Encouraging movement, creativity, and exploration. From indoor play castles to climbing frames and reading nooks, ToyPark turns everyday rooms into magical playgrounds.",
    image: "/assets/WHOWEARE/Playroom_with_toys_and_furniture_202608081652.jpeg",
  }
];

const projects = [
  { title: "Nordic Play Haven", category: "Kids Furniture", img: "/assets/WHOWEARE/Playroom_with_toys_and_rug_202608081617.jpeg" },
  { title: "Montessori Study Nook", category: "Kids Study Sets", img: "/assets/WHOWEARE/Organized_playroom_with_toys_2K_202608081617.jpeg" },
  { title: "Explorer Play Castle", category: "Active Play", img: "/assets/WHOWEARE/Kids_play_area_with_toys_202608081617.jpeg" },
  { title: "Pastel Dream Bedroom", category: "Kids Bedroom", img: "/assets/WHOWEARE/Children's_playroom_showcase_2K_202608081617.jpeg" },
];

const pressNews = [
  { title: "ToyPark Unveils Eco-Friendly Kids Furniture Line", date: "Oct 2025", img: "/assets/WHOWEARE/Playroom_with_toys_and_rug_202608081617.jpeg" },
  { title: "Best Children's Room Design Award 2025", date: "Sep 2025", img: "/assets/WHOWEARE/Organized_playroom_with_toys_2K_202608081617.jpeg" },
  { title: "The Future of Active Indoor Play Spaces", date: "Aug 2025", img: "/assets/WHOWEARE/Kids_play_area_with_toys_202608081617.jpeg" },
  { title: "Crafting Safe, Sustainable Furniture for Growing Kids", date: "Jul 2025", img: "/assets/WHOWEARE/Children's_playroom_showcase_2K_202608081617.jpeg" },
];

export default function WhoWeArePage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Smooth Scroll setup with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0, 0);

    // 2. GSAP Animations Context
    const ctx = gsap.context(() => {
      
      // Hero Image Deep Parallax (Reliable Math: height 120%, top -10%, travel 20%)
      gsap.to(".hero-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Hero Text Reveal
      gsap.from(".hero-text-line", {
        y: 120,
        opacity: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2,
      });

      // Marquee Infinite Loop
      gsap.to(".marquee-inner", {
        xPercent: -50,
        ease: "none",
        duration: 18,
        repeat: -1,
      });

      // Concepts Deep Parallax & Text Reveal
      const conceptBlocks = gsap.utils.toArray(".concept-block") as HTMLElement[];
      conceptBlocks.forEach((block) => {
        // Animating the wrapper avoids fighting with Next.js absolute 'fill' properties
        const imgWrapper = block.querySelector(".concept-parallax-wrapper");
        const text = block.querySelector(".concept-text");
        
        if (imgWrapper) {
          gsap.to(imgWrapper, {
            yPercent: 38,
            ease: "none",
            scrollTrigger: {
              trigger: block,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          });
        }

        if (text) {
          gsap.from(text, {
            y: 80,
            opacity: 0,
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 75%",
            }
          });
        }
      });

      // Horizontal Pinned Section (Press & News)
      const pinContainer = horizontalRef.current;
      if (pinContainer) {
        const pinScroll = pinContainer.querySelector(".horizontal-scroll-content") as HTMLElement;
        if (pinScroll) {
          const getScrollAmount = () => -(pinScroll.scrollWidth - window.innerWidth);
          
          gsap.to(pinScroll, {
            x: getScrollAmount,
            ease: "none",
            scrollTrigger: {
              trigger: pinContainer,
              start: "top top",
              end: () => `+=${pinScroll.scrollWidth}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      }

      // Ensure ScrollTrigger gets accurate measurements after render
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

    }, mainRef);

    return () => {
      ctx.revert();
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={mainRef} className="bg-[#f0f8fa] text-[#0c2333] min-h-screen font-quicksand antialiased overflow-x-hidden selection:bg-[#0284c7] selection:text-white cursor-auto">

      {/* 1. HERO SECTION */}
      <section className="hero-section relative h-screen w-full overflow-hidden flex items-start justify-start pt-12 md:pt-20 px-6 md:px-16 bg-[#0f172a]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Parallax Hero Image Container with Object-Contain */}
          <div className="hero-bg relative w-full h-[120%] -top-[10%]">
            <Image src="/assets/WHOWEARE/Minimalist_presentation_slide_te…_2K_202608081543.jpeg" alt="Hero Banner" fill priority className="object-cover object-center" />
          </div>
        </div>
        <div className="relative z-10 max-w-5xl">
          <div className="overflow-hidden mb-6">
            <h1 className="hero-text-line text-[12vw] md:text-8xl lg:text-[7.5rem] font-bold leading-[0.9] tracking-wide text-white lowercase drop-shadow-md">
              who we are
            </h1>
          </div>
        </div>
      </section>

      {/* 2. INFINITE MARQUEE */}
      <div className="py-10 border-y border-cyan-900/10 bg-[#e3f2f7] overflow-hidden flex items-center cursor-default">
        <div className="marquee-inner flex whitespace-nowrap text-4xl md:text-6xl font-medium uppercase tracking-widest text-[#0284c7]/30 w-[200%]">
          <span>SAFE • PLAYFUL • SUSTAINABLE KIDS FURNITURE • CREATIVE PLAYROOM DESIGN • </span>
          <span>SAFE • PLAYFUL • SUSTAINABLE KIDS FURNITURE • CREATIVE PLAYROOM DESIGN • </span>
        </div>
      </div>

      {/* 3. CONCEPTS EDITORIAL WITH DEEP PARALLAX */}
      <section className="py-32 flex flex-col gap-40">
        {concepts.map((concept, idx) => (
          <div key={idx} className={`concept-block flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 px-6 md:px-16 items-center`}>
            
            <div className="w-full md:w-[60%] h-[70vh] md:h-[88vh] relative overflow-hidden group rounded-md shadow-md cursor-pointer">
              {/* Enhanced Parallax wrapper with 145% height to accommodate 38% motion without cropping */}
              <div className="concept-parallax-wrapper absolute inset-0 w-full h-[145%] -top-[22.5%]">
                <Image src={concept.image} alt={concept.title} fill className="object-cover object-top brightness-[0.95] group-hover:scale-102 group-hover:brightness-100 transition-all duration-1000" />
              </div>
            </div>
            
            <div className="concept-text w-full md:w-[45%] space-y-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#0284c7] font-bold">Expertise {idx + 1}</span>
              <h3 className="text-5xl md:text-7xl font-bold lowercase text-[#0a192f]">{concept.title}</h3>
              <p className="text-[#3b596d] font-semibold leading-relaxed text-lg">{concept.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 4. PINNED HORIZONTAL SCROLL (Press & News) */}
      <section ref={horizontalRef} className="h-screen w-full bg-[#e3f2f7] border-t border-cyan-900/10 overflow-hidden relative">
        <div className="absolute top-12 left-6 md:left-16 z-10">
          <h2 className="text-4xl md:text-5xl font-bold lowercase text-[#0a192f]">Press & Review</h2>
          <span className="text-xs uppercase tracking-[0.3em] text-[#0284c7] font-bold block mt-2">Scroll to explore</span>
        </div>
        
        {/* Inner flex wrapper for safe vertical alignment independent of GSAP pin spacer */}
        <div className="h-full w-full flex flex-col justify-center">
          <div className="horizontal-scroll-content flex pl-6 md:pl-16 pr-32 pt-20 pb-8 items-center gap-12 w-max cursor-grab active:cursor-grabbing">
            {pressNews.map((news, idx) => (
              <div key={idx} className="w-[85vw] md:w-[32vw] flex flex-col justify-center shrink-0 group">
                <div className="w-full aspect-video relative overflow-hidden mb-6 rounded-md shadow-md bg-white/40">
                  <Image src={news.img} alt={news.title} fill className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-[1.2s]" />
                </div>
                <div className="flex justify-between items-start border-t border-cyan-900/20 pt-4">
                  <h4 className="text-lg md:text-xl font-semibold text-[#0a192f] max-w-[80%] leading-snug">{news.title}</h4>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#0284c7] font-bold pt-1">{news.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROJECTS GRID */}
      <section className="pt-32 pb-16 px-6 md:px-16">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-5xl md:text-7xl font-bold lowercase text-[#0a192f]">Selected <br/> flagships</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((proj, idx) => (
            <div key={idx} className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}>
              <div className="relative h-[70vh] overflow-hidden mb-6 rounded-sm shadow-sm">
                <Image src={proj.img} alt={proj.title} fill className="object-cover brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-[1.5s]" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#0284c7] font-bold block mb-2">{proj.category}</span>
              <h3 className="text-3xl md:text-4xl font-bold text-[#0a192f]">{proj.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 6. MASSIVE CALL TO ACTION (CTA) */}
      <section className="h-[80vh] flex flex-col justify-center items-center text-center px-6 bg-[#0f172a] border-t border-cyan-900/10 relative group overflow-hidden cursor-pointer">
        <div className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-1000">
          <Image src="/assets/WHOWEARE/Minimalist_presentation_slide_te…_2K_202608081543.jpeg" alt="Banner background" fill className="object-cover object-center" />
        </div>
        <span className="text-xs uppercase tracking-[0.4em] text-cyan-300 font-bold mb-8 relative z-10">Start a conversation</span>
        <h2 className="text-[10vw] font-bold lowercase leading-none text-white relative z-10 group-hover:text-cyan-300 transition-colors duration-700 drop-shadow-lg">
          get in touch
        </h2>
      </section>
    </div>
  );
}
