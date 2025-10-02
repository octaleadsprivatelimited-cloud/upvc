// React automatic JSX runtime – no default import needed

export default function Services() {
  const services = [
    { title: 'uPVC Windows', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop' },
    { title: 'uPVC Doors', img: 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Installation', img: 'https://images.unsplash.com/photo-1523419409543-4473901b5b13?q=80&w=1200&auto=format&fit=crop' },
  ]
  return (
    <div className="container-wide py-12">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {services.map(s => (
          <div key={s.title} className="rounded-lg overflow-hidden border border-slate-200">
            <img src={s.img} alt={s.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-slate-600 mt-1">High-performance solutions tailored to your space and climate.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

