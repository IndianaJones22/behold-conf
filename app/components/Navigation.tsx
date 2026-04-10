"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(5,5,5,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo — replace enter-logo.png in /public with the actual file */}
        <a href="#hero" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/enter-logo.png"
            alt="ENTER"
            style={{ height: 40, width: "auto", objectFit: "contain" }}
          />
        </a>

        <div className="nav-links">
          <NavCta />
        </div>

        <NavCta mobile />
      </div>

      <style>{`
        .nav-links { display: flex; align-items: center; gap: 32px; }
        .nav-cta-mobile { display: none; }
        @media (max-width: 767px) {
          .nav-links { display: none; }
          .nav-cta-mobile { display: block; }
        }
      `}</style>
    </nav>
  );
}

function NavCta({ mobile }: { mobile?: boolean }) {
  return (
    <a
      href="#register"
      className={mobile ? "nav-cta-mobile" : undefined}
      style={{
        fontSize: mobile ? "0.8rem" : "0.875rem",
        fontWeight: 500,
        letterSpacing: "0.04em",
        color: "var(--text)",
        textDecoration: "none",
        padding: mobile ? "8px 16px" : "10px 22px",
        borderRadius: "var(--radius-sm)",
        border: "1px solid rgba(255,255,255,0.18)",
        background: "rgba(255,255,255,0.04)",
        transition: "box-shadow 0.25s, border-color 0.25s",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(255,59,31,0.3)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)";
      }}
    >
      Anmäl dig
    </a>
  );
}
