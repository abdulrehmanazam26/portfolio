import { Hero } from '@/components/Hero';
import { Positioning } from '@/components/Positioning';
import { WorkSection } from '@/components/WorkSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Positioning />
      <WorkSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
