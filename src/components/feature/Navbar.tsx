import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  links: { label: string; href: string }[];
}

export default function Navbar({ links }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(next);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background-50/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className="flex items-center cursor-pointer"
          >
            <div className="flex items-center">
              <img
                src={`${__BASE_PATH__}images/logo-ouxplore.webp`}
                alt="OUX-Plore RESOURCES"
                className="h-14 md:h-[70px] w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-base font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  scrolled
                    ? 'text-foreground-700 hover:text-accent-500'
                    : 'text-background-950 hover:text-accent-500'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => handleClick(e, '#contacto')}
              className="inline-flex items-center px-5 py-2.5 bg-secondary-700 text-white text-sm font-semibold rounded-md hover:bg-secondary-800 transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              {t('nav.contactUs')}
            </a>

            {/* Language Switcher */}
            <div className="flex items-center border border-foreground-300/40 rounded-full overflow-hidden">
              <button
                onClick={() => i18n.changeLanguage('es')}
                className={`px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  i18n.language === 'es'
                    ? 'bg-accent-500 text-background-950'
                    : scrolled
                      ? 'text-foreground-600 hover:text-foreground-900'
                      : 'text-background-950/70 hover:text-background-950'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={`px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  i18n.language === 'en'
                    ? 'bg-accent-500 text-background-950'
                    : scrolled
                      ? 'text-foreground-600 hover:text-foreground-900'
                      : 'text-background-950/70 hover:text-background-950'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Language Switcher */}
            <div className="flex items-center border border-foreground-300/40 rounded-full overflow-hidden">
              <button
                onClick={() => i18n.changeLanguage('es')}
                className={`px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  i18n.language === 'es'
                    ? 'bg-accent-500 text-background-950'
                    : scrolled
                      ? 'text-foreground-600'
                      : 'text-background-950/70'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={`px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  i18n.language === 'en'
                    ? 'bg-accent-500 text-background-950'
                    : scrolled
                      ? 'text-foreground-600'
                      : 'text-background-950/70'
                }`}
              >
                EN
              </button>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex items-center justify-center cursor-pointer"
              aria-label={t('nav.toggleMenu')}
            >
              <i
                className={`text-xl transition-colors duration-200 ${
                  scrolled ? 'text-foreground-950' : 'text-background-950'
                } ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background-50 border-t border-background-200">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm font-medium text-foreground-700 hover:text-accent-500 transition-colors duration-200 py-2 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => handleClick(e, '#contacto')}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-secondary-700 text-white text-sm font-semibold rounded-md hover:bg-secondary-800 transition-colors duration-200 mt-2 cursor-pointer"
            >
              {t('nav.contactUs')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}