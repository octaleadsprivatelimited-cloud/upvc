// React automatic JSX runtime – no default import needed
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-wide py-20 text-center">
      <h1 className="text-5xl font-extrabold">404</h1>
      <p className="text-slate-600 mt-2">Page not found.</p>
      <Link to="/" className="inline-block mt-6 bg-brand text-white px-5 py-3 rounded">Go Home</Link>
    </div>
  )
}

