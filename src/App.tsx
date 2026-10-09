import { useEffect, useRef, useState } from 'react'
import logo from './assets/logo.png'
import cadets from './assets/cadets.jpg'
import student from './assets/student.jpg'
import mahtoSir from './assets/people/mahto-sir.jpg'
import group2024 from './assets/people/group-2024.jpg'
import anshika from './assets/people/anshika-tiwari.jpg'
import aditya from './assets/people/aditya-jaiswar.jpg'
import ruchika from './assets/people/ruchika-chaudhari.jpg'
import sanskruti from './assets/people/sanskruti-urkude.jpg'
import nitesh from './assets/people/nitesh-upadhyay.jpg'
import shivangi from './assets/people/shivangi-jaiswar.jpg'
import amit from './assets/people/amit-prajapati.jpg'
import rishit from './assets/people/rishit-paswan.jpg'
import singhKaran from './assets/people/singh-karan.jpg'
import ashutosh from './assets/people/ashutosh-yadav.jpg'
import aryan from './assets/people/aryan-raj.jpg'
import kartik from './assets/people/kartik-dubey.jpg'
import krishna from './assets/people/krishna-jadhav.jpg'
import './App.css'

/* ------------------------------------------------------------------ */
/* Site content — edit these to update the website                     */
/* ------------------------------------------------------------------ */

const PHONE_DISPLAY = '81400 80262'
const PHONE_TEL = '+918140080262'
const WHATSAPP = '918140080262'
const ADDRESS =
  'Office No. 503, 5th Floor, Premaldeep Square, Opp. Avanti Store, Kilvani Naka, Silvassa, DNH – 396230'
const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=Premaldeep+Square+Kilvani+Naka+Silvassa+396230'
const RMS_APPLY_URL = 'https://exams.nta.nic.in/rmscet/'
const EMAIL = 'edupointclass@gmail.com'

const NAV = [
  { href: '#about', label: 'About Us' },
  { href: '#courses', label: 'Courses' },
  { href: '#results', label: 'Results' },
  { href: '#rms-cet', label: 'RMS CET 2026' },
  { href: '#scholarship', label: 'Scholarship' },
  { href: '#contact', label: 'Contact' },
]

const COURSES = [
  {
    title: 'Foundation Course',
    level: 'Class 5th to 10th',
    text: 'Coaching in all subjects for CBSE and State Board students, with clear concepts, regular tests and doubt-solving sessions.',
    points: ['CBSE | State Board', 'All subjects available', 'Regular tests', 'Doubt-solving sessions'],
  },
  {
    title: 'Commerce',
    level: 'Class 11th & 12th',
    text: 'Complete board-exam coaching for commerce students of CBSE and State Board, with chapter-wise revision and practice papers.',
    points: ['Accountancy', 'Business Studies', 'Economics', 'English'],
  },
  {
    title: 'Entrance Exam Preparation',
    level: 'Navodaya · Sainik · RMS · Railway',
    text: 'Focused preparation for school entrance and scholarship exams, covering every section of the paper with practice tests.',
    points: [
      'Navodaya (JNVST)',
      'Sainik School Entrance Exam',
      'Kendriya Vidyalaya admission guidance',
      'RMS CET (Rashtriya Military Schools)',
      'Railway exams',
      'Other scholarship & competitive exams',
    ],
  },
  {
    title: 'Diploma Engineering',
    level: 'Diploma students',
    text: 'Subject coaching for diploma engineering students, with clear explanations, regular practice and exam-focused revision.',
    points: ['Subject-wise coaching', 'Exam-focused revision', 'Regular tests', 'Doubt-solving sessions'],
  },
]

const VALUES = [
  {
    title: 'Our vision',
    text: 'To empower students to excel academically and grow personally, in a learning environment where they explore their passions, develop their talents and reach their potential.',
  },
  {
    title: 'Our mission',
    text: 'To prepare students for leadership and service, with a learning environment that is engaging, upholds high academic standards and builds a genuine passion for learning.',
  },
  {
    title: 'Our approach',
    text: 'We blend structured lessons with creative, engaging activities, so learning is both enjoyable and effective, and students grow academically, artistically and socially.',
  },
]

