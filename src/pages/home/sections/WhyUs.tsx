import { Check } from '../../../components/Icons'
import { WHY_US } from '../../../data/home'

export function WhyUs() {
  return (
    <section className="section alt" id="why-us">
      <div className="wrap">
        <p className="eyebrow">Why choose us?</p>
        <h2>What makes us different</h2>
        <div className="cards three">
          {WHY_US.map((w) => (
            <div className="card why" key={w.title}>
              <Check />
              <div>
                <h4>{w.title}</h4>
                <p>{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
