import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import ExamsPage from './pages/exams/ExamsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExamsPage />
  </StrictMode>,
)
