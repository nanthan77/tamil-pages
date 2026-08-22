"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/lib/categories";
import { CITIES } from "@/lib/cities";
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

  // Lightweight Instant Category & City Search in Client JS (Avoids bundling 3MB DB)
  useEffect(() => {
    const trimmed = searchTerm.trim().toLowerCase();
    if (!trimmed || trimmed.length < 2) {
      setSuggestions({ businesses: [], categories: [], cities: [] });
      return;
    }

    const matchedCats = CATEGORIES.filter(
      (c) =>
        c.name.toLowerCase().includes(trimmed) ||
        (c.tamil && c.tamil.includes(trimmed)) ||
        c.slug.includes(trimmed)
    ).slice(0, 4);

    const matchedCities = CITIES.filter(
      (c) =>
        c.name.toLowerCase().includes(trimmed) ||
        c.slug.toLowerCase().includes(trimmed)
    ).slice(0, 4);

    setSuggestions({
      businesses: [],
      categories: matchedCats,
      cities: matchedCities,
    });
    setIsOpen(matchedCats.length > 0 || matchedCities.length > 0);
  }, [searchTerm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
    const params = new URLSearchParams();
    if (searchTerm.trim()) params.set("q", searchTerm.trim());
    if (selectedCategory) params.set("category", selectedCategory);
    if (selectedCity) params.set("city", selectedCity);
    if (province) params.set("province", province);

    // Direct routing for SEO friendly category / city combos
    if (!searchTerm.trim() && selectedCity && selectedCategory) {
      router.push(`/c/${selectedCity}/${selectedCategory}`);
    } else if (!searchTerm.trim() && selectedCity) {
      router.push(`/c/${selectedCity}`);
    } else if (!searchTerm.trim() && selectedCategory) {
      router.push(`/category/${selectedCategory}`);
    } else {
      router.push(`/directory?${params.toString()}`);
    }
  };

  const hasSuggestions =
    suggestions.businesses.length > 0 ||
    suggestions.categories.length > 0 ||
    suggestions.cities.length > 0;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <form
        onSubmit={handleSubmit}
        className={`bg-white rounded-2xl shadow-xl border border-slate-200 p-2 flex flex-col md:flex-row items-stretch gap-2 transition-all duration-200 ${
          large ? "p-3 sm:p-4 rounded-3xl shadow-2xl" : ""
        }`}
      >
        {/* Search Query Input */}
        <div className="flex-1 relative flex items-center min-w-0">
          <span className="absolute left-3.5 text-slate-400 text-sm">🔍</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => {
              if (hasSuggestions) setIsOpen(true);
            }}
            placeholder="Search Tamil businesses, doctors, lawyers, kovils…"
            aria-label="Search Tamil businesses by name, service or keyword"
            className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-slate-900 bg-transparent placeholder-slate-400 rounded-xl outline-none focus:bg-slate-50 transition"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="absolute right-3 text-slate-400 hover:text-slate-600 text-xs font-bold"
              aria-label="Clear search query"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Select Dropdown */}
        <div className="md:w-56 shrink-0 relative border-t md:border-t-0 md:border-l border-slate-100 pt-2 md:pt-0 md:pl-2">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            aria-label="Filter by business category"
            className="w-full py-2.5 sm:py-3 px-3 text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 md:bg-transparent rounded-xl outline-none cursor-pointer focus:bg-slate-50 transition"
          >
            <option value="">All 22 Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* City Select Dropdown */}
        <div className="md:w-48 shrink-0 relative border-t md:border-t-0 md:border-l border-slate-100 pt-2 md:pt-0 md:pl-2">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            aria-label="Filter by Canadian city"
            className="w-full py-2.5 sm:py-3 px-3 text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 md:bg-transparent rounded-xl outline-none cursor-pointer focus:bg-slate-50 transition"
          >
            <option value="">All Canadian Cities</option>
            {CITIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}, {c.province}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Search Button */}
        <button
          type="submit"
          className="btn-primary rounded-xl px-6 py-3 text-xs sm:text-sm font-black shrink-0 shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] transition"
        >
          <span>Find Services</span>
          <span>→</span>
        </button>
      </form>

      {/* Autocomplete Dropdown Panel */}
      {isOpen && hasSuggestions && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden divide-y divide-slate-100 max-h-96 overflow-y-auto animate-fadeIn">
          {/* Categories */}
          {suggestions.categories.length > 0 && (
            <div className="p-3">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block px-2 mb-1">
                Categories
              </span>
              {suggestions.categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 text-xs font-bold text-slate-800 transition"
                >
                  <span className="flex items-center gap-2">
                    <span>🏷️</span>
                    <span>{cat.name}</span>
                  </span>
                  {cat.tamil && (
                    <span className="tamil text-[11px] text-[#E00624]">
                      {cat.tamil}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}

          {/* Cities */}
          {suggestions.cities.length > 0 && (
            <div className="p-3">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block px-2 mb-1">
                Canadian Cities
              </span>
              {suggestions.cities.map((ct) => (
                <Link
                  key={ct.slug}
                  href={`/c/${ct.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 text-xs font-bold text-slate-800 transition"
                >
                  <span className="flex items-center gap-2">
                    <span>🍁</span>
                    <span>{ct.name}, {ct.province}</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-normal">
                    {ct.region}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
