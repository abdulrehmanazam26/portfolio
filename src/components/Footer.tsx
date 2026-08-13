'use client';

import { site } from '@/content/site';
import { credits } from '@/content/credits';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-bone/10 bg-ink px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="font-body text-caption text-bone/60">
          {site.name} · {year} · Built in {site.city}
        </p>
        {credits.length > 0 && (
          <p className="font-body text-caption text-bone/40">
            Images: {credits.map((c) => c.label).join(', ')}
          </p>
        )}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-body text-caption uppercase tracking-caption text-bone/60 underline-offset-4 hover:text-cyan hover:underline"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
