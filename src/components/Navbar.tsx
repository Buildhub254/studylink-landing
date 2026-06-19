import { useState, useEffect } from 'react'
import { Brain, Menu, X } from 'lucide-react'

const NAV_LINKS = ['Subjects', 'Notes', 'Videos', 'Quizzes', 'Past Papers']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.3s, backdrop-filter 0.3s, border-color 0.3s',
        background: scrolled
          ? 'rgba(8, 4, 9, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(181, 68, 110, 0.15)'
          : '1px solid transparent',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Brain size={28} color="var(--accent)" strokeWidth={2} />
          <span
            style={{
              fontWeight: 800,
              fontSize: '1.2rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            StudyLink
          </span>
        </div>

        <ul
          style={{
            display: 'flex',
            gap: '32px',
            listStyle: 'none',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="desktop-nav">
          <button
            style={{
              background: 'transparent',
              color: 'var(--text-secondary)',
              fontSize: '0.875rem',
              fontWeight: 500,
              padding: '8px 16px',
              borderRadius: '8px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            Log In
          </button>
          <button
            style={{
              background: 'var(--accent)',
              color: '#fff',
              fontSize: '0.875rem',
              fontWeight: 600,
              padding: '9px 20px',
              borderRadius: '24px',
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-light)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Sign Up
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="mobile-nav">
          <button
            style={{
              background: 'var(--accent)',
              color: '#fff',
              fontSize: '0.875rem',
              fontWeight: 600,
              padding: '8px 18px',
              borderRadius: '24px',
            }}
          >
            Sign Up
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'transparent', color: 'var(--text-primary)', display: 'flex' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          style={{
            background: 'rgba(8, 4, 9, 0.97)',
            borderTop: '1px solid var(--border)',
            padding: '16px 24px 24px',
          }}
          className="mobile-nav"
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  style={{
                    display: 'block',
                    padding: '12px 0',
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
            <li style={{ paddingTop: '12px' }}>
              <button
                style={{
                  width: '100%',
                  background: 'transparent',
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  padding: '10px 0',
                  textAlign: 'left',
                }}
              >
                Log In
              </button>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-nav { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
