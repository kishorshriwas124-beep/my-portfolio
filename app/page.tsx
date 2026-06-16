"use client";
import { LayoutGroup } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Showcase from "../components/Showcase";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="bg-[#F4F3EF] min-h-screen">
      <LayoutGroup>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Showcase />
        <Contact />
      </LayoutGroup>
    </main>
  );
}