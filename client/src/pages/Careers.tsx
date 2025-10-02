// React automatic JSX runtime – no default import needed

export default function Careers() {
  const roles = [
    { title: 'Sales Executive', location: 'Hyderabad' },
    { title: 'Installation Technician', location: 'Hyderabad' },
    { title: 'Production Supervisor', location: 'Hyderabad' },
  ]
  return (
    <div className="container-wide py-12">
      <h1 className="text-3xl font-bold">Careers</h1>
      <p className="text-slate-600 mt-2">Join a team that’s redefining performance and aesthetics in fenestration.</p>
      <div className="mt-6 space-y-4">
        {roles.map(r => (
          <div key={r.title} className="border rounded-lg p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{r.title}</h3>
              <p className="text-slate-500 text-sm">{r.location}</p>
            </div>
            <a href="/contact" className="bg-brand text-white px-4 py-2 rounded">Apply</a>
          </div>
        ))}
      </div>
    </div>
  )
}

