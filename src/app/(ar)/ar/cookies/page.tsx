"use client";

import CookiePolicy from "@/app/(en)/cookies/page";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CookiesAr() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    if (language !== "ar") setLanguage("ar");
  }, [language, setLanguage]);

  return <CookiePolicy />;
}

