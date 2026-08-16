"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ReviewForm({ slug }: { slug: string }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [ok, setOk] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slug,
        name: form.get("name"),
        rating: form.get("rating"),
        comment: form.get("comment"),
      }),
    });
    const data = await res.json();
    setPending(false);
    if (!res.ok) {
      setError(data.error || "Could not save review");
      return;
    }
    setOk(true);
    e.currentTarget.reset();
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <label className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8a7f7f]">Your name</span>
          <input name="name" required className="w-full rounded-2xl border px-3 py-2.5 text-sm" />
        </label>
        <label className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8a7f7f]">Rating</span>
          <select name="rating" defaultValue="5" className="w-full rounded-2xl border px-3 py-2.5 text-sm">
            <option value="5">5 — Excellent</option>
            <option value="4">4 — Good</option>
            <option value="3">3 — Okay</option>
            <option value="2">2 — Poor</option>
            <option value="1">1 — Avoid</option>
          </select>
        </label>
      </div>
      <label className="block space-y-1">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#8a7f7f]">Review</span>
        <textarea name="comment" required minLength={10} rows={3} className="w-full rounded-2xl border px-3 py-2.5 text-sm" />
      </label>
      {error && <p className="text-xs text-[#d80621] font-semibold">{error}</p>}
      {ok && <p className="text-xs text-[#161616] font-semibold">Thanks — your review is live.</p>}
      <button type="submit" disabled={pending} className="btn-gold rounded-2xl px-4 py-2 text-sm">
        {pending ? "Saving…" : "Post review"}
      </button>
    </form>
  );
}
