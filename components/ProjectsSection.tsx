"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Evermist Teascape",
    description: "AI-powered hybrid tea plantation and eco-tourism business solution integrating smart agriculture and modern technology.",
    image: "/project-evermist.png",
    tech: ["Python", "AI/ML", "React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Supermarket Website",
    description: "Modern supermarket e-commerce platform with delivery features, product management, offers, and responsive UI.",
    image: "/project-supermarket.png",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "Modern responsive portfolio website showcasing projects, skills, services, and professional profile.",
    image: "/project-portfolio.png",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading title="Featured Projects" subtitle="Some of my recent work and creative explorations" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="glass-card overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-2 text-text">{project.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors" aria-label={`GitHub - ${project.title}`}>
                    <FaGithub size={16} /> GitHub
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors" aria-label={`Live Demo - ${project.title}`}>
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
