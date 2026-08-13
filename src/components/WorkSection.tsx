'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useLenis } from './SmoothScrollProvider';
import { useSceneCapable } from '@/lib/useSceneCapable';
import { useInView } from '@/lib/useInView';
import { projects, type Project } from '@/content/projects';
import { PlaceholderFrame } from './PlaceholderFrame';
import { FloristPreview } from './FloristPreview';
import { BusinessIcon } from './BusinessIcon';
import { CorridorCanvas } from './scene/CorridorCanvas';
import { cn } from '@/lib/utils';

const CorridorScene = dynamic(() => import('./scene/CorridorScene'), { ssr: false });

export function WorkSection() {
  const capable = useSceneCapable();

  return (
    <section id="work" aria-label="Selected work" className="relative bg-void">
      <p className="sr-only">
        Projects: {projects.map((p) => `${p.name}, ${p.businessType}, ${p.city}`).join('; ')}
      </p>
      {capable ? <WorkCorridor3D /> : <WorkList2D />}
    </section>
  );
}

function WorkCorridor3D() {
  const lenis = useLenis();
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6,
      onUpdate: (self) => setProgress(self.progress),
    });
    return () => trigger.kill();
  }, []);

  useEffect(() => {
    if (!lenis) return;
    lenis.on('scroll', ScrollTrigger.update);
    return () => {
      lenis.off('scroll', ScrollTrigger.update);
    };
  }, [lenis]);

  const activeIndex = Math.min(projects.length - 1, Math.floor(progress * projects.length));
  const activeProject = projects[activeIndex] ?? projects[0];

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${(projects.length + 0.5) * 100}vh` }}
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <CorridorCanvas>
            <CorridorScene progress={progress} projects={projects} />
          </CorridorCanvas>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/40"
          aria-hidden="true"
        />
        <div className="relative z-10 flex h-full items-end px-6 pb-20 md:px-16 md:pb-28">
          {activeProject && <ProjectCaption project={activeProject} />}
        </div>
      </div>
    </div>
  );
}

function ProjectCaption({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="glass-panel block max-w-md rounded-2xl p-6 transition-transform duration-500 ease-signature hover:-translate-y-1 md:p-8"
    >
      <p className="font-body text-caption uppercase tracking-caption text-cyan">
        {project.businessType} · {project.city}
      </p>
      <h3 className="mt-2 font-display text-h3 font-bold tracking-display text-bone">
        {project.name}
      </h3>
      <p className="mt-2 font-body text-body text-bone/75">{project.summary}</p>
      <span className="mt-4 inline-block font-body text-caption uppercase tracking-caption text-violet">
        See the work →
      </span>
    </Link>
  );
}

function WorkList2D() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 md:px-12 md:py-32">
      <h2 className="font-display text-h2 font-bold tracking-display text-bone">Selected work</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <FadeInCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

function FadeInCard({ project }: { project: Project }) {
  const [ref, inView] = useInView<HTMLAnchorElement>('-10% 0px');
  return (
    <Link
      ref={ref}
      href={`/work/${project.slug}`}
      className={cn(
        'glass-panel block rounded-2xl p-6 transition-all duration-700 ease-signature md:p-8',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
      )}
    >
      {project.slug === 'project-two' ? (
        <FloristPreview variant="after" />
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
      <span className="mt-4 inline-block font-body text-caption uppercase tracking-caption text-violet">
        See the work →
      </span>
    </Link>
  );
}
