"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const speakers = [
  {
    name: "Simon Möller",
    role: "Talare + artist",
    image: "/speaker-simon.jpg",
    color: "#FF6A00",
    description:
      "Simon är artist och talare som har gått från elitinnebandy till att hans musik och personliga berättelser om ett liv med Jesus idag ger unga människor hopp, tro och mod. Samtidigt har hans musik fått stor spridning på Spotify, TikTok och sociala medier. 2024 blev han bl.a. den första hiphopartisten att få årets Utbultstipendium, och senast nu under påsken arrangerade han väckelsekonserten \"LA DOLCE VITA CONCERT\".",
  },
  {
    name: "Daniel Norrby",
    role: "Talare",
    image: "/speaker-daniel.jpg",
    color: "#E83010",
    description:
      "Daniel kommer från att ha spelat på hög nivå i fotbollsvärlden till att ha blivit en av initiativtagarna bakom Jesus Conference - en av Sveriges största kristna konferenser för unga vuxna, är med och producerar Jesus Podcast och studerar till pastor på ALT. Han brinner för att se människor hitta sin identitet i Jesus med ett tydligt fokus på att hjälpa unga människor att leva frimodigt och praktiskt i sin tro.",
  },
  {
    name: "Aaron Lindström",
    role: "Talare",
    image: "/speaker-aaron.jpg",
    color: "#FF3B1F",
    description:
      "Aaron är idag en av Sveriges största talanger inom para-alpin skidåkning och ett av Sveriges stora medaljhopp. Utöver att ha tagit ett VM-brons i OS för paraidrottare och representerat Sverige i tre Paralympics så är han öppen med sin kristna tro och brinner för att visa att identitet och värde inte sitter i prestation.",
  },
  {
    name: "Lovsångskväll med Team från Eskilstuna",
    role: "Lovsång",
    image: "/speaker-eskilstuna.jpg",
    color: "#FF3B1F",
    description:
      "Vi kommer avsluta dagen med en lovsångsgudstjänst ledd av team från Eskilstuna. De kommer med en stark längtan efter att människor ska få möta Jesus och har lett lovsång på allt ifrån lokala samlingar i Eskilstuna Pingst till ungdomssamlingar och konferenser/läger som Nyhems- och Hampeveckan.",
  },
  {
    name: "Ebenezer Haregot",
    role: "Host",
    image: "/speaker-ebenezer.jpg",
    color: "#FF3B1F",
    description:
      "Ebenezer, ibland mer känd som Ebo, är Ungdoms- och Unga Vuxna-pastor i Sollentuna Pingst och tillsammans med team är värd för denna heldagskonferens. Han brinner för att se unga människor få upptäcka sin Gudagivna potential genom livsförvandlande möten med Jesus.",
  },
];

export default function Speakers() {
  const [activeSpeaker, setActiveSpeaker] = useState<string | null>(null);
  const [hoveredSpeaker, setHoveredSpeaker] = useState<string | null>(null);
  const openSpeaker = hoveredSpeaker ?? activeSpeaker;

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
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.name}
              speaker={speaker}
              isOpen={openSpeaker === speaker.name}
              onToggle={() => setActiveSpeaker((current) => current === speaker.name ? null : speaker.name)}
              onHoverChange={(isHovered) => setHoveredSpeaker(isHovered ? speaker.name : null)}
            />
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
            Dörrarna för heldagen öppnas kl. 13.00. Under dagen kommer vi ha olika sessions, möten och konsert. Det kommer finnas möjlighet att köpa middag från food trucks på plats i området. Konferensen avslutas med en lovsångsgudstjänst ledd av team från Eskilstuna och beräknas vara klar som senast omkring kl. 22.00.
          </p>

          <a
            href="https://instagram.com/behold.conf"
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
              Följ oss på <span style={{ color: "var(--accent)", fontWeight: 600 }}>@behold.conf</span> för att snabbast få löpande uppdateringar inför heldagen!
            </p>
          </a>
        </div>
      </div>
      <style>{`
        .speaker-card {
          transition: box-shadow 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }

        .speaker-image {
          height: 360px;
          transition: height 0.42s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .speaker-bio {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: stretch;
          opacity: 0;
          overflow: hidden;
          pointer-events: none;
          transform: translateY(10px);
          transition: opacity 0.32s ease, transform 0.42s cubic-bezier(0.22, 1, 0.36, 1), background 0.25s ease;
          background: rgba(18,18,18,0.88);
          backdrop-filter: grayscale(0.35) blur(2px);
        }

        .speaker-bio-content {
          width: 100%;
          max-height: 100%;
          overflow-y: auto;
          transform: translateY(8px);
          transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .speaker-card.is-open {
          border-color: color-mix(in srgb, var(--speaker-color) 45%, transparent) !important;
          box-shadow: 0 0 0 1px color-mix(in srgb, var(--speaker-color) 35%, transparent), 0 20px 60px rgba(0,0,0,0.5);
          transform: translateY(-3px);
        }

        .speaker-card.is-open .speaker-bio {
          opacity: 1;
          transform: translateY(0);
          background: rgba(20,20,20,0.9);
        }

        .speaker-card.is-open .speaker-bio-content {
          transform: translateY(0);
        }

        .speaker-card.is-open.is-overflowing-bio .speaker-image {
          height: var(--speaker-open-height);
        }

      `}</style>
    </section>
  );
}

function SpeakerCard({
  speaker,
  isOpen,
  onToggle,
  onHoverChange,
}: {
  speaker: (typeof speakers)[0];
  isOpen: boolean;
  onToggle: () => void;
  onHoverChange: (isHovered: boolean) => void;
}) {
  const bioContentRef = useRef<HTMLDivElement>(null);
  const [bioOverflows, setBioOverflows] = useState(false);
  const [openHeight, setOpenHeight] = useState(360);

  useEffect(() => {
    const measureOverflow = () => {
      const bioContent = bioContentRef.current;
      if (!bioContent) return;

      const neededHeight = Math.ceil(bioContent.scrollHeight);
      setBioOverflows(neededHeight > 360);
      setOpenHeight(Math.min(Math.max(neededHeight, 360), 500));
    };

    measureOverflow();
    window.addEventListener("resize", measureOverflow);

    return () => window.removeEventListener("resize", measureOverflow);
  }, [speaker.description]);

  return (
    <div
      className={`speaker-card${isOpen ? " is-open" : ""}${bioOverflows ? " is-overflowing-bio" : ""}`}
      aria-label={`${speaker.name} – ${speaker.role}`}
      aria-expanded={isOpen}
      data-speaker-name={speaker.name}
      data-speaker-role={speaker.role}
      role="button"
      tabIndex={0}
      style={{
        position: "relative",
        zIndex: 2,
        display: "block",
        width: "100%",
        padding: 0,
        textAlign: "left",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        cursor: "pointer",
        outline: "none",
        "--speaker-color": speaker.color,
        "--speaker-open-height": `${openHeight}px`,
      } as CSSProperties}
      onClick={onToggle}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggle();
        }
      }}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") {
          onHoverChange(true);
        }
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== "touch") {
          onHoverChange(false);
        }
      }}
    >
      <div className="speaker-image" style={{ position: "relative", overflow: "hidden", background: "var(--surface-2)" }}>
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

        <div
          className="speaker-bio"
        >
          <div
            ref={bioContentRef}
            className="speaker-bio-content"
            style={{
              padding: "24px",
            }}
          >
            <p
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                letterSpacing: "0.06em",
                color: "var(--text)",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              {speaker.name}
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.65,
                fontSize: "0.94rem",
                whiteSpace: "pre-line",
              }}
            >
              {speaker.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
