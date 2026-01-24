"use client";

import TermsOfService from "@/app/terms/page";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TermsAr() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    if (language !== "ar") setLanguage("ar");
  }, [language, setLanguage]);

  return <TermsOfService />;
}

