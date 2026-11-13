import { about, brand } from '../data/content'
import Prompt from './Prompt'
import SectionHeader from './SectionHeader'
import Window from './Window'
import './About.css'

const ASCII_LOGO = String.raw`
██████╗  ██████╗██████╗
██╔══██╗██╔════╝██╔══██╗
██████╔╝██║     ██████╔╝
██╔═══╝ ██║     ██╔══██╗
██║     ╚██████╗██║  ██║
╚═╝      ╚═════╝╚═╝  ╚═╝`.slice(1)

const PALETTE = ['#0a0e0b', '#ff6b6b', '#b4f461', '#f5c451', '#6fe3d3', '#9fb1a4', '#e7f2e1']

export default function About() {
  const userLine = `${brand.user}@${brand.host}`

  return (
    <section id="sobre" className="section about">
      <div className="container">
        <SectionHeader
          cmd={about.cmd}
          title={about.titleTop}
          highlight={`${brand.name}${brand.suffix}`}
        />

        <div className="about__grid">
          <Window title="neofetch" hover={false} bodyClassName="neofetch">
            <pre className="neofetch__logo" aria-hidden="true">
              {ASCII_LOGO}
            </pre>

            <div className="neofetch__info">
              <p className="neofetch__user">
                <span className="highlight">{brand.user}</span>@
                <span className="highlight">{brand.host}</span>
              </p>
              <p className="dim" aria-hidden="true">
                {'-'.repeat(userLine.length)}
              </p>
              <dl>
                {about.cards.map(({ title, text }) => (
                  <div key={title} className="neofetch__row">
                    <dt>{title}:</dt>
                    <dd>{text}</dd>
                  </div>
                ))}
              </dl>
              <div className="neofetch__palette" aria-hidden="true">
                {PALETTE.map((color) => (
                  <span key={color} style={{ background: color }} />
                ))}
              </div>
            </div>
          </Window>

          <Window title="sobre.txt" hover={false} delay={120} bodyClassName="about__bio">
            <Prompt cmd="cat sobre.txt" />
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </Window>
        </div>
      </div>
    </section>
  )
}
