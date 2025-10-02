import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Lift & Slide Doors | Premium uPVC Lift Slide Doors Chittoor',
  description: 'Premium uPVC lift & slide doors in Chittoor District. Enhanced security, smooth operation, and energy-efficient doors. Call +91 9949360406',
  keywords: [
    'lift slide doors',
    'uPVC lift slide doors',
    'lift slide doors Chittoor',
    'secure sliding doors',
    'enhanced security doors',
    'Chittoor District doors',
    'Andhra Pradesh lift slide'
  ],
  openGraph: {
    title: 'Lift & Slide Doors | Premium uPVC Lift Slide Doors Chittoor',
    description: 'Premium uPVC lift & slide doors in Chittoor District. Enhanced security, smooth operation, and energy-efficient doors.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function LiftSlideDoorsPage() {
  return (
    <>
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-16 lg:pt-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_25%),radial-gradient(circle_at_80%_30%,white_0%,transparent_20%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full mb-4">Lift & Slide Doors</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Premium <span className="text-yellow-300">uPVC Lift & Slide Doors</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6">
              Enhanced security, smooth operation, and energy-efficient lift & slide doors for modern homes and offices in Chittoor District.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Enhanced Security</span>
              <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Smooth Operation</span>
              <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Energy Efficient</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="tel:+919949360406" className="btn bg-white text-blue-700 hover:bg-white/90 px-6 py-3">Free Consultation</a>
              <a href="/gallery" className="btn border-white text-white hover:bg-white hover:text-blue-700 px-6 py-3">View Gallery</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our Lift & Slide Doors?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-orange-600 text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3">Enhanced Security</h3>
                <p className="text-gray-600">Lift mechanism provides superior security and weather sealing</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-orange-600 text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold mb-3">Dual Operation</h3>
                <p className="text-gray-600">Lift to unlock, then slide for maximum opening capacity</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-orange-600 text-4xl mb-4">🌧️</div>
                <h3 className="text-xl font-semibold mb-3">Weather Resistant</h3>
                <p className="text-gray-600">Superior weather sealing keeps out rain, wind, and dust</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-orange-600 text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Smooth Operation</h3>
                <p className="text-gray-600">High-quality hardware ensures smooth lift and slide motion</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-orange-600 text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
                <p className="text-gray-600">Sleek, contemporary design that complements any architectural style</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-orange-600 text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold mb-3">25+ Years Warranty</h3>
                <p className="text-gray-600">Comprehensive warranty on frame, hardware, and installation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How Lift & Slide Doors Work
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-orange-50 p-8 rounded-lg">
                <div className="text-center mb-6">
                  <div className="text-orange-600 text-6xl mb-4">⬆️</div>
                  <h3 className="text-2xl font-semibold mb-4">Lift Mechanism</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-orange-500 text-xl mr-3">✓</div>
                    <span>Lift handle to unlock the door</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 text-xl mr-3">✓</div>
                    <span>Releases the locking mechanism</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 text-xl mr-3">✓</div>
                    <span>Allows smooth sliding motion</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 text-xl mr-3">✓</div>
                    <span>Enhanced security when locked</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-8 rounded-lg">
                <div className="text-center mb-6">
                  <div className="text-orange-600 text-6xl mb-4">↔️</div>
                  <h3 className="text-2xl font-semibold mb-4">Slide Operation</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-orange-500 text-xl mr-3">✓</div>
                    <span>Smooth horizontal sliding motion</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 text-xl mr-3">✓</div>
                    <span>Up to 100% opening capacity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 text-xl mr-3">✓</div>
                    <span>Easy operation and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 text-xl mr-3">✓</div>
                    <span>Perfect for wide openings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Technical Specifications
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Frame Specifications</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Material</span>
                    <span className="text-gray-600">High-grade uPVC</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Profile Thickness</span>
                    <span className="text-gray-600">3-5mm</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Chamber System</span>
                    <span className="text-gray-600">Multi-chamber design</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Reinforcement</span>
                    <span className="text-gray-600">Galvanized steel</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Weather Seal</span>
                    <span className="text-gray-600">EPDM rubber</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Performance Features</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">U-Value</span>
                    <span className="text-gray-600">1.1 W/m²K</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Air Permeability</span>
                    <span className="text-gray-600">Class 4</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Water Tightness</span>
                    <span className="text-gray-600">Class 9A</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Wind Resistance</span>
                    <span className="text-gray-600">2400 Pa</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Sound Reduction</span>
                    <span className="text-gray-600">45 dB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Available Options
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-3">Colors</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• White</li>
                  <li>• Cream</li>
                  <li>• Brown</li>
                  <li>• Grey</li>
                  <li>• Wood Grain</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-3">Glass Options</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Double Glazing</li>
                  <li>• Triple Glazing</li>
                  <li>• Laminated Glass</li>
                  <li>• Low-E Glass</li>
                  <li>• Tinted Glass</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-3">Hardware</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Standard Hardware</li>
                  <li>• Premium Hardware</li>
                  <li>• Security Hardware</li>
                  <li>• Child Safety</li>
                  <li>• Smart Locks</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-3">Sizes</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Standard Sizes</li>
                  <li>• Custom Sizes</li>
                  <li>• Large Format</li>
                  <li>• Small Doors</li>
                  <li>• Any Size Available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Benefits of Lift & Slide Doors
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Functional Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-orange-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Enhanced Security</h4>
                      <p className="text-gray-600">Lift mechanism provides superior security compared to standard sliding doors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-orange-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Maximum Opening</h4>
                      <p className="text-gray-600">Up to 100% opening capacity for maximum ventilation and access</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-orange-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Weather Protection</h4>
                      <p className="text-gray-600">Superior weather sealing when closed, excellent insulation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-orange-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Easy Operation</h4>
                      <p className="text-gray-600">Simple lift and slide mechanism, easy to operate</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Energy Efficiency</h3>
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-600">Superior Insulation</h4>
                    <p className="text-gray-600">Multi-chamber design provides excellent thermal performance</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-600">Air Tightness</h4>
                    <p className="text-gray-600">Advanced sealing system prevents air leakage and drafts</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-600">Condensation Control</h4>
                    <p className="text-gray-600">Reduces condensation and moisture problems</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-600">UV Protection</h4>
                    <p className="text-gray-600">Blocks harmful UV rays while allowing natural light</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Lift & Slide Doors Today
            </h2>
            <p className="text-xl mb-8">
              Premium quality lift & slide doors with 25+ years warranty. Free consultation and advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919949360406" 
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
