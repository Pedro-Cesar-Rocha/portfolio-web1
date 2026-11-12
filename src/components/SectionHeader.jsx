import Reveal from './Reveal'
import './SectionHeader.css'

/**
 * Título centralizado das seções.
 * - `stacked`: texto normal em uma linha e destaque roxo na linha de baixo.
 * - `highlightFirst`: destaque roxo antes do texto normal (ex.: "BASE: ...").
 */
export default function SectionHeader({
  title,
  highlight,
  subtitle,
  stacked = false,
  highlightFirst = false,
}) {
  const accent = highlight ? <span className="highlight">{highlight}</span> : null

  return (
    <Reveal className="section-header">
      <h2>
        {highlightFirst && (
          <>
            {accent} {title}
          </>
        )}
        {!highlightFirst && (
          <>
            {title}
            {accent && (stacked ? <br /> : ' ')}
            {accent}
          </>
        )}
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  )
}
