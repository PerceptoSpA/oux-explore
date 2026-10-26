import { useTranslation } from 'react-i18next';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  headline: string;
  body: string;
  rating: number;
}

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const testimonials = t('testimonials.items', { returnObjects: true }) as Testimonial[];

  return (
    <section id="testimonios" className="relative bg-background-100 py-20 md:py-28">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="w-2 h-2 rounded-full bg-accent-500" />
          <span className="text-xs font-label uppercase tracking-widest text-foreground-500">
            {t('testimonials.label')}
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground-950 leading-tight max-w-3xl">
          {t('testimonials.title')}
        </h2>
        <p className="mt-4 text-foreground-600 text-base max-w-2xl">
          {t('testimonials.description')}
        </p>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => {
            const isFaded = idx >= 3;
            return (
              <div
                key={item.name}
                className={`bg-background-50 rounded-lg p-6 md:p-7 flex flex-col ${
                  isFaded ? 'opacity-70' : ''
                }`}
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="w-5 h-5 flex items-center justify-center">
                      <i
                        className={`text-sm ${
                          i < item.rating
                            ? 'ri-star-fill text-accent-500'
                            : 'ri-star-line text-foreground-300'
                        }`}
                      />
                    </span>
                  ))}
                </div>

                {/* Headline */}
                <h4 className="font-heading text-lg md:text-xl font-semibold text-foreground-900 leading-snug">
                  {item.headline}
                </h4>

                {/* Body */}
                <p
                  className={`mt-3 text-sm leading-relaxed flex-1 ${
                    isFaded ? 'text-foreground-400' : 'text-foreground-600'
                  }`}
                >
                  {item.body}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-background-200">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-100 flex-shrink-0">
                    <span className="text-accent-700 font-heading text-sm font-bold">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground-900">{item.name}</p>
                    <p className="text-xs text-foreground-500">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}