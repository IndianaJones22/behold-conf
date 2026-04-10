export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* Background layer */}
      <div
        aria-hidden
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(ellipse 80% 60% at 60% 40%, rgba(255,59,31,0.08) 0%, transparent 65%),
              radial-gradient(ellipse 50% 40% at 30% 70%, rgba(255,106,0,0.05) 0%, transparent 60%),
              linear-gradient(180deg, #050505 0%, #0a0807 50%, #050505 100%)
            `,
          }}
        />
        {/* Grain overlay */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" opacity="0.08" />
        </svg>

        <div
          style={{
            position: "absolute",
            top: "-8%",
            right: "-10%",
            width: "76%",
            height: "78%",
            backgroundImage: "url('/texture2.PNG')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "screen",
            opacity: 0.4,
            transform: "rotate(-9deg)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-12%",
            left: "-14%",
            width: "62%",
            height: "62%",
            backgroundImage: "url('/texture2.PNG')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "screen",
            opacity: 0.4,
            transform: "rotate(12deg) scaleX(-1)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Content — CSS animations, guaranteed on all mobile browsers */}
      <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <div
          className="hero-content"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "120px 24px 80px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="hero-item hero-delay-1" style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.28em",
            color: "var(--accent)",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}>
            HELDAGSKONFERENS 2026
          </p>

          <h1 className="hero-item hero-delay-2 hero-title" style={{
            position: "relative",
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(6.4rem, 20vw, 17rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.01em",
            color: "var(--text)",
            marginBottom: "3rem",
            maxWidth: "100%",
          }}>
            BEHOLD
          </h1>

          <p className="hero-item hero-delay-3 hero-quote" style={{
            fontSize: "clamp(1.08rem, 1.9vw, 1.28rem)",
            color: "var(--accent)",
            maxWidth: 500,
            lineHeight: 1.7,
            marginBottom: "0.5rem",
            fontStyle: "italic",
          }}>
            &ldquo;Se, jag g&ouml;r n&aring;got nytt. Redan nu visar det sig. M&auml;rker ni det inte?&rdquo;
          </p>
          <p className="hero-item hero-delay-3 hero-scripture" style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            color: "var(--accent)",
            marginBottom: "3rem",
          }}>
            JESAJA 43:19
          </p>

          <div className="hero-item hero-delay-4 hero-meta" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}>
            <span style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(1.45rem, 3vw, 2.2rem)",
              letterSpacing: "0.18em",
              color: "var(--text)",
            }}>2 MAJ 2026</span>
            <span style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(0.88rem, 1.4vw, 1.05rem)",
              letterSpacing: "0.16em",
              color: "var(--text)",
            }}>SOLLENTUNA PINGST, STOCKHOLM</span>
          </div>

          <div className="hero-item hero-delay-5" style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
            <a
              href="#register"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "1.05rem",
                letterSpacing: "0.08em",
                color: "#fff",
                textDecoration: "none",
                padding: "18px 40px",
                borderRadius: "var(--radius-sm)",
                background: "var(--accent)",
                boxShadow: "0 8px 32px rgba(255,59,31,0.4)",
                display: "inline-block",
              }}
            >
              Anmäl dig här
            </a>
          </div>

          <p className="hero-item hero-delay-5" style={{
            marginTop: "1.5rem",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            letterSpacing: "0.06em",
          }}>
            Platserna är begränsade
          </p>
        </div>
      </div>

      <style>{`
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-item {
          animation: heroIn 0.6s ease forwards;
          opacity: 0;
        }
        .hero-delay-1 { animation-delay: 0.05s; }
        .hero-delay-2 { animation-delay: 0.15s; }
        .hero-delay-3 { animation-delay: 0.25s; }
        .hero-delay-4 { animation-delay: 0.35s; }
        .hero-delay-5 { animation-delay: 0.45s; }
        @media (min-width: 768px) {
          .hero-title {
            width: min(100%, 1200px);
            margin-left: auto;
            margin-right: auto;
          }
          .hero-quote {
            width: 40%;
            max-width: none !important;
          }
        }
        @media (max-width: 767px) {
          .hero-content {
            padding-top: 95px !important;
          }
          .hero-title {
            width: 100%;
            font-size: clamp(7.8rem, 30vw, 10rem) !important;
            margin-bottom: 1.5rem !important;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
          .hero-quote {
            width: 75%;
            margin-left: auto;
            margin-right: auto;
            max-width: none !important;
            text-align: center;
          }
          .hero-scripture {
            margin-bottom: 1.25rem !important;
          }
          .hero-meta {
            margin-bottom: 2.2rem !important;
          }
        }
      `}</style>

      {/* Bottom fade */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          background: "linear-gradient(to bottom, transparent, var(--bg))",
          zIndex: 3,
        }}
      />
    </section>
  );
}
