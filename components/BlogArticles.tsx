'use client'

import { Calendar, User, Clock, ArrowRight, BookOpen } from 'lucide-react'

export function BlogArticles() {
  const articles = [
    {
      id: 1,
      title: "Complete Guide to uPVC Window Maintenance",
      excerpt: "Learn how to maintain your uPVC windows for maximum longevity and performance. Essential tips from our experts.",
      author: "Expert Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Maintenance",
      featured: true
    },
    {
      id: 2,
      title: "Energy Efficiency: How uPVC Windows Save Money",
      excerpt: "Discover how uPVC windows can reduce your energy bills by up to 40% while improving home comfort.",
      author: "Energy Expert",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Energy Efficiency",
      featured: true
    },
    {
      id: 3,
      title: "Choosing the Right uPVC Windows for Your Home",
      excerpt: "A comprehensive guide to selecting the perfect uPVC windows based on your needs and requirements.",
      author: "Design Consultant",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Selection Guide",
      featured: false
    },
    {
      id: 4,
      title: "Soundproofing Benefits of uPVC Windows",
      excerpt: "How uPVC windows can significantly reduce noise pollution and create a peaceful home environment.",
      author: "Acoustic Specialist",
      date: "2023-12-28",
      readTime: "4 min read",
      category: "Soundproofing",
      featured: false
    },
    {
      id: 5,
      title: "Winter Preparation: uPVC Window Care Tips",
      excerpt: "Essential winter maintenance tips to keep your uPVC windows performing optimally during cold months.",
      author: "Seasonal Expert",
      date: "2023-12-20",
      readTime: "3 min read",
      category: "Seasonal Care",
      featured: false
    },
    {
      id: 6,
      title: "Modern uPVC Door Trends for 2024",
      excerpt: "Explore the latest trends in uPVC door design and technology for modern homes.",
      author: "Trend Analyst",
      date: "2023-12-15",
      readTime: "8 min read",
      category: "Design Trends",
      featured: false
    }
  ]

  const featuredArticles = articles.filter(article => article.featured)
  const regularArticles = articles.filter(article => !article.featured)

  return (
    <section id="articles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest <span className="text-green-600">Articles</span> & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with expert advice, industry trends, and practical tips for your uPVC windows and doors.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <p className="text-green-700 font-semibold">Article Image</p>
                    <p className="text-green-600 text-sm">Click to read</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h4>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Articles */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-blue-700 font-semibold">Article</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{article.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  )
}
