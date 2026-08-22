"use client";

import { useState } from "react";
import { WhatsAppIcon, FacebookIcon, TwitterIcon, LinkedInIcon } from "@/components/Icons";

interface BusinessShareBarProps {
  url: string;
  businessName: string;
  city: string;
}

export default function BusinessShareBar({
  url,
  businessName,
  city,
}: BusinessShareBarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareText = `Check out ${businessName} in ${city}, Canada on TamilCanadianPages.ca: ${url}`;
  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(url);

  const waShareUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
  const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twShareUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;
  const lnShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
      <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
        <span className="text-base">📢</span>
        <span>Share {businessName} Profile:</span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {/* WhatsApp */}
        <a
          href={waShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5D] transition flex items-center gap-1.5 shadow-xs"
          title="Share via WhatsApp"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Facebook */}
        <a
          href={fbShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-xl bg-[#1877F2] text-white text-xs font-bold hover:bg-[#0C63D4] transition flex items-center gap-1.5 shadow-xs"
          title="Share on Facebook"
        >
          <FacebookIcon className="w-3.5 h-3.5" />
          <span>Facebook</span>
        </a>

        {/* Twitter / X */}
        <a
          href={twShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition flex items-center gap-1.5 shadow-xs"
          title="Share on X"
        >
          <TwitterIcon className="w-3.5 h-3.5" />
          <span>X / Tweet</span>
        </a>

        {/* LinkedIn */}
        <a
          href={lnShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-xl bg-[#0A66C2] text-white text-xs font-bold hover:bg-[#084E96] transition flex items-center gap-1.5 shadow-xs"
          title="Share on LinkedIn"
        >
          <LinkedInIcon className="w-3.5 h-3.5" />
          <span>LinkedIn</span>
        </a>

        {/* Copy Link Button */}
        <button
          type="button"
          onClick={handleCopy}
          className="px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 transition flex items-center gap-1.5 shadow-xs cursor-pointer"
          title="Copy Link"
        >
          <span>{copied ? "Copied! ✓" : "📋 Copy Link"}</span>
        </button>
      </div>
    </div>
  );
}
