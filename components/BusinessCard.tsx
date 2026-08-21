import Link from "next/link";
import { getCategory } from "@/lib/categories";
import type { Business } from "@/lib/types";
import { initials, mapsLink, telLink, whatsappLink } from "@/lib/utils";

export default function BusinessCard(props: {
  biz?: Business;
  business?: Business;
  compact?: boolean;
}) {
  const item = props.biz || props.business;
  if (!item) return null;
  const cat = getCategory(item.category);
  const wa = whatsappLink(item.whatsapp || (item.phone.startsWith("+") ? item.phone : ""));

  return (
    <div className="bg-white rounded-3xl border border-[#E2E8F0] hover:border-[#002D62] shadow-sm hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1 relative">
      {/* Top Canadian Accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#E00624] via-[#FFFFFF] to-[#002D62] opacity-80 group-hover:opacity-100 transition" />

      <div className="p-6 space-y-4">
        {/* Top Badges */}
        <div className="flex items-center justify-between text-[11px] gap-2">
          <span className="px-3 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] font-extrabold uppercase tracking-wider text-[10px]">
            {cat?.name || item.category}
          </span>
          <span className="text-[#334155] font-bold text-xs flex items-center gap-1 bg-[#F8FAFC] px-2.5 py-1 rounded-full border border-[#E2E8F0] shrink-0">
            <span>🍁</span>
            <span>{item.city}, {item.province}</span>
          </span>
        </div>

        {/* Name & Avatar */}
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#002D62] to-[#0A4D92] text-white shrink-0 flex items-center justify-center font-outfit font-black text-sm shadow-xs group-hover:from-[#E00624] group-hover:to-[#B0041B] transition-all duration-300">
            {initials(item.name)}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-outfit font-extrabold text-lg text-[#0F172A] group-hover:text-[#002D62] transition-colors line-clamp-1 leading-snug">
              <Link href={`/directory/${item.slug}`}>{item.name}</Link>
            </h3>
            {item.tamilName && (
              <p className="tamil text-xs font-bold text-[#E00624] mt-0.5 line-clamp-1">
                {item.tamilName}
              </p>
            )}
          </div>
        </div>

        {/* Verification & Quick Info */}
        <div className="flex items-center gap-2 text-xs flex-wrap pt-1">
          {item.verified ? (
            <span className="inline-flex items-center gap-1 text-emerald-700 font-bold text-[11px] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              <span>✓</span> Verified Canada Listing
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-amber-700 font-medium text-[11px] bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
              ● Community Post
            </span>
          )}
          {item.featured && (
            <span className="inline-flex items-center gap-1 text-[#E00624] font-extrabold text-[11px] bg-red-50 px-2 py-0.5 rounded-md border border-red-200">
              ★ Featured
            </span>
          )}
          {item.rating && (
            <span className="inline-flex items-center gap-1 text-amber-800 font-extrabold text-[11px] bg-amber-100 px-2 py-0.5 rounded-md">
              <span>★</span> {item.rating.toFixed(1)} ({item.reviewCount || 10})
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Address */}
        <div className="text-xs text-[#475569] flex items-center gap-1.5 truncate">
          <span>📍</span>
          <span className="truncate">{item.address}</span>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {item.phone && (
            <a
              href={telLink(item.phone)}
              className="btn-primary rounded-xl px-3 py-1.5 text-xs font-bold flex items-center gap-1"
              title="Call Business"
            >
              <span>📞</span>
              <span>Call</span>
            </a>
          )}
          {wa && (
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold transition flex items-center gap-1"
              title="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp text-sm" />
            </a>
          )}
          <a
            href={mapsLink(item.address, item.name)}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-xl border border-[#CBD5E1] bg-white text-[#002D62] hover:bg-[#F0F7FF] text-xs font-bold transition flex items-center gap-1"
            title="Google Maps"
          >
            <span>🗺️</span>
          </a>
        </div>

        <Link
          href={`/directory/${item.slug}`}
          className="btn-navy rounded-xl px-3.5 py-1.5 text-xs font-bold shadow-xs flex items-center gap-1"
        >
          <span>View</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
