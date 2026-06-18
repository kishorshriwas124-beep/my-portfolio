"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// 3D elements ko extend karna
extend({ Group: THREE.Group, Mesh: THREE.Mesh });

const SKILLS = [
  { name: "React", icon: "https://skillicons.dev/icons?i=react" },
  { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
  { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
  { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
  { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
  { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
  { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
  { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
  { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
  { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
  { name: "Android Studio", icon: "https://skillicons.dev/icons?i=androidstudio" },
  { name: "After Effects", icon: "https://skillicons.dev/icons?i=ae" },
  { name: "Premiere Pro", icon: "https://skillicons.dev/icons?i=pr" },
  { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
  { name: "Notion", icon: "https://skillicons.dev/icons?i=notion" },
  { name: "DaVinci", icon: "/icons/davinci.png" },
  { name: "Sound Forge", icon: "/icons/soundforge.png" },
  { name: "Netia", icon: "/icons/netia.png" },
  { name: "MS Office", icon: "/icons/msoffice.png" }
];

function GlobeNodes() {
  const groupRef = useRef<THREE.Group>(null);

  const points = useMemo(() => {
    const total = SKILLS.length;
    const radius = 4.2;
    return SKILLS.map((skill, i) => {
      const phi = Math.acos(1 - 2 * (i + 0.5) / total);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        ...skill,
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.cos(phi),
        z: radius * Math.sin(phi) * Math.sin(theta),
      };
    });
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef as any}>
      <mesh>
        <icosahedronGeometry args={[2.8, 3]} />
        <meshBasicMaterial color="#111111" wireframe={true} transparent={true} opacity={0.1} />
      </mesh>
      
      {points.map((skill, i) => (
        <group key={i} position={[skill.x, skill.y, skill.z] as [number, number, number]}>
          <Html center>
            <div 
              className="bg-white p-2 rounded-xl border border-gray-200 shadow-lg flex flex-col items-center justify-center transition-all duration-300"
              style={{ 
                width: "55px", 
                height: "55px",
                opacity: 1, // Fixed: Sab hamesha dikhenge
                transform: 'scale(1)' // Fixed: Sabka size same rahega
              }}
            >
              <img src={skill.icon} alt={skill.name} className="w-7 h-7 object-contain" />
              <span className="mt-1 font-mono text-[6px] font-bold text-gray-700 uppercase text-center">{skill.name}</span>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

export default function Skills() {
  return (
    <section className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden" style={{ background: "#F4F3EF" }}>
      <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="absolute top-24 left-12 z-20">
        <h2 className="text-[28px] font-bold text-black uppercase font-mono"> Tech Stack</h2>
      </motion.div>
      <div className="w-full h-full cursor-grab">
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <GlobeNodes />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </section>
  );
}