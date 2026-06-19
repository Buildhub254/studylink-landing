import { Check, ArrowRight } from 'lucide-react'

const TRUST_ITEMS = ['Free to start', 'All KCSE subjects', 'No downloads']

export default function Hero() {
  return (
    <section
      style={{
        paddingTop: '120px',
        paddingBottom: '80px',
        textAlign: 'center',
        maxWidth: '760px',
        margin: '0 auto',
        padding: '120px 24px 80px',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(181, 68, 110, 0.12)',
          border: '1px solid rgba(181, 68, 110, 0.3)',
          borderRadius: '24px',
          padding: '6px 14px',
          marginBottom: '32px',
        }}
      >
        <span
          style={{
            background: 'var(--accent)',
            color: '#fff',
            fontSize: '0.65rem',
            fontWeight: 700,
            padding: '2px 6px',
            borderRadius: '4px',
            letterSpacing: '0.05em',
          }}
        >
          KE
        </span>
        <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 500 }}>
          Kenya's #1 Grade 10 Learning Platform
        </span>
      </div>

      <h1
        style={{
          fontSize: 'clamp(2.4rem, 7vw, 4rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: '24px',
        }}
      >
        <span style={{ color: 'var(--text-primary)' }}>Study Smarter.</span>
        <br />
        <span style={{ color: 'var(--text-primary)' }}>Pass Faster.</span>
        <br />
        <span
          style={{
            color: 'var(--accent)',
            textShadow: '0 0 32px rgba(181, 68, 110, 0.45)',
          }}
        >
          Succeed Every Day.
        </span>
      </h1>

      <p
        style={{
          color: 'var(--text-secondary)',
          fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
          lineHeight: 1.7,
          maxWidth: '520px',
          margin: '0 auto 40px',
        }}
      >
        Notes, videos, quizzes, past papers and a 24/7 AI tutor &mdash; all in one place for KCSE
        Grade 10.
      </p>

      <button
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--accent)',
          color: '#fff',
          fontSize: '1rem',
          fontWeight: 700,
          padding: '15px 32px',
          borderRadius: '32px',
          boxShadow: '0 0 32px rgba(181, 68, 110, 0.35)',
          transition: 'background 0.2s, box-shadow 0.2s, transform 0.15s',
          marginBottom: '28px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--accent-light)'
          e.currentTarget.style.boxShadow = '0 0 48px rgba(181, 68, 110, 0.5)'
          e.currentTarget.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--accent)'
          e.currentTarget.style.boxShadow = '0 0 32px rgba(181, 68, 110, 0.35)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        Start Learning
        <ArrowRight size={18} strokeWidth={2.5} />
      </button>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {TRUST_ITEMS.map((item) => (
          <div
            key={item}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Check size={14} color="var(--accent)" strokeWidth={3} />
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 500 }}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
