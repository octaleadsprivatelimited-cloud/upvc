// React automatic JSX runtime – no default import needed

export default function Portfolio() {
  const images = Array.from({ length: 9 }).map((_, i) => `https://picsum.photos/seed/upvc-${i}/600/400`)
  return (
    <div className="container-wide py-12">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Project ${idx+1}`} className="rounded-lg w-full h-56 object-cover" />
        ))}
      </div>
    </div>
  )
}

