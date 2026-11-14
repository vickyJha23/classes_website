import mahtoSir from '../../../assets/people/mahto-sir.jpg'
import { VALUES } from '../../../data/home'

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="welcome">
          <figure className="welcome-photo">
            <div className="welcome-frame">
              <img src={mahtoSir} alt="Mahto Sir, mentor at Education Point Classes, Silvassa" width={760} height={1004} loading="lazy" />
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
