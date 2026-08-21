"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/lib/categories";
import { CITIES } from "@/lib/cities";
import { autocomplete } from "@/lib/store";
import type { AutocompleteResult } from "@/lib/search";

export default function SearchForm({
  q = "",
  category = "",
  city = "",
  province = "",
  large = false,
}: {
  q?: string;
  category?: string;
  city?: string;
  province?: string;
  large?: boolean;
}) {
  const [searchTerm, setSearchTerm] = useState(q);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedCity, setSelectedCity] = useState(city);
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<AutocompleteResult>({
    businesses: [],
    categories: [],
    cities: [],
  });

  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Instant in-memory search autocomplete
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSuggestions({ businesses: [], categories: [], cities: [] });
      return;
    }
    const res = autocomplete(searchTerm.trim(), 5);
    setSuggestions(res);
    setIsOpen(true);
  }, [searchTerm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
    const p = new URLSearchParams();
    if (searchTerm.trim()) p.set("q", searchTerm.trim());
    if (selectedCategory) p.set("category", selectedCategory);
    if (selectedCity) p.set("city", selectedCity);
    if (province) p.set("province", province);
    router.push(`/directory?${p.toString()}`);
  };

  // Group cities by region
  const gtaCities = CITIES.filter(
    (c) =>
      c.region === "Greater Toronto Area" ||
      c.region === "Durham Region" ||
      c.region === "York Region" ||
      c.region === "Halton Region"
  );
  const onCities = CITIES.filter((c) => c.province === "ON" && !gtaCities.includes(c));
  const bcCities = CITIES.filter((c) => c.province === "BC");
  const qcCities = CITIES.filter((c) => c.province === "QC");
  const abCities = CITIES.filter((c) => ["AB", "MB", "SK"].includes(c.province));
  const atlCities = CITIES.filter((c) => ["NS", "NL", "NB", "PE"].includes(c.province));

  const hasSuggestions =
    suggestions.businesses.length > 0 ||
    suggestions.categories.length > 0 ||
    suggestions.cities.length > 0;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <form
        onSubmit={handleSubmit}
        className={`grid gap-3 ${
          large ? "md:grid-cols-[1.4fr_1.1fr_1.1fr_auto]" : "md:grid-cols-[1.3fr_1.1fr_1.1fr_auto]"
        } bg-white border-2 border-[#CBD5E1] hover:border-[#002D62] focus-within:border-[#002D62] rounded-3xl p-3 sm:p-4 shadow-card transition duration-200`}
      >
        {province && <input type="hidden" name="province" value={province} />}

        {/* Query Input with live suggestion trigger */}
        <div className="space-y-1 relative">
          <label className="text-[10px] font-extrabold uppercase tracking-widest text-[#002D62] flex items-center justify-between px-1">
            <span className="flex items-center gap-1"><span>🔍</span> Keyword / Tamil Term</span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="q"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => {
                if (searchTerm.trim() && hasSuggestions) setIsOpen(true);
              }}
              placeholder="e.g. Hopper, kothu, lawyer, dentist, kovil, saree…"
              autoComplete="off"
              className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] outline-none transition focus:bg-white pr-8"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setIsOpen(false);
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs p-1"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Selection */}
        <div className="space-y-1">
          <label className="text-[10px] font-extrabold uppercase tracking-widest text-[#002D62] flex items-center gap-1 px-1">
            <span>🏷️</span> Category
          </label>
          <select
            name="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3 py-2.5 text-sm text-[#0F172A] outline-none transition focus:bg-white cursor-pointer"
          >
            <option value="">All Categories ({CATEGORIES.length})</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name} ({c.tamil})
              </option>
            ))}
          </select>
        </div>

        {/* City Selection */}
        <div className="space-y-1">
          <label className="text-[10px] font-extrabold uppercase tracking-widest text-[#002D62] flex items-center gap-1 px-1">
            <span>🍁</span> Canadian City / Region
          </label>
          <select
            name="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3 py-2.5 text-sm text-[#0F172A] outline-none transition focus:bg-white cursor-pointer"
          >
            <option value="">All Canada ({CITIES.length}+ Cities)</option>

            <optgroup label="📍 Greater Toronto Area (GTA)">
              {gtaCities.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.name}, {c.province}
                </option>
              ))}
            </optgroup>

            <optgroup label="📍 Ontario (Wider)">
              {onCities.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.name}, {c.province}
                </option>
              ))}
            </optgroup>

            <optgroup label="📍 British Columbia (Metro Vancouver & BC)">
              {bcCities.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.name}, {c.province}
                </option>
              ))}
            </optgroup>

            <optgroup label="📍 Quebec (Montreal & QC)">
              {qcCities.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.name}, {c.province}
                </option>
              ))}
            </optgroup>

            <optgroup label="📍 Alberta & Prairies (AB, MB, SK)">
              {abCities.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.name}, {c.province}
                </option>
              ))}
            </optgroup>

            <optgroup label="📍 Atlantic Canada (NS, NL, NB, PE)">
              {atlCities.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.name}, {c.province}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="btn-primary w-full md:w-auto px-6 py-2.5 rounded-2xl text-sm font-black flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>🔍</span>
            <span>Search Canada</span>
          </button>
        </div>
      </form>

      {/* Instant Autocomplete Suggestions Popover */}
      {isOpen && hasSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl shadow-2xl border border-slate-200 p-4 z-50 space-y-3 animate-fadeIn">
          {/* Category Suggestions */}
          {suggestions.categories.length > 0 && (
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                Categories
              </span>
              <div className="flex flex-wrap gap-1.5">
                {suggestions.categories.map((c) => (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(c.slug);
                      setIsOpen(false);
                      router.push(`/directory?category=${c.slug}`);
                    }}
                    className="px-3 py-1 rounded-xl bg-slate-50 hover:bg-[#F0F7FF] text-xs font-bold text-slate-800 hover:text-[#002D62] border border-slate-200 flex items-center gap-1.5 transition"
                  >
                    <span>{c.name}</span>
                    <span className="tamil text-[#E00624] text-[11px]">({c.tamil})</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* City Suggestions */}
          {suggestions.cities.length > 0 && (
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                Cities
              </span>
              <div className="flex flex-wrap gap-1.5">
                {suggestions.cities.map((city) => (
                  <button
                    key={city.slug}
                    type="button"
                    onClick={() => {
                      setSelectedCity(city.name);
                      setIsOpen(false);
                      router.push(`/directory?city=${encodeURIComponent(city.name)}`);
                    }}
                    className="px-3 py-1 rounded-xl bg-slate-50 hover:bg-[#F0F7FF] text-xs font-bold text-slate-800 hover:text-[#002D62] border border-slate-200 transition"
                  >
                    🍁 {city.name}, {city.province}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Business suggestions */}
          {suggestions.businesses.length > 0 && (
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                Direct Listings
              </span>
              <div className="space-y-1">
                {suggestions.businesses.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/directory/${b.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#F0F7FF] transition border border-transparent hover:border-[#002D62] group"
                  >
                    <div className="min-w-0 pr-3">
                      <div className="flex items-center gap-2">
                        <span className="font-outfit font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#002D62] truncate">
                          {b.name}
                        </span>
                        {b.tamilName && (
                          <span className="tamil text-[11px] text-[#E00624] font-semibold shrink-0">
                            {b.tamilName}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-500 truncate">
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

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Press Enter to search all</span>
            <button
              type="submit"
              onClick={handleSubmit}
              className="font-bold text-[#002D62] hover:underline"
            >
              See all results for &quot;{searchTerm}&quot; →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
