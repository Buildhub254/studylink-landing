export default function CTA() {
  return (
    <section style={{ padding: '0 24px 96px', maxWidth: '1200px', margin: '0 auto' }}>
      <div
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(107, 43, 68, 0.5) 0%, rgba(6, 3, 8, 0.98) 70%)',
          border: '1px solid rgba(142, 58, 92, 0.22)',
          borderRadius: '28px',
          padding: 'clamp(48px, 8vw, 80px) 32px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.025em',
            marginBottom: '12px',
            lineHeight: 1.15,
          }}
        >
          Ready to ace your exams?
        </h2>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            marginBottom: '36px',
          }}
        >
          Join thousands of students already on StudyLink
        </p>

        <button
          style={{
            background: 'var(--accent)',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 700,
            padding: '15px 36px',
            borderRadius: '32px',
            boxShadow: '0 0 28px rgba(142, 58, 92, 0.45)',
            transition: 'background 0.2s, box-shadow 0.2s, transform 0.15s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent-light)'
            e.currentTarget.style.boxShadow = '0 0 44px rgba(142, 58, 92, 0.65)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--accent)'
            e.currentTarget.style.boxShadow = '0 0 28px rgba(142, 58, 92, 0.45)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Create Free Account
        </button>
      </div>
    </section>
  )
}
