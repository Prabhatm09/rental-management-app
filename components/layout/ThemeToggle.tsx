"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] =
    useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() =>
        setTheme((current) =>
          current === "dark" ? "light" : "dark"
        )
      }
      className="grid size-11 place-items-center rounded-[16px] border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--ink)] shadow-[var(--app-shadow)] transition hover:border-[var(--accent)]"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </button>
  );
}
