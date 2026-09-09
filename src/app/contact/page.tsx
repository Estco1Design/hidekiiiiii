'use client'

import { useState } from 'react'
import { Reveal } from '@/components/Reveal'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    projectType: '',
    budget: '',
    date: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - can be connected to email service or CMS later
    console.log('Form submitted:', formData)
    alert('Thank you. We will contact you soon.')
  }

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 md:px-12">
      {/* Header */}
      <section className="mb-16 md:mb-24">
        <Reveal direction="up">
          <h1 className="text-editorial text-text-secondary font-light tracking-tighter mb-8">
            CONTACT
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="text-mono text-text-primary/60 uppercase tracking-[0.15em] max-w-xl">
            Start a project with HIDEKI Studio. Tell us about your vision and we will respond within 48 hours.
          </p>
        </Reveal>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mb-20">
        <form onSubmit={handleSubmit} className="space-y-8">
          <Reveal direction="up" delay={0.2}>
            <div>
              <label className="block text-mono text-text-primary/40 text-xs-custom uppercase tracking-[0.15em] mb-3">
                NAME *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-4 text-text-secondary focus:border-text-secondary focus:outline-none transition-colors"
                placeholder=""
              />
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <div>
              <label className="block text-mono text-text-primary/40 text-xs-custom uppercase tracking-[0.15em] mb-3">
                CONTACT (EMAIL / TELEGRAM) *
              </label>
              <input
                type="text"
                required
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-4 text-text-secondary focus:border-text-secondary focus:outline-none transition-colors"
                placeholder=""
              />
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <div>
              <label className="block text-mono text-text-primary/40 text-xs-custom uppercase tracking-[0.15em] mb-3">
                PROJECT TYPE
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-4 text-text-secondary focus:border-text-secondary focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-bg-primary">Select...</option>
                <option value="fashion-photography" className="bg-bg-primary">FASHION PHOTOGRAPHY</option>
                <option value="portrait" className="bg-bg-primary">PORTRAIT</option>
                <option value="campaign" className="bg-bg-primary">CAMPAIGN</option>
                <option value="commercial" className="bg-bg-primary">COMMERCIAL</option>
                <option value="video" className="bg-bg-primary">VIDEO / REELS</option>
                <option value="music-video" className="bg-bg-primary">MUSIC VIDEO</option>
                <option value="art-direction" className="bg-bg-primary">ART DIRECTION</option>
                <option value="ai-photography" className="bg-bg-primary">AI + PHOTOGRAPHY</option>
                <option value="product" className="bg-bg-primary">PRODUCT</option>
                <option value="full-production" className="bg-bg-primary">FULL PRODUCTION</option>
              </select>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.5}>
            <div>
              <label className="block text-mono text-text-primary/40 text-xs-custom uppercase tracking-[0.15em] mb-3">
                BUDGET
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-4 text-text-secondary focus:border-text-secondary focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-bg-primary">Select...</option>
                <option value="<50K" className="bg-bg-primary">&lt; 50K ₽</option>
                <option value="50-100K" className="bg-bg-primary">50K – 100K ₽</option>
                <option value="100-250K" className="bg-bg-primary">100K – 250K ₽</option>
                <option value="250K+" className="bg-bg-primary">250K+ ₽</option>
              </select>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.6}>
            <div>
              <label className="block text-mono text-text-primary/40 text-xs-custom uppercase tracking-[0.15em] mb-3">
                PREFERRED DATE
              </label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-4 text-text-secondary focus:border-text-secondary focus:outline-none transition-colors"
                placeholder="e.g., March 2026 / Flexible"
              />
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.7}>
            <div>
              <label className="block text-mono text-text-primary/40 text-xs-custom uppercase tracking-[0.15em] mb-3">
                MESSAGE
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-4 text-text-secondary focus:border-text-secondary focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.8}>
            <button
              type="submit"
              className="mt-8 px-12 py-4 bg-text-secondary text-bg-primary text-mono uppercase tracking-[0.2em] hover:bg-text-primary/80 transition-colors"
              data-hover="true"
            >
              SEND REQUEST
            </button>
          </Reveal>
        </form>
      </section>

      {/* Direct Contact */}
      <section className="border-t border-white/10 pt-16">
        <Reveal direction="up" delay={0.9}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://instagram.com/hideki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mono text-text-primary/60 hover:text-text-secondary transition-colors uppercase tracking-[0.1em]"
              data-hover="true"
            >
              INSTAGRAM
            </a>
            <a
              href="https://t.me/hideki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mono text-text-primary/60 hover:text-text-secondary transition-colors uppercase tracking-[0.1em]"
              data-hover="true"
            >
              TELEGRAM
            </a>
            <a
              href="mailto:hello@hideki.studio"
              className="text-mono text-text-primary/60 hover:text-text-secondary transition-colors uppercase tracking-[0.1em]"
              data-hover="true"
            >
              EMAIL
            </a>
          </div>
        </Reveal>
      </section>

      <Footer showShopPreview={false} />
    </div>
  )
}
