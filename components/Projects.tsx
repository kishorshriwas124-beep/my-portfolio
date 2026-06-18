"use client";
import { motion } from "framer-motion";

interface Tech {
  name: string;
  icon: string;
}

interface Project {
  id: number;
  name: string;
  description: string[];
  tech: Tech[];
  image: string;
}

export default function Projects() {
  const projectList: Project[] = [
    {
      id: 1,
      name: "IT Asset Management System",
      description: [
        "Developed a robust full-stack dashboard for tracking enterprise hardware assets.",
        "Implemented real-time status updates using React and Node.js.",
        "Optimized database queries in MySQL for high-performance data retrieval."
      ],
      tech: [
        { name: "REACT", icon: "/icons/react.jpg" },
        { name: "NODEJS", icon: "/icons/nodejs.jpg" },
        { name: "MYSQL", icon: "/icons/mysql.jpg" },
        { name: "TAILWIND", icon: "/icons/tailwind.jpg" }
      ],
      image: "/images/project1.jpg", 
    },
    {
      id: 2,
      name: "Kowa.com (Radio Drama)",
      description: [
        "Led audio production and post-processing for a national radio broadcast.",
        "Managed sound engineering workflows for complex multi-track drama.",
        "Collaborated with Akashvani teams for seamless distribution."
      ],
      tech: [
        { name: "SOUND FORGE", icon: "/icons/forge.jpg" },
        { name: "NETIA", icon: "/icons/netia.jpg" },
        { name: "AIR DDO", icon: "/icons/airddo.jpg" }
      ],
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      name: "Rediscovering Bhopal",
      description: [
        "Produced an immersive podcast series exploring cultural heritage sites.",
        "Managed field recording, sound design, and narrative structuring.",
        "Ensured high-quality audio mastering for digital streaming platforms."
      ],
      tech: [
        { name: "PREMIERE", icon: "/icons/premiere.jpg" },
        { name: "SOUND FORGE", icon: "/icons/forge.jpg" },
        { name: "NETIA", icon: "/icons/netia.jpg" }
      ],
      image: "/images/project3.jpg",
    },
    {
      id: 4,
      name: "Enterprise Database Management",
      description: [
        "Streamlined digital workflows for broadcast infrastructure records.",
        "Automated CAS data entry to reduce administrative overhead.",
        "Managed large-scale database systems with focus on data integrity."
      ],
      tech: [
        { name: "ABS", icon: "/icons/abs.jpg" },
        { name: "WORKFLOWS", icon: "/icons/workflows.jpg" },
        { name: "MANAGEMENT", icon: "/icons/management.jpg" },
        { name: "CAS PORTAL", icon: "/icons/cas.jpg" }
      ],
      image: "/images/project4.jpg",
    },
  ];

  return (
    <section className="py-24 bg-[#F4F3EF] px-6 md:px-12 text-gray-800">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-5xl font-black text-black tracking-tighter uppercase mb-16">
          Featured Projects
        </h2>

        <div className="flex flex-col gap-16">
          {projectList.map((project: Project) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-black/5"
            >
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                {/* Image Section */}
                <div className="flex-1 w-full">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-[300px] object-cover rounded-2xl shadow-inner" 
                  />
                </div>

                {/* Text Section */}
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl font-black text-black tracking-tighter">
                    {project.name}
                  </h3>

                  <ul className="space-y-3 text-base text-[#333] leading-relaxed">
                    {project.description.map((point: string, i: number) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-black font-black mt-1">+</span> 
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {project.tech.map((t: Tech) => (
                      <div 
                        key={t.name} 
                        className="flex items-center gap-3 text-black text-[13px] px-4 py-2 rounded-xl border border-gray-300 bg-transparent hover:border-black transition-all cursor-default"
                      >
                        <img src={t.icon} alt={t.name} className="w-6 h-6 object-contain" />
                        <span className="font-bold uppercase tracking-widest">{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}