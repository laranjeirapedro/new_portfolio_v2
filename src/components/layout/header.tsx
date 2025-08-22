"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900/80 backdrop-blur shadow-lg border-b border-neutral-200 dark:border-neutral-800">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-3xl text-sky-600 dark:text-sky-400 tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          Pedro Magalhaes
        </Link>

        <button
          className="md:hidden p-2 rounded-md text-sky-600 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <ul
          className={`
            flex-col md:flex-row md:flex md:gap-5 md:items-center
            absolute md:static top-full left-0 w-full md:w-auto
            bg-white dark:bg-neutral-900 border-b md:border-none border-neutral-200 dark:border-neutral-800
            md:translate-y-0 transition-transform duration-300 ease-in-out
            md:opacity-100 opacity-0 pointer-events-none md:pointer-events-auto
            ${isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "translate-y-[-200%]"}
          `}
        >
          {navLinks.map((link) => (
            <li key={link.href} className="border-t md:border-none border-neutral-200 dark:border-neutral-800 last:border-b-0">
              <Link
                href={link.href}
                className={`block px-4 py-3 md:px-3 md:py-2 rounded hover:bg-sky-100 dark:hover:bg-sky-900 transition
                  ${pathname === link.href
                    ? "bg-sky-200 dark:bg-sky-800 font-semibold text-sky-700 dark:text-sky-300"
                    : "text-gray-700 dark:text-gray-300"
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}