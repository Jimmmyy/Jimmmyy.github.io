"use client";

import { useEffect, useState } from "react";

/**
 * Theme toggle button.
 * Switches between light and dark mode.
 * Stores the user's preference in localStorage.
 */

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
      document.documentElement.classList.toggle("dark", saved === "dark");
      setTheme(saved);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-800 text-xl shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
