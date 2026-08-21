"use client";

import { useEffect, useState } from "react";
import QuickSearchModal from "./QuickSearchModal";

export default function HeaderSearchTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-quick-search", handleOpen);
    return () => window.removeEventListener("open-quick-search", handleOpen);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white/90 hover:text-white border border-white/15 transition text-xs font-semibold"
        title="Quick Search Canada Directory (Cmd+K)"
      >
        <span>🔍</span>
        <span className="hidden xl:inline">Quick Search…</span>
        <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-extrabold bg-white/15 rounded-md border border-white/20 text-white/90">
          ⌘K
        </kbd>
      </button>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="md:hidden flex items-center justify-center w-8 h-8 rounded-xl bg-white/10 text-white text-sm"
        title="Search"
      >
        🔍
      </button>

      <QuickSearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
