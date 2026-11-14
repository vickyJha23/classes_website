import { useState } from 'react'
import { SocialLinks } from '../../../components/SocialLinks'
import { COURSES } from '../../../data/courses'
import { ADDRESS, EMAIL, MAP_URL, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../../../data/site'

export function Contact() {
  const [form, setForm] = useState({ name: '', course: COURSES[0].title, phone: '', message: '' })
  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const text = [
      'Hello Mahto Sir, admission enquiry:',
      `Name: ${form.name}`,
      `Course: ${form.course}`,
      form.phone && `Phone: ${form.phone}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(whatsappLink(text), '_blank', 'noopener')
  }

  return (
    <section className="section alt" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">Contact us</p>
          <h2>Get in touch</h2>
          <p>Have a question about admission or batches? Call, visit or send us a message.</p>

          <dl className="contact-list">
            <dt>Phone</dt>
            <dd>
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </dd>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </dd>
            <dt>Address</dt>
            <dd>
              <a href={MAP_URL} target="_blank" rel="noreferrer">
                {ADDRESS}
              </a>
            </dd>
            <dt>Follow us</dt>
            <dd>
              <SocialLinks showHandle />
            </dd>
          </dl>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <h3>Send an enquiry</h3>
          <label>
            Name
            <input required value={form.name} onChange={set('name')} />
          </label>
          <label>
            Course
            <select value={form.course} onChange={set('course')}>
              {COURSES.map((c) => (
                <option key={c.title} value={c.title}>
                  {c.title} ({c.level})
                </option>
              ))}
            </select>
          </label>
          <label>
            Phone
            <input type="tel" inputMode="tel" value={form.phone} onChange={set('phone')} />
          </label>
          <label>
            Message
            <textarea rows={4} value={form.message} onChange={set('message')} />
          </label>
          <button type="submit" className="btn btn-red">
            Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
