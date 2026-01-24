"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language || navigator.languages?.[0];
    const isArabic = browserLang?.startsWith("ar");

    // Check localStorage for saved preference
    const savedLang = localStorage.getItem("language");

    // Redirect to appropriate language
    const targetLang = savedLang || (isArabic ? "ar" : "en");
    router.replace(`/${targetLang}`);
  }, [router]);

  // Loading state while redirecting
  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-titanium">Loading...</p>
      </div>
    </div>
  );
}
