import { useState } from 'react'
import group2024 from '../../../assets/people/group-2024.jpg'
import { SELECTIONS, TOPPERS_2024, TOPPERS_2025, type Topper } from '../../../data/results'

function TopperCard({ t, rank }: { t: Topper; rank: number }) {
  return (
    <article className="topper">
      <div className="topper-photo">
        {t.photo ? (
          <img src={t.photo} alt={`${t.name}, Class 10th topper`} width={360} height={360} loading="lazy" />
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

export function Results() {
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
                <img src={s.photo} alt={`${s.name}, selected for JNV / Sainik School`} loading="lazy" />
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
          <img src={group2024} alt="Education Point Classes toppers with their medals" loading="lazy" />
          <figcaption>
            <b>Celebrating our toppers</b>
            <span>Your success is our mission.</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
