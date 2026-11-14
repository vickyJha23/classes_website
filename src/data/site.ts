/* Shared site details and helpers, used by every page */

export const PHONE_DISPLAY = '81400 80262'
export const PHONE_TEL = '+918140080262'
export const WHATSAPP = '918140080262'
export const ADDRESS =
  'Office No. 503, 5th Floor, Premaldeep Square, Opp. Avanti Store, Kilvani Naka, Silvassa, DNH – 396230'
export const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=Premaldeep+Square+Kilvani+Naka+Silvassa+396230'
export const RMS_APPLY_URL = 'https://exams.nta.nic.in/rmscet/'
export const EMAIL = 'edupointclass@gmail.com'

export const EXAMS_URL = '/entrance-exams/'

export function whatsappLink(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`
}

export const NAV = [
  { href: '#about', label: 'About Us' },
  { href: '#courses', label: 'Courses' },
  { href: '#results', label: 'Results' },
  { href: '#rms-cet', label: 'RMS CET 2026' },
  { href: EXAMS_URL, label: 'Entrance Exams' },
  { href: '#scholarship', label: 'Scholarship' },
  { href: '#contact', label: 'Contact' },
]

export const YOUTUBE_URL = 'https://www.youtube.com/channel/UCN_L6knFJJd1QCe8gmfT_aw'
export const INSTAGRAM_URL = 'https://www.instagram.com/mahtosir00/'

export type SocialName = 'whatsapp' | 'instagram' | 'youtube'

export const SOCIALS: { name: SocialName; label: string; handle: string; href: string }[] = [
  { name: 'whatsapp', label: 'WhatsApp', handle: PHONE_DISPLAY, href: `https://wa.me/${WHATSAPP}` },
  { name: 'instagram', label: 'Instagram', handle: '@mahtosir00', href: INSTAGRAM_URL },
  { name: 'youtube', label: 'YouTube', handle: 'Mahto Sir', href: YOUTUBE_URL },
]

// Section links (#about) only work on the home page, so other pages pass home="/"
export function navHref(href: string, home: string) {
  return href.startsWith('#') ? home + href : href
}
