import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import { CursorGlow } from '@/components/CursorGlow';
import { AnimatedBackdrop } from '@/components/AnimatedBackdrop';
import { site } from '@/content/site';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700', '800'],
  display: 'swap',
});

// Geist isn't on Google Fonts; Inter is the closest neutral UI face and the
// brief names it as the fallback.
const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abdulrehman.dev'),
  title: `${site.name} — Web design for local businesses in Nürnberg`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} — Web design for local businesses in Nürnberg`,
    description: site.tagline,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink focus:text-bone focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <AnimatedBackdrop />
        <CursorGlow />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
