import { LucideIcon } from "lucide-react";
import Link from "next/link";

type SocialListType = {
  social: {
    href: string;
    label: string;
    icon: LucideIcon;
  };
};

export default function SocialLink({ social }: SocialListType) {
  const Icon = social.icon;
  return (
    <Link
      href={social.href}
      className="size-10 p-2.5 flex items-center justify-center rounded-4xl border border-border-muted text-content-muted hover:border-brand hover:text-brand transition-all duration-300"
      aria-label={social.label}
    >
      <Icon />
    </Link>
  );
}
