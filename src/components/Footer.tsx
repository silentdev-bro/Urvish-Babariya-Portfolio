"use client";
import React from "react";
import { resume } from "@/data/resume";
import { Mail, ArrowUp } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-mist/10 py-8 mt-12">
      <div className="max-w-[1120px] mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-4 text-haze">
          <a href={resume.github} target="_blank" rel="noreferrer" className="hover:text-mist transition-colors p-2 hover:bg-mist/5 rounded-full">
            <Github className="w-4 h-4" />
          </a>
          <a href={resume.linkedin} target="_blank" rel="noreferrer" className="hover:text-mist transition-colors p-2 hover:bg-mist/5 rounded-full">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={`mailto:${resume.email}`} className="hover:text-mist transition-colors p-2 hover:bg-mist/5 rounded-full">
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <p className="text-haze text-sm">
          &copy; {new Date().getFullYear()} {resume.name}. Built with Next.js.
        </p>

        <button 
          onClick={scrollToTop}
          className="text-haze hover:text-mist transition-colors flex items-center gap-2 text-sm font-mono uppercase tracking-wider p-2 hover:bg-mist/5 rounded-full px-4"
        >
          <span>Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
