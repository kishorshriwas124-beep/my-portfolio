"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DotsBackground() {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<any[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // 1. Stars Generate Karna
    const generatedStars = [];
    for (let i = 0; i < 75; i++) {
      generatedStars.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }
    setStars(generatedStars);
    setMounted(true);

    // 2. Scroll Detector
    let scrollTimer: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 250); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      
      {/* 1. Upar se Neeche Girte Hue Stars (Ab Black color mein) */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-black rounded-full" // Yahan bg-white ko bg-black kar diya
          style={{
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            top: "-10%", 
          }}
          animate={{
            top: ["-10%", "110%"],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "linear",
            delay: star.delay,
          }}
        />
      ))}

      {/* 2. Smart Blinking & Dropping Arrow */}
      <AnimatePresence>
        {!isScrolling && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{
                y: [0, 0, 45],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                times: [0, 0.4, 1],
                ease: "easeIn"
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black" // Arrow ko bhi black kar diya taaki dots se match kare
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-80 drop-shadow-lg"
              >
                <motion.path
                  d="M4 8l8 8 8-8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    times: [0, 0.4, 1],
                    ease: "easeOut"
                  }}
                />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}