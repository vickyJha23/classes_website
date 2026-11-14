import { whatsappLink } from '../../../data/site'

export function Scholarship() {
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
