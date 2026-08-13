'use client';

import { GlassPanel } from './GlassPanel';
import { useInView } from '@/lib/useInView';
import { cn } from '@/lib/utils';

const skills = [
  {
    title: 'Frontend engineering',
    body: 'React and Next.js, day to day — the same stack this site is built on.',
    icon: 'M4 17l6-6-6-6M12 19h8',
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
    title: 'Full-stack when needed',
    body: 'Databases and backends (Cloudflare D1, Drizzle) for sites that need to do more than just look good.',
    icon: 'M4 7a8 3 0 0 0 16 0 8 3 0 0 0-16 0Zm0 0v10a8 3 0 0 0 16 0V7',
  },
];

export function AboutSection() {
  return (
    <section aria-label="About" className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-5xl">
        <GlassPanel className="md:w-4/5">
          <p className="mb-4 font-body text-caption uppercase tracking-caption text-cyan">
            About me
          </p>
          <h2 className="font-display text-h2 font-bold leading-[1.05] tracking-display text-bone">
            Software engineering student, building real sites on the side.
          </h2>
          <p className="mt-6 max-w-xl font-body text-body text-bone/75">
            I&apos;m still studying, but I&apos;ve been shipping real projects for small
            businesses since before I finished — the two in the work section above are
            actual sites, not mockups. Everything here is built and designed by me, end
            to end.
          </p>
        </GlassPanel>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[number];
  index: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>('-10% 0px');
  return (
    <div
      ref={ref}
      className={cn(
        'glass-panel rounded-2xl p-6 transition-all duration-700 ease-signature',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
      )}
      style={{ transitionDelay: inView ? `${index * 100}ms` : '0ms' }}
    >
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
  );
}
