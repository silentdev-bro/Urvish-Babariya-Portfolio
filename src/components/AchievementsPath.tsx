"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { resume } from "@/data/resume";
import { ExternalLink } from "lucide-react";

export function AchievementsPath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="achievements" className="py-24 max-w-[1120px] mx-auto px-4 md:px-8" ref={containerRef}>
      <h2 className="font-display text-4xl text-mist font-medium tracking-tight mb-20 text-center">
        Milestones & Achievements
      </h2>

      <div className="relative max-w-3xl mx-auto pb-20">
        {/* SVG Path Background */}
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 flex justify-center pointer-events-none -z-10"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 800"
            preserveAspectRatio="none"
            className="stroke-mist/10 drop-shadow-lg"
          >
            <motion.path
              d="M 200 0 L 200 800"
              fill="none"
              strokeWidth="2"
              className="stroke-ascent-1/20"
            />
            <motion.path
              d="M 200 0 L 200 800"
              fill="none"
              strokeWidth="4"
              stroke="url(#ascentGradient)"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="ascentGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#4C7EFF" />
                <stop offset="100%" stopColor="#4FD1FF" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Achievement Stops */}
        <div className="space-y-16 md:space-y-24">
          {[...resume.achievements].reverse().map((achieve, i) => (
            <AchievementStop key={i} achieve={achieve} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementStop({ achieve, index }: { achieve: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative flex items-center w-full mb-12 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className={`w-1/2 px-6 md:px-12 ${isEven ? 'text-right' : 'text-left'}`}>
        {achieve.link ? (
          <a
            href={achieve.link !== "#" ? achieve.link : undefined}
            target="_blank"
            rel="noreferrer"
            className={`group inline-flex flex-col gap-1 ${isEven ? 'items-end' : 'items-start'}`}
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-haze group-hover:text-mist transition-colors flex items-center gap-1.5">
              {achieve.label}
              {achieve.link !== "#" && <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
            </h3>
            <p className="font-display text-lg md:text-xl font-medium text-mist">
              {achieve.value}
            </p>
          </a>
        ) : (
          <div className={`flex flex-col gap-1 ${isEven ? 'items-end' : 'items-start'}`}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-haze">
              {achieve.label}
            </h3>
            <p className="font-display text-lg md:text-xl font-medium text-mist">
              {achieve.value}
            </p>
          </div>
        )}
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-ink border-2 border-ascent-2 z-10 shadow-[0_0_15px_rgba(79,209,255,0.5)]" />
      
      <div className="w-1/2" />
    </motion.div>
  );
}
