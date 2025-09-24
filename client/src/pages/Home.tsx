import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function Home() {
  const slides = [
    'https://images.unsplash.com/photo-1523419409543-4473901b5b13?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
  ]
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [msg, setMsg] = useState('')

  async function submitQuick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setStatus('loading')
    try {
      const res = await fetch('http://localhost:5175/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
      })
      if (!res.ok) throw new Error('failed')
      setStatus('success')
      setMsg('Thank you! We will contact you shortly.')
      form.reset()
    } catch {
      setStatus('error'); setMsg('Please try again later.')
    }
  }

  return (
    <div>
      <section className="relative overflow-hidden">
        <Swiper modules={[Navigation, Autoplay]} navigation autoplay={{ delay: 3500 }} loop className="h-[70dvh]">
          {slides.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt="Hero banner" className="w-full h-[70dvh] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="absolute inset-0 container-wide grid md:grid-cols-2 gap-8 items-center">
          <div className="pt-10 md:pt-0">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold max-w-3xl">Premium uPVC Windows & Doors for Modern Spaces</h1>
            <p className="text-white/90 mt-4 max-w-2xl">Energy-efficient, weatherproof and sound-insulating systems engineered for elegant living.</p>
            <div className="mt-6 flex gap-4">
              <Link to="/services" className="bg-brand text-white px-5 py-3 rounded shadow">Explore Services</Link>
              <Link to="/portfolio" className="bg-white text-slate-900 px-5 py-3 rounded">View Work</Link>
            </div>
          </div>
          <form onSubmit={submitQuick} className="bg-white rounded-xl p-6 shadow-xl mt-6 md:mt-0">
            <h3 className="text-xl font-semibold">Get a Free Quote</h3>
            <div className="mt-4 grid grid-cols-1 gap-3">
              <input className="border border-slate-300 rounded px-3 py-2" name="name" placeholder="Full Name" required />
              <input className="border border-slate-300 rounded px-3 py-2" name="phone" placeholder="Phone" required />
              <input className="border border-slate-300 rounded px-3 py-2" name="email" placeholder="Email" type="email" />
              <button disabled={status==='loading'} className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded">
                {status==='loading' ? 'Sending...' : 'Request Quote'}
              </button>
              {status!=='idle' && <p className={`${status==='success'?'text-emerald-600':'text-red-600'}`}>{msg}</p>}
            </div>
          </form>
        </div>
      </section>
      <section className="container-wide py-16 grid md:grid-cols-3 gap-8">
        {["Energy Efficient","Sound Insulation","Weather Resistant"].map((title) => (
          <div key={title} className="rounded-lg border border-slate-200 p-6">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-slate-600 mt-2">High-performance profiles and glazing deliver measurable comfort and savings.</p>
          </div>
        ))}
      </section>
    </div>
  )
}

