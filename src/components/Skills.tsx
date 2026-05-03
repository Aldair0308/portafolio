import { useEffect, useRef } from "react";
import { useLanguage } from "../LanguageContext";
import { useTheme } from "../ThemeContext";
import anime from "animejs/lib/anime.es.js";

export default function Skills() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const barsRef = useRef<HTMLDivElement>(null);

  const title = language === "es" ? "Habilidades" : "Skills";

  const skills = [
    { name: "React", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "TypeScript", level: 92 },
    { name: "Docker", level: 85 },
    { name: "AWS", level: 80 }
  ];

  useEffect(() => {
    if (barsRef.current) {
      anime({
        targets: barsRef.current.querySelectorAll(".bar-fill"),
        width: (el) => el.getAttribute("data-level") + "%",
        easing: "easeOutCubic",
        duration: 1200,
        delay: anime.stagger(100),
      });
    }
  }, [language]);

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 py-20 ${theme.colors.backgroundSecondary}`}>
      <div className="max-w-2xl w-full">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${theme.colors.text}`}>{title}</h2>
        
        <div ref={barsRef} className="space-y-4">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className={`flex justify-between mb-1 ${theme.colors.textSecondary}`}>
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className={`h-4 rounded overflow-hidden ${theme.colors.backgroundTertiary}`}>
                <div className={`bar-fill h-full bg-gradient-to-r ${theme.colors.gradient}`} data-level={skill.level} style={{ width: 0 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}