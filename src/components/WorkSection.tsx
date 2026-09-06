'use client';

import { useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from '@/lib/useInView';
import { projects, type Project } from '@/content/projects';
import { PlaceholderFrame } from './PlaceholderFrame';
import { BusinessIcon } from './BusinessIcon';
import { cn } from '@/lib/utils';

export function WorkSection() {
  return (
    <section id="work" aria-label="Selected work" className="relative px-6 py-24 md:px-12 md:py-32">
      <p className="sr-only">
        Projects: {projects.map((p) => `${p.name}, ${p.businessType}, ${p.city}`).join('; ')}
      </p>
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-body text-caption uppercase tracking-caption text-cyan">Work</p>
        <h2 className="font-display text-h2 font-bold tracking-display text-bone">My Projects</h2>
        <p className="mt-4 max-w-xl font-body text-body text-bone/75">
          Live websites I built and deployed myself — click through to see each one running in
          production.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <FadeInCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const TILT_MAX = 8;

function FadeInCard({ project }: { project: Project }) {
  const [inViewRef, inView] = useInView<HTMLAnchorElement>('-10% 0px');
  const tiltRef = useRef<HTMLAnchorElement | null>(null);
  const setRefs = useCallback(
    (node: HTMLAnchorElement | null) => {
      (inViewRef as React.MutableRefObject<HTMLAnchorElement | null>).current = node;
      tiltRef.current = node;
    },
    [inViewRef],
  );

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const node = tiltRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `perspective(900px) rotateX(${(-py * TILT_MAX).toFixed(2)}deg) rotateY(${(px * TILT_MAX).toFixed(2)}deg) translateY(-4px)`;
  };

  const onMouseLeave = () => {
    const node = tiltRef.current;
    if (!node) return;
    node.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <Link
      ref={setRefs}
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        'glass-panel group block rounded-2xl p-6 transition-[transform,opacity] duration-700 ease-signature will-change-transform md:p-8',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
      )}
    >
      {project.image ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-bone/10">
          <Image
            src={project.image}
            alt={`${project.name} website homepage`}
            fill
            loading="lazy"
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover transition-transform duration-700 ease-signature group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30"
          />
        </div>
      ) : (
        <PlaceholderFrame label={`${project.name} — before / after`} />
      )}
      <p className="mt-6 flex items-center gap-1.5 font-body text-caption uppercase tracking-caption text-cyan">
        <BusinessIcon type={project.businessType} className="h-3.5 w-3.5" />
        {project.businessType} · {project.city}
      </p>
      <h3 className="mt-2 font-display text-h3 font-bold tracking-display text-bone">
        {project.name}
      </h3>
      <p className="mt-2 font-body text-body text-bone/75">{project.summary}</p>
      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-bone/15 px-2.5 py-1 font-body text-[0.7rem] uppercase tracking-caption text-bone/60"
          >
            {tag}
          </li>
        ))}
      </ul>
      <span className="mt-4 inline-block font-body text-caption uppercase tracking-caption text-violet transition-transform duration-500 ease-signature group-hover:translate-x-1">
        Visit Live Site →
      </span>
    </Link>
  );
}
