import { BookOpen, Bot, Trophy } from 'lucide-react'
import type { ReactNode } from 'react'

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: <BookOpen size={28} strokeWidth={1.8} />,
    title: 'Smart Notes',
    description:
      'Exam-focused summaries designed to help you remember the most important concepts.',
  },
  {
    icon: <Bot size={28} strokeWidth={1.8} />,
    title: 'AI Study Tutor',
    description:
      'Instant explanations from your personal AI tutor, powered by Claude — 24/7.',
  },
  {
    icon: <Trophy size={28} strokeWidth={1.8} />,
    title: 'Practice Quizzes',
    description:
      'KCSE-style questions that track your progress and show exactly where you need help.',
  },
]

export default function Features() {
  return (
    <section style={{ padding: '0 24px 96px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2
        style={{
          fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
          fontWeight: 800,
          color: 'var(--text-primary)',
          textAlign: 'center',
          marginBottom: '48px',
          letterSpacing: '-0.02em',
        }}
      >
        Everything You Need to Pass
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}
        className="features-grid"
      >
        {FEATURES.map(({ icon, title, description }) => (
          <div
            key={title}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '32px 28px',
              transition: 'border-color 0.25s, background 0.25s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.borderColor = 'var(--border)'
              el.style.background = 'var(--bg-card-hover)'
              el.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.borderColor = 'var(--border-subtle)'
              el.style.background = 'var(--bg-card)'
              el.style.transform = 'translateY(0)'
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'rgba(181, 68, 110, 0.15)',
                border: '1px solid rgba(181, 68, 110, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                marginBottom: '20px',
              }}
            >
              {icon}
            </div>

            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '10px',
                letterSpacing: '-0.01em',
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
              }}
            >
              {description}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .features-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
