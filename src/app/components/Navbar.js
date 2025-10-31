"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const path = usePathname();
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#0B1120]/60 backdrop-blur-lg text-white py-4 px-6 z-50 shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent select-none">
          AG
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative"
            >
              <Link
                href={link.href}
                className={`transition-colors duration-300 ${
                  path === link.href
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>

              {/* Hover Underline */}
              {hovered === index && (
                <div className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full" />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-gray-300 hover:text-cyan-400 transition"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <aside className="fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-[#0B1120]/95 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center space-y-10 z-50 border-l border-gray-700/40">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-semibold transition-colors duration-300 ${
                path === link.href
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Footer inside sidebar */}
          <div className="absolute bottom-10 text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-cyan-400">Ankit Gyanwali</span>
          </div>
        </aside>
      )}
    </nav>
  );
}
