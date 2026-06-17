
"use client";
import { motion } from "framer-motion";

export default function Projects() {
  // Aapke original projects ki real details yahan map kar di hain
  const projectList = [
    {
      id: 1,
      name: "IT Asset Management System",
      subtitle: "React.js • Node.js • MySQL / Enterprise Development",
      image: "/images/project1.jpg", 
    },
    {
      id: 2,
      name: "Kowa.com (Radio Drama)",
      subtitle: "Lead Role & Audio Edit / Akashvani Broadcast",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      name: "Rediscovering Bhopal",
      subtitle: "Podcast Production / Cultural Heritage Series",
      image: "/images/project3.jpg",
    },
    {
      id: 4,
      name: "Enterprise Database Management",
      subtitle: "Digital Workflows & CAS Records / Broadcast Infrastructure",
      image: "/images/project4.jpg",
    },
  ];

  return (
    <section className="py-24 bg-[#F4F3EF] px-6 md:px-12 text-gray-800">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER ROW: Left = Title, Right = Outlined Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
          <h2 className="text-5xl font-black text-black tracking-tighter uppercase m-0 p-0">
            Featured Projects
          </h2>
          <button className="border border-black text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-[#F4F3EF] transition-colors duration-300 flex items-center gap-1.5 shrink-0">
            View All Work <span className="text-sm leading-none">↗</span>
          </button>
        </div>

        {/* CSS GRID: 2 Columns, Gap-6 with complete flat minimal look */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectList.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer flex flex-col w-full"
            >
              {/* IMAGE CONTAINER: Fixed height 420px, rounded-2xl, overflow-hidden */}
              <div className="w-full h-[420px] rounded-2xl overflow-hidden relative bg-neutral-200">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                />
              </div>

              {/* DETAILS BELOW IMAGE: Clean typography without any boxes, borders or shadows */}
              <h3 className="text-2xl font-bold text-black mt-4 tracking-tight m-0 p-0">
                {project.name}
              </h3>
              <p className="text-sm text-[#888888] mt-1 font-medium tracking-tight m-0 p-0">
                {project.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}