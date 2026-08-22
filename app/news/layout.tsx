import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canadian Tamil Community Story Index",
  description: "Browse community story drafts while editorial source checks are in progress.",
  alternates: { canonical: "/news" },
  openGraph: { url: "/news" },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
