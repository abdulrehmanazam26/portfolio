import { GlassPanel } from './GlassPanel';
import { MagneticButton } from './MagneticButton';
import { contact, site } from '@/content/site';

export function ContactSection() {
  return (
    <section id="contact" aria-label="Contact" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <GlassPanel className="mx-auto">
          <h2 className="font-display text-h2 font-bold tracking-display text-bone">
            {contact.heading}
          </h2>
          <p className="mt-4 font-body text-body text-bone/75">{contact.body}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              as="a"
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-violet px-8 py-4 font-body text-body font-medium text-bone hover:bg-magenta"
            >
              {contact.ctaLabel} <span aria-hidden="true">→</span>
            </MagneticButton>
            <MagneticButton
              as="a"
              href={`tel:${site.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-8 py-4 font-body text-body font-medium text-bone hover:border-cyan hover:text-cyan"
            >
              Call me
            </MagneticButton>
          </div>

          <dl className="mt-8 space-y-1 font-body text-caption text-bone/60">
            <div>
              <dt className="inline">Location: </dt>
              <dd className="inline">{site.location}</dd>
            </div>
            <div>
              <dt className="inline">Email: </dt>
              <dd className="inline">{site.email}</dd>
            </div>
            <div>
              <dt className="inline">Phone: </dt>
              <dd className="inline">{site.phone}</dd>
            </div>
          </dl>

          <p className="mt-6 font-body text-caption text-bone/50">{contact.formNote}</p>
        </GlassPanel>
      </div>
    </section>
  );
}
