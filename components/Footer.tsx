'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { name: 'uPVC Windows', href: '/products/upvc-windows' },
      { name: 'uPVC Doors', href: '/products/upvc-doors' },
      { name: 'Sliding Windows', href: '/products/sliding-windows' },
      { name: 'Casement Windows', href: '/products/casement-windows' },
      { name: 'Tilt & Turn Windows', href: '/products/tilt-turn-windows' },
    ],
    services: [
      { name: 'Installation', href: '/services/installation' },
      { name: 'Maintenance', href: '/services/maintenance' },
      { name: 'Repair', href: '/services/repair' },
      { name: 'Custom Design', href: '/services/custom-design' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms & Conditions', href: '/terms-conditions' },
      { name: 'Sitemap', href: '/sitemap' },
    ]
  }

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                      <Image
                        src="/images/logo.svg"
                        alt="Tejesh Profine Chittoor"
                        fill
                        className="object-contain"
                      />
              </div>
              <div>
                <h3 className="text-xl font-bold">Tejesh Profine</h3>
                <p className="text-sm text-gray-400">Chittoor District</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading uPVC windows and doors manufacturer in Chittoor District, Andhra Pradesh. 
              Premium quality solutions for your home and office with 25+ years warranty.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a href="tel:+919949360406" className="text-gray-300 hover:text-white transition-colors">
                  +91 9949360406
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:info@tejeshprofine.com" className="text-gray-300 hover:text-white transition-colors">
                  info@tejeshprofine.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">
                  Desamma Nagar, Chittoor District, Andhra Pradesh
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm">
                Get the latest updates on our products and services
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-primary-600 text-white rounded-r-lg hover:bg-primary-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Tejesh Profine Chittoor. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
