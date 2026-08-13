import { GlassPanel } from './GlassPanel';
import { positioning } from '@/content/site';

export function Positioning() {
  return (
    <section aria-label="What I do" className="relative bg-void px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-4xl">
        <GlassPanel className="md:w-4/5">
          <p className="mb-4 font-body text-caption uppercase tracking-caption text-cyan">
            {positioning.eyebrow}
          </p>
          <h2 className="font-display text-h2 font-bold leading-[1.05] tracking-display text-bone">
            {positioning.heading}
          </h2>
          <p className="mt-6 max-w-xl font-body text-body text-bone/75">{positioning.body}</p>
          <ul className="mt-8 space-y-3">
            {positioning.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 font-body text-body text-bone/85">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                {bullet}
              </li>
            ))}
          </ul>
        </GlassPanel>
      </div>
    </section>
  );
}
