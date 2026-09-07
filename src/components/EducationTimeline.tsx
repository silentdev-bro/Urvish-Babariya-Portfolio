import React from "react";
import { resume } from "@/data/resume";
import { GlassPanel } from "./GlassPanel";

export function EducationTimeline() {
  return (
    <section id="education" className="py-24 max-w-[1120px] mx-auto px-4 md:px-8">
      <h2 className="font-display text-4xl text-mist font-medium tracking-tight mb-12">Education</h2>
      
      <div className="relative border-l border-ascent-1/20 ml-3 md:ml-4 space-y-12">
        {resume.education.map((edu, i) => (
          <div key={i} className="relative pl-8 md:pl-12">
            <div className="absolute w-3 h-3 bg-ascent-1 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_12px_rgba(76,126,255,0.8)]" />
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
              <h3 className="text-xl font-medium text-mist">{edu.school}</h3>
              <span className="font-mono text-sm text-haze shrink-0">{edu.period}</span>
            </div>
            
            {edu.degree && <p className="text-ascent-2 mb-2 font-medium">{edu.degree}</p>}
            <p className="text-haze">{edu.score}</p>
            <p className="text-haze/60 text-sm mt-1">{edu.location}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-mist/10">
        <h4 className="font-mono text-sm text-haze uppercase tracking-wide mb-6">Relevant Coursework</h4>
        <div className="flex flex-wrap gap-4">
          {resume.coursework.map((course) => (
            <span key={course} className="text-mist/80 bg-mist/5 px-4 py-2 rounded-md text-sm border border-mist/10">
              {course}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
