import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-void px-6 text-center">
      <p className="font-body text-caption uppercase tracking-caption text-cyan">404</p>
      <h1 className="font-display text-h2 font-bold tracking-display text-bone">
        This page doesn&apos;t exist.
      </h1>
      <Link
        href="/"
        className="mt-4 font-body text-body text-violet underline underline-offset-4 hover:text-magenta"
      >
        Back home
      </Link>
    </main>
  );
}
