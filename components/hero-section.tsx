import { Music2, Sparkles, Users } from 'lucide-react'

export default function HeroSection() {
  return (
    <div style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #a855f7 100%)',
      paddingTop: '4rem',
      paddingBottom: '4rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        fontSize: '4rem',
        opacity: 0.1
      }}>♪</div>
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '5%',
        fontSize: '3.5rem',
        opacity: 0.1
      }}>♫</div>
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '5%',
        fontSize: '3rem',
        opacity: 0.1
      }}>♪</div>

      {/* Content */}
      <div style={{
        maxWidth: '64rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          borderRadius: '9999px',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          marginBottom: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}>
          <Sparkles style={{
            width: '1rem',
            height: '1rem',
            color: '#fcd34d'
          }} />
          <span style={{
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#fef3c7'
          }}>MDP 2026 Ecumenical Music Workshop</span>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 4rem)',
          fontWeight: 900,
          color: '#ffffff',
          marginBottom: '1rem',
          lineHeight: 1.2,
          textShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
        }}>
          Celebrate Your Presence at the Workshop
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: 'clamp(1rem, 3vw, 1.25rem)',
          color: '#fef3c7',
          marginBottom: '2rem',
          lineHeight: 1.6,
          maxWidth: '48rem',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Create a personalized commemorative poster and share your memorable moments with the Christian community
        </p>

        {/* Features */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
          gap: '1rem',
          marginTop: '3rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 193, 7, 0.2)',
              borderRadius: '50%',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Music2 style={{
                width: '1.5rem',
                height: '1.5rem',
                color: '#fcd34d'
              }} />
            </div>
            <span style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#fef3c7'
            }}>Upload Your Photo</span>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 193, 7, 0.2)',
              borderRadius: '50%',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Sparkles style={{
                width: '1.5rem',
                height: '1.5rem',
                color: '#fcd34d'
              }} />
            </div>
            <span style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#fef3c7'
            }}>Customize Design</span>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 193, 7, 0.2)',
              borderRadius: '50%',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Users style={{
                width: '1.5rem',
                height: '1.5rem',
                color: '#fcd34d'
              }} />
            </div>
            <span style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#fef3c7'
            }}>Share & Celebrate</span>
          </div>
        </div>
      </div>
    </div>
  )
}
