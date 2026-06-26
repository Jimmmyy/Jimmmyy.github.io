"use client";

/**
 * Root providers — wraps the app with ThemeProvider (next-themes) + LanguageProvider.
 */

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
