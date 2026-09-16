'use client'

import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'

export function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<number | null>(null)
  const timeoutRef = useRef<number | null>(null)
  const hasCompletedRef = useRef(false)

  useEffect(() => {
    if (hasCompletedRef.current) return

    // Simulate loading progress - faster on mobile
    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
    const speedMultiplier = isTouchDevice ? 2 : 1
    
    intervalRef.current = window.setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15 * speedMultiplier
        if (newProgress >= 100) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
          }
          
          // Only set timeout once when reaching 100%
          if (!timeoutRef.current && !hasCompletedRef.current) {
            hasCompletedRef.current = true
            timeoutRef.current = window.setTimeout(() => {
              setIsLoading(false)
            }, isTouchDevice ? 200 : 500)
          }
          return 100
        }
        return newProgress
      })
    }, 100)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!isLoading) {
      gsap.to('.loader-container', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          document.querySelector('.loader-container')?.remove()
        },
      })
    }
  }, [isLoading])

  return (
    <div className="loader-container fixed inset-0 z-[10000] bg-bg-primary flex items-center justify-center">
      <div className="relative">
        <div className="text-text-secondary text-editorial font-light tracking-tighter">
          HIDEKI
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="w-24 h-[1px] bg-white/20 overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-200"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <span className="text-mono text-text-primary/60">
            {Math.min(Math.round(progress), 100).toString().padStart(3, '0')}
          </span>
        </div>
      </div>
    </div>
  )
}
