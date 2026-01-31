"use client";

import { useInView } from "@/hooks/useInView";
import { experience } from "@/data/portfolio";

const categoryIcons: Record<string, string> = {
  frontend: "⚛️",
  backend: "🔧",
  observability: "📈",
  innovation: "🤖",
};

const categoryTitles: Record<string, string> = {
  frontend: "Frontend Excellence",
  backend: "Backend & APIs",
  observability: "Observability & Production",
  innovation: "Innovation",
};

export default function Experience() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="experience"
      ref={ref}
      className={`min-h-screen px-4 py-20 max-w-5xl mx-auto section-animate ${isVisible ? "visible" : ""}`}
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-cyan-500 font-semibold">02</span>
        <h2 className="text-2xl md:text-3xl font-bold gradient-text">Experience</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--glass-border)] to-transparent" />
      </div>

      {/* Timeline */}
      <div className="relative pl-6 sm:pl-8">
        {/* Timeline Line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-teal-400" />

        {experience.map((exp, index) => (
          <div key={index} className="relative pb-6 sm:pb-8">
            {/* Timeline Marker */}
            <div className="absolute left-[-8px] top-0">
              <div className="w-4 h-4 bg-cyan-500 rounded-full relative z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-500/30 rounded-full pulse-animation" />
            </div>

            {/* Content Card */}
            <div className="glass-card p-4 sm:p-6 ml-2 sm:ml-4">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">{exp.title}</h3>
                  <span className="text-sm sm:text-base text-cyan-500 font-medium">{exp.company}</span>
                </div>
                <div className="sm:text-right">
                  <div className="font-mono text-xs sm:text-sm text-green-500">{exp.duration}</div>
                  <div className="text-xs sm:text-sm text-[var(--text-muted)]">{exp.location}</div>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                {Object.entries(exp.highlights).map(([category, items]) => (
                  <div key={category} className="p-3 sm:p-4 bg-black/20 rounded-lg">
                    <h4 className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-2 sm:mb-3">
                      <span>{categoryIcons[category]}</span>
                      {categoryTitles[category]}
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {items.map((item, i) => (
                        <li
                          key={i}
                          className="relative pl-3 sm:pl-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed"
                        >
                          <span className="absolute left-0 text-cyan-500">▹</span>
                          <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full font-mono text-xs text-cyan-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
