import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { WhatsAppButton } from '../../components/WhatsAppButton'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { PageHero } from './sections/PageHero'
import { Class6Exams } from './sections/Class6Exams'
import { Aissee } from './sections/Aissee'
import { Agniveer } from './sections/Agniveer'

export default function ExamsPage() {
  useScrollReveal()
  return (
    <>
      <div className="notice-bar">
        <a href="#aissee">AISSEE 2027-28: apply by 2 Dec 2026 · Exam on 31 Jan 2027 →</a>
      </div>
      <Header home="/" />
      <main>
        <PageHero />
        <Class6Exams />
        <Aissee />
        <Agniveer />
      </main>
      <Footer home="/" />
      <WhatsAppButton message="Hello Mahto Sir, I have a question about entrance exam preparation." />
    </>
  )
}
