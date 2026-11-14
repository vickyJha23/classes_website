import { PhoneIcon } from '../../../components/Icons'
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../../../data/site'

export function PageHero() {
  return (
    <section className="hero exams-hero" id="top">
      <div className="hero-bg" aria-hidden />
      <div className="wrap hero-copy">
        <p className="hero-tag">
          <span className="live-dot" /> AISSEE 2027-28 applications open · Last date 2 Dec 2026
        </p>
        <h1>
          Entrance <span>Exams</span>
          <span className="sr-only"> preparation at Education Point Classes, Silvassa</span>
        </h1>
        <p className="exams-lead">
          Preparation for Sainik School, Navodaya, Military School and other competitive entrance
          exams, and for Indian Army Agniveer recruitment.
        </p>
        <ul className="hero-chips">
          <li>
            <a href="#class-6">Class 6th entrance exams</a>
          </li>
          <li>
            <a href="#aissee">AISSEE 2027-28</a>
          </li>
          <li>
            <a href="#agniveer">Agniveer</a>
          </li>
        </ul>
        <div className="actions">
          <a
            className="btn btn-red"
            href={whatsappLink('Hello Mahto Sir, I want to know about entrance exam preparation.')}
            target="_blank"
            rel="noreferrer"
          >
            Join the entrance batch
          </a>
          <a className="btn btn-light btn-call" href={`tel:${PHONE_TEL}`} aria-label={`Call ${PHONE_DISPLAY}`}>
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}
