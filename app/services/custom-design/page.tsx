import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Custom uPVC Design Services | uPVC Solutions Chittoor',
  description: 'Custom uPVC window and door design services in Chittoor District. Tailored solutions for your unique requirements. Call +91 9949360406',
  keywords: [
    'custom uPVC design',
    'bespoke windows Chittoor',
    'custom doors Chittoor',
    'uPVC design services',
    'tailored uPVC solutions',
    'custom window design',
    'Chittoor District design'
  ],
  openGraph: {
    title: 'Custom uPVC Design Services | uPVC Solutions Chittoor',
    description: 'Custom uPVC window and door design services in Chittoor District. Tailored solutions for your unique requirements.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function CustomDesignPage() {
  return (
    <>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Custom uPVC Design Services
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Tailored uPVC solutions designed specifically for your unique requirements and style preferences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919949360406" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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

      {/* Design Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Custom Design Process
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                <p className="text-gray-600">Free consultation to understand your vision and requirements</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Design & Planning</h3>
                <p className="text-gray-600">3D design and detailed planning for your custom solution</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Approval & Manufacturing</h3>
                <p className="text-gray-600">Your approval and precision manufacturing of custom products</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Installation</h3>
                <p className="text-gray-600">Professional installation of your custom uPVC solution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Design Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Custom Design Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-purple-600 text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold mb-3">Residential Design</h3>
                <p className="text-gray-600">Custom uPVC solutions for homes, apartments, and villas</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• Custom window shapes</li>
                  <li>• Unique door designs</li>
                  <li>• Special color combinations</li>
                  <li>• Architectural integration</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-purple-600 text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-semibold mb-3">Commercial Design</h3>
                <p className="text-gray-600">Bespoke solutions for offices, shops, and commercial spaces</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• Large format windows</li>
                  <li>• Security features</li>
                  <li>• Brand integration</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-purple-600 text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-3">Creative Solutions</h3>
                <p className="text-gray-600">Innovative designs for unique architectural challenges</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• Curved windows</li>
                  <li>• Angled installations</li>
                  <li>• Special hardware</li>
                  <li>• Artistic elements</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-purple-600 text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold mb-3">Technical Design</h3>
                <p className="text-gray-600">Engineering solutions for complex requirements</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• Structural calculations</li>
                  <li>• Load bearing design</li>
                  <li>• Weather resistance</li>
                  <li>• Energy efficiency</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-purple-600 text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Precision Fitting</h3>
                <p className="text-gray-600">Perfect fit solutions for challenging spaces</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• Non-standard sizes</li>
                  <li>• Irregular openings</li>
                  <li>• Heritage buildings</li>
                  <li>• Renovation projects</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-purple-600 text-4xl mb-4">💎</div>
                <h3 className="text-xl font-semibold mb-3">Luxury Design</h3>
                <p className="text-gray-600">Premium custom solutions for luxury properties</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• High-end finishes</li>
                  <li>• Premium hardware</li>
                  <li>• Exclusive colors</li>
                  <li>• Designer features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Design Capabilities
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Design Tools & Technology</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-purple-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">3D Design Software</h4>
                      <p className="text-gray-600">Advanced 3D modeling for accurate visualization</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-purple-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">CAD Drawings</h4>
                      <p className="text-gray-600">Precise technical drawings for manufacturing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-purple-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Material Selection</h4>
                      <p className="text-gray-600">Wide range of colors, finishes, and hardware options</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-purple-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Prototype Testing</h4>
                      <p className="text-gray-600">Physical prototypes for design validation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Design Consultation</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-600">Initial Consultation</h4>
                    <p className="text-gray-600">Free site visit and design discussion</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-600">Design Presentation</h4>
                    <p className="text-gray-600">3D renderings and material samples</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-600">Revision Process</h4>
                    <p className="text-gray-600">Unlimited revisions until you&apos;re satisfied</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-600">Final Approval</h4>
                    <p className="text-gray-600">Detailed specifications and manufacturing approval</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Custom Design Project
            </h2>
            <p className="text-xl mb-8">
              Let us create the perfect uPVC solution for your unique requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919949360406" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
