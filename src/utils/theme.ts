import { ThemeType } from "@/types/theme.type";

export const saveThemeMode = (mode: ThemeType) => {
  localStorage.setItem("theme", mode); // save theme;
};

export const deleteThemeMode = () => localStorage.removeItem("theme");

export const applyTheme = (mode: ThemeType) => {
  if (typeof window === "undefined") return;

  const root = document.documentElement;

  if (mode === "dark") {
    root.classList.add("dark");
  } else if (mode === "light") {
    root.classList.remove("dark");
  } else {
    // system
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }
};
