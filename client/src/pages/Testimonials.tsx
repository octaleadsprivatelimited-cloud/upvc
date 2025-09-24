// React automatic JSX runtime – no default import needed

export default function Testimonials() {
  const testimonials = [
    { name: 'Anita', text: 'The windows have transformed our home. Noticeably quieter and cooler.' },
    { name: 'Ravi', text: 'Professional installation and premium feel. Highly recommend.' },
    { name: 'Meera', text: 'Excellent service with attention to detail.' },
  ]
  return (
    <div className="container-wide py-12">
      <h1 className="text-3xl font-bold">Testimonials</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {testimonials.map(t => (
          <blockquote key={t.name} className="border rounded-lg p-6 bg-slate-50">
            <p className="text-slate-700">“{t.text}”</p>
            <footer className="mt-3 text-slate-500">— {t.name}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  )
}

