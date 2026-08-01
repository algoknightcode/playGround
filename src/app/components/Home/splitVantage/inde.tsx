'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, MotionValue, useMotionValueEvent } from 'framer-motion';
import Lenis from 'lenis';
import { ArrowRight, Sparkles, Cloud, Star, Rocket } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  title: string;
  year: string;
  timeline: string;
  services: string[];
  image: string;
  badgeColor: string;
  icon: string;
}

const projects: Project[] = [
  {
    id: 'trampoline',
    name: 'KIDS TRAMPOLINE',
    title: 'Safe & bouncy indoor trampolines for endless active fun',
    year: '3-8 Years',
    timeline: 'Active Play',
    services: ['Motor Skills', 'Energy Burn', 'Safety Net'],
    image: '/assets/split_vantage_images/Kids_Trampoline.png',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200/80',
    icon: '🏃‍♂️',
  },
  {
    id: 'playhouse',
    name: 'KIDS PLAY HOUSE',
    title: 'Imaginative play tents and wooden houses for little dreamers',
    year: '2-6 Years',
    timeline: 'Creative Play',
    services: ['Roleplay', 'Cozy Space', 'Imagination'],
    image: '/assets/split_vantage_images/kids_playsHouse.png',
    badgeColor: 'bg-sky-100 text-sky-900 border-sky-200/80',
    icon: '⛺',
  },
  {
    id: 'furniture',
    name: 'KIDS FURNITURE',
    title: 'Ergonomic & colorful tables for learning and art activities',
    year: '3-10 Years',
    timeline: 'Study & Art',
    services: ['Ergonomic', 'Storage', 'Durable'],
    image: '/assets/split_vantage_images/Kids_Furniture.png',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200/80',
    icon: '🎨',
  },
];

