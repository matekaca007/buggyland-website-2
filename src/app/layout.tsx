import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Barlow_Condensed, DM_Sans, Noto_Sans_Georgian } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

// ─── Fonts ─────────────────────────────────────────────────────
// Display / Hero: ultra-bold condensed — action & adventure feel
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-bebas",
});

// Section headings: athletic condensed — clean off-road feel
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
});

// Body: modern, highly readable geometric sans
const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ["georgian"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-georgian",
});

// ─── Metadata ──────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Buggyland Tbilisi | Off-Road ATV, Buggy & Jeep Adventures",
  description:
    "Buggyland Tbilisi — Tbilisi's premier off-road adventure park. Ride ATVs, buggies and extreme jeeps through Georgia's wild terrain. Book your guided tour today!",
  keywords: [
    "ATV Tbilisi",
    "buggy ride Georgia",
    "off-road adventures Tbilisi",
    "quad bike rental Tbilisi",
    "jeep tour Georgia",
    "Buggyland",
    "ბაგილენდი თბილისი",
  ],
  authors: [{ name: "Buggyland Tbilisi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ka_GE", "ru_RU"],
    title: "Buggyland Tbilisi | Off-Road ATV, Buggy & Jeep Adventures",
    description:
      "Tbilisi's premier off-road adventure park. Ride ATVs, buggies and extreme jeeps through Georgia's wild terrain.",
    siteName: "Buggyland Tbilisi",
    images: [
      {
        url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1280,h=960,fit=crop/m7VDn8EOk5uxpvLl/20260822_183119.jpg-x7HYA2ea2SloJ9i8.jpeg",
        width: 1280,
        height: 960,
        alt: "Buggyland Tbilisi — Premium Buggy UTV Rentals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buggyland Tbilisi | Off-Road Adventures",
    description: "Ride ATVs, buggies and extreme jeeps through Tbilisi's wild trails.",
    images: ["https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1280,h=960,fit=crop/m7VDn8EOk5uxpvLl/20260822_183119.jpg-x7HYA2ea2SloJ9i8.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071a0a",
};

// ─── JSON-LD structured data ────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buggyland Tbilisi",
  description:
    "Premier off-road adventure park in Tbilisi, Georgia offering ATV, buggy and jeep tours.",
  url: "https://buggy.ge",
  telephone: ["+995501100120", "+995574404444"],
  email: "ride@buggy.ge",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tbilisi",
    addressCountry: "GE",
  },
  geo: {
    "@type": "GeoCoordinates",
    // TODO(client): supply exact coordinates
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    // TODO(client): supply exact hours
  },
  sameAs: [
    // TODO(client): add social media URLs
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlowCondensed.variable} ${dmSans.variable} ${notoSansGeorgian.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-brand-black text-brand-white font-body antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
