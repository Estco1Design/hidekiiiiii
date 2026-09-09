'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const navItems = [
  { label: 'WORK', href: '/work' },
  { label: 'STUDIO', href: '/studio' },
  { label: 'ABOUT', href: '/about' },
  { label: 'SHOP', href: '/shop' },
  { label: 'CONTACT', href: '/contact' },
]

export function Navigation() {
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current.children,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out' }
      )
    }
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-start p-6 md:p-8 mix-blend-difference"
    >
      <Link
        href="/"
        className="text-text-secondary text-sm tracking-[0.2em] uppercase hover:opacity-60 transition-opacity z-50"
        data-hover="true"
      >
        HIDEKI
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              'text-xs-custom text-text-secondary/80 hover:text-text-secondary transition-colors relative group',
              pathname === item.href && 'text-text-secondary'
            )}
            data-hover="true"
          >
            {item.label}
            <span
              className={clsx(
                'absolute -bottom-1 left-0 h-[1px] bg-white transition-all duration-300',
                pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
              )}
            />
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-text-secondary z-50"
        data-hover="true"
        aria-label="Menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </nav>
  )
}
