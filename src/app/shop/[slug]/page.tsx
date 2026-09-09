'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Reveal } from '@/components/Reveal'
import { Footer } from '@/components/Footer'
import { getProductBySlug } from '@/data/products'

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = getProductBySlug(slug)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [showSizeGuide, setShowSizeGuide] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-mono text-text-primary/50">Product not found</p>
      </div>
    )
  }

  const isArchive = product.status === 'archive'

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 md:px-12">
      {/* Product Header */}
      <section className="mb-12">
        <Reveal direction="up">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/shop"
              className="text-mono text-text-primary/40 hover:text-text-secondary transition-colors"
              data-hover="true"
            >
              SHOP
            </Link>
            <span className="text-text-primary/30">/</span>
            <span className="text-mono text-text-primary/40 uppercase tracking-[0.15em]">
              OBJECT {product.objectNumber}
            </span>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <h1 className="text-editorial text-text-secondary font-light tracking-tighter">
            {product.title}
          </h1>
        </Reveal>

        {!isArchive && (
          <Reveal direction="up" delay={0.3}>
            <p className="mt-4 text-2xl text-text-primary/70">
              {product.price.toLocaleString()} ₽
            </p>
          </Reveal>
        )}

        {isArchive && (
          <Reveal direction="up" delay={0.3}>
            <p className="mt-4 text-mono text-text-primary/40 uppercase tracking-[0.15em]">
              ARCHIVE
            </p>
          </Reveal>
        )}
      </section>

      {/* Product Images */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {product.images.map((image, index) => (
          <Reveal key={index} direction="scale" delay={index * 0.1}>
            <div className="aspect-[3/4] overflow-hidden bg-bg-tertiary">
              <img
                src={image}
                alt={`${product.title} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        ))}
      </section>

      {/* Product Details */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Left Column - Info */}
        <Reveal direction="up" delay={0.4}>
          <div>
            <h3 className="text-xl text-text-secondary font-light tracking-tight mb-6">
              DESCRIPTION
            </h3>
            <p className="text-mono text-text-primary/60 text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            <h3 className="text-xl text-text-secondary font-light tracking-tight mb-4">
              MATERIALS
            </h3>
            <ul className="space-y-2 text-mono text-text-primary/50 text-sm">
              {product.materials.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-mono text-text-primary/40 text-xs-custom">
                PRODUCED IN HIDEKI STUDIO
              </p>
              <p className="text-mono text-text-primary/40 text-xs-custom">
                MOSCOW
              </p>
            </div>

            {product.isLimited && product.numberOfObjects && (
              <div className="mt-4">
                <p className="text-mono text-text-primary/40 text-xs-custom">
                  LIMITED TO {product.numberOfObjects} OBJECTS
                </p>
              </div>
            )}
          </div>
        </Reveal>

        {/* Right Column - Sizes & Order */}
        <Reveal direction="up" delay={0.5}>
          <div>
            {!isArchive && (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl text-text-secondary font-light tracking-tight">
                    SIZE
                  </h3>
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-mono text-text-primary/40 hover:text-text-secondary transition-colors text-xs-custom"
                    data-hover="true"
                  >
                    {showSizeGuide ? 'CLOSE' : 'SIZE GUIDE'}
                  </button>
                </div>

                {showSizeGuide && (
                  <div className="mb-6 p-4 bg-bg-tertiary">
                    {product.sizes.map((size) => (
                      <div key={size.label} className="flex justify-between text-mono text-text-primary/50 text-sm py-2 border-b border-white/5 last:border-0">
                        <span>{size.label}</span>
                        <span>{size.measurements}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex gap-4 mb-8">
                  {product.sizes.map((size) => (
                    <button
                      key={size.label}
                      onClick={() => setSelectedSize(size.label)}
                      className={`w-16 h-16 flex items-center justify-center border transition-colors ${
                        selectedSize === size.label
                          ? 'border-text-secondary text-text-secondary'
                          : 'border-white/20 text-text-primary/50 hover:border-white/40'
                      }`}
                      data-hover="true"
                    >
                      {size.label}
                    </button>
                  ))}
                </div>

                <button
                  className="w-full py-4 bg-text-secondary text-bg-primary text-mono uppercase tracking-[0.2em] hover:bg-text-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!selectedSize}
                  data-hover="true"
                >
                  {product.status === 'pre-order' ? 'PRE-ORDER' : 'ORDER OBJECT'}
                </button>
              </>
            )}

            {isArchive && (
              <div className="p-8 bg-bg-tertiary text-center">
                <p className="text-mono text-text-primary/40 uppercase tracking-[0.15em] mb-2">
                  UNAVAILABLE
                </p>
                <p className="text-mono text-text-primary/30 text-sm">
                  This object is part of the HIDEKI archive.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </section>

      <Footer showShopPreview={false} />
    </div>
  )
}
