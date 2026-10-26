import { useTranslation } from 'react-i18next';

interface ServiceCard {
  area: string;
  description: string;
  icon: string;
  imageUrl: string;
  imageAlt: string;
}

const serviceIcons = [
  'ri-search-line',
  'ri-radar-line',
  'ri-tools-line',
  'ri-microscope-line',
  'ri-file-chart-line',
  'ri-funds-line',
];

const serviceImages = [
  {
    url: 'https://static.readdy.ai/image/d41906ec80d03cc0ed010806e730a167/29a9187d4e07504a098cff946a7332ad.jpeg',
    altES: 'Exploración geológica en terreno',
    altEN: 'Geological exploration in the field',
  },
  {
    url: `${__BASE_PATH__}images/provisional/geofisica.svg`,
    altES: 'Equipo de geofísica con drone',
    altEN: 'Geophysics equipment with drone',
  },
  {
    url: 'https://static.readdy.ai/image/d41906ec80d03cc0ed010806e730a167/c17015165bf3457ca9eaf6d395d5acc2.jpeg',
    altES: 'Testigos de sondaje en cajas',
    altEN: 'Drill core samples in boxes',
  },
  {
    url: 'https://static.readdy.ai/image/d41906ec80d03cc0ed010806e730a167/c83e2f9e7c4dc90cd75866ffb5e57682.jpeg',
    altES: 'Análisis mineralógico en laboratorio',
    altEN: 'Mineralogical analysis in laboratory',
  },
  {
    url: `${__BASE_PATH__}images/provisional/desarrollo-proyectos.svg`,
    altES: 'Documentación de due diligence minero',
    altEN: 'Mining due diligence documentation',
  },
  {
    url: `${__BASE_PATH__}images/provisional/mercado-capitales.svg`,
    altES: 'Mercados de capital minero',
    altEN: 'Mining capital markets',
  },
];

export default function ServicesGrid() {
  const { t, i18n } = useTranslation();
  const servicesData = t('services.items', { returnObjects: true }) as ServiceCard[];

  // Build full services array combining translated text with hardcoded icons/images
  const services: ServiceCard[] = servicesData.map((item, idx) => ({
    ...item,
    icon: serviceIcons[idx] || 'ri-stack-line',
    imageUrl: serviceImages[idx]?.url || '',
    imageAlt:
      i18n.language === 'es'
        ? serviceImages[idx]?.altES || ''
        : serviceImages[idx]?.altEN || '',
  }));

  return (
    <section id="servicios" className="relative bg-background-50 py-20 md:py-28">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Title */}
        <div className="mb-14 md:mb-20">
          <p className="text-sm md:text-base font-label tracking-widest uppercase text-accent-500 mb-3">
            {t('services.sectionLabel')}
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground-950 leading-none">
            {t('services.titleLine1')}
            <br />
            <span className="italic font-normal text-accent-500">{t('services.titleLine2')}</span>
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((card) => (
            <div
              key={card.area}
              className="group bg-background-50 border border-background-200/70 rounded-lg overflow-hidden cursor-pointer hover:border-accent-300/60 transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full h-52 sm:h-56 md:h-64 bg-background-100 overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-md bg-accent-100 shrink-0">
                    <i className={`${card.icon} text-sm text-accent-600`} />
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground-950">
                    {card.area}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-foreground-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}