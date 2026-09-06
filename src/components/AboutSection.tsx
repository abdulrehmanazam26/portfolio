import { GlassPanel } from './GlassPanel';
import { about } from '@/content/site';

export function AboutSection() {
  return (
    <section id="about" aria-label="About" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-4xl">
        <GlassPanel>
          <p className="mb-4 font-body text-caption uppercase tracking-caption text-cyan">
            {about.eyebrow}
          </p>
          <h2 className="font-display text-h2 font-bold leading-[1.05] tracking-display text-bone">
            {about.heading}
          </h2>
          <div className="mt-6 max-w-2xl space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="font-body text-body leading-relaxed text-bone/80">
                {paragraph}
              </p>
            ))}
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
