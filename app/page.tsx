"use client";
import { LayoutGroup } from "framer-motion";
import Navbar from "../components/Navbar"; // Navbar yahan import ho gaya
import Hero from "../components/Hero";
import Skills from "../components/Skills"; 
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Showcase from "../components/Showcase";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="bg-[#F4F3EF] min-h-screen relative selection:bg-black selection:text-[#F4F3EF]">
      <Navbar /> {/*Navbar ab poori website par fixed rahega*/}
      
      <LayoutGroup>
        <Hero />
        <Skills /> 
        <Projects />
        <Experience />
        <Showcase />
        <Contact />
      </LayoutGroup>
    </main>
  );
}