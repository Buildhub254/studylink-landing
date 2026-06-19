const STATS = [
  { value: '18K+', label: 'STUDENTS' },
  { value: '9', label: 'SUBJECTS' },
  { value: '650+', label: 'VIDEOS' },
  { value: '320+', label: 'PAPERS' },
]

export default function Stats() {
  return (
    <section style={{ padding: '0 24px 80px', maxWidth: '1200px', margin: '0 auto' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
        }}
        className="stats-grid"
      >
        {STATS.map(({ value, label }) => (
          <div
            key={label}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '28px 20px',
              textAlign: 'center',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.borderColor = 'var(--border)'
              el.style.background = 'var(--bg-card-hover)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.borderColor = 'var(--border-subtle)'
              el.style.background = 'var(--bg-card)'
            }}
          >
            <div
              style={{
                fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                fontWeight: 800,
                color: 'var(--accent)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                marginBottom: '8px',
              }}
            >
              {value}
            </div>
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                letterSpacing: '0.12em',
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .stats-grid {
          grid-template-columns: repeat(4, 1fr) !important;
        }
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
