import { Check } from '../../../components/Icons'
import { COURSES, courseId } from '../../../data/courses'
import { whatsappLink } from '../../../data/site'

export function Courses() {
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
