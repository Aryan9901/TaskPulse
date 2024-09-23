import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './globals.css'
import { ThemeProvider } from './context/ThemeProvider.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
    <Router>
      <App />
    </Router>
    {/* </ThemeProvider> */}
  </StrictMode>,
)
