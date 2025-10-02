'use client'

import { Calendar, Users, Award, Target, CheckCircle } from 'lucide-react'

export function OurStory() {
  return (
    <section id="our-story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming the trusted uPVC solutions provider in Chittoor District
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded by <strong>V.Venktesulu</strong>, Tejesh Profine began its journey with a simple yet powerful vision 
                  to provide high-quality uPVC windows and doors to the people of Chittoor District.
                </p>
                <p>
                  <strong>V.Venktesulu</strong> started his career as a carpenter, bringing with him a deep understanding 
                  of woodwork and craftsmanship. With passion and dedication, he transitioned into the uPVC industry, 
                  combining traditional carpentry skills with modern uPVC technology.
                </p>
                <p>
                  Over the past 25+ years, his expertise and commitment to quality have transformed Tejesh Profine 
                  from a small workshop to a leading manufacturer, serving hundreds of satisfied customers across Andhra Pradesh.
                </p>
                <p>
                  His hands-on experience in carpentry gives him unique insights into what customers truly need, 
                  ensuring every product meets the highest standards of quality and durability.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8">
              <div className="text-center">
                <Calendar className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-purple-800 mb-2">25+ Years</h4>
                <p className="text-purple-700">of Excellence</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">500+ Customers</h4>
              <p className="text-gray-600">Satisfied customers across Chittoor District</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Assured</h4>
              <p className="text-gray-600">Premium materials and expert craftsmanship</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">100% Satisfaction</h4>
              <p className="text-gray-600">Customer satisfaction is our top priority</p>
            </div>
          </div>

          {/* Founder Section */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 mb-16 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Meet Our Founder</h3>
                <h4 className="text-2xl font-semibold mb-4 text-purple-200">V.Venktesulu</h4>
                <div className="space-y-4">
                  <p className="text-purple-100">
                    With over 25+ years of experience in the industry, V.Venktesulu brings a unique blend of 
                    traditional carpentry expertise and modern uPVC technology to Tejesh Profine.
                  </p>
                  <p className="text-purple-100">
                    Starting his career as a carpenter, he developed a deep understanding of woodwork and craftsmanship. 
                    His passion for quality and dedication to his craft led him to establish Tejesh Profine, 
                    combining traditional skills with innovative uPVC solutions.
                  </p>
                  <p className="text-purple-100">
                    His hands-on approach and attention to detail ensure that every product meets the highest 
                    standards of quality, durability, and customer satisfaction.
                  </p>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="bg-white/20 rounded-full p-4 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h5 className="text-xl font-bold mb-2">25+ Years Experience</h5>
                <p className="text-purple-200">From Carpenter to uPVC Expert</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Mission & Vision</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-purple-600 mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Our Mission
                </h4>
                <p className="text-gray-600">
                  To provide premium quality uPVC windows and doors that enhance the comfort, 
                  security, and energy efficiency of homes and businesses in Chittoor District.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-purple-600 mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Our Vision
                </h4>
                <p className="text-gray-600">
                  To be the leading uPVC solutions provider in Andhra Pradesh, known for 
                  innovation, quality, and exceptional customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
