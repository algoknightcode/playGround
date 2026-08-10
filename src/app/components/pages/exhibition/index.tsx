"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Ticket, 
  Rocket, 
  Gamepad2, 
  Puzzle, 
  Smile, 
  Sparkles,
  Shapes,
  Star
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// --- Exhibition Data ---
const highlights = [
  { title: "Interactive Play Zones", desc: "Hands-on areas where kids can build, race, and create with the newest toys on the market." },
  { title: "Meet the Characters", desc: "Daily meet-and-greets with beloved cartoon characters and superhero mascots." },
  { title: "Educational Workshops", desc: "Fun, STEM-focused building sessions led by professional toy designers and educators." },
  { title: "Safe & Accessible", desc: "Wide, stroller-friendly aisles, soft-play floors, and dedicated quiet zones for sensory breaks." },
  { title: "Exclusive Toy Launches", desc: "Be the first to see and play with unreleased toys from top global brands." },
  { title: "Live Magic & Shows", desc: "A central stage featuring daily magic acts, puppet shows, and interactive storytelling." },
  { title: "Giant Brick Pits", desc: "Dive into massive pools filled with building blocks for endless creative construction." },
  { title: "Family Rest Areas", desc: "Comfortable seating, cafes, and family facilities located throughout the exhibition floor." },
];

const exhibitionZones = [
  { name: "The Big Brick Build", size: "2,000 sq.m", desc: "A massive arena dedicated entirely to interlocking bricks and endless imagination." },
  { name: "Sci-Fi Space Station", size: "1,500 sq.m", desc: "Glow-in-the-dark galaxy featuring laser toys, robots, and spaceship models." },
  { name: "Dollhouse Village", size: "1,200 sq.m", desc: "Life-sized dollhouses, fashion dressing rooms, and miniature worlds." },
  { name: "Arcade & Tech Alley", size: "1,800 sq.m", desc: "The latest in kid-friendly video games, AR experiences, and coding robots." },
  { name: "Toddler Soft Play", size: "800 sq.m", desc: "A safe, padded wonderland designed specifically for children ages 0-3." },
  { name: "Board Game Cafe", size: "500 sq.m", desc: "Sit down as a family and test out the newest tabletop and board games." },
];

const dailyActivities = [
  { title: "The Great Toy Unboxing", img: "/assets/WHOWEARE/Empty_children_playroom_with_toys_202608081653.jpeg" },
  { title: "Indoor Adventure Forts", img: "/assets/WHOWEARE/Playroom_with_castle_and_toys_202608081652.jpeg" },
  { title: "Sustainable Crafts Workshop", img: "/assets/WHOWEARE/Brightly_lit_empty_playroom_toys_202608081652.jpeg" },
  { title: "Teddy Bear & Play House Party", img: "/assets/WHOWEARE/Brightly_lit_empty_playroom_toys_202608081652.jpeg" },
];

