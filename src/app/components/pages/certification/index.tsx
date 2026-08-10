"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Leaf, CheckCircle, Award, Star, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    id: "bis",
    title: "BIS Certified",
    subtitle: "Bureau of Indian Standards",
    desc: "Our products undergo strict testing to meet the comprehensive safety and quality requirements set by the Bureau of Indian Standards, ensuring complete peace of mind.",
    color: "bg-[#FF5A5F]",
    icon: <Award className="w-12 h-12 text-white" />,
    image: "/assets/WHOWEARE/Brightly_lit_empty_playroom_toys_202608081652.jpeg",
  },
  {
    id: "fsc",
    title: "FSC™ Certified Wood",
    subtitle: "Forest Stewardship Council",
    desc: "We exclusively use timber from responsibly managed forests. The FSC certification guarantees our wood is harvested sustainably, protecting global ecosystems.",
    color: "bg-[#00C4B5]",
    icon: <Leaf className="w-12 h-12 text-white" />,
    image: "/assets/WHOWEARE/Empty_children_playroom_with_toys_202608081653.jpeg",
  },
  {
    id: "en71",
    title: "EN71 Compliant",
    subtitle: "European Toy Safety Standard",
    desc: "Tested for mechanical, physical, and chemical properties. Our products contain absolutely zero toxic paints or heavy metals, far exceeding EN71 baseline requirements.",
    color: "bg-[#0284C7]",
    icon: <ShieldCheck className="w-12 h-12 text-white" />,
    image: "/assets/WHOWEARE/Playroom_with_castle_and_toys_202608081652.jpeg",
  },
  {
    id: "ce",
    title: "CE Marking",
    subtitle: "Conformité Européenne",
    desc: "A testament to our uncompromising dedication to health, safety, and environmental protection standards within the European Economic Area and globally.",
    color: "bg-[#FF7A59]",
    icon: <CheckCircle className="w-12 h-12 text-white" />,
    image: "/assets/WHOWEARE/Playroom_with_toys_and_furniture_202608081652.jpeg",
  },
];

export default function CertificationPageContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for user reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      if (stampRef.current) {
        gsap.set(stampRef.current, { opacity: 1, scale: 1, rotation: -10 });
      }
      return;
    }

    const ctx = gsap.context(() => {
      // Stamp Reveal Animation (Scale 5 to 1)
      gsap.fromTo(
        stampRef.current,
        { scale: 5, opacity: 0, rotation: 45 },
        {
          scale: 1,
          opacity: 1,
          rotation: -10,
          duration: 1.2,
          ease: "back.out(1.7)",
          delay: 0.5,
        }
      );

      // Hero Parallax Scroll Effect
      gsap.to(heroTextRef.current, {
        y: "-30%",
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // The Testing Lab Scroll (Horizontal/Staggered Reveal)
      const certCards = gsap.utils.toArray<HTMLElement>(".cert-card");
      certCards.forEach((card, i) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          rotation: i % 2 === 0 ? -5 : 5,
          ease: "power3.out",
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-white text-zinc-900 font-quicksand selection:bg-[#00C4B5] selection:text-white">
      
      {/* ─── 1. HERO SECTION ─────────────────────────────── */}
      <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#e0f7fa] to-[#e3f2f7]">
        
        {/* Parallax Image Background */}
        <div className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <Image 
            src="/assets/WHOWEARE/Brightly_lit_empty_playroom_toys_202608081652.jpeg" 
            alt="Bright Safe Play Area" 
            fill 
            className="object-cover opacity-70"
            priority
          />
        </div>
        
        {/* Static Background Accents */}
        <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-[#FF5A5F]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-[#00C4B5]/30 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Text Box */}
        <div ref={heroTextRef} className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mt-12 bg-white/75 p-8 md:p-16 rounded-[3rem] shadow-lg border border-white/60 will-change-transform">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 text-[#00C4B5] font-bold text-sm tracking-widest uppercase mb-8 shadow-sm">
            <ShieldCheck className="w-5 h-5" /> Verified Safety Standards
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-extrabold leading-[0.95] tracking-tight text-zinc-900 mb-8">
            Tested for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C4B5] to-[#FF5A5F]">Safety & Quality.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-800 font-semibold max-w-3xl mx-auto leading-relaxed">
            We don't just build furniture. We engineer peace of mind. Discover the rigorous international standards behind every ToyPark product.
          </p>
        </div>

        {/* Stamp Badge */}
        <div ref={stampRef} className="absolute right-[5%] top-[15%] lg:right-[8%] lg:top-[12%] opacity-0 z-20 pointer-events-none">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-[10px] border-[#00C4B5] text-[#00C4B5] flex flex-col items-center justify-center bg-white shadow-xl transform -rotate-12">
            <Star className="w-10 h-10 md:w-14 md:h-14 mb-1 fill-[#00C4B5]" />
            <span className="font-black text-2xl md:text-4xl uppercase tracking-widest leading-none">Passed</span>
            <span className="font-bold text-xs md:text-sm uppercase tracking-widest mt-1 text-zinc-500">Global Stds</span>
          </div>
        </div>

        {/* Static Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 text-xs font-bold tracking-widest uppercase">
          <div className="w-6 h-10 border-2 border-zinc-500 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full opacity-75" />
          </div>
          Scroll
        </div>
      </section>

      {/* ─── 2. THE TESTING LAB (CERTIFICATIONS) ─────────── */}
      <section className="relative py-24 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6">Our Badges of Honor</h2>
          <p className="text-lg md:text-xl text-zinc-500 font-medium max-w-3xl mx-auto">
            Each certification represents hours of testing, sustainable sourcing, and an unwavering commitment to quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {certifications.map((cert, index) => (
            <div key={cert.id} className={`cert-card relative group flex flex-col ${index % 2 === 1 ? 'md:mt-32' : ''}`}>
              
              {/* Image Container */}
              <div className="relative w-full h-[400px] rounded-[3rem] overflow-hidden shadow-lg cursor-crosshair">
                <Image 
                  src={cert.image} 
                  alt={cert.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                
                {/* Badge Overlay */}
                <div className={`absolute top-8 left-8 w-24 h-24 rounded-full ${cert.color} flex items-center justify-center shadow-md group-hover:rotate-12 transition-transform duration-500`}>
                  {cert.icon}
                </div>
              </div>

              {/* Content */}
              <div className="mt-8 px-4">
                <div className="text-sm font-bold text-[#00C4B5] uppercase tracking-widest mb-2">{cert.subtitle}</div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4">{cert.title}</h3>
                <p className="text-zinc-600 font-medium text-lg leading-relaxed">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. BOTTOM CTA ─────────────────────────────── */}
      <section className="relative py-32 px-6 bg-zinc-900 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Ready to Build with <br className="hidden md:block" />
            <span className="text-[#00C4B5]">Absolute Confidence?</span>
          </h2>
          <p className="text-zinc-400 text-xl font-medium mb-12 max-w-2xl mx-auto">
            Partner with ToyPark to bring certified, premium children's furniture to your market or project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products" 
              className="inline-flex items-center justify-center gap-2 bg-[#00C4B5] hover:bg-[#00a89b] text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_8px_0_rgb(0,168,155)] hover:translate-y-2 hover:shadow-[0_2px_0_rgb(0,168,155)] transition-[transform,box-shadow,background-color] duration-200"
            >
              Explore Catalog <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="/about" 
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg transition-colors duration-200"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}