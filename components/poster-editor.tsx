'use client'

import { Upload, X } from 'lucide-react'
import { useRef } from 'react'

interface PosterEditorProps {
  photo: string | null
  name: string
  date: string
  location: string
  onPhotoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
  onNameChange: (value: string) => void
  onDateChange: (value: string) => void
  onLocationChange: (value: string) => void
}

export default function PosterEditor({
  photo,
  name,
  date,
  location,
  onPhotoUpload,
  onNameChange,
  onDateChange,
  onLocationChange,
}: PosterEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '1rem',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      padding: '2rem',
      height: 'fit-content',
      position: 'sticky',
      top: '2rem'
    }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: '1.5rem'
      }}>Customize Your Poster</h2>

      {/* Photo Upload */}
      <div style={{ marginBottom: '2rem' }}>
        <label style={{
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: '#374151',
          marginBottom: '0.75rem'
        }}>
          Your Photo
        </label>
        <div
          onClick={() => fileInputRef.current?.click()}
          style={{
            position: 'relative',
            border: '3px dashed #d8b4fe',
            borderRadius: '0.75rem',
            padding: '2rem',
            cursor: 'pointer',
            transition: 'all 0.2s',
            background: 'linear-gradient(to right, #faf5ff, #fefce8)'
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLDivElement).style.borderColor = '#a855f7';
            (e.currentTarget as HTMLDivElement).style.background = 'linear-gradient(to right, #f3e8ff, #fef3c7)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLDivElement).style.borderColor = '#d8b4fe';
            (e.currentTarget as HTMLDivElement).style.background = 'linear-gradient(to right, #faf5ff, #fefce8)'
          }}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={onPhotoUpload}
            style={{ display: 'none' }}
            aria-label="Upload photo"
          />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}>
            <Upload style={{
              width: '2.5rem',
              height: '2.5rem',
              color: '#a855f7',
              marginBottom: '0.5rem'
            }} />
            <p style={{
              fontWeight: 600,
              color: '#374151'
            }}>Click to upload photo</p>
            <p style={{
              fontSize: '0.875rem',
              color: '#6b7280'
            }}>PNG, JPG, GIF up to 10MB</p>
          </div>
          {photo && (
            <div style={{
              position: 'relative',
              width: '100%',
              height: '8rem',
              marginTop: '1rem',
              overflow: 'hidden',
              borderRadius: '0.5rem',
              contain: 'layout paint'
            }}>
              <img
                src={photo}
                alt="Preview"
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  minWidth: 0,
                  maxWidth: 'none',
                  objectFit: 'cover',
                  objectPosition: '50% 28%'
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Name Input */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="name" style={{
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: '#374151',
          marginBottom: '0.5rem'
        }}>
          Your Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Enter your name"
          maxLength={30}
          style={{
            width: '100%',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            border: '2px solid #e5e7eb',
            borderRadius: '0.5rem',
            fontWeight: 600,
            color: '#111827',
            fontSize: '1rem'
          }}
          onFocus={(e) => {
            (e.target as HTMLInputElement).style.borderColor = '#a855f7'
          }}
          onBlur={(e) => {
            (e.target as HTMLInputElement).style.borderColor = '#e5e7eb'
          }}
        />
        <p style={{
          fontSize: '0.75rem',
          color: '#6b7280',
          marginTop: '0.25rem'
        }}>{name.length}/30 characters</p>
      </div>

      {/* Date Input */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="date" style={{
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: '#374151',
          marginBottom: '0.5rem'
        }}>
          Event Dates
        </label>
        <input
          id="date"
          type="text"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          maxLength={50}
          style={{
            width: '100%',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            border: '2px solid #e5e7eb',
            borderRadius: '0.5rem',
            color: '#111827',
            fontSize: '1rem'
          }}
          onFocus={(e) => {
            (e.target as HTMLInputElement).style.borderColor = '#a855f7'
          }}
          onBlur={(e) => {
            (e.target as HTMLInputElement).style.borderColor = '#e5e7eb'
          }}
        />
      </div>

      {/* Location Input */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="location" style={{
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: '#374151',
          marginBottom: '0.5rem'
        }}>
          Location
        </label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          maxLength={40}
          style={{
            width: '100%',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            border: '2px solid #e5e7eb',
            borderRadius: '0.5rem',
            color: '#111827',
            fontSize: '1rem'
          }}
          onFocus={(e) => {
            (e.target as HTMLInputElement).style.borderColor = '#a855f7'
          }}
          onBlur={(e) => {
            (e.target as HTMLInputElement).style.borderColor = '#e5e7eb'
          }}
        />
      </div>

      {/* Info Box */}
      <div style={{
        background: 'linear-gradient(to right, #f3e8ff, #fefce8)',
        border: '2px solid #e9d5ff',
        borderRadius: '0.5rem',
        padding: '1rem'
      }}>
        <h3 style={{
          fontWeight: 'bold',
          color: '#111827',
          marginBottom: '0.5rem'
        }}>📱 Social Media Tips:</h3>
        <ul style={{
          fontSize: '0.875rem',
          color: '#374151',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem'
        }}>
          <li>✨ Download or share directly to your stories</li>
          <li>🎵 Tag your friends who attended</li>
          <li>💜 Use #MDP2026 #EcumenicalWorkshop</li>
        </ul>
      </div>
    </div>
  )
}
