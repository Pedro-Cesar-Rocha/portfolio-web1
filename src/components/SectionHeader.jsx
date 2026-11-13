import Prompt from './Prompt'
import Reveal from './Reveal'
import './SectionHeader.css'

/**
 * Cabeçalho das seções: linha de comando + título com destaque verde.
 * - `stacked`: destaque na linha de baixo.
 * - `highlightFirst`: destaque antes do texto (ex.: "BASE: ...").
 */
export default function SectionHeader({
  cmd,
  title,
  highlight,
  subtitle,
  stacked = false,
  highlightFirst = false,
}) {
  const accent = highlight ? <span className="highlight">{highlight}</span> : null

  return (
    <Reveal className="section-header">
      {cmd && <Prompt cmd={cmd} className="section-header__cmd" />}
      <h2>
        <span className="section-header__hash" aria-hidden="true">
          #{' '}
        </span>
        {highlightFirst ? (
          <>
            {accent} {title}
          </>
        ) : (
          <>
            {title}
            {accent && (stacked ? <br /> : ' ')}
            {accent}
          </>
        )}
      </h2>
      {subtitle && (
        <p className="section-header__sub">
          <span className="dim" aria-hidden="true">
            {'// '}
          </span>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
