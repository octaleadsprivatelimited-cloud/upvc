import { Metadata } from 'next'
import { DoorsFeatures } from '@/components/DoorsFeatures'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'uPVC Doors in Chittoor District | Premium Quality Doors | Secure & Stylish',
  description: 'Premium uPVC doors in Chittoor District, Andhra Pradesh. Secure, stylish, and energy-efficient doors with 25+ years warranty. Call +91 9949360406',
  keywords: [
    'uPVC doors Chittoor', 'secure doors', 'stylish doors', 'energy efficient doors',
    'uPVC door manufacturers Andhra Pradesh', 'best uPVC doors', 'door installation Chittoor',
    'custom uPVC doors', 'modern doors', 'durable doors', 'low maintenance doors'
  ],
  openGraph: {
    title: 'uPVC Doors in Chittoor District | Premium Quality Doors',
    description: 'Premium uPVC doors in Chittoor District, Andhra Pradesh. Secure, stylish, and energy-efficient doors with 25+ years warranty.',
    images: ['/images/upvc-doors-og.jpg'],
  },
}

export default function UPVCDoorsPage() {
  return (
    <>
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-16 lg:pt-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_25%),radial-gradient(circle_at_80%_30%,white_0%,transparent_20%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full mb-4">uPVC Doors</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Premium <span className="text-yellow-300">uPVC Doors</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6">
              Secure, stylish, and energy-efficient doors designed for modern homes in Chittoor District.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Secure</span>
              <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Stylish</span>
              <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Energy Efficient</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="tel:+919949360406" className="btn bg-white text-blue-700 hover:bg-white/90 px-6 py-3">Free Consultation</a>
              <a href="/gallery" className="btn border-white text-white hover:bg-white hover:text-blue-700 px-6 py-3">View Gallery</a>
            </div>
          </div>
        </div>
      </section>

      <DoorsFeatures />
      <WhatsAppFloat />
    </>
  )
}
