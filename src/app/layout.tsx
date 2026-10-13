import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://melcolau-porto.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Melco Lauwento — Full-Stack Developer & Data Analyst",
  description:
    "Portfolio of Melco Lauwento, an Information Systems graduate who builds full-stack web applications with Laravel, Vue.js & Inertia.js and turns data into decisions with SQL, Python & Tableau.",
  keywords: [
    "Melco Lauwento",
    "Full-Stack Developer",
    "Data Analyst",
    "Laravel",
    "Vue.js",
    "Inertia.js",
    "Tableau",
    "Portfolio",
  ],
  authors: [{ name: "Melco Lauwento" }],
  openGraph: {
    title: "Melco Lauwento — Full-Stack Developer & Data Analyst",
    description:
      "I build reliable web applications and turn data into decisions.",
    type: "website",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melco Lauwento — Full-Stack Developer & Data Analyst",
    description:
      "I build reliable web applications and turn data into decisions.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f2ed",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh antialiased">
        <MotionProvider>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
