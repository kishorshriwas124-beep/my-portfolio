"use client";
import { motion } from "framer-motion";
import { Code2, Mic, Server, Database, Radio, BrainCircuit, Headphones, MonitorPlay } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-[#0A192F] text-gray-300 px-6 relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00C2A8]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-2">
            <span className="text-[#00C2A8] font-mono text-xl">01.</span> About Me & My Toolkit
            <div className="h-px bg-gray-700 flex-grow ml-4"></div>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: The Merged Story */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-400">
              <p>
                Hello! I'm <span className="text-[#00C2A8] font-semibold">Kishor Kumar Shriwas</span>. Some people find stories in books, I find them in <span className="text-white">voices and code</span>.
              </p>
              <p>
                My journey is a rare blend of technology and broadcasting. As an <span className="text-white">MCA student at SGSITS Indore</span>, my tech foundation is built on developing full-stack enterprise solutions, such as an extensive IT Asset Management System using React and Node.js. Recently, I also achieved a perfect <span className="text-[#6C63FF] font-bold">300/300 score in AI & Machine Learning</span> from TiHAN, IIT Hyderabad.
              </p>
              <p>
                Parallel to my coding journey, I work as a <span className="text-white">Broadcast Assistant at Akashvani (Prasar Bharati)</span>. After completing a rigorous 120-hour Experiential Learning Programme (ELP), I've managed real-time digital workflows, anchored live OB coverages like International Yoga Day, performed the lead in the radio drama <em>"Kowa.com"</em>, and produced the youth podcast <em>"Rediscovering Bhopal"</em>.
              </p>
              <p>
                Whether it's writing secure RESTful APIs or mastering audio waveforms in Sony Sound Forge, my goal is to build content that informs and systems that perform.
              </p>
            </div>

            {/* Right Side: The Dual-Identity Tech Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* IT & Software Engineering Box */}
              <div className="bg-[#112240] p-6 rounded-2xl border border-gray-800 hover:border-[#00C2A8]/50 transition-colors shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Code2 className="w-20 h-20 text-[#00C2A8]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Server className="w-5 h-5 text-[#00C2A8]" /> Software Dev
                </h3>
                <ul className="space-y-4 font-mono text-sm">
                  <li className="flex items-center gap-3"><MonitorPlay className="w-4 h-4 text-[#00C2A8]"/> React.js & Next.js</li>
                  <li className="flex items-center gap-3"><Server className="w-4 h-4 text-[#00C2A8]"/> Node.js & Express</li>
                  <li className="flex items-center gap-3"><Database className="w-4 h-4 text-[#00C2A8]"/> MySQL Database</li>
                  <li className="flex items-center gap-3"><BrainCircuit className="w-4 h-4 text-[#00C2A8]"/> AI/ML Foundations</li>
                </ul>
              </div>

              {/* Broadcast & Media Box */}
              <div className="bg-[#112240] p-6 rounded-2xl border border-gray-800 hover:border-[#6C63FF]/50 transition-colors shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Radio className="w-20 h-20 text-[#6C63FF]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Mic className="w-5 h-5 text-[#6C63FF]" /> Broadcast Media
                </h3>
                <ul className="space-y-4 font-mono text-sm">
                  <li className="flex items-center gap-3"><Radio className="w-4 h-4 text-[#6C63FF]"/> Netia (Radio Assist)</li>
                  <li className="flex items-center gap-3"><Headphones className="w-4 h-4 text-[#6C63FF]"/> Sony Sound Forge Pro</li>
                  <li className="flex items-center gap-3"><Mic className="w-4 h-4 text-[#6C63FF]"/> Podcast Production</li>
                  <li className="flex items-center gap-3"><MonitorPlay className="w-4 h-4 text-[#6C63FF]"/> VN Editor & Canva</li>
                </ul>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}