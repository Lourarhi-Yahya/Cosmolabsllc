'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Brain, Rocket, Zap, FlaskConical, Car, TrendingUp, Code } from 'lucide-react'

const iconMap = { Brain, Rocket, Zap, FlaskConical, Car, TrendingUp, Code };
import { ArrowRight, Users, Calendar, MapPin, TrendingUp as Impact } from 'lucide-react'

interface ClientExpertisePageProps {
  fieldData: any;
}

export default function ClientExpertisePage({ fieldData }: ClientExpertisePageProps) {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: capabilitiesRef, inView: capabilitiesInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const Icon = iconMap[fieldData.iconKey as keyof typeof iconMap] || Brain

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-gradient-to-r from-primary-600 to-blue-600">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${fieldData.color} rounded-2xl mb-6`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{fieldData.title}</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">{fieldData.subtitle}</p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">{fieldData.description}</p>
        </motion.div>
      </section>

      {/* Capabilities Section */}
      <section ref={capabilitiesRef} className="section-padding bg-white dark:bg-dark-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Core Capabilities</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Our expertise in {fieldData.title.toLowerCase()} includes:</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fieldData.capabilities.map((capability: any, idx: number) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="card p-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{capability.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{capability.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={projectsRef} className="section-padding bg-white dark:bg-dark-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Real-world applications and breakthrough innovations in {fieldData.title.toLowerCase()}</p>
          </motion.div>
          <div className="space-y-8">
            {fieldData.projects.map((project: any, index: number) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-semibold">
                      <Impact className="w-5 h-5" />
                      <span>{project.impact}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                      <Users className="w-5 h-5" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-5 h-5" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-5 h-5" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Innovate in {fieldData.title}?</h2>
            <p className="text-xl text-blue-100 mb-8">Let's discuss how our expertise can accelerate your next breakthrough project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center">
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/expertise" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                View All Expertise
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

