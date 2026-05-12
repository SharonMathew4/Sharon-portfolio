"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState, FormEvent } from "react";

const contactInfo = [
  { icon: HiMail, label: "Email", value: "sharonpmathew@gmail.com", href: "mailto:sharonpmathew@gmail.com" },
  { icon: HiPhone, label: "Phone", value: "+91 XXXXX XXXXX", href: "tel:+91XXXXXXXXXX" },
  { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/sharonpmathew", href: "https://linkedin.com/in/sharonpmathew" },
  { icon: FaGithub, label: "GitHub", value: "github.com/sharonpmathew", href: "https://github.com/sharonpmathew" },
  { icon: HiLocationMarker, label: "Location", value: "Kerala, India", href: "#" },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = "Name is required";
    if (!formState.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formState.email)) errs.email = "Invalid email";
    if (!formState.subject.trim()) errs.subject = "Subject is required";
    if (!formState.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl bg-surface border transition-all duration-200 text-text text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent ${
      errors[field] ? "border-red-500/50" : "border-border/50 hover:border-border"
    }`;

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" subtitle="Have a project in mind? Let's work together" />
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-6">Contact Information</h3>
            <p className="text-muted mb-8 leading-relaxed">Feel free to reach out through any of the channels below. I&apos;m always open to discussing new projects and opportunities.</p>
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 glass-card group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <item.icon className="text-accent" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{item.label}</p>
                    <p className="text-sm text-text font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="glass-card p-8">
              {submitted ? (
                <motion.div className="text-center py-12" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 200 }}>
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h4 className="text-lg font-bold text-text mb-2">Message Sent!</h4>
                  <p className="text-sm text-muted">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input id="contact-name" type="text" placeholder="Your Name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className={inputClass("name")} />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input id="contact-email" type="email" placeholder="Your Email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className={inputClass("email")} />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <input id="contact-subject" type="text" placeholder="Subject" value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} className={inputClass("subject")} />
                    {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
                  </div>
                  <div>
                    <textarea id="contact-message" rows={5} placeholder="Your Message" value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className={inputClass("message")} />
                    {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                  </div>
                  <motion.button id="contact-submit" type="submit" className="btn-primary w-full justify-center" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
