'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Users, 
  Rocket, 
  Heart, 
  Globe, 
  ArrowRight, 
  MapPin, 
  Clock, 
  DollarSign,
  GraduationCap,
  Briefcase,
  Star,
  Upload
} from 'lucide-react'

const benefits = [
  {
    icon: Rocket,
    title: 'Innovation-First Culture',
    description: 'Work on cutting-edge projects that push the boundaries of science and technology'
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'Access to conferences, courses, and research opportunities to expand your expertise'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Contribute to solutions that address humanity\'s greatest challenges worldwide'
  },
  {
    icon: Users,
    title: 'Collaborative Environment',
    description: 'Work alongside world-class researchers, scientists, and industry experts'
  },
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description: 'Industry-leading salaries, equity participation, and comprehensive benefits'
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible schedules, remote work options, and wellness programs'
  }
]

const openRoles = [
  {
    title: 'Senior AI Research Scientist',
    department: 'Data & AI',
    location: 'San Francisco, CA / Remote',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead breakthrough AI research projects and develop next-generation machine learning algorithms for enterprise applications.',
    requirements: [
      'PhD in Computer Science, AI, or related field',
      'Experience with deep learning frameworks (PyTorch, TensorFlow)',
      'Published research in top-tier conferences',
      'Strong programming skills in Python and C++'
    ]
  },
  {
    title: 'Aerospace Systems Engineer',
    department: 'Aerospace & Defense',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Design and develop advanced propulsion systems and satellite technologies for next-generation aerospace applications.',
    requirements: [
      'MS/PhD in Aerospace Engineering or related field',
      'Experience with CAD software and simulation tools',
      'Knowledge of propulsion systems and orbital mechanics',
      'Security clearance preferred'
    ]
  },
  {
    title: 'Sustainability Consultant',
    department: 'Energy & Environment',
    location: 'Boston, MA / Hybrid',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Develop sustainable energy solutions and environmental impact strategies for Fortune 500 clients.',
    requirements: [
      'MS in Environmental Science, Engineering, or related field',
      'Experience with renewable energy technologies',
      'Strong analytical and communication skills',
      'Consulting experience preferred'
    ]
  },
  {
    title: 'Materials Science Researcher',
    department: 'Chemistry & Materials',
    location: 'Cambridge, MA',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Research and develop advanced materials for aerospace, electronics, and biomedical applications.',
    requirements: [
      'PhD in Materials Science, Chemistry, or related field',
      'Experience with nanomaterials and characterization techniques',
      'Published research in materials science journals',
      'Lab management experience preferred'
    ]
  },
  {
    title: 'Innovation Strategy Analyst',
    department: 'Strategy & Operations',
    location: 'New York, NY / Remote',
    type: 'Full-time',
    experience: '1-3 years',
    description: 'Analyze market trends, competitive landscapes, and technology opportunities to guide innovation strategies.',
    requirements: [
      'MBA or MS in relevant field',
      'Strong analytical and research skills',
      'Experience with data analysis tools',
      'Consulting or strategy experience preferred'
    ]
  },
  {
    title: 'Senior Software Architect',
    department: 'Software Engineering',
    location: 'Seattle, WA / Remote',
    type: 'Full-time',
    experience: '7+ years',
    description: 'Design scalable software architectures for enterprise clients and lead technical implementation teams.',
    requirements: [
      'BS/MS in Computer Science or related field',
      'Experience with cloud platforms (AWS, Azure, GCP)',
      'Expertise in microservices and distributed systems',
      'Leadership and mentoring experience'
    ]
  }
]

const testimonials = [
  {
    name: 'Dr. Sarah Kim',
    role: 'Senior AI Researcher',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    quote: 'Working here has been transformative. I\'ve contributed to AI breakthroughs that are already changing industries, while growing my expertise alongside brilliant colleagues.'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Aerospace Engineer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    quote: 'The projects here are unlike anywhere else. We\'re literally building the future of space technology, and the company supports our wildest innovative ideas.'
  },
  {
    name: 'Dr. Aisha Patel',
    role: 'Innovation Strategist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
    quote: 'The collaborative culture is incredible. Every day I work with experts from different fields, and together we solve problems that seemed impossible.'
  }
]

export default function CareersPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: benefitsRef, inView: benefitsInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: rolesRef, inView: rolesInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ triggerOnce: true, threshold: 0.1 })

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
              Shape the <span className="text-gradient">Future</span> with Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
              Join a team of world-class innovators working on breakthrough technologies 
              that will define the next century. Your expertise can change the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#open-positions"
                className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="#culture"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn About Our Culture
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work Here */}
      <section id="culture" ref={benefitsRef} className="section-padding bg-white dark:bg-dark-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Innovation Labs?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer more than just a job – we provide a platform to make meaningful 
              contributions to humanity's greatest challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-8 text-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" ref={rolesRef} className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={rolesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore opportunities to join our team and work on projects that will 
              shape the future of technology and innovation.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                animate={rolesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {role.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                        {role.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{role.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{role.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{role.experience}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {role.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Requirements:
                      </h4>
                      <ul className="space-y-1">
                        {role.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2">
                            <Star className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary w-full mb-4"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                    <button className="btn-secondary w-full">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={rolesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Don't see the perfect role? We're always looking for exceptional talent.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center"
            >
              <Upload className="w-5 h-5 mr-2" />
              Submit Your Resume
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="section-padding bg-white dark:bg-dark-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Team Says
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from our innovators about their experience working on breakthrough technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card p-8 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <blockquote className="text-gray-600 dark:text-gray-400 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-primary-600 dark:text-primary-400">
                    {testimonial.role}
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
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Change the World?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our mission to transform breakthrough research into solutions that matter. 
              Your next career move could be your most impactful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#open-positions"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Our HR Team
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
