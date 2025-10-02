'use client'

import Image from 'next/image'
import { Shield, Lock, Zap, Thermometer } from 'lucide-react'

export function DoorsHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white pt-16 lg:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium <span className="text-yellow-400">uPVC Doors</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Secure, stylish, and energy-efficient uPVC doors designed for modern homes in Chittoor District.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Lock className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">Secure</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">Energy Efficient</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">Weather Resistant</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919949360406"
                className="btn bg-white text-green-600 hover:bg-white/90 text-lg px-8 py-4 inline-flex items-center justify-center group"
              >
                <span>Free Consultation</span>
              </a>
              <a
                href="/gallery"
                className="btn border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4"
              >
                View Gallery
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm">25+ Years Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Thermometer className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">Thermal Insulation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">Secure Locking</span>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-black/5">
              <Image
                src="/images/upvc.jpg"
                alt="Premium uPVC Doors"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
