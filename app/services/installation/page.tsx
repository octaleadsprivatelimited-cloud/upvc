import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Professional uPVC Installation Services | uPVC Solutions Chittoor',
  description: 'Expert uPVC window and door installation services in Chittoor District. Professional installation with warranty. Call +91 9949360406 for free consultation.',
  keywords: [
    'uPVC installation',
    'window installation Chittoor',
    'door installation Chittoor',
    'professional installation',
    'uPVC installer',
    'Chittoor District installation',
    'Andhra Pradesh uPVC'
  ],
  openGraph: {
    title: 'Professional uPVC Installation Services | uPVC Solutions Chittoor',
    description: 'Expert uPVC window and door installation services in Chittoor District. Professional installation with warranty.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function InstallationPage() {
  return (
    <>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional uPVC Installation Services
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Expert installation with 25+ years warranty. We ensure perfect fit and maximum energy efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919949360406" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now: +91 9949360406
              </a>
              <a 
                href="https://wa.me/919949360406" 
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Professional Installation Process
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Site Survey</h3>
                <p className="text-gray-600">Free detailed measurement and assessment of your space</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
                <p className="text-gray-600">Tailored solutions based on your requirements and preferences</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Precision Installation</h3>
                <p className="text-gray-600">Expert installation by certified professionals</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Check</h3>
                <p className="text-gray-600">Thorough inspection and testing for perfect performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our Installation Services?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold mb-3">Expert Technicians</h3>
                <p className="text-gray-600">Certified professionals with 10+ years experience in uPVC installation</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Quick Installation</h3>
                <p className="text-gray-600">Fast and efficient installation without compromising on quality</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold mb-3">Warranty Coverage</h3>
                <p className="text-gray-600">25+ years warranty on installation work and materials</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold mb-3">Clean Installation</h3>
                <p className="text-gray-600">Minimal disruption to your daily routine with clean work practices</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl mb-4">📏</div>
                <h3 className="text-xl font-semibold mb-3">Precise Measurements</h3>
                <p className="text-gray-600">Accurate measurements ensure perfect fit and maximum energy efficiency</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-gray-600">Rigorous quality checks at every step of the installation process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Professional Installation?
            </h2>
            <p className="text-xl mb-8">
              Get free consultation for your uPVC installation project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919949360406" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call: +91 9949360406
              </a>
              <a 
                href="https://wa.me/919949360406" 
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </>
  )
}
