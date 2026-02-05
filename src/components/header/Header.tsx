"use client";

import Logo from "../Logo";
import { TextAlignEnd } from "lucide-react";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Header() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <header className="sticky top-0 p-6 shadow-md backdrop-blur-2xl z-1000 transition-all duration-300">
      <div className="w-full max-w-360 flex mx-auto">
        <Logo />
        <TextAlignEnd onClick={() => setOpenNav(true)} className="md:hidden" />
        <Navbar type="mobile" open={openNav} closeFn={setOpenNav} />
        {/* Desktop nav */}
        <Navbar type="desktop" />
      </div>
    </header>
  );
}
