'use client';

import { process } from '@/content/site';
import { useInView } from '@/lib/useInView';
import { cn } from '@/lib/utils';

export function ProcessSection() {
  return (
    <section aria-label="How it works" className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-h2 font-bold tracking-display text-bone">
          How it works
        </h2>
        <p className="mt-4 max-w-xl font-body text-body text-bone/75">
          Free first draft. You only pay if you like it.
        </p>
        <ol className="mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {process.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
}: {
  step: (typeof process)[number];
  index: number;
}) {
  const [ref, inView] = useInView<HTMLLIElement>('-15% 0px');
  return (
    <li
      ref={ref}
      className={cn(
        'group relative border-t border-bone/10 pt-6 transition-all duration-700 ease-signature md:border-t-0 md:pt-0',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
      )}
      style={{ transitionDelay: inView ? `${index * 120}ms` : '0ms' }}
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 hidden h-px w-full md:block"
        style={{
          background: `linear-gradient(90deg, ${
            index % 2 === 0 ? '#7B4DFF' : '#E0389B'
          }, transparent)`,
        }}
      />
      <span className="inline-block font-display text-h3 font-bold tracking-display text-violet transition-transform duration-500 ease-signature group-hover:scale-110 group-hover:text-cyan">
        {step.number}
      </span>
      <h3 className="mt-2 font-display text-h3 font-bold tracking-display text-bone">
        {step.title}
      </h3>
      <p className="mt-2 font-body text-body text-bone/75">{step.body}</p>
    </li>
  );
}
