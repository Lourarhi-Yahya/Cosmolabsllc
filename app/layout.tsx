import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cosmolabs LLC | Exploring Tomorrow. Building It Today.',
  description: 'Leading R&D and Innovation consulting firm specializing in Data & AI, Aerospace, Energy, Chemistry, Public Policy, Mobility, Private Equity, and Software Engineering.',
  keywords: 'R&D consulting, innovation consulting, data science, AI, aerospace, energy, chemistry, public policy, mobility, private equity, software engineering, cosmolabs',
  authors: [{ name: 'Cosmolabs LLC' }],
  openGraph: {
    title: 'Cosmolabs LLC - R&D Innovation Consulting',
    description: 'Exploring Tomorrow. Building It Today.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmolabs LLC - R&D Innovation Consulting',
    description: 'Exploring Tomorrow. Building It Today.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-dark-900 text-gray-900 dark:text-white`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
