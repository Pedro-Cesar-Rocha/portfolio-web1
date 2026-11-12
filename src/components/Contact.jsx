import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { brand, contact } from '../data/content'
import Reveal from './Reveal'
import './Contact.css'

const initialForm = { name: '', email: '', phone: '', message: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Informe seu nome.'
  if (!form.email.trim()) errors.email = 'Informe seu email.'
  else if (!EMAIL_PATTERN.test(form.email)) errors.email = 'Email inválido.'
  if (!form.message.trim()) errors.message = 'Conte um pouco sobre o projeto.'
  return errors
}

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits.length ? `(${digits}` : ''
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: name === 'phone' ? formatPhone(value) : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    // Sem backend: abre o cliente de email do visitante com a mensagem pronta.
    const subject = `Novo projeto — ${form.name}`
    const header = [`Nome: ${form.name}`, `Email: ${form.email}`]
    if (form.phone) header.push(`Telefone: ${form.phone}`)
    const body = `${header.join('\n')}\n\n${form.message}`

    window.location.href = `mailto:${brand.contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
    setForm(initialForm)
  }

  return (
    <section id="contato" className="section contact">
      <div className="container">
        <Reveal className="card contact__card">
          <header className="contact__header">
            <h2>
              {contact.titleTop}
              <br />
              <span className="highlight">{contact.titleHighlight}</span>
            </h2>
            <blockquote>&ldquo;{contact.quote}&rdquo;</blockquote>
            <p className="contact__mission">{contact.mission}</p>
          </header>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__row">
              <Field label="Nome" name="name" required error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Como posso te chamar?"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                />
              </Field>

              <Field label="Email" name="email" required error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="voce@empresa.com"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                />
              </Field>
            </div>

            <Field label="Telefone (opcional)" name="phone">
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(00) 00000-0000"
                value={form.phone}
                onChange={handleChange}
              />
            </Field>

            <Field label="Sobre o projeto" name="message" required error={errors.message}>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Qual problema você quer resolver? Quem vai usar? Existe algum prazo?"
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
              />
            </Field>

            <p className="contact__note">{contact.note}</p>

            <button type="submit" className="contact__submit">
              <Send size={17} aria-hidden="true" />
              {contact.button}
            </button>

            {sent && (
              <p className="contact__success" role="status">
                <CheckCircle2 size={18} aria-hidden="true" />
                Seu aplicativo de email foi aberto com a mensagem pronta. É só enviar!
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, name, required = false, error, children }) {
  return (
    <div className={`field${error ? ' field--error' : ''}`}>
      <label htmlFor={name}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && <span className="field__error">{error}</span>}
    </div>
  )
}
