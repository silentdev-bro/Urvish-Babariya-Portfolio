import React from "react";
import { resume } from "@/data/resume";
import { GlassPanel } from "./GlassPanel";

export function About() {
  return (
    <section id="about" className="py-24 max-w-[1120px] mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <h2 className="font-display text-4xl text-mist font-medium tracking-tight">About Me</h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-haze text-lg leading-relaxed mb-8">
            I am a Backend Developer and AI Engineer constantly pushing myself to learn and grow. Currently completing my B.Tech in Information and Communication Technology at Dhirubhai Ambani University, I specialize in engineering highly resilient, scalable backend architectures with Spring Boot and PostgreSQL. I also hold a strong foundation in modern AI, utilizing tools like LangChain and Spring AI to build context-aware, intelligent systems. Across all my college projects, I have consistently stepped up to lead teams, directing both technical architecture and project delivery.
          </p>
          <div className="flex flex-wrap gap-8 items-center text-sm font-mono text-mist">
            <div className="flex flex-col gap-1">
              <span className="text-haze">Shipped Projects</span>
              <span className="text-2xl text-ascent-2">3</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-haze">Leadership Roles</span>
              <span className="text-2xl text-ascent-2">4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
