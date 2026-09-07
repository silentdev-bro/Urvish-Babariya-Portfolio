"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resume } from "@/data/resume";
import { Avatar } from "./Avatar";
import { HeroScene3D } from "./HeroScene3D";
import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % resume.roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <HeroScene3D />
      
      <div className="max-w-[1120px] mx-auto px-4 md:px-8 w-full flex flex-col md:flex-row items-center gap-12 z-10 relative">
        <motion.div 
          className="flex-1 w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-haze text-sm mb-4 tracking-wide uppercase">
            {resume.role}
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-mist mb-6">
            {resume.name}
          </h1>

          <div className="h-10 md:h-12 relative mb-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(4px)", y: -10 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-medium text-ascent-2 absolute"
              >
                {resume.roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-haze text-lg max-w-xl mb-10 leading-relaxed font-sans">
            Currently pursuing B.Tech in ICT. I am a backend developer and AI enthusiast driven by a mindset to continuously learn and grow. I engineer resilient systems, build AI-integrated applications, and consistently take on leadership roles to drive college projects forward.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="bg-ascent-1 text-ink px-6 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ascent-2 liquid-glass-elevated !border-none !text-mist"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="text-mist px-6 py-3 rounded-full font-medium liquid-glass hover:bg-mist/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ascent-2"
            >
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-6 text-haze">
            <a href={resume.github} target="_blank" rel="noreferrer" className="hover:text-mist transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={resume.linkedin} target="_blank" rel="noreferrer" className="hover:text-mist transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${resume.email}`} className="hover:text-mist transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="md:flex-1 w-full flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Avatar className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96" />
        </motion.div>
      </div>
    </section>
  );
}
