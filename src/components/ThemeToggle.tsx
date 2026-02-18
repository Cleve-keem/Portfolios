"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    const loadThemeMode = () => {
      const savedTheme = localStorage.getItem("theme") as
        | "light"
        | "dark"
        | null; // retrieve theme;
      setTheme(savedTheme || "system");
    };
    loadThemeMode();
  }, []);

  const toggleThemeMode = (mode: ThemeType) => {
    setTheme(mode);

    if (mode === "system") {
      // remove saved theme
      deleteThemeMode();
      // check media preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        // set dark class on html, else remove dark
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // if it's not system
      // save current theme
      saveThemeMode(mode);
      // if dark
      if (mode === "dark") {
        // set dark class on html else remove dark
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

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
                <Icon className={`${theme === label ? "text-white" : ""}`} />
                {navItems.label}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
      {/* {theme} */}
    </div>
  );
};

export default ThemeToggle;

{
  /* <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
  <DropdownMenuRadioItem value="light">
    <Sun /> Light
  </DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="dark">
    <Moon /> Dark
  </DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="system">
    <MonitorCog /> System
  </DropdownMenuRadioItem>
</DropdownMenuRadioGroup>; */
}
