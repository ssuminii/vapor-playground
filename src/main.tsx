import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider, createThemeConfig } from '@vapor-ui/core'
import '@vapor-ui/core/styles.css'

const themeConfig = createThemeConfig({
  appearance: 'light',
  radius: 'md',
  scaling: 1.0,
  storageKey: 'my-vite-app-theme', // index.html의 storageKey와 일치
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider config={themeConfig}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
