'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Rocket, Brain, Zap, Globe, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { HeroSection } from '@/components/HeroSection'
import { SectorsOverview } from '@/components/SectorsOverview'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { StatsSection } from '@/components/StatsSection'
import { CTASection } from '@/components/CTASection'

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <StatsSection />
      <SectorsOverview />
      <FeaturedProjects />
      <CTASection />
    </div>
  )
}
