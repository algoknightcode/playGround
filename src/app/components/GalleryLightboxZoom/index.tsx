"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  type Variants,
} from "motion/react";

type Shape = "portrait" | "landscape" | "square";

interface Photo {
  id: number;
  src: string;
  title: string;
  category: string;
  caption: string;
  location: string;
  shape: Shape;
}

const PHOTOS: Photo[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    title: "Salt Flats at First Light",
    category: "Landscape",
    caption:
      "Sunrise cracks across the mineral crust minutes before the wind picks up and erases every footprint.",
    location: "Uyuni, Bolivia",
    shape: "portrait",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    title: "Starry Mountain Pass",
    category: "Reportage",
    caption:
      "A clear view of the night sky over snow-capped peaks far away from city light pollution.",
    location: "Swiss Alps",
    shape: "landscape",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    title: "Concrete & Fog",
    category: "Architecture",
    caption:
      "A modern glass skyscraper dissolves into morning haze, its geometry softened for exactly one hour a day.",
    location: "Financial District, Tokyo",
    shape: "square",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    title: "Monsoon Mist",
    category: "Street",
    caption:
      "Mist hanging low over forest valleys as dawn breaks over untouched terrain.",
    location: "Kochi, India",
    shape: "portrait",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80",
    title: "Forest Canopy Walk",
    category: "Nature",
    caption:
      "Sunlight filtering through decades-old redwood trees during early morning trail walks.",
    location: "Big Sur, California",
    shape: "landscape",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80",
    title: "Neon After Rain",
    category: "Street",
    caption:
      "Every puddle becomes a second city, brighter and upside down under city lights.",
    location: "Mongkok, Hong Kong",
    shape: "square",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    title: "Deep Woodland",
    category: "Craft",
    caption:
      "Dense emerald ferns moss-covered trees along quiet forest paths.",
    location: "Sakai, Japan",
    shape: "portrait",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    title: "Dune Ridge, Noon",
    category: "Landscape",
    caption:
      "The line between light and shadow is razor sharp until a gust rewrites it.",
    location: "Sossusvlei, Namibia",
    shape: "landscape",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
    title: "Coastal Horizon",
    category: "Nature",
    caption:
      "Golden hour sun reflecting across calm coastal ocean waters.",
    location: "Pacific Coast",
    shape: "portrait",
  },

];

const SPAN: Record<Shape, string> = {
  portrait: "sm:row-span-2",
  landscape: "sm:col-span-2",
  square: "",
};

