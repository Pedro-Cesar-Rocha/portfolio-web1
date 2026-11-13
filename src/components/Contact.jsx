import { useState } from 'react'
import { brand, contact } from '../data/content'
import Prompt from './Prompt'
import Window from './Window'
import './Contact.css'

const initialForm = { name: '', email: '', phone: '', message: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'campo obrigatório: informe seu nome'
  if (!form.email.trim()) errors.email = 'campo obrigatório: informe seu email'
  else if (!EMAIL_PATTERN.test(form.email)) errors.email = 'formato de email inválido'
  if (!form.message.trim()) errors.message = 'campo obrigatório: conte um pouco sobre o projeto'
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
        <Window
          as="div"
          title="contato.sh"
          meta="bash"
          hover={false}
          className="contact__window"
          bodyClassName="contact__body"
        >
          <Prompt cmd={contact.cmd} />

          <header className="contact__header">
            <h2>
              {contact.titleTop}
              <br />
              <span className="highlight">{contact.titleHighlight}</span>
            </h2>
            <blockquote>
              <span className="dim">/* </span>
              {contact.quote}
              <span className="dim"> */</span>
            </blockquote>
            <p className="contact__mission">
              <span className="dim">{'// '}</span>
              {contact.mission}
            </p>
          </header>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__row">
              <Field label="nome" name="name" required error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="como posso te chamar?"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                />
              </Field>

              <Field label="email" name="email" required error={errors.email}>
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

            <Field label="telefone" hint="opcional" name="phone">
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

            <Field label="projeto" name="message" required error={errors.message}>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="qual problema você quer resolver? quem vai usar? existe algum prazo?"
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
              />
            </Field>

            <button type="submit" className="btn btn--primary contact__submit">
              <span className="btn__sigil">$</span>
              {contact.button}
            </button>

            <p className="contact__note">
              <span className="dim">{'# '}</span>
              {contact.note}
            </p>

            {sent && (
              <p className="contact__success" role="status">
                <span className="highlight">[ok]</span> seu app de email foi aberto com a mensagem
                pronta. é só enviar!
              </p>
            )}
          </form>
        </Window>
      </div>
    </section>
  )
}

function Field({ label, hint, name, required = false, error, children }) {
  return (
    <div className={`field${error ? ' field--error' : ''}`}>
      <label htmlFor={name}>
        <span className="highlight">&gt;</span> {label}
        {required && <span className="field__req"> *</span>}
        {hint && <span className="dim"> ({hint})</span>}
      </label>
      {children}
      {error && <span className="field__error">error: {error}</span>}
    </div>
  )
}
