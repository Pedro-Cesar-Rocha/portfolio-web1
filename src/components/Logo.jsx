import { brand } from '../data/content'
import './Logo.css'

export default function Logo({ className = '' }) {
  return (
    <a
      href="#inicio"
      className={`logo ${className}`.trim()}
      aria-label={`${brand.name}${brand.suffix} — início`}
    >
      <span className="logo__prompt" aria-hidden="true">
        &gt;_
      </span>
      <span>
        {brand.name.toLowerCase()}
        <span className="logo__suffix">{brand.suffix}</span>
      </span>
    </a>
  )
}
