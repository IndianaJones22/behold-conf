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
  metadataBase: new URL("https://behold-conf-web--behold-conf.europe-west4.hosted.app"),
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
    images: [
      {
        url: "/og-image.jpg",
        width: 915,
        height: 1144,
        alt: "BEHOLD heldagskonferens 2 maj 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BEHOLD — Jag gör något nytt",
    description:
      "Heldagskonferens 2 maj 2026 · Sollentuna, Stockholm. Se, jag gör något nytt.",
    images: ["/og-image.jpg"],
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
