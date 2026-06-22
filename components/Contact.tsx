"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="w-full flex flex-col">
      
      {/* ==============================================================
          PART 1: LET'S TALK FORM SECTION (Cream Theme matching Hero)
          ============================================================== */}
      <section id="contact" className="py-24 bg-[#F4F3EF] text-black px-6 md:px-12 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Typography & Expanded Minimal Contact Details Array */}
          <div className="flex flex-col text-left justify-center h-full">
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-black uppercase leading-none m-0 p-0">
              Let's connect.
            </h2>
            <p className="text-lg md:text-xl font-semibold text-neutral-600 tracking-tight mt-6 max-w-md leading-relaxed">
              I build full-stack applications and broadcast infrastructure designed not to break. Drop a note below to discuss systems engineering or connect professionally.
            </p>

            {/* EXPANDED CONTACT GRID: All direct targets aligned horizontally matching the system style */}
            <div className="flex flex-wrap items-center gap-3 mt-12">
              
              {/* Linkedin SVG */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-neutral-200/60 hover:bg-black hover:text-[#F4F3EF] flex items-center justify-center transition-all duration-300 text-black shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

              {/* Instagram SVG */}
              <a href="https://www.instagram.com/kishor_shriwas_007/?hl=en" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-neutral-200/60 hover:bg-black hover:text-[#F4F3EF] flex items-center justify-center transition-all duration-300 text-black shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Gmail Dynamic Badge */}
              <a href="mailto:kishorshriwas007@gmail.com" className="h-12 px-5 rounded-2xl bg-neutral-200/60 hover:bg-black hover:text-[#F4F3EF] flex items-center gap-2.5 transition-all duration-300 text-black font-bold text-xs uppercase tracking-wider border border-transparent">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span className="font-mono lowcase tracking-normal">kishorshriwas007@gmail.com</span>
              </a>

              {/* Phone Dynamic Badge */}
              <a href="tel:+917693003318" className="h-12 px-5 rounded-2xl bg-neutral-200/60 hover:bg-black hover:text-[#F4F3EF] flex items-center gap-2.5 transition-all duration-300 text-black font-bold text-xs uppercase tracking-wider border border-transparent">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span className="font-mono tracking-normal">+91 7693003318</span>
              </a>

              {/* Location Dynamic Indicator */}
              <div className="h-12 px-5 rounded-2xl bg-neutral-200/30 flex items-center gap-2.5 text-neutral-500 font-bold text-xs uppercase tracking-wider border border-neutral-200/40 select-none">
                <svg className="w-4 h-4 text-neutral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="font-mono tracking-tight text-neutral-600">Indore, MP</span>
              </div>
              
            </div>
          </div>

          {/* Right Column: Premium Matte-Black Form Card */}
          <div className="w-full max-w-lg md:ml-auto bg-[#141414] p-8 md:p-10 rounded-[2.5rem] shadow-2xl flex flex-col text-left">
            <form 
              action="https://formspree.io/f/YOUR_FORMSPREEE_ID_HERE" 
              method="POST" 
              className="space-y-6 w-full"
            >
              
              <div className="flex flex-col">
                <label className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Enter your name" 
                  className="w-full bg-[#1e1e1e] border border-neutral-800 rounded-2xl px-5 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 font-medium tracking-tight transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Enter your email" 
                  className="w-full bg-[#1e1e1e] border border-neutral-800 rounded-2xl px-5 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 font-medium tracking-tight transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  required
                  placeholder="Purpose" 
                  className="w-full bg-[#1e1e1e] border border-neutral-800 rounded-2xl px-5 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 font-medium tracking-tight transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-white text-black font-black uppercase tracking-wider py-4 rounded-2xl text-center hover:bg-neutral-200 transition-colors duration-300 mt-4 text-sm cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* PART 2: HIGH-END FOOTER */}
      <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12 relative overflow-hidden w-full border-t border-neutral-900">
        
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 relative z-10">
          <div className="max-w-md text-left">
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] text-white">
              Bridging Code & Broadcast Operations.
            </h3>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">/Quick links</span>
            <div className="grid grid-cols-2 gap-2 max-w-xs">
              <a href="#" className="px-5 py-2 bg-[#141414] border border-neutral-800 hover:bg-white hover:text-black transition-colors duration-300 text-xs font-bold uppercase tracking-wider rounded-xl text-center">Home</a>
              <a href="#hero-about" className="px-5 py-2 bg-[#141414] border border-neutral-800 hover:bg-white hover:text-black transition-colors duration-300 text-xs font-bold uppercase tracking-wider rounded-xl text-center">About Me</a>
              <a href="#what-i-do" className="px-5 py-2 bg-[#141414] border border-neutral-800 hover:bg-white hover:text-black transition-colors duration-300 text-xs font-bold uppercase tracking-wider rounded-xl text-center">What I Do</a>
              <a href="#projects" className="px-5 py-2 bg-[#141414] border border-neutral-800 hover:bg-white hover:text-black transition-colors duration-300 text-xs font-bold uppercase tracking-wider rounded-xl text-center">Projects</a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-24 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold tracking-wider text-neutral-500 relative z-10">
          <div>© 2026 KISHOR KUMAR SHRIWAS. ALL RIGHTS RESERVED.</div>
          <div className="uppercase opacity-60">Indore Environment // Production Build</div>
        </div>

        <div className="absolute bottom-[-4vw] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden leading-none">
          <span className="text-[17vw] font-black uppercase tracking-tighter text-neutral-900/60 block">
            KISHOR
          </span>
        </div>
      </footer>
    </div>
  );
}