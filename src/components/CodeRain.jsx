import { useEffect, useRef } from 'react'

const CHARS = '01{}[]<>/=;$#*+-_ROCHA'
const FONT_SIZE = 15

/**
 * Colunas de caracteres caindo devagar, bem apagadas, atrás do hero.
 * Com prefers-reduced-motion desenha um único quadro estático.
 */
export default function CodeRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let drops = []
    let frameId = 0
    let last = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const columns = Math.ceil(width / (FONT_SIZE * 1.6))
      drops = Array.from({ length: columns }, () => ({
        y: Math.random() * -height,
        speed: 0.4 + Math.random() * 0.9,
        // nem toda coluna aparece, para o efeito ficar esparso
        active: Math.random() > 0.45,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`

      drops.forEach((drop, index) => {
        if (!drop.active) return
        const x = index * FONT_SIZE * 1.6
        const trail = 14

        for (let i = 0; i < trail; i += 1) {
          const y = drop.y - i * FONT_SIZE * 1.2
          if (y < 0 || y > height) continue
          const alpha = i === 0 ? 0.35 : (1 - i / trail) * 0.12
          ctx.fillStyle = `rgba(180, 244, 97, ${alpha})`
          const char = CHARS[(index * 7 + i * 3 + Math.floor(drop.y / 40)) % CHARS.length]
          ctx.fillText(char, x, y)
        }
      })
    }

    const step = (time) => {
      const delta = Math.min(time - last, 50)
      last = time
      drops.forEach((drop) => {
        drop.y += drop.speed * delta * 0.06
        if (drop.y - 14 * FONT_SIZE * 1.2 > height) {
          drop.y = Math.random() * -200
          drop.active = Math.random() > 0.45
        }
      })
      draw()
      frameId = requestAnimationFrame(step)
    }

    resize()
    if (reduceMotion) {
      drops.forEach((drop) => {
        drop.y = Math.random() * height
      })
      draw()
    } else {
      frameId = requestAnimationFrame((time) => {
        last = time
        step(time)
      })
    }

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="code-rain" aria-hidden="true" />
}
