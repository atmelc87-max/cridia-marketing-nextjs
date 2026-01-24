"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Check localStorage first (user's previous choice)
    const savedLang = localStorage.getItem("language");

    if (savedLang === "en" || savedLang === "ar") {
      router.replace(`/${savedLang}`);
      return;
    }

    // Detect browser language
    const browserLang = navigator.language || navigator.languages?.[0] || "en";

    // Check if browser language starts with 'ar' (Arabic)
    const isArabic = browserLang.toLowerCase().startsWith("ar");

    // Default to English unless explicitly Arabic
    const targetLang = isArabic ? "ar" : "en";

    // Save choice and redirect
    localStorage.setItem("language", targetLang);
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
