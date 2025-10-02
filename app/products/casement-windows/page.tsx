import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Casement Windows | Premium uPVC Casement Windows Chittoor',
  description: 'Premium uPVC casement windows in Chittoor District. Energy-efficient, secure, and stylish casement windows with 25+ years warranty. Call +91 9949360406',
  keywords: [
    'casement windows',
    'uPVC casement windows',
    'casement windows Chittoor',
    'energy efficient windows',
    'secure windows',
    'Chittoor District windows',
    'Andhra Pradesh casement'
  ],
  openGraph: {
    title: 'Casement Windows | Premium uPVC Casement Windows Chittoor',
    description: 'Premium uPVC casement windows in Chittoor District. Energy-efficient, secure, and stylish casement windows with 25+ years warranty.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function CasementWindowsPage() {
  return (
    <>
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-16 lg:pt-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_25%),radial-gradient(circle_at_80%_30%,white_0%,transparent_20%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full mb-4">Casement Windows</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Premium <span className="text-yellow-300">uPVC Casement Windows</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6">
              Energy-efficient, secure, and stylish casement windows designed for maximum performance and durability in Chittoor District.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Energy Efficient</span>
              <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Secure</span>
              <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Durable</span>
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
              Why Choose Our Casement Windows?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3">Maximum Security</h3>
                <p className="text-gray-600">Multi-point locking system provides superior security and peace of mind</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Energy Efficient</h3>
                <p className="text-gray-600">Excellent thermal insulation provides superior energy efficiency</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl mb-4">🔇</div>
                <h3 className="text-xl font-semibold mb-3">Soundproof</h3>
                <p className="text-gray-600">Advanced sealing technology blocks external noise effectively</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl mb-4">🌧️</div>
                <h3 className="text-xl font-semibold mb-3">Weather Resistant</h3>
                <p className="text-gray-600">Superior weather sealing keeps out rain, wind, and dust</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-3">Aesthetic Appeal</h3>
                <p className="text-gray-600">Sleek design enhances the beauty of your home</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold mb-3">25+ Years Warranty</h3>
                <p className="text-gray-600">Comprehensive warranty on frame, hardware, and installation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
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
      <section className="py-16 bg-gray-50">
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
                  <li>• Standard Locks</li>
                  <li>• Multi-point Locks</li>
                  <li>• Espagnolette Locks</li>
                  <li>• Security Locks</li>
                  <li>• Premium Hardware</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-3">Sizes</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Standard Sizes</li>
                  <li>• Custom Sizes</li>
                  <li>• Large Format</li>
                  <li>• Small Windows</li>
                  <li>• Any Size Available</li>
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
              Benefits of Casement Windows
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Functional Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-blue-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Maximum Ventilation</h4>
                      <p className="text-gray-600">Full opening allows maximum airflow and natural ventilation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Easy Cleaning</h4>
                      <p className="text-gray-600">Easy access to both sides for cleaning and maintenance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Weather Protection</h4>
                      <p className="text-gray-600">Excellent weather sealing when closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-500 text-xl mr-3">✓</div>
                    <div>
                      <h4 className="font-semibold">Security</h4>
                      <p className="text-gray-600">Strong locking mechanism provides enhanced security</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Energy Efficiency</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600">Thermal Insulation</h4>
                    <p className="text-gray-600">Superior thermal performance improves energy efficiency</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600">Air Tightness</h4>
                    <p className="text-gray-600">Excellent sealing prevents air leakage and drafts</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600">Condensation Control</h4>
                    <p className="text-gray-600">Reduces condensation and moisture problems</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600">UV Protection</h4>
                    <p className="text-gray-600">Blocks harmful UV rays while allowing natural light</p>
                  </div>
                </div>
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
              Get Your Casement Windows Today
            </h2>
            <p className="text-xl mb-8">
              Premium quality casement windows with 25+ years warranty. Free consultation and advice.
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
