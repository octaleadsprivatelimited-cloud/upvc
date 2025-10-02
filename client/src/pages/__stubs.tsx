// React automatic JSX runtime – no default import needed

export function PageStub({ title }: { title: string }) {
  return (
    <div className="container-wide py-12">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-4 text-slate-600 max-w-3xl">Content coming soon.</p>
    </div>
  )
}
