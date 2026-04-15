import { NextRequest, NextResponse } from "next/server";
// googleapis has a broken JSDoc comment in its generated types that trips up
// the Next.js TypeScript checker even with skipLibCheck:true — dynamic import
// keeps it out of the static analysis pass while keeping runtime correctness.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GoogleModule = any;

interface RegistrationPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  organization?: string;
  city?: string;
  dietary?: string;
  message?: string;
  consent: boolean;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendConfirmationEmail({
  firstName,
  email,
}: {
  firstName: string;
  email: string;
}) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.warn("RESEND_API_KEY is missing; skipping confirmation email");
    return;
  }

  const recipientName = firstName.trim() || "du";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "info@beholdconf.se",
      to: [email.trim().toLowerCase()],
      subject: "Tack för din anmälan till BEHOLD",
      text: [
        `Hej ${recipientName}!`,
        "",
        "Tack för din anmälan till BEHOLD.",
        "",
        "Vi ser fram emot att fira dagen tillsammans med dig.",
        "Följ oss gärna på Instagram @behold.conf där bland annat schema och annan info kommer att lanseras inför heldagen.",
        "",
        "Vi ses den 2 maj 2026.",
        "",
        "BEHOLD",
      ].join("\n"),
      html: `
        <div style="font-family: Inter, Arial, sans-serif; background: #0d0d0d; color: #f3eff0; padding: 32px;">
          <div style="max-width: 640px; margin: 0 auto; background: #141414; border: 1px solid rgba(255,255,255,0.08); border-radius: 18px; padding: 32px;">
            <p style="margin: 0 0 12px; color: #ff3b1f; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;">BEHOLD</p>
            <h1 style="margin: 0 0 20px; font-size: 28px; line-height: 1.1;">Tack för din anmälan</h1>
            <p style="margin: 0 0 16px; line-height: 1.7;">Hej ${recipientName}!</p>
            <p style="margin: 0 0 16px; line-height: 1.7;">Tack för din anmälan till BEHOLD. Vi ser fram emot att fira dagen tillsammans med dig.</p>
            <p style="margin: 0 0 16px; line-height: 1.7;">
              Följ oss gärna på Instagram <strong>@behold.conf</strong> där bland annat schema och annan info kommer att lanseras inför heldagen.
            </p>
            <p style="margin: 24px 0 0; color: #b9b2b4; line-height: 1.7;">Vi ses den 2 maj 2026.</p>
          </div>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend error: ${response.status} ${errorBody}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: RegistrationPayload = await request.json();

    // Validate required fields
    if (!body.firstName?.trim()) {
      return NextResponse.json({ error: "firstName is required" }, { status: 400 });
    }
    if (!body.lastName?.trim()) {
      return NextResponse.json({ error: "lastName is required" }, { status: 400 });
    }
    if (!body.email?.trim() || !validateEmail(body.email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }
    if (!body.consent) {
      return NextResponse.json({ error: "Consent is required" }, { status: 400 });
    }

    // Write to Google Sheets
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!serviceAccountEmail || !privateKey || !sheetId) {
      console.error("Missing Google Sheets environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const { google }: { google: GoogleModule } = await import("googleapis");

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: serviceAccountEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const timestamp = new Date().toLocaleString("sv-SE", {
      timeZone: "Europe/Stockholm",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Blad1!A:I",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            timestamp,
            body.firstName.trim(),
            body.lastName.trim(),
            body.email.trim().toLowerCase(),
            body.phone?.trim() ?? "",
            body.organization?.trim() ?? "",
            body.city?.trim() ?? "",
            body.dietary?.trim() ?? "",
            body.message?.trim() ?? "",
          ],
        ],
      },
    });

    try {
      await sendConfirmationEmail({
        firstName: body.firstName,
        email: body.email,
      });
    } catch (emailError) {
      console.error("Confirmation email error:", emailError);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
