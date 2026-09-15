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

    // Kill any existing ScrollTrigger on this element to prevent duplicates
    const scrollTriggers = ScrollTrigger.getAll()
    for (let i = scrollTriggers.length - 1; i >= 0; i--) {
      const trigger = scrollTriggers[i]
      if (trigger.trigger === element) {
        trigger.kill()
      }
    }

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

    // Reset the element state before animating
    gsap.set(element, { 
      opacity: 0, 
      transform: getTransformValue(),
      clearProps: "transform"
    })

    const ctx = gsap.context(() => {
      gsap.to(element, {
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
      })
    }, element)

    return () => {
      ctx.revert()
    }
  }, [delay, direction])

  return (
    <div ref={ref} className={clsx('reveal-element', className)}>
      {children}
    </div>
  )
}
