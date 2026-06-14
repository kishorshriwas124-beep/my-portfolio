"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-[#112240] text-gray-300 px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#6C63FF]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center justify-center gap-2">
            <span className="text-[#00C2A8] font-mono text-xl">04.</span> What's Next?
          </h2>
          <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Get In Touch</h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. 
            Currently open for new opportunities in Full-Stack Development and Broadcast Media Operations!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-14">
            <a href="mailto:kishorshriwas007@gmail.com" className="flex items-center gap-3 text-lg hover:text-[#00C2A8] transition-colors">
              <Mail className="w-6 h-6 text-[#00C2A8]" />
              kishorshriwas007@gmail.com
            </a>
            <a href="tel:+917693003318" className="flex items-center gap-3 text-lg hover:text-[#00C2A8] transition-colors">
              <Phone className="w-6 h-6 text-[#00C2A8]" />
              +91 7693003318
            </a>
            <div className="flex items-center gap-3 text-lg">
              <MapPin className="w-6 h-6 text-[#00C2A8]" />
              Indore, Madhya Pradesh
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:kishorshriwas007@gmail.com"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-transparent border-2 border-[#6C63FF] text-[#6C63FF] hover:bg-[#6C63FF]/10 font-bold text-lg transition-all shadow-[0_0_15px_rgba(108,99,255,0.2)]"
          >
            <Send className="w-5 h-5" /> Say Hello
          </motion.a>
        </motion.div>
      </div>

      {/* Simple Footer */}
      <div className="mt-32 text-center text-sm font-mono text-gray-500 relative z-10">
        <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
        <p className="mt-2">© 2026 Kishor Kumar Shriwas. All Rights Reserved.</p>
      </div>
    </section>
  );
}