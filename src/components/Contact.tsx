"use client";
import React from "react";
import { resume } from "@/data/resume";
import { GlassPanel } from "./GlassPanel";
import { Mail, ArrowRight } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 max-w-[1120px] mx-auto px-4 md:px-8">
      <GlassPanel elevated className="overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Side - Info */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-mist/10 bg-panel/30">
            <h2 className="font-display text-4xl text-mist font-medium tracking-tight mb-4">Let's Connect</h2>
            <p className="text-haze mb-12 max-w-sm">
              I'm always open to discussing full-stack development roles, AI integrations, or new opportunities.
            </p>
            
            <div className="flex flex-col gap-2">
              <a 
                href={`mailto:${resume.email}`}
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-mist/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ascent-1"
              >
                <div className="w-12 h-12 rounded-full bg-mist/5 flex items-center justify-center text-mist group-hover:bg-ascent-1 group-hover:text-ink transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-haze uppercase tracking-wider mb-1">Email</div>
                  <div className="text-mist font-medium">{resume.email}</div>
                </div>
              </a>

              <a 
                href={resume.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-mist/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ascent-1"
              >
                <div className="w-12 h-12 rounded-full bg-mist/5 flex items-center justify-center text-mist group-hover:bg-ascent-1 group-hover:text-ink transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-haze uppercase tracking-wider mb-1">LinkedIn</div>
                  <div className="text-mist font-medium">linkedin.com/in/urvish-babariya</div>
                </div>
              </a>

              <a 
                href={resume.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-mist/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ascent-1"
              >
                <div className="w-12 h-12 rounded-full bg-mist/5 flex items-center justify-center text-mist group-hover:bg-ascent-1 group-hover:text-ink transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-haze uppercase tracking-wider mb-1">GitHub</div>
                  <div className="text-mist font-medium">github.com/Urvish2007</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 md:p-12">
            <form 
              action={`mailto:${resume.email}`} 
              method="POST" 
              encType="text/plain"
              className="flex flex-col h-full justify-center gap-6"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-mono text-haze uppercase tracking-wider ml-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className="w-full bg-ink/50 border border-mist/10 rounded-xl px-4 py-3 text-mist focus:outline-none focus:border-ascent-1 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-mono text-haze uppercase tracking-wider ml-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  className="w-full bg-ink/50 border border-mist/10 rounded-xl px-4 py-3 text-mist focus:outline-none focus:border-ascent-1 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="message" className="text-sm font-mono text-haze uppercase tracking-wider ml-1">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-ink/50 border border-mist/10 rounded-xl px-4 py-3 text-mist focus:outline-none focus:border-ascent-1 transition-colors resize-none flex-1"
                  placeholder="Hello Urvish..."
                />
              </div>

              <button 
                type="submit"
                className="group flex items-center justify-between w-full bg-mist text-ink font-medium px-6 py-4 rounded-xl hover:bg-ascent-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ascent-2 mt-2"
              >
                <span>Send Message via Email Client</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </GlassPanel>
    </section>
  );
}
