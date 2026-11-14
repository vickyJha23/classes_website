import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { WhatsAppButton } from '../../components/WhatsAppButton'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Hero } from './sections/Hero'
import { Admission } from './sections/Admission'
import { Stats } from './sections/Stats'
import { About } from './sections/About'
import { Courses } from './sections/Courses'
import { CommerceBanner } from './sections/CommerceBanner'
import { Results } from './sections/Results'
import { RmsCet } from './sections/RmsCet'
import { WhyUs } from './sections/WhyUs'
import { Scholarship } from './sections/Scholarship'
import { Faq } from './sections/Faq'
import { Contact } from './sections/Contact'

export default function HomePage() {
  useScrollReveal()
  return (
    <>
      <div className="notice-bar">
        <a href="#rms-cet">RMS CET 2026 exam on 13 Dec 2026 · Join our preparation batch →</a>
      </div>
      <Header />
      <main>
        <Hero />
        <Admission />
        <Stats />
        <About />
        <Courses />
        <CommerceBanner />
        <Results />
        <RmsCet />
        <WhyUs />
        <Scholarship />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton message="Hello Mahto Sir, I have a question about admission." />
    </>
  )
}
