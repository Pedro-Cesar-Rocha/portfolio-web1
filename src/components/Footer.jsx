import { brand } from '../data/content'
import Logo from './Logo'
import './Footer.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo />
        <p>
          &copy; {YEAR} {brand.name}
          {brand.suffix}. {brand.tagline}
        </p>
      </div>
    </footer>
  )
}
