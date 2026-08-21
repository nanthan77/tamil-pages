"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchRedirectPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto p-12 text-center text-sm font-bold text-[#002D62]">Searching Canada Tamil Directory…</div>}>
      <SearchRedirectContent />
    </Suspense>
  );
}

function SearchRedirectContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    router.replace(`/directory?${params.toString()}`);
  }, [router, searchParams]);

  return (
    <div className="max-w-7xl mx-auto p-12 text-center text-sm font-bold text-[#002D62]">
      Redirecting to directory results…
    </div>
  );
}
