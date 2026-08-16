"use client";

import { useState } from "react";

export default function NewsSubmissionModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
    }, 2500);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-primary rounded-2xl px-5 py-2.5 text-xs font-black flex items-center gap-2 shadow-xs cursor-pointer"
      >
        <span>✍️</span>
        <span>Submit Community News / Press Release</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] border border-[#CBD5E1] max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#E00624]">
                  Community Submission
                </span>
                <h3 className="font-outfit font-extrabold text-xl text-[#0F172A]">
                  Submit Canadian Tamil News
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
                  News Submitted Successfully!
                </p>
                <p className="text-xs text-emerald-700">
                  Our editorial desk will review and publish your story across the Canadian Tamil news feed shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block space-y-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
                    News Headline / Story Title *
                  </span>
                  <input
                    required
                    placeholder="e.g. Scarborough Youth Wins National Science Award"
                    className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-xs text-[#0F172A] outline-none focus:bg-white"
                  />
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <label className="block space-y-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
                      Category *
                    </span>
                    <select className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-xs text-[#0F172A] outline-none focus:bg-white">
                      <option>Community</option>
                      <option>Immigration &amp; Settlement</option>
                      <option>Culture &amp; Heritage</option>
                      <option>Business &amp; Economy</option>
                      <option>Youth &amp; Education</option>
                      <option>Sports &amp; Health</option>
                    </select>
                  </label>
                  <label className="block space-y-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
                      City / Region *
                    </span>
                    <input
                      required
                      placeholder="e.g. Scarborough, ON"
                      className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-xs text-[#0F172A] outline-none focus:bg-white"
                    />
                  </label>
                </div>

                <label className="block space-y-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
                    Article Summary &amp; Details *
                  </span>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide full details, names, dates, quotes, and links to source documents…"
                    className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-xs text-[#0F172A] outline-none focus:bg-white"
                  />
                </label>

                <label className="block space-y-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
                    Your Name &amp; Contact Email / Phone *
                  </span>
                  <input
                    required
                    placeholder="name@organization.ca / +1 416-555-0199"
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
                    Submit News →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
