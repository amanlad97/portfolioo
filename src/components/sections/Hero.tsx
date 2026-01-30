"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const command = "whoami";

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      setTypedText(command.slice(0, i + 1));
      i++;
      if (i >= command.length) {
        clearInterval(typeInterval);
        setTimeout(() => setShowOutput(true), 300);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 relative">
      <div className="max-w-3xl w-full">
        {/* Avatar */}
        <div className="mb-8">
          <div className="relative w-[280px] h-[280px] mx-auto">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 rotate-ring" />
            <div className="absolute inset-0 rounded-full bg-[var(--bg-primary)]" />
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              width={280}
              height={280}
              className="relative z-10 w-full h-full object-cover object-top rounded-full border-[3px] border-[var(--bg-secondary)]"
              style={{ boxShadow: "0 0 30px rgba(14, 165, 233, 0.3)" }}
              priority
            />
          </div>
        </div>

        {/* Terminal Window */}
        <div className="terminal-window text-left mb-8">
          <div className="terminal-header">
            <div className="flex gap-2">
              <span className="terminal-btn close" />
              <span className="terminal-btn minimize" />
              <span className="terminal-btn maximize" />
            </div>
            <div className="flex-1 text-center font-mono text-sm text-[var(--text-muted)]">
              aman@portfolio:~
            </div>
          </div>
          <div className="p-6 font-mono text-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-green-500 font-semibold">❯</span>
              <span className="text-[var(--text-primary)]">{typedText}</span>
              {!showOutput && <span className="w-2 h-[18px] bg-green-500 cursor-blink" />}
            </div>

            {showOutput && (
              <div className="pl-6 space-y-1 animate-fadeIn">
                <div className="flex gap-4">
                  <span className="text-cyan-400 min-w-[100px]">name:</span>
                  <span className="text-xl font-bold gradient-text">{personalInfo.name}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-cyan-400 min-w-[100px]">role:</span>
                  <span className="text-(--text-secondary)">{personalInfo.role}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-cyan-400 min-w-[100px]">location:</span>
                  <span className="text-[var(--text-secondary)]">{personalInfo.location}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-cyan-400 min-w-[100px]">experience:</span>
                  <span className="text-[var(--text-secondary)]">{personalInfo.experience}</span>
                </div>
                <div className="flex gap-4 flex-wrap">
                  <span className="text-cyan-400 min-w-[100px]">focus:</span>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Go", "Spring Boot"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-cyan-500/15 border border-cyan-500/30 rounded text-xs text-cyan-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {showOutput && (
              <div className="flex items-center gap-3 mt-4">
                <span className="text-green-500 font-semibold">❯</span>
                <span className="w-2 h-[18px] bg-green-500 cursor-blink" />
              </div>
            )}
          </div>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
          Building <span className="text-cyan-500 font-medium">production-grade</span> web applications
          with focus on <span className="text-cyan-500 font-medium">performance</span>,{" "}
          <span className="text-cyan-500 font-medium">observability</span> and{" "}
          <span className="text-cyan-500 font-medium">reliability</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Get in Touch</span>
            <span>→</span>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--glass-border)] text-[var(--text-primary)] font-medium hover:bg-white/5 hover:border-cyan-500 transition-all duration-300"
          >
            <span>View Work</span>
            <span>↓</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[var(--text-muted)] text-xs bounce-animation">
        <div className="w-6 h-10 border-2 border-[var(--text-muted)] rounded-xl relative">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-[var(--text-muted)] rounded-full animate-scroll" />
        </div>
        <span>Scroll to explore</span>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
        @keyframes scroll {
          0%, 100% { opacity: 1; transform: translateX(-50%) translateY(0); }
          50% { opacity: 0; transform: translateX(-50%) translateY(12px); }
        }
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </section>
  );
}