const STATS = [
  { value: '2020', label: 'Founded in Silvassa' },
  { value: '98.22', unit: '%ile', label: 'Top Class 10th score, 2025' },
  { value: '100', unit: '/100', label: 'Maths score by our topper, 2025' },
  { value: 'JNV', unit: '& Sainik', label: 'Selections from our entrance batch' },
]

const WHY_US = [
  { title: 'Experienced faculty', text: 'Learn from teachers who know the syllabus and the exam pattern.' },
  { title: 'Smart classroom', text: 'Digital learning tools alongside classroom teaching.' },
  { title: 'Personal attention', text: 'Small batches, so every student is noticed and helped.' },
  { title: 'Result-oriented teaching', text: 'Every class is planned around scoring well in the exam.' },
  { title: 'Regular tests & doubt solving', text: 'Track progress with tests, and clear every doubt in dedicated sessions.' },
  { title: 'Boards & entrance exams', text: 'CBSE, State Board, and entrance exams like Navodaya, Sainik School and RMS CET.' },
]

const FAQS = [
  {
    q: 'Which classes do you teach?',
    a: 'We teach students from Class 5th to 12th, for both CBSE and State Board, with all subjects available. For Class 11th and 12th we run the Commerce stream (Accountancy, Business Studies, Economics and English).',
  },
  {
    q: 'Which entrance exams do you prepare for?',
    a: 'We prepare students for Navodaya (JNVST), the Sainik School Entrance Exam, RMS CET (Rashtriya Military Schools), Railway exams, and other scholarship and competitive exams.',
  },
  {
    q: 'Where is Education Point Classes located?',
    a: `Our centre is at ${ADDRESS}.`,
  },
  {
    q: 'How do I take admission?',
    a: `Call us on ${PHONE_DISPLAY}, send an enquiry through the form below, or visit the centre. Seats are limited in every batch.`,
  },
  {
    q: 'What is the RMS CET 2026 schedule?',
    a: 'Applications are open from 23 September to 20 October 2026 on the official NTA website, and the exam is on 13 December 2026.',
  },
  {
    q: 'How do I apply for the scholarship test?',
    a: `Tap "Apply now" in the Scholarship Test section or WhatsApp us on ${PHONE_DISPLAY}. We will share the test date and details with you.`,
  },
  {
    q: 'Can I attend a free demo class?',
    a: `Yes. You can attend a free demo class before taking admission. Call or WhatsApp us on ${PHONE_DISPLAY} to book one.`,
  },
  {
    q: 'Are batches small?',
    a: 'Yes. We keep batches small so every student gets personal attention and their doubts are cleared.',
  },
]

type Topper = {
  name: string
  photo?: string
  score: string
  scoreNote: string
  maths?: number
  science?: number
}

// Class 10th toppers, 2025
const TOPPERS_2025: Topper[] = [
  { name: 'Anshika Tiwari', photo: anshika, score: '98.22', scoreNote: 'percentile', maths: 95, science: 97 },
  { name: 'Aditya Jaiswar', photo: aditya, score: '97.14', scoreNote: 'percentile', maths: 100, science: 99 },
  { name: 'Ruchika Chaudhari', photo: ruchika, score: '95.79', scoreNote: 'percentile' },
  { name: 'Sanskruti Urkude', photo: sanskruti, score: '95.49', scoreNote: 'percentile', maths: 92, science: 97 },
  { name: 'Nitesh Upadhyay', photo: nitesh, score: '95%', scoreNote: 'CBSE', maths: 98, science: 95 },
  { name: 'Shivangi Jaiswar', photo: shivangi, score: '88.44', scoreNote: 'percentile' },
]

