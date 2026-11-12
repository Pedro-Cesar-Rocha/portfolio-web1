import { method } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import './Method.css'

export default function Method() {
  return (
    <section id="metodo" className="section method">
      <div className="container">
        <SectionHeader
          title={method.title}
          highlight={`${method.acronym}:`}
          subtitle={method.subtitle}
          highlightFirst
        />

        <div className="method__grid">
          {method.items.map(({ letter, icon: Icon, title, text }, index) => (
            <Reveal as="article" key={title} className="card method-card" delay={index * 110}>
              <span className="method-card__letter" aria-hidden="true">
                {letter}
              </span>
              <span className="icon-tile">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
