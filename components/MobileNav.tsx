"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon, CloseIcon } from "@/components/Icons";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
        className="w-11 h-11 rounded-xl border border-white/25 bg-white/10 text-white flex items-center justify-center transition hover:bg-white/20 cursor-pointer"
      >
        {open ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-[4.5rem] bg-[#002D62] border-b-2 border-[#E00624] p-5 space-y-3 shadow-2xl z-50 text-sm">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-white/10">
            <Link
              href="/alerts"
              onClick={() => setOpen(false)}
              className="col-span-2 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-amber-300 px-3 py-2 font-black text-[#0B1D3A]"
            >
              <span>🔔</span>
              <span>Get Movie &amp; Weekend Alerts</span>
            </Link>
            <Link
              href="/directory"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-2 px-3 rounded-xl bg-white/10 font-bold text-white text-xs"
            >
              <span>🇨🇦</span>
              <span>Directory</span>
            </Link>
            <Link
              href="/temples"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-2 px-3 rounded-xl bg-white/10 font-bold text-amber-300 text-xs"
            >
              <span>🛕</span>
              <span>Temples</span>
            </Link>
            <Link
              href="/news"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-2 px-3 rounded-xl bg-white/10 font-bold text-white text-xs"
            >
              <span>📰</span>
              <span>News Feed</span>
            </Link>
            <Link
              href="/events"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-2 px-3 rounded-xl bg-white/10 font-bold text-white text-xs"
            >
              <span>🎪</span>
              <span>Events &amp; Thiruvizha</span>
            </Link>
            <Link
              href="/cinema"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-2 px-3 rounded-xl bg-white/10 font-bold text-white text-xs"
            >
              <span>🎬</span>
              <span>Tamil Cinema</span>
            </Link>
            <Link
              href="/tuition"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-2 px-3 rounded-xl bg-white/10 font-bold text-white text-xs"
            >
              <span>🎓</span>
              <span>Culture &amp; Tuition</span>
            </Link>
          </div>

          <div className="py-2 space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/60">
              Popular Canadian Hubs
            </span>
            <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
              <Link
                href="/directory?city=Scarborough"
                onClick={() => setOpen(false)}
                className="py-1 px-2.5 rounded-lg bg-white/10 text-white/90"
              >
                📍 Scarborough
              </Link>
              <Link
                href="/directory?city=Markham"
                onClick={() => setOpen(false)}
                className="py-1 px-2.5 rounded-lg bg-white/10 text-white/90"
              >
                📍 Markham
              </Link>
              <Link
                href="/directory?city=Montreal"
                onClick={() => setOpen(false)}
                className="py-1 px-2.5 rounded-lg bg-white/10 text-white/90"
              >
                📍 Montreal
              </Link>
              <Link
                href="/directory?city=Vancouver"
                onClick={() => setOpen(false)}
                className="py-1 px-2.5 rounded-lg bg-white/10 text-white/90"
              >
                📍 Vancouver
              </Link>
            </div>
          </div>

          <Link
            href="/pricing"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-2 font-bold text-white border-b border-white/10"
          >
            Pricing — listing free, ads paid
          </Link>
          <Link
            href="/advertise"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-2 font-bold text-white border-b border-white/10"
          >
            Advertise
          </Link>
          <Link
            href="/alerts/manage"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 py-2.5 px-4 font-extrabold rounded-xl bg-white/10 text-white shadow"
          >
            <span>✉</span>
            <span>Manage or Unsubscribe</span>
          </Link>
        </div>
      )}
    </div>
  );
}
