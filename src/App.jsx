import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, useReducedMotion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Preloader from './components/Preloader'
import PageCurtain from './components/PageCurtain'
import useSmoothScroll, { getLenis } from './hooks/useSmoothScroll'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Process from './pages/Process'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  useSmoothScroll()
  const location = useLocation()
  const reduce = useReducedMotion()

  // The page content tracks `displayed`, which lags `location` by one curtain phase:
  // when the route changes the outgoing curtain fades to full teal, and only once it has
  // fully covered the screen (onExitComplete) do we swap the content + reset scroll, then
  // the incoming curtain fades away to reveal it. So the swap is never a flash of cream.
  const [displayed, setDisplayed] = useState(location)

  const handleCovered = () => {
    setDisplayed(location)
    if (!location.hash) {
      const lenis = getLenis()
      if (lenis) lenis.scrollTo(0, { immediate: true })
      else window.scrollTo(0, 0)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Preloader />
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes location={displayed}>
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

      <AnimatePresence mode="wait" initial={false} onExitComplete={handleCovered}>
        <PageCurtain key={location.pathname} reduce={reduce} />
      </AnimatePresence>
    </div>
  )
}
