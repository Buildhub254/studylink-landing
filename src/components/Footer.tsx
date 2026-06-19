import { Brain } from 'lucide-react'

const LINKS = {
  Product: ['Subjects', 'Notes', 'Videos', 'Quizzes', 'Past Papers'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service'],
}

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '64px 24px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '48px',
        }}
        className="footer-grid"
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Brain size={24} color="var(--accent)" strokeWidth={2} />
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
              StudyLink
            </span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '240px' }}>
            Kenya's #1 platform for KCSE Grade 10 students — smart tools, 24/7 AI tutor, all in one
            place.
          </p>
        </div>

        {Object.entries(LINKS).map(([section, items]) => (
          <div key={section}>
            <h4
              style={{
                color: 'var(--text-primary)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              {section}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} StudyLink. All rights reserved.
        </span>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          Built for Kenya's Grade 10 students
        </span>
      </div>

      <style>{`
        .footer-grid {
          grid-template-columns: 2fr 1fr 1fr 1fr !important;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
