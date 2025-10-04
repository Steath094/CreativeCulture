"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navs = [
    { name: "Home", to: "#" },
    { name: "About Us", to: "#" },
    { name: "Our Services", to: "#" },
    { name: "Success Stories", to: "#" },
  ];

  return (
    <nav className="p-4 flex justify-between items-center w-full top-0 bg-transparent z-50 relative">
      {/* Responsive Logo */}
      <Image
        src="/logo.svg"
        alt="logo"
        width={250}
        height={88}
        className="w-28 sm:w-36 md:w-40 lg:w-48 xl:w-52 h-auto"
        priority
      />

      {/* Desktop Navigation (visible only on lg and up) */}
      <div className="hidden lg:flex gap-8 font-semibold text-white">
        {navs.map((nav, ind) => (
          <a
            key={ind}
            href={nav.to}
            className="text-lg hover:text-[#7ED957] cursor-pointer transition-colors"
          >
            {nav.name}
          </a>
        ))}
      </div>

      {/* Hamburger Icon (visible below lg breakpoint) */}
      <button
        className="lg:hidden p-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile / Tablet Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-[#10012B]/95 backdrop-blur-md shadow-lg rounded-xl w-56 flex flex-col p-4 gap-3 lg:hidden z-50 border border-white/10">
          {navs.map((nav, ind) => (
            <a
              key={ind}
              href={nav.to}
              className="text-lg font-semibold text-white hover:text-[#7ED957] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {nav.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
