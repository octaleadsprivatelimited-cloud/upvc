'use client'

import Link from 'next/link'
import { Phone, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react'

export function SimpleCTA() {
  const benefits = [
    "Free consultation and site visit",
    "25+ years warranty on all products",
    "Professional installation included",
    "Quality assurance with warranty coverage"
  ]

  return (
    <section className="py-20 gradient-bg text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600/90 to-primary-800/90"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-40 -translate-x-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Home?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Get a free consultation for your uPVC windows and doors in Chittoor District. 
            Our experts are ready to help you choose the perfect solution for your home.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 text-white/90">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="tel:+919949360406"
              className="btn bg-white text-primary-600 hover:bg-white/90 text-lg px-8 py-4 inline-flex items-center justify-center group shadow-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>Call +91 9949360406</span>
            </Link>
            
            <Link
              href="https://wa.me/919949360406?text=Hi, I'm interested in your uPVC windows and doors. Can you provide more information?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-lg px-8 py-4 inline-flex items-center justify-center group shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>WhatsApp Us</span>
            </Link>
          </div>

          {/* Additional Options */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Free Consultation</h3>
                <p className="text-sm text-white/80">Get expert advice for your project</p>
              </div>
            </Link>

            <Link
              href="/gallery"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">View Gallery</h3>
                <p className="text-sm text-white/80">See our completed projects</p>
              </div>
            </Link>

            <Link
              href="/about"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Learn More</h3>
                <p className="text-sm text-white/80">About our company and services</p>
              </div>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">25+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">5000+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">Free Installation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
