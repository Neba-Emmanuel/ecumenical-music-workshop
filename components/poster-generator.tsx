'use client'

import { useState, useRef } from 'react'
import { Music2, Download, Share2, Sparkles } from 'lucide-react'
import PosterPreview from './poster-preview'
import PosterEditor from './poster-editor'

export default function PosterGenerator() {
  const [photo, setPhoto] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [date, setDate] = useState('July 26 - August 8, 2026')
  const [location, setLocation] = useState('Limbe, Cameroon')
  const previewRef = useRef<HTMLDivElement>(null)

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setPhoto(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const captureOptions = {
    pixelRatio: 2,
    cacheBust: true,
    // Skip style elements that contain oklch/lab which some tools can't parse
    filter: (node: HTMLElement) => {
      if (node.tagName === 'STYLE') return false
      return true
    },
  }

  const downloadPoster = async () => {
    if (!previewRef.current) return

    try {
      const { toPng } = await import('html-to-image')
      const dataUrl = await toPng(previewRef.current, captureOptions)

      const link = document.createElement('a')
      link.href = dataUrl
      link.download = `mdp-ecumenical-workshop-${Date.now()}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  const sharePoster = async () => {
    if (!previewRef.current) return

    try {
      const { toBlob } = await import('html-to-image')
      const blob = await toBlob(previewRef.current, captureOptions)

      if (blob && navigator.share) {
        await navigator.share({
          title: 'MDP Ecumenical Music Workshop 2026',
          text: `I was there at the MDP Ecumenical Music Workshop 2026! ${name ? `- ${name}` : ''}`,
          files: [new File([blob], 'mdp-workshop-2026.png', { type: 'image/png' })],
        })
      } else if (blob) {
        // Fallback: download if share API isn't available
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `mdp-ecumenical-workshop-${Date.now()}.png`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      }
    } catch (error) {
      console.error('Share failed:', error)
    }
  }

  const isDisabled = !photo && !name

  return (
    <div className="poster-generator-section" style={{
      minHeight: '100vh',
      paddingTop: '3rem',
      paddingBottom: '3rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
    }}>
      <div style={{
        maxWidth: '80rem',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        {/* Header */}
        <div className="poster-generator-heading" style={{
          textAlign: 'center',
          marginBottom: '3rem',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(124, 58, 237, 0.08)',
            border: '1px solid rgba(124, 58, 237, 0.15)',
            borderRadius: '9999px',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            paddingTop: '0.4rem',
            paddingBottom: '0.4rem',
            marginBottom: '1.25rem',
          }}>
            <Sparkles style={{ width: '0.875rem', height: '0.875rem', color: '#7c3aed' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#7c3aed' }}>
              Poster Generator
            </span>
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900,
            color: '#111827',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em',
          }}>
            Create Your{' '}
            <span style={{
              color: 'transparent',
              backgroundImage: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>I Was There</span>{' '}
            Card
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#6b7280',
            maxWidth: '32rem',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Personalize your commemorative poster and share it with your community
          </p>
        </div>

        <div className="poster-generator-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 24rem), 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
        }}>
          {/* Editor Panel */}
          <PosterEditor
            photo={photo}
            name={name}
            date={date}
            location={location}
            onPhotoUpload={handlePhotoUpload}
            onNameChange={setName}
            onDateChange={setDate}
            onLocationChange={setLocation}
          />

          {/* Preview Panel */}
          <div className="poster-preview-panel" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            <PosterPreview
              ref={previewRef}
              photo={photo}
              name={name}
              date={date}
              location={location}
            />

            {/* Action Buttons */}
            <div className="poster-actions" style={{
              display: 'flex',
              gap: '0.75rem',
            }}>
              <button
                className="poster-action-button"
                onClick={downloadPoster}
                disabled={isDisabled}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  background: isDisabled ? '#e5e7eb' : 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                  color: isDisabled ? '#9ca3af' : '#ffffff',
                  fontWeight: 700,
                  padding: '0.875rem 1.5rem',
                  borderRadius: '0.75rem',
                  border: 'none',
                  cursor: isDisabled ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isDisabled ? 'none' : '0 4px 15px rgba(124, 58, 237, 0.3)',
                  fontSize: '0.9rem',
                }}
                onMouseEnter={(e) => {
                  if (!isDisabled) {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'
                    ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 25px rgba(124, 58, 237, 0.4)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isDisabled) {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                    ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 15px rgba(124, 58, 237, 0.3)'
                  }
                }}
              >
                <Download style={{ width: '1.1rem', height: '1.1rem' }} />
                Download
              </button>
              <button
                className="poster-action-button"
                onClick={sharePoster}
                disabled={isDisabled}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  background: isDisabled ? '#e5e7eb' : 'linear-gradient(135deg, #f59e0b, #d97706)',
                  color: isDisabled ? '#9ca3af' : '#ffffff',
                  fontWeight: 700,
                  padding: '0.875rem 1.5rem',
                  borderRadius: '0.75rem',
                  border: 'none',
                  cursor: isDisabled ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isDisabled ? 'none' : '0 4px 15px rgba(245, 158, 11, 0.3)',
                  fontSize: '0.9rem',
                }}
                onMouseEnter={(e) => {
                  if (!isDisabled) {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'
                    ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 25px rgba(245, 158, 11, 0.4)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isDisabled) {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                    ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 15px rgba(245, 158, 11, 0.3)'
                  }
                }}
              >
                <Share2 style={{ width: '1.1rem', height: '1.1rem' }} />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
