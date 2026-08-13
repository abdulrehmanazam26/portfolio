'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function ScrollCue() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function onScroll() {
      setVisible(false);
      window.removeEventListener('scroll', onScroll);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none fixed right-6 top-1/2 z-20 hidden -translate-y-1/2 rotate-90 items-center gap-3 font-body text-caption uppercase tracking-caption text-bone/60 transition-opacity duration-700 md:flex',
        visible ? 'opacity-100' : 'opacity-0',
      )}
    >
      <span className="h-px w-8 bg-bone/40" />
      Scroll
    </div>
  );
}
