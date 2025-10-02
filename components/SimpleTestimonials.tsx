'use client'

import { Star, Quote } from 'lucide-react'

export function SimpleTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Chittoor",
      rating: 5,
      content: "Excellent quality uPVC windows. The installation was professional and the results are amazing. The energy efficiency is remarkable and our electricity bills have reduced significantly. Highly recommended!",
      project: "Residential Windows"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Tirupati",
      rating: 5,
      content: "Great service and quality products. The team was very professional and completed the work on time. The sound insulation is excellent and we can't hear any outside noise. Very satisfied with the service.",
      project: "Sliding Windows"
    },
    {
      id: 3,
      name: "Venkatesh Reddy",
      location: "Madanapalle",
      rating: 5,
      content: "Best uPVC solutions in Chittoor District. The energy efficiency is remarkable and the sound insulation is excellent. The installation team was very professional and the after-sales service is outstanding.",
      project: "Complete Home Solution"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our uPVC solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card group">
              <div className="relative">
                <Quote className="w-8 h-8 text-primary-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-primary-600 font-medium">
                  {testimonial.project}
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 bg-primary-50 rounded-2xl p-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">4.9/5 Customer Rating</h3>
            <p className="text-gray-600 mb-6">
              Based on 500+ customer reviews across Chittoor District
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">5000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
