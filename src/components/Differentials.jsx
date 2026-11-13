import { Check } from 'lucide-react'
import { brand, differentials } from '../data/content'
import SectionHeader from './SectionHeader'
import Window from './Window'
import './Differentials.css'

export default function Differentials() {
  const total = differentials.items.length

  return (
    <section id="diferenciais" className="section differentials">
      <div className="container">
        <SectionHeader
          cmd={differentials.cmd}
          title={differentials.titleTop}
          highlight={`${brand.name}${brand.suffix}`}
          subtitle={differentials.subtitle}
        />

        <div className="differentials__grid">
          {differentials.items.map(({ icon: Icon, title, text }, index) => (
            <Window
              key={title}
              title={`test_0${index + 1}.spec`}
              delay={index * 110}
              bodyClassName="diff"
            >
              <div className="diff__head">
                <span className="diff__badge">
                  <Check size={14} strokeWidth={3} aria-hidden="true" /> PASS
                </span>
                <Icon size={20} className="diff__icon" aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Window>
          ))}
        </div>

        <p className="differentials__summary">
          <span className="highlight">Tests: {total} passed</span>
          <span className="dim">, {total} total</span>
        </p>
      </div>
    </section>
  )
}
