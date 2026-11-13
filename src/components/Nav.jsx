import { useEffect, useRef, useState } from 'react'
import { navItems } from '../data/content'
import Logo from './Logo'
import './Nav.css'

function formatTime(date) {
  return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}

/** Barra superior no estilo tmux, com a aba da seção visível destacada. */
export default function Nav() {
  const [active, setActive] = useState(navItems[0].id)
  const [time, setTime] = useState(() => formatTime(new Date()))
  const tabsRef = useRef(null)

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // no celular as abas rolam na horizontal: mantém a ativa visível
  useEffect(() => {
    const tabs = tabsRef.current
    const tab = tabs?.querySelector('.is-active')
    if (!tabs || !tab || tabs.scrollWidth <= tabs.clientWidth) return
    const left = tab.offsetLeft - (tabs.clientWidth - tab.offsetWidth) / 2
    tabs.scrollTo({ left, behavior: 'smooth' })
  }, [active])

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 15000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="nav">
      <div className="nav__session">
        <Logo />
      </div>

      <nav ref={tabsRef} className="nav__tabs" aria-label="Seções">
        {navItems.map(({ id, label }, index) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav__tab${active === id ? ' is-active' : ''}`}
            aria-current={active === id ? 'location' : undefined}
          >
            <span className="nav__index">{index}:</span>
            {label}
            {active === id && <span aria-hidden="true">*</span>}
          </a>
        ))}
      </nav>

      <span className="nav__clock" aria-hidden="true">
        {time}
      </span>
    </header>
  )
}
