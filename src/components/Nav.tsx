"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { resume } from "@/data/resume";
import { motion } from "framer-motion";

const NAV_LINKS = ["About", "Education", "Skills", "Projects", "Achievements", "Leadership", "Contact"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4 md:py-6"
      )}
    >
      <div className="max-w-[1120px] mx-auto px-4 md:px-8">
        <nav
          className={cn(
            "liquid-glass rounded-full flex items-center justify-between px-4 md:px-6 transition-all duration-300",
            scrolled ? "py-2 shadow-lg" : "py-3 md:py-4"
          )}
        >
          <div className="font-display font-medium text-lg tracking-tight text-mist">
            UB.
          </div>

          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-haze">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-mist transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ascent-1 rounded-md px-1"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-3 text-haze">
              <a href={resume.github} target="_blank" rel="noreferrer" className="hover:text-mist transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ascent-1 rounded-sm">
                <Github className="w-4 h-4" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href={resume.linkedin} target="_blank" rel="noreferrer" className="hover:text-mist transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ascent-1 rounded-sm">
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href={`mailto:${resume.email}`} className="hover:text-mist transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ascent-1 rounded-sm">
                <Mail className="w-4 h-4" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <div className="w-px h-4 bg-haze/30" />
            <a
              href="/resume.pdf"
              download
              className="font-medium text-sm bg-mist text-ink px-4 py-1.5 rounded-full hover:bg-ascent-1 hover:text-mist transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ascent-1"
            >
              Résumé
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ascent-1 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={cn("w-full h-[2px] bg-current transition-transform origin-left", mobileMenuOpen && "rotate-45")} />
              <span className={cn("w-full h-[2px] bg-current transition-opacity", mobileMenuOpen && "opacity-0")} />
              <span className={cn("w-full h-[2px] bg-current transition-transform origin-left", mobileMenuOpen && "-rotate-45")} />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0, pointerEvents: "auto" },
          closed: { opacity: 0, y: -20, pointerEvents: "none" }
        }}
        className="lg:hidden absolute top-full left-4 right-4 mt-2 p-4 liquid-glass rounded-2xl flex flex-col gap-4"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMobileMenuOpen(false)}
            className="text-mist font-medium py-2 border-b border-mist/10 last:border-0"
          >
            {link}
          </a>
        ))}
        <a
          href="/resume.pdf"
          download
          className="text-center font-medium text-sm bg-mist text-ink px-4 py-3 rounded-xl mt-2"
        >
          Download Résumé
        </a>
      </motion.div>
    </header>
  );
}
