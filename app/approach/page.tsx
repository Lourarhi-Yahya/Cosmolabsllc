'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Settings, Rocket, ArrowRight, CheckCircle, Clock, Users, Target } from 'lucide-react'

const methodology = [
  {
    step: 1,
    icon: Search,
    title: 'Explore',
    subtitle: 'Discovery & Research',
    description: 'We begin by deeply understanding your challenges, market landscape, and technological possibilities. Our research-driven approach ensures we identify the most promising innovation opportunities.',
    activities: [
      'Market & Technology Landscape Analysis',
      'Stakeholder Interviews & Requirements Gathering',
      'Competitive Intelligence & Benchmarking',
      'Technical Feasibility Assessment',
      'Risk & Opportunity Identification',
      'Innovation Roadmap Development'
    ],
    duration: '2-4 weeks',
    deliverables: [
      'Comprehensive Market Analysis',
      'Technical Feasibility Report',
      'Innovation Opportunity Matrix',
      'Strategic Recommendations'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    step: 2,
    icon: Settings,
    title: 'Structure',
    subtitle: 'Design & Architecture',
    description: 'We design robust frameworks and architectures that transform research insights into actionable innovation strategies. This phase focuses on creating scalable, sustainable solutions.',
    activities: [
      'Solution Architecture Design',
      'Technology Stack Selection',
      'Implementation Planning & Roadmapping',
      'Resource Allocation & Team Structure',
      'Risk Mitigation Strategy Development',
      'Success Metrics & KPI Definition'
    ],
    duration: '3-6 weeks',
    deliverables: [
      'Detailed Solution Architecture',
      'Implementation Roadmap',
      'Resource & Budget Plan',
      'Risk Management Framework'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    step: 3,
    icon: Rocket,
    title: 'Implement',
    subtitle: 'Execution & Optimization',
    description: 'We execute the innovation strategy with precision, providing hands-on support throughout implementation while continuously optimizing for maximum impact and sustainable growth.',
    activities: [
      'Agile Development & Prototyping',
      'Testing & Validation Cycles',
      'Performance Monitoring & Optimization',
      'Change Management & Training',
      'Continuous Improvement Processes',
      'Knowledge Transfer & Documentation'
    ],
    duration: '8-24 weeks',
    deliverables: [
      'Working Prototype/Solution',
      'Performance Analytics',
      'Training Materials',
      'Maintenance & Support Plan'
    ],
    color: 'from-green-500 to-emerald-500'
  }
]

const principles = [
  {
    icon: Target,
    title: 'Evidence-Based Innovation',
    description: 'Every decision is backed by rigorous research, data analysis, and scientific methodology.'
  },
  {
    icon: Users,
    title: 'Collaborative Partnership',
    description: 'We work as an extension of your team, fostering knowledge transfer and capability building.'
  },
  {
    icon: CheckCircle,
    title: 'Iterative Excellence',
    description: 'Continuous testing, learning, and refinement ensure optimal outcomes and rapid adaptation.'
  },
  {
    icon: Clock,
    title: 'Accelerated Time-to-Market',
    description: 'Our proven methodologies compress innovation cycles from years to months.'
  }
]

const caseStudy = {
  title: 'Quantum Computing Breakthrough',
  client: 'Fortune 500 Financial Services',
  challenge: 'Optimize complex portfolio management algorithms that were taking weeks to compute',
  solution: 'Applied our 3-step methodology to develop hybrid quantum-classical algorithms',
  results: [
    '1000x computational speedup',
    '$500M+ market opportunity identified',
    '18-month development timeline',
    '99.7% accuracy improvement'
  ],
  phases: [
    {
      phase: 'Explore',
      duration: '3 weeks',
      outcome: 'Identified quantum advantage opportunities in portfolio optimization'
    },
    {
      phase: 'Structure',
      duration: '5 weeks',
      outcome: 'Designed hybrid quantum-classical architecture with IBM Quantum'
    },
    {
      phase: 'Implement',
      duration: '16 weeks',
      outcome: 'Deployed production-ready system with continuous optimization'
    }
  ]
}

export default function ApproachPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: methodologyRef, inView: methodologyInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: principlesRef, inView: principlesInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: caseStudyRef, inView: caseStudyInView } = useInView({ triggerOnce: true, threshold: 0.1 })

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
              Our <span className="text-gradient">Methodology</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
              A proven 3-step approach that transforms breakthrough research into market-ready innovations, 
              accelerating your path from concept to commercial success.
            </p>
            
            {/* Process Overview */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              {methodology.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-4 text-left">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {step.subtitle}
                    </div>
                  </div>
                  {index < methodology.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-gray-400 ml-8 hidden md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Methodology */}
      <section ref={methodologyRef} className="section-padding bg-white dark:bg-dark-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={methodologyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Detailed Process Breakdown
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Each phase is carefully designed to build upon the previous, ensuring comprehensive 
              coverage and maximum innovation impact.
            </p>
          </motion.div>

          <div className="space-y-16">
            {methodology.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={methodologyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mr-4`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary-600 dark:text-primary-400">
                        Step {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {step.title}: {step.subtitle}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Activities
                      </h4>
                      <ul className="space-y-2">
                        {step.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, delIndex) => (
                          <li key={delIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-dark-800 rounded-lg">
                    <Clock className="w-4 h-4 text-gray-600 dark:text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Duration: {step.duration}
                    </span>
                  </div>
                </div>

                {/* Visual */}
                <div className="lg:w-1/2">
                  <div className="card p-8 text-center">
                    <div className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                      <step.icon className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Phase {step.step}: {step.title}
                    </h4>
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      {step.duration}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Typical Duration
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section ref={principlesRef} className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={principlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Principles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These fundamental principles guide every project and ensure consistent, 
              high-quality innovation outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                animate={principlesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-6">
                  <principle.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section ref={caseStudyRef} className="section-padding bg-white dark:bg-dark-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={caseStudyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Methodology in Action
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how our 3-step approach delivered breakthrough results for a Fortune 500 client
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={caseStudyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {caseStudy.title}
                </h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Client: </span>
                    <span className="text-gray-600 dark:text-gray-400">{caseStudy.client}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Challenge: </span>
                    <span className="text-gray-600 dark:text-gray-400">{caseStudy.challenge}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Solution: </span>
                    <span className="text-gray-600 dark:text-gray-400">{caseStudy.solution}</span>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Results Achieved:</h4>
                <ul className="space-y-2">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-600 dark:text-gray-400">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-6">Project Timeline:</h4>
                <div className="space-y-6">
                  {caseStudy.phases.map((phase, index) => (
                    <div key={index} className="relative">
                      {index < caseStudy.phases.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200 dark:bg-dark-600"></div>
                      )}
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-primary-600 dark:text-primary-400 font-semibold">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {phase.phase} ({phase.duration})
                          </div>
                          <div className="text-gray-600 dark:text-gray-400 mt-1">
                            {phase.outcome}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={caseStudyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Apply Our Methodology?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our proven 3-step approach can accelerate your innovation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="/contact" 
                  className="inline-flex items-center whitespace-nowrap bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="/expertise" 
                  className="inline-flex items-center whitespace-nowrap border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 shadow-lg hover:shadow-xl"
                >
                  Explore Our Expertise
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
