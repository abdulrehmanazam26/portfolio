import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import { CursorGlow } from '@/components/CursorGlow';
import { AnimatedBackdrop } from '@/components/AnimatedBackdrop';

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

const SITE_URL = 'https://portfolio-black-three-92.vercel.app';
const TITLE = 'Abdul Rehman Azam | Full-Stack Developer & AI Automation';
const DESCRIPTION =
  'Full-stack developer specializing in PHP, JavaScript, WordPress, REST API integrations, and backend support, currently expanding into AI agents, chatbot workflows, and business automation.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
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
