import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/content/projects';
import { PlaceholderFrame } from '@/components/PlaceholderFrame';
import { FloristPreview } from '@/components/FloristPreview';
import { site } from '@/content/site';

const isFlorist = (slug: string) => slug === 'project-two';

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

        <section className="mt-16">
          <h2 className="font-display text-h3 font-bold tracking-display text-bone">
            The problem
          </h2>
          {isFlorist(project.slug) ? (
            <FloristPreview variant="before" className="mt-6" />
          ) : (
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
          {isFlorist(project.slug) ? (
            <FloristPreview variant="after" className="mt-6" />
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

        <a
          href={`mailto:${site.email}`}
          className="mt-16 inline-flex items-center gap-2 rounded-full bg-violet px-8 py-4 font-body text-body font-medium text-bone transition-transform duration-500 ease-signature hover:-translate-y-0.5 hover:bg-magenta"
        >
          Email me <span aria-hidden="true">→</span>
        </a>
      </div>
    </main>
  );
}
