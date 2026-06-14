"use client";
import { motion } from "framer-motion";
import { Code2, Mic, Server, Radio, Database } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-24 bg-[#112240] px-6 text-gray-300">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-2">
            <span className="text-[#00C2A8] font-mono text-xl">02.</span> Featured Projects
            <div className="h-px bg-gray-700 flex-grow ml-4"></div>
          </h2>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Tech Project - Spans 2 columns */}
            <motion.div whileHover={{ y: -5 }} className="col-span-1 md:col-span-2 p-8 rounded-3xl bg-[#0A192F] border border-gray-800 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Code2 className="w-32 h-32 text-[#00C2A8]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">IT Asset Management System</h3>
              <p className="text-[#00C2A8] font-mono text-sm mb-5">React.js • Node.js • MySQL</p>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                A full-stack enterprise web application built to replace manual spreadsheet-based tracking. Features include automated workflows, assignment tracking, and secure dashboard analytics.
              </p>
            </motion.div>

            {/* Media Project 1 - Spans 1 column */}
            <motion.div whileHover={{ y: -5 }} className="col-span-1 p-8 rounded-3xl bg-[#0A192F] border border-gray-800 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Radio className="w-24 h-24 text-[#6C63FF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Kowa.com (Radio Drama)</h3>
              <p className="text-[#6C63FF] font-mono text-sm mb-4">Lead Role & Audio Edit</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                A thought-provoking radio drama broadcasted on Akashvani, highlighting how digital filters clash with human reality.
              </p>
            </motion.div>

            {/* Media Project 2 - Spans 1 column */}
            <motion.div whileHover={{ y: -5 }} className="col-span-1 p-8 rounded-3xl bg-[#0A192F] border border-gray-800 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Mic className="w-24 h-24 text-[#6C63FF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rediscovering Bhopal</h3>
              <p className="text-[#6C63FF] font-mono text-sm mb-4">Podcast Production</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Produced and managed a youth-centric podcast series focusing on the rich cultural heritage of Bhopal.
              </p>
            </motion.div>

            {/* Tech Project 2 - Spans 2 columns */}
            <motion.div whileHover={{ y: -5 }} className="col-span-1 md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-[#112240] to-[#0A192F] border border-gray-800 shadow-xl flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <Server className="w-8 h-8 text-[#00C2A8]" />
                <Database className="w-8 h-8 text-[#00C2A8]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Enterprise Database Management</h3>
              <p className="text-gray-400 max-w-lg leading-relaxed">
                Specialized experience in managing digital workflows and maintaining high-integrity database records (CAS) in a zero-margin-for-error government broadcast environment.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}