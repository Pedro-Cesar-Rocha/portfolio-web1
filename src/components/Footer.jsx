import { brand } from '../data/content'
import Logo from './Logo'
import './Footer.css'

const YEAR = new Date().getFullYear()

/** Rodapé no formato de barra de status do vim. */
export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__mode">NORMAL</span>
      <span className="footer__branch">⎇ main</span>
      <span className="footer__logo">
        <Logo />
      </span>
      <p className="footer__copy">
        <span>
          &copy; {YEAR} {brand.name}
          {brand.suffix} <span className="dim">—</span> {brand.tagline}
        </span>
      </p>
      <span className="footer__meta">utf-8 · jsx · 100%</span>
    </footer>
  )
}
