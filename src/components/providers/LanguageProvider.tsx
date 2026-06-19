"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ui, type Dictionary, type Lang, type Localized } from "@/lib/content";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dictionary;
  /** Pick the active-language string from a {en, id} object. */
  tx: (value: Localized | string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "melco-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Hydrate preference after mount (avoids SSR/client mismatch).
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "en" || stored === "id") {
      setLangState(stored);
    } else if (navigator.language?.toLowerCase().startsWith("id")) {
      setLangState("id");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  const toggle = () => setLang(lang === "en" ? "id" : "en");

  const tx = (value: Localized | string) =>
    typeof value === "string" ? value : value[lang];

  const t = ui[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t, tx }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
