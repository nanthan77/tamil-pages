import { CATEGORIES } from "@/lib/categories";
import { CITIES } from "@/lib/cities";

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
  // Group cities by region/province
  const gtaCities = CITIES.filter(
    (c) =>
      c.region === "Greater Toronto Area" ||
      c.region === "Durham Region" ||
      c.region === "York Region" ||
      c.region === "Halton Region",
  );
  const onCities = CITIES.filter((c) => c.province === "ON" && !gtaCities.includes(c));
  const bcCities = CITIES.filter((c) => c.province === "BC");
  const qcCities = CITIES.filter((c) => c.province === "QC");
  const abCities = CITIES.filter((c) => c.province === "AB" || c.province === "MB" || c.province === "SK");
  const atlCities = CITIES.filter((c) => ["NS", "NL", "NB", "PE"].includes(c.province));

  return (
    <form
      action="/directory"
      method="get"
      className={`grid gap-3 ${
        large ? "md:grid-cols-[1.4fr_1.1fr_1.1fr_auto]" : "md:grid-cols-[1.3fr_1.1fr_1.1fr_auto]"
      } bg-white border-2 border-[#CBD5E1] hover:border-[#002D62] focus-within:border-[#002D62] rounded-3xl p-3 sm:p-4 shadow-card transition duration-200`}
    >
      {province && <input type="hidden" name="province" value={province} />}

      {/* Query Search */}
      <div className="space-y-1">
        <label className="text-[10px] font-extrabold uppercase tracking-widest text-[#002D62] flex items-center gap-1 px-1">
          <span>🔍</span> Keyword / Business Name
        </label>
        <div className="relative">
          <input
            name="q"
            defaultValue={q}
            placeholder="e.g. Hopper hut, lawyer, spices, salon…"
            className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] outline-none transition focus:bg-white"
          />
        </div>
      </div>

      {/* Category Selection */}
      <div className="space-y-1">
        <label className="text-[10px] font-extrabold uppercase tracking-widest text-[#002D62] flex items-center gap-1 px-1">
          <span>🏷️</span> Category
        </label>
        <select
          name="category"
          defaultValue={category}
          className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3 py-2.5 text-sm text-[#0F172A] outline-none transition focus:bg-white cursor-pointer"
        >
          <option value="">All Categories ({CATEGORIES.length})</option>
          {CATEGORIES.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
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
          defaultValue={city}
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
  );
}
