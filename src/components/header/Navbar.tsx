import { CircleChevronLeft } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import Logo from "../Logo";
import { navItems } from "@/constants/navItems";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

type SidebarProps = {
  open?: boolean;
  closeFn?: Dispatch<SetStateAction<boolean>>;
  type?: string;
};

export default function Navbar({
  open,
  closeFn,
  type = "mobile",
  activeSection,
}: SidebarProps & { activeSection?: string }) {
  if (type == "mobile")
    return (
      <aside
        className={`fixed flex flex-col inset-0 bg-background w-full h-dvh translate-all duration-500 ${open ? "translate-x-0 translate-y-0" : "-translate-x-full -translate-y-full"} md:hidden`}
      >
        <div className="sidebar-header flex border-b border-b-surface-muted p-6">
          <Logo />
          <CircleChevronLeft onClick={() => closeFn && closeFn(false)} />
        </div>
        <nav className="p-6 flex-1">
          <ul className="space-y-7 flex-1">
            {navItems.map((item, id) => {
              const isActive = activeSection === item.path.replace("#", "");
              const Icon = item?.icon;
              return (
                <li
                  className={`flex items-center gap-4 text-xl ${isActive ? "text-brand" : "text-content-muted"}`}
                  key={id}
                >
                  {Icon && <Icon className="text-inherit" />}
                  <Link href={item.path} className={`text-inherit`}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <ThemeToggle />
        {/* Avatar and theme toggle */}
        <div className="p-4">
          {/* PROFILE */}
          <div className="flex items-center gap-4 bg-surface-tint p-2 rounded-xl">
            {/* Avatar */}
            <div className="relative size-12">
              <div className="relative size-full rounded-full">
                <Image
                  src="/avatar2.png"
                  alt="My avatar with badge"
                  fill
                  loading="lazy"
                  className="object-cover rounded-full"
                  sizes="100px"
                />
                {/* ping indicator */}
                <span className="absolute bottom-0 right-0 flex size-3.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex size-3.5 rounded-full bg-green-500"></span>
                </span>
              </div>
            </div>
            {/* description */}
            <div>
              <h5 className="text-[16px] font-semibold">Hackhim Bello</h5>
              <small className="">Software Developer</small>
            </div>
          </div>
        </div>
      </aside>
    );

  if (type == "desktop") {
    return (
      <nav className="hidden md:flex md:items-center">
        <div className="space-x-8">
          {/* {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className={`transform hover:text-brand/70 hover:scale-3d transition-all duration-300 px-2 ${item.label === "Contact" ? "bg-brand rounded-4xl text-white px-3 py-1" : ""}`}
            >
              <motion.span layoutId="activeTagBadge" className="">
                {item.label}
              </motion.span>
            </Link>
          ))} */}
          {navItems.map((item, i) => {
            const isActive = activeSection === item.path.replace("#", "");

            return (
              <Link
                key={i}
                href={item.path}
                className={`relative px-3 py-1 transition-colors duration-300 ${
                  isActive ? "text-brand" : "hover:text-brand/70"
                } ${item.label === "Contact" ? "bg-brand rounded-full text-white px-4" : ""}`}
              >
                {item.label}

                {/* Animated underline for active state */}
                {isActive && item.label !== "Contact" && (
                  <motion.div
                    layoutId="activeSectionIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
        <ThemeToggle />
      </nav>
    );
  }
}
