import { useState, useEffect } from "react";
import TypewriterAnimation from "../ui/TypewriterAnimation";
import ScrambleAnimation from "../ui/ScrambleAnimation";

export default function ABTestHero() {
  const [variant, setVariant] = useState<"typewriter" | "scramble" | null>(
    null,
  );

  useEffect(() => {
    const chosen = Math.random() < 0.5 ? "typewriter" : "scramble";
    setVariant(chosen);
  }, []);

  if (!variant) return null; // evita flash no carregamento

  return (
    <section className="flex flex-col items-center justify-center pb-16 min-h-[80vh] max-w-4xl mx-auto text-center relative z-10">
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-10 border border-white/20">
        {variant === "typewriter" ? (
          <TypewriterAnimation />
        ) : (
          <ScrambleAnimation />
        )}
        {/* O resto do conteúdo do Hero pode ficar aqui abaixo */}
        <p className="text-lg md:text-xl mb-8 text-neutral-200 leading-relaxed">
          Full-Stack Developer in{" "}
          <span className="font-bold text-sky-300">Toronto</span>. Skilled in
          React, Next.js, Node.js, .NET & Cloud, I craft high-performance
          applications that blend technology, design, and business impact.
        </p>
        {/* Ícones, botões, etc */}
      </div>
    </section>
  );
}
