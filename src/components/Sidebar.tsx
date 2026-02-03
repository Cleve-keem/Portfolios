import { CircleChevronLeft } from "lucide-react";
import Logo from "./Logo";
import { Dispatch, SetStateAction } from "react";
import { navItems } from "@/constants/navItems";

type SidebarProps = {
  open: boolean;
  closeFn: Dispatch<SetStateAction<boolean>>;
};

export default function Sidebar({ open, closeFn }: SidebarProps) {
  return (
    <aside
      // className={`fixed inset-0 z-100 bg-background w-full h-dvh duration-700 transition-all ${open ? "translate-x-0 translate-y-0 opacity-100 [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]" : "-translate-x-50 -translate-y-50 opacity-0 [clip-path:polygon(0_0,0_0,0_0)]"}`}
      className={`fixed inset-0 bg-background w-full translate-all duration-500 ease-out ${open ? "translate-x-0 translate-y-0 h-full" : "-translate-x-full -translate-y-full h-0"}`}
    >
      <div className="sidebar-header flex border-b border-b-surface-muted p-6">
        <Logo />
        <CircleChevronLeft onClick={() => closeFn(false)} />
      </div>
      <nav className="py-6 px-6">
        <ul className="space-y-7">
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
        <div></div>
      </nav>
    </aside>
  );
}
