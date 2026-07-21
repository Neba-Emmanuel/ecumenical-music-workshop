'use client'

import HeroSection from '@/components/hero-section'
import PosterGenerator from '@/components/poster-generator'

export default function Page() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <HeroSection />
      <div style={{
        background: 'linear-gradient(to bottom right, #f8fafc, #f1f5f9)'
      }}>
        <PosterGenerator />
      </div>
    </main>
  )
}
