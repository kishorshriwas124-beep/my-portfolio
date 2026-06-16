"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollQuote() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Scroll ko track karne ke liye
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"], // Jab text screen ke 80% hisse mein aayega tab shuru hoga
  });

  // Tumhara Content (Koi detail change nahi ki hai, bas premium way mein likha hai)
  const quote = "From robust code to impactful content. Building digital systems that stay secure, and perform in real-world use, driven by AI precision and creative storytelling.";
  const words = quote.split(" ");

  return (
    <section ref={containerRef} className="py-32 px-6 bg-[#0A192F] flex items-center justify-center relative z-10 border-t border-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-4xl md:text-5xl lg:text-6xl font-black text-center leading-tight tracking-tighter flex flex-wrap justify-center">
          {words.map((word, i) => {
            // Har word ke liye scroll ka ek hissa (start aur end point) calculate kar rahe hain
            const start = i / words.length;
            const end = start + (1 / words.length);
            
            // Jaise jaise scroll badhega, opacity 0.1 (dark gray) se 1 (bright white) hogi
            const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

            return (
              <motion.span 
                key={i} 
                style={{ opacity }} 
                className="mr-3 lg:mr-4 mb-2 text-white"
              >
                {word}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
}