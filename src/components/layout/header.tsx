"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur shadow-lg border-b border-neutral-200 dark:border-neutral-800">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-sky-600 dark:text-sky-400 tracking-tight">
          Pedro Magalhaes
        </Link>
        <ul className="flex gap-2 md:gap-5 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 rounded hover:bg-sky-100 dark:hover:bg-sky-900 transition
                  ${pathname === link.href ? "bg-sky-200 dark:bg-sky-800 font-semibold text-sky-700 dark:text-sky-300" : "text-gray-700 dark:text-gray-300"}
                `}
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