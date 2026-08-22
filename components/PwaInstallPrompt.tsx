"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export default function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIos, setIsIos] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showIosModal, setShowIosModal] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if already running in standalone PWA mode
    const isStandaloneMode =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    setIsStandalone(isStandaloneMode);
    if (isStandaloneMode) return;

    // Check if device is iOS (iPhone/iPad/iPod in Safari)
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    const isSafari = /safari/.test(userAgent) && !/crios|fxios|chrome/.test(userAgent);
    setIsIos(isIosDevice && isSafari);

    // Check localStorage if banner was dismissed recently
    const dismissedAt = localStorage.getItem("pwa_dismissed_at");
    const dismissedDays = dismissedAt
      ? (Date.now() - parseInt(dismissedAt, 10)) / (1000 * 60 * 60 * 24)
      : 999;

    // Capture standard Chrome/Android/Edge beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      if (dismissedDays > 3) {
        // Show after 3 seconds on page
        setTimeout(() => setShowBanner(true), 3000);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Allow external triggers (e.g. Header button clicking "Install App")
    const handleTriggerInstall = () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choice) => {
          if (choice.outcome === "accepted") {
            setShowBanner(false);
            setDeferredPrompt(null);
          }
        });
      } else if (isIosDevice) {
        setShowIosModal(true);
      } else {
        setShowBanner(true);
      }
    };
    window.addEventListener("trigger-pwa-install", handleTriggerInstall);

    // If iOS and not dismissed, show gentle prompt
    if (isIosDevice && isSafari && dismissedDays > 5) {
      setTimeout(() => setShowBanner(true), 4500);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("trigger-pwa-install", handleTriggerInstall);
    };
  }, [deferredPrompt]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") {
        setShowBanner(false);
        setDeferredPrompt(null);
      }
    } else if (isIos) {
      setShowIosModal(true);
    } else {
      // Fallback instructions
      alert("To install TamilPages: Tap your browser menu (⋮ or Share) and select 'Add to Home screen' or 'Install app'.");
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem("pwa_dismissed_at", Date.now().toString());
  };

  if (isStandalone) return null;

  return (
    <>
      {/* 1. Floating Bottom-Bar Install Banner */}
      {showBanner && (
        <aside
          aria-label="Install Tamil Canadian Pages Web App"
          className="fixed bottom-3 sm:bottom-6 left-3 right-3 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-[#002D62] text-white rounded-3xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-white/20 backdrop-blur-xl animate-fadeIn"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1 shrink-0 shadow-md border border-white/30 flex items-center justify-center">
                <img
                  src="/icons/icon-192.png"
                  alt="TamilPages App"
                  width="40"
                  height="40"
                  className="rounded-xl object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-outfit font-black text-sm text-white">Install TamilPages</span>
                  <span className="bg-[#E00624] text-[9px] font-black uppercase px-1.5 py-0.5 rounded text-white tracking-wider">
                    App
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                  6,380+ Canadian listings, Kovils &amp; showtimes
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Close install prompt"
              className="text-slate-400 hover:text-white p-1 text-sm font-bold transition rounded-full hover:bg-white/10"
            >
              ✕
            </button>
          </div>

          <div className="mt-3.5 flex items-center gap-2">
            <button
              type="button"
              onClick={handleInstallClick}
              className="flex-1 bg-[#E00624] hover:bg-[#B0041B] text-white rounded-xl py-2.5 px-4 text-xs font-black shadow-md transition flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>📲</span>
              <span>Add to Home Screen (Free)</span>
            </button>
            <button
              type="button"
              onClick={handleDismiss}
              className="px-3 py-2.5 text-xs font-bold text-slate-300 hover:text-white transition"
            >
              Later
            </button>
          </div>
        </aside>
      )}

      {/* 2. iOS Safari Step-by-Step Installation Modal */}
      {showIosModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-end sm:items-center justify-center p-4 animate-fadeIn">
          <div
            className="fixed inset-0"
            onClick={() => setShowIosModal(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-sm bg-[#002D62] text-white rounded-3xl p-6 shadow-2xl border border-white/20 z-10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src="/icons/icon-192.png"
                  alt="TamilPages App"
                  width="36"
                  height="36"
                  className="rounded-xl"
                />
                <div>
                  <h3 className="font-outfit font-black text-base">Install on iPhone / iPad</h3>
                  <p className="tamil text-xs text-amber-300">முகப்புத் திரையில் சேர்க்கவும்</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowIosModal(false)}
                className="text-slate-400 hover:text-white text-base font-bold p-1"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="bg-white/10 rounded-2xl p-4 space-y-3 text-xs leading-relaxed border border-white/15">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E00624] text-white font-black flex items-center justify-center shrink-0 text-xs">
                  1
                </div>
                <div>
                  <p className="font-bold text-white">Tap the Share button</p>
                  <p className="text-slate-300 text-[11px] mt-0.5">
                    Look for the <span className="inline-block px-1.5 py-0.5 bg-white/20 rounded font-bold">⎋ Share</span> icon at the bottom of Safari.
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/10" />

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E00624] text-white font-black flex items-center justify-center shrink-0 text-xs">
                  2
                </div>
                <div>
                  <p className="font-bold text-white">Select &quot;Add to Home Screen&quot;</p>
                  <p className="text-slate-300 text-[11px] mt-0.5">
                    Scroll down and tap <span className="inline-block px-1.5 py-0.5 bg-white/20 rounded font-bold">⊞ Add to Home Screen</span>.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowIosModal(false)}
              className="w-full btn-primary rounded-xl py-3 text-xs font-black shadow-md cursor-pointer"
            >
              Got It!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
