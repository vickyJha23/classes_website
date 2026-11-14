import agniveer from '../../../assets/agniveer.jpg'
import { Check } from '../../../components/Icons'
import { AGNIVEER_SUBJECTS } from '../../../data/exams'
import { ADDRESS, MAP_URL, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../../../data/site'

export function Agniveer() {
  return (
    <section className="section" id="agniveer">
      <div className="wrap">
        <p className="eyebrow">Government exam preparation</p>
        <h2>Indian Army Agniveer recruitment preparation</h2>
        <div className="agniveer-grid">
          <img
            className="agniveer-poster"
            src={agniveer}
            alt="Agniveer government exam preparation at Education Point Classes, Silvassa"
            width={1600}
            height={900}
            loading="lazy"
          />
          <div>
            <p className="agniveer-target">
              <b>Target:</b> Indian Army Agniveer Exam
            </p>
            <h3>Subjects we cover</h3>
            <ul className="subject-chips">
              {AGNIVEER_SUBJECTS.map((s) => (
                <li key={s.name} className={`chip-${s.tone}`}>
                  {s.name}
                </li>
              ))}
            </ul>
            <ul className="list">
              <li>
                <Check />
                <a href={`tel:${PHONE_TEL}`}>Mob: {PHONE_DISPLAY}</a>
              </li>
              <li>
                <Check />
                <a href={MAP_URL} target="_blank" rel="noreferrer">
                  {ADDRESS}
                </a>
              </li>
            </ul>
            <a
              className="btn btn-red"
              href={whatsappLink('Hello Mahto Sir, I want to join the Agniveer exam preparation batch.')}
              target="_blank"
              rel="noreferrer"
            >
              Join the Agniveer batch →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
