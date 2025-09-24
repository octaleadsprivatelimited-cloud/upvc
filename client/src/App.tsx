import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import Testimonials from './pages/Testimonials'
import FAQ from './pages/FAQ'
import Careers from './pages/Careers'
import Landing1 from './pages/landings/Landing1'
import Landing2 from './pages/landings/Landing2'
import Landing3 from './pages/landings/Landing3'
import Landing4 from './pages/landings/Landing4'
import Landing5 from './pages/landings/Landing5'
import Landing6 from './pages/landings/Landing6'
import Landing7 from './pages/landings/Landing7'
import Landing8 from './pages/landings/Landing8'
import Landing9 from './pages/landings/Landing9'
import Landing10 from './pages/landings/Landing10'
import NotFound from './pages/NotFound'
import { applySEO } from './utils/seo'
import { seoByPath, defaultSEO } from './seoConfig'
import FloatingActions from './components/FloatingActions'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname as keyof typeof seoByPath
    applySEO(seoByPath[path] ?? defaultSEO)
  }, [location.pathname])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/upvc-windows" element={<Landing1 />} />
        <Route path="/upvc-doors" element={<Landing2 />} />
        <Route path="/sliding-windows" element={<Landing3 />} />
        <Route path="/casement-windows" element={<Landing4 />} />
        <Route path="/tilt-and-turn" element={<Landing5 />} />
        <Route path="/double-glazing" element={<Landing6 />} />
        <Route path="/soundproof-windows" element={<Landing7 />} />
        <Route path="/energy-efficient" element={<Landing8 />} />
        <Route path="/installation-services" element={<Landing9 />} />
        <Route path="/manufacturing" element={<Landing10 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FloatingActions />
    </Layout>
  )
}

