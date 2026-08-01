import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  IBM_Plex_Mono,
  Schibsted_Grotesk,
} from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import { Providers } from "@/providers/Providers";

/**
 * Root layout — wraps every page with the language provider.
 */

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  generator: "Next.js",
  title: "Jimmy Nguyen | Portfolio 🌠",
  creator: "Jimmy Nguyen",
  description:
    "Data Engineer — plateformes data de bout en bout sur AWS et GCP.",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    languages: {
      "en-US": "/en-US",
      "fr-FR": "/fr-FR",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${bricolage.variable} ${schibsted.variable} ${plexMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
