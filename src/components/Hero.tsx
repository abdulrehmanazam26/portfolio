'use client';

import { ScrollCue } from './ScrollCue';
import { MagneticButton } from './MagneticButton';
import { NetworkGraphic } from './NetworkGraphic';
import { site } from '@/content/site';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(123,77,255,0.16),transparent_60%),radial-gradient(ellipse_at_75%_70%,rgba(224,56,155,0.1),transparent_55%)]"
      />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr] md:px-12">
        <div>
          <h1 className="font-display text-hero font-extrabold leading-[0.95] tracking-display text-bone">
            <span className="block overflow-hidden">
              <span className="reveal-word block" style={{ animationDelay: '0.1s' }}>
                Abdul Rehman
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="reveal-word block" style={{ animationDelay: '0.28s' }}>
                Azam
              </span>
            </span>
          </h1>
          <p
            className="mt-4 font-body text-body font-medium uppercase tracking-caption text-cyan"
            style={{ animationDelay: '0.4s' }}
          >
            {site.roleLong}
          </p>
          <p className="mt-6 max-w-xl font-body text-body text-bone/80">{site.tagline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              as="a"
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-violet px-8 py-4 font-body text-body font-medium text-bone hover:bg-magenta"
            >
              View My Work <span aria-hidden="true">→</span>
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-8 py-4 font-body text-body font-medium text-bone hover:border-cyan hover:text-cyan"
            >
              Contact Me
            </MagneticButton>
          </div>
        </div>

        <NetworkGraphic className="mx-auto hidden w-full max-w-sm text-bone/80 md:block" />
      </div>
      <ScrollCue />
    </section>
  );
}
