import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://coryant.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: "Coryant — Multi-Agent Research Packs for Claude",
    template: "%s | Coryant",
  },
  description:
    "Install a full agent team — strategist, researchers, coordinator, synthesizer — directly into Claude Code or Claude.ai. No new account. No inference cost. One-time ₹1,999.",
  keywords: ["Claude AI", "multi-agent", "research packs", "Claude Code skills", "AI research", "Coryant"],
  authors: [{ name: "Coryant", url: APP_URL }],
  creator: "Coryant",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: {
    title: "Coryant — Multi-Agent Research Packs for Claude",
    description: "Coordinated research agents running on your Claude. Install in 2 minutes.",
    url: APP_URL,
    siteName: "Coryant",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coryant — Multi-Agent Research Packs for Claude",
    description: "Coordinated research agents running on your Claude. Install in 2 minutes.",
  },
  alternates: {
    canonical: APP_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}</Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
