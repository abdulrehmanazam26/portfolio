import { site } from '@/content/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-bone/10 bg-ink px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="font-body text-body font-medium text-bone">{site.name}</p>
          <p className="font-body text-caption text-bone/60">{site.roleLong}</p>
        </div>
        <a
          href={`mailto:${site.email}`}
          className="font-body text-caption text-bone/60 hover:text-cyan"
        >
          {site.email}
        </a>
        <p className="font-body text-caption text-bone/40">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
