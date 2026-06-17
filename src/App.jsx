import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Preloader from './components/Preloader'
import useSmoothScroll from './hooks/useSmoothScroll'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Process from './pages/Process'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  useSmoothScroll()
  return (
    <div className="flex min-h-screen flex-col">
      <Preloader />
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
