'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

interface BlurTextEffectProps {
  children: string;
  className?: string;
  delay?: number;
}

export const BlurTextEffect: React.FC<BlurTextEffectProps> = ({ children, className = '', delay = 0 }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll('span.char');

    // 1. Set initial hidden & blurred state
    gsap.set(chars, { opacity: 0, y: 10, filter: 'blur(8px)' });

    // 2. Trigger animation only when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(chars, {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.3,
              delay: delay,
              ease: 'power2.out',
              stagger: 0.015,
              clearProps: 'filter',
            });

            // Stop observing once animated
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Triggers when 20% visible
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [children]);

  return (
    <span className={`inline-block ${className}`} ref={containerRef}>
      {children.split('').map((char, i) => (
        <span key={`${char}-${i}`} className="char inline-block" style={{ whiteSpace: 'pre' }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};