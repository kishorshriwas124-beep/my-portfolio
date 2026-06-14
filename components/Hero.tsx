"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A192F] px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white font-extrabold text-5xl sm:text-6xl md:text-7xl mb-2"
        >
          Kishor Kumar Shriwas
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 font-semibold text-3xl sm:text-4xl md:text-5xl mb-6"
        >
          I build systems and tell stories.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12"
        >
          Techno-Creative IT Professional | Full-Stack Developer + AI/ML + Digital Media Operations.<br className="hidden md:block" />
          Bridging the gap between robust code and impactful content.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-16 md:gap-24 mb-14"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-white font-bold text-5xl mb-2">120 <span className="text-[#00C2A8]">Hrs</span></h3>
            <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">Media Training</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-white font-bold text-5xl mb-2">3<span className="text-[#6C63FF]">+</span></h3>
            <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">Major Projects</p>
          </div>
        </motion.div>

        {/* Socials & Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-5"
        >
          {/* LinkedIn Icon (SVG Custom Code) */}
          <a href="https://linkedin.com/in/kishorshriwas007" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-[#6C63FF] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <a href="mailto:kishorshriwas007@gmail.com" className="p-3 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-[#6C63FF] transition-all">
            <Mail className="w-20px h-20px" style={{ width: 20, height: 20 }} />
          </a>

          <a
            href="/docs/RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border border-[#6C63FF] text-[#6C63FF] rounded-full hover:bg-[#6C63FF]/10 transition-all font-semibold ml-2"
          >
            View My Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}