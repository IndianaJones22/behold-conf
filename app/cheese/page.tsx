export default function CheesePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 20px",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top, rgba(255, 214, 10, 0.18) 0%, rgba(255, 214, 10, 0.04) 22%, transparent 45%), linear-gradient(180deg, #080808 0%, #050505 100%)",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/texture2.PNG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />

      <section
        style={{
          width: "100%",
          maxWidth: 760,
          position: "relative",
          zIndex: 1,
          borderRadius: 28,
          padding: "32px 24px",
          background: "rgba(14,14,14,0.9)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 92,
            padding: "10px 16px",
            marginBottom: 20,
            borderRadius: 999,
            background: "rgba(255, 214, 10, 0.12)",
            border: "1px solid rgba(255, 214, 10, 0.35)",
            color: "#ffd60a",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontSize: "0.8rem",
          }}
        >
          Cheese unlocked
        </div>

        <h1
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(2.8rem, 9vw, 5.8rem)",
            lineHeight: 0.96,
            letterSpacing: "0.02em",
            marginBottom: 20,
            color: "#fff3b0",
            textTransform: "uppercase",
          }}
        >
          Grattis, du har precis vunnit en cheeseburgare!
        </h1>

        <p
          style={{
            maxWidth: 580,
            margin: "0 auto 14px",
            color: "var(--text)",
            fontSize: "clamp(1.05rem, 2.6vw, 1.3rem)",
            lineHeight: 1.7,
          }}
        >
          Kom till <strong style={{ color: "#ffffff" }}>BEHOLD 26</strong> i{" "}
          <strong style={{ color: "#ffffff" }}>Sollentuna Pingst</strong> den{" "}
          <strong style={{ color: "#ffd60a" }}>2 maj</strong> för att claima den.
          Dagen börjar kl. 13.00 och slutar kl. 22.00.
        </p>

        <p
          style={{
            maxWidth: 600,
            margin: "0 auto",
            color: "var(--text-muted)",
            fontSize: "1rem",
            lineHeight: 1.75,
          }}
        >
          En heldag som kyrkan hostar med talare, gäster, konserter och food trucks.
          Vi ses där!
        </p>

        <p
          style={{
            margin: "18px auto 0",
            color: "#ffd60a",
            fontSize: "0.95rem",
            lineHeight: 1.7,
            maxWidth: 520,
          }}
        >
          Cheeseburgaren kan hämtas ut så länge lagret räcker.
        </p>

        <div
          style={{
            marginTop: 28,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 22px",
              borderRadius: 999,
              background: "var(--accent)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Till BEHOLD
          </a>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 18px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.1)",
              color: "var(--text-muted)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            2 maj 2026 · Sollentuna
          </span>
        </div>
      </section>
    </main>
  );
}
