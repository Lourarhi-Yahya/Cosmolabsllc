'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { notFound } from 'next/navigation'
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
  CheckCircle,
  TrendingUp as Impact,
  Users,
  Calendar,
  MapPin
} from 'lucide-react'

const expertiseData = {
  'data-ai': {
    icon: Brain,
    title: 'Data & AI',
    subtitle: 'Machine Learning & Intelligent Systems',
    description: 'Transform your organization with cutting-edge artificial intelligence and machine learning solutions. We develop intelligent systems that learn, adapt, and deliver unprecedented insights from your data.',
    color: 'from-blue-500 to-cyan-500',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    overview: 'Our Data & AI practice combines deep technical expertise with industry knowledge to deliver AI solutions that drive real business value. From predictive analytics to autonomous systems, we help organizations harness the power of artificial intelligence.',
    capabilities: [
      {
        title: 'Deep Learning & Neural Networks',
        description: 'Advanced neural architectures for complex pattern recognition and decision-making'
      },
      {
        title: 'Natural Language Processing',
        description: 'Language understanding, generation, and conversational AI systems'
      },
      {
        title: 'Computer Vision & Image Recognition',
        description: 'Visual intelligence for automated inspection, monitoring, and analysis'
      },
      {
        title: 'Predictive Analytics & Forecasting',
        description: 'Data-driven insights for strategic planning and risk management'
      },
      {
        title: 'Intelligent Process Automation',
        description: 'AI-powered workflow optimization and autonomous operations'
      },
      {
        title: 'AI Ethics & Responsible AI',
        description: 'Ensuring fairness, transparency, and accountability in AI systems'
      }
    ],
    projects: [
      {
        title: 'Quantum-Enhanced Machine Learning',
        description: 'Developed hybrid quantum-classical algorithms that achieved 1000x speedup for optimization problems in financial portfolio management.',
        impact: '$1.3M+ market opportunity',
        client: 'Fortune 500 Financial Services',
        duration: '18 months',
        location: 'New York, USA'
      },
      {
        title: 'Autonomous Medical Diagnosis',
        description: 'Created AI system for early disease detection with 99.2% accuracy, reducing diagnosis time from weeks to minutes.',
        impact: '50,000+ patients screened',
        client: 'Leading Healthcare Network',
        duration: '24 months',
        location: 'Boston, USA'
      },
      {
        title: 'Smart Manufacturing Optimization',
        description: 'Implemented AI-driven predictive maintenance system reducing downtime by 85% and maintenance costs by 60%.',
        impact: '$500K+ cost savings',
        client: 'Global Manufacturing Corp',
        duration: '12 months',
        location: 'Germany'
      }
    ],
    metrics: {
      projects: '150+',
      clients: '45',
      impact: '$3M+',
      accuracy: '99.2%'
    }
  },
  'aerospace': {
    icon: Rocket,
    title: 'Aerospace, Space & Defense',
    subtitle: 'Advanced Propulsion & Space Technologies',
    description: 'Pioneer the future of aerospace with revolutionary propulsion systems, satellite technologies, and defense innovations that push the boundaries of what\'s possible.',
    color: 'from-purple-500 to-pink-500',
    heroImage: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1200&h=600&fit=crop',
    overview: 'Our Aerospace practice develops next-generation technologies for space exploration, defense applications, and commercial aviation. We work at the cutting edge of physics and engineering to solve humanity\'s greatest aerospace challenges.',
    capabilities: [
      {
        title: 'Advanced Propulsion Systems',
        description: 'Revolutionary rocket engines and propulsion technologies for space exploration'
      },
      {
        title: 'Satellite Technology & Communications',
        description: 'Next-generation satellite systems for global communications and Earth observation'
      },
      {
        title: 'Defense & Security Systems',
        description: 'Advanced defense technologies and security solutions for national protection'
      },
      {
        title: 'Space Exploration Technologies',
        description: 'Innovative systems for deep space missions and planetary exploration'
      },
      {
        title: 'Aerospace Materials & Manufacturing',
        description: 'Lightweight, high-strength materials and advanced manufacturing processes'
      },
      {
        title: 'Mission Critical Systems',
        description: 'Ultra-reliable systems for life-critical aerospace applications'
      }
    ],
    projects: [
      {
        title: 'Sustainable Aviation Fuel Technology',
        description: 'Developed revolutionary biofuel technology that reduces aviation emissions by 85% while maintaining performance standards.',
        impact: '50% cost reduction vs traditional fuels',
        client: 'Major Airline Consortium',
        duration: '30 months',
        location: 'Europe'
      },
      {
        title: 'Next-Gen Satellite Constellation',
        description: 'Designed low-Earth orbit satellite network providing global internet coverage with 10x faster speeds than existing systems.',
        impact: '2.5M+ people connected',
        client: 'Space Technology Startup',
        duration: '36 months',
        location: 'California, USA'
      },
      {
        title: 'Hypersonic Vehicle Development',
        description: 'Created advanced materials and propulsion systems for Mach 5+ atmospheric flight vehicles.',
        impact: 'Breakthrough defense capability',
        client: 'Defense Contractor',
        duration: '48 months',
        location: 'Classified'
      }
    ],
    metrics: {
      projects: '85+',
      clients: '25',
      impact: '$2M+',
      efficiency: '85%'
    }
  },
  'energy': {
    icon: Zap,
    title: 'Energy & Environment',
    subtitle: 'Sustainable Energy Solutions',
    description: 'Drive the transition to sustainable energy with breakthrough technologies in renewable systems, energy storage, and environmental solutions that power a cleaner future.',
    color: 'from-green-500 to-emerald-500',
    heroImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=600&fit=crop',
    overview: 'Our Energy & Environment practice develops innovative solutions for the global energy transition. From next-generation solar technologies to advanced energy storage systems, we help organizations build a sustainable energy future.',
    capabilities: [
      {
        title: 'Renewable Energy Technologies',
        description: 'Advanced solar, wind, and hydroelectric systems with breakthrough efficiency'
      },
      {
        title: 'Energy Storage & Grid Solutions',
        description: 'Next-generation batteries and smart grid technologies for reliable energy distribution'
      },
      {
        title: 'Carbon Capture & Utilization',
        description: 'Innovative technologies for capturing and converting CO2 into valuable products'
      },
      {
        title: 'Sustainable Manufacturing',
        description: 'Clean production processes and circular economy solutions'
      },
      {
        title: 'Environmental Monitoring',
        description: 'Advanced sensors and analytics for environmental protection and compliance'
      },
      {
        title: 'Green Hydrogen Production',
        description: 'Efficient electrolysis and fuel cell technologies for clean energy storage'
      }
    ],
    projects: [
      {
        title: 'Revolutionary Solar Cell Technology',
        description: 'Developed perovskite-silicon tandem solar cells achieving 35% efficiency, setting new industry standards.',
        impact: '40% cost reduction in solar energy',
        client: 'Leading Solar Manufacturer',
        duration: '24 months',
        location: 'California, USA'
      },
      {
        title: 'Grid-Scale Energy Storage',
        description: 'Created advanced lithium-metal battery system with 10x longer lifespan and 50% higher energy density.',
        impact: '$5M+ market opportunity',
        client: 'Utility Consortium',
        duration: '36 months',
        location: 'Europe'
      },
      {
        title: 'Carbon-to-Fuel Technology',
        description: 'Engineered catalytic process converting atmospheric CO2 directly into aviation fuel.',
        impact: '80% emissions reduction',
        client: 'Aviation Industry',
        duration: '30 months',
        location: 'International'
      }
    ],
    metrics: {
      projects: '120+',
      clients: '35',
      impact: '$2.3M+',
      efficiency: '35%'
    }
  },
  'chemistry': {
    icon: FlaskConical,
    title: 'Chemistry & Materials',
    subtitle: 'Advanced Materials Innovation',
    description: 'Engineer the materials of tomorrow with breakthrough chemistry and nanotechnology that enable new possibilities across industries.',
    color: 'from-orange-500 to-red-500',
    heroImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=600&fit=crop',
    overview: 'Our Chemistry & Materials practice develops revolutionary materials and chemical processes that enable breakthrough innovations. From self-healing polymers to quantum materials, we create the building blocks of future technologies.',
    capabilities: [
      {
        title: 'Advanced Polymer Science',
        description: 'Smart materials with self-healing, adaptive, and responsive properties'
      },
      {
        title: 'Nanotechnology & Nanomaterials',
        description: 'Engineered materials at the atomic scale for unprecedented performance'
      },
      {
        title: 'Catalysis & Process Chemistry',
        description: 'Efficient chemical processes and catalytic systems for sustainable production'
      },
      {
        title: 'Biomaterials & Biocompatibility',
        description: 'Materials designed for medical applications and biological integration'
      },
      {
        title: 'Quantum Materials',
        description: 'Materials with quantum properties for next-generation electronics'
      },
      {
        title: 'Sustainable Chemistry',
        description: 'Green chemistry approaches for environmentally friendly processes'
      }
    ],
    projects: [
      {
        title: 'Self-Healing Infrastructure Materials',
        description: 'Developed smart concrete that automatically repairs cracks, extending infrastructure lifespan by 300%.',
        impact: '$2B+ infrastructure savings',
        client: 'Department of Transportation',
        duration: '42 months',
        location: 'USA'
      },
      {
        title: 'Quantum Dot Display Technology',
        description: 'Created ultra-efficient quantum dot materials for displays with 99% color accuracy and 50% lower power consumption.',
        impact: 'Next-gen display standard',
        client: 'Electronics Manufacturer',
        duration: '18 months',
        location: 'Asia'
      },
      {
        title: 'Biodegradable Packaging Revolution',
        description: 'Engineered plant-based polymers that decompose in 30 days while maintaining food safety standards.',
        impact: '1M+ tons plastic reduction',
        client: 'Food Industry Consortium',
        duration: '24 months',
        location: 'Global'
      }
    ],
    metrics: {
      projects: '95+',
      clients: '28',
      impact: '$900M+',
      innovation: '300%'
    }
  },
  'public-policy': {
    icon: Building2,
    title: 'Public Policy & Governance',
    subtitle: 'Evidence-Based Policy Solutions',
    description: 'Transform governance with data-driven policy solutions and innovative approaches to public challenges that create lasting societal impact.',
    color: 'from-indigo-500 to-purple-500',
    heroImage: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&h=600&fit=crop',
    overview: 'Our Public Policy practice combines rigorous research with practical implementation to develop evidence-based solutions for complex societal challenges. We work with governments and organizations to create policies that drive positive change.',
    capabilities: [
      {
        title: 'Policy Analysis & Design',
        description: 'Comprehensive policy research and evidence-based recommendation development'
      },
      {
        title: 'Regulatory Innovation',
        description: 'Modern regulatory frameworks for emerging technologies and industries'
      },
      {
        title: 'Digital Government Solutions',
        description: 'Technology-enabled public services and digital transformation strategies'
      },
      {
        title: 'Economic Impact Assessment',
        description: 'Quantitative analysis of policy impacts on economic growth and development'
      },
      {
        title: 'Stakeholder Engagement',
        description: 'Collaborative approaches to policy development and implementation'
      },
      {
        title: 'International Policy Coordination',
        description: 'Cross-border policy harmonization and international cooperation frameworks'
      }
    ],
    projects: [
      {
        title: 'AI Governance Framework',
        description: 'Developed comprehensive AI ethics and governance framework adopted by 15+ countries for responsible AI deployment.',
        impact: 'Global AI policy standard',
        client: 'International Organization',
        duration: '18 months',
        location: 'Global'
      },
      {
        title: 'Smart City Policy Blueprint',
        description: 'Created integrated policy framework for smart city development, balancing innovation with privacy and equity.',
        impact: '50+ cities implementation',
        client: 'Urban Development Agency',
        duration: '24 months',
        location: 'International'
      },
      {
        title: 'Climate Policy Optimization',
        description: 'Designed carbon pricing mechanism that reduced emissions by 40% while maintaining economic growth.',
        impact: '40% emissions reduction',
        client: 'National Government',
        duration: '36 months',
        location: 'Europe'
      }
    ],
    metrics: {
      projects: '75+',
      clients: '20',
      impact: '$500M+',
      adoption: '15+'
    }
  },
  'mobility': {
    icon: Car,
    title: 'Mobility & Transportation',
    subtitle: 'Future of Transportation',
    description: 'Revolutionize how people and goods move with autonomous systems, sustainable transportation, and smart mobility solutions for connected cities.',
    color: 'from-teal-500 to-blue-500',
    heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop',
    overview: 'Our Mobility practice develops next-generation transportation technologies that make movement safer, more efficient, and sustainable. From autonomous vehicles to smart logistics, we shape the future of mobility.',
    capabilities: [
      {
        title: 'Autonomous Vehicle Systems',
        description: 'Self-driving technology and AI systems for safe autonomous transportation'
      },
      {
        title: 'Electric Vehicle Technology',
        description: 'Advanced battery systems and charging infrastructure for electric mobility'
      },
      {
        title: 'Smart Traffic Management',
        description: 'AI-powered traffic optimization and intelligent transportation systems'
      },
      {
        title: 'Sustainable Logistics',
        description: 'Efficient supply chain and delivery systems with minimal environmental impact'
      },
      {
        title: 'Mobility-as-a-Service',
        description: 'Integrated platforms connecting all transportation modes seamlessly'
      },
      {
        title: 'Urban Air Mobility',
        description: 'Electric aircraft and drone systems for urban transportation'
      }
    ],
    projects: [
      {
        title: 'Autonomous Fleet Management',
        description: 'Deployed AI-powered autonomous vehicle fleet reducing transportation costs by 60% and accidents by 95%.',
        impact: '95% accident reduction',
        client: 'Transportation Authority',
        duration: '30 months',
        location: 'Singapore'
      },
      {
        title: 'Smart Charging Network',
        description: 'Built intelligent EV charging infrastructure with dynamic pricing and grid optimization capabilities.',
        impact: '10x faster adoption',
        client: 'Energy Utility',
        duration: '24 months',
        location: 'Scandinavia'
      },
      {
        title: 'Urban Air Taxi System',
        description: 'Developed electric vertical takeoff aircraft and air traffic management system for urban mobility.',
        impact: '70% travel time reduction',
        client: 'Aviation Startup',
        duration: '48 months',
        location: 'USA'
      }
    ],
    metrics: {
      projects: '110+',
      clients: '32',
      impact: '$1.1B+',
      efficiency: '60%'
    }
  },
  'private-equity': {
    icon: TrendingUp,
    title: 'Private Equity & Finance',
    subtitle: 'Investment Innovation & Strategy',
    description: 'Drive superior returns with advanced analytics, AI-powered due diligence, and innovative financial technologies that transform investment strategies.',
    color: 'from-amber-500 to-orange-500',
    heroImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop',
    overview: 'Our Private Equity practice leverages cutting-edge technology and deep industry expertise to enhance investment decisions, optimize portfolio performance, and identify breakthrough opportunities in emerging markets.',
    capabilities: [
      {
        title: 'AI-Powered Due Diligence',
        description: 'Advanced analytics and machine learning for comprehensive investment analysis'
      },
      {
        title: 'Portfolio Optimization',
        description: 'Data-driven strategies for maximizing portfolio performance and risk management'
      },
      {
        title: 'Market Intelligence',
        description: 'Real-time market analysis and trend identification for strategic positioning'
      },
      {
        title: 'ESG Integration',
        description: 'Environmental, social, and governance frameworks for sustainable investing'
      },
      {
        title: 'Digital Transformation',
        description: 'Technology-enabled business model innovation for portfolio companies'
      },
      {
        title: 'Alternative Data Analytics',
        description: 'Novel data sources and analytics for competitive investment insights'
      }
    ],
    projects: [
      {
        title: 'AI Investment Platform',
        description: 'Built machine learning platform that improved investment returns by 35% through predictive market analysis.',
        impact: '35% return improvement',
        client: 'Global PE Firm',
        duration: '18 months',
        location: 'New York, USA'
      },
      {
        title: 'ESG Impact Measurement',
        description: 'Developed comprehensive ESG scoring system enabling $5B+ in sustainable investments.',
        impact: '$5B+ sustainable investments',
        client: 'Impact Investment Fund',
        duration: '12 months',
        location: 'London, UK'
      },
      {
        title: 'Portfolio Digital Transformation',
        description: 'Led digital transformation across 20+ portfolio companies, increasing valuations by average 150%.',
        impact: '150% valuation increase',
        client: 'Mid-Market PE Fund',
        duration: '36 months',
        location: 'Europe'
      }
    ],
    metrics: {
      projects: '65+',
      clients: '18',
      impact: '$3.2B+',
      returns: '35%'
    }
  },
  'software-engineering': {
    icon: Code,
    title: 'Software Engineering',
    subtitle: 'Next-Generation Software Solutions',
    description: 'Build the software infrastructure of tomorrow with cloud-native architectures, AI-powered development, and scalable systems that drive digital transformation.',
    color: 'from-violet-500 to-purple-500',
    heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
    overview: 'Our Software Engineering practice develops cutting-edge software solutions that power digital transformation. From cloud-native architectures to AI-powered applications, we build the technology infrastructure that enables innovation.',
    capabilities: [
      {
        title: 'Cloud-Native Architecture',
        description: 'Scalable, resilient systems built for modern cloud environments'
      },
      {
        title: 'AI-Powered Development',
        description: 'Machine learning integration and intelligent software development tools'
      },
      {
        title: 'Microservices & APIs',
        description: 'Distributed systems and API-first architectures for maximum flexibility'
      },
      {
        title: 'DevOps & Automation',
        description: 'Continuous integration, deployment, and infrastructure automation'
      },
      {
        title: 'Cybersecurity & Privacy',
        description: 'Security-first development and privacy-preserving technologies'
      },
      {
        title: 'Quantum Computing',
        description: 'Quantum algorithms and hybrid classical-quantum software systems'
      }
    ],
    projects: [
      {
        title: 'Quantum-Classical Hybrid Platform',
        description: 'Developed software platform enabling seamless integration of quantum and classical computing resources.',
        impact: '1000x computational speedup',
        client: 'Technology Giant',
        duration: '24 months',
        location: 'Silicon Valley, USA'
      },
      {
        title: 'AI-Powered Code Generation',
        description: 'Created intelligent development platform that generates production-ready code from natural language descriptions.',
        impact: '80% development time reduction',
        client: 'Software Company',
        duration: '18 months',
        location: 'Seattle, USA'
      },
      {
        title: 'Global-Scale Microservices',
        description: 'Architected distributed system handling 1B+ daily transactions with 99.99% uptime.',
        impact: '99.99% uptime achieved',
        client: 'E-commerce Platform',
        duration: '30 months',
        location: 'Global'
      }
    ],
    metrics: {
      projects: '200+',
      clients: '55',
      impact: '$2.1B+',
      performance: '1000x'
    }
  }
}

export default function ExpertiseFieldPage({ params }: { params: { field: string } }) {
  const fieldData = expertiseData[params.field as keyof typeof expertiseData]
  
  if (!fieldData) {
    notFound()
  }

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: capabilitiesRef, inView: capabilitiesInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={fieldData.heroImage}
            alt={fieldData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 container-max section-padding text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${fieldData.color} rounded-2xl mb-6`}>
              <fieldData.icon className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {fieldData.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              {fieldData.subtitle}
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {fieldData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview & Metrics */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  What We Do
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {fieldData.overview}
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="card p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Impact Metrics
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {fieldData.metrics.projects}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {fieldData.metrics.clients}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Clients Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {fieldData.metrics.impact}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Value Created</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section ref={capabilitiesRef} className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive expertise across all aspects of {fieldData.title.toLowerCase()}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fieldData.capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {capability.description}
                    </p>
                  </div>
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
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real-world applications and breakthrough innovations in {fieldData.title.toLowerCase()}
            </p>
          </motion.div>

          <div className="space-y-8">
            {fieldData.projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Innovate in {fieldData.title}?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our expertise can accelerate your next breakthrough project.
            </p>
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
