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
  title: "Jimmy Nguyen | Portfolio 🌠",
  description: "Data Engineer Portfolio",
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