// Class 10th toppers, 2024
const TOPPERS_2024: Topper[] = [
  { name: 'Amit Prajapati', photo: amit, score: '92.22', scoreNote: 'percentile', maths: 95 },
  { name: 'Rishit Paswan', photo: rishit, score: '90.40%', scoreNote: 'overall', maths: 92 },
  { name: 'Singh Karan', photo: singhKaran, score: '88.66%', scoreNote: 'overall', maths: 96 },
  { name: 'Priyanshu Singh', score: '81.35', scoreNote: 'percentile' },
  { name: 'Suraj Prasad', score: '80.30', scoreNote: 'percentile' },
  { name: 'Annu Singh', score: '78.97', scoreNote: 'percentile' },
  { name: 'Pratik Mahajan', score: '78.69', scoreNote: 'percentile' },
  { name: 'Chaitanya Sonavane', score: '77.29', scoreNote: 'percentile' },
]

// Students selected in Jawahar Navodaya Vidyalaya & Sainik School
const SELECTIONS = [
  { name: 'Ashutosh Yadav', photo: ashutosh },
  { name: 'Aryan Raj', photo: aryan },
  { name: 'Kartik Dubey', photo: kartik },
  { name: 'Krishna Jadhav', photo: krishna },
]

const COMMERCE_REASONS = ['Result-oriented teaching', 'Experienced teachers', 'Regular tests', 'Personal attention']

// Paste the YouTube channel link here (e.g. 'https://www.youtube.com/@yourchannel')
const YOUTUBE_URL = ''
const INSTAGRAM_URL = 'https://www.instagram.com/mahtosir00/'

type SocialName = 'whatsapp' | 'instagram' | 'youtube'

const SOCIALS: { name: SocialName; label: string; handle: string; href: string }[] = [
  { name: 'whatsapp', label: 'WhatsApp', handle: PHONE_DISPLAY, href: `https://wa.me/${WHATSAPP}` },
  { name: 'instagram', label: 'Instagram', handle: '@mahtosir00', href: INSTAGRAM_URL },
  { name: 'youtube', label: 'YouTube', handle: 'Mahto Sir', href: YOUTUBE_URL },
]

/* ------------------------------------------------------------------ */

const COURSE_ICONS = [
  // Foundation: open book
  'M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5Zm0 0v13',
  // Commerce: rising chart
  'M4 20h16M7 16v-4M11 16V9M15 16v-6M19 16V6',
  // Entrance exams: target
  'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
  // Diploma engineering: gear
  'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.4-1.6.1-1.4-.1-1.4 2-1.6-2-3.4-2.4 1a7 7 0 0 0-2.4-1.4L14.2 2h-4.4l-.4 2.6A7 7 0 0 0 7 6L4.6 5l-2 3.4 2 1.6-.1 1.4.1 1.4-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2.4 1.4l.4 2.6h4.4l.4-2.6a7 7 0 0 0 2.4-1.4l2.4 1 2-3.4-2-1.6Z',
]

function courseId(title: string) {
  return 'course-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

function whatsappLink(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`
}

function Check() {
  return (
    <svg className="check" viewBox="0 0 24 24" aria-hidden>
      <path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const SOCIAL_PATHS: Record<SocialName, string> = {
  whatsapp:
    'M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z',
  instagram:
    'M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3c1.2-.1 1.6-.1 4.8-.1ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-9.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z',
  youtube:
    'M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15V9l5.8 3-5.8 3Z',
}

function SocialIcon({ name }: { name: SocialName }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d={SOCIAL_PATHS[name]} />
    </svg>
  )
}

function SocialLinks({ showHandle = false }: { showHandle?: boolean }) {
  return (
    <div className={`social-links${showHandle ? ' with-handle' : ''}`}>
      {SOCIALS.map((s) => {
        const inner = (
          <>
            <span className="social-icon">
              <SocialIcon name={s.name} />
            </span>
            {showHandle && (
              <span className="social-text">
                <b>{s.label}</b>
                <small>{s.handle}</small>
              </span>
            )}
          </>
        )
        return s.href ? (
          <a
            key={s.name}
            className={`social ${s.name}`}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${s.label}: ${s.handle}`}
          >
            {inner}
          </a>
        ) : (
          <span key={s.name} className={`social ${s.name}`} title={`${s.label}: ${s.handle}`}>
            {inner}
          </span>
        )
      })}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="wrap header-row">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
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
                <a href={n.href} onClick={() => setOpen(false)}>
                  {n.label} <span aria-hidden>▾</span>
                </a>
                <div className="dropdown-menu">
                  <p className="dropdown-label">Our courses</p>
                  {COURSES.map((c, i) => (
                    <a
                      key={c.title}
                      className={`dropdown-item tone-${i}`}
                      href={`#${courseId(c.title)}`}
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
                  <a className="dropdown-all" href="#courses" onClick={() => setOpen(false)}>
                    View all courses →
                  </a>
                </div>
              </div>
            ) : (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ),
          )}
          <a className="btn btn-red" href={`tel:${PHONE_TEL}`}>
            Call {PHONE_DISPLAY}
          </a>
        </nav>
      </div>
    </header>
  )
}

