"use client";

import { Menu } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function MenuToggle({ onClick }) {
  return (
    <Button variant="outline" size="icon" onClick={onClick} className="md:hidden">
      <Menu className="h-5 w-5" />
      <span className="sr-only">Open navigation</span>
    </Button>
  );
}
