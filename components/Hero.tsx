"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

function AnimatedWord({ word, index, total, progress }: { word: string; index: number; total: number; progress: any }) {
  const start = 0.58 + (index / total) * 0.28;
  const end = start + 0.04;
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

  const springConfig = { stiffness: 45, damping: 22, mass: 0.4, restDelta: 0.0001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  const headlineOpacity = useTransform(smoothProgress, [0, 0.18], [1, 0]);
  const headlineY = useTransform(smoothProgress, [0, 0.18], [0, -50]); 
  const headlineScale = useTransform(smoothProgress, [0, 0.18], [1, 0.9]); 
  const rotateY = useTransform(smoothProgress, [0.10, 0.45], [0, 180]);
  const width = useTransform(smoothProgress, [0.10, 0.45], ["220px", "350px"]);
  const height = useTransform(smoothProgress, [0.10, 0.45], ["300px", "400px"]);
  const borderRadius = useTransform(smoothProgress, [0.10, 0.45], ["2rem", "2rem"]);
  const photoOpacity = useTransform(smoothProgress, [0, 0.52, 0.60], [1, 1, 0]);
  const photoY = useTransform(smoothProgress, [0, 0.52, 0.60], [0, 0, -60]);
  const textOpacity = useTransform(smoothProgress, [0, 0.12, 0.26, 0.52, 0.60], [0, 0, 1, 1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.12, 0.26, 0.52, 0.60], [30, 30, 0, 0, -60]);
  const stickerOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);
  const paragraphOpacity = useTransform(smoothProgress, [0.54, 0.62], [0, 1]);
  const paragraphY = useTransform(smoothProgress, [0.54, 0.62], [40, 0]);

  const paragraphText = "From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use, driven by clarity, structured systems, and intentional design.";
  const words = paragraphText.split(" ");

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-[#F4F3EF]">
      <div id="hero-about" className="absolute top-[100vh] w-full h-1 pointer-events-none" />

      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-12 transform-gpu subpixel-antialiased">

        <div className="relative w-full max-w-[1300px] flex justify-center items-center z-10 mt-10 min-h-[600px]">

          {/* HEADLINE */}
          <motion.div
            style={{ opacity: headlineOpacity, y: headlineY, scale: headlineScale, willChange: "transform, opacity" }}
            className="absolute top-6 w-full flex flex-col items-center justify-start pointer-events-none z-40 select-none"
          >
            <div className="relative w-full flex flex-col items-center justify-start select-none">
              <motion.div style={{ opacity: stickerOpacity }} className="absolute -left-6 md:-left-4 top-[-20px] md:top-[-10px] w-14 h-14 md:w-24 md:h-24 select-none pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                  <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" fill="black" />
                </svg>
              </motion.div>
              <h1 className="text-black font-black uppercase leading-[0.85] text-[9vw] md:text-[6.5vw] tracking-tighter m-0 p-0 text-center select-none outline-none cursor-default">SOFTWARE ENGINEER</h1>
              <div className="relative mt-2 select-none">
                <h1 className="text-black font-black uppercase leading-[0.85] text-[9vw] md:text-[6.5vw] tracking-tighter m-0 p-0 text-center select-none outline-none cursor-default">& DIGITAL MEDIA</h1>
                <motion.div style={{ opacity: stickerOpacity }} className="absolute -right-10 md:-right-20 bottom-[-15px] md:bottom-[-10px] w-12 h-12 md:w-20 md:h-20 select-none pointer-events-none">
                  <svg viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="black" strokeWidth="0.5" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* BIO + PHOTO */}
          <div className="absolute w-full max-w-6xl flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-16 z-30 mt-[220px] md:mt-[260px]">
            <motion.div style={{ opacity: textOpacity, y: textY, willChange: "transform, opacity" }} className="flex-1 flex flex-col justify-between text-left py-2">
              <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-[#111111] leading-none mb-8 md:mb-0">Hey</h2>
              <p className="text-[17px] md:text-[18px] font-semibold leading-[1.5] text-[#111111] tracking-tight">I'm Kishor, I make things. I work in IT operations at Prasar Bharati — India's public broadcaster. Outside of work, I build software, explore new tech, and occasionally break things to understand how they work.</p>
            </motion.div>

            <motion.div style={{ opacity: photoOpacity, y: photoY, perspective: "1500px", willChange: "transform, opacity" }} className="relative flex-shrink-0 mx-auto flex items-center justify-center min-w-[350px] min-h-[400px]">
              <motion.div layoutId="profile-photo" className="shadow-2xl" style={{ width, height, borderRadius, transformStyle: "preserve-3d", rotateY, willChange: "transform, width, height" }}>
                <div className="absolute inset-0 border-4 border-[#F4F3EF] [backface-visibility:hidden] overflow-hidden rounded-[inherit]" style={{ transform: "rotateY(0deg) translateZ(1px) translate3d(0,0,0)" }}>
                  <img src="/images/profile.jpg" className="w-full h-full object-cover grayscale" alt="Kishor Shriwas" />
                </div>
                <div className="absolute inset-0 border-4 border-[#F4F3EF] [backface-visibility:hidden] bg-[#D6001C] overflow-hidden rounded-[inherit]" style={{ transform: "rotateY(180deg) translateZ(1px) translate3d(0,0,0)" }}>
                  <img src="/images/profile.jpg" className="w-full h-full object-cover mix-blend-multiply" alt="Kishor Shriwas" />
                </div>
              </motion.div>
            </motion.div>

            <motion.div style={{ opacity: textOpacity, y: textY, willChange: "transform, opacity" }} className="flex-1 flex flex-col justify-end text-left space-y-5 py-2">
              <p className="text-[17px] md:text-[18px] font-semibold leading-[1.5] text-[#111111] tracking-tight">As a software engineer and broadcast professional, I manage the CAS database and broadcast systems at Prasar Bharati.</p>
              <p className="text-[17px] md:text-[18px] font-semibold leading-[1.5] text-[#111111] tracking-tight">On the development side, I build full-stack web applications with a focus on backend systems, structured databases, and work in AI/ML.</p>
            </motion.div>
          </div>

          {/* PARAGRAPH */}
          <motion.div style={{ opacity: paragraphOpacity, y: paragraphY, willChange: "transform, opacity" }} className="absolute w-full max-w-5xl px-6 md:px-12 flex items-center justify-center text-center z-20 pointer-events-none mt-12">
            <p className="text-xl md:text-[2.6vw] leading-[1.35] text-center tracking-tighter select-none flex flex-wrap justify-center content-center">
              {words.map((word, idx) => (
                <AnimatedWord key={idx} word={word} index={idx} total={words.length} progress={smoothProgress} />
              ))}
            </p>
          </motion.div>

        </div>

        {/* ©2026 — BOTTOM LEFT + /CREATING SINCE 2023 — BOTTOM RIGHT */}
        <motion.div
          style={{ opacity: headlineOpacity, willChange: "opacity" }}
          className="absolute bottom-10 left-0 w-full px-6 md:px-16 flex justify-between items-center text-black font-black tracking-tighter select-none pointer-events-none z-40"
        >
          <div className="text-xl md:text-[2.2vw]">©2026</div>
          <div className="text-sm md:text-[1.2vw] font-black uppercase">/CREATING SINCE 2023</div>
        </motion.div>

        {/* STATS — BOTTOM RIGHT */}
        <motion.div
          style={{ opacity: headlineOpacity, willChange: "opacity" }}
          className="absolute bottom-28 md:bottom-24 right-6 md:right-16 flex flex-col items-end gap-4 z-40 pointer-events-none"
        >
          <div className="text-right">
            <h3 className="text-xl md:text-2xl font-black text-black leading-none">2+</h3>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#555]">Years</p>
          </div>
          <div className="text-right">
            <h3 className="text-xl md:text-2xl font-black text-black leading-none">15+</h3>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#555]">Projects</p>
          </div>
          <div className="text-right">
            <h3 className="text-xl md:text-2xl font-black text-black leading-none">WORK @ </h3>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#555]">PRASAR BHARATI</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}