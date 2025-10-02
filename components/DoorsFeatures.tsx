'use client'

import { Shield, Lock, Zap, Thermometer, Wrench, Star, CheckCircle } from 'lucide-react'

export function DoorsFeatures() {
  const features = [
    {
      icon: Lock,
      title: "Enhanced Security",
      description: "Multi-point locking system with premium hardware for maximum security",
      color: "text-red-500"
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description: "Superior thermal insulation provides excellent energy efficiency",
      color: "text-yellow-500"
    },
    {
      icon: Shield,
      title: "Weather Resistant",
      description: "Withstand extreme weather conditions with superior durability",
      color: "text-green-500"
    },
    {
      icon: Thermometer,
      title: "Thermal Insulation",
      description: "Multi-chamber design provides excellent thermal performance",
      color: "text-blue-500"
    },
    {
      icon: Wrench,
      title: "Low Maintenance",
      description: "No painting, no rusting, no termite damage - maintenance-free for life",
      color: "text-purple-500"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "High-grade uPVC materials with European standard hardware",
      color: "text-orange-500"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our <span className="text-green-600">uPVC Doors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our uPVC doors are designed to provide superior security, durability, and energy efficiency for your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality Assurance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-semibold text-gray-900">ISO Certified</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-semibold text-gray-900">25+ Years Warranty</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-semibold text-gray-900">Premium Materials</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
