"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaGithub, FaLinux, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiTypescript, SiMongodb, SiMysql, SiFirebase, SiExpress, SiCplusplus, SiC } from "react-icons/si";
import { HiCode, HiDesktopComputer, HiCube, HiCog, HiPuzzle } from "react-icons/hi";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: IconType;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: HiCode,
    skills: [
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    title: "Web Development",
    icon: HiDesktopComputer,
    skills: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#F8FAFC" },
      { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
      { name: "Express.js", icon: SiExpress, color: "#F8FAFC" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "Database",
    icon: FaDatabase,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: HiCog,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#F8FAFC" },
      { name: "VS Code", icon: HiCube, color: "#007ACC" },
      { name: "Linux", icon: FaLinux, color: "#FCC624" },
    ],
  },
  {
    title: "Other Skills",
    icon: HiPuzzle,
    skills: [
      { name: "Problem Solving", icon: HiPuzzle, color: "#38BDF8" },
      { name: "Data Structures", icon: HiCube, color: "#A78BFA" },
      { name: "Algorithms", icon: HiCode, color: "#34D399" },
      { name: "Responsive Design", icon: HiDesktopComputer, color: "#F472B6" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-purple-500/5 rounded-full blur-[80px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading title="Skills & Expertise" subtitle="Technologies and tools I work with" />
        <motion.div className="space-y-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] mb-5 flex items-center gap-2 text-text">
                <category.icon className="text-accent" size={20} />
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="glass-card p-4 flex flex-col items-center gap-3 group cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <skill.icon size={32} style={{ color: skill.color }} className="transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-sm text-muted group-hover:text-text transition-colors font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
