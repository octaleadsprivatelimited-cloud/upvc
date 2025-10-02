'use client'

import { Phone, MapPin, Mail, Clock, MessageCircle } from 'lucide-react'

export function ContactInfo() {
  return (
    <section id="contact-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In <span className="text-green-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your home with premium uPVC solutions? Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 9949360406</p>
                    <p className="text-sm text-gray-500">Available 9AM - 6PM, Mon-Sat</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">Desamma Nagar</p>
                    <p className="text-gray-600">Chittoor District, Andhra Pradesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@tejeshprofine.com</p>
                    <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Free consultation and advice
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    25+ years of experience
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Premium quality materials
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Professional installation
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label htmlFor="service-select" className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select 
                    id="service-select"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    aria-label="Select service required"
                    title="Select service required"
                  >
                    <option>Select a service</option>
                    <option>uPVC Windows</option>
                    <option>uPVC Doors</option>
                    <option>Installation</option>
                    <option>Maintenance</option>
                    <option>Repair</option>
                    <option>Custom Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
