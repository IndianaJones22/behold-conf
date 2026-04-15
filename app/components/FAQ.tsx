"use client";

import { useState } from "react";

const items = [
  {
    q: "Vad kostar heldagskonferensen?",
    a: "Ingenting! Vi vill att sa manga som mojligt ska kunna ha mojlighet att vara med pa konferensen och att det ska vara sa enkelt som mojligt for dig att bjuda med vanner.",
  },
  {
    q: "Kommer det finnas mat?",
    a: "Till middagen sa kommer det finnas food trucks smidigt och lattillgangliga utanfor kyrkan. Under dagen kommer aven fika och enklare fortaring att erbjudas.",
  },
  {
    q: "Vem är konferensen för?",
    a: "Den är främst för ungdomar i gymnasiet och unga vuxna, men alla som längtar efter en plats att få möta Gud på nytt är välkommen att fira dagen tillsammans med oss.",
  },
  {
    q: "Finns det parkering i närheten?",
    a: "Ja, smidigaste parkeringsplatsen är Sollentunavallens parkering, cirka 100 meter från kyrkan.",
  },
  {
    q: "Hur tar jag mig dit med kollektivtrafik?",
    a: "Antingen så kan du promenera ca 10 min ifrån Sollentuna station eller ta buss 607, 520, 525, 527, 627, 687 eller 955 från Sollentuna station och hoppa av två stationer senare vid Sofielundsskolan. Därifrån tar det 4 min att promenera.",
  },
  {
    q: "Kommer det finnas tolkning eller översättning?",
    a: "Nej, tyvärr har vi inte det den här gången.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      style={{
        background: "linear-gradient(180deg, rgba(8,8,8,0.96) 0%, rgba(4,4,4,0.9) 100%)",
        padding: "0 24px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: 112,
          height: 1,
          transform: "translateX(-50%)",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.34), transparent)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 14% 24%, rgba(255,59,31,0.08) 0%, transparent 30%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-18%",
          left: "18%",
          width: "58%",
          height: "88%",
          backgroundImage: "url('/texture2.PNG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
          opacity: 0.4,
          transform: "rotate(5deg)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "40px 0", position: "relative", zIndex: 1 }}>
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
            FAQ
          </p>
          <h2
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              letterSpacing: "0.06em",
              color: "var(--text)",
            }}
          >
            VANLIGA FRÅGOR
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", position: "relative", zIndex: 2 }}>
          {items.map((item, i) => (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "var(--surface)",
                  border: open === i ? "1px solid rgba(255,59,31,0.35)" : "1px solid var(--border)",
                  borderRadius: open === i ? "var(--radius-sm) var(--radius-sm) 0 0" : "var(--radius-sm)",
                  padding: "24px 28px",
                  cursor: "pointer",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                  boxShadow: open === i ? "0 0 30px rgba(255,59,31,0.1)" : "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                  touchAction: "manipulation",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                    letterSpacing: "0.03em",
                    color: "var(--text)",
                  }}
                >
                  {item.q}
                </span>
                <span
                  style={{
                    color: open === i ? "var(--accent)" : "var(--text-muted)",
                    fontSize: "1.4rem",
                    lineHeight: 1,
                    flexShrink: 0,
                    transition: "transform 0.3s ease, color 0.2s",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    display: "inline-block",
                  }}
                >
                  +
                </span>
              </button>

              <div
                style={{
                  overflow: "hidden",
                  maxHeight: open === i ? "400px" : "0",
                  transition: "max-height 0.3s ease",
                }}
              >
                <div
                  style={{
                    padding: "20px 28px 24px",
                    background: "var(--surface)",
                    borderLeft: "1px solid rgba(255,59,31,0.35)",
                    borderRight: "1px solid rgba(255,59,31,0.35)",
                    borderBottom: "1px solid rgba(255,59,31,0.35)",
                    borderRadius: "0 0 var(--radius-sm) var(--radius-sm)",
                  }}
                >
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
