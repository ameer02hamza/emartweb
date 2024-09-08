import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import NavLinks from "./nav-links";
import SearchBar from "./search-bar";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href={"/"}>
          <h1 className="font-serif text-4xl text-center">
            The
            <span className="underline decoration-orange-400">News</span>
            Hub
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* dark mode */}
          <button
            className="hidden md:inline bg-slate-900 text-white 
            px-4 lg:px-8 lg:py-2 rounded-full dark:bg-slate-800"
          >
            Subscribe
          </button>
        </div>
      </div>
      <NavLinks />
      <SearchBar />
    </header>
  );
}

export default Header;
