'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Eye, Heart, Award, Users, Calendar } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We believe breakthrough thinking drives breakthrough results. Every project starts with questioning the status quo.'
  },
  {
    icon: Users,
    title: 'Collaborative Excellence',
    description: 'The best innovations emerge from diverse perspectives. We foster inclusive environments where ideas flourish.'
  },
  {
    icon: Award,
    title: 'Scientific Rigor',
    description: 'Evidence-based approaches and peer-reviewed methodologies ensure our solutions are both innovative and reliable.'
  },
  {
    icon: Heart,
    title: 'Purpose-Driven Impact',
    description: 'We focus on innovations that create meaningful positive change for society and the environment.'
  }
]

const milestones = [
  {
    year: '2009',
    title: 'Foundation',
    description: 'Founded by leading researchers from MIT and Stanford with a vision to bridge the gap between academic research and industry application.'
  },
  {
    year: '2012',
    title: 'Global Expansion',
    description: 'Opened offices in Europe and Asia-Pacific, establishing our international presence and cross-cultural innovation capabilities.'
  },
  {
    year: '2015',
    title: 'AI & Data Focus',
    description: 'Launched dedicated AI and data science division, becoming early pioneers in machine learning applications for R&D.'
  },
  {
    year: '2018',
    title: 'Sustainability Initiative',
    description: 'Committed to carbon-neutral operations and launched our Green Innovation program focusing on environmental solutions.'
  },
  {
    year: '2021',
    title: 'Quantum Computing',
    description: 'Established quantum computing research lab, positioning us at the forefront of next-generation computational technologies.'
  },
  {
    year: '2024',
    title: 'Innovation Labs',
    description: 'Rebranded to Innovation Labs, reflecting our expanded scope and commitment to transformative research across all sectors.'
  }
]

const leadership = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer',
    bio: 'Former MIT professor with 5+ years in computational biology and AI. Led breakthrough research in neural networks and biomedical applications.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'Prof. Marcus Rodriguez',
    role: 'Chief Technology Officer',
    bio: 'Stanford PhD in Materials Science. Pioneer in nanotechnology applications and sustainable materials development.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'Dr. Aisha Patel',
    role: 'Head of Innovation Strategy',
    bio: 'Former McKinsey partner specializing in technology strategy. Expert in translating research into scalable business solutions.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'Dr. James Thompson',
    role: 'Director of Research',
    bio: 'Aerospace engineer with NASA background. Leads our space technology and advanced propulsion research initiatives.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
  }
]

export default function AboutPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: timelineRef, inView: timelineInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: leadershipRef, inView: leadershipInView } = useInView({ triggerOnce: true, threshold: 0.1 })

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
              Pioneering the Future of <span className="text-gradient">Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              For over 15 years, we've been at the forefront of transforming breakthrough research 
              into real-world solutions that shape industries and improve lives globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To accelerate the translation of cutting-edge research into transformative innovations 
                that address humanity's greatest challenges and unlock unprecedented opportunities for growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                A world where the gap between scientific discovery and practical application is measured 
                in months, not decades, enabling rapid solutions to global challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide every project, partnership, and innovation we pursue
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="section-padding bg-white dark:bg-dark-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Key milestones that shaped our evolution from a research consultancy to a global innovation leader
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-800"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="card p-6">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section ref={leadershipRef} className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={leadershipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Visionary leaders combining deep scientific expertise with strategic business acumen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                animate={leadershipInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {leader.name}
                </h3>
                <div className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                  {leader.role}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
