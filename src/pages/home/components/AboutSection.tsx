import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();
  const minerals = t('about.minerals', { returnObjects: true }) as string[];

  return (
    <section id="nosotros" className="relative bg-background-50">
      {/* Full-width Video */}
      <div className="w-full relative h-[420px] md:h-[600px] overflow-hidden">
        <video
          src="https://storage.readdy-site.link/project_files/5558daa9-7059-43a3-8453-c00007595499/938dc851-8dec-4f41-a3c4-0877c790f170_Proyecto-de-vdeo-23.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute top-5 left-5 md:top-8 md:left-10 flex items-center gap-2 flex-wrap">
          {minerals.map((mineral: string) => (
            <span
              key={mineral}
              className="px-4 py-2 bg-background-950/30 backdrop-blur-md rounded-full text-background-950 text-xs font-medium border border-background-950/20"
            >
              {mineral}
            </span>
          ))}
        </div>
      </div>

      {/* Team Section Below */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground-950 leading-tight">
          {t('about.title1')}
          <br />
          {t('about.title2')}
        </h2>

        {/* Discipline Tags */}
        <div className="flex items-center gap-3 mt-6 flex-wrap">
          <span className="px-4 py-2 rounded-full border border-foreground-300 text-foreground-800 text-sm font-medium">
            {t('about.tagGeology')}
          </span>
          <span className="px-4 py-2 rounded-full text-foreground-600 text-sm font-medium">
            {t('about.tagGeophysics')}
          </span>
          <span className="px-4 py-2 rounded-full text-foreground-600 text-sm font-medium">
            {t('about.tagTopography')}
          </span>
          <span className="px-4 py-2 rounded-full text-foreground-600 text-sm font-medium">
            {t('about.tagMetallurgy')}
          </span>
          <span className="px-4 py-2 rounded-full text-foreground-600 text-sm font-medium">
            {t('about.tagProjects')}
          </span>
        </div>

        {/* Team Image - Full width */}
        <div className="mt-10 w-full h-[320px] md:h-[480px] rounded-lg overflow-hidden">
          <img
            src="https://static.readdy.ai/image/d41906ec80d03cc0ed010806e730a167/67a04334da3cff54811658f2ee690c5d.jpeg"
            alt="Equipo de geólogos Oux Explore"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Description below image */}
        <div className="mt-8 max-w-3xl">
          <span className="inline-block px-3 py-1 bg-accent-500/20 text-accent-400 text-xs font-semibold rounded-full mb-4">
            {t('about.badge')}
          </span>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground-950 leading-tight">
            {t('about.subTitle')}
          </h3>
          <p className="mt-3 text-foreground-400 text-sm leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </div>
    </section>
  );
}