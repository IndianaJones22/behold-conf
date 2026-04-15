export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        background: "var(--bg-soft)",
        padding: "80px 24px 48px",
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
        textAlign: "center",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-8%",
          right: "-10%",
          width: "62%",
          height: "88%",
          backgroundImage: "url('/texture2.PNG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
          opacity: 0.4,
          transform: "rotate(-12deg)",
          pointerEvents: "none",
        }}
      />
      {/* Grain texture */}
      <svg
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.3,
          pointerEvents: "none",
          mixBlendMode: "overlay",
        }}
      >
        <filter id="footerGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#footerGrain)" opacity="0.06" />
      </svg>

      {/* Glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 400,
          height: 200,
          background: "radial-gradient(ellipse, rgba(255,59,31,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            letterSpacing: "0.1em",
            color: "var(--text)",
            marginBottom: "8px",
          }}
        >
          BEHOLD
        </p>

        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--accent)",
            letterSpacing: "0.06em",
            marginBottom: "24px",
          }}
        >
          Jag gör något nytt
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.14em",
              color: "var(--text-muted)",
            }}
          >
            2 MAJ 2026
          </span>
          <span style={{ color: "var(--accent)" }}>·</span>
          <span
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.14em",
              color: "var(--text-muted)",
            }}
          >
            SOLLENTUNA PINGST, STOCKHOLM
          </span>
        </div>

        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.16em",
            color: "rgba(255,59,31,0.62)",
            marginBottom: "40px",
          }}
        >
          JESAJA 43:19
        </p>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "24px",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "rgba(185,178,180,0.35)" }}>
            © 2026 BEHOLD Conference
          </p>
        </div>
      </div>
    </footer>
  );
}
