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
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 mb-12">
        {/* About Text */}
        <div className="glass-card p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400" />
          <p className="text-lg text-[var(--text-primary)] mb-4">
            I&apos;m a <strong>Software Engineer</strong> with over 2 years of experience building
            and scaling production-grade web applications. Currently working at{" "}
            <strong>BBD Software</strong> in Pune, India.
          </p>
          <p className="text-[var(--text-secondary)] mb-4">{objective}</p>
          <p className="text-[var(--text-secondary)]">
            I thrive in Agile environments, love diving into production incidents to find root
            causes, and constantly explore ways to improve developer productivity—including setting
            up AI-assisted development workflows that have doubled team efficiency.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-5 text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-[var(--text-muted)] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
          <span>🎓</span>
          Education
        </h3>
        <div className="glass-card p-6">
          <div className="flex flex-wrap justify-between gap-2 mb-2">
            <span className="font-semibold text-[var(--text-primary)]">{education.degree}</span>
            <span className="font-mono text-sm text-cyan-500">{education.duration}</span>
          </div>
          <div className="text-[var(--text-secondary)] mb-3">{education.school}</div>
          <div className="flex items-center gap-3">
            <span className="text-[var(--text-muted)] text-sm">CGPA:</span>
            <span className="font-mono font-semibold">{education.cgpa}</span>
            <span className="px-3 py-1 bg-green-500/15 border border-green-500/30 rounded-full text-xs text-green-500">
              Grade {education.grade}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
