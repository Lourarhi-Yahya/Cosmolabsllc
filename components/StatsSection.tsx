'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Users, Award, Globe } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: '$3M+',
    label: 'Innovation Value Created',
    description: 'Total market value generated through our R&D initiatives'
  },
  {
    icon: Users,
    value: '25+',
    label: 'Expert Consultants',
    description: 'PhDs, researchers, and industry specialists'
  },
  {
    icon: Award,
    value: '92%',
    label: 'Project Success Rate',
    description: 'Projects delivered on time and within budget'
  },
  {
    icon: Globe,
    value: '12+',
    label: 'Countries Served',
    description: 'Global reach across key markets'
  }
]

export function StatsSection() {
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
            Driving Innovation at Scale
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our track record speaks to our commitment to transforming research into real-world impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
