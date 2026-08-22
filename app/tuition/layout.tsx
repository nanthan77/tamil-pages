import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tamil Tuition & Cultural Schools in Canada",
  description: "Browse Tamil tuition, language, dance and cultural-school directory entries across Canada.",
  alternates: { canonical: "/tuition" },
  openGraph: { url: "/tuition" },
};

export default function TuitionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
