import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'uPVC Maintenance Services | uPVC Solutions Chittoor',
  description: 'Professional uPVC maintenance and repair services in Chittoor District. Keep your windows and doors in perfect condition. Call +91 9949360406',
  keywords: [
    'uPVC maintenance',
    'window maintenance Chittoor',
    'door maintenance Chittoor',
    'uPVC repair services',
    'window repair',
    'door repair',
    'Chittoor District maintenance'
  ],
  openGraph: {
    title: 'uPVC Maintenance Services | uPVC Solutions Chittoor',
    description: 'Professional uPVC maintenance and repair services in Chittoor District. Keep your windows and doors in perfect condition.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function MaintenancePage() {
  return (
    <>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional uPVC Maintenance Services
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Keep your uPVC windows and doors in perfect condition with our expert maintenance services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919949360406" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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

      {/* Maintenance Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Maintenance Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-green-600 text-4xl mb-4">🧽</div>
                <h3 className="text-xl font-semibold mb-3">Regular Cleaning</h3>
                <p className="text-gray-600">Professional cleaning to maintain appearance and functionality</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• Frame cleaning</li>
                  <li>• Glass cleaning</li>
                  <li>• Hardware cleaning</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-green-600 text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold mb-3">Hardware Maintenance</h3>
                <p className="text-gray-600">Lubrication and adjustment of locks, handles, and hinges</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• Lock servicing</li>
                  <li>• Handle adjustment</li>
                  <li>• Hinge lubrication</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-green-600 text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-3">Inspection & Testing</h3>
                <p className="text-gray-600">Comprehensive inspection to identify potential issues</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• Weather seal check</li>
                  <li>• Hardware testing</li>
                  <li>• Performance evaluation</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-green-600 text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-semibold mb-3">Minor Repairs</h3>
                <p className="text-gray-600">Quick fixes for common issues and wear</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• Seal replacement</li>
                  <li>• Hardware repair</li>
                  <li>• Adjustment services</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-green-600 text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Emergency Repairs</h3>
                <p className="text-gray-600">24/7 emergency repair services for urgent issues</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• Lockout assistance</li>
                  <li>• Security repairs</li>
                  <li>• Weather damage fixes</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-green-600 text-4xl mb-4">📋</div>
                <h3 className="text-xl font-semibold mb-3">Maintenance Plans</h3>
                <p className="text-gray-600">Scheduled maintenance plans for long-term care</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• Annual contracts</li>
                  <li>• Quarterly visits</li>
                  <li>• Priority service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Benefits of Regular Maintenance
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Why Maintenance Matters</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-green-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Extended Lifespan</h4>
                      <p className="text-gray-600">Regular maintenance extends the life of your uPVC products by 10-15 years</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-green-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Energy Efficiency</h4>
                      <p className="text-gray-600">Well-maintained windows and doors provide better insulation and energy savings</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-green-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Value Savings</h4>
                      <p className="text-gray-600">Preventive maintenance is much cheaper than major repairs or replacements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-green-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Warranty Protection</h4>
                      <p className="text-gray-600">Regular maintenance helps maintain your warranty coverage</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Maintenance Schedule</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600">Monthly</h4>
                    <p className="text-gray-600">Basic cleaning and visual inspection</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600">Quarterly</h4>
                    <p className="text-gray-600">Deep cleaning and hardware lubrication</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600">Annually</h4>
                    <p className="text-gray-600">Comprehensive inspection and professional maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Schedule Your Maintenance Service
            </h2>
            <p className="text-xl mb-8">
              Keep your uPVC products in perfect condition with our professional maintenance services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919949360406" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
