import { Reveal } from './Reveal'

interface FooterProps {
  showShopPreview?: boolean
}

export function Footer({ showShopPreview = true }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full px-6 md:px-12 pt-20 pb-8 border-t border-white/10">
      {/* Shop Preview */}
      {showShopPreview && (
        <Reveal direction="up">
          <a
            href="/shop"
            className="block group mb-20"
            data-hover="true"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-mono text-text-primary/60 uppercase tracking-[0.15em]">
                HIDEKI OBJECT 001
              </span>
              <span className="text-mono text-text-secondary group-hover:opacity-60 transition-opacity flex items-center gap-2">
                ENTER SHOP
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="transform group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
            <div className="aspect-[21/9] overflow-hidden bg-bg-tertiary">
              <img
                src="/media/shop/object-001/front.jpg"
                alt="HIDEKI Object 001"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </a>
        </Reveal>
      )}

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Brand */}
        <div>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-6xl text-text-secondary font-light tracking-tighter mb-6">
              HIDEKI
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-mono text-text-primary/50 uppercase tracking-[0.15em]">
              MOSCOW / WORLDWIDE
            </p>
          </Reveal>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <Reveal direction="up" delay={0.3}>
            <a
              href="/work"
              className="text-mono text-text-primary/60 hover:text-text-secondary transition-colors uppercase tracking-[0.1em]"
              data-hover="true"
            >
              WORK
            </a>
          </Reveal>
          <Reveal direction="up" delay={0.35}>
            <a
              href="/studio"
              className="text-mono text-text-primary/60 hover:text-text-secondary transition-colors uppercase tracking-[0.1em]"
              data-hover="true"
            >
              STUDIO
            </a>
          </Reveal>
          <Reveal direction="up" delay={0.4}>
            <a
              href="/shop"
              className="text-mono text-text-primary/60 hover:text-text-secondary transition-colors uppercase tracking-[0.1em]"
              data-hover="true"
            >
              SHOP
            </a>
          </Reveal>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-4">
          <Reveal direction="up" delay={0.45}>
            <a
              href="https://instagram.com/hideki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mono text-text-primary/60 hover:text-text-secondary transition-colors uppercase tracking-[0.1em]"
              data-hover="true"
            >
              INSTAGRAM
            </a>
          </Reveal>
          <Reveal direction="up" delay={0.5}>
            <a
              href="https://t.me/hideki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mono text-text-primary/60 hover:text-text-secondary transition-colors uppercase tracking-[0.1em]"
              data-hover="true"
            >
              TELEGRAM
            </a>
          </Reveal>
          <Reveal direction="up" delay={0.55}>
            <a
              href="mailto:hello@hideki.studio"
              className="text-mono text-text-primary/60 hover:text-text-secondary transition-colors uppercase tracking-[0.1em]"
              data-hover="true"
            >
              EMAIL
            </a>
          </Reveal>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-8 border-t border-white/5">
        <Reveal direction="up" delay={0.6}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-mono text-text-primary/40 text-xs">
              © HIDEKI {currentYear}
            </p>
            <p className="text-mono text-text-primary/30 text-xs">
              ALL RIGHTS RESERVED
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
