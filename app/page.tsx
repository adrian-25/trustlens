'use client'

import { useState, useEffect } from 'react'
import { IntroAnimation } from '@/components/landing/intro-animation'
import { Navbar } from '@/components/landing/navbar'
import { Hero } from '@/components/landing/hero'
import { ProblemSection } from '@/components/landing/problem-section'
import { SolutionSection } from '@/components/landing/solution-section'
import { SocialProof } from '@/components/landing/social-proof'
import { ArchitectureDiagram } from '@/components/landing/architecture-diagram'
import { Features } from '@/components/landing/features'
import { Testimonial } from '@/components/landing/testimonial'
import { Stats } from '@/components/landing/stats'
import { Pricing } from '@/components/landing/pricing'
import { Footer } from '@/components/landing/footer'

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [hasVisited, setHasVisited] = useState(false)

  useEffect(() => {
    // Check if user has visited before (session-based)
    const visited = sessionStorage.getItem('trustlens-visited')
    if (visited) {
      setShowIntro(false)
      setHasVisited(true)
    }
  }, [])

  const handleIntroComplete = () => {
    setShowIntro(false)
    sessionStorage.setItem('trustlens-visited', 'true')
  }

  return (
    <>
      {showIntro && !hasVisited && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <SocialProof />
        <ArchitectureDiagram />
        <Features />
        <Testimonial />
        <Stats />
        <Pricing />
        <Footer />
      </main>
    </>
  )
}
