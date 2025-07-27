'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import Link from 'next/link'
import { 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Download,
  Eye,
  BookOpen,
  FileText,
  TrendingUp
} from 'lucide-react'

const categories = [
  'All',
  'Data & AI',
  'Aerospace & Defense',
  'Energy & Environment',
  'Chemistry & Materials',
  'Public Policy',
  'Mobility & Transport',
  'Private Equity',
  'Software Engineering'
]

const contentTypes = [
  'All Types',
  'Articles',
  'Reports',
  'Whitepapers',
  'Case Studies'
]

const insights = [
  {
    id: 1,
    title: 'The Future of Quantum Computing in Financial Services',
    excerpt: 'Exploring how quantum algorithms are revolutionizing portfolio optimization and risk management in the financial sector.',
    category: 'Data & AI',
    type: 'Whitepaper',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
    featured: true,
    downloads: 2847,
    views: 15420
  },
  {
    id: 2,
    title: 'Sustainable Aviation Fuels: A Technical Deep Dive',
    excerpt: 'Comprehensive analysis of biofuel technologies that could reduce aviation emissions by 85% while maintaining performance.',
    category: 'Aerospace & Defense',
    type: 'Report',
    author: 'Prof. Marcus Rodriguez',
    date: '2024-01-10',
    readTime: '18 min read',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&h=400&fit=crop',
    featured: true,
    downloads: 1923,
    views: 8765
  },
  {
    id: 3,
    title: 'Smart Materials: Self-Healing Infrastructure Revolution',
    excerpt: 'How advanced polymers and nanomaterials are extending infrastructure lifespan by 300% with minimal maintenance.',
    category: 'Chemistry & Materials',
    type: 'Case Study',
    author: 'Dr. Aisha Patel',
    date: '2024-01-08',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
    featured: false,
    downloads: 1456,
    views: 6234
  },
  {
    id: 4,
    title: 'AI Ethics in Autonomous Vehicle Development',
    excerpt: 'Addressing moral and ethical considerations in the development of self-driving car decision-making algorithms.',
    category: 'Mobility & Transport',
    type: 'Article',
    author: 'Dr. James Thompson',
    date: '2024-01-05',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    featured: false,
    downloads: 987,
    views: 4521
  },
  {
    id: 5,
    title: 'Renewable Energy Grid Integration Challenges',
    excerpt: 'Technical solutions for integrating renewable energy sources into existing power grids while maintaining stability.',
    category: 'Energy & Environment',
    type: 'Report',
    author: 'Dr. Elena Vasquez',
    date: '2024-01-03',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop',
    featured: false,
    downloads: 2134,
    views: 9876
  },
  {
    id: 6,
    title: 'Private Equity Due Diligence in Deep Tech',
    excerpt: 'Framework for evaluating deep technology investments and assessing technical feasibility in emerging markets.',
    category: 'Private Equity',
    type: 'Whitepaper',
    author: 'Michael Chang',
    date: '2023-12-28',
    readTime: '20 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    featured: false,
    downloads: 3421,
    views: 12543
  },
  {
    id: 7,
    title: 'Microservices Architecture for Enterprise AI',
    excerpt: 'Best practices for designing scalable AI systems using microservices architecture in enterprise environments.',
    category: 'Software Engineering',
    type: 'Article',
    author: 'Alex Kumar',
    date: '2023-12-25',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop',
    featured: false,
    downloads: 1678,
    views: 7890
  },
  {
    id: 8,
    title: 'Policy Frameworks for Emerging Technologies',
    excerpt: 'Regulatory considerations and policy recommendations for governing AI, quantum computing, and biotechnology.',
    category: 'Public Policy',
    type: 'Report',
    author: 'Dr. Rachel Foster',
    date: '2023-12-20',
    readTime: '16 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    featured: false,
    downloads: 2567,
    views: 11234
  }
]

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedType, setSelectedType] = useState('All Types')
  const [searchQuery, setSearchQuery] = useState('')
  
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const filteredInsights = insights.filter(insight => {
    const matchesCategory = selectedCategory === 'All' || insight.category === selectedCategory
    const matchesType = selectedType === 'All Types' || insight.type === selectedType
    const matchesSearch = searchQuery === '' || 
      insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesType && matchesSearch
  })

  const featuredInsights = insights.filter(insight => insight.featured)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Innovation <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
              Explore our latest research, industry analysis, and thought leadership across 
              all innovation sectors. Stay ahead with cutting-edge insights.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search insights, reports, and articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Insights */}
      {featuredInsights.length > 0 && (
        <section className="section-padding bg-white dark:bg-dark-900">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Insights
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Our most impactful research and analysis
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredInsights.map((insight, index) => (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  <Link href={`/insights/${insight.id}`} className="block group">
                    <div className="card overflow-hidden h-full hover:shadow-2xl transition-all duration-300">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={insight.image}
                          alt={insight.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                            {insight.type}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                            Featured
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                          {insight.category}
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {insight.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                          {insight.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(insight.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{insight.readTime}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{insight.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Download className="w-4 h-4" />
                              <span>{insight.downloads.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            By {insight.author}
                          </span>
                          <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters and All Insights */}
      <section ref={contentRef} className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-max">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                All Insights
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg px-4 py-2 pr-8 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Type Filter */}
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="appearance-none bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg px-4 py-2 pr-8 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {contentTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Results Count */}
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredInsights.length} of {insights.length} insights
            </p>
          </motion.div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link href={`/insights/${insight.id}`} className="block group">
                  <div className="card overflow-hidden h-full hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                          {insight.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {insight.category}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                        {insight.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                        {insight.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(insight.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{insight.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {insight.author}
                        </span>
                        <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                          Read
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredInsights.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={contentInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center py-12"
            >
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No insights found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your filters or search query to find relevant content.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card p-8 lg:p-12 text-center"
          >
            <TrendingUp className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated with Latest Insights
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest research, industry analysis, 
              and innovation insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
