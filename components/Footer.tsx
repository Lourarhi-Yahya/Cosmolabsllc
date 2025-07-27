'use client'

import Link from 'next/link'
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { CosmolabsLogo } from './CosmolabsLogo'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Approach', href: '/approach' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  expertise: [
    { name: 'Data & AI', href: '/expertise/data-ai' },
    { name: 'Aerospace & Defense', href: '/expertise/aerospace' },
    { name: 'Energy & Environment', href: '/expertise/energy' },
    { name: 'Chemistry & Materials', href: '/expertise/chemistry' },
  ],
  resources: [
    { name: 'Insights', href: '/insights' },
    { name: 'Case Studies', href: '/insights' },
    { name: 'Whitepapers', href: '/insights' },
    { name: 'Reports', href: '/insights' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Legal Notices', href: '/legal' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <CosmolabsLogo size="md" showText={true} />
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Leading consulting firm specializing in R&D and Innovation. 
              Exploring Tomorrow. Building It Today.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>5884 Old Town Place, Norcross, GA 30093</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5" />
                <span>llccosmolabs@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.linkedin.com/in/cosmolabs-llc-1a3427377/"
                className="p-2 bg-gray-200 dark:bg-dark-700 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:llccosmolabs@gmail.com"
                className="p-2 bg-gray-200 dark:bg-dark-700 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Expertise</h3>
            <ul className="space-y-2">
              {footerLinks.expertise.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-dark-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 Cosmolabs LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
