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

    // 2. Scroll Detector (Arrow ko kab dikhana hai)
    let scrollTimer: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true); // Scroll hote hi arrow gayab
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false); // Scroll rukne ke thodi der baad arrow wapas fresh banega
      }, 250); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      
      {/* 1. Upar se Neeche Girte Hue Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            top: "-10%", 
          }}
          animate={{
            top: ["-10%", "110%"], // Top to Bottom falling
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
        {/* Jab scroll nahi ho raha hoga, sirf tabhi arrow dikhega */}
        {!isScrolling && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            {/* Wrapper: Yeh arrow ko neeche drop karega */}
            <motion.div
              animate={{
                y: [0, 0, 45],     // Pehle ruka rahega, fir tezi se neeche drop hoga
                opacity: [0, 1, 0] // Fade in -> Solid -> Fade out (drop hote time)
              }}
              transition={{
                duration: 1.5,     // 1.5 second ka total loop
                repeat: Infinity,
                times: [0, 0.4, 1], // 0-40% time mein banega, baaki 60% time mein drop hoga
                ease: "easeIn"
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-80 drop-shadow-lg"
              >
                {/* SVG Path: Yeh arrow ko draw karega */}
                <motion.path
                  d="M4 8l8 8 8-8" // Custom sleek arrow shape
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 1] }} // Line draw hogi
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    times: [0, 0.4, 1], // Drawing speed drop wali speed se match kar rahi hai
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