import Link from "next/link";
import { redirect } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import { getSessionUser } from "@/lib/auth";


export default async function RegisterPage() {
  const user = await getSessionUser();
  if (user) redirect("/add-business");

  return (
    <main className="max-w-md mx-auto px-4 py-14">
      <div className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-8 space-y-5 shadow-card relative overflow-hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62] absolute top-0 left-0 right-0" />

        <div className="text-center space-y-2 pt-2">
          <img
            src="/logo-dark.png"
            alt="tamilcanadianpages.ca"
            className="h-10 mx-auto object-contain"
          />
          <h1 className="font-outfit font-extrabold text-2xl text-[#0F172A] mt-2">
            List Your Business Free
          </h1>
          <p className="text-xs text-[#64748B]">
            Reach thousands of Tamil and South Asian families across Canadian cities.
          </p>
        </div>

        <AuthForm mode="register" />

        <div className="border-t border-[#E2E8F0] pt-4 text-center">
          <p className="text-xs text-[#64748B]">
            Already have a vendor account?{" "}
            <Link href="/login" className="text-[#002D62] font-black hover:text-[#E00624] transition">
              Sign In →
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
