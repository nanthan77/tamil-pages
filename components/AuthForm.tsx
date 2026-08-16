"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setPending(true);
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const res = await fetch(`/api/auth/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    setPending(false);
    if (!res.ok) {
      setError(data.error || "Something went wrong");
      return;
    }
    router.push(mode === "register" ? "/add-business" : "/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {mode === "register" && (
        <>
          <Field name="name" label="Full Name / Business Owner Name" required placeholder="e.g. Shanmugam" />
          <Field name="phone" label="Contact Phone Number" required placeholder="e.g. +1 416-555-0199" />
        </>
      )}
      <Field name="email" label="Email Address" type="email" required placeholder="name@domain.ca" />
      <Field
        name="password"
        label={mode === "register" ? "Password (min 8 characters)" : "Password"}
        type="password"
        required
        minLength={mode === "register" ? 8 : 1}
        placeholder="••••••••"
      />
      {error && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-[#E00624] font-bold">
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={pending}
        className="btn-primary w-full rounded-2xl py-3.5 text-sm font-black shadow-md cursor-pointer"
      >
        {pending
          ? "Please wait…"
          : mode === "register"
            ? "🍁 Register Free Business Account"
            : "Sign In to Dashboard →"}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  minLength,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  minLength?: number;
  placeholder?: string;
}) {
  return (
    <label className="block space-y-1">
      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        minLength={minLength}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] outline-none transition focus:bg-white"
      />
    </label>
  );
}
