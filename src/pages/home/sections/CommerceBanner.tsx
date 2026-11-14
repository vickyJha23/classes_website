import { Check } from '../../../components/Icons'
import { COMMERCE_REASONS } from '../../../data/home'
import { PHONE_DISPLAY, whatsappLink } from '../../../data/site'

export function CommerceBanner() {
  return (
    <section className="commerce-banner">
      <div className="wrap commerce-row">
        <div>
          <p className="commerce-for">For Std 11th &amp; 12th</p>
          <h2>Crack Commerce, build your future.</h2>
          <ul>
            {COMMERCE_REASONS.map((r) => (
              <li key={r}>
                <Check />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <a
          className="btn btn-sun"
          href={whatsappLink('Hello Mahto Sir, I want admission in the 11th/12th Commerce batch.')}
          target="_blank"
          rel="noreferrer"
        >
          Admission open · {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  )
}
