import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SiteBackground } from "@/components/ui/SiteBackground";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://melco-lauwento.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Melco Lauwento — Full-Stack Developer & Data Analyst",
  description:
    "Portfolio of Melco Lauwento, a final-year Information Systems student who builds full-stack web applications with Laravel, Vue.js & Inertia.js and turns data into decisions with SQL, Python & Tableau.",
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
  themeColor: "#07070b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh antialiased">
        <SiteBackground />
        <LanguageProvider>
          <SmoothScroll>
            <CustomCursor />
            <ScrollProgress />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
