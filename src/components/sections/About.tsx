"use client";

import { useInView } from "@/hooks/useInView";
import { objective, education, stats } from "@/data/portfolio";

export default function About() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className={`min-h-screen px-4 py-20 max-w-5xl mx-auto section-animate ${isVisible ? "visible" : ""}`}
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-cyan-500 font-semibold">01</span>
        <h2 className="text-2xl md:text-3xl font-bold gradient-text">About Me</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--glass-border)] to-transparent" />
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 sm:gap-8 mb-8 sm:mb-12">
        {/* About Text */}
        <div className="glass-card p-5 sm:p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400" />
          <p className="text-base sm:text-lg text-[var(--text-primary)] mb-4">
            I&apos;m a <strong>Software Engineer</strong> with over 2 years of experience building
            and scaling production-grade web applications. Currently working at{" "}
            <strong>BBD Software</strong> in Pune, India.
          </p>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-4">{objective}</p>
          <p className="text-sm sm:text-base text-[var(--text-secondary)]">
            I thrive in Agile environments, love diving into production incidents to find root
            causes, and constantly explore ways to improve developer productivity—including setting
            up AI-assisted development workflows that have doubled team efficiency.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-4 sm:p-5 text-center">
              <div className="text-xl sm:text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="flex items-center gap-2 text-lg sm:text-xl font-semibold mb-4">
          <span>🎓</span>
          Education
        </h3>
        <div className="glass-card p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-2">
            <span className="font-semibold text-[var(--text-primary)] text-sm sm:text-base">{education.degree}</span>
            <span className="font-mono text-xs sm:text-sm text-cyan-500">{education.duration}</span>
          </div>
          <div className="text-sm sm:text-base text-[var(--text-secondary)] mb-3">{education.school}</div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[var(--text-muted)] text-xs sm:text-sm">CGPA:</span>
            <span className="font-mono font-semibold text-sm sm:text-base">{education.cgpa}</span>
            <span className="px-3 py-1 bg-green-500/15 border border-green-500/30 rounded-full text-xs text-green-500">
              Grade {education.grade}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
