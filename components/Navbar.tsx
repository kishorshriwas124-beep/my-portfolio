"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoreHorizontal, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Menu box ko track karne ke liye ek reference banaya
  const navRef = useRef<HTMLDivElement>(null);
  
  const menuItems = [
    { name: "About Me", id: "hero-about" },
    { name: "Experience & Education", id: "experience" },
    { name: "Featured Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  // 1. BRAMHASTRA SCROLL FUNCTION (Pehle se perfect hai)
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); 
    setIsOpen(false);   

    setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        const offsetTop = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    }, 50);
  };

  // 2. CLICK OUTSIDE & SCROLL DETECTOR (Naya Magic Yahan Hai ✨)
  useEffect(() => {
    // Agar bahar click hua toh menu close karo
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Agar screen scroll hui toh menu close karo
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    // Browser ko sunne ke liye listeners lagaye
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Safai (Cleanup) taaki memory leak na ho
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    // 👇 Yahan ref={navRef} lagaya hai taaki is div ke bahar click track ho sake 👇
    <div ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-[99999] isolate">
      <div className="bg-[#111] text-white rounded-[20px] p-2 flex flex-col items-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] border border-gray-800 backdrop-blur-md">
        
        {/* Main Pill Bar */}
        <div className="flex items-center justify-between w-64 md:w-72 px-4 py-1">
          <span className="font-bold text-lg md:text-xl tracking-wide">Kishor Shriwas</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white text-black p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {isOpen ? <X size={20} /> : <MoreHorizontal size={20} />}
          </button>
        </div>

        {/* Dropdown Menu Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full overflow-hidden flex flex-col gap-2 mt-3 px-2 pb-2"
            >
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  className="w-full bg-white text-black font-bold py-2.5 rounded-xl hover:bg-gray-200 transition-colors text-sm text-center block cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}