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
      <footer style={{
        padding: '1.1rem 1rem',
        backgroundColor: '#2f164f',
        color: '#ede9fe',
        textAlign: 'center'
      }}>
        <p style={{
          margin: 0,
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.02em'
        }}>
          Made with love for MDP2026 by
          <span aria-hidden="true" style={{ color: '#efb823', margin: '0 0.35rem' }}>•</span>
          <a
            href="https://neba-emmanuel.vercel.app/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#f4c84b',
              fontWeight: 800,
              textDecoration: 'none'
            }}
          >
            Neba Emmanuel
          </a>
        </p>
      </footer>
    </main>
  )
}
