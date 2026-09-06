'use client';

import { useEffect, useRef, useState } from 'react';
import { nav, site } from '@/content/site';
import { MagneticButton } from './MagneticButton';

export function Nav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close on Escape, and hand focus back to the toggle button.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-bone/10 bg-void/80 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <a
          href="#home"
          className="font-display text-body font-bold tracking-display text-bone hover:text-cyan"
        >
          {site.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-body text-caption uppercase tracking-caption text-bone/70 transition-colors hover:text-cyan"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <MagneticButton
          as="a"
          href="#contact"
          className="hidden rounded-full bg-violet px-5 py-2.5 font-body text-caption font-medium uppercase tracking-caption text-bone hover:bg-magenta md:inline-flex"
        >
          Contact Me
        </MagneticButton>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-bone md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" ref={menuRef} className="border-t border-bone/10 md:hidden">
          <ul className="flex flex-col gap-1 bg-void px-6 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 font-body text-body text-bone/85 hover:bg-bone/5 hover:text-cyan"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-violet px-5 py-3 text-center font-body text-body font-medium text-bone"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