export default function ToyExhibition() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [activeEventImage, setActiveEventImage] = useState(dailyActivities[0].img);

  useEffect(() => {
    gsap.ticker.lagSmoothing(0, 0);

    // 2. GSAP Animations Context
    const ctx = gsap.context(() => {
      
      // Deep Parallax for Images
      gsap.utils.toArray('.parallax-target').forEach((target: any) => {
        gsap.to(target, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: target.parentElement, 
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Text Reveals
      gsap.from(".reveal-up", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reveal-up",
          start: "top 85%",
        },
      });
      
      // Infinite Marquee
      gsap.to(".marquee-inner", {
        xPercent: -50,
        ease: "none",
        duration: 25,
        repeat: -1,
      });

      // Floating Icons Animation (Playful kids theme)
      gsap.utils.toArray('.floating-icon').forEach((icon: any, i) => {
        gsap.to(icon, {
          y: i % 2 === 0 ? -20 : 20,
          x: i % 3 === 0 ? 15 : -15,
          rotation: i % 2 === 0 ? 15 : -15,
          duration: 3 + (i % 2),
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      });

    }, mainRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    // LIGHT BABY CYAN / BLUE THEME
    <div ref={mainRef} className="bg-[#e0f7fa] text-[#082f49] min-h-screen font-sans antialiased overflow-x-hidden selection:bg-[#0ea5e9] selection:text-white cursor-auto relative">
      
      {/* FLOATING ANIMATED ICONS (Global Background Layer) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <Rocket className="floating-icon absolute top-[15%] left-[10%] w-12 h-12 text-[#0284c7]" />
        <Puzzle className="floating-icon absolute top-[30%] right-[15%] w-16 h-16 text-[#0ea5e9]" />
        <Shapes className="floating-icon absolute top-[60%] left-[20%] w-10 h-10 text-[#0369a1]" />
        <Gamepad2 className="floating-icon absolute top-[80%] right-[10%] w-14 h-14 text-[#0284c7]" />
      </div>

      {/* 1. HERO COMPONENT */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-12 px-6 md:px-12 z-10">
        <div className="absolute inset-0 z-0 overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] shadow-2xl shadow-cyan-900/20 m-4 md:m-8">
          <div className="parallax-target absolute inset-0 w-full h-[120%] -top-[10%]">
            <Image 
              src="/assets/WHOWEARE/Empty_children_playroom_with_toys_202608081653.jpeg" 
              alt="ToyPark Exhibition Hall" 
              fill 
              priority 
              className="object-cover brightness-[0.75] saturate-125" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#082f49] via-[#082f49]/40 to-transparent opacity-80" />
        </div>
        
        <div className="relative z-10 max-w-7xl reveal-up pb-10 px-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-cyan-300" />
            <span className="block text-xs md:text-sm uppercase tracking-[0.3em] text-cyan-200 font-bold">
              The Ultimate Kids Toy Exhibition
            </span>
          </div>
          <h1 className="text-[14vw] md:text-[9vw] font-black leading-[0.85] tracking-tight text-white uppercase drop-shadow-lg">
            Wonder <br /> Play Expo
          </h1>
        </div>
      </section>

      {/* 2. WELCOME / INTRO COMPONENT */}
      <section className="py-12 md:py-16 px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 justify-between items-center">
          <div className="w-full md:w-1/2 reveal-up">
            <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-[#0ea5e9] mb-4">Welcome to the Magic</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold leading-[1.2] mb-6 text-[#082f49]">
              The biggest playground your family has ever seen.
            </h3>
            <p className="text-[#0369a1] text-base md:text-lg leading-relaxed mb-4 font-medium">
              Join us for three days of endless fun, creativity, and play. The Wonder Play Expo brings together the world's most exciting toy brands, educational games, and interactive zones all under one massive roof.
            </p>
            <p className="text-[#0369a1] text-base md:text-lg leading-relaxed font-medium mb-6">
              Whether your child loves building complex robots, diving into giant brick pits, or hugging their favorite cartoon characters, there's a magical corner waiting for them here.
            </p>
            <button className="flex items-center gap-4 bg-[#0ea5e9] text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-cyan-500/30 hover:bg-[#0284c7] hover:scale-105 transition-all duration-300">
              <Ticket className="w-5 h-5" /> Get Tickets Now
            </button>
          </div>
          <div className="w-full md:w-5/12 h-[50vh] relative overflow-hidden group rounded-3xl shadow-xl shadow-cyan-900/10">
             <div className="parallax-target absolute inset-0 w-full h-[120%] -top-[10%]">
                 <Image 
                  src="/assets/WHOWEARE/Brightly_lit_empty_playroom_toys_202608081652.jpeg" 
                  alt="ToyPark Exhibition Playroom" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-[2s] saturate-125" 
                />
             </div>
             <Smile className="floating-icon absolute bottom-6 right-6 w-16 h-16 text-white drop-shadow-md" />
          </div>
        </div>
      </section>

      {/* 3. EXHIBITION HIGHLIGHTS (Playful Kids Card Grid) */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-[#cffafe] border-y border-[#a5f3fc] relative z-10 overflow-hidden">
        <div className="flex items-center gap-4 mb-10 reveal-up">
          <div className="p-3 bg-[#0284c7] text-white rounded-2xl shadow-lg shadow-cyan-500/30 animate-bounce">
            <Star className="w-6 h-6 fill-white" />
          </div>
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#0284c7] block">Wonder Play World</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#082f49] uppercase tracking-tight">Expo Highlights</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 reveal-up">
          {highlights.map((item, idx) => {
            const icons = [Gamepad2, Sparkles, Rocket, Smile, Puzzle, Star, Shapes, Ticket];
            const CardIcon = icons[idx % icons.length];
            return (
              <div 
                key={idx} 
                className="group relative bg-white/70 backdrop-blur-md p-8 rounded-[2.5rem] border-2 border-white hover:border-[#0ea5e9]/50 hover:bg-white hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-3 hover:rotate-1 transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                {/* Floating Corner Sparkle on Hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-6 h-6 text-amber-400 fill-amber-300 animate-spin" />
                </div>

                <div>
                  {/* Top Badge Icon & Number */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#e0f7fa] group-hover:bg-[#0ea5e9] text-[#0284c7] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm group-hover:scale-110 group-hover:rotate-12">
                      <CardIcon className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-black text-[#0ea5e9]/40 group-hover:text-[#0ea5e9] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-black mb-3 text-[#082f49] leading-tight group-hover:text-[#0284c7] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#0369a1] text-sm leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Decorative Kids Sparkle Bar */}
                <div className="mt-6 pt-4 border-t border-cyan-100 flex items-center justify-between text-xs font-bold text-[#0ea5e9] opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="uppercase tracking-wider">Kids Favorite</span>
                  <Sparkles className="w-4 h-4 text-amber-400 fill-amber-300 animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. THE ZONES (Detailed Breakdown Component) */}
      <section className="py-12 md:py-16 px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3 md:sticky md:top-28 h-fit reveal-up">
            <h2 className="text-[10vw] md:text-[5vw] font-black leading-[0.9] uppercase tracking-tight mb-6 text-[#082f49]">
              Explore <br/> The <br/> Zones
            </h2>
            <p className="text-[#0369a1] text-base md:text-lg mb-6 font-medium">Over 10,000 square meters of pure joy. Navigate through our themed areas tailored for different age groups and interests.</p>
            <button className="flex items-center gap-4 bg-white text-[#082f49] border-2 border-[#0ea5e9] px-6 py-3 rounded-full font-bold hover:bg-[#0ea5e9] hover:text-white transition-colors duration-300 shadow-lg shadow-cyan-900/5">
              Download Map <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="w-full md:w-2/3 flex flex-col bg-white rounded-[3rem] p-6 md:p-10 shadow-xl shadow-cyan-900/5 border border-cyan-100">
            {exhibitionZones.map((zone, idx) => (
              <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-cyan-100 last:border-0 reveal-up group">
                <div className="w-full md:w-1/3">
                  <h3 className="text-xl md:text-2xl font-bold text-[#082f49]">{zone.name}</h3>
                </div>
                <div className="w-full md:w-1/4 my-2 md:my-0">
                  <span className="text-sm font-bold bg-[#e0f7fa] text-[#0284c7] px-4 py-1.5 rounded-full border border-cyan-200">{zone.size}</span>
                </div>
                <div className="w-full md:w-5/12 flex justify-between items-center">
                  <p className="text-sm text-[#0369a1] font-medium max-w-[250px]">{zone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DAILY ACTIVITIES HOVER-REVEAL COMPONENT */}
      <section className="pt-12 pb-10 bg-[#082f49] text-white flex flex-col md:flex-row items-center border-t border-[#0ea5e9]/30 relative z-10 overflow-hidden">
        
        {/* Decorative elements */}
        <Sparkles className="absolute top-10 left-10 w-24 h-24 text-[#0ea5e9] opacity-20" />
        <Shapes className="absolute bottom-10 right-10 w-32 h-32 text-[#0284c7] opacity-20" />

        {/* Dynamic Image Display */}
        <div className="w-full md:w-1/2 h-[45vh] md:h-[65vh] relative overflow-hidden order-2 md:order-1 px-6 md:px-0 md:pl-12">
          <div className="relative w-full h-full rounded-3xl md:rounded-[3rem] overflow-hidden border-4 border-[#0ea5e9] shadow-2xl shadow-cyan-950/50">
             <div className="absolute inset-0 w-full h-full transition-all duration-700 ease-out">
                <Image 
                  key={activeEventImage} 
                  src={activeEventImage} 
                  alt="Exhibition Event" 
                  fill 
                  className="object-cover animate-fade-in saturate-125"
                />
             </div>
          </div>
        </div>

        {/* Hover List */}
        <div className="w-full md:w-1/2 px-6 md:px-16 order-1 md:order-2 py-6 md:py-0">
          <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-[#38bdf8] mb-8">Daily Schedule</h2>
          <div className="flex flex-col gap-5">
            {dailyActivities.map((event, idx) => (
              <div 
                key={idx}
                className="group flex justify-between items-center bg-white/5 hover:bg-[#0ea5e9] p-7 md:p-8 rounded-3xl cursor-pointer border border-white/10 hover:border-white transition-all duration-300 shadow-sm"
                onMouseEnter={() => setActiveEventImage(event.img)}
              >
                <h3 className="text-xl md:text-2xl font-bold group-hover:pl-4 transition-all duration-300 text-[#e0f7fa] group-hover:text-white">
                  {event.title}
                </h3>
                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-white" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PLAN YOUR VISIT (CTA) */}
      <section className="pt-12 pb-16 px-6 md:px-12 relative z-10">
        <div className="bg-white rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 shadow-2xl shadow-cyan-900/10 border border-cyan-100 flex flex-col items-center text-center relative overflow-hidden">
          
          <Rocket className="absolute top-10 left-10 w-20 h-20 text-[#e0f7fa]" />
          <Gamepad2 className="absolute bottom-10 right-10 w-24 h-24 text-[#e0f7fa]" />

          <div className="reveal-up max-w-3xl relative z-10">
            <h2 className="text-[7vw] md:text-[4vw] font-black leading-[1] uppercase tracking-tight text-[#082f49] mb-6">
              Ready to <span className="text-[#0ea5e9]">Play?</span>
            </h2>
            <p className="text-[#0369a1] text-lg mb-8 font-medium">
              Don't miss out on the toy event of the year. Grab your family passes today and secure your spot for a weekend of unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#0ea5e9] text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-cyan-500/30 hover:bg-[#0284c7] hover:scale-105 transition-all duration-300 text-base flex items-center justify-center gap-3">
                <Ticket className="w-5 h-5" /> Buy Family Pass
              </button>
              <button className="bg-transparent text-[#082f49] border-2 border-[#082f49] px-8 py-4 rounded-full font-bold hover:bg-[#082f49] hover:text-white transition-all duration-300 text-base">
                View FAQ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TAILWIND ANIMATION OVERRIDE FOR EVENT IMAGE FADE */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; filter: blur(4px); transform: scale(1.05); }
          to { opacity: 1; filter: blur(0); transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

    </div>
  );
}