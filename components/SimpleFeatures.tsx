'use client'

import { 
  Thermometer, 
  VolumeX, 
  Shield, 
  Lock, 
  Bug, 
  Flame,
  Zap,
  CheckCircle
} from 'lucide-react'

export function SimpleFeatures() {
  const features = [
    {
      icon: Thermometer,
      title: "Superior Thermal Insulation",
      description: "Our uPVC windows provide excellent thermal insulation, maintaining comfortable indoor temperatures year-round and improving energy efficiency.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: VolumeX,
      title: "Advanced Sound Insulation",
      description: "Experience peace and quiet with our soundproof uPVC windows that reduce external noise by up to 40dB, perfect for busy areas in Chittoor District.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Shield,
      title: "Weather Resistance",
      description: "Built to withstand harsh weather conditions including heavy rains, strong winds, and extreme temperatures common in Andhra Pradesh.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Lock,
      title: "Enhanced Security",
      description: "Multi-point locking systems and reinforced frames provide maximum security for your home and family in Chittoor District.",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Bug,
      title: "Termite Resistant",
      description: "Unlike wooden windows, our uPVC windows are completely termite and pest resistant, making them perfect for tropical climates.",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: Flame,
      title: "Fire Resistant",
      description: "Flame retardant properties ensure your windows won't contribute to fire spread, providing added safety for your family.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose Our Tejesh Profine?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the premium features that make our uPVC windows and doors the perfect choice for your home in Chittoor District
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="relative">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center text-primary-600 font-medium">
                  <Zap className="w-4 h-4 mr-2" />
                  <span className="text-sm">Premium Quality</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Additional Benefits
            </h3>
            <p className="text-gray-600">
              Our uPVC solutions come with comprehensive benefits that ensure your complete satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "25+ Years Warranty", desc: "Comprehensive warranty coverage" },
              { title: "Free Installation", desc: "Professional installation included" },
              { title: "Maintenance Free", desc: "No painting or polishing required" },
              { title: "Custom Sizes", desc: "Made to fit your exact requirements" }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
