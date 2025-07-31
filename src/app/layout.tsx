import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";

/**
 * Main homepage.
 * Renders the Hero, Projects, History, About, and Footer sections.
 */

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  generator: "Next.js",
  title: "Jimmy Nguyen | Portfolio 🌠",
  creator: "Jimmy Nguyen",
  description: "Data Engineer Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased bg-gray-50 dark:bg-gray-950`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
