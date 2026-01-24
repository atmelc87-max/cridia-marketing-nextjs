import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import PrivacyClientAr from "./PrivacyClient";

export const metadata: Metadata = generateMetadata(
  {
    title: "سياسة الخصوصية | كريديا هاير",
    description:
      "تعرف على كيفية جمع كريديا هاير لبياناتك واستخدامها وتخزينها وحمايتها عند استخدام منصتنا للتوظيف بالذكاء الاصطناعي.",
    canonical: "/ar/privacy",
    alternates: {
      en: "/en/privacy",
      ar: "/ar/privacy",
    },
  },
  "ar"
);

export default function Page() {
  return <PrivacyClientAr />;
}

