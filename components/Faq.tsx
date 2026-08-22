"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "What is tamilcanadianpages.ca?",
    a: "tamilcanadianpages.ca is a community directory for the Tamil diaspora in Canada. It helps people discover community-submitted business and organization profiles and contact them directly by phone, WhatsApp, website, or map link. Please confirm important details with the listed organization before visiting or paying.",
  },
  {
    q: "Can I list my business for free?",
    a: "Yes. A basic listing (name, phone, address, city, category) is free for the first year. Featured rank, Spotlight, and display ads are paid — they are not free.",
  },
  {
    q: "Is advertising free too?",
    a: "No. Only the listing is free. Ads, Featured badges, and Spotlight (top of a city or category) are paid products, like Yellow Pages.",
  },
  {
    q: "Which Canadian cities and provinces are covered?",
    a: "The directory currently includes community-submitted listings from cities in Ontario, Quebec, British Columbia, Alberta, Manitoba, Saskatchewan, and Atlantic Canada. Coverage varies by city and category, so use the filters to see what is actually available.",
  },
  {
    q: "How do customers contact my business?",
    a: "Customers can tap the 'Call' button to phone you directly, tap the 'WhatsApp' button to start a direct message, or click 'Directions' for Google Maps navigation right to your store or office. No commission is taken and no middleman is involved.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {ITEMS.map((item, i) => (
        <button
          key={item.q}
          type="button"
          onClick={() => setOpen(open === i ? -1 : i)}
          className="w-full text-left bg-white border border-[#CBD5E1] hover:border-[#002D62] transition rounded-3xl p-5 shadow-xs"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-outfit font-extrabold text-[#0F172A] text-sm sm:text-base">{item.q}</h3>
            <span className="w-7 h-7 rounded-xl bg-[#F0F7FF] text-[#002D62] flex items-center justify-center font-black text-sm shrink-0 border border-[#CCE3F8]">
              {open === i ? "−" : "+"}
            </span>
          </div>
          {open === i && (
            <p className="text-xs sm:text-sm text-[#64748B] mt-3 leading-relaxed border-t border-[#E2E8F0] pt-3">
              {item.a}
            </p>
          )}
        </button>
      ))}
    </div>
  );
}
