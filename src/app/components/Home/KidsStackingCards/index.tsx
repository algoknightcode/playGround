'use client';

import React, { useRef } from 'react';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';

const kidsActivities = [
  {
    title: '🪑 Premium Kids Furniture',
    subtitle: 'Ages 2-10 • Ergonomic & Safe',
    description:
      'Beautifully crafted tables, chairs, and storage units tailored for learning, studying, and creative play in kids’ rooms.',
    link: '/assets/split_vantage_images/Kids_Furniture.png',
    color: '#00C4B5', // Sea Green
    badge: 'Kids Furniture',
  },
  {
    title: '🏰 Magical Outdoor Playhouse',
    subtitle: 'Ages 3-9 • Imaginative Play',
    description:
      'Vibrant playhouses, slides, and adventure towers that transform your backyard into an enchanting kingdom of fun.',
    link: '/assets/split_vantage_images/kids_playsHouse.png',
    color: '#0284C7', // Rich Ocean Blue
    badge: 'Playhouse',
  },
  {
    title: '🤸 Active Fitness Trampoline',
    subtitle: 'Ages 4-12 • Physical Health',
    description:
      'High-safety trampolines and bouncing sets designed to build balance, coordination, and healthy outdoor activity.',
    link: '/assets/split_vantage_images/Kids_Trampoline.png',
    color: '#FF7A59', // Coral
    badge: 'Active Bouncer',
  },
];

export default function KidsStackingCards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main className="bg-white text-[#2D3436] font-quicksand" ref={container}>
      {/* Wrapper Section to bind sticky header and sticky cards together so they scroll away at the same time */}
      <section className="relative w-full">
        {/* Header Section (Sticky) */}
        <div className="sticky top-0 z-20 pt-8 pb-6 md:pt-10 md:pb-8 w-full flex flex-col justify-center items-center text-center px-4 bg-white/95 backdrop-blur-md">
          {/* Playful Background Doodles / Glow */}
          <div className="absolute top-4 left-10 w-20 h-20 bg-yellow-300/40 rounded-full blur-xl -z-10" />
          <div className="absolute bottom-4 right-10 w-32 h-32 bg-pink-300/40 rounded-full blur-2xl -z-10" />

          <span className="bg-[#FF7A59] text-white text-xs md:text-sm font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-sm mb-2.5">
            Fun &amp; Education For Kids
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D3436] tracking-tight leading-[115%] max-w-4xl drop-shadow-sm">
            Explore Wonder &amp; Play <br />
            <span className="text-[#00C4B5]">Scroll To Discover 👇</span>
          </h1>
        </div>

        {/* Cards Stacking Section */}
        <div className="w-full px-4 relative z-10">
          {kidsActivities.map((project, i) => {
          const targetScale = 1 - (kidsActivities.length - i) * 0.04;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={project.link}
              title={project.title}
              subtitle={project.subtitle}
              color={project.color}
              badge={project.badge}
              description={project.description}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
        </div>
      </section>
    </main>
  );
}

interface CardProps {
  i: number;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  color: string;
  badge: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  subtitle,
  description,
  url,
  color,
  badge,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[550px] md:h-[530px] flex items-start justify-center sticky top-48 md:top-56"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(${i * 24}px)`,
        }}
        className="flex flex-col md:flex-row relative h-[520px] md:h-[480px] w-[92%] sm:w-[88%] lg:w-[82%] max-w-6xl rounded-[2.5rem] p-6 md:p-10 origin-top shadow-2xl border-4 border-white/30 text-white overflow-hidden gap-6 md:gap-10 font-quicksand"
      >
        {/* Left Column: Details */}
        <div className="w-full md:w-[45%] flex flex-col justify-between py-2 z-10">
          <div>
            {/* Top Badge */}
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1 rounded-full border border-white/30">
                {badge}
              </span>
              <span className="text-white/90 text-xs font-semibold">{subtitle}</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4 drop-shadow-sm">
              {title}
            </h2>

            {/* Description */}
            <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
              {description}
            </p>
          </div>

          {/* CTA Link Button */}
          <div className="pt-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-white text-[#2D3436] font-black px-6 py-3 rounded-2xl shadow-[0_4px_0_0_rgba(0,0,0,0.15)] hover:bg-yellow-300 hover:scale-105 transition-all text-sm uppercase tracking-wide group"
            >
              <span>Explore Collection</span>
              <svg
                width="20"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="#2D3436"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Image with Zoom Effect */}
        <div className="relative w-full md:w-[55%] h-[220px] md:h-full rounded-2xl overflow-hidden shadow-md border-2 border-white/30">
          <motion.div
            className="w-full h-full"
            style={{ scale: imageScale }}
          >
            <img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
