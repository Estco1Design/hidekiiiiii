'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, Environment, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { clsx } from 'clsx'

interface PhotoPlane {
  id: string
  src: string
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
}

const photoData: PhotoPlane[] = [
  {
    id: 'photo-1',
    src: '/media/projects/echoes/img-01.jpg',
    position: [-2, 0, -3],
    rotation: [0, 0.15, 0],
    scale: 1.2,
  },
  {
    id: 'photo-2',
    src: '/media/projects/shadow/img-01.jpg',
    position: [2.5, 0.5, -5],
    rotation: [0, -0.2, 0],
    scale: 1.4,
  },
  {
    id: 'photo-3',
    src: '/media/projects/void/img-01.jpg',
    position: [0, -0.5, -7],
    rotation: [0, 0.1, 0],
    scale: 1.6,
  },
  {
    id: 'photo-4',
    src: '/media/projects/concrete/img-01.jpg',
    position: [-3, -1, -9],
    rotation: [0, 0.25, 0],
    scale: 1.1,
  },
  {
    id: 'photo-5',
    src: '/media/projects/echoes/img-02.jpg',
    position: [3.5, -0.5, -11],
    rotation: [0, -0.15, 0],
    scale: 1.3,
  },
]

function GalleryPhoto({ 
  photo, 
  mousePos 
}: { 
  photo: PhotoPlane
  mousePos: React.MutableRefObject<{ x: number; y: number }>
}) {
  const meshRef = useRef<THREE.Group>(null)
  const { viewport } = useThree()
  
  // Calculate parallax offset based on mouse position
  const parallaxX = mousePos.current.x * 0.3
  const parallaxY = mousePos.current.y * 0.2
  
  useFrame((state) => {
    if (!meshRef.current) return
    
    // Smooth parallax movement
    const targetX = photo.position[0] + parallaxX * (photo.id.charCodeAt(5) % 3 - 1)
    const targetY = photo.position[1] + parallaxY * (photo.id.charCodeAt(5) % 2)
    
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      targetX,
      0.02
    )
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      targetY,
      0.02
    )
    
    // Subtle floating animation
    const time = state.clock.elapsedTime
    meshRef.current.rotation.y = photo.rotation[1] + Math.sin(time * 0.5 + photo.position[0]) * 0.02
  })
  
  return (
    <group ref={meshRef} position={photo.position}>
      <Image
        url={photo.src}
        transparent
        opacity={0.85}
        side={THREE.DoubleSide}
        scale={[photo.scale * viewport.width * 0.15, photo.scale * viewport.height * 0.2]}
      />
    </group>
  )
}

function GalleryScene({ mousePos }: { mousePos: React.MutableRefObject<{ x: number; y: number }> }) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null)
  
  useFrame((state) => {
    if (!cameraRef.current) return
    
    // Subtle camera movement based on mouse
    const targetX = mousePos.current.x * 0.5
    const targetY = -mousePos.current.y * 0.3
    
    cameraRef.current.position.x = THREE.MathUtils.lerp(
      cameraRef.current.position.x,
      targetX,
      0.015
    )
    cameraRef.current.position.y = THREE.MathUtils.lerp(
      cameraRef.current.position.y,
      0.5 + targetY,
      0.015
    )
    
    // Camera always looks slightly below center for dramatic angle
    cameraRef.current.lookAt(0, -0.3, -6)
  })
  
  return (
    <>
      <PerspectiveCamera 
        ref={cameraRef}
        makeDefault 
        position={[0, 0.5, 2]} 
        fov={45}
      />
      
      {/* Soft ambient lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      
      {/* Subtle fog for depth */}
      <fog attach="fog" args={['#0a0a0a', 5, 20]} />
      
      {/* Environment for reflections */}
      <Environment preset="studio" blur={0.8} />
      
      {/* Render all photo planes */}
      {photoData.map((photo) => (
        <GalleryPhoto key={photo.id} photo={photo} mousePos={mousePos} />
      ))}
    </>
  )
}

interface Gallery3DProps {
  className?: string
}

export function Gallery3D({ className }: Gallery3DProps) {
  const mousePos = useRef({ x: 0, y: 0 })
  const [isTouch, setIsTouch] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouch(isTouchDevice)
  }, [])
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouch) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1
    
    mousePos.current = { x, y }
  }
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouch) return
    
    const touch = e.touches[0]
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1
    const y = -((touch.clientY - rect.top) / rect.height) * 2 + 1
    
    mousePos.current = { x, y }
  }
  
  // Skip on touch devices for performance
  if (isTouch) {
    return null
  }
  
  return (
    <div
      className={clsx('relative w-full h-[60vh] md:h-screen overflow-hidden', className)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {!isLoading && (
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/20 via-transparent to-bg-primary pointer-events-none z-10" />
      )}
      
      <Canvas
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        onCreated={() => setIsLoading(false)}
        camera={{ position: [0, 0.5, 2], fov: 45 }}
      >
        <GalleryScene mousePos={mousePos} />
      </Canvas>
      
      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="text-center">
          <p className="text-mono text-text-primary/40 uppercase tracking-[0.2em] mb-4 text-xs-custom">
            DIGITAL GALLERY
          </p>
          <h2 className="text-editorial text-text-secondary font-light tracking-tighter text-3xl md:text-5xl">
            PHOTOGRAPHY<br />IN MOTION
          </h2>
        </div>
      </div>
    </div>
  )
}
