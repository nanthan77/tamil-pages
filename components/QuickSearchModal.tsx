"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/lib/categories";
import { CITIES } from "@/lib/cities";
import type { AutocompleteResult } from "@/lib/search";

export default function QuickSearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<AutocompleteResult>({
    businesses: [],
    categories: [],
    cities: [],
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setResults({ businesses: [], categories: [], cities: [] });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Fast In-Memory Category & City Search (Zero 409KB DB Payload)
  useEffect(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed || trimmed.length < 2) {
      setResults({ businesses: [], categories: [], cities: [] });
      return;
    }

    const matchedCats = CATEGORIES.filter(
      (c) =>
        c.name.toLowerCase().includes(trimmed) ||
        (c.tamil && c.tamil.includes(trimmed)) ||
        c.slug.includes(trimmed)
    ).slice(0, 5);

    const matchedCities = CITIES.filter(
      (c) =>
        c.name.toLowerCase().includes(trimmed) ||
        c.slug.toLowerCase().includes(trimmed)
    ).slice(0, 5);

    setResults({
      businesses: [],
      categories: matchedCats,
      cities: matchedCities,
    });
  }, [query]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onClose();
    router.push(`/directory?q=${encodeURIComponent(query.trim())}`);
  };

  const hasResults =
    results.businesses.length > 0 ||
    results.categories.length > 0 ||
    results.cities.length > 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 animate-fadeIn">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[80vh]">
        {/* Top Input Bar */}
        <form onSubmit={handleSubmit} className="p-4 border-b border-slate-100 flex items-center gap-3">
          <span className="text-slate-400 text-lg">🔍</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Tamil businesses, lawyers, restaurants, temples, cities…"
            aria-label="Quick search directory"
            className="w-full text-base sm:text-lg font-medium text-slate-900 outline-none placeholder-slate-400 bg-transparent"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-slate-400 hover:text-slate-600 p-1 text-sm font-bold"
              aria-label="Clear query"
            >
              ✕
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-bold text-slate-500 hover:text-slate-800 bg-slate-100 rounded-lg"
          >
            ESC
          </button>
        </form>

        {/* Results Body */}
        <div className="overflow-y-auto p-4 space-y-4">
          {!query.trim() && (
            <div className="py-8 text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#F0F7FF] text-[#002D62] text-xl border border-[#CCE3F8]">
                🍁
              </div>
              <h3 className="font-outfit font-black text-slate-800 text-base">Search Canadian Tamil Directory</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Search by business name, category, or Canadian city. Confirm important details directly with the organization.
              </p>
            </div>
          )}

          {query.trim() && !hasResults && (
            <div className="py-8 text-center space-y-3">
              <p className="text-sm font-bold text-slate-700">Press Enter to search the full directory for &quot;{query}&quot;</p>
              <button
                type="button"
                onClick={handleSubmit}
                className="btn-primary rounded-xl px-5 py-2.5 text-xs font-bold shadow-xs inline-flex items-center gap-1.5"
              >
                <span>Search Directory</span>
                <span>→</span>
              </button>
            </div>
          )}

          {/* Categories Results */}
          {results.categories.length > 0 && (
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-2 block mb-1">
                Matching Categories
              </span>
              <div className="grid sm:grid-cols-2 gap-1.5">
                {results.categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F0F7FF] border border-transparent hover:border-[#CCE3F8] transition"
                  >
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-2">
                      <span>🏷️</span>
                      <span>{cat.name}</span>
                    </span>
                    {cat.tamil && (
                      <span className="tamil text-[11px] font-bold text-[#E00624]">
                        {cat.tamil}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Cities Results */}
          {results.cities.length > 0 && (
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-2 block mb-1">
                Canadian Cities
              </span>
              <div className="grid sm:grid-cols-2 gap-1.5">
                {results.cities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/c/${c.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F0F7FF] border border-transparent hover:border-[#CCE3F8] transition"
                  >
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-2">
                      <span>🍁</span>
                      <span>{c.name}, {c.province}</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {c.region}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Tip: Press <kbd className="font-bold bg-white px-1.5 py-0.5 rounded border border-slate-200">Enter</kbd> to search everything</span>
          <span className="font-semibold text-[#002D62]">Canada-wide Tamil directory</span>
        </div>
      </div>
    </div>
  );
}
