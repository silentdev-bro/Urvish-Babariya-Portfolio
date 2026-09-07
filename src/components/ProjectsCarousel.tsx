"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { resume } from "@/data/resume";
import { GlassPanel } from "./GlassPanel";
import { ExternalLink, ChevronLeft, ChevronRight, Database, Server, GitMerge } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { cn } from "@/lib/utils";

export function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("select", onScroll);
    emblaApi.on("reInit", onScroll);
    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("select", onScroll);
      emblaApi.off("reInit", onScroll);
    };
  }, [emblaApi, onScroll]);

  return (
    <section id="projects" className="py-24 max-w-[1120px] mx-auto px-4 md:px-8 overflow-hidden">
      <div className="flex items-end justify-between mb-12">
        <h2 className="font-display text-4xl text-mist font-medium tracking-tight">Selected Projects</h2>
        
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="p-2 rounded-full border border-mist/10 text-mist disabled:opacity-30 hover:bg-mist/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ascent-1"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="p-2 rounded-full border border-mist/10 text-mist disabled:opacity-30 hover:bg-mist/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ascent-1"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 pb-8 touch-pan-y">
            {resume.projects.map((project, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex-none",
                  project.flagship ? "w-full lg:w-[85%]" : "w-full md:w-[60%] lg:w-[45%]"
                )}
              >
                <GlassPanel elevated={selectedIndex === i} className="h-full p-6 md:p-10 flex flex-col">
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
                      
                      {/* Decorative Architecture Graphic for Flagship */}
                      <div className="hidden lg:flex flex-col items-center justify-center p-8 bg-ink/50 rounded-xl border border-mist/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8891A31A_1px,transparent_1px),linear-gradient(to_bottom,#8891A31A_1px,transparent_1px)] bg-[size:14px_24px]" />
                        
                        <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-[240px]">
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
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 h-1 w-full max-w-md mx-auto bg-mist/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-ascent-1 transition-all duration-150 ease-out" 
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </section>
  );
}
