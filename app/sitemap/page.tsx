import { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { ArrowRight, Home, Package, Wrench, Info, Camera, BookOpen, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sitemap | uPVC Solutions Chittoor | All Pages',
  description: 'Complete sitemap of uPVC Solutions Chittoor website. Find all our pages including products, services, and information pages.',
  keywords: [
    'sitemap uPVC Chittoor', 'website pages', 'navigation',
    'uPVC Solutions sitemap', 'Chittoor sitemap', 'all pages'
  ],
  openGraph: {
    title: 'Sitemap | uPVC Solutions Chittoor',
    description: 'Complete sitemap of uPVC Solutions Chittoor website. Find all our pages including products, services, and information pages.',
    images: ['/images/sitemap-og.jpg'],
  },
}

export default function SitemapPage() {
  const pages = [
    {
      category: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', url: '/', description: 'Welcome to uPVC Solutions Chittoor' },
        { name: 'About Us', url: '/about', description: 'Learn about our company and experience' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
        { name: 'Gallery', url: '/gallery', description: 'View our completed projects' },
        { name: 'Blog', url: '/blog', description: 'Latest news and tips' },
      ]
    },
    {
      category: 'Products',
      icon: Package,
      pages: [
        { name: 'uPVC Windows', url: '/products/upvc-windows', description: 'Premium uPVC windows for your home' },
        { name: 'uPVC Doors', url: '/products/upvc-doors', description: 'Secure and stylish uPVC doors' },
        { name: 'Casement Windows', url: '/products/casement-windows', description: 'Energy-efficient casement windows' },
        { name: 'Tilt & Turn Windows', url: '/products/tilt-turn-windows', description: 'Versatile tilt and turn windows' },
        { name: 'Sliding Windows', url: '/products/sliding-windows', description: 'Space-saving sliding windows' },
        { name: 'Sliding Doors', url: '/products/sliding-doors', description: 'Modern sliding doors' },
        { name: 'Lift & Slide Doors', url: '/products/lift-slide-doors', description: 'Premium lift and slide doors' },
      ]
    },
    {
      category: 'Services',
      icon: Wrench,
      pages: [
        { name: 'Installation', url: '/services/installation', description: 'Professional installation services' },
        { name: 'Maintenance', url: '/services/maintenance', description: 'Regular maintenance services' },
        { name: 'Repair', url: '/services/repair', description: 'Expert repair services' },
        { name: 'Custom Design', url: '/services/custom-design', description: 'Bespoke design solutions' },
      ]
    },
    {
      category: 'Legal & Information',
      icon: Info,
      pages: [
        { name: 'Privacy Policy', url: '/privacy-policy', description: 'Our privacy policy and data protection' },
        { name: 'Terms & Conditions', url: '/terms-conditions', description: 'Terms and conditions of service' },
        { name: 'Sitemap', url: '/sitemap', description: 'Complete website navigation' },
      ]
    }
  ]

  return (
    <>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20 pt-36 lg:pt-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Website Sitemap
            </h1>
            <p className="text-xl md:text-2xl text-purple-100">
              Find all pages on our website. Navigate easily to any section you need.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Quick Navigation */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Navigation</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/" className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <Home className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-800 font-medium">Home</span>
                </Link>
                <Link href="/products" className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <Package className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 font-medium">Products</span>
                </Link>
                <Link href="/services" className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  <Wrench className="w-5 h-5 text-orange-600" />
                  <span className="text-orange-800 font-medium">Services</span>
                </Link>
                <Link href="/contact" className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <Phone className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-800 font-medium">Contact</span>
                </Link>
              </div>
            </div>

            {/* Detailed Sitemap */}
            <div className="space-y-8">
              {pages.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <category.icon className="w-6 h-6 text-purple-600" />
                    <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.pages.map((page, pageIndex) => (
                      <Link
                        key={pageIndex}
                        href={page.url}
                        className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                            {page.name}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">{page.description}</p>
                          <span className="text-purple-600 text-sm font-medium group-hover:underline">
                            {page.url}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-bold mb-6">Need Help Finding Something?</h2>
              <p className="text-purple-100 mb-6">
                If you can&apos;t find what you&apos;re looking for, feel free to contact us directly.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                  <p className="text-purple-100 mb-2">📞 +91 9949360406</p>
                  <p className="text-purple-100 mb-2">📍 Desamma Nagar, Chittoor District, Andhra Pradesh</p>
                  <p className="text-purple-100">✉️ info@tejeshprofine.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
                  <div className="space-y-2">
                    <Link href="/contact" className="block text-purple-100 hover:text-white transition-colors">
                      → Free Consultation
                    </Link>
                    <Link href="/products" className="block text-purple-100 hover:text-white transition-colors">
                      → View Our Products
                    </Link>
                    <Link href="/services" className="block text-purple-100 hover:text-white transition-colors">
                      → Our Services
                    </Link>
                    <Link href="/gallery" className="block text-purple-100 hover:text-white transition-colors">
                      → See Our Work
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
