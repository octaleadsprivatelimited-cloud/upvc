// React automatic JSX runtime – no default import needed

export default function FAQ() {
  const faqs = [
    { q: 'How long does installation take?', a: 'Typically 3–5 days depending on scope.' },
    { q: 'Are uPVC windows energy efficient?', a: 'Yes, multi-chamber profiles and proper glazing reduce heat transfer.' },
    { q: 'Do you provide warranty?', a: 'Yes, on profiles, hardware, and installation workmanship.' },
  ]
  return (
    <div className="container-wide py-12">
      <h1 className="text-3xl font-bold">FAQ</h1>
      <div className="mt-6 space-y-4">
        {faqs.map(item => (
          <details key={item.q} className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">{item.q}</summary>
            <p className="text-slate-600 mt-2">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}

