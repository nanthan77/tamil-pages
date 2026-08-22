import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tamil Hindu Temple Directory in Canada",
  description: "Browse community directory entries for Tamil Hindu temples in Canada and confirm current details directly.",
  alternates: { canonical: "/temples" },
  openGraph: { url: "/temples" },
};

export default function TemplesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
