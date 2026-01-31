"use client";

import { useInView } from "@/hooks/useInView";
import { skills, additionalSkills } from "@/data/portfolio";

const categoryConfig: Record<string, { icon: string; title: string }> = {
  languages: { icon: "</>", title: "Languages" },
  frontend: { icon: "□", title: "Frontend" },
  backend: { icon: "⬡", title: "Backend" },
  database: { icon: "◎", title: "Database" },
  devops: { icon: "⚙", title: "DevOps & Cloud" },
  monitoring: { icon: "~", title: "Monitoring" },
};

export default function Skills() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      className={`min-h-screen px-4 py-20 max-w-5xl mx-auto section-animate ${isVisible ? "visible" : ""}`}
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-cyan-500 font-semibold">03</span>
        <h2 className="text-2xl md:text-3xl font-bold gradient-text">Skills</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--glass-border)] to-transparent" />
      </div>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className={`glass-card p-5 sm:p-6 ${isVisible ? "animate" : ""}`}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 rounded-lg text-white font-bold text-sm sm:text-base">
                {categoryConfig[category]?.icon}
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-[var(--text-primary)]">
                {categoryConfig[category]?.title}
              </h3>
            </div>

            {/* Skill Items */}
            <div className="space-y-2.5 sm:space-y-3">
              {items.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <span className="text-xs sm:text-sm text-[var(--text-secondary)]">{skill.name}</span>
                  <div className="h-1.5 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                    <div
                      className="skill-progress h-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 rounded-full"
                      style={{ "--progress": `${skill.level}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Skills Cloud */}
      <div className="text-center">
        <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Also worked with</h3>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {additionalSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 sm:px-4 py-1.5 sm:py-2 glass-card rounded-full text-xs sm:text-sm text-[var(--text-secondary)] hover:text-cyan-500 hover:border-cyan-500/30 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
