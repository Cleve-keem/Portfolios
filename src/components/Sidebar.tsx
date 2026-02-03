import { CircleChevronLeft } from "lucide-react";
import Logo from "./Logo";
import { Dispatch, SetStateAction } from "react";

type SidebarProps = {
  open: boolean;
  closeFn: Dispatch<SetStateAction<boolean>>;
};

export default function Sidebar({ open, closeFn }: SidebarProps) {
  return (
    <aside
      className={`fixed top-0 left-0 bg-background w-full p-4 duration-300 ${open ? "translate-0 h-full" : "-translate-full h-0"}`}
    >
      <div className="sidebar-header flex">
        <Logo />
        <CircleChevronLeft onClick={() => closeFn(false)} />
      </div>
    </aside>
  );
}
