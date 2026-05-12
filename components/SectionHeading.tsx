"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
        {title}
      </h2>
      <p className="text-muted text-base sm:text-lg max-w-xl mx-auto">
        {subtitle}
      </p>
      <div className="mt-4 flex justify-center">
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-accent to-purple-500" />
      </div>
    </motion.div>
  );
}
