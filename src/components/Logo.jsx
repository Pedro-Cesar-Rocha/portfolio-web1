import { Code2 } from 'lucide-react'
import { brand } from '../data/content'
import './Logo.css'

export default function Logo({ className = '' }) {
  return (
    <a href="#inicio" className={`logo ${className}`.trim()} aria-label={`${brand.name}${brand.suffix} — início`}>
      <Code2 size={22} strokeWidth={2.2} aria-hidden="true" />
      <span>
        {brand.name}
        <small>{brand.suffix}</small>
      </span>
    </a>
  )
}
