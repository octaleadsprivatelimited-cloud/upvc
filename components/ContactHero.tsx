'use client'

import { Phone, MapPin, Mail, Clock } from 'lucide-react'

export function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 pt-36 lg:pt-40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Phone className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Contact <span className="text-yellow-400">Us</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
            Get in touch with us for a free consultation. We&apos;re here to help you 
            choose the perfect uPVC solutions for your home or business.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">+91 9949360406</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">Desamma Nagar</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Mon-Sat 9AM-6PM</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919949360406" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <a 
              href="#contact-form" 
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
