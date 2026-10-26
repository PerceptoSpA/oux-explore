import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { AnimBlurRise } from '@readdy/anim/card/blur-rise/react';

export default function Footer() {
  const { t } = useTranslation();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const footerContent = (
    <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left - Brand */}
        <div className="lg:w-1/2">
          <img
            src={`${__BASE_PATH__}images/logo-ouxplore-footer.webp`}
            alt="OUX-Plore RESOURCES"
            className="h-14 w-auto rounded-sm"
          />
          <p className="mt-6 text-foreground-300 text-sm leading-relaxed max-w-md">
            {t('footer.description')}
          </p>
          <div className="flex items-center gap-4 mt-8">
            {[
              { icon: 'ri-linkedin-fill', href: '#' },
              { icon: 'ri-twitter-x-fill', href: '#' },
              { icon: 'ri-instagram-line', href: '#' },
              { icon: 'ri-youtube-fill', href: '#' },
            ].map((social) => (
              <a
                key={social.icon}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-foreground-700 text-foreground-300 hover:text-accent-500 hover:border-accent-500 transition-colors duration-200 cursor-pointer"
                rel="nofollow"
              >
                <i className={`${social.icon} text-lg`} />
              </a>
            ))}
          </div>
        </div>

        {/* Center - Contact Info */}
        <div className="lg:w-1/2 flex flex-col gap-8">
          <div>
            <h4 className="font-label text-xs uppercase tracking-widest text-foreground-500 mb-3">
              {t('footer.address')}
            </h4>
            <p className="text-sm text-foreground-300 leading-relaxed">
              {t('contact.address')}
            </p>
          </div>
          <div>
            <h4 className="font-label text-xs uppercase tracking-widest text-foreground-500 mb-3">
              {t('footer.phone')}
            </h4>
            <p className="text-sm text-foreground-300">{t('contact.phoneNumber')}</p>
          </div>
          <div>
            <h4 className="font-label text-xs uppercase tracking-widest text-foreground-500 mb-3">
              {t('footer.email')}
            </h4>
            <p className="text-sm text-foreground-300">{t('contact.emailAddress')}</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-14 pt-8 border-t border-background-200/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-foreground-500">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>
        <div className="flex items-center gap-6">
          {[
            { key: 'terms', label: t('footer.terms') },
            { key: 'privacy', label: t('footer.privacy') },
            { key: 'cookies', label: t('footer.cookies') },
          ].map((item) => (
            <a
              key={item.key}
              href="#"
              className="text-xs text-foreground-500 hover:text-accent-500 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <footer className="bg-background-100 text-background-950">
      {reducedMotion ? footerContent : <AnimBlurRise duration={700}>{footerContent}</AnimBlurRise>}
    </footer>
  );
}