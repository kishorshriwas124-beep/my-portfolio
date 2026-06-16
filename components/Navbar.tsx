"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoreHorizontal, X } from "lucide-react";

interface NavbarProps {
  onAboutClick?: () => void;
}

export default function Navbar({ onAboutClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["About Me", "Experience", "Projects", "Contact"];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[99999] isolate">
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
                <button
                  key={item}
                  onClick={() => {
                    setIsOpen(false);
                    // Trigger state switch inside Hero block only on About Me selection
                    if (item === "About Me" && onAboutClick) {
                      onAboutClick();
                    }
                  }}
                  className="w-full bg-white text-black font-bold py-2.5 rounded-xl hover:bg-gray-200 transition-colors text-sm"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}