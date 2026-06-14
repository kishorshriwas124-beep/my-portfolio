import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Showcase from "../components/Showcase";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0A192F] min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Showcase />
      <Contact />
    </main>
  );
}