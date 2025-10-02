import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Terms & Conditions | uPVC Solutions Chittoor | Legal Terms',
  description: 'Terms and Conditions for uPVC Solutions Chittoor. Read our legal terms and conditions for using our services and website.',
  keywords: [
    'terms conditions uPVC Chittoor', 'legal terms', 'service terms',
    'uPVC Solutions terms', 'Chittoor terms conditions', 'website terms'
  ],
  openGraph: {
    title: 'Terms & Conditions | uPVC Solutions Chittoor',
    description: 'Terms and Conditions for uPVC Solutions Chittoor. Read our legal terms and conditions for using our services.',
    images: ['/images/terms-og.jpg'],
  },
}

export default function TermsConditionsPage() {
  return (
    <>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20 pt-36 lg:pt-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl md:text-2xl text-green-100">
              Please read these terms and conditions carefully before using our services.
            </p>
            <p className="text-sm text-green-200 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Acceptance of Terms</h2>
                <p className="text-gray-700 mb-6">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Use License</h2>
                <p className="text-gray-700 mb-4">
                  Permission is granted to temporarily download one copy of the materials on uPVC Solutions Chittoor&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Terms</h2>
                <p className="text-gray-700 mb-4">
                  Our uPVC products and services are provided subject to the following terms:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>All products come with manufacturer warranty as specified</li>
                  <li>Installation services are provided by certified professionals</li>
                  <li>Custom designs are subject to approval and feasibility</li>
                  <li>Delivery and installation timelines are approximate and may vary</li>
                  <li>Payment terms are as agreed upon in individual contracts</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Warranty and Guarantee</h2>
                <p className="text-gray-700 mb-6">
                  We provide a comprehensive warranty on all our uPVC products. The warranty covers manufacturing defects and material quality issues. Normal wear and tear, misuse, or damage due to external factors are not covered under warranty.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
                <p className="text-gray-700 mb-6">
                  In no event shall uPVC Solutions Chittoor or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Accuracy of Materials</h2>
                <p className="text-gray-700 mb-6">
                  The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Links to Other Websites</h2>
                <p className="text-gray-700 mb-6">
                  Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of these websites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
                <p className="text-gray-700 mb-6">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Modifications</h2>
                <p className="text-gray-700 mb-6">
                  We may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
                <p className="text-gray-700 mb-6">
                  These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms & Conditions, please contact us:
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 9949360406</p>
                  <p className="text-gray-700 mb-2"><strong>Address:</strong> Desamma Nagar, Chittoor District, Andhra Pradesh</p>
                  <p className="text-gray-700"><strong>Email:</strong> info@tejeshprofine.com</p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg mt-8">
                  <p className="text-sm text-gray-600">
                    These Terms & Conditions are effective as of {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} and will remain in effect except with respect to any changes in its provisions in the future.
                  </p>
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
