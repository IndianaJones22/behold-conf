"use client";

export default function Scripture() {
  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(180deg, rgba(20,20,20,0.92) 0%, rgba(12,12,12,0.88) 100%)",
        padding: "0 24px",
        overflow: "hidden",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(255,255,255,0.04)",
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
          inset: 0,
          background: "linear-gradient(135deg, rgba(255,59,31,0.08) 0%, transparent 38%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-6%",
          right: "-12%",
          width: "72%",
          height: "72%",
          backgroundImage: "url('/texture2.PNG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
          opacity: 0.4,
          transform: "rotate(-11deg)",
          pointerEvents: "none",
        }}
      />
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(255,59,31,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1, padding: "40px 0" }}>
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.28em",
            color: "var(--accent)",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Vårt varför
        </p>

        <h2
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            letterSpacing: "0.06em",
            color: "var(--text)",
            marginBottom: "3rem",
          }}
        >
          VARFÖR BEHOLD?
        </h2>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: 1.9,
            color: "var(--text-muted)",
            fontWeight: 300,
            marginBottom: "2rem",
          }}
        >
          Vi lever i en tid av förändring - i kyrkan, i samhället och i våra egna liv. Många bär på frågor, tvivel och en längtan efter något mer. Det är i den längtan Gud möter oss.
        </p>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: 1.9,
            color: "var(--text-muted)",
            fontWeight: 300,
            marginBottom: "2rem",
          }}
        >
          BEHOLD är en heldagskonferens skapad för att JUST DU ska få möta Gud på nytt - inte en Gud som upprepar gamla mönster, utan en som gör något nytt. Mitt i det som känns som öknar och vildmark lovar han att bryta igenom.
        </p>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: 1.9,
            color: "var(--text-muted)",
            fontWeight: 300,
            marginBottom: "2rem",
          }}
        >
          Dagen är fylld med undervisning, lovsång och gemenskap - allt format kring ett enda budskap: att se vad Gud vill göra. I dig. I oss. Just nu.
        </p>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: 1.9,
            color: "var(--text-muted)",
            fontWeight: 300,
            marginBottom: "3rem",
          }}
        >
          Konferensen och allt runtomkring den är anordnad av ENTER YOUNG ADULTS, Unga vuxna-arbetet i Sollentuna Pingst.
        </p>

        <p
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)",
            letterSpacing: "0.18em",
            color: "var(--accent)",
          }}
        >
          BEHOLD, I AM DOING A NEW THING.
        </p>
      </div>
    </section>
  );
}
