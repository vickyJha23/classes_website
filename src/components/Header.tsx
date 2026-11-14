import { useState } from 'react'
import logo from '../assets/logo.png'
import { COURSES, COURSE_ICONS, courseId } from '../data/courses'
import { NAV, PHONE_DISPLAY, PHONE_TEL, navHref } from '../data/site'
import { PhoneIcon } from './Icons'

export function Header({ home = '' }: { home?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="wrap header-row">
        <a href={home || '#top'} className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="Education Point Classes logo" width={50} height={55} />
          <span>
            <strong>Education Point Classes</strong>
            <small>Your Success Is Our Mission</small>
          </span>
        </a>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="nav" className={`nav${open ? ' open' : ''}`} aria-label="Main">
          {NAV.map((n) =>
            n.href === '#courses' ? (
              <div className="dropdown" key={n.href}>
                <a href={navHref(n.href, home)} onClick={() => setOpen(false)}>
                  {n.label} <span aria-hidden>▾</span>
                </a>
                <div className="dropdown-menu">
                  <p className="dropdown-label">Our courses</p>
                  {COURSES.map((c, i) => (
                    <a
                      key={c.title}
                      className={`dropdown-item tone-${i}`}
                      href={`${home}#${courseId(c.title)}`}
                      onClick={() => setOpen(false)}
                    >
                      <span className="dropdown-icon" aria-hidden>
                        <svg viewBox="0 0 24 24">
                          <path
                            d={COURSE_ICONS[i]}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="dropdown-text">
                        <b>{c.title}</b>
                        <small>{c.level}</small>
                      </span>
                      <span className="dropdown-arrow" aria-hidden>
                        →
                      </span>
                    </a>
                  ))}
                  <a className="dropdown-all" href={`${home}#courses`} onClick={() => setOpen(false)}>
                    View all courses →
                  </a>
                </div>
              </div>
            ) : (
              <a key={n.href} href={navHref(n.href, home)} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ),
          )}
          <a className="btn btn-red btn-call" href={`tel:${PHONE_TEL}`} aria-label={`Call ${PHONE_DISPLAY}`}>
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
        </nav>
      </div>
    </header>
  )
}
