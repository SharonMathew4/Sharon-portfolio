"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HiCode, HiDesktopComputer, HiDeviceMobile, HiTemplate, HiColorSwatch, HiCog } from "react-icons/hi";
import { IconType } from "react-icons";

interface Service {
  title: string;
  description: string;
  icon: IconType;
}

const services: Service[] = [
  { title: "Web Development", description: "Building robust, scalable web applications with modern frameworks and best practices.", icon: HiCode },
  { title: "Frontend Development", description: "Crafting interactive, performant user interfaces using React, Next.js, and TypeScript.", icon: HiDesktopComputer },
  { title: "Responsive Design", description: "Creating pixel-perfect designs that work seamlessly across all devices and screen sizes.", icon: HiDeviceMobile },
  { title: "Portfolio Development", description: "Designing and developing professional portfolios that showcase your work beautifully.", icon: HiTemplate },
  { title: "UI/UX Design", description: "Delivering intuitive, user-centered designs with clean aesthetics and smooth interactions.", icon: HiColorSwatch },
  { title: "Software Solutions", description: "Engineering custom software solutions tailored to solve specific business challenges.", icon: HiCog },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading title="Services" subtitle="What I can do for you" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass-card p-6 group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-text mb-2">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
