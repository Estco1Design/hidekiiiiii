'use client'

import { useEffect, useState, useRef } from 'react'
import { clsx } from 'clsx'
import gsap from 'gsap'

interface CursorProps {
  enabled?: boolean
}

export function CustomCursor({ enabled = true }: CursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hoverLabel, setHoverLabel] = useState<string | null>(null)
  const [isTouch, setIsTouch] = useState(false)
  const isInitializedRef = useRef(false)

  useEffect(() => {
    if (!enabled || typeof window === 'undefined' || isInitializedRef.current) return

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) {
      setIsTouch(true)
      return
    }

    setIsVisible(true)
    isInitializedRef.current = true

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX - 4,
          y: e.clientY - 4,
          duration: 0.15,
          ease: 'power2.out',
        })
      }
    }

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const label = target.getAttribute('data-hover-label')
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.hover === 'true'

      if (label) {
        setHoverLabel(label)
        if (labelRef.current) {
          gsap.to(labelRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          })
        }
      } else if (isInteractive) {
        setHoverLabel(null)
        if (cursorRef.current) {
          gsap.to(cursorRef.current, {
            scale: 2.5,
            duration: 0.3,
            ease: 'power2.out',
          })
        }
      } else {
        setHoverLabel(null)
        if (cursorRef.current) {
          gsap.to(cursorRef.current, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          })
        }
      }

      setIsHovering(!!(isInteractive || label))
    }

    const handleMouseOut = () => {
      setHoverLabel(null)
      if (labelRef.current) {
        gsap.to(labelRef.current, {
          opacity: 0,
          scale: 0,
          duration: 0.2,
          ease: 'power2.in',
        })
      }
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
      setIsHovering(false)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', checkHover)
    window.addEventListener('mouseleave', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', checkHover)
      window.removeEventListener('mouseleave', handleMouseOut)
      isInitializedRef.current = false
    }
  }, [enabled])

  if (!enabled || !isVisible || isTouch) return null

  return (
    <>
      <div
        ref={cursorRef}
        className={clsx(
          'fixed top-0 left-0 w-2 h-2 bg-text-secondary rounded-full pointer-events-none z-[9999]',
          'mix-blend-difference'
        )}
      />
      <div
        ref={labelRef}
        className={clsx(
          'fixed px-3 py-1.5 bg-text-secondary text-bg-primary',
          'text-xs-custom tracking-wider uppercase rounded-full pointer-events-none z-[9999]',
          'opacity-0 scale-0'
        )}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      >
        {hoverLabel}
      </div>
    </>
  )
}
