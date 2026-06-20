import { useMemo } from 'react'

const COUNT = 65

interface Particle {
  id: number
  left: string
  top: string
  size: number
  duration: number
  delay: number
  opacity: number
  dx: number
  dy: number
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function ParticleBackground() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: COUNT }, (_, i) => {
      const duration = rand(14, 32)
      return {
        id: i,
        left: `${rand(0, 100)}%`,
        top: `${rand(0, 100)}%`,
        size: rand(0.8, 2.2),
        duration,
        delay: -rand(0, duration),
        opacity: rand(0.1, 0.42),
        dx: rand(-55, 55),
        dy: rand(-65, 20),
      }
    })
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes particle-float {
          0%   { transform: translate(0, 0); }
          100% { transform: translate(var(--pdx), var(--pdy)); }
        }
      `}</style>
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: `rgba(142, 58, 92, ${p.opacity})`,
            ['--pdx' as string]: `${p.dx}px`,
            ['--pdy' as string]: `${p.dy}px`,
            animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  )
}
