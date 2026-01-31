"use client";

import { useInView } from "@/hooks/useInView";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="projects"
      ref={ref}
      className={`min-h-screen px-4 py-20 max-w-5xl mx-auto section-animate ${isVisible ? "visible" : ""}`}
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-cyan-500 font-semibold">04</span>
        <h2 className="text-2xl md:text-3xl font-bold gradient-text">Projects</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--glass-border)] to-transparent" />
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`glass-card overflow-hidden group ${project.featured ? "md:col-span-2" : ""}`}
          >
            {/* Project Image/Placeholder */}
            <div className="relative h-40 sm:h-48 bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-secondary)] flex items-center justify-center overflow-hidden">
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full opacity-30 ${
                  project.award
                    ? "bg-gradient-to-br from-yellow-400 to-amber-500"
                    : "bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400"
                }`}
              >
                {project.award ? (
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.github || project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 rounded-full text-white text-sm sm:text-base font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  {project.github ? (
                    <>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      <span>View Code</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      <span>View Post</span>
                    </>
                  )}
                </a>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-5 sm:p-6">
              {/* Badge */}
              <span
                className={`inline-block px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-2 sm:mb-3 ${
                  project.award
                    ? "bg-yellow-500/15 text-yellow-500"
                    : "bg-cyan-500/15 text-cyan-500"
                }`}
              >
                {project.award || "Featured Project"}
              </span>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2 sm:mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-3 sm:mb-4">
                {project.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                {project.features.map((feature, i) => (
                  <span key={i} className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <span>{feature.icon}</span>
                    <span>{feature.text}</span>
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-[var(--bg-tertiary)] rounded font-mono text-xs text-[var(--text-muted)]"
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
