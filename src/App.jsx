import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Preloader from './components/Preloader'
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

  // After the outgoing page has finished fading out, snap the incoming page to the top
  // so it mounts already scrolled up — no mid-fade jump. (Hash anchors are handled by
  // ScrollToTop once the new page is mounted.)
  const resetScroll = () => {
    if (location.hash) return
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Preloader />
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false} onExitComplete={resetScroll}>
          <motion.div
            key={location.pathname}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/process" element={<Process />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
