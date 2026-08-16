import AddBusinessForm from "@/components/AddBusinessForm";

export default function AddBusinessPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-6 sm:p-10 space-y-6 shadow-card relative overflow-hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#E00624] via-white to-[#002D62] absolute top-0 left-0 right-0" />

        <div className="space-y-1 pt-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#E00624] border border-red-200 text-[11px] font-black uppercase tracking-wider">
            <span>🍁</span> 100% Free · Goes Live Immediately
          </div>
          <h1 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#0F172A] mt-2">
            Post Your Canadian Business
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Tamil, Sri Lankan, and South Asian businesses anywhere in Canada can list for free. Families and customers can search and call you directly with zero commission.
          </p>
        </div>

        <AddBusinessForm />
      </div>
    </main>
  );
}
