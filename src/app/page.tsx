import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { WorkSection } from '@/components/WorkSection';
import { AIFocusSection } from '@/components/AIFocusSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <AIFocusSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
