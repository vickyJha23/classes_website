import logo from '../assets/logo.png'
import { COURSES, courseId } from '../data/courses'
import { ADDRESS, EMAIL, NAV, PHONE_DISPLAY, PHONE_TEL, navHref } from '../data/site'
import { SocialLinks } from './SocialLinks'

export function Footer({ home = '' }: { home?: string }) {
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
            <a key={n.href} href={navHref(n.href, home)}>
              {n.label}
            </a>
          ))}
        </div>
        <div>
          <h4>Courses</h4>
          {COURSES.map((c) => (
            <a key={c.title} href={`${home}#${courseId(c.title)}`}>
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
      <p className="dev-credit">
        Designed &amp; developed by Rajesh Jha ·{' '}
        <a href="https://realsight.co.in" target="_blank" rel="noopener">
          realsight.co.in
        </a>
      </p>
    </footer>
  )
}
