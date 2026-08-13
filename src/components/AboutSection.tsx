'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlassPanel } from './GlassPanel';

const skills = [
  {
    title: 'Frontend engineering',
    body: 'React and Next.js, day to day — the same stack this site is built on.',
    icon: 'M4 17l6-6-6-6M12 19h8',
  },
  {
    title: 'TypeScript',
    body: 'Typed end to end, from UI components down to the data layer.',
    icon: 'M4 4h16v16H4V4Zm3 9v-1h6M9 12v6M14 12v6h3',
  },
  {
    title: 'Design & motion',
    body: 'Tailwind for layout, GSAP and Framer Motion for the kind of movement that makes a site feel alive.',
    icon: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83',
  },
  {
    title: '3D on the web',
    body: 'Three.js and WebGL for scenes like the one on this page — not just flat pages when a project calls for more.',
    icon: 'M12 2l9 5v10l-9 5-9-5V7l9-5ZM3 7l9 5 9-5M12 12v10',
  },
  {
    title: 'Full-stack & databases',
    body: 'Backends and data (Cloudflare D1, Drizzle) for sites that need to do more than just look good.',
    icon: 'M4 7a8 3 0 0 0 16 0 8 3 0 0 0-16 0Zm0 0v10a8 3 0 0 0 16 0V7',
  },
  {
    title: 'Ordering & integrations',
    body: 'Forms and flows that hand off cleanly to WhatsApp, email, or a real backend — whatever the business actually uses.',
    icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z',
  },
  {
    title: 'Performance & SEO',
    body: 'Fast, mobile-first builds that load quickly and are easy for search engines to actually find.',
    icon: 'M13 2 3 14h7l-1 8 11-13h-7l1-7Z',
  },
  {
    title: 'Git & deployment',
    body: 'GitHub for version control, Vercel and Cloudflare for shipping — every change tracked and deployed properly.',
    icon: 'M6 3v12M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 0 4-4V3M18 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z',
  },
];

export function AboutSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll<HTMLElement>('[data-skill-card]');
    const triggers = Array.from(cards).map((card, index) => {
      const offset = index % 2 === 0 ? -40 : 40;
      return gsap.fromTo(
        card,
        { y: 0 },
        {
          y: offset,
          ease: 'none',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        },
      );
    });
    return () => {
      triggers.forEach((t) => t.scrollTrigger?.kill());
    };
  }, []);

  return (
    <section aria-label="About" className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-5xl">
        <GlassPanel className="md:w-4/5">
          <p className="mb-4 font-body text-caption uppercase tracking-caption text-cyan">
            About me
          </p>
          <h2 className="font-display text-h2 font-bold leading-[1.05] tracking-display text-bone">
            Full-stack developer, building real sites for real businesses.
          </h2>
          <p className="mt-6 max-w-xl font-body text-body text-bone/75">
            I design and build complete websites end to end — the two projects in the work
            section above are live sites, not mockups. From the interface down to the
            backend, everything here is my own work.
          </p>
        </GlassPanel>

        <div ref={gridRef} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill.title} data-skill-card className="glass-panel rounded-2xl p-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7 text-violet"
                aria-hidden="true"
              >
                <path d={skill.icon} />
              </svg>
              <h3 className="mt-4 font-display text-h3 font-bold tracking-display text-bone">
                {skill.title}
              </h3>
              <p className="mt-2 font-body text-body text-bone/75">{skill.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
