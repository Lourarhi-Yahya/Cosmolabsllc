'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Linkedin, 
  MessageCircle,
  Building,
  Users,
  Globe,
  CheckCircle
} from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Headquarters',
    details: [
      '123 Innovation Drive',
      'Tech Valley, CA 94025',
      'United States'
    ]
  },
  {
    icon: Phone,
    title: 'Phone',
    details: [
      'Main: +1 (555) 123-4567',
      'Direct: +1 (555) 123-4568',
      'Emergency: +1 (555) 123-4569'
    ]
  },
  {
    icon: Mail,
    title: 'Email',
    details: [
      'General: llccosmolabs@gmail.com',
      'Partnerships: llccosmolabs@gmail.com',
      'Careers: llccosmolabs@gmail.com'
    ]
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: [
      'Monday - Friday: 9:00 AM - 6:00 PM PST',
      'Saturday: 10:00 AM - 2:00 PM PST',
      'Sunday: Closed'
    ]
  }
]

const offices = [
  {
    city: 'Norcross',
    country: 'United States',
    address: '5884 Old Town Place, Norcross, GA 30093',
    phone: '+1 (555) 123-4567',
    email: 'llccosmolabs@gmail.com',
    specialties: ['Data & AI', 'Software Engineering']
  },
  {
    city: 'Boston',
    country: 'United States',
    address: '456 Research Blvd, Cambridge, MA 02139',
    phone: '+1 (617) 555-0123',
    email: 'llccosmolabs@gmail.com',
    specialties: ['Energy & Environment', 'Chemistry & Materials']
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '789 Innovation Square, London EC2A 4DP',
    phone: '+44 20 7123 4567',
    email: 'llccosmolabs@gmail.com',
    specialties: ['Aerospace & Defense', 'Public Policy']
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '321 Tech Park Drive, Singapore 138577',
    phone: '+65 6123 4567',
    email: 'llccosmolabs@gmail.com',
    specialties: ['Mobility & Transport', 'Private Equity']
  }
]

const inquiryTypes = [
  'General Inquiry',
  'Project Consultation',
  'Partnership Opportunity',
  'Investment Discussion',
  'Media & Press',
  'Career Opportunity',
  'Technical Support',
  'Other'
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'General Inquiry',
    subject: '',
    message: '',
    newsletter: false
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: officesRef, inView: officesInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiryType: 'General Inquiry',
        subject: '',
        message: '',
        newsletter: false
      })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

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
              Let's Build the <span className="text-gradient">Future</span> Together
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
              Ready to transform your breakthrough ideas into market-ready innovations? 
              Our team of experts is here to help you navigate the journey from concept to success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section ref={formRef} className="section-padding bg-white dark:bg-dark-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 dark:text-gray-400">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/cosmolabs-llc-1a3427377/"
                    className="p-3 bg-gray-100 dark:bg-dark-800 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:llccosmolabs@gmail.com"
                    className="p-3 bg-gray-100 dark:bg-dark-800 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="p-3 bg-gray-100 dark:bg-dark-800 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="card p-8">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Send us a Message
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="John Doe"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Company/Organization
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Your Company"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Inquiry Type *
                          </label>
                          <select
                            id="inquiryType"
                            name="inquiryType"
                            required
                            value={formData.inquiryType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            {inquiryTypes.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                          placeholder="Tell us about your project, goals, and how we can help..."
                        />
                      </div>

                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id="newsletter"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="newsletter" className="text-sm text-gray-700 dark:text-gray-300">
                          Subscribe to our newsletter for latest insights and updates
                        </label>
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full btn-primary"
                      >
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </motion.button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Redirecting in a few seconds...
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section ref={officesRef} className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={officesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Global Presence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              With offices across four continents, we're positioned to serve clients 
              worldwide and collaborate across time zones.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                animate={officesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {office.city}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {office.country}
                </p>
                
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <p>{office.address}</p>
                  <p>{office.phone}</p>
                  <p>{office.email}</p>
                </div>
                
                <div>
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Specialties:
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {office.specialties.map(specialty => (
                      <span
                        key={specialty}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={officesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Visit Our Headquarters
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Located in the heart of Silicon Valley's innovation district
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={officesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="card overflow-hidden"
          >
            {/* Placeholder for map - in a real implementation, you'd use Google Maps or similar */}
            <div className="h-96 bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  Interactive map would be embedded here
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  123 Innovation Drive, Tech Valley, CA 94025
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
