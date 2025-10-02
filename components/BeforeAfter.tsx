'use client'

import { ArrowRight, CheckCircle, XCircle } from 'lucide-react'

export function BeforeAfter() {
  const comparisons = [
    {
      id: 1,
      title: "Energy Efficiency Improvement",
      before: "Old wooden windows with gaps and poor insulation",
      after: "New uPVC windows with perfect sealing and thermal insulation",
      benefits: ["40% reduction in energy bills", "Better temperature control", "No air leakage"]
    },
    {
      id: 2,
      title: "Security Enhancement",
      before: "Basic locks and vulnerable frames",
      after: "Multi-point locking system with reinforced frames",
      benefits: ["Enhanced security", "Burglar-resistant design", "Peace of mind"]
    },
    {
      id: 3,
      title: "Maintenance Requirements",
      before: "Regular painting, repairs, and maintenance",
      after: "Zero maintenance uPVC frames",
      benefits: ["No painting required", "Weather-resistant", "Long-lasting"]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-red-600">Before</span> vs <span className="text-green-600">After</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the dramatic improvements our uPVC solutions bring to your home. 
            Real transformations from our completed projects.
          </p>
        </div>

        <div className="space-y-16">
          {comparisons.map((comparison) => (
            <div key={comparison.id} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {comparison.title}
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Before */}
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="h-6 w-6 text-red-600" />
                    <h4 className="text-xl font-bold text-red-800">Before</h4>
                  </div>
                  <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-red-700">
                      <XCircle className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-semibold">Old Windows</p>
                    </div>
                  </div>
                  <p className="text-red-700 font-medium">{comparison.before}</p>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-gray-400" />
                </div>

                {/* After */}
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <h4 className="text-xl font-bold text-green-800">After</h4>
                  </div>
                  <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-green-700">
                      <CheckCircle className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-semibold">New uPVC</p>
                    </div>
                  </div>
                  <p className="text-green-700 font-medium">{comparison.after}</p>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-8">
                <h5 className="text-lg font-bold text-gray-900 mb-4 text-center">Key Benefits:</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {comparison.benefits.map((benefit, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-green-200">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-800 font-medium">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Home?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of satisfied customers who have upgraded to our premium uPVC solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919949360406" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Free Consultation
              </a>
              <a 
                href="/contact" 
                className="bg-white hover:bg-gray-50 text-blue-600 font-bold py-3 px-6 rounded-lg border-2 border-blue-600 transition-colors duration-300"
              >
                Schedule Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
