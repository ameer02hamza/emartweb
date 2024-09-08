"use client";
import { navLinks } from "@/consts/news/consts.news";
import React from "react";
import NavLink from "./nav-link";
import { usePathname } from "next/navigation";

function NavLinks() {
  const pathName = usePathname();
  const isActive = (path: string) => {
    return pathName?.split("/").pop() === path;
  };
  return (
    <nav className="grid grid-cols-4 md:grid-cols-8 text-xs md:text-sm 
    gap-4 pb-10 max-w-6xl mx-auto border-b">
      {navLinks.map((category) => (
        <NavLink category={category} isActive={isActive(category)} />
      ))}
    </nav>
  );
}

export default NavLinks;
