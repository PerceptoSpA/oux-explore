import { useTranslation } from 'react-i18next';

export default function FeatureGrid() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-background-100 py-20 md:py-28">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Brand Identity */}
        <div className="mb-4">
          <p className="font-label text-xs md:text-sm text-foreground-600 tracking-[0.3em] uppercase font-bold">
            {t('features.brandText')}
            <br />
            <br />
          </p>
        </div>

        {/* Elegant Title */}
        <div className="max-w-5xl">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-950 leading-tight">
            {t('features.title')}
          </h2>
        </div>

        {/* Triad Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Geología, Image Background */}
          <div className="relative rounded-lg overflow-hidden min-h-[340px] group cursor-pointer">
            <img
              src="https://storage.readdy-site.link/project_files/5558daa9-7059-43a3-8453-c00007595499/f3a57ad2-7836-41db-bfbe-40a1a58b1b35_compressed_Untitled-Project-2.webp"
              alt="Muestra mineral de geología de exploración"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-background-950 text-xs font-medium">
                <i className="ri-map-pin-line text-sm" />
                {t('features.card1Label')}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-background-950 leading-tight">
                {t('features.card1Title1')}
                <br />
                {t('features.card1Title2')}
              </h3>
            </div>
          </div>

          {/* Card 2 - Image Background */}
          <div className="relative rounded-lg overflow-hidden min-h-[340px] group cursor-pointer">
            <img
              src="https://storage.readdy-site.link/project_files/5558daa9-7059-43a3-8453-c00007595499/1843cafc-6c57-4c1c-bec4-731fa569f82d_compressed_AI-Image-Editor-2026-06-24_23-17-04.webp"
              alt="Terreno de exploración minera en montaña desértica"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-background-950 text-xs font-medium">
                <i className="ri-earth-line text-sm" />
                {t('features.card2Label')}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-background-950 leading-tight">
                {t('features.card2Title1')}
                <br />
                {t('features.card2Title2')}
              </h3>
            </div>
          </div>

          {/* Card 3 - Image Background */}
          <div className="relative rounded-lg overflow-hidden min-h-[340px] group cursor-pointer">
            <img
              src={`${__BASE_PATH__}images/provisional/escaneo-muestras.svg`}
              alt="Escaneo de núcleos de muestras minerales"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-background-950 text-xs font-medium">
                <i className="ri-scan-line text-sm" />
                {t('features.card3Label')}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-background-950 leading-tight">
                {t('features.card3Title1')}
                <br />
                {t('features.card3Title2')}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}