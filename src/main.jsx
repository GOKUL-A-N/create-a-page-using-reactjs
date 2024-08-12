import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className='bg-[#ecebfd] h-screen w-full'>
      <Header />
      <App />
      <Footer />
    </main>
  </StrictMode>,
)
