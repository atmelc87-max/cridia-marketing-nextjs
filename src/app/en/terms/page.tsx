"use client";

import TermsOfService from "@/app/terms/page";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TermsEn() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    if (language !== "en") setLanguage("en");
  }, [language, setLanguage]);

  return <TermsOfService />;
}

