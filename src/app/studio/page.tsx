'use client'

import { Reveal } from '@/components/Reveal'
import { ServicesSection } from '@/components/ServicesSection'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'

export default function StudioPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 md:px-12">
      {/* Header */}
      <section className="mb-20 md:mb-32">
        <Reveal direction="up">
          <h1 className="text-editorial text-text-secondary font-light tracking-tighter mb-8">
            HIDEKI STUDIO
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="text-mono text-text-primary/60 uppercase tracking-[0.15em] max-w-2xl leading-relaxed">
            Production manifesto — we create visual work at the intersection of
            fashion, photography, film and contemporary art. Every project is a
            collaboration, every image is a statement.
          </p>
        </Reveal>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 border-t border-white/10">
        <Reveal direction="up">
          <div className="max-w-4xl">
            <p className="text-2xl md:text-4xl text-text-secondary font-light tracking-tight leading-relaxed mb-12">
              HIDEKI is not clothing made for the sake of clothing.
              It is a visual world created through photography, cinema, clothing, sound and art.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal direction="up" delay={0.2}>
            <div>
              <h3 className="text-xl text-text-secondary font-light tracking-tight mb-4">
                FASHION IS PART OF HIDEKI
              </h3>
              <p className="text-mono text-text-primary/50 text-sm leading-relaxed">
                Small batches, experimental construction, oversized silhouettes,
                handmade elements, texture, distortion, asymmetry, unusual materials.
                Not merchandise. Not mainstream streetwear. Not classic luxury.
                Separate art objects that unite into looks.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <div>
              <h3 className="text-xl text-text-secondary font-light tracking-tight mb-4">
                PRODUCTION IS PART OF HIDEKI
              </h3>
              <p className="text-mono text-text-primary/50 text-sm leading-relaxed">
                Full-service creative production from concept to delivery.
                Fashion photography, campaigns, video, art direction, AI experimentation.
                We work with brands, publications and private clients worldwide.
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
              STARTING FROM
            </p>
            <p className="text-4xl md:text-6xl text-text-secondary font-light tracking-tighter">
              45 000 ₽
            </p>
            <p className="mt-4 text-mono text-text-primary/50 text-sm">
              Contact us for detailed pricing based on your project requirements.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <CTASection
        title="START A PROJECT"
        subtitle="Tell us about your vision"
        ctaText="BEGIN"
        ctaHref="/contact"
      />

      <Footer showShopPreview={false} />
    </div>
  )
}
