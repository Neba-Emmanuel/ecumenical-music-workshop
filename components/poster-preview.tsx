'use client'

import { forwardRef } from 'react'
import { CalendarDays, MapPin, Music2 } from 'lucide-react'

interface PosterPreviewProps {
  photo: string | null
  name: string
  date: string
  location: string
}

const PosterPreview = forwardRef<HTMLDivElement, PosterPreviewProps>(
  ({ photo, name, date, location }, ref) => {
    const displayName = name.trim() || 'Your name here'

    return (
      <div
        ref={ref}
        data-testid="poster-preview"
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1 / 1',
          overflow: 'hidden',
          borderRadius: '1.25rem',
          background: '#fbfaf7',
          boxShadow: '0 28px 70px rgba(38, 20, 74, 0.18)',
          color: '#17131f',
          fontFamily: "Arial, Helvetica, sans-serif",
          isolation: 'isolate',
        }}
      >
        {/* Fine printed texture and sweeping music-inspired background lines. */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: -3,
            opacity: 0.5,
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(55, 26, 94, 0.1) 1px, transparent 0)',
            backgroundSize: '16px 16px',
            maskImage: 'linear-gradient(to bottom, black, transparent 76%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 76%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '68%',
            height: '68%',
            right: '-29%',
            top: '11%',
            zIndex: -2,
            border: '1px solid rgba(81, 35, 133, 0.12)',
            borderRadius: '50%',
            boxShadow:
              '0 0 0 13px rgba(81, 35, 133, 0.028), 0 0 0 28px rgba(81, 35, 133, 0.024), 0 0 0 44px rgba(81, 35, 133, 0.02)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '-11%',
            bottom: '13%',
            width: '50%',
            height: '22%',
            zIndex: -2,
            opacity: 0.48,
            transform: 'rotate(-8deg)',
            background:
              'repeating-linear-gradient(to bottom, transparent 0 10px, rgba(81, 35, 133, 0.11) 10px 11px)',
            borderRadius: '50%',
          }}
        />

        {/* Decorative musical artwork kept behind all readable content. */}
        <svg
          aria-hidden="true"
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          <g fill="none" stroke="#54258a" strokeLinecap="round" opacity="0.12">
            <path d="M24 330 C78 309 148 315 232 337" strokeWidth="1.5" />
            <path d="M23 340 C78 319 148 325 231 347" strokeWidth="1.5" />
            <path d="M23 350 C78 329 148 335 230 357" strokeWidth="1.5" />
            <path d="M24 360 C78 339 148 345 229 367" strokeWidth="1.5" />
            <path d="M26 370 C79 349 148 355 227 377" strokeWidth="1.5" />
          </g>

          <g fill="#54258a" opacity="0.23">
            <ellipse cx="91" cy="347" rx="8" ry="5.5" transform="rotate(-14 91 347)" />
            <path d="M97 345V298h3v47z" />
            <path d="M99 298c17 3 25 11 24 24-6-8-14-11-24-11z" />
            <ellipse cx="169" cy="363" rx="8" ry="5.5" transform="rotate(-14 169 363)" />
            <path d="M175 361v-43h3v43z" />
            <path d="M177 318c15 3 22 10 21 21-5-7-12-10-21-10z" />
          </g>

          <g fill="#efb823" opacity="0.78">
            <ellipse cx="46" cy="272" rx="7" ry="5" transform="rotate(-18 46 272)" />
            <path d="M51 270v-38h3v38z" />
            <path d="M53 232c13 2 20 8 19 18-5-6-11-8-19-8z" />
            <ellipse cx="447" cy="144" rx="6.5" ry="4.5" transform="rotate(-18 447 144)" />
            <path d="M452 142v-35h3v35z" />
            <path d="M454 107c12 2 18 8 17 17-4-5-10-7-17-7z" />
          </g>

          <g fill="none" stroke="#efb823" strokeLinecap="round" opacity="0.5">
            <path d="M221 389h8m6 0h4m6 0h13m6 0h5" strokeWidth="2" />
            <path d="M229 384v10m10-15v20m10-13v6m10-18v30m10-20v10" strokeWidth="2.4" />
          </g>
        </svg>

        {/* Masthead */}
        <header
          style={{
            position: 'absolute',
            top: '4.5%',
            left: '7%',
            right: '7%',
            display: 'grid',
            gridTemplateColumns: '3.65rem 1fr 3.65rem',
            alignItems: 'center',
            gap: '0.7rem',
          }}
        >
          <div
            style={{
              width: '3.65rem',
              height: '3.65rem',
              overflow: 'hidden',
              display: 'grid',
              placeItems: 'center',
              borderRadius: '50%',
              background: '#ffffff',
              boxShadow: '0 4px 12px rgba(40, 19, 67, 0.1)',
            }}
          >
            <img
              src="/pcc-logo.png"
              alt="Presbyterian Church in Cameroon logo"
              style={{
                display: 'block',
                width: '88%',
                height: '88%',
                objectFit: 'contain',
              }}
            />
          </div>

          <div style={{ minWidth: 0, textAlign: 'center' }}>
            <p
              style={{
                margin: 0,
                color: '#54258a',
                fontSize: '0.72rem',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '0.075em',
                textTransform: 'uppercase',
              }}
            >
              MDP Ecumenical
            </p>
            <p
              style={{
                margin: '0.25rem 0 0',
                color: '#17131f',
                fontSize: '0.56rem',
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: '0.13em',
                textTransform: 'uppercase',
              }}
            >
              Music Workshop · 2026
            </p>
            <p
              style={{
                margin: '0.3rem 0 0',
                color: '#8b6b16',
                fontSize: '0.44rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              One voice · One faith
            </p>
          </div>

          <div
            style={{
              width: '3.65rem',
              height: '3.65rem',
              overflow: 'hidden',
              display: 'grid',
              placeItems: 'center',
              borderRadius: '50%',
              background: '#ffffff',
              boxShadow: '0 4px 12px rgba(40, 19, 67, 0.1)',
            }}
          >
            <img
              src="/lay-training-logo.jpg"
              alt="PCC Department for Lay Training and Evangelism logo"
              style={{
                display: 'block',
                width: '92%',
                height: '92%',
                objectFit: 'contain',
              }}
            />
          </div>
        </header>

        <div
          style={{
            position: 'absolute',
            top: '18%',
            left: '7%',
            width: '86%',
            height: '2px',
            background: 'linear-gradient(90deg, #efb823 0 18%, #54258a 18% 100%)',
          }}
        />

        {/* Main statement */}
        <section
          style={{
            position: 'absolute',
            top: '23%',
            left: '7%',
            width: '58%',
            zIndex: 2,
          }}
        >
          <p
            style={{
              margin: 0,
              color: '#efb823',
              fontSize: '0.58rem',
              fontWeight: 900,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Save my seat
          </p>
          <h1
            style={{
              margin: '0.38rem 0 0',
              color: '#17131f',
              fontSize: 'clamp(2.15rem, 7.8vw, 3.6rem)',
              fontWeight: 950,
              lineHeight: 0.82,
              letterSpacing: '-0.075em',
              textTransform: 'uppercase',
            }}
          >
            I will be
            <br />
            <span style={{ color: '#54258a' }}>attending</span>
          </h1>
          <p
            style={{
              margin: '0.7rem 0 0',
              maxWidth: '13rem',
              color: '#302a35',
              fontSize: '0.68rem',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
            }}
          >
            MDP Ecumenical Music Workshop
          </p>
        </section>

        {/* Portrait and attendee name */}
        <section
          style={{
            position: 'absolute',
            top: '35%',
            right: '6.5%',
            width: '39%',
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '28%',
              aspectRatio: '1 / 1',
              top: '-5%',
              left: '-4%',
              zIndex: -1,
              background: '#efb823',
              transform: 'rotate(45deg)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '30%',
              height: '12%',
              top: '3%',
              right: '-1%',
              zIndex: -1,
              background: '#54258a',
              transform: 'rotate(20deg)',
            }}
          />
          <div
            style={{
              width: '100%',
              aspectRatio: '1 / 1',
              padding: '0.4rem',
              borderRadius: '50%',
              background: '#efb823',
              boxShadow: '0 18px 35px rgba(40, 19, 67, 0.2)',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                display: 'grid',
                placeItems: 'center',
                borderRadius: '50%',
                clipPath: 'circle(50% at 50% 50%)',
                contain: 'layout paint',
                border: '5px solid #fbfaf7',
                background: 'linear-gradient(145deg, #eee9f2, #d9cce4)',
              }}
            >
              {photo ? (
                <img
                  src={photo}
                  alt="Attendee"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    minWidth: 0,
                    maxWidth: 'none',
                    objectFit: 'cover',
                    objectPosition: '50% 28%',
                  }}
                />
              ) : (
                <div style={{ textAlign: 'center', color: '#54258a' }}>
                  <Music2
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      margin: '0 auto 0.35rem',
                      opacity: 0.56,
                    }}
                  />
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.58rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Add your photo
                  </p>
                </div>
              )}
            </div>
          </div>

          <div
            style={{
              width: '94%',
              minHeight: '2.45rem',
              marginTop: '-0.55rem',
              padding: '0.55rem 0.75rem 0.48rem',
              zIndex: 2,
              display: 'grid',
              placeItems: 'center',
              background: '#ffffff',
              borderBottom: '3px solid #54258a',
              boxShadow: '0 8px 18px rgba(40, 19, 67, 0.16)',
              transform: 'rotate(-1deg)',
            }}
          >
            <p
              style={{
                width: '100%',
                margin: 0,
                overflow: 'hidden',
                color: '#17131f',
                fontSize: 'clamp(0.72rem, 2.4vw, 1rem)',
                fontWeight: 850,
                lineHeight: 1.1,
                textAlign: 'center',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {displayName}
            </p>
          </div>
        </section>

        {/* Event details footer */}
        <footer
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '19%',
            padding: '1rem 7% 0.72rem',
            color: '#ffffff',
            background: '#54258a',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.05fr 0.95fr',
              gap: '0.8rem',
              alignItems: 'start',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.48rem' }}>
              <CalendarDays
                style={{
                  width: '1rem',
                  height: '1rem',
                  marginTop: '0.05rem',
                  flexShrink: 0,
                  color: '#efb823',
                }}
              />
              <div>
                <p
                  style={{
                    margin: 0,
                    color: '#efb823',
                    fontSize: '0.48rem',
                    fontWeight: 900,
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                  }}
                >
                  When
                </p>
                <p
                  style={{
                    margin: '0.2rem 0 0',
                    fontSize: '0.67rem',
                    fontWeight: 800,
                    lineHeight: 1.14,
                  }}
                >
                  {date}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.48rem' }}>
              <MapPin
                style={{
                  width: '1rem',
                  height: '1rem',
                  marginTop: '0.05rem',
                  flexShrink: 0,
                  color: '#efb823',
                }}
              />
              <div>
                <p
                  style={{
                    margin: 0,
                    color: '#efb823',
                    fontSize: '0.48rem',
                    fontWeight: 900,
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                  }}
                >
                  Where
                </p>
                <p
                  style={{
                    margin: '0.2rem 0 0',
                    fontSize: '0.67rem',
                    fontWeight: 800,
                    lineHeight: 1.14,
                  }}
                >
                  {location}
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              left: '7%',
              right: '7%',
              bottom: '0.58rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              paddingTop: '0.4rem',
            }}
          >
            <p
              style={{
                margin: 0,
                color: '#ffffff',
                fontSize: '0.46rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Worship · Learn · Connect
            </p>
            <p
              style={{
                margin: 0,
                color: '#efb823',
                fontSize: '0.48rem',
                fontWeight: 900,
                letterSpacing: '0.06em',
              }}
            >
              #MDP2026
            </p>
          </div>
        </footer>
      </div>
    )
  },
)

PosterPreview.displayName = 'PosterPreview'

export default PosterPreview
