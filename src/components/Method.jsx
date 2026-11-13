import { method } from '../data/content'
import SectionHeader from './SectionHeader'
import Window from './Window'
import './Method.css'

const BAR_SIZE = 12

function progressBar(step, total) {
  const filled = Math.round((step / total) * BAR_SIZE)
  return `${'█'.repeat(filled)}${'░'.repeat(BAR_SIZE - filled)}`
}

export default function Method() {
  const total = method.items.length

  return (
    <section id="metodo" className="section method">
      <div className="container">
        <SectionHeader
          cmd={method.cmd}
          title={method.title}
          highlight={`${method.acronym}:`}
          subtitle={method.subtitle}
          highlightFirst
        />

        <ol className="method__grid">
          {method.items.map(({ letter, icon: Icon, title, text }, index) => (
            <Window
              as="li"
              key={title}
              title={`step_0${index + 1}.sh`}
              delay={index * 110}
              bodyClassName="step"
            >
              <div className="step__head">
                <span className="step__letter" aria-hidden="true">
                  {letter}
                </span>
                <Icon size={20} className="step__icon" aria-hidden="true" />
              </div>
              <h3>
                <span className="highlight">[{title.charAt(0)}]</span>
                {title.slice(1)}
              </h3>
              <p>{text}</p>
              <p className="step__progress" aria-label={`Etapa ${index + 1} de ${total}`}>
                <span className="highlight">{progressBar(index + 1, total)}</span>{' '}
                <span className="dim">
                  {index + 1}/{total}
                </span>
              </p>
            </Window>
          ))}
        </ol>
      </div>
    </section>
  )
}
