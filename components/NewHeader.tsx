'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown, Mail, MapPin, Clock } from 'lucide-react'

export function NewHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Products',
      href: '/products',
      children: [
        { name: 'uPVC Windows', href: '/products/upvc-windows' },
        { name: 'uPVC Doors', href: '/products/upvc-doors' },
        { name: 'Sliding Windows', href: '/products/sliding-windows' },
        { name: 'Casement Windows', href: '/products/casement-windows' },
        { name: 'Tilt & Turn Windows', href: '/products/tilt-turn-windows' },
        { name: 'Sliding Doors', href: '/products/sliding-doors' },
        { name: 'Lift & Slide Doors', href: '/products/lift-slide-doors' },
      ]
    },
    {
      name: 'Services',
      href: '/services',
      children: [
        { name: 'Installation', href: '/services/installation' },
        { name: 'Maintenance', href: '/services/maintenance' },
        { name: 'Repair', href: '/services/repair' },
        { name: 'Custom Design', href: '/services/custom-design' },
      ]
    },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Top Header - Contact Info (Desktop Only) */}
      <div className="bg-orange-600 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 9949360406</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@tejeshprofine.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Desamma Nagar, Chittoor District</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-0 md:top-10 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.svg"
                  alt="Tejesh Profine"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Tejesh Profine
                </h1>
                <p className="text-sm text-gray-600">uPVC Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                  >
                    <span>{item.name}</span>
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {item.children && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="tel:+919949360406"
                className="btn btn-primary flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="tel:+919949360406"
                  className="btn btn-primary w-full justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call +91 9949360406
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
