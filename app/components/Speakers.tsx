"use client";

import { useState } from "react";

const speakers = [
  {
    name: "Ebenezer Haregot",
    role: "Host",
    image: "/speaker-ebenezer.png",
    color: "#FF3B1F",
    description:
      "Ebenezer leder dagen som host och finns med för att knyta ihop konferensen och bära visionen för BEHOLD.",
  },
  {
    name: "Simon Möller",
    role: "Talare + artist",
    image: "/speaker-simon.png",
    color: "#FF6A00",
    description:
      "Simon medverkar under dagen med både musik och undervisning, med hjärta för att människor ska få möta Gud på nytt.",
  },
  {
    name: "Daniel Norrby",
    role: "Talare",
    image: "/speaker-daniel.png",
    color: "#E83010",
    description:
      "Daniel talar under konferensen och delar undervisning som vill uppmuntra, utmana och rikta blicken mot Jesus.",
  },
  {
    name: "Lovsångskväll med Team från Eskilstuna",
    role: "Lovsång",
    image: "/speaker-eskilstuna.png",
    color: "#FF3B1F",
    description:
      "Teamet från Eskilstuna leder lovsångsgudstjänsten som avslutar dagen i tillbedjan, förväntan och gemenskap.",
  },
];

export default function Speakers() {
  return (
    <section
      id="speakers"
      style={{
        position: "relative",
        background: "linear-gradient(180deg, rgba(7,7,7,0.96) 0%, rgba(3,3,3,0.9) 100%)",
        padding: "0 24px",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(255,255,255,0.04)",
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
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
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
          background: "linear-gradient(90deg, transparent, rgba(255,59,31,0.34), transparent)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 82% 18%, rgba(255,106,0,0.09) 0%, transparent 34%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-10%",
          right: "-8%",
          width: "64%",
          height: "82%",
          backgroundImage: "url('/texture2.PNG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
          opacity: 0.4,
          transform: "rotate(-18deg)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 0", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "80px" }}>
          <p style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.28em",
            color: "var(--accent)",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>
            Konferensen
          </p>
          <h2 style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            letterSpacing: "0.06em",
            color: "var(--text)",
          }}>
            INFO
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          marginBottom: "32px",
        }}>
          {speakers.map((speaker, i) => (
            <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
          ))}
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "var(--radius-md)",
            padding: "24px 28px",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Programinfo
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              fontSize: "0.98rem",
              marginBottom: "18px",
            }}
          >
            Dörrarna öppnas kl. 13.00 och heldagens första möte börjar kl. 13.30. Konferensen avslutas med en lovsångsgudstjänst ledd av team från Eskilstuna. Däremellan har vi olika sessions och middag på plats i området. Dagen beräknas sen vara helt klar omkring kl. 21.00.
          </p>

          <a
            href="https://instagram.com/beholdconf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              paddingTop: "16px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              textDecoration: "none",
            }}
          >
            <div
              aria-hidden
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,59,31,0.12)",
                border: "1px solid rgba(255,59,31,0.22)",
                flexShrink: 0,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                style={{ width: 16, height: 16, color: "var(--accent)" }}
              >
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
              </svg>
            </div>

            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.7,
                fontSize: "0.92rem",
              }}
            >
              Följ oss på <span style={{ color: "var(--accent)", fontWeight: 600 }}>@beholdconf</span> för att snabbast få löpande uppdateringar inför heldagen!
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

function SpeakerCard({
  speaker,
  index,
}: {
  speaker: (typeof speakers)[0];
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      aria-label={`${speaker.name} – ${speaker.role}`}
      data-speaker-name={speaker.name}
      data-speaker-role={speaker.role}
      style={{
        position: "relative",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        cursor: "pointer",
        transition: "box-shadow 0.25s, border-color 0.25s, transform 0.25s",
      }}
      onClick={() => setIsOpen((prev) => !prev)}
      onMouseEnter={(e) => {
        setIsOpen(true);
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${speaker.color}55, 0 20px 60px rgba(0,0,0,0.5)`;
        (e.currentTarget as HTMLElement).style.borderColor = `${speaker.color}66`;
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        setIsOpen(false);
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: 360, overflow: "hidden", background: "var(--surface-2)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={speaker.image}
          alt={speaker.name}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
          }}
          onError={(e) => {
            // Fallback: hide broken image, show gradient
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Dark gradient at bottom for text legibility */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "42%",
          background: "linear-gradient(to top, rgba(5,5,5,0.92) 0%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "18px 24px 20px",
        }}>
          <p style={{
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.16em",
            color: "var(--accent)",
            textTransform: "uppercase",
          }}>
            {speaker.role}
          </p>
        </div>
      </div>

      <div
        style={{
          maxHeight: isOpen ? 220 : 0,
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease, opacity 0.25s ease",
          borderTop: isOpen ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div
          style={{
            padding: "18px 22px 22px",
          }}
        >
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.7,
              fontSize: "0.94rem",
            }}
          >
            {speaker.description}
          </p>
        </div>
      </div>
    </div>
  );
}
