import cadets from '../../../assets/cadets.jpg'
import { CalendarIcon, Check, FormIcon } from '../../../components/Icons'
import { RMS_SUBJECTS, RMS_WHY } from '../../../data/home'
import { RMS_APPLY_URL, whatsappLink } from '../../../data/site'

export function RmsCet() {
  return (
    <section className="rms-section" id="rms-cet">
      <div className="wrap">
        <div className="rms-banner">
          <div className="rms-photo" aria-hidden>
            <img src={cadets} alt="" loading="lazy" width={328} height={850} />
          </div>
          <p className="rms-sticker">
            Exam on <span>13 Dec</span>
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
                    <p>Applications closed</p>
                    <b className="rms-red">Ended 20 Oct 2026</b>
                  </div>
                </div>
                <div className="rms-tile">
                  <span className="rms-tile-icon">
                    <FormIcon />
                  </span>
                  <div>
                    <p>Admit card &amp; updates · Official website (NTA)</p>
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
