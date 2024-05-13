"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  console.log("theme: ", theme);
  console.log("theme: ", theme, theme === "dark");

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Sun
        size={24}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-yellow-400"
      />
      <Moon
        size={24}
        className="dark:text-grey-200/50  rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 "
      />
    </button>
  );
}
