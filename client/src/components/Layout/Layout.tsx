import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'

const phoneNumber = '+91-9876543210'
const whatsappLink = 'https://wa.me/919876543210'

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.1 1.6 5.88L0 24l6.3-1.64A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a9.93 9.93 0 01-5.07-1.39l-.36-.21-3.75.98 1-3.65-.24-.37A9.93 9.93 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.36-7.3c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.9 1.12-.16.19-.33.21-.62.07-.29-.14-1.23-.45-2.35-1.44-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.12-.59.12-.12.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49l-.54-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3 .14.19 2.03 3.1 4.93 4.34.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.35.24-.66.24-1.23.17-1.35-.07-.12-.26-.19-.55-.33z"/>
    </svg>
  )
}

function TopBar() {
  return (
    <div className="hidden md:block bg-slate-900 text-white text-sm">
      <div className="container-wide flex items-center justify-between py-2">
        <div className="flex items-center gap-5">
          <span>Call: {phoneNumber}</span>
          <a className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300" href={whatsappLink} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>
        <a className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-3 py-1 rounded" href={`tel:${phoneNumber}`}>
          <PhoneIcon className="w-4 h-4" />
          Call Now
        </a>
      </div>
    </div>
  )
}

function MobileMenu({ open, onClose }: { open: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-slate-900/90 text-white"
        >
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="container-wide py-6"
          >
            <button aria-label="Close menu" className="ml-auto block" onClick={onClose}>
              <XMarkIcon className="w-8 h-8" />
            </button>
            <nav className="mt-8 space-y-6 text-2xl">
              {[
                ['Home','/'], ['About','/about'], ['Services','/services'], ['Portfolio','/portfolio'], ['Blog','/blog'], ['Pricing','/pricing'], ['Testimonials','/testimonials'], ['FAQ','/faq'], ['Careers','/careers'], ['Contact','/contact']
              ].map(([label, href]) => (
                <Link key={href} to={href} onClick={onClose} className="block hover:text-emerald-300">{label}</Link>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
      <TopBar />
      <div className="container-wide flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Tejesh Profine" className="h-8" />
          <span className="font-bold text-slate-900">Tejesh Profine</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <Link to="/about" className="hover:text-slate-900">About</Link>
          <Link to="/services" className="hover:text-slate-900">Services</Link>
          <Link to="/portfolio" className="hover:text-slate-900">Portfolio</Link>
          <Link to="/blog" className="hover:text-slate-900">Blog</Link>
          <Link to="/pricing" className="hover:text-slate-900">Pricing</Link>
          <Link to="/contact" className="hover:text-slate-900">Contact</Link>
        </nav>
        <button aria-label="Open menu" className="md:hidden" onClick={() => setOpen(true)}>
          <Bars3Icon className="w-7 h-7" />
        </button>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="container-wide py-12">
        <div className="hidden md:grid grid-cols-4 gap-8">
          <div>
            <img src="/logo.svg" alt="Tejesh Profine" className="h-10 mb-4" />
            <p className="text-slate-300">Premium uPVC windows & doors engineered for performance and aesthetics.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/upvc-windows">uPVC Windows</Link></li>
              <li><Link to="/upvc-doors">uPVC Doors</Link></li>
              <li><Link to="/installation-services">Installation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Tejesh Profine</li>
              <li>123 Industrial Area, Hyderabad, Telangana</li>
              <li>Email: info@tejeshprofine.com</li>
              <li>Phone: {phoneNumber}</li>
              <li className="flex gap-3 pt-2">
                <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-emerald-400">WA</a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-emerald-400">FB</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-emerald-400">IG</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:hidden divide-y divide-slate-800">
          {[
            { title: 'Company', content: (
              <ul className="space-y-2 text-slate-300 py-3">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            )},
            { title: 'Services', content: (
              <ul className="space-y-2 text-slate-300 py-3">
                <li><Link to="/upvc-windows">uPVC Windows</Link></li>
                <li><Link to="/upvc-doors">uPVC Doors</Link></li>
                <li><Link to="/installation-services">Installation</Link></li>
              </ul>
            )},
            { title: 'Contact', content: (
              <ul className="space-y-2 text-slate-300 py-3">
                <li>Tejesh Profine</li>
                <li>123 Industrial Area, Hyderabad, Telangana</li>
                <li>Email: info@tejeshprofine.com</li>
                <li>Phone: {phoneNumber}</li>
                <li className="flex gap-3 pt-2">
                  <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-emerald-400">WA</a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-emerald-400">FB</a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-emerald-400">IG</a>
                </li>
              </ul>
            )},
          ].map(({ title, content }) => (
            <details key={title}>
              <summary className="py-4 font-semibold">{title}</summary>
              {content}
            </details>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-slate-400 text-sm">
        © <span id="year">{new Date().getFullYear()}</span> Tejesh Profine. Designed and developed by <a className="underline hover:text-white" href="https://www.octaleads.com/" target="_blank" rel="noreferrer">Octaleads Pvt Ltd. (https://www.octaleads.com/)</a>.
      </div>
    </footer>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

