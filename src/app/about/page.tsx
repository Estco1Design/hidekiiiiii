'use client'

import { Reveal } from '@/components/Reveal'
import { Footer } from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 md:px-12">
      {/* Header */}
      <section className="mb-20 md:mb-32">
        <Reveal direction="up">
          <h1 className="text-editorial text-text-secondary font-light tracking-tighter mb-8">
            ABOUT
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="text-lg md:text-xl text-text-primary/70 leading-relaxed max-w-3xl">
            HIDEKI is an independent creative platform formed at the intersection
            of fashion, photography, film and contemporary art.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <p className="mt-6 text-mono text-text-primary/50 uppercase tracking-[0.15em]">
            Created by two artists working across different mediums.
          </p>
        </Reveal>
      </section>

      {/* Founders Section */}
      <section className="py-20 md:py-32 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Founder 1 - Fashion */}
          <Reveal direction="up" delay={0.2}>
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden bg-bg-tertiary mb-8">
                <img
                  src="/media/about/founder-fashion.jpg"
                  alt="Fashion Designer"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <h3 className="text-2xl text-text-secondary font-light tracking-tight mb-4">
                FASHION DIRECTION
              </h3>
              <div className="space-y-3 text-mono text-text-primary/50 text-sm leading-relaxed">
                <p>Fashion designer</p>
                <p>Graphic designer</p>
                <p>Clothing development</p>
                <p>Pattern making</p>
                <p>Textiles</p>
                <p>In-house production</p>
                <p>Avant-garde & dark aesthetics</p>
              </div>
            </div>
          </Reveal>

          {/* Founder 2 - Visual */}
          <Reveal direction="up" delay={0.4}>
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden bg-bg-tertiary mb-8">
                <img
                  src="/media/about/founder-visual.jpg"
                  alt="Visual Director"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <h3 className="text-2xl text-text-secondary font-light tracking-tight mb-4">
                VISUAL DIRECTION
              </h3>
              <div className="space-y-3 text-mono text-text-primary/50 text-sm leading-relaxed">
                <p>Fashion photographer</p>
                <p>Director of photography</p>
                <p>Lighting & gaffer</p>
                <p>Video production</p>
                <p>Art direction</p>
                <p>Sound design</p>
                <p>Visual artist</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-32 border-t border-white/10">
        <Reveal direction="up">
          <div className="max-w-4xl">
            <p className="text-2xl md:text-4xl text-text-secondary font-light tracking-tight leading-relaxed">
              HIDEKI was born from the union of two creative worlds.
              We believe in work that exists between categories —
              not quite fashion, not quite art, not quite commerce.
              Something in between.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Location */}
      <section className="py-20 border-t border-white/10">
        <Reveal direction="up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-mono text-text-primary/40 uppercase tracking-[0.15em] mb-2">
                BASED IN
              </p>
              <p className="text-3xl text-text-secondary font-light tracking-tighter">
                MOSCOW
              </p>
            </div>
            <div className="text-right">
              <p className="text-mono text-text-primary/40 uppercase tracking-[0.15em] mb-2">
                AVAILABLE FOR
              </p>
              <p className="text-3xl text-text-secondary font-light tracking-tighter">
                WORLDWIDE
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer showShopPreview={false} />
    </div>
  )
}
