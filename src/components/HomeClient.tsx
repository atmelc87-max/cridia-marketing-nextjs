"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function HomeClient({ children }: { children: React.ReactNode }) {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    const pathname = window.location.pathname;
    if (!pathname.startsWith('/ar')) {
      setLanguage("en");
    }
  }, [setLanguage]);

  return <>{children}</>;
}
