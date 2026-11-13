import { hero } from '../data/content'
import { useTypewriter } from '../hooks/useTypewriter'
import CodeRain from './CodeRain'
import Prompt from './Prompt'
import Window from './Window'
import './Hero.css'

export default function Hero() {
  const { typed, done } = useTypewriter(hero.titleHighlight, { startDelay: 900 })

  return (
    <section id="inicio" className="hero">
      <CodeRain />
      <div className="hero__fade" aria-hidden="true" />

      <div className="container hero__content">
        <Window
          as="div"
          title={hero.windowTitle}
          meta="80×24"
          hover={false}
          reveal={false}
          className="hero__window"
          bodyClassName="hero__body"
        >
          <Prompt cmd="whoami" />
          <p className="hero__output">{hero.whoamiOutput}</p>

          <Prompt cmd="cat missao.txt" className="hero__mission-cmd" />

          <h1 className="hero__title" aria-label={`${hero.titleTop} ${hero.titleHighlight}`}>
            <span aria-hidden="true">
              <span className="hero__arrow">&gt;</span> {hero.titleTop}
              <br />
              <span className="highlight hero__typed">
                {typed}
                {!done && <span className="cursor" />}
              </span>
            </span>
          </h1>

          <p className="hero__subtitle">
            <span className="dim">{'// '}</span>
            {hero.subtitle}
          </p>

          <div className="hero__actions">
            <a href={hero.primaryCta.href} className="btn btn--primary">
              <span className="btn__sigil">$</span>
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn--ghost">
              <span className="btn__sigil">$</span>
              {hero.secondaryCta.label}
            </a>
          </div>

          <Prompt cmd="" className="hero__idle">
            <span className="cursor" />
          </Prompt>
        </Window>

        <a href="#desafios" className="hero__hint">
          scroll <span className="highlight">↓</span>
        </a>
      </div>
    </section>
  )
}