export default function PlayfulLightShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 1. Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // 2. Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 3. Update text index on scroll transition
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.round(latest * (projects.length - 1));
    setActiveIndex(newIndex);
  });

  return (
    /* NO OVERFLOW-HIDDEN HERE -> STICKY WORKS NOW */
    <div 
      ref={containerRef} 
      className="relative w-full bg-[#fcece3] text-slate-800 select-none"
      style={{ height: `${projects.length * 100}vh` }}
    >
      {/* ═══ CONTAINED BACKGROUND FLOATING ELEMENTS ═══ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-10 hidden lg:flex flex-col items-center opacity-70"
        >
          <div className="w-10 h-12 bg-[#F472B6] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-sm border border-white flex items-center justify-center">
            <div className="w-2 h-4 bg-white/40 rounded-full -ml-3 -mt-2 blur-[0.5px]" />
          </div>
          <div className="w-1.5 h-2 bg-[#FDE68A] rounded-xs mt-0.5" />
        </motion.div>

        <motion.div 
          animate={{ x: [0, 16, 0], y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-12 left-10 hidden md:flex items-center justify-center p-2.5 bg-white/80 rounded-full border border-sky-100 shadow-xs text-sky-400"
        >
          <Cloud className="w-6 h-6 stroke-[2]" />
        </motion.div>

        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-12 left-12 hidden lg:flex text-amber-400"
        >
          <Star className="w-6 h-6 fill-amber-300 stroke-amber-400" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-12 right-12 hidden md:flex items-center justify-center p-2.5 bg-rose-100/80 rounded-2xl border border-rose-200 text-rose-500"
        >
          <Rocket className="w-6 h-6 stroke-[2]" />
        </motion.div>
      </div>

      {/* ═══ PINNED STICKY VIEWPORT ═══ */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center p-4 md:p-8 overflow-hidden z-10">
        
        {/* Main Creamish Container Card */}
        <div className="grid h-[85vh] w-full max-w-7xl grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 bg-[#FFF9F2] rounded-[2.5rem] p-6 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)] border-2 border-[#F0E6D8]">

          {/* Left Column - Metadata & Details */}
          <div className="md:col-span-5 flex flex-col justify-between pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-[#F0E6D8] pb-6 md:pb-0">
            
            {/* Top Indicator */}
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col gap-2">
                {projects.map((proj, idx) => (
                  <div key={proj.id} className="flex items-center gap-2.5">
                    <div 
                      className={`w-3 h-3 rounded-full bg-sky-500 transition-all duration-300 ${
                        activeIndex === idx ? 'scale-100 opacity-100' : 'scale-50 opacity-30'
                      }`}
                    />
                    <span className={`text-xs font-extrabold uppercase tracking-wider transition-colors duration-300 ${
                      activeIndex === idx ? 'text-slate-800' : 'text-slate-400'
                    }`}>
                      {proj.name}
                    </span>
                  </div>
                ))}
              </div>

              <a 
                href="#" 
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE7D8] border border-amber-200/80 text-amber-900 text-xs font-bold uppercase tracking-wider hover:bg-amber-100 transition-colors"
              >
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>All Collections</span>
              </a>
            </div>

            {/* Dynamic Text Content */}
            <div className="relative my-auto flex-1 py-6 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-5 w-full"
                >
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full border text-xs font-extrabold tracking-wide uppercase ${projects[activeIndex].badgeColor}`}>
                      {projects[activeIndex].name}
                    </span>
                    <motion.span
                      className="inline-block origin-bottom-right text-lg"
                      animate={{ rotate: [0, 14, -10, 14, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {projects[activeIndex].icon}
                    </motion.span>
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 leading-tight min-h-[6rem]">
                    {projects[activeIndex].title}
                  </h2>

                  <div className="space-y-3 pt-4 border-t border-[#F0E6D8] text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-0.5">
                      <span className="font-bold text-amber-800 uppercase tracking-wider text-xs">Recommended Age</span>
                      <span className="font-bold text-slate-700">{projects[activeIndex].year}</span>
                    </div>
                    <div className="flex justify-between items-center py-0.5 border-t border-[#F0E6D8]">
                      <span className="font-bold text-amber-800 uppercase tracking-wider text-xs">Play Duration</span>
                      <span className="font-bold text-slate-700">{projects[activeIndex].timeline}</span>
                    </div>
                    <div className="flex justify-between items-center py-0.5 border-t border-[#F0E6D8]">
                      <span className="font-bold text-amber-800 uppercase tracking-wider text-xs">Skills Developed</span>
                      <div className="flex gap-1.5 flex-wrap justify-end">
                        {projects[activeIndex].services.map((service, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-sky-50 px-2.5 py-0.5 text-[11px] font-extrabold text-sky-700 border border-sky-100"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <button className="w-full py-3.5 px-5 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] active:bg-[#075985] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-between shadow-[0_4px_14px_rgba(2,132,199,0.2)] transition-all duration-200 group mt-4">
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] transform group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Right Column - Scroll Wipe Image Reveal */}
          <div className="relative md:col-span-7 h-full w-full overflow-hidden rounded-[1.8rem] border-2 border-[#F0E6D8] bg-[#fcece3] p-2">
            <div className="relative w-full h-full rounded-[1.3rem] overflow-hidden bg-white">
              {projects.map((proj, i) => (
                <ProjectImage
                  key={proj.id}
                  project={proj}
                  index={i}
                  total={projects.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function ProjectImage({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  if (index === 0) {
    return (
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  const segment = 1 / (total - 1);
  const startWipe = (index - 1) * segment;
  const endWipe = startWipe + segment * 0.75;
  const holdEnd = index * segment;

  const clipPath = useTransform(
    progress,
    [startWipe, endWipe, holdEnd, 1],
    [
      'inset(100% 0% 0% 0%)',
      'inset(0% 0% 0% 0%)',
      'inset(0% 0% 0% 0%)',
      'inset(0% 0% 0% 0%)',
    ],
    { clamp: true }
  );

  const scale = useTransform(
    progress,
    [startWipe, endWipe],
    [1.06, 1.0],
    { clamp: true }
  );

  return (
    <motion.div
      style={{
        zIndex: index,
        clipPath,
      }}
      className="absolute inset-0 h-full w-full overflow-hidden will-change-[clip-path]"
    >
      <motion.img
        style={{ scale }}
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover will-change-transform"
      />
    </motion.div>
  );
}