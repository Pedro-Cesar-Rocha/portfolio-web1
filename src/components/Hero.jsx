import { ArrowRight, Code2 } from 'lucide-react'
import { brand, hero } from '../data/content'
import ParticlesBackground from './ParticlesBackground'
import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <ParticlesBackground />

      <div className="container hero__content">
        <span className="hero__badge">
          <Code2 size={22} strokeWidth={2.2} aria-hidden="true" />
          {brand.name}
          {brand.suffix}
        </span>

        <h1 className="hero__title">
          {hero.titleTop}
          <br />
          <span className="highlight">{hero.titleHighlight}</span>
        </h1>

        <p className="hero__subtitle">{hero.subtitle}</p>

        <div className="hero__actions">
          <a href={hero.primaryCta.href} className="btn btn--primary">
            {hero.primaryCta.label}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a href={hero.secondaryCta.href} className="btn btn--ghost">
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
