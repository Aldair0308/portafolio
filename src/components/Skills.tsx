import { useEffect, useRef } from "react";
import { useLanguage } from "../LanguageContext";
import { useTheme } from "../ThemeContext";
import anime from "animejs/lib/anime.es.js";

export default function Skills() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const barsRef = useRef<HTMLDivElement>(null);

  const title = language === "es" ? "Habilidades" : "Skills";
  const subtitle = language === "es" 
    ? "Tecnologías que domino" 
    : "Technologies I master";

  const skills = [
    { name: "React", level: 95, icon: "⚛️" },
    { name: "Node.js", level: 90, icon: "🟢" },
    { name: "TypeScript", level: 92, icon: "🔷" },
    { name: "Docker", level: 85, icon: "🐳" },
    { name: "AWS", level: 80, icon: "☁️" },
    { name: "PostgreSQL", level: 88, icon: "🐘" },
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "GraphQL", level: 82, icon: "◼️" }
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
  }, [language, theme.id]);

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 py-20 ${theme.colors.backgroundSecondary}`}>
      <div className="max-w-4xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 bg-gradient-to-r ${theme.colors.gradient} text-white`}>
            {language === "es" ? "Especialidades" : "Expertise"}
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold ${theme.colors.text} mb-4`}>
            {title}
          </h2>
          <p className={`text-lg ${theme.colors.textMuted}`}>{subtitle}</p>
          <div className={`w-24 h-1 mx-auto rounded-full bg-gradient-to-r ${theme.colors.gradient} mt-4`} />
        </div>
        
        <div ref={barsRef} className="space-y-6">
          {skills.map((skill, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{skill.icon}</span>
                  <span className={`font-medium ${theme.colors.text}`}>{skill.name}</span>
                </div>
                <span className={`text-sm font-bold bg-gradient-to-r ${theme.colors.gradient} bg-clip-text text-transparent`}>
                  {skill.level}%
                </span>
              </div>
              <div className={`h-3 rounded-full overflow-hidden ${theme.colors.backgroundTertiary}`}>
                <div 
                  className={`bar-fill h-full bg-gradient-to-r ${theme.colors.gradient} rounded-full`} 
                  data-level={skill.level} 
                  style={{ width: 0 }} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12">
          <h3 className={`text-center text-lg font-medium mb-6 ${theme.colors.text}`}>
            {language === "es" ? "También trabajo con" : "Also working with"}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js", "Redis", "Prisma", "TailwindCSS", "Figma", "Git", "CI/CD", "Microservices"].map((tech, i) => (
              <span 
                key={i} 
                className={`px-4 py-2 rounded-full text-sm ${theme.colors.backgroundTertiary} ${theme.colors.textSecondary} border border-white/5`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}