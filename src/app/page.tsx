'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HeroSection } from '@/components/HeroSection'
import { EditorialImage } from '@/components/EditorialImage'
import { HorizontalScroll } from '@/components/HorizontalScroll'
import { ServicesSection } from '@/components/ServicesSection'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'
import { Gallery3D } from '@/components/Gallery3D'
import { projects } from '@/data/projects'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomePage() {
  useEffect(() => {
    // Add any page-specific animations here
    const ctx = gsap.context(() => {
      // Example: Parallax effect on images
      gsap.utils.toArray('.parallax-image').forEach((elem: any) => {
        gsap.to(elem, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: elem.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  const horizontalProjects = projects.slice(0, 4).map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    year: p.year,
    image: p.coverImage || '/media/placeholder.jpg',
  }))

  return (
    <div className="relative">
      {/* Screen 01: Hero Video */}
      <HeroSection />

      {/* Screen 02: Large Editorial Image */}
      <EditorialImage
        src="/media/projects/echoes/img-01.jpg"
        caption="An exploration of silence through fashion and movement"
        number="01"
        category="FASHION"
        year={2026}
        fullWidth={true}
        offset="center"
      />

      {/* Screen 03: Horizontal Project Sequence */}
      <HorizontalScroll projects={horizontalProjects} />

      {/* Screen 04: 3D Gallery Experience */}
      <Gallery3D />

      {/* Screen 05: Fullscreen Video Section (placeholder) */}
      <section className="relative w-full h-screen overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-bg-tertiary">
          <video
            className="w-full h-full object-cover opacity-40"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/media/hero/main.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 px-6 md:px-12 flex items-center h-full">
          <div className="max-w-4xl">
            <p className="text-mono text-text-primary/60 uppercase tracking-[0.15em] mb-4">
              CAMPAIGN 003
            </p>
            <h2 className="text-editorial text-text-secondary font-light tracking-tighter">
              DIRECTION / PHOTO / FILM
            </h2>
          </div>
        </div>
      </section>

      {/* Screen 06: Asymmetric Composition */}
      <section className="relative w-full py-20 md:py-32 px-6 md:px-12 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Small photo top left */}
          <div className="md:col-span-4 md:col-start-2">
            <div className="aspect-square overflow-hidden bg-bg-tertiary">
              <img
                src="/media/projects/void/img-01.jpg"
                alt="Portrait study"
                className="w-full h-full object-cover parallax-image"
              />
            </div>
          </div>

          {/* Giant vertical right */}
          <div className="md:col-span-5 md:col-start-8">
            <div className="aspect-[3/5] overflow-hidden bg-bg-tertiary">
              <img
                src="/media/projects/shadow/img-01.jpg"
                alt="Fashion editorial"
                className="w-full h-full object-cover parallax-image"
              />
            </div>
          </div>

          {/* Small photo bottom */}
          <div className="md:col-span-3 md:col-start-3">
            <div className="aspect-[4/5] overflow-hidden bg-bg-tertiary">
              <img
                src="/media/projects/concrete/img-01.jpg"
                alt="Commercial work"
                className="w-full h-full object-cover parallax-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="relative w-full py-32 md:py-48 px-6 md:px-12 overflow-hidden">
        <div className="max-w-4xl">
          <p className="text-editorial text-text-secondary font-light tracking-tighter leading-none">
            WORDS<br />
            MOVE<br />
            BUT<br />
            IMAGES<br />
            STAY
          </p>
        </div>
      </section>

      {/* Studio Services */}
      <ServicesSection />

      {/* CTA Section */}
      <CTASection
        title="START A PROJECT"
        subtitle="Let us create something together"
        ctaText="BEGIN"
        ctaHref="/contact"
      />

      {/* Footer with Shop Preview */}
      <Footer showShopPreview={true} />
    </div>
  )
}
