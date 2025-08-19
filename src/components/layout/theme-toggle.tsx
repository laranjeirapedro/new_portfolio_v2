"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle theme"
      className="p-2 rounded-full outline-none transition bg-sky-100 dark:bg-neutral-800 hover:bg-sky-200 dark:hover:bg-sky-700"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <Sun size={20} className="text-yellow-400 transition-transform duration-200 rotate-0" />
      ) : (
        <Moon size={20} className="text-sky-900 transition-transform duration-200 rotate-12" />
      )}
    </button>
  );
}