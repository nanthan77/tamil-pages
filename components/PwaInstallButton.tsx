"use client";

export default function PwaInstallButton() {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("trigger-pwa-install"));
        }
      }}
      className="hidden xl:inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-black bg-white/10 text-amber-300 hover:text-white hover:bg-white/20 border border-white/20 transition cursor-pointer"
      title="Install TamilPages App on your Device"
      aria-label="Install TamilPages App"
    >
      <span>📲</span> Install App
    </button>
  );
}
