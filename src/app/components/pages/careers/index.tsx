"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Zap, Globe, Coffee, ArrowRight, ChevronDown, CheckCircle2, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const perks = [
  {
    title: "Creative Freedom",
    desc: "We believe the best ideas come from play. Experiment, tinker, and build without boundaries.",
    icon: <Zap className="w-8 h-8 text-[#FF5A5F]" />,
    color: "bg-[#FF5A5F]/10",
  },
  {
    title: "Health & Wellness",
    desc: "Comprehensive health coverage, mental health days, and an in-house wellness program.",
    icon: <Heart className="w-8 h-8 text-[#00C4B5]" />,
    color: "bg-[#00C4B5]/10",
  },
  {
    title: "Global Impact",
    desc: "Your work will touch the lives of millions of children around the world, fostering safe play.",
    icon: <Globe className="w-8 h-8 text-[#0284C7]" />,
    color: "bg-[#0284C7]/10",
  },
  {
    title: "Flexible Work",
    desc: "Whether you thrive in our vibrant office or your cozy home setup, we support hybrid working.",
    icon: <Coffee className="w-8 h-8 text-[#FF7A59]" />,
    color: "bg-[#FF7A59]/10",
  },
];

const openRoles = [
  {
    id: 1,
    title: "Lead Product Designer",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Full-time",
    desc: "We're looking for a visionary designer to lead the creation of our next generation of sustainable wooden toys.",
    reqs: ["5+ years experience in industrial or product design", "Portfolio demonstrating physical product design", "Passion for child development"],
  },
  {
    id: 2,
    title: "Quality Assurance Specialist",
    department: "Engineering & Safety",
    location: "On-site (Testing Lab)",
    type: "Full-time",
    desc: "Ensure every product leaving our facility exceeds global safety standards (BIS, EN71, CE).",
    reqs: ["Background in material science or compliance", "Meticulous attention to detail", "Experience with ISO standards"],
  },
  {
    id: 3,
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    desc: "Drive our B2B and D2C growth through innovative campaigns, partnerships, and data-driven strategies.",
    reqs: ["Proven track record in e-commerce growth", "Strong analytical skills", "Creative campaign execution"],
  },
];

const galleryImages = [
  "/assets/WHOWEARE/Kids_play_area_with_toys_202608081617.jpeg",
  "/assets/WHOWEARE/Brightly_lit_empty_playroom_toys_202608081652.jpeg",
  "/assets/WHOWEARE/Organized_playroom_with_toys_2K_202608081617.jpeg",
  "/assets/WHOWEARE/Playroom_with_toys_and_furniture_202608081652.jpeg",
];

