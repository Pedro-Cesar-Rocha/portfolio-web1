import { brand, differentials } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import './Differentials.css'

export default function Differentials() {
  return (
    <section id="diferenciais" className="section differentials">
      <div className="container">
        <SectionHeader
          title={differentials.titleTop}
          highlight={`${brand.name}${brand.suffix}`}
          subtitle={differentials.subtitle}
        />

        <div className="differentials__grid">
          {differentials.items.map(({ icon: Icon, title, text }, index) => (
            <Reveal as="article" key={title} className="card differential-card" delay={index * 110}>
              <span className="icon-tile icon-tile--round">
                <Icon size={26} aria-hidden="true" />
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
