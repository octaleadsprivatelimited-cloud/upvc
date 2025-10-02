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

export function Features() {
  const features = [
    {
      icon: Thermometer,
      title: "Superior Thermal Insulation",
      description: "Advanced multi-chamber design provides excellent thermal insulation, keeping your home cool in summer and warm in winter.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: VolumeX,
      title: "Outstanding Sound Insulation",
      description: "Reduce outside noise by up to 40dB with our premium uPVC profiles and double glazing options.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Shield,
      title: "Weather Resistant",
      description: "Built to withstand harsh weather conditions including heavy rain, strong winds, and extreme temperatures.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Lock,
      title: "Enhanced Security",
      description: "Multi-point locking systems and reinforced frames provide maximum security for your home and family.",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Bug,
      title: "Termite Resistant",
      description: "Unlike wood, uPVC is completely termite-proof, ensuring your investment remains protected for decades.",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: Flame,
      title: "Fire Resistant",
      description: "uPVC material is self-extinguishing and doesn't contribute to fire spread, providing added safety.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description: "Reduce your electricity bills by up to 30% with our energy-efficient uPVC windows and doors.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    },
    {
      icon: CheckCircle,
      title: "Low Maintenance",
      description: "No painting, polishing, or regular maintenance required. Just clean with soap and water.",
      color: "text-teal-600",
      bgColor: "bg-teal-100"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Why Choose Our Tejesh Profine?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the premium features that make our uPVC windows and doors the perfect choice for your home in Chittoor District
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group"
            >
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
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600">Years Warranty</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">99%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}