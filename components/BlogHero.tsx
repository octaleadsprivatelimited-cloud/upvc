'use client'

import { BookOpen, Calendar, User, Tag } from 'lucide-react'

export function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 pt-36 lg:pt-40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our <span className="text-yellow-400">Blog</span> & News
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
            Stay updated with the latest trends, tips, and insights about uPVC windows and doors. 
            Expert advice from our team of professionals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span className="font-semibold">Expert Tips</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span className="font-semibold">Latest News</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-2">
              <Tag className="h-5 w-5" />
              <span className="font-semibold">Industry Insights</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#articles" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <BookOpen className="h-5 w-5" />
              Read Articles
            </a>
            <a 
              href="tel:+919949360406" 
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <User className="h-5 w-5" />
              Get Expert Advice
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
