import { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Privacy Policy | uPVC Solutions Chittoor | Data Protection',
  description: 'Privacy Policy for uPVC Solutions Chittoor. Learn how we collect, use, and protect your personal information. Your privacy is important to us.',
  keywords: [
    'privacy policy uPVC Chittoor', 'data protection', 'personal information',
    'uPVC Solutions privacy', 'Chittoor privacy policy', 'website privacy'
  ],
  openGraph: {
    title: 'Privacy Policy | uPVC Solutions Chittoor',
    description: 'Privacy Policy for uPVC Solutions Chittoor. Learn how we collect, use, and protect your personal information.',
    images: ['/images/privacy-og.jpg'],
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 pt-36 lg:pt-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-blue-200 mt-4">
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                <p className="text-gray-700 mb-6">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Contact us through our website or phone</li>
                  <li>Request information or consultation</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Fill out contact forms</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Provide and improve our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you information about our products and services</li>
                  <li>Process inquiries and consultations</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
                <p className="text-gray-700 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>With service providers who assist us in operating our website</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
                <p className="text-gray-700 mb-6">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
                <p className="text-gray-700 mb-6">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 9949360406</p>
                  <p className="text-gray-700 mb-2"><strong>Address:</strong> Desamma Nagar, Chittoor District, Andhra Pradesh</p>
                  <p className="text-gray-700"><strong>Email:</strong> info@tejeshprofine.com</p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
                <p className="text-gray-700 mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
                </p>

                <div className="bg-gray-100 p-6 rounded-lg mt-8">
                  <p className="text-sm text-gray-600">
                    This Privacy Policy is effective as of {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} and will remain in effect except with respect to any changes in its provisions in the future.
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
