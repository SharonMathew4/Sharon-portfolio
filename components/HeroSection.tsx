"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiArrowDown, HiMail, HiDownload } from "react-icons/hi";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";
import Image from "next/image";

const floatingIcons = [
  { Icon: FaReact, x: "10%", y: "20%", delay: 0, size: 28, color: "#61DAFB" },
  {
    Icon: FaNodeJs,
    x: "85%",
    y: "15%",
    delay: 1,
    size: 26,
    color: "#68A063",
  },
  {
    Icon: FaPython,
    x: "75%",
    y: "75%",
    delay: 2,
    size: 24,
    color: "#3776AB",
  },
  {
    Icon: SiNextdotjs,
    x: "15%",
    y: "70%",
    delay: 0.5,
    size: 22,
    color: "#F8FAFC",
  },
  {
    Icon: SiTypescript,
    x: "90%",
    y: "45%",
    delay: 1.5,
    size: 20,
    color: "#3178C6",
  },
  {
    Icon: FaGitAlt,
    x: "5%",
    y: "45%",
    delay: 2.5,
    size: 22,
    color: "#F05032",
  },
  {
    Icon: SiJavascript,
    x: "50%",
    y: "85%",
    delay: 3,
    size: 20,
    color: "#F7DF1E",
  },
  {
    Icon: FaDatabase,
    x: "60%",
    y: "10%",
    delay: 1.8,
    size: 18,
    color: "#38BDF8",
  },
  {
    Icon: SiMongodb,
    x: "35%",
    y: "5%",
    delay: 0.8,
    size: 20,
    color: "#47A248",
  },
];

// Pre-computed particle positions to avoid hydration mismatch
const particles = Array.from({ length: 30 }, (_, i) => ({
  left: ((i * 37 + 13) % 100),
  top: ((i * 53 + 7) % 100),
  duration: 15 + ((i * 7) % 20),
  delay: ((i * 3) % 10),
}));

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-accent/30 rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animation: `particle ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-[glow-pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[100px] animate-[glow-pulse_4s_ease-in-out_2s_infinite]" />
      </div>

      <Particles />

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, x, y, delay, size, color }, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block opacity-15 pointer-events-none"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} color={color} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="text-accent text-sm font-semibold tracking-widest uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Sharon P Mathew</span>
            </motion.h1>

            <motion.div
              className="text-lg sm:text-xl text-muted mb-6 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  "Computer Science Engineer",
                  2000,
                  "Web Developer",
                  2000,
                  "Tech Enthusiast",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-accent/80"
              />
            </motion.div>

            <motion.p
              className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Passionate about building modern web applications, innovative
              digital experiences, and scalable technology solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a href="#projects" className="btn-primary">
                <HiArrowDown className="text-lg" />
                View Projects
              </a>
              <a href="#contact" className="btn-outline">
                <HiMail className="text-lg" />
                Contact Me
              </a>
              <a
                href="#"
                className="btn-outline"
                title="Download Resume"
              >
                <HiDownload className="text-lg" />
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px]">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 via-purple-500/10 to-accent/20 blur-2xl animate-[glow-pulse_4s_ease-in-out_infinite]" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden glass-card p-2">
                <Image
                  src="/hero-illustration.png"
                  alt="Sharon P Mathew - Developer Illustration"
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 480px"
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
