"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const engineerCards = [
  {
    number: "01",
    tag: "FULL-STACK",
    title: "Web Development",
    desc: "React.js · Node.js · Express · MySQL · REST APIs · JWT Auth",
    detail: "From schema design to deployment — I build dashboards and internal tools that replace spreadsheets with real-time, queryable systems.",
    color: "#6C63FF",
    bg: "#0A0A1A",
  },
  {
    number: "02",
    tag: "DATA",
    title: "Database Systems",
    desc: "MySQL · Schema Design · Data Integrity · Records Management",
    detail: "Structuring and maintaining databases where accuracy isn't optional — every entry has to be correct, traceable, and fast to retrieve.",
    color: "#00C2A8",
    bg: "#001A17",
  },
  {
    number: "03",
    tag: "INFRASTRUCTURE",
    title: "Systems & Networking",
    desc: "Network Architecture · Wi-Fi 6/7 · Hardware Diagnostics · Sys Admin",
    detail: "Comfortable below the application layer too — configuring networks, benchmarking hardware, and keeping systems running when there's no room for downtime.",
    color: "#3B82F6",
    bg: "#000A1A",
  },
  {
    number: "04",
    tag: "AI / ML",
    title: "Machine Learning",
    desc: "Autonomous Systems Track · IIT Hyderabad · 300/300",
    detail: "Qualified IIT Hyderabad's AI & Autonomous Vehicle Technology assessment with a perfect score — currently deepening this into applied projects.",
    color: "#A78BFA",
    bg: "#0D0A1A",
  },
  {
    number: "05",
    tag: "MINDSET",
    title: "Debugging Under Pressure",
    desc: "Failure-mode Thinking · Root-cause Analysis · Calm Under Load",
    detail: "Years of live broadcast taught me to think about what breaks before what's new. I bring that same instinct to chasing down bugs in production.",
    color: "#F97316",
    bg: "#1A0E00",
  },
  {
    number: "06",
    tag: "WORKFLOW",
    title: "Dev Environment",
    desc: "Git · GitHub · VS Code · Version Control · CLI",
    detail: "Clean commits, proper branching, and a setup tuned for speed — the unglamorous habits that keep a codebase sane over time.",
    color: "#64748B",
    bg: "#0A0E14",
  },
];

const mediaCards = [
  {
    number: "07",
    tag: "ON-AIR",
    title: "Live Announcing",
    desc: "Udhghoshak · Live Mic · Scripted & Unscripted Delivery",
    detail: "Trained to hold a live broadcast — clear, composed delivery on-air, where there's no take two and no editing safety net.",
    color: "#D6001C",
    bg: "#1A0005",
  },
  {
    number: "08",
    tag: "VOICE",
    title: "Voice Over Artist",
    desc: "Character Voicing · Narration · Tone Modulation",
    detail: "Lending voice to scripts beyond the news desk — narration and character work recorded and mixed for broadcast-ready delivery.",
    color: "#06B6D4",
    bg: "#00141A",
  },
  {
    number: "09",
    tag: "WRITING",
    title: "Scriptwriting",
    desc: "Radio Drama · Segment Scripts · Narrative Structuring",
    detail: "Writing for the ear is its own craft — wrote scripts for on-air segments and a full radio drama, built to be heard, not read.",
    color: "#22C55E",
    bg: "#001A07",
  },
  {
    number: "10",
    tag: "FIELD",
    title: "OB & Event Coverage",
    desc: "Outdoor Broadcast · Live Interviews · On-ground Reporting",
    detail: "Covered live events on location, including interviews with a Padma Shri awardee and industry professionals — reporting in real time, no retakes.",
    color: "#EAB308",
    bg: "#1A1400",
  },
  {
    number: "11",
    tag: "AUDIO",
    title: "Sound Production",
    desc: "Sony Sound Forge · Netia · Multi-track Mixing & Mastering",
    detail: "Recording, editing, and mastering audio for broadcast — built to a standard where it has to sound right the first time it airs.",
    color: "#F59E0B",
    bg: "#1A1000",
  },
  {
    number: "12",
    tag: "CONTENT",
    title: "Video & Design",
    desc: "CapCut · VN Editor · Clipchamp · Canva · Graphic Design",
    detail: "Short-form video editing, broadcast-quality audio cleanup, social media graphic design under real deadline pressure.",
    color: "#EC4899",
    bg: "#1A0010",
  },
];

