'use client'

import Link from 'next/link'
import { ArrowRight, Star, Shield, Zap } from 'lucide-react'

export function SimpleProducts() {
  const products = [
    {
      id: 1,
      name: "Casement Windows",
      description: "Classic design with modern functionality. Perfect for traditional and contemporary homes in Chittoor District.",
      features: ["Outward opening design", "Maximum ventilation", "Easy maintenance", "Weather tight seal"],
      href: "/products/casement-windows"
    },
    {
      id: 2,
      name: "Sliding Windows",
      description: "Space-saving design ideal for modern homes and apartments in Chittoor District.",
      features: ["Space-saving design", "Smooth operation", "Easy cleaning", "Modern appearance"],
      href: "/products/sliding-windows"
    },
    {
      id: 3,
      name: "Tilt & Turn Windows",
      description: "Versatile opening options for maximum ventilation and convenience.",
      features: ["Dual opening modes", "Maximum ventilation", "Child safety features", "Easy operation"],
      href: "/products/tilt-turn-windows"
    },
    {
      id: 4,
      name: "Sliding Doors",
      description: "Elegant entrance solutions for your home with smooth operation and modern design.",
      features: ["Smooth sliding action", "Space efficient", "Modern design", "Easy maintenance"],
      href: "/products/sliding-doors"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our extensive range of uPVC windows and doors designed to meet your specific needs and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-blue-800 font-medium">{product.name}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-900">Premium</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>


                <Link
                  href={product.href}
                  className="btn btn-outline w-full group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Product Categories */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Product Categories
            </h3>
            <p className="text-gray-600">
              Choose from our comprehensive range of uPVC solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "uPVC Windows",
                count: "15+ Variants",
                description: "Energy-efficient windows for all applications",
                icon: Shield,
                href: "/products/upvc-windows"
              },
              {
                title: "uPVC Doors",
                count: "10+ Variants", 
                description: "Secure and stylish entrance solutions",
                icon: Zap,
                href: "/products/upvc-doors"
              },
              {
                title: "Custom Solutions",
                count: "Made to Order",
                description: "Tailored solutions for unique requirements",
                icon: Star,
                href: "/services/custom-design"
              }
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-primary-50 transition-colors duration-300 group cursor-pointer">
                <Link href={category.href} className="block">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                      <category.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <span className="text-sm font-medium text-primary-600">{category.count}</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {category.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-primary-600 font-medium text-sm">
                    <span>Explore Products</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
