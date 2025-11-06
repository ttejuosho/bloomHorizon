"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import bhIcon from "../public/bh2.png";
import ServiceRequestModal from "./ServiceRequestModal"; // import the modal

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-green-800 font-bold text-2xl hover:text-green-600 transition-colors"
        >
          <img
            src={bhIcon.src}
            alt="Bloom Horizon Logo"
            className="h-8 w-8 mr-2"
          />
          Bloom Horizon
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-green-800 text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex space-x-8 items-center">
          <NavLinks />
          <ServiceRequestModal triggerText="Book Us" />
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-100">
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLinks onClick={() => setMenuOpen(false)} />
            <ServiceRequestModal triggerText="Book Us" />
          </div>
        </div>
      )}
    </header>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={onClick}
          className="relative text-green-800 py-2 font-medium hover:text-green-600 transition-colors"
        >
          {label}
        </Link>
      ))}
    </>
  );
}
