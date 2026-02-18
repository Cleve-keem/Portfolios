import { ThemeType } from "@/types/theme.type";

export const saveThemeMode = (mode: ThemeType) => {
  localStorage.setItem("theme", mode); // save theme;
};

export const deleteThemeMode = () => localStorage.removeItem("theme");
