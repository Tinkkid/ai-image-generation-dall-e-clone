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
      <div className="absolute right-0 top-0 mr-[13rem] mt-4 md:mr-[14rem] md:mt-4">
            <Toggle />
          </div>
      <App />
      </Background>
      </ThemeProvider>
   
  </React.StrictMode>,
)
