import type { Metadata } from "next";
import { Noto_Sans_Tamil, Outfit, Work_Sans } from "next/font/google";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

const work = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const tamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-tamil",
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Canada’s #1 Tamil Business & Services Directory`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Canada’s verified directory for 6,380+ Tamil businesses, restaurants, lawyers, realtors, accountants, Hindu temples, movie showtimes, and cultural services across Toronto, Scarborough, Markham, Brampton, Montreal, Vancouver, and nationwide.",
  keywords: [
    "Tamil businesses Canada",
    "Tamil directory Toronto",
    "Scarborough Tamil restaurants",
    "Tamil lawyer Ontario",
    "Tamil realtor Brampton",
    "Tamil temples Canada",
    "Tamil cinema showtimes Canada",
    "Tamil Canadian community",
    "கனடா தமிழ் வணிகங்கள்",
    "tamilcanadianpages.ca"
  ],
  authors: [{ name: "SafeNet Creations Canada", url: "https://www.safenetcreations.com/canada/" }],
  creator: "SafeNet Creations Canada",
  publisher: SITE_NAME,
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
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_CA",
    alternateLocale: ["ta_CA"],
    url: SITE_URL,
    title: `${SITE_NAME} — Canada’s #1 Tamil Business & Services Directory`,
    description: "Verified direct contact directory for 6,380+ Canadian Tamil businesses, temples, and services.",
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Canada Tamil Business Directory`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Canada’s Tamil Business & Services Directory`,
    description: "Verified direct contact directory for 6,380+ Canadian Tamil businesses, temples, and services.",
    images: [`${SITE_URL}/og.png`],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Greater Toronto Area, Ontario, Canada",
    "geo.position": "43.7764;-79.2318",
    "ICBM": "43.7764, -79.2318",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-[#F8FAFC]">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://apis.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://tamil-pages-961fd.firebaseapp.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://apis.google.com" />
        <link rel="dns-prefetch" href="https://tamil-pages-961fd.firebaseapp.com" />
      </head>
      <body
        className={`${outfit.variable} ${work.variable} ${tamil.variable} font-work antialiased bg-[#F8FAFC] text-[#0F172A] flex flex-col min-h-full selection:bg-[#E00624] selection:text-white`}
      >
        <FirebaseAnalytics />
        <JsonLd data={[websiteJsonLd(), organizationJsonLd()]} />
        <Header />
        {children}
        <Footer />
        <a
          href="/add-business"
          className="fixed bottom-24 sm:bottom-28 right-5 sm:right-6 z-40 btn-primary rounded-full px-5 py-3 text-xs font-black shadow-2xl flex items-center gap-2 hover:scale-105 transition border-2 border-white/20"
        >
          <span>🍁</span>
          <span>+ Add Business Free</span>
        </a>
      </body>
    </html>
  );
}
