'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from '@/lib/useReducedMotion';

const LenisContext = createContext<Lenis | null>(null);

/** Lets the corridor scene hook GSAP's ScrollTrigger to Lenis's scroll events. */
export function useLenis(): Lenis | null {
  return useContext(LenisContext);
}

/**
 * Smooths native scroll input — never hijacks it. Disabled entirely under
 * prefers-reduced-motion, and always leaves the real scrollbar and a single
 * trackpad flick in control (Lenis eases the same distance, it doesn't add
 * distance or lock the user into an animation).
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    setLenisInstance(lenis);

    let frame: number;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, [reducedMotion]);

  return <LenisContext.Provider value={lenisInstance}>{children}</LenisContext.Provider>;
}
