import { experience, education, certifications } from '@/content/experience';

export function ExperienceSection() {
  return (
    <section id="experience" aria-label="Experience and education" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 font-body text-caption uppercase tracking-caption text-cyan">Experience</p>
        <h2 className="font-display text-h2 font-bold tracking-display text-bone">
          Where I&apos;ve worked.
        </h2>

        <ol className="mt-12 space-y-10 border-l border-bone/15 pl-8">
          {experience.map((role) => (
            <li key={role.title + role.organization} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-violet"
              />
              <h3 className="font-display text-h3 font-bold tracking-display text-bone">{role.title}</h3>
              <p className="mt-1 font-body text-caption uppercase tracking-caption text-cyan">
                {role.organization} · {role.period}
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-2 font-body text-body text-bone/80">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bone/40" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-h3 font-bold tracking-display text-bone">Education</h3>
            <ul className="mt-4 space-y-4">
              {education.map((item) => (
                <li key={item.degree}>
                  <p className="font-body text-body font-medium text-bone">{item.degree}</p>
                  <p className="font-body text-caption text-bone/60">
                    {item.institution} · {item.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-h3 font-bold tracking-display text-bone">Certifications</h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="flex gap-2 font-body text-body text-bone/80">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bone/40" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
