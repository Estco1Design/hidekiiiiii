'use client'

import { useEffect, useState } from 'react'
import gsap from 'gsap'

export function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
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
