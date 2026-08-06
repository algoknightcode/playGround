'use client';

import React, { useRef } from 'react';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';

const kidsActivities = [
  {
    title: '🎨 Creative Art & Craft Studio',
    subtitle: 'Ages 4-10 • Fine Motor Skills',
    description:
      'Unleash your child’s imagination with hands-on painting, pottery, and DIY craft kits designed to foster creativity and self-expression.',
    src: 'art.jpg',
    link: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1000&auto=format&fit=crop',
    color: '#FF7A59', // Coral Red
    badge: 'Popular',
  },
  {
    title: '🧱 Building Blocks & Robotics',
    subtitle: 'Ages 6-12 • STEM Learning',
    description:
      'Interactive building sets and early coding toys that make science and engineering fun, engaging, and easy to understand.',
    src: 'blocks.jpg',
    link: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1000&auto=format&fit=crop',
    color: '#00C4B5', // Bright Cyan
    badge: 'STEM Certified',
  },
  {
    title: '🧩 Puzzles & Brain Boosters',
    subtitle: 'Ages 3-8 • Problem Solving',
    description:
      'Vibrant wooden puzzles, memory games, and logic teasers built to challenge young minds while providing hours of fun.',
    src: 'puzzle.jpg',
    link: 'https://images.unsplash.com/photo-1596461404969-9ce20c71c731?q=80&w=1000&auto=format&fit=crop',
    color: '#A8E6CF', // Soft Mint / Green
    badge: 'Best Seller',
  },
  {
    title: '📚 Magical Storybook Corner',
    subtitle: 'Ages 2-7 • Early Reading',
    description:
      'Immersive audiobooks, pop-up storybooks, and interactive fairy tales that turn reading into an enchanting bedtime adventure.',
    src: 'books.jpg',
    link: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop',
    color: '#9C88FF', // Soft Purple
    badge: 'Award Winner',
  },
  {
    title: '🚀 Outdoor Playground & Toys',
    subtitle: 'Ages 5-12 • Physical Health',
    description:
      'From mini trampolines to ride-on scooters, encouraging active outdoor play and healthy movement through exercise.',
    src: 'outdoor.jpg',
    link: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1000&auto=format&fit=crop',
    color: '#FFB830', // Sunshine Yellow
    badge: 'Active Play',
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
      {/* Header Section */}
      <section className="h-[40vh] md:h-[50vh] w-full flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        {/* Playful Background Doodles / Glow */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/40 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300/40 rounded-full blur-2xl" />

        <span className="bg-[#FF7A59] text-white text-xs md:text-sm font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-sm mb-4">
          Fun &amp; Education For Kids
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#2D3436] tracking-tight leading-[115%] max-w-4xl">
          Explore Wonder &amp; Play <br />
          <span className="text-[#00C4B5]">Scroll To Discover 👇</span>
        </h1>
      </section>

      {/* Cards Stacking Section */}
      <section className="w-full px-4 pb-20">
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
              range={[i * 0.2, 1]}
              targetScale={targetScale}
            />
          );
        })}
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

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.8, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(5vh + ${i * 35}px)`,
        }}
        className="flex flex-col md:flex-row relative h-[520px] md:h-[480px] w-[92%] sm:w-[88%] lg:w-[82%] max-w-6xl rounded-[2.5rem] p-6 md:p-10 origin-top shadow-2xl border-4 border-white/30 text-white overflow-hidden gap-6 md:gap-10 font-quicksand"
      >
        {/* Left Column: Details */}
        <div className="w-full md:w-[45%] flex flex-col justify-between py-2 z-10">
          <div>
            {/* Top Badge */}
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                {badge}
              </span>
              <span className="text-white/80 text-xs font-semibold">{subtitle}</span>
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
              <span>Explore Category</span>
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
        <div className="relative w-full md:w-[55%] h-[200px] md:h-full rounded-2xl overflow-hidden shadow-inner border-2 border-white/20">
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
