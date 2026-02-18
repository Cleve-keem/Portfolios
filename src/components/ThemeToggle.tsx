"use client";

import { useCallback, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { MonitorCog, Moon, Settings, Sun } from "lucide-react";
import { ThemeType } from "@/types/theme.type";
import { deleteThemeMode, saveThemeMode } from "@/utils/theme";

const menuItems: Record<string, any>[] = [
  { label: "Light", icon: Sun },
  { label: "Dark", icon: Moon },
  { label: "System", icon: MonitorCog },
];

const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeType>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as ThemeType | null;

    const applyTheme = (mode: ThemeType) => {
      if (mode === "dark") {
        document.documentElement.classList.add("dark");
      } else if (mode === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        // system
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    if (saved && saved !== "system") {
      setTheme(saved);
      applyTheme(saved);
    } else {
      setTheme("system");
      applyTheme("system");
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (theme !== "system") return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, [theme]);

  const toggleThemeMode = (mode: ThemeType) => {
    setTheme(mode);

    if (mode === "system") {
      deleteThemeMode();
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      saveThemeMode(mode);
      if (mode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  if (!mounted) {
    return (
      <div className="px-6 py-4">
        <button aria-label="Toggle theme" disabled>
          <Settings className="opacity-50" />
        </button>
      </div>
    );
  }

  return (
    <div className="px-6 py-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button aria-label="Toggle theme">
            <Settings />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ml-4 z-1100 min-w-37.5">
          {menuItems.map((navItems, id) => {
            const Icon = navItems.icon;
            const label = navItems.label.toLowerCase();
            return (
              <DropdownMenuItem
                onClick={() => toggleThemeMode(label)}
                key={id}
                className={`${theme === label ? "bg-brand text-white" : ""}`}
              >
                <Icon
                  className={`mr-2 ${theme === label ? "text-white" : ""}`}
                />
                {navItems.label}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeToggle;
