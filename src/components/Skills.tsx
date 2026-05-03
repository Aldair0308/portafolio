import { useEffect, useRef } from "react";
import { useLanguage } from "../LanguageContext";
import anime from "animejs/lib/anime.es.js";

export default function Skills() {
  const { t, language } = useLanguage();
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
    <section className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-20">
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-neon">{title}</h2>
        
        <div ref={barsRef} className="space-y-4">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-4 bg-gray-700 rounded overflow-hidden">
                <div className="bar-fill h-full bg-gradient-to-r from-cyan-500 to-blue-500" data-level={skill.level} style={{ width: 0 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}