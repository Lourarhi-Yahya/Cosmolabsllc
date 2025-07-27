import { notFound } from 'next/navigation'
import ClientExpertisePage from './ClientExpertisePage'
import { 
  Brain, 
  Rocket, 
  Zap, 
  FlaskConical, 
  Building2, 
  Car, 
  TrendingUp, 
  Code
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
        location: 'Detroit, USA'
      }
    ],
    metrics: {
      projects: '150+',
      clients: '45',
      impact: '$2.8M+',
      accuracy: '99.2%'
    }
  },
  'aerospace': {
    icon: 'Rocket',
    title: 'Aerospace & Defense',
    subtitle: 'Advanced Aerospace Technologies',
    description: 'Pioneer the future of flight and space exploration with revolutionary aerospace technologies that push the boundaries of what\'s possible.',
    color: 'from-purple-500 to-indigo-500',
    heroImage: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=600&fit=crop',
    overview: 'Our Aerospace & Defense practice delivers cutting-edge solutions for the most demanding applications. From hypersonic vehicles to satellite systems, we engineer technologies that operate in the harshest environments.',
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
        location: 'California, USA'
      },
      {
        title: 'Next-Generation Satellite Constellation',
        description: 'Designed and deployed advanced satellite network providing global high-speed internet with 99.9% uptime.',
        impact: '1M+ users connected',
        client: 'Space Technology Company',
        duration: '48 months',
        location: 'Global'
      },
      {
        title: 'Hypersonic Vehicle Development',
        description: 'Created breakthrough hypersonic propulsion system achieving Mach 7+ speeds with enhanced maneuverability.',
        impact: 'Revolutionary defense capability',
        client: 'Defense Contractor',
        duration: '60 months',
        location: 'Classified'
      }
    ],
    metrics: {
      projects: '85+',
      clients: '25',
      impact: '$1.8M+',
      reliability: '99.9%'
    }
  },
  'energy': {
    icon: 'Zap',
    title: 'Energy & Sustainability',
    subtitle: 'Clean Energy Innovation',
    description: 'Accelerate the transition to sustainable energy with breakthrough technologies that harness renewable resources and optimize energy systems.',
    color: 'from-green-500 to-emerald-500',
    heroImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=600&fit=crop',
    overview: 'Our Energy & Sustainability practice develops transformative technologies for a carbon-neutral future. From advanced solar cells to smart grid systems, we create solutions that make clean energy accessible and efficient.',
    capabilities: [
      {
        title: 'Renewable Energy Systems',
        description: 'Next-generation solar, wind, and hydroelectric power technologies'
      },
      {
        title: 'Energy Storage Solutions',
        description: 'Advanced battery technologies and grid-scale energy storage systems'
      },
      {
        title: 'Smart Grid & Distribution',
        description: 'Intelligent energy distribution networks and demand management systems'
      },
      {
        title: 'Carbon Capture & Utilization',
        description: 'Technologies for capturing and converting CO2 into useful products'
      },
      {
        title: 'Energy Efficiency Optimization',
        description: 'AI-driven systems for optimizing energy consumption and reducing waste'
      },
      {
        title: 'Sustainable Transportation',
        description: 'Electric vehicle technologies and alternative fuel systems'
      }
    ],
    projects: [
      {
        title: 'Perovskite Solar Cell Breakthrough',
        description: 'Developed next-generation solar cells with 35% efficiency and 25-year lifespan, revolutionizing renewable energy.',
        impact: '40% cost reduction vs silicon',
        client: 'Solar Technology Leader',
        duration: '24 months',
        location: 'California, USA'
      },
      {
        title: 'Grid-Scale Energy Storage',
        description: 'Created advanced lithium-ion battery system with 10x longer lifespan and 50% higher energy density.',
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
    icon: 'FlaskConical',
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
        title: 'Catalysis & Chemical Processes',
        description: 'Novel catalytic systems for efficient and sustainable chemical production'
      },
      {
        title: 'Biomaterials & Bioengineering',
        description: 'Bio-inspired materials for medical and environmental applications'
      },
      {
        title: 'Quantum Materials',
        description: 'Materials with quantum properties for next-generation technologies'
      },
      {
        title: 'Sustainable Chemistry',
        description: 'Green chemistry approaches for environmentally friendly processes'
      }
    ],
    projects: [
      {
        title: 'Self-Healing Polymer Composites',
        description: 'Developed autonomous self-healing materials that extend product lifespan by 300% and reduce maintenance costs.',
        impact: '$10M+ cost savings potential',
        client: 'Automotive Manufacturer',
        duration: '18 months',
        location: 'Germany'
      },
      {
        title: 'Quantum Dot Display Technology',
        description: 'Created breakthrough quantum dot materials achieving 100% color gamut and 50% energy efficiency improvement.',
        impact: 'Next-gen display standard',
        client: 'Electronics Giant',
        duration: '30 months',
        location: 'Asia'
      },
      {
        title: 'Bio-Inspired Drug Delivery',
        description: 'Engineered smart nanoparticles for targeted drug delivery with 95% precision and minimal side effects.',
        impact: '1M+ patients treated',
        client: 'Pharmaceutical Company',
        duration: '42 months',
        location: 'Switzerland'
      }
    ],
    metrics: {
      projects: '95+',
      clients: '30',
      impact: '$1.5M+',
      precision: '95%'
    }
  }
}

export async function generateStaticParams() {
  return Object.keys(expertiseData).map((field) => ({ field }));
}

export default function Page({ params }: { params: { field: string } }) {
  const fieldData = expertiseData[params.field]
  if (!fieldData) return notFound()
  return <ClientExpertisePage fieldData={fieldData} />
}
