"use client";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 28, height: 28 }}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    title: "När",
    lines: ["2 maj 2026", "09:00 – 18:00"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 28, height: 28 }}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: "Var",
    lines: ["Sollentuna", "Stockholm"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 28, height: 28 }}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Tema",
    lines: ["Jag gör", "något nytt"],
  },
];

export default function EventInfo() {
  return (
    <section
      id="info"
      style={{
        background: "var(--bg-soft)",
        padding: "140px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: "72px" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.28em",
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Praktisk info
          </p>
          <h2
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              letterSpacing: "0.06em",
              color: "var(--text)",
            }}
          >
            INFORMATION
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                padding: "36px 32px",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
            >
              <div
                style={{
                  color: "var(--accent)",
                  marginBottom: "20px",
                  opacity: 0.85,
                }}
              >
                {card.icon}
              </div>
              <p
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                {card.title}
              </p>
              {card.lines.map((line, j) => (
                <p
                  key={j}
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                    letterSpacing: "0.04em",
                    color: "var(--text)",
                    lineHeight: 1.2,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
