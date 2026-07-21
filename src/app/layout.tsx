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

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Mark LaRose | Developer, Builder & Problem Solver",
    template: "%s | Mark LaRose",
  },
  description,
  keywords: [
    "Mark LaRose",
    "software developer",
    "Next.js developer",
    "construction professional",
    "electrical construction",
    "project planning",
    "Halifax",
    "Dartmouth",
    "Nova Scotia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mark LaRose | Developer, Builder & Problem Solver",
    description,
    type: "profile",
    locale: "en_CA",
    url: "/",
    siteName: "Mark LaRose Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark LaRose | Developer, Builder & Problem Solver",
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
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
