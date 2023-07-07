import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Background from './components/Background.jsx'
import { ThemeProvider } from './components/ThemeContext.jsx'
import Toggle from './components/ThemeToggle.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <Background>
      <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
            <Toggle />
          </div>
      <App />
      </Background>
      </ThemeProvider>
   
  </React.StrictMode>,
)
