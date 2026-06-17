"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Navbar from "./Navbar";

// Sub-component to safely animate individual words without breaking linter rules
function AnimatedWord({ word, index, total, progress }: { word: string; index: number; total: number; progress: any }) {
  const start = 0.58 + (index / total) * 0.28;
  const end = start + 0.04;
  
  // Words change color sequentially from grey (#ccc) to black (#111) on scroll
  const color = useTransform(progress, [start, end], ["#cccccc", "#111111"]);
  
  return (
    <motion.span style={{ color }} className="inline-block mx-[0.15em] font-black uppercase tracking-tighter">
      {word}
    </motion.span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // FIXED PHYSICS: Calibrated heavy cinematic inertia glide configuration
  const springConfig = { stiffness: 45, damping: 22, mass: 0.4, restDelta: 0.0001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // 1. HEADLINE ANIMATION (Fades cleanly from 0 to 0.18)
  const headlineOpacity = useTransform(smoothProgress, [0, 0.18], [1, 0]);
  const headlineY = useTransform(smoothProgress, [0, 0.18], [0, -50]); 
  const headlineScale = useTransform(smoothProgress, [0, 0.18], [1, 0.9]); 

  // 2. PHOTO ANIMATION (Flips and resizes flawlessly between 0.10 and 0.45)
  const rotateY = useTransform(smoothProgress, [0.10, 0.45], [0, 180]);
  const width = useTransform(smoothProgress, [0.10, 0.45], ["220px", "350px"]);
  const height = useTransform(smoothProgress, [0.10, 0.45], ["300px", "400px"]);
  const borderRadius = useTransform(smoothProgress, [0.10, 0.45], ["2rem", "2rem"]);

  // Photo visibility logic — Page load par 1 rahegi, baad mein 0.52 par fade-out hogi
  const photoOpacity = useTransform(smoothProgress, [0, 0.52, 0.60], [1, 1, 0]);
  const photoY = useTransform(smoothProgress, [0, 0.52, 0.60], [0, 0, -60]);

  // Bio text begins fading in at 0.12 right as the headline leaves, killing the empty void
  const textOpacity = useTransform(smoothProgress, [0, 0.12, 0.26, 0.52, 0.60], [0, 0, 1, 1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.12, 0.26, 0.52, 0.60], [30, 30, 0, 0, -60]);

  // STICKERS TIMING
  const stickerOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);

  // 4. SCROLL PARAGRAPH FADE TIMING
  const paragraphOpacity = useTransform(smoothProgress, [0.54, 0.62], [0, 1]);
  const paragraphY = useTransform(smoothProgress, [0.54, 0.62], [40, 0]);

  const paragraphText = "From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use, driven by clarity, structured systems, and intentional design.";
  const words = paragraphText.split(" ");

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-[#F4F3EF]">
      {/* FIXED: Added dynamic rendering filters to force smooth subpixel text-smoothing */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-12 transform-gpu subpixel-antialiased">
        <Navbar />

        {/* LOCKED MAXIMUM GEOMETRY FRAME */}
        <div className="relative w-full max-w-[1300px] flex justify-center items-center z-10 mt-10 min-h-[600px]">
          
          {/* LAYER 1: BIG TITLE */}
          <motion.div
            style={{ 
              opacity: headlineOpacity, 
              y: headlineY, 
              scale: headlineScale,
              willChange: "transform, opacity"
            }}
            className="absolute top-6 w-full flex flex-col items-center justify-start pointer-events-none z-40"
          >
            <div className="relative w-full flex flex-col items-center justify-start">
              
              {/* Left Star Sticker */}
              <motion.div 
                style={{ opacity: stickerOpacity }}
                className="absolute -left-6 md:-left-4 top-[-20px] md:top-[-10px] w-14 h-14 md:w-24 md:h-24 select-none"
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                  <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" fill="black" />
                </svg>
              </motion.div>

              <h1 className="text-black font-black uppercase leading-[0.85] text-[9vw] md:text-[6.5vw] tracking-tighter m-0 p-0 text-center">SOFTWARE ENGINEER</h1>
              
              <div className="relative mt-2">
                <h1 className="text-black font-black uppercase leading-[0.85] text-[9vw] md:text-[6.5vw] tracking-tighter m-0 p-0 text-center">& DIGITAL MEDIA</h1>
                
                {/* Right Lightning Bolt Sticker */}
                <motion.div 
                  style={{ opacity: stickerOpacity }}
                  className="absolute -right-10 md:-right-20 bottom-[-15px] md:bottom-[-10px] w-12 h-12 md:w-20 md:h-20 select-none"
                >
                  <svg viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="black" strokeWidth="0.5" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>

            </div>
          </motion.div>

          {/* LAYER 2: BIO & PHOTO CONTAINER */}
          <div className="absolute w-full max-w-6xl flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-16 z-30 mt-[220px] md:mt-[260px]">

            {/* Left Bio Column */}
            <motion.div
              style={{ opacity: textOpacity, y: textY, willChange: "transform, opacity" }}
              className="flex-1 flex flex-col justify-between text-left py-2"
            >
              <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-[#111111] leading-none mb-8 md:mb-0">
                Hey
              </h2>
              <p className="text-[17px] md:text-[18px] font-semibold leading-[1.5] text-[#111111] tracking-tight">
                I'm Kishor, a techno-creative builder based in India, currently managing digital media operations and software development at Prasar Bharati (Akashvani).
              </p>
            </motion.div>

            {/* Center Photo Wrapper */}
            <motion.div 
              style={{ opacity: photoOpacity, y: photoY, perspective: "1500px", willChange: "transform, opacity" }}
              className="relative flex-shrink-0 mx-auto flex items-center justify-center min-w-[350px] min-h-[400px]"
            >
              <motion.div
                layoutId="profile-photo"
                className="shadow-2xl"
                style={{ 
                  width, 
                  height, 
                  borderRadius, 
                  transformStyle: "preserve-3d", 
                  rotateY,
                  willChange: "transform, width, height"
                }}
              >
                {/* Front Face Frame */}
                <div className="absolute inset-0 border-4 border-[#F4F3EF] [backface-visibility:hidden] overflow-hidden rounded-[inherit]" style={{ transform: "rotateY(0deg) translateZ(1px) translate3d(0,0,0)" }}>
                  <img src="/images/profile.jpg" className="w-full h-full object-cover grayscale" alt="Kishor Shriwas" />
                </div>
                {/* Back Face Frame */}
                <div className="absolute inset-0 border-4 border-[#F4F3EF] [backface-visibility:hidden] bg-[#D6001C] overflow-hidden rounded-[inherit]" style={{ transform: "rotateY(180deg) translateZ(1px) translate3d(0,0,0)" }}>
                  <img src="/images/profile.jpg" className="w-full h-full object-cover mix-blend-multiply" alt="Kishor Shriwas" />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Bio Column */}
            <motion.div
              style={{ opacity: textOpacity, y: textY, willChange: "transform, opacity" }}
              className="flex-1 flex flex-col justify-end text-left space-y-5 py-2"
            >
              <p className="text-[17px] md:text-[18px] font-semibold leading-[1.5] text-[#111111] tracking-tight">
                I'm a software engineer and broadcast professional with a strong focus on building modern, scalable, and impact-driven digital experiences.
              </p>
              <p className="text-[17px] md:text-[18px] font-semibold leading-[1.5] text-[#111111] tracking-tight">
                With a Master's in Computer Applications and AI/ML qualifications from IIT Hyderabad (TiHAN), I bridge the gap between high-performance code and flawless real-time media execution.
              </p>
            </motion.div>
            
          </div>

          {/* LAYER 4: NEW SCROLL WORD REVEAL PARAGRAPH */}
          <motion.div
            style={{ opacity: paragraphOpacity, y: paragraphY, willChange: "transform, opacity" }}
            className="absolute w-full max-w-5xl px-6 md:px-12 flex items-center justify-center text-center z-20 pointer-events-none mt-12"
          >
            <p className="text-xl md:text-[2.6vw] leading-[1.35] text-center tracking-tighter select-none flex flex-wrap justify-center content-center">
              {words.map((word, idx) => (
                <AnimatedWord 
                  key={idx} 
                  word={word} 
                  index={idx} 
                  total={words.length} 
                  progress={smoothProgress} 
                />
              ))}
            </p>
          </motion.div>

        </div>

        {/* LAYER 3: BOTTOM CORNERS TEXT */}
        <motion.div 
          style={{ opacity: headlineOpacity, willChange: "opacity" }}
          className="absolute bottom-10 left-0 w-full px-6 md:px-16 flex justify-between items-center text-black font-black tracking-tighter select-none pointer-events-none z-40"
        >
          <div className="text-xl md:text-[2.2vw]">©2026</div>
          <div className="text-sm md:text-[1.2vw] font-black uppercase">/CREATING SINCE 2023</div>
        </motion.div>

      </div>
    </div>
  );
}