'use client'

import { useEffect, useRef, useState } from 'react'
import { clsx } from 'clsx'

interface SmartMediaProps {
  src: string
  alt?: string
  priority?: boolean
  className?: string
  type?: 'image' | 'video'
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  poster?: string
  playsInline?: boolean
  onLoad?: () => void
  onVisible?: () => void
  aspectRatio?: string
}

export function SmartMedia({
  src,
  alt = '',
  priority = false,
  className,
  type = 'image',
  autoPlay = true,
  loop = true,
  muted = true,
  poster,
  playsInline = true,
  onLoad,
  onVisible,
  aspectRatio,
}: SmartMediaProps) {
  const ref = useRef<HTMLVideoElement | HTMLImageElement>(null)
  const [isVisible, setIsVisible] = useState(priority)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          onVisible?.()
          observer.disconnect()
        }
      },
      {
        rootMargin: '200px',
        threshold: 0,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [priority, onVisible])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const containerClasses = clsx(
    'w-full h-full overflow-hidden',
    !isLoaded && 'bg-bg-tertiary',
    className
  )

  if (type === 'video') {
    return (
      <div className={containerClasses} style={{ aspectRatio }}>
        {isVisible ? (
          <video
            ref={ref as React.RefObject<HTMLVideoElement>}
            className="w-full h-full object-cover"
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
            preload={priority ? 'auto' : 'metadata'}
            poster={poster}
            onLoadedData={handleLoad}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-bg-tertiary" />
        )}
      </div>
    )
  }

  return (
    <div className={containerClasses} style={{ aspectRatio }}>
      <img
        ref={ref as React.RefObject<HTMLImageElement>}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
      />
    </div>
  )
}
