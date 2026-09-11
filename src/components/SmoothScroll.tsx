'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { usePathname } from 'next/navigation'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafIdRef = useRef<number | null>(null)
  const pathname = usePathname()

  // Destroy and recreate Lenis instance on route change
  useEffect(() => {
    // Cleanup previous instance
    if (lenisRef.current) {
      lenisRef.current.destroy()
      lenisRef.current = null
    }
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current)
      rafIdRef.current = null
    }
    
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
      rafIdRef.current = requestAnimationFrame(raf)
    }
    
    rafIdRef.current = requestAnimationFrame(raf)

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
        rafIdRef.current = null
      }
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
      }
    }
  }, [pathname])

  return <>{children}</>
}
