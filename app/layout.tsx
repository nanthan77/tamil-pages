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
});

const work = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const tamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-tamil",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Canada’s Tamil Business & Services Directory`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Find Tamil restaurants, grocers, lawyers, clinics, tutors, temples and trades across Toronto, Scarborough, Montreal, Vancouver, and Canada.",
  robots: { index: true, follow: true },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-[#F8FAFC]">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
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
          className="fixed bottom-6 right-6 z-40 btn-primary rounded-full px-5 py-3 text-xs font-black shadow-lg flex items-center gap-2 hover:scale-105 transition"
        >
          <span>🍁</span>
          <span>+ Add Business Free</span>
        </a>
      </body>
    </html>
  );
}
