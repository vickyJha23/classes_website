import { useEffect, useState, type FormEvent } from 'react'
import logo from './assets/logo.jpg'
import rmsPoster from './assets/rms-cet-2026.jpg'
import admissionPoster from './assets/admission-open.jpg'
import './App.css'

const PHONE_DISPLAY = '081400 80262'
const PHONE_TEL = '+918140080262'
const WHATSAPP = '918140080262'
const ADDRESS_LINES = ['Office No. 503, 5th Floor, Premaldeep Square', 'Opp. Avanti Store, Silvassa – 396230']
const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=Premaldeep+Square+Opp+Avanti+Store+Silvassa+396230'
const RMS_APPLY_URL = 'https://exams.nta.nic.in/rmscet/'

const RMS_APPLY_CLOSES = new Date('2026-10-20T23:59:59+05:30')
const RMS_EXAM_DAY = new Date('2026-12-13T09:00:00+05:30')

const NAV = [
  { href: '#courses', label: 'Courses' },
  { href: '#rms-cet', label: 'RMS CET 2026' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
]

const COURSES = [
  {
    tag: 'Class 6th – 10th',
    title: 'School Foundation',
    body: 'Strong concepts, regular practice and tests so every student walks into school exams prepared and confident.',
    subjects: ['Concept building', 'Regular tests', 'Doubt clearing', 'Board exam focus'],
    tone: 'navy',
  },
  {
    tag: 'Class 11th & 12th',
    title: 'Commerce Stream',
    body: 'Complete board-focused coaching for commerce students, from the first ledger entry to the final pre-board.',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'English'],
    tone: 'red',
  },
  {
    tag: 'Class 6 & 9 entry',
    title: 'RMS CET Preparation',
    body: 'Focused coaching for the Rashtriya Military Schools Common Entrance Test with mock papers and exam strategy.',
    subjects: ['Mathematics', 'General Knowledge', 'English', 'Hindi', 'Reasoning'],
    tone: 'sun',
  },
] as const

const FEATURES = [
  { icon: 'teacher', title: 'Experienced & Qualified Faculty', note: 'Learn from the best' },
  { icon: 'book', title: 'Comprehensive Curriculum', note: 'Concept to competition' },
  { icon: 'chart', title: 'Regular Tests & Performance Analysis', note: 'Track your progress' },
  { icon: 'bulb', title: 'Smart Classrooms & Digital Learning', note: 'Learn with latest technology' },
  { icon: 'star', title: 'Career-Oriented Learning', note: 'Build a strong future' },
  { icon: 'gear', title: 'Soft Skills & Personality Development', note: 'Grow beyond academics' },
] as const

const PROMISES = [
  'Small batch size for personal attention',
  'Topic-wise revision & doubt clearing',
  'Board exam & competitive exam focus',
  'Result-oriented teaching approach',
]

const MARQUEE = [
  'Accountancy',
  'Business Studies',
  'Economics',
  'English',
  'Mathematics',
  'General Knowledge',
  'Hindi',
  'Reasoning',
]

const SOCIALS = [
  { label: 'YouTube', handle: 'Mahto Sir', icon: 'youtube' },
  { label: 'Instagram', handle: '@mahtosir00', icon: 'instagram', href: 'https://www.instagram.com/mahtosir00/' },
  { label: 'Facebook', handle: 'Mahto Sir', icon: 'facebook' },
  { label: 'X', handle: 'Mahto Sir', icon: 'x' },
  { label: 'Telegram', handle: 'Mahto Sir', icon: 'telegram' },
] as const

type IconName =
  | (typeof FEATURES)[number]['icon']
  | (typeof SOCIALS)[number]['icon']
  | 'phone'
  | 'pin'
  | 'whatsapp'
  | 'arrow'
  | 'check'
  | 'calendar'
  | 'menu'
  | 'close'
  | 'external'

