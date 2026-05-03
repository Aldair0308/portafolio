import { useLanguage } from "../LanguageContext";
import { useTheme } from "../ThemeContext";

export default function About() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const title = language === "es" ? "Sobre Mí" : "About Me";
  const description = language === "es"
    ? "Desarrollador full-stack con más de 5 años de experiencia creando aplicaciones web con React, Node.js, TypeScript y servicios en la nube."
    : "Full-stack developer with 5+ years of experience building web applications with React, Node.js, TypeScript and cloud services.";

  const technologies = [
    "React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS", "Docker", "GraphQL", "Redis", "Next.js"
  ];

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 py-16 ${theme.colors.backgroundSecondary}`}>
      <div className="max-w-lg w-full">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${theme.colors.gradient} text-white`}>
            {language === "es" ? "Conóceme" : "Get to know me"}
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold ${theme.colors.text} mb-3`}>
            {title}
          </h2>
          <div className={`w-16 h-0.5 mx-auto rounded-full bg-gradient-to-r ${theme.colors.gradient}`} />
        </div>

        <div className="space-y-6">
          {/* Avatar - Smaller for mobile */}
          <div className="flex justify-center">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-5xl md:text-6xl shadow-xl">
              👨‍💻
            </div>
          </div>
          
          {/* Content - Smaller text for mobile */}
          <div className={`${theme.colors.textSecondary} text-sm md:text-base leading-relaxed text-center`}>
            <p>{description}</p>
          </div>
          
          {/* Technologies - Smaller tags for mobile */}
          <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
            {technologies.slice(0, 8).map((tech, i) => (
              <span 
                key={i} 
                className={`px-2 py-1 rounded-lg text-xs font-medium ${theme.colors.backgroundTertiary} ${theme.colors.textSecondary}`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Stats - Compact for mobile */}
          <div className="flex justify-center gap-4 md:gap-8 pt-2">
            <div className="text-center">
              <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${theme.colors.gradient} bg-clip-text text-transparent`}>5+</div>
              <div className={`text-xs ${theme.colors.textMuted}`}>{language === "es" ? "Años" : "Years"}</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${theme.colors.gradient} bg-clip-text text-transparent`}>20+</div>
              <div className={`text-xs ${theme.colors.textMuted}`}>{language === "es" ? "Proy" : "Proj"}</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${theme.colors.gradient} bg-clip-text text-transparent`}>10+</div>
              <div className={`text-xs ${theme.colors.textMuted}`}>{language === "es" ? "Cli" : "Clients"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}