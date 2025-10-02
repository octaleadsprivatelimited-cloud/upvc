// React automatic JSX runtime – no default import needed

const phoneNumber = '+91-9876543210'
const whatsappLink = 'https://wa.me/919876543210'

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href={`tel:${phoneNumber}`} className="bg-emerald-500 text-white rounded-full px-4 py-3 shadow hover:bg-emerald-400">Call</a>
      <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-emerald-600 text-white rounded-full px-4 py-3 shadow hover:bg-emerald-500">WhatsApp</a>
    </div>
  )
}

