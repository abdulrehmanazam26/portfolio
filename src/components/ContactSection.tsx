import { GlassPanel } from './GlassPanel';
import { MagneticButton } from './MagneticButton';
import { contact, site } from '@/content/site';

export function ContactSection() {
  return (
    <section id="contact" aria-label="Contact" className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-2xl text-center">
        <GlassPanel className="mx-auto">
          <h2 className="font-display text-h2 font-bold tracking-display text-bone">
            {contact.heading}
          </h2>
          <p className="mt-4 font-body text-body text-bone/75">{contact.body}</p>
          <MagneticButton
            as="a"
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet px-8 py-4 font-body text-body font-medium text-bone hover:bg-magenta"
          >
            {contact.ctaLabel} <span aria-hidden="true">→</span>
          </MagneticButton>
          <p className="mt-4 font-body text-caption text-bone/50">{site.email}</p>
        </GlassPanel>
      </div>
    </section>
  );
}
