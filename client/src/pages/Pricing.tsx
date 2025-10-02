// React automatic JSX runtime – no default import needed

export default function Pricing() {
  const tiers = [
    { name: 'Basic', price: '₹9,999', features: ['Site Survey', 'Standard Profiles', 'Basic Hardware'] },
    { name: 'Pro', price: '₹19,999', features: ['Custom Sizes', 'Multi-Chamber Profiles', 'Premium Hardware'] },
    { name: 'Elite', price: '₹29,999', features: ['Double Glazing', 'Acoustic Seals', 'Priority Install'] },
  ]
  return (
    <div className="container-wide py-12">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {tiers.map(t => (
          <div key={t.name} className="border rounded-lg p-6">
            <h3 className="font-semibold text-lg">{t.name}</h3>
            <p className="text-3xl font-extrabold mt-2">{t.price}</p>
            <ul className="mt-4 space-y-2 text-slate-600">
              {t.features.map(f => <li key={f}>• {f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

