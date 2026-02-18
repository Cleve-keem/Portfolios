import { GithubIcon, LinkedinIcon, LucideIcon, Twitter } from "lucide-react";

type SocialType = { icon: LucideIcon; href: string; label: string };

export const socials: SocialType[] = [
  {
    icon: GithubIcon,
    href: "https:github.com/Cleve-keem",
    label: "Github",
  },
  { icon: Twitter, href: "#", label: "Twitter" },
  {
    icon: LinkedinIcon,
    href: "#",
    label: "Facebook",
  },
];
