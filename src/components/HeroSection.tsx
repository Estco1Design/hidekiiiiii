import { Reveal } from './Reveal'

interface HeroSectionProps {
  video?: string
  image?: string
  title?: string
  subtitle?: string
}

export function HeroSection({
  video = '/media/hero/hero.mp4',
  image = '/media/hero/hero-poster.jpg',
  title = 'HIDEKI',
  subtitle = 'CREATIVE STUDIO / MOSCOW / WORLDWIDE',
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={image}
        >
          <source src={video} type="video/mp4" />
          {/* Fallback to poster image if video fails or is not available */}
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </video>
        {/* Fallback background if video file doesn't exist */}
        <div 
          className="absolute inset-0 bg-bg-primary"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/30 via-transparent to-bg-primary" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end pb-20 px-6 md:px-12">
        <Reveal direction="up" delay={0.3}>
          <div className="max-w-4xl">
            <h1 className="text-editorial text-text-secondary font-light tracking-tighter mb-4">
              {title}
            </h1>
            <p className="text-mono text-text-primary/70 uppercase tracking-[0.15em]">
              {subtitle}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-16 bg-white/30 overflow-hidden">
          <div className="w-full h-1/2 bg-white animate-fade-in" />
        </div>
      </div>
    </section>
  )
}
