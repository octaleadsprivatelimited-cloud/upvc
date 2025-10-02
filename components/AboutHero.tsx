'use client'

import { Users, Award, Clock, MapPin } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20 pt-36 lg:pt-40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Users className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About <span className="text-yellow-400">uPVC Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
            With over 25 years of experience, we are the leading uPVC windows and doors manufacturer 
            in Chittoor District, Andhra Pradesh. Quality, reliability, and customer satisfaction are our core values.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span className="font-semibold">25+ Years Experience</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="font-semibold">500+ Happy Customers</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">Chittoor District</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#our-story" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Users className="h-5 w-5" />
              Our Story
            </a>
            <a 
              href="tel:+919949360406" 
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Clock className="h-5 w-5" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
