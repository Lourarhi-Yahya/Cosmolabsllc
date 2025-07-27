'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react'

export function CTASection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-r from-primary-600 to-blue-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
            <defs>
              <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="white" fillOpacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Vision Into Reality?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join industry leaders who trust us to turn breakthrough research into market-ready innovations. 
            Let's explore what's possible for your organization.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center group"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start a Conversation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/approach" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center group"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Learn Our Process
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-blue-400/30"
          >
            <p className="text-blue-100 mb-6">Trusted by leading organizations worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="text-white/90 font-semibold text-lg tracking-wide">
                AEROSPACE DYNAMICS
              </div>
              <div className="text-white/90 font-semibold text-lg tracking-wide">
                QUANTUM LABS
              </div>
              <div className="text-white/90 font-semibold text-lg tracking-wide">
                ENERGY SOLUTIONS
              </div>
              <div className="text-white/90 font-semibold text-lg tracking-wide">
                BIOTECH CORP
              </div>
              <div className="text-white/90 font-semibold text-lg tracking-wide">
                AI VENTURES
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
