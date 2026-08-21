"use client";

import { useState } from "react";

export default function TemplePhotoUpload(props: {
  templeName: string;
  templeSlug?: string;
}) {
  const { templeName } = props;
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [photographer, setPhotographer] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setPhotographer("");
      setDescription("");
    }, 2500);
  }

  return (
    <section className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-6 sm:p-10 space-y-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E00624] flex items-center justify-center text-2xl shadow-xs border border-red-200">
            📸
          </div>
          <div>
            <h2 className="font-outfit font-extrabold text-2xl text-[#0F172A]">
              Original Temple Photos &amp; Festival Gallery
            </h2>
            <p className="text-xs text-[#64748B]">
              Community-submitted pictures of Thiruvizha, Gopuram, and Sanctums
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="btn-primary rounded-2xl px-5 py-2.5 text-xs font-black flex items-center gap-2 shadow-xs cursor-pointer self-start sm:self-auto"
        >
          <span>📸</span>
          <span>Upload Original Photos</span>
        </button>
      </div>

      {/* Visual Photo Cards Preview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
        <div className="bg-gradient-to-br from-[#002D62] to-[#0A4D92] rounded-2xl p-6 text-white flex flex-col justify-end aspect-4/3 relative overflow-hidden shadow-xs">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <span className="text-xs font-black uppercase text-[#F0F7FF]">🛕 Sanctum</span>
            <p className="font-bold text-xs mt-1">Main Gopuram &amp; Vahanam</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#B0041B] to-[#E00624] rounded-2xl p-6 text-white flex flex-col justify-end aspect-4/3 relative overflow-hidden shadow-xs">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <span className="text-xs font-black uppercase text-[#F0F7FF]">🎪 Festival</span>
            <p className="font-bold text-xs mt-1">Annual Ther Chariot Procession</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#0B1D3A] to-[#1E60B5] rounded-2xl p-6 text-white flex flex-col justify-end aspect-4/3 relative overflow-hidden shadow-xs">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <span className="text-xs font-black uppercase text-[#F0F7FF]">🪔 Alankaram</span>
            <p className="font-bold text-xs mt-1">Special Sandhana Kaappu</p>
          </div>
        </div>
        <div
          onClick={() => setOpen(true)}
          className="rounded-2xl border-2 border-dashed border-[#CBD5E1] hover:border-[#002D62] p-6 flex flex-col items-center justify-center text-center aspect-4/3 cursor-pointer bg-[#F8FAFC] hover:bg-[#F0F7FF] transition"
        >
          <span className="text-2xl mb-1">➕</span>
          <span className="font-outfit font-extrabold text-xs text-[#002D62]">Add Your Photo</span>
          <span className="text-[10px] text-[#64748B] mt-0.5">Help update this temple</span>
        </div>
      </div>

      {/* Upload Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] border border-[#CBD5E1] max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#E00624]">
                  Community Photo Submission
                </span>
                <h3 className="font-outfit font-extrabold text-xl text-[#0F172A]">
                  Upload Photos for {templeName}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full bg-[#F1F5F9] text-[#64748B] hover:text-[#0F172A] font-bold flex items-center justify-center text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <span className="text-3xl">✓</span>
                <p className="font-outfit font-extrabold text-base text-emerald-900">
                  Thank You for Submitting!
                </p>
                <p className="text-xs text-emerald-700">
                  Your photo has been uploaded and will be featured in the temple gallery after verification.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block space-y-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
                    Select Photo File (JPG / PNG)
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    required
                    className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-xs file:mr-3 file:py-1 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#002D62] file:text-white"
                  />
                </label>

                <label className="block space-y-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
                    Your Name / Devotee Credit
                  </span>
                  <input
                    type="text"
                    value={photographer}
                    onChange={(e) => setPhotographer(e.target.value)}
                    required
                    placeholder="e.g. S. Kumar / Temple Devotee"
                    className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-xs text-[#0F172A] outline-none focus:bg-white"
                  />
                </label>

                <label className="block space-y-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
                    Photo Description / Occasion
                  </span>
                  <textarea
                    rows={2}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="e.g. 2026 Chariot Festival procession, evening aarthi alankaram…"
                    className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-xs text-[#0F172A] outline-none focus:bg-white"
                  />
                </label>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="w-1/2 rounded-2xl py-3 text-xs font-bold border border-[#CBD5E1] text-[#64748B] hover:bg-[#F8FAFC] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 btn-primary rounded-2xl py-3 text-xs font-black shadow-md cursor-pointer"
                  >
                    Submit Photo →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
