'use client'

import { useEffect, useState } from 'react'
import { clsx } from 'clsx'

interface CursorProps {
  enabled?: boolean
}

export function CustomCursor({ enabled = true }: CursorProps) {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    setIsVisible(true)

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseDown = () => setIsHovering(true)
    const onMouseUp = () => setIsHovering(false)

    const onMouseEnter = () => setIsVisible(true)
    const onMouseLeave = () => setIsVisible(false)

    // Check for hoverable elements
    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.hover === 'true'

      setIsHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('mouseenter', onMouseEnter)
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('mouseover', checkHover)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('mouseenter', onMouseEnter)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('mouseover', checkHover)
    }
  }, [enabled])

  if (!enabled || !isVisible) return null

  return (
    <div
      className={clsx(
        'custom-cursor',
        isHovering && 'hover',
        !isVisible && 'hidden'
      )}
      style={{
        transform: `translate(${position.x - 4}px, ${position.y - 4}px) ${
          isHovering ? 'scale(2)' : 'scale(1)'
        }`,
      }}
    />
  )
}
