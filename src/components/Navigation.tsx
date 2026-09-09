'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

const navItems = [
  { label: 'WORK', href: '/work' },
  { label: 'STUDIO', href: '/studio' },
  { label: 'ABOUT', href: '/about' },
  { label: 'SHOP', href: '/shop' },
  { label: 'CONTACT', href: '/contact' },
]

interface NavigationProps {
  theme?: 'dark' | 'light'
  hidden?: boolean
}

export function Navigation({ theme = 'dark', hidden = false }: NavigationProps) {
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const isDark = theme === 'dark'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current.children,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out' }
      )
    }
  }, [])

  const textColor = isDark ? 'text-text-secondary' : 'text-text-primary'

  return (
    <nav
      ref={navRef}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 md:py-8 transition-all duration-500',
        scrolled && 'bg-bg-primary/80 backdrop-blur-sm',
        hidden && 'opacity-0 pointer-events-none'
      )}
    >
      <div className="flex justify-between items-start">
        <Link
          href="/"
          className={clsx(
            'text-sm tracking-[0.2em] uppercase transition-opacity z-50',
            textColor
          )}
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
                'text-xs-custom transition-colors relative group',
                pathname === item.href ? textColor : `${textColor}/80`
              )}
              data-hover="true"
            >
              {item.label}
              <span
                className={clsx(
                  'absolute -bottom-1 left-0 h-[1px] transition-all duration-300',
                  isDark ? 'bg-white' : 'bg-text-primary',
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                )}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={clsx('md:hidden z-50', textColor)}
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
      </div>
    </nav>
  )
}
