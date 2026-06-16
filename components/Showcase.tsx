"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, ArrowLeft, FileText, Code2, Mic, Award, CheckCircle, Presentation, Image as ImageIcon } from "lucide-react";

export default function Showcase() {
  const [path, setPath] = useState([{ id: "ROOT", title: "Digital Archive" }]);

  const currentFolder = path[path.length - 1];

  // FIXED THEME ICONS: Sub-components and indicators updated to solid black text rendering matching premium look
  const fileSystem: Record<string, any[]> = {
    "ROOT": [
      { id: "CERTIFICATES", title: "Certificates", type: "folder", desc: "Govt. of India & Achievements", icon: <Award className="w-8 h-8 text-black" /> },
      { id: "TIHAN_IIT_HYDRABAD", title: "TiHAN IIT-H", type: "folder", desc: "AI/ML Qualifier & Resume", icon: <Award className="w-8 h-8 text-black" /> },
      { id: "EXPERIENCE", title: "Experience", type: "folder", desc: "Appreciation Letters & ELP", icon: <CheckCircle className="w-8 h-8 text-black" /> },
      { id: "REPORTS", title: "Reports", type: "folder", desc: "Internship & Summary Reports", icon: <FileText className="w-8 h-8 text-black" /> },
      { id: "MCA_PROJECTS", title: "MCA Projects", type: "folder", desc: "Tech & ITAM Reports", icon: <Code2 className="w-8 h-8 text-black" /> },
      { id: "RADIO_PROJECT", title: "Radio Projects", type: "folder", desc: "Scripts, Dramas & Podcasts", icon: <Mic className="w-8 h-8 text-black" /> }
    ],
    
    "CERTIFICATES": [
      { id: "GOVERMENT_CERTIFICATE", title: "GOVERMENT CERTIFICATE", type: "folder", desc: "My Govt. Certificates & Achievements", icon: <Folder className="w-8 h-8 text-black" /> }
    ],
    
    "GOVERMENT_CERTIFICATE": [
      { title: "Bharat Ranbhoomi", link: "/docs/CERTIFICATES/GOVERMENT_CERTIFICATE/Bharat_Ranbhoomi.jpg", type: "image", icon: <ImageIcon className="w-6 h-6 text-black" /> },
      { title: "Karate Certificate", link: "/docs/CERTIFICATES/GOVERMENT_CERTIFICATE/carate_Certificate.pdf", type: "pdf", icon: <FileText className="w-6 h-6 text-black" /> },
      { title: "ELP Cover Page", link: "/docs/CERTIFICATES/GOVERMENT_CERTIFICATE/ELP_cover_page.pdf", type: "pdf", icon: <FileText className="w-6 h-6 text-black" /> },
      { title: "Independence Day 2025", link: "/docs/CERTIFICATES/GOVERMENT_CERTIFICATE/Independence_2025.jpg", type: "image", icon: <ImageIcon className="w-6 h-6 text-black" /> },
      { title: "Nasha Mukt Bharat", link: "/docs/CERTIFICATES/GOVERMENT_CERTIFICATE/NASHA_MUKT_BHARAT.png", type: "image", icon: <ImageIcon className="w-6 h-6 text-black" /> },
      { title: "National Flag", link: "/docs/CERTIFICATES/GOVERMENT_CERTIFICATE/NATIONAL_FLAG.png", type: "image", icon: <ImageIcon className="w-6 h-6 text-black" /> },
      { title: "National Security", link: "/docs/CERTIFICATES/GOVERMENT_CERTIFICATE/NATIONAL_SECURITY.jpg", type: "image", icon: <ImageIcon className="w-6 h-6 text-black" /> },
      { title: "Women Shaping New India", link: "/docs/CERTIFICATES/GOVERMENT_CERTIFICATE/WOMEN_SHAPING.jpg", type: "image", icon: <ImageIcon className="w-6 h-6 text-black" /> },
      { title: "Young Leaders Dialogue", link: "/docs/CERTIFICATES/GOVERMENT_CERTIFICATE/YOUNG_LEADERS_DAILOGUE.png", type: "image", icon: <ImageIcon className="w-6 h-6 text-black" /> }
    ],

    "RADIO_PROJECT": [
      { id: "CHINTAN", title: "CHINTAN", type: "folder", desc: "Creative script & audio production", icon: <Folder className="w-8 h-8 text-black" /> },
      { id: "VANDANA", title: "VANDANA", type: "folder", desc: "Cultural broadcasting project", icon: <Folder className="w-8 h-8 text-black" /> },
      { id: "PODCAST", title: "PODCAST", type: "folder", desc: "Official youth podcast", icon: <Folder className="w-8 h-8 text-black" /> },
      { id: "KOWA", title: "KOWA.COM", type: "folder", desc: "Radio Drama", icon: <Folder className="w-8 h-8 text-black" /> },
      { id: "SABDANJALI", title: "SABDANJALI", type: "folder", desc: "Poetic Tribute", icon: <Folder className="w-8 h-8 text-black" /> },
      { id: "MAHILA_SANSAR", title: "MAHILA SANSAR", type: "folder", desc: "Women-centric broadcasting", icon: <Folder className="w-8 h-8 text-black" /> },
      { id: "YOGA_DAY", title: "YOGA DAY OB", type: "folder", desc: "Live outdoor broadcasting", icon: <Folder className="w-8 h-8 text-black" /> },
      { id: "NEWS_EDITING", title: "NEWS EDITING FM", type: "folder", desc: "News capsule editing", icon: <Folder className="w-8 h-8 text-black" /> },
      { id: "PARICHARCHA", title: "PARICHARCHA", type: "folder", desc: "Panel discussion", icon: <Folder className="w-8 h-8 text-black" /> }
    ],

    "CHINTAN": [
      { title: "Chintan (13 June 2026)", link: "/docs/RADIO_PROJECT/CHINTAN/CHINTAN_13June2026.pdf", type: "pdf", icon: <Mic className="w-6 h-6 text-black" /> },
      { title: "Veer Bhogya Vasundhra", link: "/docs/RADIO_PROJECT/CHINTAN/VEER_BHOGYA_VASUNDHRA.pdf", type: "pdf", icon: <Mic className="w-6 h-6 text-black" /> }
    ],
    "VANDANA": [ { title: "Vandana", link: "/docs/RADIO_PROJECT/VANDANA/vandana.pdf", type: "pdf", icon: <Mic className="w-6 h-6 text-black" /> } ],
    "PODCAST": [ { title: "Podcast", link: "/docs/RADIO_PROJECT/PODCAST/podcast.pdf", type: "pdf", icon: <Mic className="w-6 h-6 text-black" /> } ],
    "KOWA": [ { title: "Kowa.com Drama", link: "/docs/RADIO_PROJECT/KOWA.COM/kowa.pdf", type: "pdf", icon: <Mic className="w-6 h-6 text-black" /> } ],
    "SABDANJALI": [ { title: "Shabdanjaali", link: "/docs/RADIO_PROJECT/SABDANJALI/sabdanjaali.pdf", type: "pdf", icon: <Presentation className="w-6 h-6 text-black" /> } ],
    "MAHILA_SANSAR": [ { title: "Mahila Sansar", link: "/docs/RADIO_PROJECT/MAHILA SANSAR/mahila_sansar.pdf", type: "pdf", icon: <Mic className="w-6 h-6 text-black" /> } ],
    "YOGA_DAY": [ { title: "Yoga Day OB", link: "/docs/RADIO_PROJECT/YOGA DAY OUTDOOR BROADCASTING/yoga_day.jpg", type: "image", icon: <ImageIcon className="w-6 h-6 text-black" /> } ],
    "NEWS_EDITING": [ { title: "News Editing FM", link: "/docs/RADIO_PROJECT/NEWS EDITING FM/news_editing.pdf", type: "pdf", icon: <Mic className="w-6 h-6 text-black" /> } ],
    "PARICHARCHA": [ { title: "Paricharcha", link: "/docs/RADIO_PROJECT/PARICHARCHA/paricharcha.pdf", type: "pdf", icon: <Presentation className="w-6 h-6 text-black" /> } ],

    "TIHAN_IIT_HYDRABAD": [
      { title: "AI & ML Certificate", link: "/docs/TIHAN_IIT_HYDRABAD/AI_ML.jpeg", type: "image", icon: <ImageIcon className="w-6 h-6 text-black" /> },
      { title: "Main Test Report Card", link: "/docs/TIHAN_IIT_HYDRABAD/qualifier_test_report.png", type: "image", icon: <ImageIcon className="w-6 h-6 text-black" /> },
      { title: "Detailed Test Report", link: "/docs/TIHAN_IIT_HYDRABAD/qualifier_test_report_Kishor_Kumar_Shriwas.png", type: "image", icon: <ImageIcon className="w-6 h-6 text-black" /> }
    ],

    "EXPERIENCE": [
      { title: "Akashvani Bhopal Appreciation", link: "/docs/EXPERIENCE/APPRECIATION_BHOPAL.pdf", type: "pdf", icon: <CheckCircle className="w-6 h-6 text-black" /> },
      { title: "Akashvani Indore Appreciation", link: "/docs/EXPERIENCE/APPRECIATION_INDORE.pdf", type: "pdf", icon: <CheckCircle className="w-6 h-6 text-black" /> },
      { title: "120-Hr ELP Certificate", link: "/docs/EXPERIENCE/Kishor_ELP_Certificate_Experience.pdf", type: "pdf", icon: <FileText className="w-6 h-6 text-black" /> }
    ],
    "REPORTS": [
      { title: "3-Page Summary Report", link: "/docs/REPORTS/3_page_report_Akashvani.pdf", type: "pdf", icon: <FileText className="w-6 h-6 text-black" /> },
      { title: "62-Page Internship Report", link: "/docs/REPORTS/Kishor_Internship_Report_Akashvani.pdf", type: "pdf", icon: <FileText className="w-6 h-6 text-black" /> }
    ],
    "MCA_PROJECTS": [
      { title: "IT Asset Management Enterprise System", link: "/docs/MCA_PROJECTS/itam-report.pdf", type: "pdf", icon: <Code2 className="w-6 h-6 text-black" /> }
    ]
  };

  const handleFolderClick = (id: string, title: string) => {
    setPath([...path, { id, title }]);
  };

  const handleBack = () => {
    if (path.length > 1) {
      setPath(path.slice(0, -1));
    }
  };

  const itemsToDisplay = fileSystem[currentFolder.id] || [];

  return (
    <section className="py-24 bg-[#F4F3EF] text-neutral-800 px-6 md:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER ROW: Clean uppercase layout matching Projects & Experience headers */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-6">
            <h2 className="text-5xl font-black text-black tracking-tighter uppercase m-0 p-0">
              Digital Archive & Showcase
            </h2>
          </div>
          <p className="text-neutral-600 mb-12 text-lg font-semibold tracking-tight max-w-2xl leading-relaxed">
            Explore my digital workspace. Navigate through the folders below to view certificates, reports, and project files.
          </p>
        </motion.div>

        {/* Back Button Area matching minimal capsule borders */}
        {path.length > 1 && (
          <div className="flex items-center gap-4 mb-10">
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider border border-neutral-200 hover:border-black transition-colors duration-300 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <h3 className="text-2xl font-black text-black tracking-tight flex items-center gap-2 uppercase">
              <Folder className="w-6 h-6 text-black" /> 
              {currentFolder.title}
            </h3>
          </div>
        )}

        {/* Animated Folders/Files Grid with Flat Cream Minimal Card Blocks */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentFolder.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {itemsToDisplay.map((item, index) => {
              if (item.type === "folder") {
                return (
                  <div
                    key={index}
                    onClick={() => handleFolderClick(item.id, item.title)}
                    className="group cursor-pointer p-6 bg-white rounded-2xl border border-neutral-200/80 hover:border-black transition-all duration-300 shadow-sm flex items-center gap-4"
                  >
                    {/* Neutral inner icon wrapper matching the system canvas */}
                    <div className="w-16 h-16 rounded-xl bg-[#F4F3EF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-black tracking-tight group-hover:text-black transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-500 font-medium tracking-tight mt-0.5 leading-tight">{item.desc}</p>
                    </div>
                  </div>
                );
              } 
              else {
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-5 bg-white rounded-2xl border border-neutral-200/80 hover:border-black transition-all duration-300 shadow-sm flex items-center gap-4 text-left"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#F4F3EF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-md font-bold text-neutral-800 tracking-tight group-hover:text-black transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs font-mono font-black text-neutral-400 mt-1 uppercase tracking-wider">
                        {item.type} FILE
                      </p>
                    </div>
                  </a>
                );
              }
            })}

            {itemsToDisplay.length === 0 && (
              <p className="text-neutral-400 font-medium italic col-span-full text-left">No files found in this folder.</p>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}