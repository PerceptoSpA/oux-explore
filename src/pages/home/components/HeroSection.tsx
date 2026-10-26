import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background-50"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ imageRendering: 'auto' }}
          src={`${__BASE_PATH__}videos/hero.mp4`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center px-6 md:px-10 pt-24 pb-10">
        {/* Tagline */}
        <p className="text-accent-300 text-sm md:text-base font-label tracking-widest uppercase mb-6">
          {t('hero.tagline')}
        </p>

        {/* Main Title */}
        <div className="text-center max-w-6xl">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background-950 leading-tight">
            <span className="text-accent-400">OUX-PLORE</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal">{t('hero.title')}</span>
          </h1>
        </div>
      </div>
    </section>
  );
}