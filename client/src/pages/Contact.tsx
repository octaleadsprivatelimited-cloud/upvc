import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setStatus('loading')
    try {
      const res = await fetch('http://localhost:5175/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setMessage('Thanks! We will reach out shortly.')
      form.reset()
    } catch (err) {
      setStatus('error')
      setMessage('Something went wrong. Please try again later.')
    }
  }

  return (
    <div className="container-wide py-12">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form onSubmit={onSubmit} className="mt-6 grid md:grid-cols-2 gap-4 max-w-3xl">
        <input className="border border-slate-300 rounded px-3 py-2" name="name" placeholder="Full Name" required />
        <input className="border border-slate-300 rounded px-3 py-2" name="phone" placeholder="Phone" required />
        <input className="border border-slate-300 rounded px-3 py-2 md:col-span-2" name="email" placeholder="Email" type="email" />
        <textarea className="border border-slate-300 rounded px-3 py-2 md:col-span-2" name="message" placeholder="Your message" rows={4} />
        <button disabled={status==='loading'} className="bg-brand hover:bg-brand-dark text-white px-5 py-3 rounded md:col-span-2">
          {status==='loading' ? 'Sending...' : 'Send Message'}
        </button>
        {status !== 'idle' && <p className={`md:col-span-2 ${status==='success' ? 'text-emerald-600' : 'text-red-600'}`}>{message}</p>}
      </form>
    </div>
  )
}

