import { cn } from '@/lib/utils';

/**
 * A concept mockup of a florist redesign — built as markup/SVG, not a real
 * client screenshot (see note in content/projects.ts). "before" mimics the
 * kind of dated, unstyled site small shops are often still running; "after"
 * is the redesign concept in this site's own visual language.
 */
export function FloristPreview({
  variant,
  className,
}: {
  variant: 'before' | 'after';
  className?: string;
}) {
  if (variant === 'before') return <FloristBefore className={className} />;
  return <FloristAfter className={className} />;
}

function FloristBefore({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'aspect-[4/3] w-full overflow-hidden rounded-xl border border-bone/10 bg-[#d9d5c9] p-4 text-[#2b2b2b]',
        className,
      )}
    >
      <div className="flex items-center justify-between border-b-2 border-[#2b2b2b] pb-2">
        <span className="font-serif text-lg font-bold underline">Blumen &amp; Mehr</span>
        <span className="hidden font-serif text-xs sm:inline">Tel: 0911-000000</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 font-serif text-[10px] leading-tight">
        <p className="col-span-1 bg-[#c7c2b3] p-2">Startseite</p>
        <p className="col-span-1 bg-[#c7c2b3] p-2">Über uns</p>
        <p className="col-span-1 bg-[#c7c2b3] p-2">Kontakt</p>
      </div>
      <p className="mt-3 font-serif text-[11px] leading-snug">
        Willkommen auf unserer Webseite! Wir verkaufen Blumen seit 1998. Öffnungszeiten
        Mo-Fr 9-18 Uhr. Diese Seite wird bald aktualisiert.
      </p>
      <p className="mt-2 text-[9px] italic text-[#5a5a5a]">
        Zuletzt aktualisiert: vor mehreren Jahren · nicht für Handy optimiert
      </p>
    </div>
  );
}

function FloristAfter({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-bone/10 bg-gradient-to-br from-ink via-void to-ink',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(224,56,155,0.22),transparent_55%),radial-gradient(ellipse_at_75%_75%,rgba(123,77,255,0.2),transparent_55%)] transition-opacity duration-700 group-hover:opacity-80"
      />
      <div className="relative flex h-full flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between font-body text-[10px] uppercase tracking-caption text-bone/60">
          <span className="font-display text-sm normal-case tracking-display text-bone">
            Blüte &amp; Stiel
          </span>
          <span className="hidden gap-3 sm:flex">
            <span>Sträuße</span>
            <span>Anlässe</span>
            <span className="text-cyan">Bestellen</span>
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-4">
          <div>
            <p className="font-display text-lg font-bold leading-tight tracking-display text-bone sm:text-xl">
              Frische Sträuße,
              <br />
              geliefert in Nürnberg.
            </p>
            <span className="mt-3 inline-block rounded-full bg-magenta/90 px-4 py-1.5 font-body text-[10px] font-medium uppercase tracking-caption text-bone">
              Jetzt bestellen
            </span>
          </div>
          <BouquetGlyph className="h-16 w-16 shrink-0 text-bone/90 sm:h-20 sm:w-20" />
        </div>
      </div>
    </div>
  );
}

function BouquetGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M50 92V54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 54c-8 4-14 12-16 24" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M50 54c8 4 14 12 16 24" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.6" strokeLinecap="round" />
      <g>
        <circle cx="50" cy="34" r="9" fill="#E0389B" fillOpacity="0.85" />
        <circle cx="34" cy="42" r="7" fill="#7B4DFF" fillOpacity="0.85" />
        <circle cx="66" cy="42" r="7" fill="#3DE0E8" fillOpacity="0.8" />
        <circle cx="42" cy="24" r="6" fill="#3DE0E8" fillOpacity="0.7" />
        <circle cx="60" cy="22" r="6" fill="#E0389B" fillOpacity="0.7" />
        <circle cx="50" cy="34" r="3" fill="#EDEAF5" />
      </g>
    </svg>
  );
}
