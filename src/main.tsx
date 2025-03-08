import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { VariantProvider } from './context/variantContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <VariantProvider>
        <App />
      </VariantProvider>
    </BrowserRouter>
  </StrictMode>,
)
