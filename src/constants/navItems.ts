import { House, FolderOpenDot, User, Mail, LucideIcon } from "lucide-react";

export type NavItem = {
  path: string;
  label: string;
  icon: LucideIcon | null;
};

export const navItems: NavItem[] = [
  { path: "/", label: "Home", icon: House },
  { path: "/project", label: "Project", icon: FolderOpenDot },
  { path: "/about", label: "About", icon: User },
  { path: "/contact", label: "Contact", icon: Mail },
];
