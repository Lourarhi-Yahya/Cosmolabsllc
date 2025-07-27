'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
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
  ArrowRight,
  Users,
  Award,
  Target
} from 'lucide-react'

const expertiseFields = [
  {
    id: 'data-ai',
    icon: Brain,
    title: 'Data & AI',
    subtitle: 'Machine Learning & Intelligent Systems',
    description: 'Advanced AI solutions, machine learning algorithms, neural networks, and intelligent automation systems that transform data into actionable insights.',
    capabilities: [
      'Deep Learning & Neural Networks',
      'Natural Language Processing',
      'Computer Vision & Image Recognition',
      'Predictive Analytics & Forecasting',
      'Intelligent Process Automation',
      'AI Ethics & Responsible AI'
    ],
    stats: {
      projects: '150+',
      clients: '45',
      impact: '$3M+'
    },
    color: 'from-blue-500 to-cyan-500',
    href: '/expertise/data-ai'
  },
  {
    id: 'aerospace',
    icon: Rocket,
    title: 'Aerospace, Space & Defense',
    subtitle: 'Advanced Propulsion & Space Technologies',
    description: 'Cutting-edge aerospace technologies, satellite systems, defense applications, and space exploration innovations.',
    capabilities: [
      'Advanced Propulsion Systems',
      'Satellite Technology & Communications',
      'Defense & Security Systems',
      'Space Exploration Technologies',
      'Aerospace Materials & Manufacturing',
      'Mission Critical Systems'
    ],
    stats: {
      projects: '85+',
      clients: '25',
      impact: '$2M+'
    },
    color: 'from-purple-500 to-pink-500',
    href: '/expertise/aerospace'
  },
  {
    id: 'energy',
    icon: Zap,
    title: 'Energy & Environment',
    subtitle: 'Sustainable Energy Solutions',
    description: 'Renewable energy technologies, environmental sustainability solutions, and clean technology innovations for a greener future.',
    capabilities: [
      'Renewable Energy Systems',
      'Energy Storage Technologies',
      'Smart Grid & Distribution',
      'Carbon Capture & Storage',
      'Environmental Monitoring',
      'Sustainability Consulting'
    ],
    stats: {
      projects: '120+',
      clients: '35',
      impact: '$2.3M+'
    },
    color: 'from-green-500 to-emerald-500',
    href: '/expertise/energy'
  },
  {
    id: 'chemistry',
    icon: FlaskConical,
    title: 'Chemistry & Advanced Materials',
    subtitle: 'Nanotechnology & Material Science',
    description: 'Advanced materials research, nanotechnology applications, chemical innovations, and next-generation material solutions.',
    capabilities: [
      'Nanotechnology & Nanomaterials',
      'Advanced Polymer Development',
      'Biomaterials & Medical Applications',
      'Smart Materials & Sensors',
      'Chemical Process Optimization',
      'Materials Characterization'
    ],
    stats: {
      projects: '95+',
      clients: '30',
      impact: '$1.6M+'
    },
    color: 'from-orange-500 to-red-500',
    href: '/expertise/chemistry'
  },
  {
    id: 'public-policy',
    icon: Building2,
    title: 'Public Policy',
    subtitle: 'Policy Analysis & Governance',
    description: 'Evidence-based policy analysis, regulatory frameworks, governance solutions, and public sector innovation strategies.',
    capabilities: [
      'Policy Impact Assessment',
      'Regulatory Framework Design',
      'Stakeholder Engagement',
      'Public Sector Innovation',
      'Digital Government Solutions',
      'Social Impact Measurement'
    ],
    stats: {
      projects: '75+',
      clients: '20',
      impact: '$1M+'
    },
    color: 'from-indigo-500 to-purple-500',
    href: '/expertise/public-policy'
  },
  {
    id: 'mobility',
    icon: Car,
    title: 'Mobility & Transport',
    subtitle: 'Smart Transportation Systems',
    description: 'Autonomous vehicles, smart transportation infrastructure, logistics optimization, and future mobility solutions.',
    capabilities: [
      'Autonomous Vehicle Technology',
      'Smart Transportation Infrastructure',
      'Logistics & Supply Chain Optimization',
      'Electric Vehicle Systems',
      'Traffic Management Solutions',
      'Mobility as a Service (MaaS)'
    ],
    stats: {
      projects: '110+',
      clients: '40',
      impact: '$1.9M+'
    },
    color: 'from-teal-500 to-blue-500',
    href: '/expertise/mobility'
  },
  {
    id: 'private-equity',
    icon: TrendingUp,
    title: 'Private Equity',
    subtitle: 'Investment Strategy & Due Diligence',
    description: 'Strategic investment analysis, due diligence support, portfolio optimization, and value creation strategies for PE firms.',
    capabilities: [
      'Technology Due Diligence',
      'Market Analysis & Sizing',
      'Competitive Intelligence',
      'Value Creation Strategies',
      'Portfolio Company Support',
      'Exit Strategy Planning'
    ],
    stats: {
      projects: '200+',
      clients: '55',
      impact: '$5.3M+'
    },
    color: 'from-yellow-500 to-orange-500',
    href: '/expertise/private-equity'
  },
  {
    id: 'software-engineering',
    icon: Code,
    title: 'Software Engineering',
    subtitle: 'Next-Generation Software Solutions',
    description: 'Build the software infrastructure of tomorrow with cloud-native architectures, AI-powered development, and scalable systems that drive digital transformation.',
    capabilities: [
      'Cloud-Native Architecture',
      'AI-Powered Development',
      'Microservices & APIs',
      'DevOps & Automation',
      'Cybersecurity & Privacy',
      'Quantum Computing'
    ],
    stats: {
      projects: '200+',
      clients: '55',
      impact: '$5.3M+'
    },
    color: 'from-violet-500 to-purple-500',
    href: '/expertise/software-engineering'
  }
]

