'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  Brain, 
  Rocket, 
  Zap, 
  FlaskConical, 
  Building2, 
  Car, 
  TrendingUp, 
  Code,
  ArrowRight 
} from 'lucide-react'

const sectors = [
  {
    icon: Brain,
    title: 'Data & AI',
    description: 'Machine learning, neural networks, and intelligent automation solutions',
    href: '/expertise/data-ai',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Rocket,
    title: 'Aerospace & Defense',
    description: 'Advanced propulsion, satellite systems, and defense technologies',
    href: '/expertise/aerospace',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'Energy & Environment',
    description: 'Renewable energy, sustainability, and environmental solutions',
    href: '/expertise/energy',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: FlaskConical,
    title: 'Chemistry & Materials',
    description: 'Advanced materials, nanotechnology, and chemical innovations',
    href: '/expertise/chemistry',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Building2,
    title: 'Public Policy',
    description: 'Policy analysis, regulatory frameworks, and governance solutions',
    href: '/expertise/public-policy',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Car,
    title: 'Mobility & Transport',
    description: 'Autonomous vehicles, smart transportation, and logistics',
    href: '/expertise/mobility',
    color: 'from-teal-500 to-blue-500'
  },
  {
    icon: TrendingUp,
    title: 'Private Equity',
    description: 'Investment strategies, due diligence, and portfolio optimization',
    href: '/expertise/private-equity',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Code,
    title: 'Software Engineering',
    description: 'System architecture, DevOps, and scalable software solutions',
    href: '/expertise/software',
    color: 'from-pink-500 to-rose-500'
  }
]

export function SectorsOverview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Industries We Transform
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From cutting-edge AI to sustainable energy, we drive innovation across 
            the sectors shaping tomorrow's world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link href={sector.href} className="block group">
                <div className="card p-6 h-full hover:shadow-2xl transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${sector.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <sector.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {sector.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {sector.description}
                  </p>
                  
                  <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link 
            href="/expertise" 
            className="inline-flex items-center whitespace-nowrap bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
          >
            Explore All Expertise Areas
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
