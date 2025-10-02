'use client'

import { ChevronRight, Camera, Image as ImageIcon } from 'lucide-react'

export function GalleryHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 pt-36 lg:pt-40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Camera className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our <span className="text-yellow-400">Project Gallery</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Explore our completed uPVC windows and doors projects in Chittoor District. 
            See the quality and craftsmanship that sets us apart.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-2">
              <ImageIcon className="h-5 w-5" />
              <span className="font-semibold">500+ Projects</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-2">
              <Camera className="h-5 w-5" />
              <span className="font-semibold">Before & After</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-2">
              <ChevronRight className="h-5 w-5" />
              <span className="font-semibold">Quality Assured</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919949360406" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Camera className="h-5 w-5" />
              View Our Work
            </a>
            <a 
              href="#gallery" 
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ImageIcon className="h-5 w-5" />
              Browse Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
