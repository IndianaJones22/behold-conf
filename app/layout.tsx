import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BEHOLD — Jag gör något nytt | 2 maj 2026 · Sollentuna",
  description:
    "En heldagskonferens om förnyelse, tro och hopp. 2 maj 2026 i Sollentuna, Stockholm. Jesaja 43:19",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "BEHOLD — Jag gör något nytt",
    description:
      "Heldagskonferens 2 maj 2026 · Sollentuna, Stockholm. Se, jag gör något nytt.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${anton.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
