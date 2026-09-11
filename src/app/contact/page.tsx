'use client'

import { useState } from 'react'
import { Reveal } from '@/components/Reveal'
import { Footer } from '@/components/Footer'
import { useI18n } from '@/i18n/I18nProvider'

export default function ContactPage() {
  const { t } = useI18n()
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
    console.log('Form submitted:', formData)
    alert(t('contact.thankYou'))
  }

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 md:px-12">
      {/* Header */}
      <section className="mb-16 md:mb-24">
        <Reveal direction="up">
          <h1 className="text-editorial text-text-secondary font-light tracking-tighter mb-8">
            {t('contact.title')}
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="text-mono text-text-primary/60 uppercase tracking-[0.15em] max-w-xl">
            {t('contact.subtitle')}
          </p>
        </Reveal>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mb-20">
        <form onSubmit={handleSubmit} className="space-y-8">
          <Reveal direction="up" delay={0.2}>
            <div>
              <label className="block text-mono text-text-primary/40 text-xs-custom uppercase tracking-[0.15em] mb-3">
                {t('contact.nameLabel')}
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
                {t('contact.contactLabel')}
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
                {t('contact.projectTypeLabel')}
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-4 text-text-secondary focus:border-text-secondary focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-bg-primary">{t('contact.selectPlaceholder')}</option>
                <option value="fashion-photography" className="bg-bg-primary">{t('contact.fashionPhotography')}</option>
                <option value="portrait" className="bg-bg-primary">{t('contact.portrait')}</option>
                <option value="campaign" className="bg-bg-primary">{t('contact.campaign')}</option>
                <option value="commercial" className="bg-bg-primary">{t('contact.commercial')}</option>
                <option value="video" className="bg-bg-primary">{t('contact.video')}</option>
                <option value="music-video" className="bg-bg-primary">{t('contact.musicVideo')}</option>
                <option value="art-direction" className="bg-bg-primary">{t('contact.artDirection')}</option>
                <option value="ai-photography" className="bg-bg-primary">{t('contact.aiPhotography')}</option>
                <option value="product" className="bg-bg-primary">{t('contact.product')}</option>
                <option value="full-production" className="bg-bg-primary">{t('contact.fullProduction')}</option>
              </select>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.5}>
            <div>
              <label className="block text-mono text-text-primary/40 text-xs-custom uppercase tracking-[0.15em] mb-3">
                {t('contact.budgetLabel')}
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-4 text-text-secondary focus:border-text-secondary focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-bg-primary">{t('contact.selectPlaceholder')}</option>
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
                {t('contact.dateLabel')}
              </label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-4 text-text-secondary focus:border-text-secondary focus:outline-none transition-colors"
                placeholder={t('contact.datePlaceholder')}
              />
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.7}>
            <div>
              <label className="block text-mono text-text-primary/40 text-xs-custom uppercase tracking-[0.15em] mb-3">
                {t('contact.messageLabel')}
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-4 text-text-secondary focus:border-text-secondary focus:outline-none transition-colors resize-none"
                placeholder={t('contact.messagePlaceholder')}
              />
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.8}>
            <button
              type="submit"
              className="mt-8 px-12 py-4 bg-text-secondary text-bg-primary text-mono uppercase tracking-[0.2em] hover:bg-text-primary/80 transition-colors"
              data-hover="true"
            >
              {t('contact.sendRequest')}
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
              {t('footer.instagram')}
            </a>
            <a
              href="https://t.me/hideki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mono text-text-primary/60 hover:text-text-secondary transition-colors uppercase tracking-[0.1em]"
              data-hover="true"
            >
              {t('footer.telegram')}
            </a>
            <a
              href="mailto:hello@hideki.studio"
              className="text-mono text-text-primary/60 hover:text-text-secondary transition-colors uppercase tracking-[0.1em]"
              data-hover="true"
            >
              {t('footer.email')}
            </a>
          </div>
        </Reveal>
      </section>

      <Footer showShopPreview={false} />
    </div>
  )
}