function Icon({ name, className }: { name: IconName; className?: string }) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (name) {
    case 'teacher':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="12" rx="1.5" />
          <path d="M7 19h10M12 15v4M7 8h6M7 11h4" />
        </svg>
      )
    case 'book':
      return (
        <svg {...common}>
          <path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5Z" />
          <path d="M12 6.5v13" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...common}>
          <path d="M4 20h16M7 16v-4M11 16V9M15 16v-6M19 16V6" />
          <path d="m5 9 5-4 4 3 5-4" />
        </svg>
      )
    case 'bulb':
      return (
        <svg {...common}>
          <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.3 1.1 2.2h5c0-.9.4-1.6 1.1-2.2A6 6 0 0 0 12 3Z" />
        </svg>
      )
    case 'star':
      return (
        <svg {...common}>
          <circle cx="10" cy="7" r="3.5" />
          <path d="M3.5 20a6.5 6.5 0 0 1 10-5.5" />
          <path d="m18 13 1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4Z" />
        </svg>
      )
    case 'gear':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
        </svg>
      )
    case 'pin':
      return (
        <svg {...common}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    case 'calendar':
      return (
        <svg {...common}>
          <rect x="3" y="4.5" width="18" height="16.5" rx="2" />
          <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
        </svg>
      )
    case 'check':
      return (
        <svg {...common} strokeWidth={2.4}>
          <path d="m5 12.5 4.5 4.5L19 7.5" />
        </svg>
      )
    case 'arrow':
      return (
        <svg {...common} strokeWidth={2}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )
    case 'external':
      return (
        <svg {...common} strokeWidth={2}>
          <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
        </svg>
      )
    case 'menu':
      return (
        <svg {...common} strokeWidth={2}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      )
    case 'close':
      return (
        <svg {...common} strokeWidth={2}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      )
    case 'whatsapp':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
        </svg>
      )
    case 'youtube':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15V9l5.8 3-5.8 3Z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
        </svg>
      )
    case 'facebook':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.3A21 21 0 0 0 14.6 2C12.2 2 10.6 3.5 10.6 6.1v2.4H8v3.4h2.6V22H14V11.9h2.7l.4-3.4H14Z" />
        </svg>
      )
    case 'x':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.5l11.2 14.5Z" />
        </svg>
      )
    case 'telegram':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M21.9 4.3 18.7 19.4c-.2 1-.9 1.3-1.7.8l-4.8-3.6-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2L6.5 13 1.8 11.5c-1-.3-1-1 .2-1.5L20.5 3c.9-.3 1.6.2 1.4 1.3Z" />
        </svg>
      )
  }
}

function daysUntil(target: Date, now: number) {
  return Math.max(0, Math.ceil((target.getTime() - now) / 86_400_000))
}

