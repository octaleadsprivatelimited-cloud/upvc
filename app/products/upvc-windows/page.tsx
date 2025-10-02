import { Metadata } from 'next'
import { WindowsFeatures } from '@/components/WindowsFeatures'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'uPVC Windows in Chittoor District | Premium Quality Windows | Energy Efficient',
  description: 'Premium uPVC windows in Chittoor District, Andhra Pradesh. Energy-efficient, soundproof, weather-resistant windows with 25+ years warranty. Call +91 9949360406',
  keywords: [
    'uPVC windows Chittoor', 'energy efficient windows', 'soundproof windows', 'weather resistant windows',
    'uPVC window manufacturers Andhra Pradesh', 'best uPVC windows', 'window installation Chittoor',
    'custom uPVC windows', 'modern windows', 'durable windows', 'low maintenance windows'
  ],
  openGraph: {
    title: 'uPVC Windows in Chittoor District | Premium Quality Windows',
    description: 'Premium uPVC windows in Chittoor District, Andhra Pradesh. Energy-efficient, soundproof, weather-resistant windows with 25+ years warranty.',
    images: ['/images/upvc-windows-og.jpg'],
  },
}

export default function UPVCWindowsPage() {
  return (
    <>
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-16 lg:pt-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_25%),radial-gradient(circle_at_80%_30%,white_0%,transparent_20%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full mb-4">uPVC Windows</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Premium <span className="text-yellow-300">uPVC Windows</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6">
              Energy-efficient, soundproof, and weather-resistant windows designed for modern homes in Chittoor District.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Energy Efficient</span>
              <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Soundproof</span>
              <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Weather Resistant</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="tel:+919949360406" className="btn bg-white text-blue-700 hover:bg-white/90 px-6 py-3">Free Consultation</a>
              <a href="/gallery" className="btn border-white text-white hover:bg-white hover:text-blue-700 px-6 py-3">View Gallery</a>
            </div>
          </div>
        </div>
      </section>

      <WindowsFeatures />
      <WhatsAppFloat />
    </>
  )
}
