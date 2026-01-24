"use client";

import CookiePolicy from "@/app/cookies/page";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CookiesEn() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    if (language !== "en") setLanguage("en");
  }, [language, setLanguage]);

  return <CookiePolicy />;
}

