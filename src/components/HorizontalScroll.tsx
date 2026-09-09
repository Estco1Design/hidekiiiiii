import { Reveal } from './Reveal'

interface HorizontalScrollProps {
  projects: Array<{
    id: string
    title: string
    category: string
    year: number
    image: string
  }>
}

export function HorizontalScroll({ projects }: HorizontalScrollProps) {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="px-6 md:px-12 mb-12">
        <Reveal direction="up">
          <p className="text-mono text-text-primary/60 uppercase tracking-[0.15em]">
            Selected Works
          </p>
        </Reveal>
      </div>

      {/* Horizontal Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-8 md:gap-12 px-6 md:px-12 pb-8 min-w-max">
          {projects.map((project, index) => (
            <Reveal key={project.id} direction="left" delay={index * 0.1}>
              <div className="group relative flex-shrink-0 w-[80vw] md:w-[40vw] cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden bg-bg-tertiary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-mono text-text-primary/60">
                    <span className="text-text-secondary">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="mx-2">/</span>
                    <span>{project.category}</span>
                  </div>
                  <div className="text-mono text-text-primary/40">
                    {project.year}
                  </div>
                </div>
                <h3 className="mt-2 text-lg text-text-secondary font-light tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
