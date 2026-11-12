import { services } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import './Services.css'

export default function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        <SectionHeader title={services.title} subtitle={services.subtitle} />

        <div className="services__grid">
          {services.items.map(({ icon: Icon, title, text }, index) => (
            <Reveal as="article" key={title} className="card service-card" delay={(index % 2) * 120}>
              <span className="icon-tile">
                <Icon size={22} aria-hidden="true" />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