const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function GalleryLightboxZoom() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const uid = useId().replace(/[:]/g, "");
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const open = activeIndex !== null;
  const active = activeIndex !== null ? PHOTOS[activeIndex] : null;

  const goTo = useCallback((idx: number) => {
    setActiveIndex(((idx % PHOTOS.length) + PHOTOS.length) % PHOTOS.length);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? i : (i + 1) % PHOTOS.length));
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((i) =>
      i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length
    );
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, next, prev]);

  return (
    <section
      ref={sectionRef}
      aria-label="Photography gallery"
      className="relative w-full overflow-hidden bg-white px-5 py-16 text-gray-900 sm:px-8 sm:py-24 font-quicksand"
    >
      <style>{`
        @keyframes ${uid}-sheen {
          0% { transform: translateX(-120%) skewX(-18deg); opacity: 0; }
          18% { opacity: 0.7; }
          60% { opacity: 0.7; }
          100% { transform: translateX(220%) skewX(-18deg); opacity: 0; }
        }
        @keyframes ${uid}-float {
          0%, 100% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(0,-14px,0); }
        }
        .${uid}-sheen::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, transparent 20%, rgba(255,255,255,0.55) 50%, transparent 80%);
          transform: translateX(-120%) skewX(-18deg);
          pointer-events: none;
        }
        .${uid}-card:hover .${uid}-sheen::after {
          animation: ${uid}-sheen 1.1s ease-in-out;
        }
        .${uid}-orb { animation: ${uid}-float 11s ease-in-out infinite; }
        .${uid}-orb-2 { animation: ${uid}-float 14s ease-in-out infinite reverse; }
        @media (prefers-reduced-motion: reduce) {
          .${uid}-card:hover .${uid}-sheen::after { animation: none; }
          .${uid}-orb, .${uid}-orb-2 { animation: none; }
        }
      `}</style>

      {/* Atmospheric Background Effects */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className={`${uid}-orb absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#00C4B5]/10 blur-3xl`}
        />
        <div
          className={`${uid}-orb-2 absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#FF6B6B]/10 blur-3xl`}
        />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00C4B5]/30 bg-[#00C4B5]/10 px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#00C4B5] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#FF6B6B]" />
              Field Archive · Vol. 07
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
              Frames from the{" "}
              <span className="bg-gradient-to-r from-[#00C4B5] to-[#FF6B6B] bg-clip-text text-transparent">
                road
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm font-semibold leading-relaxed text-gray-500">
            Ten photographs from across the world. Click any frame to enlarge,
            then use the keyboard arrow keys or thumbnail strip to navigate.
          </p>
        </div>

        {/* Masonry-Style Photo Grid */}
        <motion.ul
          variants={gridVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid auto-rows-[180px] grid-cols-2 gap-3 grid-flow-dense sm:auto-rows-[200px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        >
          {PHOTOS.map((photo, i) => (
            <motion.li
              key={photo.id}
              variants={cardVariants}
              className={`relative ${SPAN[photo.shape]}`}
            >
              <motion.button
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Open “${photo.title}” — ${photo.location}`}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                className={`${uid}-card group relative h-full w-full overflow-hidden rounded-3xl border-2 border-gray-100 bg-gray-50 text-left shadow-md outline-none transition-all duration-300 hover:border-[#00C4B5]/40 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2`}
              >
                <motion.div
                  layoutId={`${uid}-frame-${photo.id}`}
                  className="absolute inset-0"
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 30,
                  }}
                >
                  <img
                    src={photo.src}
                    alt={`${photo.title}. ${photo.caption}`}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out will-change-transform group-hover:scale-[1.06]"
                  />
                </motion.div>

                <span
                  aria-hidden
                  className={`${uid}-sheen absolute inset-0 overflow-hidden rounded-3xl`}
                />

                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-950/80 via-amber-950/20 to-transparent opacity-90"
                />

                <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-amber-100/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-amber-900 shadow-sm backdrop-blur-sm">
                  {photo.category}
                </span>

                <span className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
                  <span className="block text-sm font-bold leading-tight text-white drop-shadow">
                    {photo.title}
                  </span>
                  <span className="mt-0.5 block text-[0.7rem] font-medium text-amber-100/90">
                    {photo.location}
                  </span>
                </span>
              </motion.button>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Floating Corner Logo Badge */}
      <div className="absolute bottom-6 left-6 z-30 sm:bottom-8 sm:left-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-300 bg-amber-950 text-white shadow-xl backdrop-blur-md transition-transform hover:scale-110">
          <span className="font-serif text-base font-black tracking-tighter text-amber-100">N</span>
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {open && active && (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title}, ${active.location}`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Dark Backdrop */}
            <motion.button
              type="button"
              aria-label="Close gallery"
              onClick={() => setActiveIndex(null)}
              className="absolute inset-0 cursor-zoom-out bg-amber-950/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Lightbox Content Area */}
            <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">
              <motion.div
                layoutId={`${uid}-frame-${active.id}`}
                className="relative w-full overflow-hidden rounded-3xl bg-amber-950 shadow-2xl shadow-amber-950/60 ring-1 ring-amber-200/20"
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
              >
                <img
                  src={active.src}
                  alt={`${active.title}. ${active.caption}`}
                  loading="lazy"
                  draggable={false}
                  className="mx-auto max-h-[72vh] w-auto max-w-full object-contain"
                />

                {/* Caption Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ delay: 0.12, duration: 0.35 }}
                  className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 bg-gradient-to-t from-amber-950/95 via-amber-950/60 to-transparent p-5 sm:p-7"
                >
                  <div className="max-w-lg">
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-amber-300">
                      {active.category} · {active.location}
                    </span>
                    <h3 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
                      {active.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-amber-100/85">
                      {active.caption}
                    </p>
                  </div>
                  <span className="rounded-full bg-amber-900/60 px-3 py-1 text-xs font-semibold text-amber-200 ring-1 ring-amber-700/50">
                    {(activeIndex ?? 0) + 1} / {PHOTOS.length}
                  </span>
                </motion.div>
              </motion.div>

              {/* Bottom Thumbnail Strip */}
              <div className="mt-5 flex max-w-full items-center gap-2 overflow-x-auto px-1 pb-1">
                {PHOTOS.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`View ${p.title}`}
                    aria-current={i === activeIndex}
                    className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-xl outline-none ring-offset-2 ring-offset-amber-950 transition focus-visible:ring-2 focus-visible:ring-amber-400 ${
                      i === activeIndex
                        ? "opacity-100 ring-2 ring-amber-400"
                        : "opacity-45 hover:opacity-90"
                    }`}
                  >
                    <img
                      src={p.src}
                      alt={p.title}
                      loading="lazy"
                      draggable={false}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-amber-900/50 text-amber-100 outline-none ring-1 ring-amber-700/50 backdrop-blur transition hover:bg-amber-800/60 focus-visible:ring-2 focus-visible:ring-amber-400 sm:right-6 sm:top-6"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="group absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-amber-900/50 text-amber-100 outline-none ring-1 ring-amber-700/50 backdrop-blur transition hover:bg-amber-800/60 focus-visible:ring-2 focus-visible:ring-amber-400 sm:left-6"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="group absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-amber-900/50 text-amber-100 outline-none ring-1 ring-amber-700/50 backdrop-blur transition hover:bg-amber-800/60 focus-visible:ring-2 focus-visible:ring-amber-400 sm:right-6"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}