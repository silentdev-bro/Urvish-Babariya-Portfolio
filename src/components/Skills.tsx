import React from "react";
import { resume } from "@/data/resume";
import { GlassPanel } from "./GlassPanel";

// Map some common stack names to their SimpleIcons imports
import {
  SiCplusplus,
  SiPython,
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiDocker,
  SiGithubactions,
  SiPostman,
  SiJunit5,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiC
} from "react-icons/si";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "C++": SiCplusplus,
  "C": SiC,
  "Python": SiPython,
  "Spring Boot": SiSpringboot,
  "Spring Security": SiSpringsecurity,
  "Hibernate": SiHibernate,
  "Docker": SiDocker,
  "GitHub Actions (CI/CD)": SiGithubactions,
  "Postman": SiPostman,
  "JUnit": SiJunit5,
  "PostgreSQL": SiPostgresql,
  "MySQL": SiMysql,
  "Git": SiGit
};

export function Skills() {
  return (
    <section id="skills" className="py-24 max-w-[1120px] mx-auto px-4 md:px-8">
      <h2 className="font-display text-4xl text-mist font-medium tracking-tight mb-12">Skills & Technologies</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(resume.skills).map(([category, skills]) => (
          <GlassPanel key={category} className="p-6">
            <h3 className="font-mono text-sm text-ascent-2 uppercase tracking-wide mb-6">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => {
                const Icon = ICON_MAP[skill];
                return (
                  <div
                    key={skill}
                    className="flex items-center gap-2 bg-panel/50 border border-mist/10 px-3 py-1.5 rounded-md text-sm text-mist/90"
                  >
                    {Icon && <Icon className="w-4 h-4 text-haze" />}
                    <span>{skill}</span>
                  </div>
                );
              })}
            </div>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}
