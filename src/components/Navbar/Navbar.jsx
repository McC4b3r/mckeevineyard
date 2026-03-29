"use client";

import { useState } from "react";
import { Sheet, SheetContent } from "@/src/components/ui/sheet";
import Logo from "./Logo";
import NavBarContainer from "./NavBarContainer";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";

export default function Navbar(props) {
  const [open, setOpen] = useState(false);

  return (
    <NavBarContainer {...props}>
      <Logo />
      <div className="hidden md:block">
        <MenuLinks />
      </div>
      <MenuToggle onClick={() => setOpen(true)} />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <MenuLinks mobile onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    </NavBarContainer>
  );
}
