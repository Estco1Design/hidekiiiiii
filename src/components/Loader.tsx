'use client'

import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'

interface LoaderProps {
  onComplete?: () => void
}

export function Loader({ onComplete }: LoaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<number | null>(null)
  const timeoutRef = useRef<number | null>(null)
  const hasCompletedRef = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const progressLineRef = useRef<HTMLDivElement>(null)
  
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
              onComplete?.()
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
  }, [onComplete])

  useEffect(() => {
    if (!isLoading && containerRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          containerRef.current?.remove()
        },
      })
      
      tl.to(progressLineRef.current, {
        width: '100%',
        duration: 0.6,
        ease: 'power2.inOut',
      })
      .to([textRef.current, lineRef.current], {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
      }, '-=0.3')
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
      }, '-=0.6')
    }
  }, [isLoading])

  return (
    <div 
      ref={containerRef}
      className="loader-container fixed inset-0 z-[10000] bg-bg-primary flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        <div 
          ref={textRef}
          className="text-text-secondary text-editorial font-light tracking-[0.3em]"
        >
          HIDEKI
        </div>
        <div 
          ref={lineRef}
          className="mt-6 w-48 h-[1px] bg-white/20 overflow-hidden"
        >
          <div
            ref={progressLineRef}
            className="h-full bg-white"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  )
}
