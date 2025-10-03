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
    <div className="p-3 flex justify-between items-center w-full top-0">
      {/* Responsive Logo */}
      <Image
        src="/logo.svg"
        alt="logo"
        width={250}
        height={88}
        className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto"
        priority
      />

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 font-semibold text-white">
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

      {/* Mobile Hamburger */}
      <button
        className="md:hidden p-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-3 bg-[#10012B]/90 shadow-lg rounded-lg w-48 flex flex-col p-4 gap-3 md:hidden z-50">
          {navs.map((nav, ind) => (
            <a
              key={ind}
              href={nav.to}
              className="text-lg font-semibold text-white hover:text-[#7ED957] cursor-pointer transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {nav.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavBar;
