'use client'

import { Reveal } from '@/components/Reveal'
import { ServicesSection } from '@/components/ServicesSection'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'
import { useI18n } from '@/i18n/I18nProvider'

export default function StudioPage() {
  const { t } = useI18n()

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 md:px-12">
      {/* Header */}
      <section className="mb-20 md:mb-32">
        <Reveal direction="up">
          <h1 className="text-editorial text-text-secondary font-light tracking-tighter mb-8">
            {t('studio.title')}
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="text-mono text-text-primary/60 uppercase tracking-[0.15em] max-w-2xl leading-relaxed">
            {t('studio.manifesto')}
          </p>
        </Reveal>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 border-t border-white/10">
        <Reveal direction="up">
          <div className="max-w-4xl">
            <p className="text-2xl md:text-4xl text-text-secondary font-light tracking-tight leading-relaxed mb-12">
              {t('studio.philosophy')}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal direction="up" delay={0.2}>
            <div>
              <h3 className="text-xl text-text-secondary font-light tracking-tight mb-4">
                {t('studio.fashionPart')}
              </h3>
              <p className="text-mono text-text-primary/50 text-sm leading-relaxed whitespace-pre-line">
                {t('studio.fashionDesc')}
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <div>
              <h3 className="text-xl text-text-secondary font-light tracking-tight mb-4">
                {t('studio.productionPart')}
              </h3>
              <p className="text-mono text-text-primary/50 text-sm leading-relaxed whitespace-pre-line">
                {t('studio.productionDesc')}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <ServicesSection />

      {/* Pricing Info */}
      <section className="py-20 md:py-32 border-t border-white/10">
        <Reveal direction="up">
          <div className="max-w-2xl">
            <p className="text-mono text-text-primary/40 uppercase tracking-[0.15em] mb-4">
              {t('studio.startingFrom')}
            </p>
            <p className="text-4xl md:text-6xl text-text-secondary font-light tracking-tighter">
              45 000 ₽
            </p>
            <p className="mt-4 text-mono text-text-primary/50 text-sm">
              {t('studio.pricingNote')}
            </p>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <CTASection
        title={t('cta.title')}
        subtitle={t('cta.subtitle')}
        ctaText={t('cta.ctaText')}
        ctaHref="/contact"
      />

      <Footer showShopPreview={false} />
    </div>
  )
}
