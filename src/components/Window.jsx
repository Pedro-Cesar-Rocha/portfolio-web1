import Reveal from './Reveal'

/**
 * Janela de terminal: barra com bolinhas + nome do arquivo, e o conteúdo abaixo.
 * Com `reveal`, anima a entrada ao rolar a página.
 */
export default function Window({
  title,
  meta,
  hover = true,
  reveal = true,
  delay = 0,
  as = 'article',
  className = '',
  bodyClassName = '',
  children,
}) {
  const classes = `window${hover ? ' window--hover' : ''} ${className}`.trim()
  const content = (
    <>
      <div className="window__bar">
        <span className="window__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        {title && <span className="window__title">{title}</span>}
        {meta && <span className="window__meta">{meta}</span>}
      </div>
      <div className={`window__body ${bodyClassName}`.trim()}>{children}</div>
    </>
  )

  if (!reveal) {
    const Tag = as
    return <Tag className={classes}>{content}</Tag>
  }

  return (
    <Reveal as={as} className={classes} delay={delay}>
      {content}
    </Reveal>
  )
}
