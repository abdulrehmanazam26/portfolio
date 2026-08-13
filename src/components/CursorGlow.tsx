'use client';

import { useEffect, useRef } from 'react';

/**
 * A small neon dot that trails the cursor and blooms wider over anything
 * clickable. Desktop-with-a-mouse only — pointer:coarse and
 * prefers-reduced-motion devices never mount the listeners.
 */
export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduced) return;

    const dot = dotRef.current;
    if (!dot) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let renderedX = x;
    let renderedY = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const target = (e.target as HTMLElement)?.closest('a, button, [role="button"]');
      dot.dataset.active = target ? 'true' : 'false';
    };

    const tick = () => {
      renderedX += (x - renderedX) * 0.18;
      renderedY += (y - renderedY) * 0.18;
      dot.style.transform = `translate3d(${renderedX}px, ${renderedY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);
    dot.dataset.visible = 'true';

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      data-visible="false"
      className="pointer-events-none fixed left-0 top-0 z-[90] h-8 w-8 rounded-full opacity-0 mix-blend-screen transition-[opacity,width,height] duration-300 ease-signature will-change-transform data-[visible=true]:opacity-100 data-[active=true]:h-16 data-[active=true]:w-16"
      style={{
        background:
          'radial-gradient(circle, rgba(61,224,232,0.55) 0%, rgba(224,56,155,0.35) 45%, transparent 70%)',
      }}
    />
  );
}
