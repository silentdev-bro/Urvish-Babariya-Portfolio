"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resume } from "@/data/resume";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Leadership() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="leadership" className="py-24 max-w-[900px] mx-auto px-4 md:px-8">
      <h2 className="font-display text-4xl text-mist font-medium tracking-tight mb-12">Leadership & Extracurricular</h2>

      <div className="flex flex-col border-t border-mist/10">
        {resume.leadership.map((item, i) => {
          const isExpanded = expandedIndex === i;

          return (
            <button
              key={i}
              className="text-left py-6 border-b border-mist/10 group focus-visible:outline-none focus-visible:bg-mist/5 px-2 -mx-2 rounded-lg transition-colors hover:bg-mist/5"
              onClick={() => setExpandedIndex(isExpanded ? null : i)}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 flex-1">
                  <h3 className="font-medium text-lg text-mist group-hover:text-ascent-2 transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-haze">at {item.org}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-haze/70 hidden sm:block">
                    {item.period}
                  </span>
                  <div className="p-1.5 rounded-full bg-mist/5 text-mist group-hover:bg-ascent-1/10 group-hover:text-ascent-1 transition-colors">
                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isExpanded && "rotate-180")} />
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pb-2">
                      <p className="text-haze leading-relaxed border-l-2 border-ascent-2/30 pl-4 ml-1">
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
    </section>
  );
}