export default function ExpertisePage() {
  const [activeField, setActiveField] = useState(expertiseFields[0])
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-gradient">Expertise</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
              Deep domain knowledge across eight critical industries, powered by world-class research 
              capabilities and proven innovation methodologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Expertise Cards */}
      <section ref={ref} className="section-padding bg-white dark:bg-dark-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Field Selection */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Select an Expertise Area
              </h2>
              <div className="space-y-3">
                {expertiseFields.map((field, index) => (
                  <motion.button
                    key={field.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setActiveField(field)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeField.id === field.id
                        ? 'bg-primary-50 dark:bg-primary-900/20 border-2 border-primary-200 dark:border-primary-800'
                        : 'bg-gray-50 dark:bg-dark-800 border-2 border-transparent hover:border-gray-200 dark:hover:border-dark-600'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r ${field.color}`}>
                        <field.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className={`font-semibold ${
                          activeField.id === field.id 
                            ? 'text-primary-700 dark:text-primary-300' 
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {field.title}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {field.subtitle}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Field Details */}
            <div className="lg:col-span-2">
              <motion.div
                key={activeField.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r ${activeField.color}`}>
                    <activeField.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {activeField.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      {activeField.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {activeField.description}
                </p>

                {/* Capabilities */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Core Capabilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeField.capabilities.map((capability, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 dark:bg-dark-800 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                      {activeField.stats.projects}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                      {activeField.stats.clients}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                      {activeField.stats.impact}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Value Created</div>
                  </div>
                </div>

                {/* CTA */}
                <Link href={activeField.href} className="btn-primary inline-flex items-center">
                  Explore {activeField.title}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* All Fields Overview */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Expertise Portfolio
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive coverage across all critical innovation sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {expertiseFields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link href={field.href} className="block group">
                  <div className="card p-6 h-full hover:shadow-2xl transition-all duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-r ${field.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <field.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {field.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {field.subtitle}
                    </p>
                    
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
