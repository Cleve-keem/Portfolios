"use client";

import Logo from "../Logo";
import { TextAlignEnd } from "lucide-react";
import Sidebar from "../Sidebar";
import { useState } from "react";

export default function Header() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <header className="sticky top-0 p-6 shadow-md flex">
      <Logo />
      <TextAlignEnd onClick={() => setOpenNav(true)} />
      <Sidebar open={openNav} closeFn={setOpenNav} />
    </header>
  );
}
