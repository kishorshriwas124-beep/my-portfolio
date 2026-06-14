"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function Experience() {
  const timeline = [
    {
      title: "Broadcast Assistant (IT Operations & Data)",
      org: "Akashvani Indore (Prasar Bharati)",
      date: "Jul 2025 — Present",
      desc: "Managing complex workflows, centralized databases (CAS), and real-time IT operations in a zero-margin-for-error broadcasting environment.",
      icon: <Briefcase className="w-5 h-5 text-[#6C63FF]" />
    },
    {
      title: "Master of Computer Applications (MCA)",
      org: "SGSITS, Indore (M.P.)",
      date: "2023 — 2026",
      desc: "Focusing on Full-Stack Web Development, secure database management, and enterprise-level IT applications.",
      icon: <GraduationCap className="w-5 h-5 text-[#00C2A8]" />
    },
    {
      title: "AI & Machine Learning (Perfect 300/300 Score)",
      org: "TiHAN, IIT Hyderabad",
      date: "May 2026",
      desc: "Successfully cleared the qualifier test for 'Artificial Intelligence and Machine Learning with Autonomous Vehicle Technology' with a 100% score.",
      icon: <Award className="w-5 h-5 text-[#6C63FF]" />
    },
    {
      title: "120-Hour Experiential Learning Programme (ELP)",
      org: "NABM & Ministry of I&B, Govt. of India",
      date: "Apr 2025 — Jun 2025",
      desc: "Certified in Radio Production and Presentation. Scripted dramas (Kowa.com), produced podcasts (Rediscovering Bhopal), and covered live OB events.",
      icon: <Award className="w-5 h-5 text-[#00C2A8]" />
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      org: "NICE Institute, Mandla",
      date: "2020 — 2023",
      desc: "Built a strong foundation in computer science and programming, securing 80.4%.",
      icon: <GraduationCap className="w-5 h-5 text-[#6C63FF]" />
    }
  ];

  // 1. Scroll track karne ke liye ref aur hook lagaya hai
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"], // Jab timeline center mein aayegi tab animation shuru/khatam hoga
  });

  // 2. Scroll percentage ko line ki height mein convert kiya hai (0% se 100% tak)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-[#0A192F] text-gray-300 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 flex items-center gap-2">
            <span className="text-[#00C2A8] font-mono text-xl">03.</span> Experience & Education
            <div className="h-px bg-gray-700 flex-grow ml-4"></div>
          </h2>

          {/* 3. Naya Container jisme background line aur growing line dono hongi */}
          <div ref={containerRef} className="relative">
            
            {/* Pehli Line: Faint Gray Track (Hamesha dikhegi) */}
            <div className="absolute left-[23px] top-6 bottom-0 w-[2px] bg-gray-800 rounded-full"></div>
            
            {/* Dusri Line: Animated Glowing Line (Scroll ke sath badhegi) */}
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute left-[23px] top-6 w-[2px] bg-gradient-to-b from-[#00C2A8] via-[#6C63FF] to-transparent shadow-[0_0_15px_#00C2A8] rounded-full z-0"
            />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6 group z-10">
                  
                  {/* Icon Box */}
                  <div className="relative z-20 w-12 h-12 rounded-full bg-[#112240] border border-gray-700 flex items-center justify-center shrink-0 group-hover:border-[#00C2A8] transition-colors duration-300 shadow-lg">
                    {item.icon}
                  </div>

                  {/* Content Box (Tumhara data ekdum same hai) */}
                  <div className="flex-1 bg-[#112240] p-6 rounded-2xl border border-gray-800 group-hover:border-gray-600 transition-colors duration-300 shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <span className="text-sm font-mono text-[#00C2A8] bg-[#00C2A8]/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>
                    <h4 className="text-lg text-gray-400 mb-4 font-semibold">{item.org}</h4>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}