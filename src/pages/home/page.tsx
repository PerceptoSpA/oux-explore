import { useTranslation } from 'react-i18next';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from './components/HeroSection';
import FeatureGrid from './components/FeatureGrid';
import AboutSection from './components/AboutSection';
import ServicesGrid from './components/ServicesGrid';
import TeamSection from './components/TeamSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';

export default function Home() {
  const { t } = useTranslation();

  const navLinks = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.ourCompany'), href: '#nosotros' },
    { label: t('nav.projects'), href: '#proyectos' },
    { label: t('nav.services'), href: '#servicios' },
    { label: t('nav.team'), href: '#equipo' },
    { label: t('nav.contact'), href: '#contacto' },
  ];

  return (
    <main>
      <header>
        <Navbar links={navLinks} />
      </header>
      <article>
        <HeroSection />
        <FeatureGrid />
        <AboutSection />
        <ServicesGrid />
        <TeamSection />
        <CTASection />
        <ContactSection />
      </article>
      <Footer />
    </main>
  );
}