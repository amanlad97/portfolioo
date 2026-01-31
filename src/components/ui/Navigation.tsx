"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data/portfolio";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-1/2 bottom-4 sm:bottom-6 md:bottom-8 -translate-x-1/2 z-50 no-print">
      <div className="flex gap-1 p-1.5 sm:p-2 glass-card rounded-full">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full font-mono text-xs sm:text-sm transition-all duration-300 ${
              activeSection === item.id
                ? "bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 text-white"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/5"
            }`}
          >
            <span className={`font-semibold text-sm sm:text-base ${activeSection === item.id ? "text-white" : "text-cyan-500"}`}>
              {item.icon}
            </span>
            <span className="hidden sm:inline">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