function whatsappLink(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="wrap header-row">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="" width={44} height={44} />
          <span>
            <strong>Education Point</strong>
            <em>Classes · Silvassa</em>
          </span>
        </a>

        <nav id="primary-nav" className="nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="btn btn-red nav-cta" href={`tel:${PHONE_TEL}`}>
            <Icon name="phone" className="i" />
            {PHONE_DISPLAY}
          </a>
        </nav>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} className="i" />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden>
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="grid-lines" />
      </div>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="pill">
            <span className="dot" /> Admissions open · Limited seats
          </p>
          <h1>
            Your success is <span className="accent">our&nbsp;mission.</span>
          </h1>
          <p className="lede">
            Coaching for <b>Class 6th to 12th</b>, <b>Commerce (11th &amp; 12th)</b> and{' '}
            <b>RMS CET 2026</b> preparation — small batches, regular tests and personal
            attention for every student.
          </p>

          <div className="hero-ctas">
            <a
              className="btn btn-red btn-lg"
              href={whatsappLink('Hello Mahto Sir, I would like to know about admission at Education Point Classes.')}
              target="_blank"
              rel="noreferrer"
            >
              Enroll now
              <Icon name="arrow" className="i" />
            </a>
            <a className="btn btn-ghost btn-lg" href={`tel:${PHONE_TEL}`}>
              <Icon name="phone" className="i" />
              {PHONE_DISPLAY}
            </a>
          </div>

          <ul className="hero-facts">
            <li>
              <strong>6th–12th</strong>
              <span>All school classes</span>
            </li>
            <li>
              <strong>Commerce</strong>
              <span>Accounts · BST · Eco · Eng</span>
            </li>
            <li>
              <strong>RMS CET</strong>
              <span>Class 6 &amp; 9 entry</span>
            </li>
          </ul>
        </div>

        <div className="hero-art">
          <div className="emblem">
            <svg className="ring-text" viewBox="0 0 200 200" aria-hidden>
              <defs>
                <path id="ring" d="M100,100 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0" />
              </defs>
              <text>
                <textPath href="#ring">
                  YOUR SUCCESS IS OUR MISSION ✦ EDUCATION POINT CLASSES ✦
                </textPath>
              </text>
            </svg>
            <img src={logo} alt="Education Point Classes logo" width={260} height={260} />
          </div>

          <div className="float-card fc-1">
            <span className="fc-icon red">
              <Icon name="calendar" className="i" />
            </span>
            <span>
              <small>RMS CET 2026</small>
              <b>Applications open</b>
            </span>
          </div>
          <div className="float-card fc-2">
            <span className="fc-icon navy">
              <Icon name="chart" className="i" />
            </span>
            <span>
              <small>Regular</small>
              <b>Tests &amp; analysis</b>
            </span>
          </div>
          <div className="float-card fc-3">
            <span className="fc-icon sun">
              <Icon name="teacher" className="i" />
            </span>
            <span>
              <small>Guided by</small>
              <b>Mahto Sir</b>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE]
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {items.map((s, i) => (
          <span key={i}>
            {s}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  )
}

function Courses() {
  return (
    <section className="section" id="courses">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="eyebrow">What we teach</p>
          <h2>
            Three programmes, <em>one promise.</em>
          </h2>
          <p className="section-sub">
            From the first chapter of Class 6 to the last board paper of Class 12 — and the
            entrance exams in between.
          </p>
        </div>

        <div className="course-grid">
          {COURSES.map((c, i) => (
            <article
              key={c.title}
              className={`course-card tone-${c.tone}`}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="course-num">0{i + 1}</span>
              <p className="course-tag">{c.tag}</p>
              <h3>{c.title}</h3>
              <p className="course-body">{c.body}</p>
              <ul className="chips">
                {c.subjects.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <a
                className="course-link"
                href={whatsappLink(`Hello Mahto Sir, I want details about the ${c.title} (${c.tag}) batch.`)}
                target="_blank"
                rel="noreferrer"
              >
                Ask about this batch <Icon name="arrow" className="i" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function RmsCet() {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 60_000)
    return () => window.clearInterval(id)
  }, [])

  const applyDays = daysUntil(RMS_APPLY_CLOSES, now)
  const examDays = daysUntil(RMS_EXAM_DAY, now)
  const applyOpen = now <= RMS_APPLY_CLOSES.getTime()

  return (
    <section className="rms" id="rms-cet">
      <div className="rms-stars" aria-hidden />
      <div className="wrap">
        <div className="rms-head" data-reveal>
          <div>
            <p className="eyebrow on-dark">Rashtriya Military Schools · Common Entrance Test</p>
            <h2>
              RMS CET <span className="gold">2026</span>
            </h2>
            <p className="rms-sub">
              Admission for <b>Class 6 &amp; 9</b> · Session 2027–28. Start your preparation
              now.
            </p>
          </div>

          <div className="countdown" role="group" aria-label="Countdown">
            <div className={`count ${applyOpen ? '' : 'is-closed'}`}>
              <strong>{applyOpen ? applyDays : '—'}</strong>
              <span>{applyOpen ? 'days left to apply' : 'Applications closed'}</span>
            </div>
            <div className="count">
              <strong>{examDays}</strong>
              <span>days to exam</span>
            </div>
          </div>
        </div>

        <div className="rms-grid">
          <div className="rms-timeline" data-reveal>
            <h3>Key dates</h3>
            <ol>
              <li>
                <span className="tl-dot" />
                <small>Applications open</small>
                <b>23 September 2026</b>
              </li>
              <li>
                <span className="tl-dot" />
                <small>Last date to apply</small>
                <b>20 October 2026</b>
              </li>
              <li>
                <span className="tl-dot hot" />
                <small>Exam date</small>
                <b>13 December 2026</b>
              </li>
            </ol>
            <a className="btn btn-sun" href={RMS_APPLY_URL} target="_blank" rel="noreferrer">
              Apply on NTA website <Icon name="external" className="i" />
            </a>
            <p className="fine">Official site: exams.nta.nic.in/rmscet</p>
          </div>

          <div className="rms-cards">
            <div className="elig" data-reveal>
              <p className="elig-class">Class 6</p>
              <p className="elig-age">10 – 12 years</p>
              <p className="elig-who">Boys &amp; Girls</p>
            </div>
            <div className="elig elig-green" data-reveal style={{ transitionDelay: '80ms' }}>
              <p className="elig-class">Class 9</p>
              <p className="elig-age">13 – 15 years</p>
              <p className="elig-who">Boys only</p>
            </div>

            <div className="fees" data-reveal style={{ transitionDelay: '140ms' }}>
              <p className="fees-title">Application fees</p>
              <div className="fees-row">
                <div>
                  <small>General / Defence</small>
                  <b>₹550</b>
                </div>
                <div>
                  <small>SC / ST</small>
                  <b>₹275</b>
                </div>
              </div>
            </div>

            <div className="why-rms" data-reveal style={{ transitionDelay: '200ms' }}>
              <p className="fees-title">Why choose RMS?</p>
              <ul>
                {['Quality education', 'Discipline & leadership', 'Sainik lifestyle', 'All-India opportunities'].map(
                  (t) => (
                    <li key={t}>
                      <Icon name="check" className="i" />
                      {t}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="rms-subjects" data-reveal>
          <span>We prepare you in</span>
          <ul>
            <li className="s-blue">Mathematics</li>
            <li className="s-green">General Knowledge</li>
            <li className="s-red">English</li>
            <li className="s-plum">Hindi</li>
            <li className="s-orange">Reasoning</li>
          </ul>
          <a
            className="btn btn-red"
            href={whatsappLink('Hello Mahto Sir, I want to join the RMS CET 2026 preparation batch.')}
            target="_blank"
            rel="noreferrer"
          >
            Join the RMS batch <Icon name="arrow" className="i" />
          </a>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section className="section" id="why-us">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Why Education Point</p>
          <h2>
            Built for results. <em>Designed for students.</em>
          </h2>
        </div>

        <div className="feature-grid">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="feature" data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              <span className={`feature-icon fi-${i}`}>
                <Icon name={f.icon} className="i" />
              </span>
              <h3>{f.title}</h3>
              <p>{f.note}</p>
            </div>
          ))}
        </div>

        <div className="promise" data-reveal>
          <h3>
            Shape your future <em>with us…</em>
          </h3>
          <ul>
            {PROMISES.map((p) => (
              <li key={p}>
                <span className="tick">
                  <Icon name="check" className="i" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Notices() {
  return (
    <section className="section notices" id="notices">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Notice board</p>
          <h2>
            Latest from <em>the classroom.</em>
          </h2>
        </div>
        <div className="poster-grid">
          <a className="poster" href={admissionPoster} target="_blank" rel="noreferrer" data-reveal>
            <img src={admissionPoster} alt="Admission Open poster — Class 6th to 12th and Commerce 11th & 12th" loading="lazy" />
            <span className="poster-cap">
              Admission Open · Class 6th–12th <Icon name="external" className="i" />
            </span>
          </a>
          <a
            className="poster"
            href={rmsPoster}
            target="_blank"
            rel="noreferrer"
            data-reveal
            style={{ transitionDelay: '100ms' }}
          >
            <img src={rmsPoster} alt="RMS CET 2026 poster — application and exam details" loading="lazy" />
            <span className="poster-cap">
              RMS CET 2026 · Applications open <Icon name="external" className="i" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [name, setName] = useState('')
  const [studentClass, setStudentClass] = useState('')
  const [course, setCourse] = useState('Class 6th – 10th')
  const [phone, setPhone] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const text = [
      'Hello Mahto Sir, admission enquiry:',
      `Name: ${name}`,
      studentClass && `Current class: ${studentClass}`,
      `Interested in: ${course}`,
      phone && `Phone: ${phone}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(whatsappLink(text), '_blank', 'noopener')
  }

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info" data-reveal>
          <p className="eyebrow">Visit or call</p>
          <h2>
            Let's talk about <em>your goals.</em>
          </h2>
          <p className="section-sub">
            Drop by the centre, give us a call, or send an enquiry on WhatsApp. We'll help you
            pick the right batch.
          </p>

          <a className="contact-line big" href={`tel:${PHONE_TEL}`}>
            <span className="ci red">
              <Icon name="phone" className="i" />
            </span>
            <span>
              <small>Call us</small>
              <b>{PHONE_DISPLAY}</b>
            </span>
          </a>
          <a className="contact-line" href={MAP_URL} target="_blank" rel="noreferrer">
            <span className="ci navy">
              <Icon name="pin" className="i" />
            </span>
            <span>
              <small>Our centre</small>
              <b>
                {ADDRESS_LINES[0]}
                <br />
                {ADDRESS_LINES[1]}
              </b>
            </span>
          </a>

          <ul className="socials">
            {SOCIALS.map((s) => {
              const inner = (
                <>
                  <Icon name={s.icon} className="i" />
                  <span>{s.handle}</span>
                </>
              )
              return (
                <li key={s.label} title={s.label}>
                  {'href' in s ? (
                    <a href={s.href} target="_blank" rel="noreferrer" aria-label={`${s.label}: ${s.handle}`}>
                      {inner}
                    </a>
                  ) : (
                    <span aria-label={`${s.label}: ${s.handle}`}>{inner}</span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <form className="enquiry" onSubmit={onSubmit} data-reveal>
          <h3>Admission enquiry</h3>
          <p className="fine">Sends your details to us on WhatsApp.</p>

          <label>
            Student name
            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Aarav Patel" />
          </label>
          <div className="row-2">
            <label>
              Current class
              <input value={studentClass} onChange={(e) => setStudentClass(e.target.value)} placeholder="e.g. 10th" />
            </label>
            <label>
              Phone
              <input
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit number"
              />
            </label>
          </div>
          <label>
            Interested in
            <select value={course} onChange={(e) => setCourse(e.target.value)}>
              <option>Class 6th – 10th</option>
              <option>Commerce 11th &amp; 12th</option>
              <option>RMS CET 2026 preparation</option>
            </select>
          </label>

          <button type="submit" className="btn btn-whatsapp btn-lg">
            <Icon name="whatsapp" className="i" />
            Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <div className="brand brand-footer">
          <img src={logo} alt="" width={48} height={48} />
          <span>
            <strong>Education Point Classes</strong>
            <em>Your Success Is Our Mission</em>
          </span>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <p className="copy">© {new Date().getFullYear()} Education Point Classes, Silvassa · Mahto Sir</p>
      </div>
    </footer>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <a className="skip" href="#courses">
        Skip to content
      </a>
      <div className="announce">
        <a href="#rms-cet">
          <span className="announce-tag">New</span>
          RMS CET 2026 applications open · 23 Sep – 20 Oct 2026
          <Icon name="arrow" className="i" />
        </a>
      </div>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Courses />
        <RmsCet />
        <WhyUs />
        <Notices />
        <Contact />
      </main>
      <Footer />

      <div className="mobile-bar">
        <a href={`tel:${PHONE_TEL}`} className="mb-call">
          <Icon name="phone" className="i" /> Call
        </a>
        <a
          href={whatsappLink('Hello Mahto Sir, I would like to know about admission at Education Point Classes.')}
          target="_blank"
          rel="noreferrer"
          className="mb-wa"
        >
          <Icon name="whatsapp" className="i" /> WhatsApp
        </a>
      </div>
    </>
  )
}
