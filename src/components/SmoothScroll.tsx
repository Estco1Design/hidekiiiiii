'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { usePathname } from 'next/navigation'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Only initialize on client side and for non-touch devices
    if (typeof window === 'undefined') return

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

    // For touch devices, use native scrolling with lighter configuration
    lenisRef.current = new Lenis({
      duration: isTouchDevice ? 0.6 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: isTouchDevice ? 0.05 : 0.1,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      touchMultiplier: isTouchDevice ? 1 : 2,
      wheelMultiplier: 1,
      infinite: false,
    })

    const lenis = lenisRef.current

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  // Reset scroll position on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
  }, [pathname])

  return <>{children}</>
}
