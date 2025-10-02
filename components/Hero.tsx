'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Shield, Zap } from 'lucide-react'

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Premium uPVC Windows & Doors in Chittoor District",
      subtitle: "Energy-efficient, weather-resistant, and maintenance-free solutions for your home and office",
      image: "/images/hero-windows.jpg",
      features: ["25+ Years Warranty", "Energy Efficient", "Soundproof"]
    },
    {
      title: "Energy-Efficient Windows for Modern Homes",
      subtitle: "Reduce your electricity bills by up to 30% with our premium uPVC windows",
      image: "/images/hero-energy.jpg",
      features: ["Thermal Insulation", "Weather Resistant", "Low Maintenance"]
    },
    {
      title: "Soundproof Windows for Peaceful Living",
      subtitle: "Experience tranquility with our advanced soundproofing technology",
      image: "/images/hero-soundproof.jpg",
      features: ["40dB Noise Reduction", "Premium Quality", "Professional Installation"]
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            {/* Features */}
            <motion.div
              key={`features-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {slides[currentSlide].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/products"
                className="btn btn-primary bg-white text-primary-600 hover:bg-white/90 text-lg px-8 py-4 inline-flex items-center justify-center group"
              >
                <span>View Products</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="btn btn-secondary border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
              >
                Free Consultation
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 flex flex-wrap items-center gap-8 text-white/80"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm">25+ Years Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">Energy Efficient</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">Premium Quality</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-cover transition-all duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Weather Resistant</p>
                  <p className="text-sm text-gray-600">Built to last</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Energy Efficient</p>
                  <p className="text-sm text-gray-600">Save up to 30%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            title={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
