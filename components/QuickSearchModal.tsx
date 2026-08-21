"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { autocomplete } from "@/lib/store";
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
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          window.dispatchEvent(new CustomEvent("open-quick-search"));
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults({ businesses: [], categories: [], cities: [] });
      return;
    }
    const res = autocomplete(query.trim(), 6);
    setResults(res);
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[80vh]">
        {/* Search Header Bar */}
        <form onSubmit={handleSubmit} className="relative flex items-center border-b border-slate-100 px-4 py-3 bg-white">
          <span className="text-xl mr-3 text-slate-400">🔍</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search businesses, doctors, kothu, temples, cities, Tamil terms..."
            className="w-full text-base sm:text-lg font-medium text-slate-800 placeholder:text-slate-400 outline-none bg-transparent"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition mr-2 text-xs"
            >
              ✕
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2.5 py-1 rounded-xl text-xs font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 transition"
          >
            ESC
          </button>
        </form>

        {/* Results Container */}
        <div className="overflow-y-auto p-4 space-y-4 flex-1">
          {!query && (
            <div className="py-4 space-y-3">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                Popular Quick Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "🔥 Kothu & Hoppers", q: "kothu" },
                  { label: "🛕 Tamil Temples", q: "temple" },
                  { label: "⚖️ Immigration Lawyers", q: "immigration" },
                  { label: "🦷 Dental Clinics", q: "dentist" },
                  { label: "📊 Tax & CPA", q: "tax" },
                  { label: "💍 Gold & Sarees", q: "saree" },
                  { label: "🚗 Auto Mechanics", q: "mechanic" },
                  { label: "🏫 Tamil Schools", q: "tamil school" },
                ].map((item) => (
                  <button
                    key={item.q}
                    type="button"
                    onClick={() => {
                      onClose();
                      router.push(`/directory?q=${encodeURIComponent(item.q)}`);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-[#F0F7FF] text-xs font-bold text-slate-700 hover:text-[#002D62] border border-slate-200 transition"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && !hasResults && (
            <div className="text-center py-10 space-y-3">
              <span className="text-3xl">🔍</span>
              <p className="text-sm font-bold text-slate-700">
                No direct matches found for &quot;{query}&quot;
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try searching with alternate spelling, a Canadian city name, or broader keywords.
              </p>
              <button
                type="button"
                onClick={handleSubmit}
                className="btn-primary rounded-xl px-4 py-2 text-xs font-bold"
              >
                Search Full Directory for &quot;{query}&quot; →
              </button>
            </div>
          )}

          {/* Categories matches */}
          {results.categories.length > 0 && (
            <div className="space-y-1.5">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-2">
                Matching Categories
              </p>
              <div className="grid sm:grid-cols-2 gap-1.5">
                {results.categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/directory?category=${c.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 hover:bg-[#F0F7FF] border border-slate-100 hover:border-[#002D62] transition group"
                  >
                    <span className="text-xs font-bold text-slate-800 group-hover:text-[#002D62]">
                      {c.name}
                    </span>
                    <span className="tamil text-[11px] text-[#E00624] font-semibold">
                      {c.tamil}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Cities matches */}
          {results.cities.length > 0 && (
            <div className="space-y-1.5">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-2">
                Matching Canadian Cities
              </p>
              <div className="flex flex-wrap gap-1.5">
                {results.cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/directory?city=${encodeURIComponent(city.name)}`}
                    onClick={onClose}
                    className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-[#F0F7FF] border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#002D62] transition flex items-center gap-1.5"
                  >
                    <span>🍁</span>
                    <span>{city.name}, {city.province}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Businesses matches */}
          {results.businesses.length > 0 && (
            <div className="space-y-1.5">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-2">
                Verified Businesses
              </p>
              <div className="space-y-1">
                {results.businesses.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/directory/${b.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-[#F0F7FF] border border-slate-100 hover:border-[#002D62] transition group shadow-xs"
                  >
                    <div className="min-w-0 pr-3">
                      <div className="flex items-center gap-2">
                        <span className="font-outfit font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#002D62] truncate">
                          {b.name}
                        </span>
                        {b.tamilName && (
                          <span className="tamil text-xs font-semibold text-[#E00624] shrink-0">
                            {b.tamilName}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                        {b.categoryName} · {b.city}, {b.province}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#002D62] shrink-0 opacity-0 group-hover:opacity-100 transition">
                      View →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        {query && hasResults && (
          <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Press <strong>Enter</strong> to view all results in Directory</span>
            <button
              type="button"
              onClick={handleSubmit}
              className="text-xs font-extrabold text-[#002D62] hover:text-[#E00624] transition"
            >
              See all results →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
