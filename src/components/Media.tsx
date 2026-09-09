import { clsx } from 'clsx'

interface MediaProps {
  src: string
  alt?: string
  priority?: boolean
  className?: string
  type?: 'image' | 'video'
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  poster?: string
}

export function Media({
  src,
  alt = '',
  priority = false,
  className,
  type = 'image',
  autoPlay = true,
  loop = true,
  muted = true,
  poster,
}: MediaProps) {
  if (type === 'video') {
    return (
      <video
        className={clsx('w-full h-full object-cover', className)}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={clsx('w-full h-full object-cover', className)}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
