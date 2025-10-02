import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Sliding Doors | Premium uPVC Sliding Doors Chittoor',
  description: 'Premium uPVC sliding doors in Chittoor District. Space-saving, smooth operation, and energy-efficient sliding doors. Call +91 9949360406',
  keywords: [
    'sliding doors',
    'uPVC sliding doors',
    'sliding doors Chittoor',
    'space saving doors',
    'smooth sliding doors',
    'Chittoor District doors',
    'Andhra Pradesh sliding'
  ],
  openGraph: {
    title: 'Sliding Doors | Premium uPVC Sliding Doors Chittoor',
    description: 'Premium uPVC sliding doors in Chittoor District. Space-saving, smooth operation, and energy-efficient sliding doors.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function SlidingDoorsPage() {
  return (
    <>
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-16 lg:pt-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_25%),radial-gradient(circle_at_80%_30%,white_0%,transparent_20%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full mb-4">Sliding Doors</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Premium <span className="text-yellow-300">uPVC Sliding Doors</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6">
              Space-saving, smooth operation, and energy-efficient sliding doors perfect for modern homes and offices in Chittoor District.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Space Saving</span>
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
              Why Choose Our Sliding Doors?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-cyan-600 text-4xl mb-4">📏</div>
                <h3 className="text-xl font-semibold mb-3">Space Saving</h3>
                <p className="text-gray-600">No swing space required - perfect for tight spaces and modern designs</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-cyan-600 text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Smooth Operation</h3>
                <p className="text-gray-600">High-quality rollers ensure smooth, effortless sliding motion</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-cyan-600 text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3">Secure Locking</h3>
                <p className="text-gray-600">Multi-point locking system provides excellent security</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-cyan-600 text-4xl mb-4">🌧️</div>
                <h3 className="text-xl font-semibold mb-3">Weather Resistant</h3>
                <p className="text-gray-600">Superior weather sealing keeps out rain, wind, and dust</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-cyan-600 text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
                <p className="text-gray-600">Sleek, contemporary design that complements any architectural style</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-cyan-600 text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold mb-3">25+ Years Warranty</h3>
                <p className="text-gray-600">Comprehensive warranty on frame, hardware, and installation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sliding System Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Sliding Door Systems
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-cyan-50 p-8 rounded-lg">
                <div className="text-center mb-6">
                  <div className="text-cyan-600 text-6xl mb-4">↔️</div>
                  <h3 className="text-2xl font-semibold mb-4">Side-by-Side Sliding</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-cyan-500 text-xl mr-3">✓</div>
                    <span>Two panels slide horizontally</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cyan-500 text-xl mr-3">✓</div>
                    <span>50% opening capacity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cyan-500 text-xl mr-3">✓</div>
                    <span>Perfect for wide openings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cyan-500 text-xl mr-3">✓</div>
                    <span>Easy operation and maintenance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-cyan-50 p-8 rounded-lg">
                <div className="text-center mb-6">
                  <div className="text-cyan-600 text-6xl mb-4">🔄</div>
                  <h3 className="text-2xl font-semibold mb-4">Lift & Slide</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-cyan-500 text-xl mr-3">✓</div>
                    <span>Lift to unlock, then slide</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cyan-500 text-xl mr-3">✓</div>
                    <span>Up to 100% opening</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cyan-500 text-xl mr-3">✓</div>
                    <span>Enhanced security</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cyan-500 text-xl mr-3">✓</div>
                    <span>Superior weather sealing</span>
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
                    <span className="text-gray-600">1.2 W/m²K</span>
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
                    <span className="text-gray-600">42 dB</span>
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
                  <li>• Custom Colors</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-3">Glass Options</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Single Glazing</li>
                  <li>• Double Glazing</li>
                  <li>• Triple Glazing</li>
                  <li>• Laminated Glass</li>
                  <li>• Low-E Glass</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-3">Hardware</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Standard Rollers</li>
                  <li>• Premium Rollers</li>
                  <li>• Security Locks</li>
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
              Benefits of Sliding Doors
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Functional Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-cyan-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Space Efficiency</h4>
                      <p className="text-gray-600">No swing space required, perfect for tight spaces and modern designs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-cyan-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Easy Operation</h4>
                      <p className="text-gray-600">Smooth sliding motion with minimal effort required</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-cyan-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Versatile Opening</h4>
                      <p className="text-gray-600">Adjustable opening from 0% to 50% or 100% depending on system</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-cyan-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Low Maintenance</h4>
                      <p className="text-gray-600">Simple design requires minimal maintenance and cleaning</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Energy Efficiency</h3>
                <div className="space-y-4">
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-600">Thermal Insulation</h4>
                    <p className="text-gray-600">Multi-chamber design provides excellent thermal performance</p>
                  </div>
                  
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-600">Air Tightness</h4>
                    <p className="text-gray-600">Advanced sealing system prevents air leakage and drafts</p>
                  </div>
                  
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-600">Condensation Control</h4>
                    <p className="text-gray-600">Reduces condensation and moisture problems</p>
                  </div>
                  
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-600">UV Protection</h4>
                    <p className="text-gray-600">Blocks harmful UV rays while allowing natural light</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Sliding Doors Today
            </h2>
            <p className="text-xl mb-8">
              Premium quality sliding doors with 25+ years warranty. Free consultation and advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919949360406" 
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
