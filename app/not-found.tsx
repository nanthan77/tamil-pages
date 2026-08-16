import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-lg mx-auto px-4 py-20 text-center space-y-4">
      <h1 className="font-outfit font-extrabold text-3xl text-[#161616]">Listing not found</h1>
      <p className="text-[#5c5656] text-sm">That business is not in the Canada Tamil directory yet.</p>
      <Link href="/directory" className="text-[#d80621] font-bold text-sm">
        Browse the directory →
      </Link>
    </main>
  );
}
