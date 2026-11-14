import { AISSEE_DATES, AISSEE_STEPS, AISSEE_URL } from '../../../data/exams'
import { whatsappLink } from '../../../data/site'

export function Aissee() {
  return (
    <section className="section alt" id="aissee">
      <div className="wrap">
        <p className="eyebrow">Sainik School Entrance Exam</p>
        <h2>AISSEE 2027-28</h2>

        <div className="aissee-grid">
          <article className="card">
            <h3>Key dates</h3>
            <dl className="date-list">
              {AISSEE_DATES.map((d) => (
                <div key={d.label}>
                  <dt>{d.label}</dt>
                  <dd>
                    {d.value}
                    {d.note && <small> ({d.note})</small>}
                  </dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="card">
            <h3>Eligibility criteria</h3>
            <div className="rms-classes aissee-classes">
              <div className="rms-class blue">
                <h4>Class 6</h4>
                <span>Age limit</span>
                <b>10 – 12 years</b>
                <small>as of 31 March 2027</small>
              </div>
              <div className="rms-class green">
                <h4>Class 9</h4>
                <span>Age limit</span>
                <b>13 – 15 years</b>
                <small>as of 31 March 2027</small>
              </div>
            </div>
          </article>

          <article className="card aissee-apply">
            <h3>How to apply</h3>
            <ol className="steps">
              {AISSEE_STEPS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <div className="actions">
              <a className="btn btn-red" href={AISSEE_URL} target="_blank" rel="noreferrer">
                NTA AISSEE official portal ↗
              </a>
              <a
                className="btn btn-outline"
                href={whatsappLink('Hello Mahto Sir, I want to join the Sainik School (AISSEE 2027-28) preparation batch.')}
                target="_blank"
                rel="noreferrer"
              >
                Join the Sainik School batch
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
