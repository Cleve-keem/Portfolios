import { CircleChevronLeft } from "lucide-react";
import Logo from "./Logo";
import { Dispatch, SetStateAction } from "react";
import { navItems } from "@/constants/navItems";
import Image from "next/image";

type SidebarProps = {
  open: boolean;
  closeFn: Dispatch<SetStateAction<boolean>>;
};

export default function Sidebar({ open, closeFn }: SidebarProps) {
  return (
    <aside
      className={`fixed flex flex-col inset-0 bg-background w-full h-dvh translate-all duration-500 ${open ? "translate-x-0 translate-y-0" : "-translate-x-full -translate-y-full"}`}
    >
      <div className="sidebar-header flex border-b border-b-surface-muted p-6">
        <Logo />
        <CircleChevronLeft onClick={() => closeFn(false)} />
      </div>
      <nav className="p-6 flex-1">
        <ul className="space-y-7 flex-1">
          {navItems.map((item, id) => {
            const Icon = item?.icon;
            return (
              <li className="flex items-center gap-4 text-xl" key={id}>
                {Icon && <Icon className="text-inherit" />}
                <span className="text-inherit">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Avatar and theme toggle */}
      <div className="p-4">
        {/* PROFILE */}
        <div className="flex items-center gap-4 bg-surface-tint p-2 rounded-xl">
          {/* Avatar */}
          <div className="relative size-12">
            <div className="relative size-full rounded-full">
              <Image
                src="/avatar.jpeg"
                alt="My avatar with badge"
                fill
                className="object-cover rounded-full"
              />
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
}
