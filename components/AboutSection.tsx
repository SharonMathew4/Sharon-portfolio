"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HiAcademicCap, HiCode, HiLightBulb, HiChip } from "react-icons/hi";

const highlights = [
  { icon: HiAcademicCap, title: "B.Tech in CSE", description: "College Of Engineering Kallooppara" },
  { icon: HiCode, title: "Web Developer", description: "Modern full-stack applications" },
  { icon: HiLightBulb, title: "Problem Solver", description: "Strong analytical mindset" },
  { icon: HiChip, title: "Tech Enthusiast", description: "AI, Web Tech & Innovation" },
];

const timeline = [
  { year: "2020 - 2024", title: "B.Tech in Computer Science & Engineering", institution: "College Of Engineering Kallooppara", description: "Comprehensive degree covering data structures, algorithms, software engineering, AI/ML, and web technologies." },
  { year: "2018 - 2020", title: "Higher Secondary Education", institution: "Science & Mathematics Stream", description: "Strong foundation in mathematics, physics, and computer science." },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Get to know more about my journey and passion" />
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
              I&apos;m <span className="text-text font-semibold">Sharon P Mathew</span>, a dedicated Computer Science and Engineering graduate from the <span className="text-accent">College Of Engineering Kallooppara</span>. My passion lies in crafting elegant software solutions that solve real-world problems.
            </p>
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
              With a strong foundation in programming, data structures, and algorithms, I specialize in building modern web applications using technologies like React, Next.js, and Node.js. I&apos;m constantly exploring emerging technologies in AI and machine learning.
            </p>
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-8">
              I believe in writing clean, maintainable code and creating digital experiences that are both functional and visually appealing.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div key={item.title} className="glass-card p-4 flex items-start gap-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                  <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0"><item.icon size={20} /></div>
                  <div>
                    <h4 className="text-sm font-semibold text-text">{item.title}</h4>
                    <p className="text-xs text-muted mt-0.5">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-8 flex items-center gap-2">
              <HiAcademicCap className="text-accent" /> Education
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />
              {timeline.map((item, i) => (
                <motion.div key={item.title} className="relative pl-12 pb-10 last:pb-0" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }}>
                  <div className="absolute left-[10px] top-1 w-[12px] h-[12px] rounded-full bg-accent border-2 border-background shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                  <div className="glass-card p-5">
                    <span className="text-accent text-xs font-semibold tracking-wider uppercase">{item.year}</span>
                    <h4 className="text-base font-bold text-text mt-1">{item.title}</h4>
                    <p className="text-sm text-accent/70 mb-2">{item.institution}</p>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
