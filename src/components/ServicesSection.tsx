import { Reveal } from './Reveal'

interface ServicesSectionProps {
  services?: Array<{
    id: string
    title: string
    description: string
  }>
}

const defaultServices = [
  {
    id: '1',
    title: 'FASHION PHOTOGRAPHY',
    description: 'Editorial and commercial fashion shoots with full production support.',
  },
  {
    id: '2',
    title: 'CAMPAIGNS',
    description: 'Complete campaign development from concept to final delivery.',
  },
  {
    id: '3',
    title: 'VIDEO PRODUCTION',
    description: 'Fashion films, music videos, and commercial content.',
  },
  {
    id: '4',
    title: 'ART DIRECTION',
    description: 'Visual consulting and creative direction for brands and publications.',
  },
  {
    id: '5',
    title: 'AI + PHOTOGRAPHY',
    description: 'Experimental work combining traditional photography with AI technologies.',
  },
]

export function ServicesSection({ services = defaultServices }: ServicesSectionProps) {
  return (
    <section className="relative w-full py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      <Reveal direction="up">
        <p className="text-mono text-text-primary/60 uppercase tracking-[0.15em] mb-16">
          HIDEKI STUDIO
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {services.map((service, index) => (
          <Reveal key={service.id} direction="up" delay={index * 0.1}>
            <div className="group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-mono text-text-primary/40">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div className="w-8 h-[1px] bg-white/20 group-hover:w-16 transition-all duration-500" />
              </div>
              <h3 className="text-xl md:text-2xl text-text-secondary font-light tracking-tight mb-3">
                {service.title}
              </h3>
              <p className="text-mono text-text-primary/50 text-sm leading-relaxed max-w-md">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
