"use client";
import { motion } from "framer-motion";

export default function FlipCard() {
  return (
    /* Requirements Ke Mutabiq: Fixed Size (380px by 520px) aur Perspective: 1000px */
    <div 
      className="w-[380px] h-[520px] cursor-pointer group subpixel-antialiased" 
      style={{ perspective: "1000px" }}
    >
      <motion.div
        /* Requirements Ke Mutabiq: Child with preserve-3d, custom smooth 0.7s cubic-bezier transition, aur hover par rotateY 180 */
        className="relative w-full h-full"
        style={{ 
          transformStyle: "preserve-3d",
          willChange: "transform" // Pure GPU rendering forces native hardware acceleration (No Lag)
        }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* FRONT FACE */}
        {/* FIXED: Added absolute isolate parameters and GPU hardware matrices to avoid composite blending lag */}
        <div 
          className="absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl [backface-visibility:hidden] [webkit-backface-visibility:hidden] transform-gpu"
          style={{ transform: "rotateY(0deg) translateZ(1px) translate3d(0,0,0)" }} 
        >
          <img src="/profile.jpg" alt="Front" className="w-full h-full object-cover grayscale" />
        </div>

        {/* BACK FACE (Red Tint) */}
        {/* FIXED: Added absolute isolate parameters and GPU hardware matrices to avoid composite blending lag */}
        <div 
          className="absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl [backface-visibility:hidden] [webkit-backface-visibility:hidden] transform-gpu"
          style={{ transform: "rotateY(180deg) translateZ(1px) translate3d(0,0,0)" }}
        >
          <div className="absolute inset-0 bg-red-600 mix-blend-multiply opacity-80 z-10" />
          <img src="/profile.jpg" alt="Back" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </div>
  );
}