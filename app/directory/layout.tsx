import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tamil Business Directory in Canada",
  description: "Browse Canadian Tamil business and community listings. Confirm important details directly with each organization.",
  alternates: { canonical: "/directory" },
  openGraph: { url: "/directory" },
};

export default function DirectoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
