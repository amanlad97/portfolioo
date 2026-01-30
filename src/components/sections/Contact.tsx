"use client";

import { useInView } from "@/hooks/useInView";
import { personalInfo } from "@/data/portfolio";

const contactLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "aman-lad",
    href: personalInfo.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Website",
    value: "amanlad.world",
    href: personalInfo.website,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="contact"
      ref={ref}
      className={`min-h-screen px-4 py-20 max-w-5xl mx-auto section-animate ${isVisible ? "visible" : ""}`}
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-cyan-500 font-semibold">05</span>
        <h2 className="text-2xl md:text-3xl font-bold gradient-text">Get in Touch</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--glass-border)] to-transparent" />
      </div>

      {/* Intro */}
      <p className="text-center text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
        I&apos;m always interested in hearing about new opportunities, interesting projects, or just
        having a chat about technology.
      </p>

      {/* Contact Grid */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="glass-card p-5 flex items-center gap-4 group hover:-translate-y-1 transition-transform"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 rounded-lg text-white flex-shrink-0">
              {link.icon}
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-xs uppercase tracking-wide text-[var(--text-muted)]">
                {link.label}
              </span>
              <span className="block text-[var(--text-primary)] font-medium truncate">
                {link.value}
              </span>
            </div>
            <span className="text-xl text-[var(--text-muted)] group-hover:text-cyan-500 group-hover:translate-x-1 transition-all">
              →
            </span>
          </a>
        ))}
      </div>

      {/* Download Resume CTA */}
      <div className="text-center">
        <a
          href={personalInfo.resume}
          download
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 rounded-full text-white font-medium text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
        >
          <span>↓</span>
          <span>Download Resume</span>
        </a>
      </div>
    </section>
  );
}
