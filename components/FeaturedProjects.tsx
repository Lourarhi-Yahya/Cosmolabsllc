'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, TrendingUp } from 'lucide-react'

const projects = [
  {
    title: 'Quantum Computing Breakthrough',
    sector: 'Data & AI',
    description: 'Developed quantum algorithms that reduced computational time by 1000x for complex optimization problems.',
    impact: '$500M+ market opportunity',
    location: 'Silicon Valley',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
    href: '/insights/quantum-computing-breakthrough'
  },
  {
    title: 'Sustainable Aviation Fuel',
    sector: 'Aerospace & Energy',
    description: 'Revolutionary biofuel technology reducing aviation emissions by 85% while maintaining performance.',
    impact: '50% cost reduction',
    location: 'Europe',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&h=400&fit=crop',
    href: '/insights/sustainable-aviation-fuel'
  },
  {
    title: 'Smart Materials Innovation',
    sector: 'Chemistry & Materials',
    description: 'Self-healing polymers that extend infrastructure lifespan by 300% with minimal maintenance.',
    impact: '$5M+ infrastructure savings',
    location: 'Asia-Pacific',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
    href: '/insights/smart-materials-innovation'
  }
]

export function FeaturedProjects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="section-padding bg-white dark:bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Breakthrough Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we're turning cutting-edge research into market-ready solutions 
            that create lasting impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link href={project.href} className="block group">
                <div className="card overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                        {project.sector}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        {project.impact}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.date}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Read Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link 
            href="/insights" 
            className="inline-flex items-center border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
          >
            View All Projects & Insights
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
