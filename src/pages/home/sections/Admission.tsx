import { useRef } from 'react'
import student from '../../../assets/student.jpg'
import { Check, PhoneIcon } from '../../../components/Icons'
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../../../data/site'

// The full campus tour (about 3 minutes, with sound) opens in a popup. The video
// only starts downloading once a visitor clicks, so it doesn't slow the page down.
function CampusTour() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const open = () => {
    dialogRef.current?.showModal()
    videoRef.current?.play().catch(() => {})
  }
  const close = () => dialogRef.current?.close()

  return (
    <>
      <button type="button" className="btn btn-tour" onClick={open}>
        <span className="tour-play" aria-hidden>
          <svg viewBox="0 0 24 24" width="14" height="14">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </span>
        Watch campus tour
      </button>
      <dialog
        ref={dialogRef}
        className="tour-dialog"
        aria-label="Education Point Classes campus tour"
        onClose={() => videoRef.current?.pause()}
        onClick={(e) => {
          // Clicking the dark backdrop (outside the video) closes the popup
          if (e.target === e.currentTarget) close()
        }}
      >
        <button type="button" className="tour-close" onClick={close} aria-label="Close video">
          ×
        </button>
        <video ref={videoRef} controls playsInline preload="none" poster="/campus-tour-poster.jpg">
          <source src="/campus-tour-1080.mp4" type="video/mp4" media="(min-width: 768px)" />
          <source src="/campus-tour.mp4" type="video/mp4" />
        </video>
      </dialog>
    </>
  )
}

export function Admission() {
  return (
    <section className="hero" id="admission">
      <div className="hero-bg" aria-hidden />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-tag">
            <span className="live-dot" /> Admissions open · Free demo class
          </p>
          <h1>
            Admission <span>Open</span>
            <span className="sr-only"> at Education Point Classes, Silvassa</span>
          </h1>
          <p className="hero-classes">
            Class <b>5th</b> to <b>12th</b>
          </p>
          <div className="hero-commerce">
            <strong>Commerce</strong>
            <span>11th &amp; 12th</span>
          </div>
          <ul className="hero-chips">
            <li>CBSE | State Board</li>
            <li>All subjects</li>
            <li>Navodaya · Sainik · RMS CET</li>
          </ul>
          <div className="actions">
            <a
              className="btn btn-red"
              href={whatsappLink('Hello Mahto Sir, I would like to book a free demo class.')}
              target="_blank"
              rel="noreferrer"
            >
              Book a free demo class
            </a>
            <a className="btn btn-light btn-call" href={`tel:${PHONE_TEL}`} aria-label={`Call ${PHONE_DISPLAY}`}>
              <PhoneIcon />
              {PHONE_DISPLAY}
            </a>
          </div>
          <CampusTour />
        </div>

        <div className="hero-visual">
          <div className="hero-panel">
            <p className="hero-script">
              Shape your future <br />
              with us…
            </p>
            <img src={student} alt="Smiling student with a school bag" width={364} height={811} />
          </div>
          <div className="hero-why">
            <p>Why choose us?</p>
            <ul>
              {['Experienced faculty', 'Personal attention', 'Regular tests', 'Result-oriented'].map((t) => (
                <li key={t}>
                  <Check />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