function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    // React doesn't write `muted` into the HTML, and browsers only autoplay muted videos,
    // so set it directly before asking the video to play.
    video.muted = true
    video.defaultMuted = true
    video.setAttribute('muted', '')
    const play = () => {
      video.play().catch(() => {})
    }
    play()

    // Some browsers (e.g. phones in data-saver mode) still block autoplay until the
    // visitor first touches or scrolls the page, so try again then.
    const events = ['pointerdown', 'touchstart', 'scroll', 'keydown'] as const
    const stopListening = () => events.forEach((e) => window.removeEventListener(e, onInteract))
    const onInteract = () => {
      play()
      stopListening()
    }
    events.forEach((e) => window.addEventListener(e, onInteract, { passive: true }))
    const onVisible = () => {
      if (!document.hidden) play()
    }
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      stopListening()
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  return (
    <video
      ref={ref}
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/hero-poster.jpg"
      aria-hidden
    >
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      {/* Background video: "Classroom with children raising their hands" from mixkit.co (free licence) */}
      <HeroVideo />
      <div className="hero-overlay" aria-hidden />
      <div className="hero-bg" aria-hidden />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-tag">
            <span className="live-dot" /> Admissions open · Free demo class
          </p>
          <h1>
            Admission <span>Open</span>
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
            <a className="btn btn-light" href={`tel:${PHONE_TEL}`}>
              Call now: {PHONE_DISPLAY}
            </a>
          </div>
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

function Stats() {
  return (
    <section className="stats" aria-label="Highlights">
      <div className="wrap">
        <div className="stats-grid">
        {STATS.map((st) => (
          <div className="stat" key={st.label}>
            <p className="stat-value">
              {st.value}
              {st.unit && <span>{st.unit}</span>}
            </p>
            <p className="stat-label">{st.label}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="welcome">
          <figure className="welcome-photo">
            <div className="welcome-frame">
              <img src={mahtoSir} alt="Mahto Sir" width={760} height={1004} loading="lazy" />
            </div>
            <figcaption>
              <b>Mahto Sir</b>
              <span>Mentor, Education Point Classes</span>
            </figcaption>
          </figure>

          <div className="welcome-text">
            <p className="eyebrow">Welcome message</p>
            <h2>
              Committed to excellence <span className="accent-text">since 2020.</span>
            </h2>
            <p>
              Founded in 2020, Education Point Classes is committed to both academic excellence and
              holistic student development. We offer Foundation Courses, Board exam preparation,
              Commerce, Diploma Engineering subjects and entrance coaching, with guidance for
              prestigious institutions such as <b>Kendriya Vidyalaya</b>, <b>Navodaya Vidyalaya</b>{' '}
              and <b>Sainik School</b>.
            </p>
            <p>
              We emphasise intellectual growth, discipline and social responsibility. Our goal is to
              shape students who are ready to make meaningful contributions to their communities and
              thrive in whatever they choose next.
            </p>
            <p className="signature">— Mahto Sir</p>
          </div>
        </div>

        <div className="values">
          {VALUES.map((v, i) => (
            <article className="value" key={v.title}>
              <span className="value-num">0{i + 1}</span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Courses() {
  return (
    <section className="section alt" id="courses">
      <div className="wrap">
        <p className="eyebrow">What we offer</p>
        <h2>Programmes for every stage</h2>
        <div className="cards two">
          {COURSES.map((c) => (
            <article className="card course" key={c.title} id={courseId(c.title)}>
              <p className="level">{c.level}</p>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <ul className="list">
                {c.points.map((p) => (
                  <li key={p}>
                    <Check />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                className="know-more"
                href={whatsappLink(`Hello Mahto Sir, I want to know more about the ${c.title} course (${c.level}).`)}
                target="_blank"
                rel="noreferrer"
              >
                Know more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CommerceBanner() {
  return (
    <section className="commerce-banner">
      <div className="wrap commerce-row">
        <div>
          <p className="commerce-for">For Std 11th &amp; 12th</p>
          <h2>Crack Commerce, build your future.</h2>
          <ul>
            {COMMERCE_REASONS.map((r) => (
              <li key={r}>
                <Check />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <a
          className="btn btn-sun"
          href={whatsappLink('Hello Mahto Sir, I want admission in the 11th/12th Commerce batch.')}
          target="_blank"
          rel="noreferrer"
        >
          Admission open · {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  )
}

function TopperCard({ t, rank }: { t: Topper; rank: number }) {
  return (
    <article className="topper">
      <div className="topper-photo">
        {t.photo ? (
          <img src={t.photo} alt={t.name} width={360} height={360} loading="lazy" />
        ) : (
          <span className="topper-initials" aria-hidden>
            {t.name
              .split(' ')
              .map((w) => w[0])
              .join('')}
          </span>
        )}
        {rank <= 3 && <span className="topper-rank">#{rank}</span>}
      </div>
      <h3>{t.name}</h3>
      <p className="topper-score">
        {t.score}
        <small>{t.scoreNote}</small>
      </p>
      {(t.maths || t.science) && (
        <ul className="topper-marks">
          {t.maths && <li className={t.maths === 100 ? 'perfect' : ''}>Maths {t.maths}/100</li>}
          {t.science && <li>Science {t.science}/100</li>}
        </ul>
      )}
    </article>
  )
}

const RESULT_TABS = ['2025 Toppers', '2024 Toppers', 'JNV & Sainik'] as const

function Results() {
  const [tab, setTab] = useState<(typeof RESULT_TABS)[number]>('2025 Toppers')
  const toppers = tab === '2025 Toppers' ? TOPPERS_2025 : TOPPERS_2024

  return (
    <section className="section alt" id="results">
      <div className="wrap">
        <div className="results-head">
          <div>
            <p className="eyebrow">Our results</p>
            <h2>Congratulations to our achievers</h2>
          </div>
          <div className="tabs" role="tablist" aria-label="Results">
            {RESULT_TABS.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                className={tab === t ? 'active' : ''}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {tab === 'JNV & Sainik' ? (
          <div className="selections" key={tab}>
            {SELECTIONS.map((s) => (
              <article className="selection" key={s.name}>
                <img src={s.photo} alt={s.name} loading="lazy" />
                <div>
                  <h3>{s.name}</h3>
                  <p>JNV / Sainik selected</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={`toppers cols-${toppers.length % 4 === 0 ? 4 : 3}`} key={tab}>
            {toppers.map((t, i) => (
              <TopperCard t={t} rank={i + 1} key={t.name} />
            ))}
          </div>
        )}

        <figure className="celebration">
          <img src={group2024} alt="Our toppers with their medals" loading="lazy" />
          <figcaption>
            <b>Celebrating our toppers</b>
            <span>Your success is our mission.</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function Scholarship() {
  return (
    <section className="scholarship" id="scholarship">
      <div className="wrap">
        <div className="chalkboard">
          <div className="chalk-text">
            <p className="chalk-eyebrow">Education Point Classes</p>
            <h2 className="chalk-title">Scholarship Test</h2>
            <span className="chalk-line" aria-hidden />
            <p>
              Talented students deserve a head start. Appear for our scholarship test and earn a
              scholarship on your coaching fees.
            </p>
            <a
              className="btn btn-apply"
              href={whatsappLink('Hello Mahto Sir, I want to apply for the Education Point Classes scholarship test.')}
              target="_blank"
              rel="noreferrer"
            >
              Apply now →
            </a>
          </div>
          <svg className="chalk-sheet" viewBox="0 0 220 260" aria-hidden>
            <rect x="18" y="14" width="184" height="232" rx="10" fill="#fff" />
            <rect x="60" y="34" width="100" height="14" rx="4" fill="#e2323b" />
            <rect x="40" y="62" width="140" height="6" rx="3" fill="#c9cbe0" />
            <rect x="40" y="76" width="110" height="6" rx="3" fill="#c9cbe0" />
            {Array.from({ length: 6 }).map((_, r) =>
              Array.from({ length: 5 }).map((_, c) => (
                <circle
                  key={`${r}-${c}`}
                  cx={52 + c * 28}
                  cy={108 + r * 22}
                  r="7"
                  fill={(r * 3 + c * 2) % 5 === 1 ? '#2b2d7c' : 'none'}
                  stroke="#2b2d7c"
                  strokeWidth="2"
                />
              )),
            )}
          </svg>
        </div>
      </div>
    </section>
  )
}

const RMS_SUBJECTS = [
  { name: 'Mathematics', tone: 'blue' },
  { name: 'General Knowledge', tone: 'green' },
  { name: 'English', tone: 'red' },
  { name: 'Hindi', tone: 'plum' },
  { name: 'Reasoning', tone: 'orange' },
]

const RMS_WHY = ['Quality education', 'Discipline & leadership', 'Sainik lifestyle', 'All-India opportunities']

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <rect x="3" y="4.5" width="18" height="16.5" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 9.5h18M8 2.5v4M16 2.5v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 13h2M11 13h2M15 13h2M7 16.5h2M11 16.5h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function FormIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 8h8M8 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m14 18 2.5 2.5L21 15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function RmsCet() {
  return (
    <section className="rms-section" id="rms-cet">
      <div className="wrap">
        <div className="rms-banner">
          <div className="rms-photo" aria-hidden>
            <img src={cadets} alt="" loading="lazy" width={328} height={850} />
          </div>
          <p className="rms-sticker">
            Application <span>open now</span>
          </p>

          <div className="rms-main">
            <header className="rms-head">
              <p className="rms-brand">Education Point Classes</p>
              <h2 className="rms-title">
                <span className="gold">RMS CET</span> <span className="silver">2026</span>
              </h2>
              <p className="rms-full">
                Rashtriya Military Schools <b>Common Entrance Test</b>
              </p>
              <p className="rms-admission">
                Admission for <b>Class 6 &amp; 9</b> (Session 2027–28)
              </p>
            </header>

            <div className="rms-body">
              <div className="rms-tiles">
                <div className="rms-tile">
                  <span className="rms-tile-icon">
                    <CalendarIcon />
                  </span>
                  <div>
                    <p>Application dates</p>
                    <b className="rms-red">23 Sep – 20 Oct 2026</b>
                  </div>
                </div>
                <div className="rms-tile">
                  <span className="rms-tile-icon">
                    <FormIcon />
                  </span>
                  <div>
                    <p>Apply online · Official website (NTA)</p>
                    <a className="rms-green" href={RMS_APPLY_URL} target="_blank" rel="noreferrer">
                      exams.nta.nic.in/rmscet ↗
                    </a>
                  </div>
                </div>
                <div className="rms-tile">
                  <span className="rms-tile-icon">
                    <CalendarIcon />
                  </span>
                  <div>
                    <p>Exam date</p>
                    <b className="rms-red">13 December 2026</b>
                  </div>
                </div>
              </div>

              <div className="rms-side">
                <div className="rms-classes">
                  <div className="rms-class blue">
                    <h3>Class 6</h3>
                    <span>Age limit</span>
                    <b>10 – 12 years</b>
                    <small>Boys &amp; Girls</small>
                  </div>
                  <div className="rms-class green">
                    <h3>Class 9</h3>
                    <span>Age limit</span>
                    <b>13 – 15 years</b>
                    <small>Boys only</small>
                  </div>
                </div>
                <div className="rms-fees">
                  <h3>₹ Application fees</h3>
                  <div>
                    <p>
                      General / Defence
                      <b>₹550</b>
                    </p>
                    <p>
                      SC / ST
                      <b>₹275</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rms-bottom">
              <div className="rms-why">
                <h3>Why choose RMS?</h3>
                <ul>
                  {RMS_WHY.map((t) => (
                    <li key={t}>
                      <Check />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rms-prep">
                <p className="rms-prep-title">
                  Start your <span>preparation now</span>
                </p>
                <ul>
                  {RMS_SUBJECTS.map((s) => (
                    <li key={s.name} className={`chip-${s.tone}`}>
                      {s.name}
                    </li>
                  ))}
                </ul>
                <a
                  className="btn btn-sun"
                  href={whatsappLink('Hello Mahto Sir, I want to join the RMS CET 2026 preparation batch.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  Join the RMS batch →
                </a>
              </div>
            </div>
          </div>

          <footer className="rms-foot">
            <b>Education Point Classes</b>
            <span className="rms-foot-sep" />
            <b>Mahto Sir</b>
            <span className="rms-foot-script">Your Success Is Our Mission</span>
          </footer>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section className="section alt" id="why-us">
      <div className="wrap">
        <p className="eyebrow">Why choose us?</p>
        <h2>What makes us different</h2>
        <div className="cards three">
          {WHY_US.map((w) => (
            <div className="card why" key={w.title}>
              <Check />
              <div>
                <h4>{w.title}</h4>
                <p>{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap narrow">
        <p className="eyebrow">FAQ</p>
        <h2>Frequently asked questions</h2>
        <div className="faq">
          {FAQS.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
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

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <div className="brand">
            <img src={logo} alt="Education Point Classes logo" width={50} height={55} />
            <span>
              <strong>Education Point Classes</strong>
              <small>Your Success Is Our Mission</small>
            </span>
          </div>
          <p className="footer-about">
            Coaching for Class 5th to 12th, Commerce, and Navodaya, Sainik, RMS CET &amp; Railway exam preparation in Silvassa.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </div>
        <div>
          <h4>Courses</h4>
          {COURSES.map((c) => (
            <a key={c.title} href={`#${courseId(c.title)}`}>
              {c.title} ({c.level})
            </a>
          ))}
        </div>
        <div>
          <h4>Contact</h4>
          <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <p>{ADDRESS}</p>
          <SocialLinks />
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Education Point Classes · Mahto Sir</p>
    </footer>
  )
}

// Elements that fade up as they scroll into view; siblings are staggered
const REVEAL_SELECTOR = [
  '.section .eyebrow',
  '.section h2',
  '.stat',
  '.welcome > *',
  '.value',
  '.card',
  '.topper',
  '.selection',
  '.celebration',
  '.chalkboard',
  '.commerce-row > *',
  '.rms-banner',
  '.faq details',
  '.contact-grid > *',
  '.footer-grid > *',
].join(',')

function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    for (const el of els) {
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : []
      const index = Math.min(siblings.indexOf(el), 5)
      el.style.setProperty('--reveal-delay', `${index * 90}ms`)
      el.classList.add('reveal')
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.classList.add('is-visible')
            io.unobserve(el)
            // drop the stagger delay afterwards so hover effects respond instantly
            window.setTimeout(() => el.style.setProperty('--reveal-delay', '0ms'), 1300)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function App() {
  useScrollReveal()
  return (
    <>
      <div className="notice-bar">
        <a href="#rms-cet">RMS CET 2026 applications open: 23 Sep – 20 Oct 2026 →</a>
      </div>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Courses />
        <CommerceBanner />
        <Results />
        <RmsCet />
        <WhyUs />
        <Scholarship />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <a
        className="wa-float"
        href={whatsappLink('Hello Mahto Sir, I have a question about admission.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <SocialIcon name="whatsapp" />
      </a>
    </>
  )
}
