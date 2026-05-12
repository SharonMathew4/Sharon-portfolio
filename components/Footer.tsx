"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/sharonpmathew", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/sharonpmathew", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:sharonpmathew@gmail.com", label: "Email" },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleClick("#home"); }} className="text-xl font-bold font-[family-name:var(--font-heading)] inline-block mb-3">
              <span className="text-accent">&lt;</span>Sharon<span className="text-accent">/&gt;</span>
            </a>
            <p className="text-sm text-muted leading-relaxed">
              Computer Science Engineer & Web Developer crafting modern digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); handleClick(link.href); }} className="text-sm text-muted hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-text mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}
                  className="w-10 h-10 rounded-lg bg-surface border border-border/30 flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all">
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Sharon P Mathew. All rights reserved.
          </p>
          <p className="text-xs text-muted flex items-center gap-1">
            Made with <HiHeart className="text-red-400" size={14} /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
