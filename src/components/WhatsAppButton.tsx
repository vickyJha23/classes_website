import { whatsappLink } from '../data/site'
import { SocialIcon } from './Icons'

// Round WhatsApp button fixed to the bottom-right corner of every page
export function WhatsAppButton({ message }: { message: string }) {
  return (
    <a
      className="wa-float"
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <SocialIcon name="whatsapp" />
    </a>
  )
}
