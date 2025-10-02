'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Chittoor",
      rating: 5,
      content: "Excellent quality uPVC windows. The installation was professional and the results are amazing. The energy efficiency is remarkable and our electricity bills have reduced significantly. Highly recommended!",
      image: "/images/customer1.jpg",
      project: "Residential Windows"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Tirupati",
      rating: 5,
      content: "Great service and quality products. The team was very professional and completed the work on time. The sound insulation is excellent and we can't hear any outside noise. Very satisfied with the service.",
      image: "/images/customer2.jpg",
      project: "Sliding Windows"
    },
    {
      id: 3,
      name: "Venkatesh Reddy",
      location: "Madanapalle",
      rating: 5,
      content: "Best uPVC solutions in Chittoor District. The energy efficiency is remarkable and the sound insulation is excellent. The installation team was very professional and the after-sales service is outstanding.",
      image: "/images/customer3.jpg",
      project: "Complete Home Solution"
    },
    {
      id: 4,
      name: "Suresh Babu",
      location: "Puttur",
      rating: 5,
      content: "Outstanding quality and service. The uPVC doors are very sturdy and the windows provide excellent thermal insulation. The team was punctual and the work was completed as promised. Highly recommended!",
      image: "/images/customer4.jpg",
      project: "uPVC Doors & Windows"
    },
    {
      id: 5,
      name: "Lakshmi Devi",
      location: "Chittoor",
      rating: 5,
      content: "Very happy with the quality and service. The windows are maintenance-free and look beautiful. The installation was done professionally and the team was very courteous. Great value for money.",
      image: "/images/customer5.jpg",
      project: "Casement Windows"
    },
    {
      id: 6,
      name: "Ravi Kumar",
      location: "Tirupati",
      rating: 5,
      content: "Excellent workmanship and quality. The uPVC solutions have transformed our home. The energy savings are significant and the noise reduction is amazing. The team was very professional throughout the project.",
      image: "/images/customer6.jpg",
      project: "Energy Efficient Windows"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="section-title"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our uPVC solutions
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="testimonial-card group"
            >
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
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16 bg-primary-50 rounded-2xl p-8"
        >
          <motion.div variants={itemVariants} className="text-center">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
