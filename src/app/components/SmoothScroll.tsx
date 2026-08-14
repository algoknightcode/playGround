"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Disable Lenis on mobile & tablet viewports (< 1024px) or touch devices to prevent scroll trapping
    const isMobileViewport = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024;
    if (isMobileViewport) return;

    let lenisInstance: any;
    let rafId: number;

    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

      function raf(time: number) {
        lenisInstance.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return <>{children}</>;
}
