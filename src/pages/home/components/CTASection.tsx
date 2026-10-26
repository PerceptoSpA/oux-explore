import { useTranslation } from 'react-i18next';

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-background-50 py-20 md:py-28 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 text-center relative z-10">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-950 leading-tight">
          {t('cta.title1')}
          <br />
          {t('cta.title2')}
        </h2>
        <p className="mt-5 text-foreground-500 text-base md:text-lg max-w-xl mx-auto">
          {t('cta.description')}
        </p>

        <a
          href="#contacto"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2.5 mt-8 px-10 py-4 bg-primary-500 text-background-950 text-sm font-semibold rounded-full hover:bg-primary-600 transition-colors duration-200 cursor-pointer whitespace-nowrap"
        >
          {t('cta.button')}
          <i className="ri-arrow-right-line text-lg" />
        </a>
      </div>

      {/* Image Banner */}
      <div className="mt-16 w-full flex items-center gap-0">
        <div className="flex-1 h-56 md:h-72 overflow-hidden">
          <img
            src="https://static.readdy.ai/image/d41906ec80d03cc0ed010806e730a167/7845757b0b7a749f62fed581b32fc11f.jpeg"
            alt="Camino de exploración en terreno montañoso"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex-1 h-56 md:h-72 overflow-hidden">
          <img
            src="https://static.readdy.ai/image/d41906ec80d03cc0ed010806e730a167/529470d1856a02ae665835b8da47367c.jpeg"
            alt="Geólogos examinando muestras de perforación"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex-1 h-56 md:h-72 overflow-hidden">
          <img
            src="https://static.readdy.ai/image/d41906ec80d03cc0ed010806e730a167/04598289106985efe839a9da6b3ca09e.jpeg"
            alt="Vista aérea de campamento de exploración"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}