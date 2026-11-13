import { services } from '../data/content'
import SectionHeader from './SectionHeader'
import Window from './Window'
import './Services.css'

export default function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        <SectionHeader cmd={services.cmd} title={services.title} subtitle={services.subtitle} />

        <Window
          title="~/servicos"
          meta={`total ${services.items.length}`}
          hover={false}
          className="services__window"
          bodyClassName="services__list"
        >
          {services.items.map(({ icon: Icon, file, title, text }) => (
            <article key={title} className="service">
              <p className="service__ls" aria-hidden="true">
                <span className="dim">drwxr-xr-x pedro</span>{' '}
                <span className="service__file">{file}</span>
              </p>
              <div className="service__content">
                <span className="icon-box">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            </article>
          ))}
        </Window>
      </div>
    </section>
  )
}
