import { challenges } from '../data/content'
import SectionHeader from './SectionHeader'
import Window from './Window'
import './Challenges.css'

export default function Challenges() {
  return (
    <section id="desafios" className="section challenges">
      <div className="container">
        <SectionHeader
          cmd={challenges.cmd}
          title={challenges.titleTop}
          highlight={challenges.titleHighlight}
          subtitle={challenges.subtitle}
          stacked
        />

        <div className="challenges__grid">
          {challenges.items.map(({ icon: Icon, file, title, text }, index) => (
            <Window
              key={title}
              title={file}
              meta={`0${index + 1}`}
              delay={index * 120}
              bodyClassName="challenge"
            >
              <span className="icon-box">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3>
                <span className="dim">## </span>
                {title}
              </h3>
              <p>{text}</p>
            </Window>
          ))}
        </div>
      </div>
    </section>
  )
}
