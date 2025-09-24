// React automatic JSX runtime – no default import needed

export default function Blog() {
  const posts = [
    { title: 'Choosing the Right uPVC Window', date: 'Aug 10, 2025' },
    { title: 'Benefits of Double Glazing', date: 'Sep 02, 2025' },
    { title: 'Installation Checklist', date: 'Sep 14, 2025' },
  ]
  return (
    <div className="container-wide py-12">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {posts.map(p => (
          <article key={p.title} className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <time className="text-sm text-slate-500">{p.date}</time>
            <p className="text-slate-600 mt-2">Insights to help you plan your next upgrade.</p>
          </article>
        ))}
      </div>
    </div>
  )
}

