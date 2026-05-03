import { useLanguage } from "../LanguageContext";
import { useTheme } from "../ThemeContext";

export default function About() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const title = language === "es" ? "Sobre Mí" : "About Me";
  const skillsTitle = language === "es" ? "Habilidades" : "Skills";
  const description = language === "es"
    ? "Desarrollador full-stack con más de 5 años de experiencia creando aplicaciones web con React, Node.js, TypeScript y servicios en la nube. Apasionado por la arquitectura limpia, código mantenible y entregar experiencias de usuario excepcionales."
    : "Full-stack developer with 5+ years of experience building web applications with React, Node.js, TypeScript and cloud services. Passionate about clean architecture, maintainable code and delivering exceptional user experiences.";

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 ${theme.colors.backgroundSecondary}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-8 ${theme.colors.text}`}>
          {title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className={`w-48 h-48 rounded-full bg-gradient-to-br ${theme.colors.gradient} flex items-center justify-center text-6xl`}>
              👨‍💻
            </div>
          </div>
          
          <div className={`text-lg leading-relaxed ${theme.colors.textSecondary}`}>
            <p className="mb-6">{description}</p>
            
            <h3 className={`text-xl font-semibold mb-4 ${theme.colors.text}`}>{skillsTitle}</h3>
            <div className="flex flex-wrap gap-2">
              <span className={`px-3 py-1 rounded-full text-sm ${theme.colors.backgroundTertiary} ${theme.colors.textSecondary}`}>React</span>
              <span className={`px-3 py-1 rounded-full text-sm ${theme.colors.backgroundTertiary} ${theme.colors.textSecondary}`}>Node.js</span>
              <span className={`px-3 py-1 rounded-full text-sm ${theme.colors.backgroundTertiary} ${theme.colors.textSecondary}`}>TypeScript</span>
              <span className={`px-3 py-1 rounded-full text-sm ${theme.colors.backgroundTertiary} ${theme.colors.textSecondary}`}>PostgreSQL</span>
              <span className={`px-3 py-1 rounded-full text-sm ${theme.colors.backgroundTertiary} ${theme.colors.textSecondary}`}>MongoDB</span>
              <span className={`px-3 py-1 rounded-full text-sm ${theme.colors.backgroundTertiary} ${theme.colors.textSecondary}`}>AWS</span>
              <span className={`px-3 py-1 rounded-full text-sm ${theme.colors.backgroundTertiary} ${theme.colors.textSecondary}`}>Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}