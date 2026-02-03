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
      className={`fixed top-0 left-0 bg-background w-full duration-500 ease-out ${open ? "translate-0 h-full" : "-translate-full h-0"}`}
    >
      <div className="sidebar-header flex border-b border-b-surface-muted p-4 ">
        <Logo />
        <CircleChevronLeft onClick={() => closeFn(false)} />
      </div>
      <nav className="p-4">
        <ul className="space-y-5">
          {navItems.map((item, id) => {
            const Icon = item?.icon;
            return (
              <li className="flex items-center gap-2 text-sm" key={id}>
                {Icon && <Icon className="size-5" />}
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
