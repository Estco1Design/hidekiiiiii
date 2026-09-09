'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import gsap from 'gsap'
import { projects } from '@/data/projects'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { label: 'WORK', href: '/work', shortcut: 'W' },
  { label: 'STUDIO', href: '/studio', shortcut: 'S' },
  { label: 'SHOP', href: '/shop', shortcut: 'O' },
  { label: 'ARCHIVE', href: '/archive', shortcut: 'A' },
  { label: 'ABOUT', href: '/about', shortcut: 'B' },
  { label: 'CONTACT', href: '/contact', shortcut: 'C' },
]

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/') {
        e.preventDefault()
        if (!isOpen) return
      }
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleRandomWork = () => {
    const randomProject = projects[Math.floor(Math.random() * projects.length)]
    window.location.href = `/work/${randomProject.slug}`
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] bg-bg-primary/90 backdrop-blur-sm">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-6">
        <div className="bg-bg-secondary border border-white/10 rounded-lg overflow-hidden">
          {/* Search Input */}
          <div className="p-4 border-b border-white/10">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search projects or navigate..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-text-secondary text-lg outline-none placeholder:text-text-primary/40"
            />
          </div>

          {/* Navigation Items */}
          <div className="p-2">
            <div className="text-xs-custom text-text-primary/50 uppercase tracking-wider px-3 py-2">
              Navigate
            </div>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex justify-between items-center px-3 py-3 hover:bg-white/5 transition-colors group"
              >
                <span className="text-text-secondary">{item.label}</span>
                <span className="text-xs-custom text-text-primary/40 group-hover:text-text-primary/70">
                  {item.shortcut}
                </span>
              </Link>
            ))}
          </div>

          {/* Projects */}
          {searchTerm && filteredProjects.length > 0 && (
            <div className="p-2 border-t border-white/10">
              <div className="text-xs-custom text-text-primary/50 uppercase tracking-wider px-3 py-2">
                Projects
              </div>
              {filteredProjects.slice(0, 5).map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.slug}`}
                  onClick={onClose}
                  className="flex justify-between items-center px-3 py-3 hover:bg-white/5 transition-colors"
                >
                  <span className="text-text-secondary">{project.title}</span>
                  <span className="text-xs-custom text-text-primary/40">{project.category}</span>
                </Link>
              ))}
            </div>
          )}

          {/* Random Work */}
          <div className="p-2 border-t border-white/10">
            <button
              onClick={handleRandomWork}
              className="w-full text-left px-3 py-3 hover:bg-white/5 transition-colors text-text-secondary"
            >
              RANDOM WORK →
            </button>
          </div>

          {/* Close Hint */}
          <div className="px-4 py-3 bg-bg-tertiary text-xs-custom text-text-primary/40 text-center">
            Press ESC to close
          </div>
        </div>
      </div>
    </div>
  )
}
