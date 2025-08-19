'use client'

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#________";

function scrambleText(text: string, progress: number) {
  let output = "";
  for (let i = 0; i < text.length; i++) {
    if (i < progress) {
      output += text[i];
    } else {
      output += SCRAMBLE_CHARS.charAt(Math.floor(Math.random() * SCRAMBLE_CHARS.length));
    }
  }
  return output;
}

export default function Hero() {
  const fullText = "Hi, I’m Pedro Magalhaes";
  const [scrambled, setScrambled] = useState(fullText);
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, scale: 1, y: 0 });

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= fullText.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [fullText.length, controls]);

  useEffect(() => {
    setScrambled(scrambleText(fullText, progress));
  }, [progress, fullText]);

  return (
    <section className="flex flex-col items-center justify-center pt-28 pb-16 min-h-[80vh] max-w-3xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, type: "spring" }}
        className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-10 border border-white/20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            text-5xl md:text-7xl font-extrabold tracking-tight mb-6 
            text-white dark:text-white
            drop-shadow-[0_2px_16px_rgba(0,0,0,0.50)]
            min-h-[7rem]
            font-mono
            select-none
          "
          aria-label={fullText}
        >
          {scrambled}
        </motion.h1>

        <p className="text-lg md:text-xl mb-8 text-neutral-200 leading-relaxed">
          Full-Stack Developer in{" "}
          <span className="font-bold text-sky-300">Toronto</span>. Skilled in React,
          Next.js, Node.js, .NET & Cloud, I craft high-performance applications that
          blend technology, design, and business impact.
        </p>

        <div className="flex gap-4 justify-center mb-6">
          <Link
            href="https://linkedin.com/in/pedroh-magalhaes"
            target="_blank"
            className="text-sky-400 hover:bg-sky-900 hover:text-white transition rounded-full p-3"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </Link>
          <Link
            href="https://github.com/laranjeirapedro"
            target="_blank"
            className="text-indigo-400 hover:bg-indigo-900 hover:text-white transition rounded-full p-3"
            aria-label="GitHub"
          >
            <Github size={28} />
          </Link>
          <Link
            href="https://instagram.com/pedrolaranjeira85"
            target="_blank"
            className="text-pink-400 hover:bg-pink-900 hover:text-white transition rounded-full p-3"
            aria-label="Instagram"
          >
            <Instagram size={28} />
          </Link>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="/projects"
            className="bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:scale-105 transition font-semibold"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="bg-white/20 backdrop-blur border border-sky-300 text-sky-100 text-lg px-8 py-4 rounded-full shadow-lg hover:bg-sky-900 hover:text-white transition font-semibold"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-32 left-0 w-full h-[500px] z-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 via-indigo-900 to-transparent blur-3xl opacity-80"></div>
      </motion.div>
    </section>
  );
}