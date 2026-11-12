import { about, brand } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import './About.css'

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about__inner">
        <SectionHeader title={about.titleTop} highlight={`${brand.name}${brand.suffix}`} />

        <div className="about__cards">
          {about.cards.map(({ icon: Icon, title, text }, index) => (
            <Reveal as="article" key={title} className="card about-card" delay={index * 110}>
              <span className="icon-tile icon-tile--round">
                <Icon size={26} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="card about__bio">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