interface WhatIDoProps {
  realSrc?: string;
  illustratedSrc?: string;
  maxShiftPixels?: number;
}

export default function WhatIDo({
  realSrc = "/images/profile.jpg",
  illustratedSrc = "/images/profile-painted.png",
  maxShiftPixels = 90
}: WhatIDoProps) {

  const sectionRef = useRef<HTMLDivElement>(null);
  const [percentX, setPercentX] = useState<number>(50);
  const [activeTab, setActiveTab] = useState<"none" | "engineer" | "media">("none");
  const [pinnedTab, setPinnedTab] = useState<"none" | "engineer" | "media">("none");
  const pinnedTabRef = useRef<"none" | "engineer" | "media">("none");
  const groupHoveredRef = useRef<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [cardTilt, setCardTilt] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const progress = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
    setPercentX(progress);
  };

  const handleMouseLeave = () => setPercentX(50);

  const leftTextOpacity = activeTab === "engineer"
    ? 1
    : Math.max(0, Math.min(1, (75 - percentX) / 25));
  const rightTextOpacity = activeTab === "media"
    ? 1
    : Math.max(0, Math.min(1, (percentX - 25) / 25));
  const translateX = ((50 - percentX) / 50) * maxShiftPixels;

  const activeCards = activeTab === "engineer" ? engineerCards : mediaCards;

  // 3D tilt handler for cards
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 12; // max 12deg
    const rotateX = -((y - centerY) / centerY) * 12;
    setCardTilt({ x: rotateX, y: rotateY });
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(null);
    setCardTilt(null);
  };

  return (
    <section
      ref={sectionRef}
      id="what-i-do"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-24 bg-[#F4F3EF] px-6 md:px-12 text-black border-t border-neutral-200/50 overflow-hidden relative select-none cursor-default"
    >
      <div className="max-w-7xl mx-auto min-h-[550px] flex flex-col items-center justify-center relative z-10">

        {/* Section Heading */}
        <div className="w-full">
          <h2 className="text-5xl font-black text-black tracking-tighter uppercase mb-16 pl-4 md:pl-16">
            What I Do
          </h2>
        </div>

        {/* Hover group: wraps text + cards so moving cursor between them doesn't close the panel */}
        <div
          onMouseEnter={() => {
            groupHoveredRef.current = true;
          }}
          onMouseLeave={() => {
            groupHoveredRef.current = false;
            window.setTimeout(() => {
              if (!groupHoveredRef.current) {
                setActiveTab(pinnedTabRef.current);
              }
            }, 60);
          }}
          className="w-full"
        >

        {/* Main 3-Column Split Layout — bilkul original */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full">

          {/* LEFT — Software Engineer */}
          <div
            onMouseEnter={() => setActiveTab("engineer")}
            onClick={() => {
              const next = pinnedTab === "engineer" ? "none" : "engineer";
              setPinnedTab(next);
              pinnedTabRef.current = next;
              setActiveTab(next);
            }}
            style={{
              opacity: leftTextOpacity,
              transform: `scale(${0.95 + (leftTextOpacity * 0.05)})`,
              transition: "opacity 400ms cubic-bezier(0.16, 1, 0.3, 1), transform 400ms cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            className={`flex flex-col items-start text-left order-2 md:order-1 h-full justify-center pl-4 md:pl-16 pointer-events-auto cursor-pointer p-4 rounded-2xl transition-colors will-change-[opacity,transform] ${activeTab === "engineer" ? "bg-black/5" : "hover:bg-black/[0.02]"}`}
          >
            <h3 className="text-5xl md:text-[64px] font-black tracking-tighter lowercase leading-none mb-4 text-black">
              build
            </h3>
            <p className="text-sm md:text-base font-semibold text-neutral-700 tracking-tight leading-relaxed max-w-[290px]">
              Five things I've learned to do well — from writing the code to keeping the systems under it alive.
            </p>
            <span className="flex items-center gap-1.5 text-xs font-bold text-black mt-3 lowercase tracking-wider">
              {pinnedTab === "engineer" ? (
                <>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-black" />
                  pinned open · tap to close
                </>
              ) : (
                <>
                  explore
                  <span className="inline-block transition-transform group-hover:translate-x-1">↓</span>
                </>
              )}
            </span>
          </div>

          {/* CENTER — Photo — bilkul original */}
          <div className="flex justify-center order-1 md:order-2 py-4 pointer-events-none">
            <div
              style={{
                transform: `translateX(${translateX}px) translateZ(0)`,
                transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)"
              }}
              className="relative w-[300px] h-[400px] md:w-[340px] md:h-[460px] shrink-0 bg-neutral-200 rounded-[3rem] overflow-hidden shadow-2xl border border-neutral-300 transform-gpu will-change-transform"
            >
              <div className="absolute inset-0 w-full h-full opacity-100 transform-gpu">
                <img
                  src={realSrc}
                  alt="Kishor Real Identity"
                  className="w-full h-full object-cover filter contrast-105 brightness-100"
                />
              </div>
              <div
                style={{
                  clipPath: `polygon(0 0, ${percentX}% 0, ${percentX}% 100%, 0 100%)`,
                  transition: "clip-path 400ms cubic-bezier(0.16, 1, 0.3, 1)"
                }}
                className="absolute inset-0 w-full h-full transform-gpu will-change-[clip-path]"
              >
                <img
                  src={illustratedSrc}
                  alt="Kishor Painted Identity"
                  className="w-full h-full object-cover filter contrast-110 brightness-100"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — Digital Media */}
          <div
            onMouseEnter={() => setActiveTab("media")}
            onClick={() => {
              const next = pinnedTab === "media" ? "none" : "media";
              setPinnedTab(next);
              pinnedTabRef.current = next;
              setActiveTab(next);
            }}
            style={{
              opacity: rightTextOpacity,
              transform: `scale(${0.95 + (rightTextOpacity * 0.05)})`,
              transition: "opacity 400ms cubic-bezier(0.16, 1, 0.3, 1), transform 400ms cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            className={`flex flex-col items-start md:items-end text-left md:text-right order-3 h-full justify-center pr-4 md:pr-16 pointer-events-auto cursor-pointer p-4 rounded-2xl transition-colors will-change-[opacity,transform] ${activeTab === "media" ? "bg-black/5" : "hover:bg-black/[0.02]"}`}
          >
            <h3 className="text-5xl md:text-[64px] font-black text-black tracking-tighter lowercase leading-none mb-4 font-mono">
              broadcast
            </h3>
            <p className="text-sm md:text-base font-semibold text-neutral-700 tracking-tight leading-relaxed max-w-[290px]">
              Five things I've learned to do well — from the script on the desk to the voice on air.
            </p>
            <span className="flex items-center gap-1.5 text-xs font-bold text-black mt-3 lowercase tracking-wider">
              {pinnedTab === "media" ? (
                <>
                  pinned open · tap to close
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-black" />
                </>
              ) : (
                <>
                  <span className="inline-block transition-transform group-hover:translate-x-1">↓</span>
                  explore
                </>
              )}
            </span>
          </div>

        </div>

        {/* CARDS — bigger size + 3D motion graphics */}
        <div className="w-full mt-16" style={{ perspective: "1600px" }}>
          <AnimatePresence mode="wait">
            {activeTab !== "none" && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                {activeCards.map((card, i) => {
                  const isHovered = hoveredCard === card.number;
                  const tiltX = isHovered && cardTilt ? cardTilt.x : 0;
                  const tiltY = isHovered && cardTilt ? cardTilt.y : 0;

                  return (
                    <motion.div
                      key={card.number}
                      initial={{ opacity: 0, y: 60, rotateX: -20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                      transition={{
                        delay: i * 0.12,
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      onMouseEnter={() => setHoveredCard(card.number)}
                      onMouseLeave={handleCardMouseLeave}
                      onMouseMove={handleCardMouseMove}
                      className="relative rounded-3xl p-8 flex flex-col justify-between cursor-default border transition-colors duration-300"
                      style={{
                        background: `linear-gradient(155deg, ${card.bg} 0%, ${card.bg} 60%, ${card.color}10 100%)`,
                        borderColor: isHovered ? `${card.color}90` : `${card.color}25`,
                        minHeight: "300px",
                        transformStyle: "preserve-3d",
                        transform: isHovered
                          ? `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05) translateZ(20px)`
                          : `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)`,
                        transition: isHovered
                          ? "transform 80ms linear, box-shadow 300ms ease, border-color 300ms ease"
                          : "transform 500ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 400ms ease, border-color 300ms ease",
                        boxShadow: isHovered
                          ? `${-tiltY * 1.5}px ${tiltX * 1.5 + 25}px 50px -10px ${card.color}45, 0 0 0 1px ${card.color}30`
                          : `0 10px 30px -15px ${card.color}15`,
                      }}
                    >
                      {/* Glow orb that follows depth */}
                      <div
                        className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl transition-opacity duration-300"
                        style={{
                          background: card.color,
                          opacity: isHovered ? 0.25 : 0.08,
                          transform: "translateZ(-10px)",
                        }}
                      />

                      {/* Tag + Number */}
                      <div
                        className="flex items-start justify-between mb-5"
                        style={{ transform: isHovered ? "translateZ(40px)" : "translateZ(0px)", transition: "transform 300ms ease" }}
                      >
                        <span
                          className="text-xs font-black tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border"
                          style={{
                            color: card.color,
                            borderColor: `${card.color}40`,
                            background: `${card.color}15`,
                          }}
                        >
                          {card.tag}
                        </span>
                        <span
                          className="text-4xl font-black opacity-10"
                          style={{ color: card.color }}
                        >
                          {card.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-3xl md:text-[32px] font-black tracking-tighter uppercase leading-none mb-4"
                        style={{
                          color: card.color,
                          transform: isHovered ? "translateZ(50px)" : "translateZ(0px)",
                          transition: "transform 300ms ease",
                        }}
                      >
                        {card.title}
                      </h3>

                      {/* Desc */}
                      <p
                        className="text-sm font-mono text-neutral-300 leading-relaxed mb-4"
                        style={{ transform: isHovered ? "translateZ(30px)" : "translateZ(0px)", transition: "transform 300ms ease" }}
                      >
                        {card.desc}
                      </p>

                      {/* Detail on hover */}
                      <motion.p
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          y: isHovered ? 0 : 6,
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-sm text-neutral-200 leading-relaxed"
                        style={{ transform: isHovered ? "translateZ(25px)" : "translateZ(0px)" }}
                      >
                        {card.detail}
                      </motion.p>

                      {/* Bottom progress bar */}
                      <div
                        className="h-[3px] rounded-full mt-5"
                        style={{
                          background: `${card.color}25`,
                          transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
                          transition: "transform 300ms ease",
                        }}
                      >
                        <motion.div
                          animate={{
                            width: isHovered ? "100%" : "25%",
                          }}
                          transition={{ duration: 0.35 }}
                          className="h-full rounded-full"
                          style={{ background: card.color }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        </div>
        {/* end hover group */}

      </div>
    </section>
  );
}