export default function CareersPageContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeRole, setActiveRole] = useState<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Staggered Perks Reveal
      gsap.fromTo(
        ".perk-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".perks-section",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const toggleRole = (id: number) => {
    setActiveRole(activeRole === id ? null : id);
  };

  return (
    <div ref={containerRef} className="bg-white text-zinc-900 font-quicksand selection:bg-[#FF5A5F] selection:text-white">
      
      {/* ─── 1. HERO SECTION ─────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF5F5] via-[#FFF9E6] to-[#E6F9F8] pt-20">
        
        {/* Parallax / Background Image with light blend */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/assets/WHOWEARE/Children's_playroom_showcase_2K_202608081617.jpeg" 
            alt="Playroom showcase" 
            fill 
            className="object-cover opacity-25 mix-blend-multiply"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Content Card */}
        <div className="relative z-10 flex flex-col items-center text-center px-8 md:px-16 py-12 md:py-16 max-w-5xl bg-white/80 backdrop-blur-md border border-white/80 rounded-[3rem] shadow-xl">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 text-[#FF5A5F] font-bold text-sm tracking-widest uppercase mb-8 shadow-sm border border-pink-100">
            <Star className="w-5 h-5 fill-[#FF5A5F]" /> We are hiring
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black leading-[0.95] tracking-tight text-zinc-900 mb-8">
            Join the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A5F] via-[#FF7A59] to-[#00C4B5]">Playground.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Help us build the future of play. We're looking for dreamers, makers, and safety-obsessed creators.
          </p>
          
          <button 
            onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-12 bg-[#FF5A5F] hover:bg-[#e04e53] text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:translate-y-0.5 transition-[transform,background-color,box-shadow] duration-200 flex items-center gap-3"
          >
            View Open Roles <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ─── 2. LIFE AT TOYPARK GALLERY (JOLLY LIGHT THEME) ──────────────── */}
      <section className="relative py-20 px-6 bg-[#FFF9F6] text-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-zinc-900">Life at ToyPark</h2>
            <p className="text-zinc-600 font-medium text-lg max-w-xl mx-auto">Inside our colorful space where creativity, safety, and joy come together.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="relative h-[320px] md:h-[400px] rounded-[2.5rem] overflow-hidden group shadow-lg border-4 border-white">
                <Image 
                  src={src} 
                  alt={`Life at ToyPark ${idx + 1}`} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. PERKS BENTO GRID ────────────────────────── */}
      <section className="perks-section relative py-24 md:py-32 px-6 bg-gradient-to-b from-[#FFF9F6] via-white to-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6">Why You'll Love It Here</h2>
            <p className="text-xl text-zinc-600 font-medium max-w-2xl mx-auto">
              We take care of our team so they can take care of crafting the best products for children.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {perks.map((perk, idx) => (
              <div 
                key={idx} 
                className="perk-card group p-10 md:p-12 rounded-[3rem] bg-white border border-zinc-100 hover:border-[#00C4B5]/30 shadow-md hover:shadow-lg transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-2"
              >
                <div className={`w-24 h-24 rounded-3xl ${perk.color} flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                  {perk.icon}
                </div>
                <h3 className="text-3xl font-extrabold text-zinc-900 mb-4">{perk.title}</h3>
                <p className="text-xl text-zinc-600 font-medium leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. OPEN ROLES ACCORDION ────────────────────── */}
      <section id="open-roles" className="relative py-24 md:py-32 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6">Open Roles</h2>
            <p className="text-xl text-zinc-500 font-medium">Find your next big adventure with us.</p>
          </div>

          <div className="space-y-6">
            {openRoles.map((role) => (
              <div 
                key={role.id}
                className="bg-white rounded-[2rem] border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-[transform,box-shadow] duration-300 hover:-translate-y-1"
              >
                {/* Accordion Header */}
                <button 
                  onClick={() => toggleRole(role.id)}
                  className="w-full px-8 py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between text-left gap-4"
                >
                  <div>
                    <div className="flex gap-3 mb-3 text-sm font-bold tracking-widest uppercase">
                      <span className="text-[#FF5A5F]">{role.department}</span>
                      <span className="text-zinc-300">•</span>
                      <span className="text-zinc-500">{role.type}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900">{role.title}</h3>
                  </div>
                  <div className="flex items-center gap-6 text-zinc-500 font-medium">
                    <span className="hidden md:block">{role.location}</span>
                    <div className={`w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${activeRole === role.id ? 'rotate-180 bg-[#FF5A5F] text-white' : ''}`}>
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </div>
                </button>

                {/* Accordion Content */}
                <div 
                  className={`px-8 transition-[max-height,opacity] duration-300 ease-in-out ${activeRole === role.id ? 'max-h-[800px] pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <div className="h-px w-full bg-zinc-100 mb-8" />
                  <p className="text-lg text-zinc-600 font-medium leading-relaxed mb-8">
                    {role.desc}
                  </p>
                  
                  <h4 className="text-lg font-bold text-zinc-900 mb-4">What we're looking for:</h4>
                  <ul className="space-y-3 mb-10">
                    {role.reqs.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-600 font-medium">
                        <CheckCircle2 className="w-6 h-6 text-[#00C4B5] shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="bg-[#FF5A5F] hover:bg-[#e04e53] text-white px-8 py-4 rounded-full font-bold shadow-md hover:translate-y-0.5 transition-[transform,background-color,box-shadow] duration-200">
                    Apply for this position
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Spontaneous Application (Vibrant Gradient CTA) */}
          <div className="mt-20 text-center bg-gradient-to-r from-[#00C4B5] to-[#FF5A5F] text-white p-12 rounded-[3rem] shadow-xl">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Don't see a fit?</h3>
            <p className="text-white/90 font-medium mb-8 max-w-lg mx-auto text-lg">
              We're always on the lookout for incredible talent. Send us your resume and tell us why you belong at ToyPark.
            </p>
            <button className="bg-white hover:bg-zinc-50 text-zinc-900 px-10 py-5 rounded-full font-bold text-lg shadow-md hover:translate-y-0.5 transition-[transform,background-color] duration-200">
              Submit Open Application
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}