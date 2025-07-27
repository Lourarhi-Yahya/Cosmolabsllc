'use client'

import { motion } from 'framer-motion'

interface CosmolabsLogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export function CosmolabsLogo({ size = 'md', showText = true, className = '' }: CosmolabsLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  }

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={`${sizeClasses[size]} relative`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer ring representing cosmos */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#cosmosGradient)"
            strokeWidth="3"
            className="animate-pulse"
          />
          
          {/* Inner molecular structure */}
          <g transform="translate(50,50)">
            {/* Central atom */}
            <circle
              cx="0"
              cy="0"
              r="8"
              fill="url(#coreGradient)"
            />
            
            {/* Electron orbits */}
            <ellipse
              cx="0"
              cy="0"
              rx="25"
              ry="15"
              fill="none"
              stroke="url(#orbitGradient)"
              strokeWidth="2"
              opacity="0.7"
              transform="rotate(0)"
            />
            <ellipse
              cx="0"
              cy="0"
              rx="25"
              ry="15"
              fill="none"
              stroke="url(#orbitGradient)"
              strokeWidth="2"
              opacity="0.7"
              transform="rotate(60)"
            />
            <ellipse
              cx="0"
              cy="0"
              rx="25"
              ry="15"
              fill="none"
              stroke="url(#orbitGradient)"
              strokeWidth="2"
              opacity="0.7"
              transform="rotate(120)"
            />
            
            {/* Electrons */}
            <circle cx="25" cy="0" r="3" fill="url(#electronGradient)">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 0 0"
                to="360 0 0"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="-12.5" cy="21.65" r="3" fill="url(#electronGradient)">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="60 0 0"
                to="420 0 0"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="-12.5" cy="-21.65" r="3" fill="url(#electronGradient)">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="120 0 0"
                to="480 0 0"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
          
          {/* Gradients */}
          <defs>
            <linearGradient id="cosmosGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            
            <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </radialGradient>
            
            <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
            </linearGradient>
            
            <radialGradient id="electronGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#3B82F6" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Company Name */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizeClasses[size]} font-bold text-gray-900 dark:text-white leading-tight`}>
            Cosmolabs
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wider">
            LLC
          </span>
        </div>
      )}
    </div>
  )
}

// Simplified version for favicons and small spaces
export function CosmolabsIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified version - just the core atom structure */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#simpleGradient)"
        />
        
        <g transform="translate(50,50)">
          {/* Central core */}
          <circle
            cx="0"
            cy="0"
            r="12"
            fill="white"
          />
          
          {/* Simplified orbits */}
          <circle
            cx="0"
            cy="0"
            r="25"
            fill="none"
            stroke="white"
            strokeWidth="3"
            opacity="0.8"
          />
          
          {/* Electrons */}
          <circle cx="25" cy="0" r="4" fill="white" />
          <circle cx="-25" cy="0" r="4" fill="white" />
          <circle cx="0" cy="25" r="4" fill="white" />
        </g>
        
        <defs>
          <linearGradient id="simpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
