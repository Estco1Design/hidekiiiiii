'use client'

import { useEffect, useState } from 'react'
import { clsx } from 'clsx'

interface SoundControlProps {
  enabled?: boolean
}

export function SoundControl({ enabled = false }: SoundControlProps) {
  const [isOn, setIsOn] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('hideki-sound')
    if (saved === 'on') {
      setIsOn(true)
    }
  }, [])

  const toggleSound = () => {
    const newState = !isOn
    setIsOn(newState)
    localStorage.setItem('hideki-sound', newState ? 'on' : 'off')
    
    // Dispatch custom event for other components to listen
    window.dispatchEvent(new CustomEvent('hideki-sound-change', { detail: { enabled: newState } }))
  }

  return (
    <button
      onClick={toggleSound}
      className={clsx(
        'fixed bottom-6 right-6 z-40 px-3 py-2',
        'text-xs-custom tracking-wider uppercase',
        'bg-bg-secondary/80 backdrop-blur-sm border border-white/10',
        'hover:bg-white/10 transition-colors',
        'text-text-primary/70 hover:text-text-secondary'
      )}
      data-hover-label={isOn ? 'SOUND ON' : 'SOUND OFF'}
    >
      {isOn ? 'SOUND ON' : 'SOUND OFF'}
    </button>
  )
}
