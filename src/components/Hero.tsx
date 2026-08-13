'use client';

import dynamic from 'next/dynamic';
import { useSceneCapable } from '@/lib/useSceneCapable';
import { useInView } from '@/lib/useInView';
import { CorridorCanvas } from './scene/CorridorCanvas';
import { ScrollCue } from './ScrollCue';
import { site } from '@/content/site';

const HeroScene = dynamic(() => import('./scene/HeroScene'), { ssr: false });

export function Hero() {
  const capable = useSceneCapable();
  const [ref, inView] = useInView<HTMLDivElement>('300px');

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] w-full items-center overflow-hidden bg-void"
    >
      {capable && inView && (
        <div className="absolute inset-0" aria-hidden="true">
          <CorridorCanvas>
            <HeroScene />
          </CorridorCanvas>
        </div>
      )}
      {!capable && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(123,77,255,0.25),transparent_60%),radial-gradient(ellipse_at_70%_70%,rgba(224,56,155,0.18),transparent_55%)] motion-safe:animate-[lightsweep_8s_ease-in-out_infinite]"
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-12">
        <p className="mb-4 font-body text-caption uppercase tracking-caption text-cyan">
          Web design · {site.city}
        </p>
        <h1 className="font-display text-hero font-extrabold leading-[0.92] tracking-display text-bone">
          <span className="block overflow-hidden">
            <span className="reveal-word block" style={{ animationDelay: '0.1s' }}>
              ABDULREHMAN
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="reveal-word block" style={{ animationDelay: '0.28s' }}>
              AZAM
            </span>
          </span>
        </h1>
        <p className="mt-8 max-w-lg font-body text-body text-bone/80">{site.tagline}</p>
      </div>
      <ScrollCue />
    </section>
  );
}
