'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Reveal } from '@/components/Reveal'
import { Footer } from '@/components/Footer'
import { getAvailableProducts, getArchiveProducts } from '@/data/products'
import { useI18n } from '@/i18n/I18nProvider'

export default function ShopPage() {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState<'drop' | 'archive'>('drop')
  const availableProducts = getAvailableProducts()
  const archiveProducts = getArchiveProducts()

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 md:px-12">
      {/* Header */}
      <section className="mb-16 md:mb-24">
        <Reveal direction="up">
          <h1 className="text-editorial text-text-secondary font-light tracking-tighter mb-8">
            {t('shop.title')}
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab('drop')}
              className={`text-mono uppercase tracking-[0.15em] transition-colors ${
                activeTab === 'drop'
                  ? 'text-text-secondary'
                  : 'text-text-primary/50 hover:text-text-primary/80'
              }`}
              data-hover="true"
            >
              {t('shop.drop')}
            </button>
            <span className="text-text-primary/30">/</span>
            <button
              onClick={() => setActiveTab('archive')}
              className={`text-mono uppercase tracking-[0.15em] transition-colors ${
                activeTab === 'archive'
                  ? 'text-text-secondary'
                  : 'text-text-primary/50 hover:text-text-primary/80'
              }`}
              data-hover="true"
            >
              {t('shop.archive')}
            </button>
          </div>
        </Reveal>
      </section>

      {/* Campaign Image */}
      <Reveal direction="scale" delay={0.3}>
        <div className="aspect-[21/9] overflow-hidden bg-bg-tertiary mb-16">
          <img
            src="/media/shop/campaign.jpg"
            alt="HIDEKI Shop Campaign"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
      </Reveal>

      {/* Products Grid */}
      {activeTab === 'drop' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {availableProducts.map((product, index) => (
            <Reveal key={product.id} direction="up" delay={index * 0.1}>
              <Link
                href={`/shop/${product.slug}`}
                className="group block"
                data-hover="true"
              >
                <div className="aspect-[3/4] overflow-hidden bg-bg-tertiary mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-mono text-text-primary/40 text-xs-custom mb-1">
                      {t('shop.objectPrefix')} {product.objectNumber}
                    </p>
                    <h3 className="text-lg text-text-secondary font-light tracking-tight">
                      {product.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-mono text-text-primary/60">
                      {product.price.toLocaleString()} ₽
                    </p>
                    {product.status === 'pre-order' && (
                      <p className="text-mono text-text-primary/40 text-xs-custom">
                        {t('shop.preOrder')}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {archiveProducts.map((product, index) => (
            <Reveal key={product.id} direction="up" delay={index * 0.1}>
              <Link
                href={`/shop/${product.slug}`}
                className="block group py-6 border-b border-white/10 hover:border-white/30 transition-colors"
                data-hover="true"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="text-mono text-text-primary/40">
                      {product.objectNumber}
                    </span>
                    <h3 className="text-xl text-text-secondary font-light tracking-tight group-hover:text-text-primary/80 transition-colors">
                      {product.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-8 text-mono text-text-primary/40">
                    <span>{t('shop.archiveLabel')}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="transform group-hover:translate-x-2 transition-transform opacity-0 group-hover:opacity-100"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}

      <Footer showShopPreview={false} />
    </div>
  )
}
