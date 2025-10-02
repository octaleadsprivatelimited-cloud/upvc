import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'uPVC Repair Services | uPVC Solutions Chittoor',
  description: 'Professional uPVC repair services in Chittoor District. Expert repair for windows, doors, and hardware. Call +91 9949360406',
  keywords: [
    'uPVC repair',
    'window repair Chittoor',
    'door repair Chittoor',
    'uPVC repair services',
    'hardware repair',
    'Chittoor District repair',
    'Andhra Pradesh repair'
  ],
  openGraph: {
    title: 'uPVC Repair Services | uPVC Solutions Chittoor',
    description: 'Professional uPVC repair services in Chittoor District. Expert repair for windows, doors, and hardware.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RepairPage() {
  return (
    <>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional uPVC Repair Services
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Expert repair services for uPVC windows, doors, and hardware. Quick, reliable, and efficient solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919949360406" 
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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

      {/* Repair Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Repair Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-red-600 text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold mb-3">Hardware Repairs</h3>
                <p className="text-gray-600">Repair and replacement of locks, handles, hinges, and other hardware</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• Lock repair/replacement</li>
                  <li>• Handle adjustment</li>
                  <li>• Hinge repair</li>
                  <li>• Hardware lubrication</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-red-600 text-4xl mb-4">🪟</div>
                <h3 className="text-xl font-semibold mb-3">Window Repairs</h3>
                <p className="text-gray-600">Comprehensive repair services for all types of uPVC windows</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• Frame repairs</li>
                  <li>• Glass replacement</li>
                  <li>• Seal replacement</li>
                  <li>• Mechanism repair</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-red-600 text-4xl mb-4">🚪</div>
                <h3 className="text-xl font-semibold mb-3">Door Repairs</h3>
                <p className="text-gray-600">Expert repair services for uPVC doors and door frames</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• Door frame repair</li>
                  <li>• Panel replacement</li>
                  <li>• Lock mechanism repair</li>
                  <li>• Hinge adjustment</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-red-600 text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-3">Diagnostic Services</h3>
                <p className="text-gray-600">Professional diagnosis of uPVC system issues</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• Problem identification</li>
                  <li>• Root cause analysis</li>
                  <li>• Repair recommendations</li>
                  <li>• Service estimation</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-red-600 text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Emergency Repairs</h3>
                <p className="text-gray-600">24/7 emergency repair services for urgent issues</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• Lockout assistance</li>
                  <li>• Security breaches</li>
                  <li>• Weather damage</li>
                  <li>• Safety issues</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-red-600 text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-semibold mb-3">Preventive Maintenance</h3>
                <p className="text-gray-600">Regular maintenance to prevent future issues</p>
                <ul className="mt-4 text-sm text-gray-600">
                  <li>• Lubrication services</li>
                  <li>• Adjustment services</li>
                  <li>• Cleaning services</li>
                  <li>• Inspection services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Common uPVC Issues We Fix
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Hardware Issues</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-red-500 text-xl mr-3">🔧</div>
                    <div>
                      <h4 className="font-semibold">Stiff or Stuck Handles</h4>
                      <p className="text-gray-600">Lubrication and adjustment of handle mechanisms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-red-500 text-xl mr-3">🔧</div>
                    <div>
                      <h4 className="font-semibold">Lock Problems</h4>
                      <p className="text-gray-600">Repair or replacement of faulty locking mechanisms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-red-500 text-xl mr-3">🔧</div>
                    <div>
                      <h4 className="font-semibold">Hinge Issues</h4>
                      <p className="text-gray-600">Adjustment and repair of window and door hinges</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-red-500 text-xl mr-3">🔧</div>
                    <div>
                      <h4 className="font-semibold">Hardware Wear</h4>
                      <p className="text-gray-600">Replacement of worn or damaged hardware components</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Frame & Seal Issues</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-red-500 text-xl mr-3">🔧</div>
                    <div>
                      <h4 className="font-semibold">Weather Seal Damage</h4>
                      <p className="text-gray-600">Replacement of damaged or worn weather seals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-red-500 text-xl mr-3">🔧</div>
                    <div>
                      <h4 className="font-semibold">Frame Cracks</h4>
                      <p className="text-gray-600">Repair of minor cracks and damage to uPVC frames</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-red-500 text-xl mr-3">🔧</div>
                    <div>
                      <h4 className="font-semibold">Draft Issues</h4>
                      <p className="text-gray-600">Sealing gaps and improving air tightness</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-red-500 text-xl mr-3">🔧</div>
                    <div>
                      <h4 className="font-semibold">Alignment Problems</h4>
                      <p className="text-gray-600">Adjustment and alignment of frames and sashes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Repair Process
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
                <p className="text-gray-600">Free inspection and diagnosis of the problem</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Service Plan & Approval</h3>
                <p className="text-gray-600">Detailed service plan and your approval before work begins</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Repair</h3>
                <p className="text-gray-600">Expert repair work using quality parts and tools</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Testing & Handover</h3>
                <p className="text-gray-600">Thorough testing and handover with warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our Repair Services?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-red-600 text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
                <p className="text-gray-600">Fast response time for emergency repairs and urgent issues</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-red-600 text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold mb-3">Expert Technicians</h3>
                <p className="text-gray-600">Certified professionals with years of experience in uPVC repair</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-red-600 text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-3">Quality Service</h3>
                <p className="text-gray-600">Professional and reliable service with guaranteed workmanship</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-red-600 text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold mb-3">Warranty Coverage</h3>
                <p className="text-gray-600">Warranty on all repair work and replacement parts</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-red-600 text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold mb-3">Local Service</h3>
                <p className="text-gray-600">Local technicians serving Chittoor District and surrounding areas</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-red-600 text-4xl mb-4">📞</div>
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock support for emergency repairs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need uPVC Repairs?
            </h2>
            <p className="text-xl mb-8">
              Get professional repair services for your uPVC windows and doors. Free inspection and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919949360406" 
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
