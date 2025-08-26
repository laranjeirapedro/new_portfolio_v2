import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

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

export default function ScrambleAnimation() {
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
    <motion.h1
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.50)] min-h-[7rem] font-mono select-none"
      aria-label={fullText}
    >
      {scrambled}
    </motion.h1>
  );
}