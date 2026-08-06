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
  btnColor: string;
  pillColor: string;
  icon: string;
}

// Web Audio API synth sound trigger for tactile physical feedback
const playPopSound = () => {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(980, ctx.currentTime + 0.08);
    
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch {
    // Ignore autoplay AudioContext restrictions
  }
};

const projects: Project[] = [
  {
    id: 'trampoline',
    name: 'KIDS TRAMPOLINE',
    title: 'Safe & bouncy indoor trampolines for endless active fun',
    year: '3-8 Years',
    timeline: 'Active Play',
    services: ['Motor Skills', 'Energy Burn', 'Safety Net'],
    image: '/assets/split_vantage_images/Kids_Trampoline.png',
    badgeColor: 'bg-[#FFE66D] text-[#2D3436] border-2 border-[#2D3436] shadow-[3px_3px_0px_0px_#2D3436]',
    btnColor: 'bg-[#FFE66D] text-[#2D3436] hover:bg-[#f5dc5f]',
    pillColor: 'bg-[#4ECDC4] text-[#2D3436]',
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
    badgeColor: 'bg-[#4ECDC4] text-[#2D3436] border-2 border-[#2D3436] shadow-[3px_3px_0px_0px_#2D3436]',
    btnColor: 'bg-[#4ECDC4] text-[#2D3436] hover:bg-[#3dbcb3]',
    pillColor: 'bg-[#9B59B6] text-white',
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
    badgeColor: 'bg-[#FF6B6B] text-white border-2 border-[#2D3436] shadow-[3px_3px_0px_0px_#2D3436]',
    btnColor: 'bg-[#FF6B6B] text-white hover:bg-[#ff5252]',
    pillColor: 'bg-[#FFE66D] text-[#2D3436]',
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
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
      playPopSound();
    }
  });

  return (
    <div 
      ref={containerRef} 
      className="relative w-full bg-[#FFFFFF] text-[#2D3436] select-none font-quicksand antialiased"
      style={{ height: `${projects.length * 55}vh` }}
    >
      {/* ═══ PINNED STICKY VIEWPORT ═══ */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center p-4 md:p-8 overflow-hidden z-10">
        
        {/* ═══ CONTAINED BACKGROUND FLOATING NEUBRUTALIST ACCENTS (PINNED/STICKY) ═══ */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-10 right-10 hidden lg:flex flex-col items-center opacity-90"
          >
            <div className="w-12 h-14 bg-[#FF6B6B] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] border-3 border-[#2D3436] shadow-[4px_4px_0px_0px_#2D3436] flex items-center justify-center">
              <div className="w-2.5 h-5 bg-white/60 rounded-full -ml-3 -mt-2 blur-[0.5px]" />
            </div>
            <div className="w-2 h-3 bg-[#FFE66D] rounded-xs mt-0.5 border border-[#2D3436]" />
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-12 left-12 hidden lg:flex text-[#FFE66D]"
          >
            <Star className="w-8 h-8 fill-[#FFE66D] stroke-[#2D3436] stroke-[2]" />
          </motion.div>
        </div>
        
        {/* Main Neubrutalist Card Container */}
        <div className="grid h-[85vh] w-full max-w-7xl grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 bg-white rounded-[2.5rem] p-6 md:p-10 shadow-[8px_8px_0px_0px_#2D3436] border-4 border-[#2D3436]">

          {/* Left Column - Metadata & Details */}
          <div className="md:col-span-5 flex flex-col justify-between pr-0 md:pr-8 border-b md:border-b-0 md:border-r-3 border-[#2D3436] pb-6 md:pb-0">
            
            {/* Top Indicator */}
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col gap-2.5">
                {projects.map((proj, idx) => (
                  <div key={proj.id} className="flex items-center gap-3">
                    <div 
                      className={`w-3.5 h-3.5 rounded-full border-2 border-[#2D3436] transition-all duration-300 ${
                        activeIndex === idx ? 'bg-[#FF6B6B] scale-110 shadow-[2px_2px_0px_0px_#2D3436]' : 'bg-[#FFFFFF] scale-90'
                      }`}
                    />
                    <span className={`text-xs font-black uppercase tracking-wider transition-colors duration-300 ${
                      activeIndex === idx ? 'text-[#2D3436]' : 'text-[#636E72]'
                    }`}>
                      {proj.name}
                    </span>
                  </div>
                ))}
              </div>

              <a 
                href="#" 
                onClick={playPopSound}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFE66D] border-2 border-[#2D3436] text-[#2D3436] text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_0px_#2D3436] hover:-translate-y-0.5 active:translate-y-0.5 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#2D3436]" />
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
                  <div className="flex items-center gap-3">
                    <span className={`px-3.5 py-1 rounded-full text-xs font-black tracking-wide uppercase ${projects[activeIndex].badgeColor}`}>
                      {projects[activeIndex].name}
                    </span>
                    <motion.span
                      className="inline-block origin-bottom-right text-xl"
                      animate={{ rotate: [0, 14, -10, 14, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {projects[activeIndex].icon}
                    </motion.span>
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#2D3436] leading-tight min-h-[6rem] tracking-tight">
                    {projects[activeIndex].title}
                  </h2>

                  <div className="space-y-3 pt-4 border-t-2 border-[#2D3436] text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-1">
                      <span className="font-black text-[#636E72] uppercase tracking-wider text-xs">Recommended Age</span>
                      <span className="font-extrabold text-[#2D3436] bg-[#FFFFFF] px-2.5 py-0.5 rounded-md border border-[#2D3436]">{projects[activeIndex].year}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-t border-[#2D3436]/15">
                      <span className="font-black text-[#636E72] uppercase tracking-wider text-xs">Play Duration</span>
                      <span className="font-extrabold text-[#2D3436] bg-[#FFFFFF] px-2.5 py-0.5 rounded-md border border-[#2D3436]">{projects[activeIndex].timeline}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-t border-[#2D3436]/15">
                      <span className="font-black text-[#636E72] uppercase tracking-wider text-xs">Skills Developed</span>
                      <div className="flex gap-1.5 flex-wrap justify-end">
                        {projects[activeIndex].services.map((service, i) => (
                          <span
                            key={i}
                            className={`rounded-full px-2.5 py-0.5 text-[11px] font-black border-2 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436] ${projects[activeIndex].pillColor}`}
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

            {/* CTA Button with Tactile Block Shadow & Dynamic Theme Color */}
            <button 
              onClick={playPopSound}
              className={`w-full py-4 px-6 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between border-3 border-[#2D3436] shadow-[5px_5px_0px_0px_#2D3436] hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_#2D3436] active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#2D3436] transition-all duration-200 group mt-4 cursor-pointer ${projects[activeIndex].btnColor}`}
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-5 h-5 stroke-[3] transform group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>
          </div>

          {/* Right Column - Scroll Wipe Image Reveal */}
          <div className="relative md:col-span-7 h-full w-full overflow-hidden rounded-[2rem] border-3 border-[#2D3436] bg-[#FFFFFF] p-2 shadow-[4px_4px_0px_0px_#2D3436]">
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-white border-2 border-[#2D3436]">
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
