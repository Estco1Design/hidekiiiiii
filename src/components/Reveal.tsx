import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { clsx } from 'clsx'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const getTransformValue = () => {
      switch (direction) {
        case 'up':
          return 'translateY(100px)'
        case 'down':
          return 'translateY(-100px)'
        case 'left':
          return 'translateX(100px)'
        case 'right':
          return 'translateX(-100px)'
        case 'scale':
          return 'scale(0.9)'
        default:
          return 'translateY(100px)'
      }
    }

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        transform: getTransformValue(),
      },
      {
        opacity: 1,
        transform: 'none',
        duration: 1.2,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )

    return () => {
      animation.kill()
    }
  }, [delay, direction])

  return (
    <div ref={ref} className={clsx('reveal-element', className)}>
      {children}
    </div>
  )
}
