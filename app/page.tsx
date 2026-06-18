"use client";
import { LayoutGroup } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills"; // 👈 FIXED: Yahan naam Skills kar diya hai
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Showcase from "../components/Showcase";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="bg-[#F4F3EF] min-h-screen relative selection:bg-black selection:text-[#F4F3EF]">
      <Navbar />
      
      <LayoutGroup>
        <Hero />
        <About />
        
        {/* 🔥 Yahan naya interactive skills universe render hoga */}
        <Skills /> 
        
        <Projects />
        <Experience />
        <Showcase />
        <Contact />
      </LayoutGroup>
    </main>
  );
}