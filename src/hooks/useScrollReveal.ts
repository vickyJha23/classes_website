import { useEffect } from 'react'

// Elements that fade up as they scroll into view; siblings are staggered
const REVEAL_SELECTOR = [
  '.section .eyebrow',
  '.section h2',
  '.stat',
  '.welcome > *',
  '.value',
  '.card',
  '.topper',
  '.selection',
  '.celebration',
  '.chalkboard',
  '.commerce-row > *',
  '.rms-banner',
  '.faq details',
  '.contact-grid > *',
  '.footer-grid > *',
  '.exam-card',
  '.aissee-grid > *',
  '.agniveer-grid > *',
].join(',')

export function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    for (const el of els) {
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : []
      const index = Math.min(siblings.indexOf(el), 5)
      el.style.setProperty('--reveal-delay', `${index * 90}ms`)
      el.classList.add('reveal')
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.classList.add('is-visible')
            io.unobserve(el)
            // drop the stagger delay afterwards so hover effects respond instantly
            window.setTimeout(() => el.style.setProperty('--reveal-delay', '0ms'), 1300)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
