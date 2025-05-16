"use client";

import i18n from "@/i18n";
import {useEffect} from "react";
import {useSearchParams} from "next/navigation";

export const getCurrentLanguage = (language: string): string => {
  let lang = "en";
  if (["th-TH", "th"].includes(language)) {
    lang = "th";
  }
  return lang;
};

const useLanguage = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  useEffect(() => {
    if (lang && typeof lang === "string") {
      const currentLang = getCurrentLanguage(lang);
      i18n.changeLanguage(currentLang);
      localStorage.setItem("i18nextLng", currentLang);
    }
  }, [lang]);
};

export default useLanguage;
