import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/content/projects';
import { PlaceholderFrame } from '@/components/PlaceholderFrame';
import { MagneticButton } from '@/components/MagneticButton';
import { site } from '@/content/site';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${site.name}`,
    description: project.summary,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main id="main" className="min-h-screen bg-void px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/#work"
          className="font-body text-caption uppercase tracking-caption text-bone/60 hover:text-cyan"
        >
          ← Back
        </Link>

        <p className="mt-8 font-body text-caption uppercase tracking-caption text-cyan">
          {project.businessType} · {project.city}
        </p>
        <h1 className="mt-2 font-display text-h2 font-bold leading-[1.05] tracking-display text-bone">
          {project.name}
        </h1>

        {project.image && (
          <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-bone/10">
            <Image
              src={project.image}
              alt={`${project.name} website preview`}
              fill
              sizes="(min-width: 768px) 42rem, 100vw"
              priority
              className="object-cover"
            />
          </div>
        )}

        <section className="mt-16">
          <h2 className="font-display text-h3 font-bold tracking-display text-bone">
            The problem
          </h2>
          {!project.image && (
            <PlaceholderFrame label={`${project.name} — before`} className="mt-6" />
          )}
          <p className="mt-6 font-body text-body leading-relaxed text-bone/80">
            {project.problem}
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-h3 font-bold tracking-display text-bone">
            What I changed
          </h2>
          {project.gallery && project.gallery.length > 0 ? (
            <div className="mt-6 grid grid-cols-2 gap-3">
              {project.gallery.map((src) => (
                <div
                  key={src}
                  className="relative aspect-square overflow-hidden rounded-xl border border-bone/10"
                >
                  <Image
                    src={src}
                    alt={`${project.name} — detail`}
                    fill
                    sizes="(min-width: 768px) 20rem, 45vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <PlaceholderFrame label={`${project.name} — after`} className="mt-6" />
          )}
          <p className="mt-6 font-body text-body leading-relaxed text-bone/80">
            {project.whatChanged}
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-h3 font-bold tracking-display text-bone">
            What it does for their business
          </h2>
          <p className="mt-6 font-body text-body leading-relaxed text-bone/80">
            {project.impact}
          </p>
        </section>

        <MagneticButton
          as="a"
          href={`mailto:${site.email}`}
          className="mt-16 inline-flex items-center gap-2 rounded-full bg-violet px-8 py-4 font-body text-body font-medium text-bone hover:bg-magenta"
        >
          Email me <span aria-hidden="true">→</span>
        </MagneticButton>
      </div>
    </main>
  );
}
