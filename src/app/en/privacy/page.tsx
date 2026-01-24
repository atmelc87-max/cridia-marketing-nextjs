import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import PrivacyClientEn from "./PrivacyClient";

export const metadata: Metadata = generateMetadata(
  {
    title: "Privacy Policy | Cridia Hire",
    description:
      "Learn how Cridia Hire collects, uses, stores, and protects your data when you use our AI hiring platform.",
    canonical: "/en/privacy",
    alternates: {
      en: "/en/privacy",
      ar: "/ar/privacy",
    },
  },
  "en"
);

export default function Page() {
  return <PrivacyClientEn />;
}

