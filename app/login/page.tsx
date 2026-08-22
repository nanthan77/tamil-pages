import Link from "next/link";
import { redirect } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import { getSessionUser } from "@/lib/auth";


export default async function LoginPage() {
  const user = await getSessionUser();
  if (user) redirect("/dashboard");

  return (
    <main className="max-w-md mx-auto px-4 py-14">
      <div className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-8 space-y-5 shadow-card relative overflow-hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62] absolute top-0 left-0 right-0" />
        
        <div className="text-center space-y-1 pt-2">
          <div className="w-12 h-12 rounded-2xl bg-[#F0F7FF] text-[#002D62] flex items-center justify-center text-2xl mx-auto shadow-xs">
            🍁
          </div>
          <h1 className="font-outfit font-extrabold text-2xl text-[#0F172A]">Vendor Sign In</h1>
          <p className="text-xs text-[#64748B]">Manage your free TamilCanadianPages listings across Canada.</p>
        </div>

        <AuthForm mode="login" />

        <div className="border-t border-[#E2E8F0] pt-4 text-center">
          <p className="text-xs text-[#64748B]">
            Don&apos;t have a business account?{" "}
            <Link href="/register" className="text-[#002D62] font-black hover:text-[#E00624] transition">
              Register Free →
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
