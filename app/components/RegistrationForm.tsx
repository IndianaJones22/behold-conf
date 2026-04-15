"use client";

import { useState, FormEvent } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  city: string;
  consent: boolean;
  // Honeypot
  website: string;
};

type FieldError = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organization: "",
  city: "",
  consent: false,
  website: "",
};

export default function RegistrationForm() {
  const [form, setForm] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function validate(): FieldError {
    const e: FieldError = {};
    if (!form.firstName.trim()) e.firstName = "Förnamn krävs";
    if (!form.lastName.trim()) e.lastName = "Efternamn krävs";
    if (!form.email.trim()) {
      e.email = "E-post krävs";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Ogiltig e-postadress";
    }
    if (!form.consent) e.consent = "Du måste godkänna för att anmäla dig";
    return e;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Honeypot check
    if (form.website) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          organization: form.organization,
          city: form.city,
          consent: form.consent,
        }),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function set(field: keyof FormData, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  if (status === "success") {
    return (
      <section
        id="register"
        style={{
          background: "linear-gradient(180deg, rgba(22,22,22,0.92) 0%, rgba(14,14,14,0.88) 100%)",
          padding: "0 24px",
          position: "relative",
          overflow: "hidden",
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
            top: "-10%",
            left: "-8%",
            width: "74%",
            height: "86%",
            backgroundImage: "url('/texture2.PNG')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "screen",
            opacity: 0.4,
            transform: "rotate(13deg)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", padding: "40px 0" }}>
          <div>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "rgba(255,59,31,0.12)",
                border: "1px solid rgba(255,59,31,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 32px",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ width: 32, height: 32 }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "0.06em",
                color: "var(--text)",
                marginBottom: "16px",
              }}
            >
              TACK!
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
              Din anmälan har tagits emot. Du får en bekräftelse via e-post.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="register"
      style={{
        background: "linear-gradient(180deg, rgba(22,22,22,0.92) 0%, rgba(14,14,14,0.88) 100%)",
        padding: "0 24px",
        position: "relative",
        overflow: "hidden",
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
      {/* Top border accent */}
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
          background: "linear-gradient(135deg, rgba(255,59,31,0.1) 0%, transparent 28%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-8%",
          right: "-12%",
          width: "70%",
          height: "84%",
          backgroundImage: "url('/texture2.PNG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
          opacity: 0.4,
          transform: "rotate(-7deg) scaleX(-1)",
          pointerEvents: "none",
        }}
      />

      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(255,59,31,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1, padding: "40px 0" }}>
        <div style={{ marginBottom: "64px" }}>
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
            Reservera din plats
          </p>
          <h2
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              letterSpacing: "0.06em",
              color: "var(--text)",
              marginBottom: "16px",
            }}
          >
            ANMÄL DIG
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)", maxWidth: 480 }}>
            Fyll i dina uppgifter för att säkra din plats.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Honeypot */}
          <div style={{ position: "absolute", left: "-9999px", top: 0 }} aria-hidden>
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={(e) => set("website", e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <Field
              label="Förnamn *"
              id="firstName"
              value={form.firstName}
              onChange={(v) => set("firstName", v)}
              error={errors.firstName}
              placeholder="Ditt förnamn"
            />
            <Field
              label="Efternamn *"
              id="lastName"
              value={form.lastName}
              onChange={(v) => set("lastName", v)}
              error={errors.lastName}
              placeholder="Ditt efternamn"
            />
            <Field
              label="E-post *"
              id="email"
              type="email"
              value={form.email}
              onChange={(v) => set("email", v)}
              error={errors.email}
              placeholder="dinemail@exempel.se"
            />
            <Field
              label="Telefonnummer"
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(v) => set("phone", v)}
              placeholder="070 000 00 00"
            />
            <Field
              label="Församling / organisation"
              id="organization"
              value={form.organization}
              onChange={(v) => set("organization", v)}
              placeholder="Om du är del av en"
            />
            <Field
              label="Stad"
              id="city"
              value={form.city}
              onChange={(v) => set("city", v)}
              placeholder="Vilken stad/ort kommer du ifrån?"
            />
          </div>

          {/* Consent */}
          <div style={{ marginBottom: "36px" }}>
            <label
              htmlFor="consent"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                cursor: "pointer",
              }}
            >
              <div style={{ position: "relative", flexShrink: 0, marginTop: 2 }}>
                <input
                  id="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => set("consent", e.target.checked)}
                  style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
                />
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 5,
                    border: errors.consent ? "1.5px solid var(--accent)" : "1.5px solid rgba(255,255,255,0.25)",
                    background: form.consent ? "var(--accent)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                >
                  {form.consent && (
                    <svg viewBox="0 0 12 10" fill="none" style={{ width: 12, height: 10 }}>
                      <polyline points="1 5 4.5 9 11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
              <span style={{ fontSize: "0.875rem", color: errors.consent ? "var(--accent)" : "var(--text-muted)", lineHeight: 1.6 }}>
                Jag godkänner att mina uppgifter sparas för konferensadministration
              </span>
            </label>
            {errors.consent && (
              <p style={{ marginTop: 6, marginLeft: 34, fontSize: "0.8rem", color: "var(--accent)" }}>
                {errors.consent}
              </p>
            )}
          </div>

          {status === "error" && (
            <p
              style={{
                marginBottom: 20,
                padding: "14px 18px",
                background: "rgba(255,59,31,0.08)",
                border: "1px solid rgba(255,59,31,0.25)",
                borderRadius: "var(--radius-sm)",
                color: "var(--accent)",
                fontSize: "0.9rem",
              }}
            >
              Något gick fel. Försök igen om en stund.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            style={{
              width: "100%",
              fontFamily: "'Anton', sans-serif",
              fontSize: "1.1rem",
              letterSpacing: "0.1em",
              color: "#fff",
              border: "none",
              padding: "20px 40px",
              borderRadius: "var(--radius-sm)",
              background: status === "submitting"
                ? "rgba(255,59,31,0.4)"
                : "var(--accent)",
              boxShadow: status === "submitting" ? "none" : "0 8px 32px rgba(255,59,31,0.35)",
              cursor: status === "submitting" ? "not-allowed" : "pointer",
              transition: "transform 0.25s, box-shadow 0.25s, background 0.25s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
            onMouseEnter={(e) => {
              if (status !== "submitting") {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(255,59,31,0.5)";
              }
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255,59,31,0.35)";
            }}
          >
            {status === "submitting" ? (
              <>
                <span
                  style={{
                    width: 18,
                    height: 18,
                    border: "2px solid rgba(255,255,255,0.3)",
                    borderTopColor: "#fff",
                    borderRadius: "50%",
                    animation: "spin 0.7s linear infinite",
                    display: "inline-block",
                  }}
                />
                Skickar…
              </>
            ) : (
              "Skicka anmälan"
            )}
          </button>

          <p
            style={{
              marginTop: "16px",
              textAlign: "center",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
            }}
          >
            Du får en bekräftelse via e-post efter anmälan.
          </p>
        </form>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: "block",
          fontSize: "0.8rem",
          fontWeight: 500,
          letterSpacing: "0.06em",
          color: "var(--text-muted)",
          marginBottom: "8px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "14px 18px",
          borderRadius: "var(--radius-sm)",
          border: error
            ? "1.5px solid var(--accent)"
            : focused
            ? "1.5px solid rgba(255,59,31,0.5)"
            : "1.5px solid var(--border-strong)",
          background: "var(--surface)",
          color: "var(--text)",
          fontSize: "0.95rem",
          fontFamily: "inherit",
          outline: "none",
          boxShadow: focused
            ? "0 0 0 3px rgba(255,59,31,0.1)"
            : error
            ? "0 0 0 3px rgba(255,59,31,0.08)"
            : "none",
          transition: "border-color 0.2s, box-shadow 0.2s",
        }}
      />
      {error && (
        <p style={{ marginTop: 5, fontSize: "0.78rem", color: "var(--accent)" }}>{error}</p>
      )}
    </div>
  );
}
