'use client'

import { ImageIcon, Star, MapPin, Calendar } from 'lucide-react'

export function ProjectGallery() {
  const projects = [
    {
      id: 1,
      title: "Modern Villa Windows",
      location: "Chittoor City",
      date: "2024",
      type: "Casement Windows",
      rating: 5,
      description: "Premium uPVC casement windows for a modern villa with energy-efficient design."
    },
    {
      id: 2,
      title: "Commercial Office Doors",
      location: "Tirupati",
      date: "2024",
      type: "Sliding Doors",
      rating: 5,
      description: "Large sliding doors for commercial office space with enhanced security features."
    },
    {
      id: 3,
      title: "Residential Complex",
      location: "Puttur",
      date: "2023",
      type: "Tilt & Turn Windows",
      rating: 5,
      description: "Complete window solution for residential complex with tilt and turn functionality."
    },
    {
      id: 4,
      title: "Heritage Home Restoration",
      location: "Chittoor",
      date: "2023",
      type: "Custom Windows",
      rating: 5,
      description: "Custom-designed windows maintaining heritage architecture with modern uPVC benefits."
    },
    {
      id: 5,
      title: "Apartment Building",
      location: "Madanapalle",
      date: "2023",
      type: "Sliding Windows",
      rating: 5,
      description: "Energy-efficient sliding windows for multi-story apartment building."
    },
    {
      id: 6,
      title: "Showroom Project",
      location: "Chittoor",
      date: "2024",
      type: "Lift & Slide Doors",
      rating: 5,
      description: "Premium lift and slide doors for commercial showroom with large glass panels."
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Completed Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our portfolio of successful uPVC installations across Chittoor District. 
            Each project showcases our commitment to quality and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-blue-700 font-semibold">Project Image</p>
                  <p className="text-blue-600 text-sm">Click to view</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  )
}
