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
    <section className={`min-h-screen flex items-center justify-center px-3 md:px-4 py-16 ${theme.colors.backgroundSecondary}`}>
      <div className="max-w-lg md:max-w-4xl w-full">
        {/* Section Header - Smaller for mobile */}
        <div className="text-center mb-8 md:mb-12">
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${theme.colors.gradient} text-white`}>
            {language === "es" ? "Especialidades" : "Expertise"}
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold ${theme.colors.text} mb-2`}>
            {title}
          </h2>
          <div className={`w-16 h-0.5 mx-auto rounded-full bg-gradient-to-r ${theme.colors.gradient} mt-3`} />
        </div>
        
        {/* Progress bars - Compact on mobile */}
        <div ref={barsRef} className="space-y-3 md:space-y-4">
          {skills.map((skill, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-base md:text-xl">{skill.icon}</span>
                  <span className={`text-sm md:font-medium ${theme.colors.text}`}>{skill.name}</span>
                </div>
                <span className={`text-xs md:text-sm font-bold bg-gradient-to-r ${theme.colors.gradient} bg-clip-text text-transparent`}>
                  {skill.level}%
                </span>
              </div>
              <div className={`h-2 md:h-3 rounded-full overflow-hidden ${theme.colors.backgroundTertiary}`}>
                <div 
                  className={`bar-fill h-full bg-gradient-to-r ${theme.colors.gradient} rounded-full`} 
                  data-level={skill.level} 
                  style={{ width: 0 }} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills - Smaller tags on mobile */}
        <div className="mt-6 md:mt-8">
          <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
            {["Next.js", "Redis", "Prisma", "Tailwind", "Figma", "Git", "CI/CD"].map((tech, i) => (
              <span 
                key={i} 
                className={`px-2.5 md:px-3 py-1 rounded-full text-xs ${theme.colors.backgroundTertiary} ${theme.colors.textSecondary}`}
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