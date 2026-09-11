'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Reveal } from '@/components/Reveal'
import { Footer } from '@/components/Footer'
import { getProjectBySlug, projects } from '@/data/projects'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const slug = params.slug as string

  useEffect(() => {
    const foundProject = getProjectBySlug(slug)
    if (foundProject) {
      setProject(foundProject)
    }
  }, [slug])

  useEffect(() => {
    if (project) {
      const ctx = gsap.context(() => {
        gsap.utils.toArray('.gallery-item').forEach((elem: any, i) => {
          gsap.fromTo(
            elem,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: elem,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          )
        })
      })
      return () => ctx.revert()
    }
  }, [project])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-mono text-text-primary/50">Loading...</p>
      </div>
    )
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <div className="relative min-h-screen">
      {/* Hero Media */}
      <section className="relative w-full h-screen overflow-hidden">
        {project.coverType === 'video' && project.coverVideo ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={project.coverVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/50 via-transparent to-bg-primary" />
      </section>

      {/* Project Info */}
      <section className="relative px-6 md:px-12 py-16">
        <Reveal direction="up">
          <div className="max-w-4xl">
            <h1 className="text-editorial text-text-secondary font-light tracking-tighter mb-6">
              {project.title}
            </h1>
            <div className="flex items-center gap-4 text-mono text-text-primary/60 uppercase tracking-[0.15em]">
              <span>{project.year}</span>
              <span>/</span>
              <span>{project.category}</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Credits */}
      <section className="relative px-6 md:px-12 pb-16">
        <Reveal direction="up" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            {project.credits.map((credit: any, index: number) => (
              <div key={index}>
                <p className="text-mono text-text-primary/40 text-xs-custom mb-2">
                  {credit.role}
                </p>
                <p className="text-text-secondary">{credit.name}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="relative px-6 md:px-12 pb-20">
        <div className="space-y-8 md:space-y-16">
          {project.gallery.map((item: any, index: number) => (
            <div
              key={index}
              className="gallery-item"
              data-aos="fade-up"
            >
              {item.type === 'video' ? (
                <div className="w-full aspect-video bg-bg-tertiary overflow-hidden">
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                </div>
              ) : (
                <div className="w-full aspect-[4/5] md:aspect-[3/4] bg-bg-tertiary overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.caption || ''}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {item.caption && (
                <p className="mt-4 text-mono text-text-primary/50 text-xs-custom">
                  {item.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Empty Space / Breathing Room */}
      <section className="relative w-full h-32 md:h-64" />

      {/* Next Project */}
      <section className="relative px-6 md:px-12 pb-20">
        <Reveal direction="up">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block"
            data-hover="true"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-mono text-text-primary/60 uppercase tracking-[0.15em]">
                NEXT PROJECT
              </span>
              <div className="w-16 h-[1px] bg-white/20 group-hover:w-24 transition-all duration-300" />
            </div>
            <div className="aspect-[21/9] overflow-hidden bg-bg-tertiary">
              <img
                src={nextProject.coverImage}
                alt={nextProject.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <h3 className="text-2xl text-text-secondary font-light tracking-tight">
                {nextProject.title}
              </h3>
              <span className="text-mono text-text-primary/40">
                {nextProject.year}
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      <Footer showShopPreview={false} />
    </div>
  )
}
