"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="w-full flex flex-col">
      
      {/* ==============================================================
          PART 1: LET'S TALK FORM SECTION (Cream Theme matching Hero)
          ============================================================== */}
      <section className="py-24 bg-[#F4F3EF] text-black px-6 md:px-12 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Typography & Social Links */}
          <div className="flex flex-col text-left justify-center h-full">
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-black uppercase leading-none m-0 p-0">
              Let's talk.
            </h2>
            <p className="text-lg md:text-xl font-semibold text-neutral-600 tracking-tight mt-6 max-w-md leading-relaxed">
              Have a project or need help? Fill out the form, or reach out directly, and I'll get back to you soon.
            </p>

            {/* Social Icons Layout using raw SVGs to avoid package version errors */}
            <div className="flex items-center gap-3 mt-12">
              {/* Twitter / X SVG */}
              <a href="#" className="w-12 h-12 rounded-2xl bg-neutral-200/60 hover:bg-black hover:text-[#F4F3EF] flex items-center justify-center transition-all duration-300 text-black">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              
              {/* Instagram SVG */}
              <a href="#" className="w-12 h-12 rounded-2xl bg-neutral-200/60 hover:bg-black hover:text-[#F4F3EF] flex items-center justify-center transition-all duration-300 text-black">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              
              {/* Linkedin SVG */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-neutral-200/60 hover:bg-black hover:text-[#F4F3EF] flex items-center justify-center transition-all duration-300 text-black">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              
              {/* Youtube SVG */}
              <a href="#" className="w-12 h-12 rounded-2xl bg-neutral-200/60 hover:bg-black hover:text-[#F4F3EF] flex items-center justify-center transition-all duration-300 text-black">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Matte-Black Form Card */}
          <div className="w-full max-w-lg md:ml-auto bg-[#141414] p-8 md:p-10 rounded-[2.5rem] shadow-2xl flex flex-col text-left">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6 w-full">
              
              <div className="flex flex-col">
                <label className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full bg-[#1e1e1e] border border-neutral-800 rounded-2xl px-5 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 font-medium tracking-tight transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-[#1e1e1e] border border-neutral-800 rounded-2xl px-5 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 font-medium tracking-tight transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-2">Your Project</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project" 
                  className="w-full bg-[#1e1e1e] border border-neutral-800 rounded-2xl px-5 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 font-medium tracking-tight transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-white text-black font-black uppercase tracking-wider py-4 rounded-2xl text-center hover:bg-neutral-200 transition-colors duration-300 mt-4 text-sm"
              >
                Submit
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* ==============================================================
          PART 2: HIGH-END GRAPHIC FOOTER (Solid Black Theme)
          ============================================================== */}
      <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12 relative overflow-hidden w-full border-t border-neutral-900">
        
        {/* Main Footer Distribution Layout */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 relative z-10">
          
          {/* Brand Vision Text */}
          <div className="max-w-md text-left">
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] text-white">
              Bridging Code & Broadcast Operations.
            </h3>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">/Quick links</span>
            <div className="grid grid-cols-2 gap-2 max-w-xs">
              <a href="#" className="px-5 py-2 bg-[#141414] border border-neutral-800 hover:bg-white hover:text-black transition-colors duration-300 text-xs font-bold uppercase tracking-wider rounded-xl text-center">Home</a>
              <a href="#" className="px-5 py-2 bg-[#141414] border border-neutral-800 hover:bg-white hover:text-black transition-colors duration-300 text-xs font-bold uppercase tracking-wider rounded-xl text-center">About Me</a>
              <a href="#" className="px-5 py-2 bg-[#141414] border border-neutral-800 hover:bg-white hover:text-black transition-colors duration-300 text-xs font-bold uppercase tracking-wider rounded-xl text-center">Services</a>
              <a href="#" className="px-5 py-2 bg-[#141414] border border-neutral-800 hover:bg-white hover:text-black transition-colors duration-300 text-xs font-bold uppercase tracking-wider rounded-xl text-center">Works</a>
            </div>
          </div>

          {/* Direct Contact Links Column */}
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">/Contact</span>
            <a href="mailto:kishorshriwas007@gmail.com" className="text-lg md:text-xl font-black tracking-tight text-white hover:text-neutral-400 transition-colors">
              kishorshriwas007@gmail.com
            </a>
            <a href="tel:+917693003318" className="text-base font-bold text-neutral-400 mt-2 hover:text-white transition-colors">
              +91 7693003318
            </a>
            <span className="text-xs font-mono text-neutral-500 mt-1 uppercase">Indore, Madhya Pradesh</span>
          </div>

        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="max-w-6xl mx-auto mt-24 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold tracking-wider text-neutral-500 relative z-10">
          <div>© 2026 KISHOR KUMAR SHRIWAS. ALL RIGHTS RESERVED.</div>
          <div className="uppercase opacity-60">Indore Environment // Production Build</div>
        </div>

        {/* WATERMARK BACKGROUND LABEL */}
        {/* FIXED: Positioning adjusted to bottom-[-4vw] and color fixed to clear visual text-neutral-900/60 */}
        <div className="absolute bottom-[-4vw] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden leading-none">
          <span className="text-[17vw] font-black uppercase tracking-tighter text-neutral-900/60 block">
            KISHOR
          </span>
        </div>

      </footer>

    </div>
  );
}