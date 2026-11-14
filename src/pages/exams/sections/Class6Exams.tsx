import { CLASS_6_EXAMS } from '../../../data/exams'

export function Class6Exams() {
  return (
    <section className="section" id="class-6">
      <div className="wrap">
        <p className="eyebrow">Class 6th</p>
        <h2>Competitive entrance exams</h2>
        <ol className="exam-cards">
          {CLASS_6_EXAMS.map((e, i) => (
            <li className="exam-card" key={e.short}>
              <span className="value-num">0{i + 1}</span>
              <h3>{e.short}</h3>
              <p className="exam-name">{e.name}</p>
              <p>{e.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
