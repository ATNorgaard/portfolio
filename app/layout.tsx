import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://andreas-noergaard-ai.andapanda.chatgpt.site"),
  title: "Andreas Nørgaard | AI Solutions Architect",
  description:
    "AI, data og arkitektur omsat til klar retning og løsninger, der virker i virkeligheden.",
  openGraph: {
    title: "Andreas Nørgaard | AI Solutions Architect",
    description: "AI, data og arkitektur omsat til klar retning og løsninger, der virker i virkeligheden.",
    type: "website",
    locale: "da_DK",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Andreas Nørgaard — AI Solutions Architect" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andreas Nørgaard | AI Solutions Architect",
    description: "AI, data og arkitektur omsat til klar retning og løsninger, der virker i virkeligheden.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
