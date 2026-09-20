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
  hideOnLoad?: boolean
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
  hideOnLoad = false,
}: SmartMediaProps) {
  const ref = useRef<HTMLVideoElement | HTMLImageElement>(null)
  const [isVisible, setIsVisible] = useState(priority)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

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

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  // Don't render anything if hideOnLoad and not loaded yet
  if (hideOnLoad && !isLoaded && !hasError) {
    return null
  }

  const containerClasses = clsx(
    'w-full h-full overflow-hidden',
    !isLoaded && !hasError && 'bg-bg-tertiary',
    hasError && 'bg-bg-tertiary flex items-center justify-center',
    className
  )

  if (type === 'video') {
    return (
      <div className={containerClasses} style={{ aspectRatio }}>
        {isVisible && !hasError ? (
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
            onError={handleError}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : hasError ? (
          <div className="w-full h-full bg-bg-tertiary" />
        ) : (
          <div className="w-full h-full bg-bg-tertiary" />
        )}
      </div>
    )
  }

  return (
    <div className={containerClasses} style={{ aspectRatio }}>
      {!hasError ? (
        <img
          ref={ref as React.RefObject<HTMLImageElement>}
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
        />
      ) : (
        <div className="w-full h-full bg-bg-tertiary" />
      )}
    </div>
  )
}
