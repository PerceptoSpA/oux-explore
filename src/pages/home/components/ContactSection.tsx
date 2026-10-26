import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimBlurToSharpRise } from '@readdy/anim/header/blur-to-sharp-rise/react';

export default function ContactSection() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const serviceOptions = t('contact.serviceOptions', { returnObjects: true }) as string[];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    const honeypot = formData.get('website_alt') as string;
    if (honeypot && honeypot.trim() !== '') {
      setStatus('success');
      form.reset();
      return;
    }
    formData.delete('website_alt');

    try {
      const response = await fetch('https://readdy.ai/api/form/d8u9h1b9akq3s3aso7dg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(
          Array.from(formData.entries()).map(([k, v]) => [k, v as string])
        ).toString(),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="relative bg-background-100 py-20 md:py-28">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
          {/* Left - Info */}
          <div className="lg:w-2/5">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent-500" />
              <span className="text-xs font-label uppercase tracking-widest text-foreground-500">
                {t('contact.label')}
              </span>
            </div>
            <AnimBlurToSharpRise>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground-950 leading-tight">
                {t('contact.title1')}
                <br />
                {t('contact.title2')}
              </h2>
            </AnimBlurToSharpRise>

            {/* Contact details */}
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-100 flex-shrink-0">
                  <i className="ri-map-pin-line text-accent-600 text-lg" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground-900">{t('contact.office')}</p>
                  <p className="text-sm text-foreground-600 mt-0.5 whitespace-pre-line">
                    {t('contact.address')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-100 flex-shrink-0">
                  <i className="ri-phone-line text-accent-600 text-lg" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground-900">{t('contact.phone')}</p>
                  <p className="text-sm text-foreground-600 mt-0.5">{t('contact.phoneNumber')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-100 flex-shrink-0">
                  <i className="ri-mail-line text-accent-600 text-lg" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground-900">{t('contact.email')}</p>
                  <p className="text-sm text-foreground-600 mt-0.5">{t('contact.emailAddress')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:w-3/5">
            <form
              onSubmit={handleSubmit}
              data-readdy-form
              className="bg-background-50 rounded-lg p-6 md:p-10 border border-background-300/60"
            >
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground-950 mb-8">
                {t('contact.formTitle')}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    {t('contact.nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-background-100 border border-background-300 rounded-md text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400 transition-colors"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    {t('contact.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-background-100 border border-background-300 rounded-md text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400 transition-colors"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    {t('contact.companyLabel')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-background-100 border border-background-300 rounded-md text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400 transition-colors"
                    placeholder={t('contact.companyPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    {t('contact.phoneLabel')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-background-100 border border-background-300 rounded-md text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400 transition-colors"
                    placeholder={t('contact.phonePlaceholder')}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="service" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    {t('contact.serviceLabel')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-background-100 border border-background-300 rounded-md text-sm text-foreground-900 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400 transition-colors cursor-pointer"
                  >
                    <option value="">{t('contact.servicePlaceholder')}</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    {t('contact.messageLabel')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 bg-background-100 border border-background-300 rounded-md text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400 transition-colors resize-none"
                    placeholder={t('contact.messagePlaceholder')}
                  />
                  <p className="text-xs text-foreground-400 mt-1">{t('contact.charLimit')}</p>
                </div>
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="website_alt"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-500 text-background-950 text-sm font-semibold rounded-md hover:bg-primary-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  {status === 'sending' ? (
                    <>
                      <i className="ri-loader-4-line animate-spin" />
                      {t('contact.sending')}
                    </>
                  ) : (
                    <>
                      {t('contact.sendButton')}
                      <i className="ri-send-plane-line" />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="mt-4 text-sm text-accent-600 font-medium">
                    {t('contact.success')}
                  </p>
                )}
                {status === 'error' && (
                  <p className="mt-4 text-sm text-red-500 font-medium">
                    {t('contact.error')}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}