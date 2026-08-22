"use client";

import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";

interface AdminSecurityGuardProps {
  children: ReactNode;
}

const ADMIN_CREDENTIALS = [
  { user: "admin", pass: "tamiladmin2026" },
  { user: "admin@tamilcanadianpages.ca", pass: "tamiladmin2026" },
  { user: "nanthan", pass: "tamiladmin2026" },
  { user: "admin", pass: "tamilpages2026" },
];

const AUTH_KEY = "tp_admin_auth_token_v1";

export default function AdminSecurityGuard({ children }: AdminSecurityGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const localToken = localStorage.getItem(AUTH_KEY);
      const sessionToken = sessionStorage.getItem(AUTH_KEY);
      if (localToken === "valid_admin_session" || sessionToken === "valid_admin_session") {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const u = username.trim().toLowerCase();
    const p = password.trim();

    const isValid = ADMIN_CREDENTIALS.some(
      (cred) => (cred.user.toLowerCase() === u || u === "admin") && cred.pass === p
    );

    if (isValid) {
      try {
        if (rememberMe) {
          localStorage.setItem(AUTH_KEY, "valid_admin_session");
        }
        sessionStorage.setItem(AUTH_KEY, "valid_admin_session");
      } catch {}
      setIsAuthenticated(true);
    } else {
      setError("Invalid admin username or master security password. Please try again.");
    }
    setLoading(false);
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem(AUTH_KEY);
      sessionStorage.removeItem(AUTH_KEY);
    } catch {}
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
        <div className="text-white text-xs font-bold flex items-center gap-2">
          <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>Verifying Admin Security Clearance...</span>
        </div>
      </div>
    );
  }

  // Locked Login Screen
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#001F45] via-[#002D62] to-[#0F172A] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="h-2 w-full bg-gradient-to-r from-[#E00624] via-[#002D62] to-[#25D366] absolute top-0 left-0 right-0" />

          {/* Logo & Lock Badge */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-red-50 text-[#E00624] rounded-2xl flex items-center justify-center text-2xl mx-auto border border-red-100 shadow-inner">
              🔒
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-extrabold uppercase tracking-wider">
              Protected Admin Portal
            </div>
            <h1 className="font-outfit font-black text-2xl text-[#0F172A]">
              TamilCanadianPages Admin Login
            </h1>
            <p className="text-xs text-slate-500 leading-relaxed">
              Restricted area. Please sign in with your administrative credentials to manage directory listings and CRM leads.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
                Admin Username / Email
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. admin or admin@tamilcanadianpages.ca"
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-xs font-bold text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-[#002D62] transition"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#002D62]">
                Master Security Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-xs font-bold text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-[#002D62] transition"
              />
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-slate-600 font-semibold text-[11px]">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded text-[#002D62] focus:ring-0"
                />
                <span>Remember this device</span>
              </label>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-bold text-[#E00624]">
                ⚠️ {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-2xl bg-[#002D62] hover:bg-[#001F45] text-white font-black text-xs uppercase tracking-wider shadow-md transition cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{loading ? "Authenticating..." : "🔓 Unlock Admin & CRM"}</span>
            </button>
          </form>

          {/* Footer Back Link */}
          <div className="border-t border-slate-100 pt-4 text-center">
            <Link
              href="/"
              className="text-xs font-bold text-slate-400 hover:text-[#002D62] transition"
            >
              ← Return to TamilCanadianPages Public Directory
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Authenticated State with Top Security Bar
  return (
    <div className="relative">
      {/* Admin Security Bar */}
      <div className="bg-[#0F172A] text-white/90 text-xs py-1.5 px-4 sm:px-8 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-[11px] text-emerald-400 uppercase tracking-wider">
            Admin Session Active
          </span>
          <span className="text-white/40 hidden sm:inline">|</span>
          <span className="text-white/70 text-[11px] hidden sm:inline">
            Logged in as <strong>Super Admin</strong>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="text-[11px] font-bold text-white/80 hover:text-white underline"
          >
            Admin Hub
          </Link>
          <Link
            href="/admin/outreach"
            className="text-[11px] font-bold text-emerald-400 hover:text-emerald-300 underline"
          >
            Outreach CRM
          </Link>
          <button
            onClick={handleLogout}
            className="px-2.5 py-0.5 rounded-md bg-red-500/20 text-red-300 hover:bg-red-500/30 font-bold text-[11px] border border-red-500/30 transition cursor-pointer"
          >
            🔒 Lock / Logout
          </button>
        </div>
      </div>

      {children}
    </div>
  );
}
