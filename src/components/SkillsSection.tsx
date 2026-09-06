'use client';

import { skillCategories } from '@/content/skills';
import { useInView } from '@/lib/useInView';
import { cn } from '@/lib/utils';

export function SkillsSection() {
  return (
    <section id="skills" aria-label="Skills" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-body text-caption uppercase tracking-caption text-cyan">Skills</p>
        <h2 className="font-display text-h2 font-bold tracking-display text-bone">
          What I work with.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <CategoryCard key={category.title} title={category.title} skills={category.skills} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  title,
  skills,
  index,
}: {
  title: string;
  skills: string[];
  index: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>('-10% 0px');
  return (
    <div
      ref={ref}
      className={cn(
        'glass-panel rounded-2xl p-6 transition-all duration-700 ease-signature md:p-8',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
      )}
      style={{ transitionDelay: inView ? `${index * 90}ms` : '0ms' }}
    >
      <h3 className="font-display text-h3 font-bold tracking-display text-bone">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-bone/15 bg-bone/5 px-3 py-1.5 font-body text-caption text-bone/85"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
