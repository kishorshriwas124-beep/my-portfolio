"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function Experience() {
  // FIXED SEQUENCE: Latest to Oldest as requested
  const timeline = [
    {
      title: "Broadcast Assistant (IT Operations & Data)",
      org: "Akashvani Indore (Prasar Bharati)",
      date: "Jul 2025 — Present",
      desc: "Managing complex workflows, centralized databases (CAS), and real-time IT operations in a zero-margin-for-error broadcasting environment.",
      icon: <Briefcase className="w-5 h-5 text-black" />
    },
    {
      title: "Master of Computer Applications (MCA)",
      org: "SGSITS, Indore (M.P.)",
      date: "2023 — 2026",
      desc: "Focusing on Full-Stack Web Development, secure database management, and enterprise-level IT applications.",
      icon: <GraduationCap className="w-5 h-5 text-black" />
    },
    {
      title: "AI & Machine Learning (Perfect 300/300 Score)",
      org: "TiHAN, IIT Hyderabad",
      date: "May 2026",
      desc: "Successfully cleared the qualifier test for 'Artificial Intelligence and Machine Learning with Autonomous Vehicle Technology' with a 100% score.",
      icon: <Award className="w-5 h-5 text-black" />
    },
    {
      title: "120-Hour Experiential Learning Programme (ELP)",
      org: "NABM & Ministry of I&B, Govt. of India",
      date: "Apr 2025 — Jun 2025",
      desc: "Certified in Radio Production and Presentation. Scripted dramas (Kowa.com), produced podcasts (Rediscovering Bhopal), and covered live OB events.",
      icon: <Award className="w-5 h-5 text-black" />
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      org: "NICE Institute, Mandla",
      date: "2020 — 2023",
      desc: "Built a strong foundation in computer science and programming, securing 80.4%.",
      icon: <GraduationCap className="w-5 h-5 text-black" />
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // SPRING PHYSICS: Smooth tracking engine matching Hero style
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Line height scaling mapping
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    // 👇 YAHAN ID="experience" ADD KI HAI 👇
    <section id="experience" className="py-24 bg-[#F4F3EF] text-neutral-800 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          
          {/* HEADER ROW: Exact copy of Projects style header for clean symmetry */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
            <h2 className="text-5xl font-black text-black tracking-tighter uppercase m-0 p-0">
              Experience & Education
            </h2>
          </div>

          {/* TIMELINE CONTAINER */}
          <div ref={containerRef} className="relative pl-2 md:pl-6">
            
            {/* Pehli Line: Faint Minimal Track */}
            <div className="absolute left-[23px] md:left-[29px] top-6 bottom-0 w-[2px] bg-neutral-200 rounded-full"></div>
            
            {/* Dusri Line: Animated Solid Black Growing Line */}
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute left-[23px] md:left-[29px] top-6 w-[2px] bg-black rounded-full z-0"
            />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6 group z-10">
                  
                  {/* Minimal White Icon Box */}
                  <div className="relative z-20 w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 group-hover:border-black transition-colors duration-300 shadow-sm">
                    {item.icon}
                  </div>

                  {/* Elegant White Content Card */}
                  <div className="flex-1 bg-white p-6 rounded-2xl border border-neutral-200/80 group-hover:border-neutral-400 transition-colors duration-300 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h3 className="text-xl font-bold text-black tracking-tight">{item.title}</h3>
                      
                      {/* Premium Capsule Label for Dates */}
                      <span className="text-xs font-mono font-bold tracking-wider uppercase border border-neutral-200 px-3 py-1 rounded-full text-neutral-500 bg-neutral-50 whitespace-nowrap sm:self-center">
                        {item.date}
                      </span>
                    </div>
                    
                    {/* Organization Pop with your specific Red Color highlight */}
                    <h4 className="text-[15px] text-[#D6001C] mb-4 font-bold tracking-tight uppercase">
                      {item.org}
                    </h4>
                    
                    <p className="text-neutral-600 leading-relaxed text-sm font-medium tracking-tight">
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