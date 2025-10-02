'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Award, Users, Clock, Shield, Zap } from 'lucide-react'

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    { number: "25+", label: "Years Experience", icon: Clock },
    { number: "5000+", label: "Happy Customers", icon: Users },
    { number: "10000+", label: "Projects Completed", icon: Award },
    { number: "25+", label: "Years Warranty", icon: Shield },
  ]

  const features = [
    "Premium quality materials sourced from trusted suppliers",
    "Expert installation team with 10+ years experience",
    "25+ years comprehensive warranty on all products",
    "Free consultation and site visit for all customers",
    "Quality assurance with warranty coverage",
    "24/7 customer support and after-sales service"
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
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              25+ Years of Excellence in Tejesh Profine
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are the leading uPVC windows and doors manufacturer in Chittoor District, 
              Andhra Pradesh, with over 25 years of experience in providing premium quality 
              solutions for residential and commercial properties.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="btn btn-primary inline-flex items-center justify-center"
              >
                Learn More About Us
                <Zap className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="btn btn-secondary"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us.jpg"
                alt="About Tejesh Profine Chittoor"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">25+ Years</p>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">5000+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-20 grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide premium quality uPVC windows and doors that enhance the comfort, 
              security, and energy efficiency of homes and offices in Chittoor District 
              and surrounding areas, while maintaining the highest standards of customer service.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted and preferred uPVC solutions provider in Andhra Pradesh, 
              known for our innovation, quality, and commitment to customer satisfaction, 
              while contributing to sustainable and energy-efficient building practices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
