'use client'

import { Play, Camera, Users, Award } from 'lucide-react'

export function VideoGallery() {
  const videos = [
    {
      id: 1,
      title: "Installation Process",
      description: "Watch our expert team install uPVC windows with precision and care",
      duration: "3:45",
      views: "2.5K"
    },
    {
      id: 2,
      title: "Customer Testimonial",
      description: "Hear from our satisfied customers about their experience",
      duration: "2:30",
      views: "1.8K"
    },
    {
      id: 3,
      title: "Quality Testing",
      description: "See how we test our uPVC products for durability and performance",
      duration: "4:15",
      views: "3.2K"
    },
    {
      id: 4,
      title: "Showroom Tour",
      description: "Take a virtual tour of our showroom and see our products",
      duration: "5:20",
      views: "4.1K"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-yellow-400">Video</span> Gallery
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Watch our videos to see our work in action, hear from customers, 
            and learn about our uPVC solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {videos.map((video) => (
            <div key={video.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
              <div className="relative h-48 bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full p-4 mb-4 group-hover:bg-white/30 transition-colors duration-300">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-blue-800 font-semibold">Video Preview</p>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{video.title}</h3>
                <p className="text-blue-100 text-sm mb-4">{video.description}</p>
                
                <div className="flex items-center justify-between text-sm text-blue-200">
                  <div className="flex items-center gap-1">
                    <Camera className="h-4 w-4" />
                    <span>{video.views} views</span>
                  </div>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg transition-colors duration-300">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Why Choose Our uPVC Solutions?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-yellow-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <h4 className="text-xl font-bold mb-2">500+ Happy Customers</h4>
                <p className="text-blue-100">Satisfied customers across Chittoor District</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-black" />
                </div>
                <h4 className="text-xl font-bold mb-2">25+ Years Experience</h4>
                <p className="text-blue-100">Decades of expertise in uPVC solutions</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-black" />
                </div>
                <h4 className="text-xl font-bold mb-2">Quality Assured</h4>
                <p className="text-blue-100">Premium materials and expert installation</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919949360406" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-300"
              >
                Call +91 9949360406
              </a>
              <a 
                href="/contact" 
                className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300"
              >
                Visit Our Showroom
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
