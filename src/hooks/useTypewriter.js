import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Digita `text` letra por letra depois de `startDelay` ms.
 * Retorna o trecho já digitado e se terminou.
 */
export function useTypewriter(text, { speed = 55, startDelay = 600 } = {}) {
  const [count, setCount] = useState(() => (prefersReducedMotion() ? text.length : 0))

  useEffect(() => {
    if (prefersReducedMotion()) return undefined

    let intervalId
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setCount((current) => {
          if (current >= text.length) {
            clearInterval(intervalId)
            return current
          }
          return current + 1
        })
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [text, speed, startDelay])

  return { typed: text.slice(0, count), done: count >= text.length }
}
