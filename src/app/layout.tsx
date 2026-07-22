import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ThemeScript } from "@/components/layout/ThemeScript";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "A professional portfolio showcasing Mark LaRose's software-development, electrical, construction, planning, and project-building experience.";

const siteUrl = "https://marklarose.dev";
const siteTitle = "Mark LaRose | Developer, Builder & Problem Solver";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Mark LaRose",
  },
  description,
  applicationName: "Mark LaRose Portfolio",
  authors: [{ name: "Mark LaRose", url: siteUrl }],
  creator: "Mark LaRose",
  publisher: "Mark LaRose",
  keywords: [
    "Mark LaRose",
    "Mark LaRose portfolio",
    "software developer",
    "full-stack developer",
    "Next.js developer",
    "web developer",
    "construction professional",
    "trades experience",
    "electrical construction",
    "technical problem solving",
    "project planning",
    "project execution",
    "Halifax",
    "Dartmouth",
    "Nova Scotia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description,
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "Mark LaRose Portfolio",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon-light.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f3ed" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1011" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeScript />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
