import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SoundProvider } from './context/SoundContext.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SoundProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </SoundProvider>
  </StrictMode>
)
