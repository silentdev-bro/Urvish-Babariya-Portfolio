"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { resume } from "@/data/resume";
import { GlassPanel } from "./GlassPanel";
import { ExternalLink, Database, Server, GitMerge, Cpu, Activity, Layers, Layout, Zap } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { cn } from "@/lib/utils";

export function ProjectsCarousel() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Since we have 3 projects, we want to slide the container to the left by ~65-70% to reveal the last one.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);

  const renderDiagram = (projectName: string) => {
    if (projectName === "PharmaChain") {
      return (
        <>
          <div className="w-full flex items-center justify-center p-4 liquid-glass rounded-lg border border-ascent-1/30">
            <Server className="w-6 h-6 text-ascent-2 mr-3" />
            <span className="text-sm font-mono text-mist">REST API</span>
          </div>
          <div className="h-8 w-px bg-gradient-to-b from-ascent-2 to-haze" />
          <div className="w-full flex items-center justify-center p-4 liquid-glass rounded-lg border border-mist/10">
            <GitMerge className="w-6 h-6 text-haze mr-3" />
            <span className="text-sm font-mono text-mist">Spring AI</span>
          </div>
          <div className="h-8 w-px bg-gradient-to-b from-haze to-mist/20" />
          <div className="w-full flex items-center justify-center p-4 liquid-glass rounded-lg border border-mist/10">
            <Database className="w-6 h-6 text-haze mr-3" />
            <span className="text-sm font-mono text-mist">PostgreSQL</span>
          </div>
        </>
      );
    }
    if (projectName === "LatencyBook") {
      return (
        <>
          <div className="w-full flex items-center justify-center p-4 liquid-glass rounded-lg border border-ascent-1/30">
            <Cpu className="w-6 h-6 text-ascent-2 mr-3" />
            <span className="text-sm font-mono text-mist">C++ Engine</span>
          </div>
          <div className="h-8 w-px bg-gradient-to-b from-ascent-2 to-haze" />
          <div className="w-full flex items-center justify-center p-4 liquid-glass rounded-lg border border-mist/10">
            <Activity className="w-6 h-6 text-haze mr-3" />
            <span className="text-sm font-mono text-mist">Lock-Free SPSC</span>
          </div>
          <div className="h-8 w-px bg-gradient-to-b from-haze to-mist/20" />
          <div className="w-full flex items-center justify-center p-4 liquid-glass rounded-lg border border-mist/10">
            <Layers className="w-6 h-6 text-haze mr-3" />
            <span className="text-sm font-mono text-mist">Huge Pages</span>
          </div>
        </>
      );
    }
    if (projectName === "CodeMentor-PRO") {
      return (
        <>
          <div className="w-full flex items-center justify-center p-4 liquid-glass rounded-lg border border-ascent-1/30">
            <Layout className="w-6 h-6 text-ascent-2 mr-3" />
            <span className="text-sm font-mono text-mist">Gradio UI</span>
          </div>
          <div className="h-8 w-px bg-gradient-to-b from-ascent-2 to-haze" />
          <div className="w-full flex items-center justify-center p-4 liquid-glass rounded-lg border border-mist/10">
            <Zap className="w-6 h-6 text-haze mr-3" />
            <span className="text-sm font-mono text-mist">Groq LLM</span>
          </div>
          <div className="h-8 w-px bg-gradient-to-b from-haze to-mist/20" />
          <div className="w-full flex items-center justify-center p-4 liquid-glass rounded-lg border border-mist/10">
            <Database className="w-6 h-6 text-haze mr-3" />
            <span className="text-sm font-mono text-mist">ChromaDB</span>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <section id="projects" ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-12">
        <div className="w-full max-w-[1120px] mx-auto px-4 md:px-8 mb-8 flex-shrink-0">
          <h2 className="font-display text-4xl text-mist font-medium tracking-tight">Selected Projects</h2>
        </div>

        <div className="relative w-full flex-1 flex items-center">
          <motion.div style={{ x }} className="flex gap-8 px-4 md:px-8 w-[280vw] lg:w-[250vw]">
            {resume.projects.map((project, i) => (
              <div 
                key={i} 
                className="flex-none w-[90vw] md:w-[85vw] lg:w-[80vw]"
              >
                <GlassPanel className="h-full p-6 md:p-10 flex flex-col">
                  {project.flagship ? (
                    <div className="grid lg:grid-cols-2 gap-10 h-full">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="font-display text-3xl font-medium text-mist">{project.name}</h3>
                          <span className="px-2.5 py-1 text-xs font-mono bg-ember/10 text-ember rounded border border-ember/20">Flagship</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.stack.map(s => (
                            <span key={s} className="text-xs font-mono text-ascent-2 bg-ascent-1/10 px-2 py-1 rounded">
                              {s}
                            </span>
                          ))}
                        </div>
                        <ul className="space-y-4 mb-8 mt-auto flex-1">
                          {project.bullets.map((b, idx) => (
                            <li key={idx} className="text-haze text-sm leading-relaxed relative pl-4">
                              <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-mist/20" />
                              {b}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center gap-4 mt-auto">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-ink bg-mist px-4 py-2 rounded-md hover:bg-ascent-2 transition-colors">
                              <Github className="w-4 h-4" /> Source
                            </a>
                          )}
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-mist bg-mist/10 px-4 py-2 rounded-md hover:bg-mist/20 transition-colors">
                              <ExternalLink className="w-4 h-4" /> Demo
                            </a>
                          )}
                        </div>
                      </div>
                      
                      {/* Decorative Architecture Graphic */}
                      <div className="hidden lg:flex flex-col items-center justify-center p-8 bg-ink/50 rounded-xl border border-mist/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8891A31A_1px,transparent_1px),linear-gradient(to_bottom,#8891A31A_1px,transparent_1px)] bg-[size:14px_24px]" />
                        
                        <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-[240px]">
                          {renderDiagram(project.name)}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full">
                      <h3 className="font-display text-2xl font-medium text-mist mb-4">{project.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map(s => (
                          <span key={s} className="text-xs font-mono text-ascent-2 bg-ascent-1/10 px-2 py-1 rounded">
                            {s}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-4 mb-8 flex-1">
                        {project.bullets.map((b, idx) => (
                          <li key={idx} className="text-haze text-sm leading-relaxed relative pl-4">
                            <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-mist/20" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-4 mt-auto">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-ink bg-mist px-4 py-2 rounded-md hover:bg-ascent-2 transition-colors">
                            <Github className="w-4 h-4" /> Source
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-mist bg-mist/10 px-4 py-2 rounded-md hover:bg-mist/20 transition-colors">
                            <ExternalLink className="w-4 h-4" /> Demo
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </GlassPanel>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bar (Now tied directly to window scroll) */}
        <div className="mt-8 h-1 w-full max-w-md mx-auto bg-mist/5 rounded-full overflow-hidden flex-shrink-0">
          <motion.div 
            className="h-full bg-ascent-1 origin-left" 
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      </div>
    </section>
  );
}
