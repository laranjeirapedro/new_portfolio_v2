import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-sky-600 via-indigo-800 to-blue-900 py-6 shadow-inner text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 justify-between px-4">
        <div className="text-sm text-sky-100 font-medium">
          &copy; {new Date().getFullYear()} Pedro Magalhaes. Designed & Built in Toronto.
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Link href="https://github.com/laranjeirapedro" target="_blank" aria-label="GitHub" className="hover:text-sky-300">
            <Github size={22} />
          </Link>
          <Link href="https://linkedin.com/in/pedroh-magalhaes" target="_blank" aria-label="LinkedIn" className="hover:text-sky-300">
            <Linkedin size={22} />
          </Link>
          <Link href="https://instagram.com/pedrolaranjeira85" target="_blank" aria-label="Instagram" className="hover:text-pink-400">
            <Instagram size={22} />
          </Link>
        </div>
      </div>
    </footer>
  );
}