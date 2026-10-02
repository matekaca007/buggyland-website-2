"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { dictionaries, type Locale, type Dictionary } from "./dictionaries";

// ─── Context ──────────────────────────────────────────────────────────────────
type LanguageContextValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    // Update <html lang="..."> attribute so screen readers & SEO crawlers see it
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{ locale, t: dictionaries[locale], setLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useTranslations() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslations must be used inside <LanguageProvider>");
  }
  return ctx;
}
