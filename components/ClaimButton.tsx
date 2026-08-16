"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ClaimButton({ slug }: { slug: string }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function claim() {
    setPending(true);
    setError("");
    const res = await fetch("/api/claim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    const data = await res.json();
    setPending(false);
    if (!res.ok) {
      setError(data.error || "Could not claim");
      return;
    }
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="space-y-2">
      <button type="button" onClick={claim} disabled={pending} className="btn-gold rounded-2xl px-5 py-3 text-sm">
        {pending ? "Claiming…" : "Yes, this is my business — claim free"}
      </button>
      {error && <p className="text-xs text-[#d80621] font-semibold">{error}</p>}
    </div>
  );
}
