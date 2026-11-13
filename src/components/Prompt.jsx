import { brand } from '../data/content'

/** Linha de prompt: `pedro@rocha:~$ comando` */
export default function Prompt({ cmd, path = '~', className = '', children }) {
  return (
    <p className={`prompt ${className}`.trim()}>
      <span className="prompt__user">
        {brand.user}@{brand.host}
      </span>
      :<span className="prompt__path">{path}</span>$ <span className="prompt__cmd">{cmd}</span>
      {children}
    </p>
  )
}
