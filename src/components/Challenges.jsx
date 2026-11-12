import { challenges } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import './Challenges.css'

export default function Challenges() {
  return (
    <section id="desafios" className="section challenges">
      <div className="container">
        <SectionHeader
          title={challenges.titleTop}
          highlight={challenges.titleHighlight}
          subtitle={challenges.subtitle}
          stacked
        />

        <div className="challenges__grid">
          {challenges.items.map(({ icon: Icon, title, text }, index) => (
            <Reveal as="article" key={title} className="card challenge-card" delay={index * 120}>
              <span className="icon-tile">
                <Icon size={24} aria-hidden="true" />
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
