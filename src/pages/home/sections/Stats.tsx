import { STATS } from '../../../data/home'

export function Stats() {
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
