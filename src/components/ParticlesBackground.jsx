import { useEffect, useRef } from 'react'

const LINK_DISTANCE = 140

/**
 * Rede de partículas sutil desenhada em canvas, usada no fundo do hero.
 * Respeita `prefers-reduced-motion` (desenha um quadro estático).
 */
export default function ParticlesBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let particles = []
    let frameId = 0

    const createParticles = () => {
      const count = Math.min(70, Math.floor((width * height) / 22000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.5 + 0.2,
      }))
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      createParticles()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i]
        // quanto mais à direita, mais visível a partícula
        const weight = 0.35 + (a.x / width) * 0.65

        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - dist / LINK_DISTANCE) * 0.18 * weight})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }

        ctx.fillStyle = `rgba(139, 92, 246, ${a.alpha * weight})`
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const step = () => {
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
      }
      draw()
      frameId = requestAnimationFrame(step)
    }

    resize()
    if (reduceMotion) draw()
    else step()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="particles" aria-hidden="true" />
}
