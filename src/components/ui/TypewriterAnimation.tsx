import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TypewriterAnimation() {
  const fullText = "Hi, I’m Pedro Magalhaes";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.50)] min-h-[7rem]"
      aria-label={fullText}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
          repeatDelay: 0.5,
        }}
        className="inline-block w-1 bg-white ml-1"
      />
    </motion.h1>
  );
}