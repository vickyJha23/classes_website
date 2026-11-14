import { SOCIALS } from '../data/site'
import { SocialIcon } from './Icons'

export function SocialLinks({ showHandle = false }: { showHandle?: boolean }) {
  return (
    <div className={`social-links${showHandle ? ' with-handle' : ''}`}>
      {SOCIALS.map((s) => {
        const inner = (
          <>
            <span className="social-icon">
              <SocialIcon name={s.name} />
            </span>
            {showHandle && (
              <span className="social-text">
                <b>{s.label}</b>
                <small>{s.handle}</small>
              </span>
            )}
          </>
        )
        return s.href ? (
          <a
            key={s.name}
            className={`social ${s.name}`}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${s.label}: ${s.handle}`}
          >
            {inner}
          </a>
        ) : (
          <span key={s.name} className={`social ${s.name}`} title={`${s.label}: ${s.handle}`}>
            {inner}
          </span>
        )
      })}
    </div>
  )
}
