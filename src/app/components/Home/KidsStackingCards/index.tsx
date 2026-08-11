'use client';

import React, { useRef } from 'react';
import {
  useTransform,
  motion,
  useScroll,
  MotionValue,
} from 'framer-motion';

const kidsActivities = [
  {
    title: '🪑 Premium Kids Furniture',
    subtitle: 'Ages 2-10 • Ergonomic & Safe',
    description:
      'From study tables and chairs to clever storage, our Play School Furniture is designed to make learning spaces more comfortable, functional, and inspiring—while standing up to everyday use.',
    link: '/assets/split_vantage_images/Kids_Furniture.png',
    color: '#00C4B5',
    badge: 'Kids Furniture',
  },
  {
    title: '🏰 Magical Outdoor Playhouse',
    subtitle: 'Ages 3-9 • Imaginative Play',
    description:
      'From vibrant playhouses to exciting slides and adventure towers, create a play space where every climb, slide, and little adventure becomes a story of its own.',
    link: '/assets/split_vantage_images/kids_playsHouse.png',
    color: '#0284C7',
    badge: 'Playhouse',
  },
  {
    title: '🤸 Active Fitness Trampoline',
    subtitle: 'Ages 4-12 • Physical Health',
    description:
      'Safe, durable trampolines and bouncing sets that turn energy into action—helping kids build balance, coordination, confidence, and a love for staying active.',
    link: '/assets/split_vantage_images/Kids_Trampoline.png',
    color: '#FF7A59',
    badge: 'Active Bouncer',
  },
];

export default function KidsStackingCards() {
  const container = useRef<HTMLElement>(null);

  // ONE scroll listener for the entire component
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main
      ref={container}
      className="bg-white text-[#2D3436] font-quicksand"
    >
      <section className="relative w-full">

        {/* HEADER */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="sticky top-0 h-[730px] md:h-[700px] flex flex-col">

            <div className="relative w-full pt-8 pb-6 md:pt-10 md:pb-8 flex flex-col justify-center items-center text-center px-4 bg-white pointer-events-auto">

              {/* CHEAP STATIC GLOW */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6BD0DC]/10 via-transparent to-[#00C4B5]/10 pointer-events-none" />

              <span className="relative bg-[#FF7A59] text-white text-xs md:text-sm font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-sm mb-2.5">
                Fun &amp; Education For Kids
              </span>

              <h1 className="relative text-3xl sm:text-4xl md:text-5xl font-black text-[#2D3436] tracking-tight leading-[115%] max-w-4xl">
                Explore Wonder &amp; Play <br />

                <span className="text-[#00C4B5]">
                  Scroll To Discover 👇
                </span>
              </h1>

            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="w-full px-4 relative z-10">

          {kidsActivities.map((project, i) => {

            const targetScale =
              1 - (kidsActivities.length - i) * 0.04;

            const start = i * 0.25;

            return (
              <Card
                key={project.title}
                i={i}
                url={project.link}
                title={project.title}
                subtitle={project.subtitle}
                color={project.color}
                badge={project.badge}
                description={project.description}
                progress={scrollYProgress}
                range={[start, 1]}
                imageRange={[
                  Math.max(0, start - 0.1),
                  Math.min(1, start + 0.2),
                ]}
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
  imageRange: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  subtitle,
  description,
  url,
  color,
  badge,
  progress,
  range,
  imageRange,
  targetScale,
}) => {

  // Card stacking animation
  const scale = useTransform(
    progress,
    range,
    [1, targetScale]
  );

  // Much lighter image zoom
  const imageScale = useTransform(
    progress,
    imageRange,
    [1.10, 1]
  );

  return (
    <div className="h-[730px] md:h-[700px] flex items-start justify-center sticky top-0 pt-48 md:pt-56">

      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: i * 24,
        }}
        className="
          flex flex-col md:flex-row
          relative
          h-[520px] md:h-[480px]
          w-full max-w-[1440px]
          rounded-[2.5rem]
          p-6 md:p-10
          origin-top
          shadow-xl
          border-4 border-white/30
          text-white
          overflow-hidden
          gap-6 md:gap-10
          font-quicksand
          will-change-transform
        "
      >

        {/* LEFT */}
        <div className="w-full md:w-[45%] flex flex-col justify-between py-2 z-10">

          <div>

            <div className="flex items-center gap-3 mb-3">

              <span className="bg-white/20 text-white text-xs font-bold px-3.5 py-1 rounded-full border border-white/30">
                {badge}
              </span>

              <span className="text-white/90 text-xs font-semibold">
                {subtitle}
              </span>

            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4">
              {title}
            </h2>

            <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
              {description}
            </p>

          </div>

          <div className="pt-4">

            <a
              href="#"
              className="
                inline-flex items-center gap-3
                bg-white text-[#2D3436]
                font-black
                px-6 py-3
                rounded-2xl
                shadow-[0_4px_0_0_rgba(0,0,0,0.15)]
                hover:bg-yellow-300
                hover:scale-105
                transition-transform
                text-sm
                uppercase
                tracking-wide
                group
              "
            >
              <span>Explore Collection</span>

              <svg
                width="20"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033C16.4645 11.5962 15.9896 11.5962 15.6967 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="#2D3436"
                />
              </svg>

            </a>

          </div>

        </div>

        {/* IMAGE */}
        <div className="
          relative
          w-full md:w-[55%]
          h-[220px] md:h-full
          rounded-2xl
          overflow-hidden
          shadow-md
          border-2 border-white/30
          transform-gpu
        ">

          <motion.div
            className="w-full h-full transform-gpu"
            style={{
              scale: imageScale,
            }}
          >
            <img
              src={url}
              alt={title}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>

      </motion.div>
    </div>
  );
};