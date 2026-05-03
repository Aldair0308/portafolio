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

  const technologies = [
    "React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS", "Docker", "GraphQL", "Redis", "Next.js"
  ];

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 py-20 ${theme.colors.backgroundSecondary}`}>
      <div className="max-w-5xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 bg-gradient-to-r ${theme.colors.gradient} text-white`}>
            {language === "es" ? "Conóceme" : "Get to know me"}
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold ${theme.colors.text} mb-4`}>
            {title}
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full bg-gradient-to-r ${theme.colors.gradient}`} />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar Card */}
          <div className="flex justify-center">
            <div className="relative">
              <div className={`w-56 h-56 md:w-72 md:h-72 rounded-3xl bg-gradient-to-br ${theme.colors.gradient} flex items-center justify-center text-8xl md:text-9xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500`}>
                👨‍💻
              </div>
              {/* Decorative elements */}
              <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r ${theme.colors.gradient} opacity-50 animate-pulse`} />
              <div className={`absolute -bottom-6 -left-6 w-8 h-8 rounded-full ${theme.colors.accent} opacity-30`} />
            </div>
          </div>
          
          {/* Content */}
          <div className={`${theme.colors.textSecondary} text-lg leading-relaxed space-y-6`}>
            <p>{description}</p>
            
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${theme.colors.text}`}>{skillsTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all hover:scale-105 hover:shadow-lg cursor-default ${theme.colors.backgroundTertiary} ${theme.colors.text}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <div className={`text-3xl font-bold bg-gradient-to-r ${theme.colors.gradient} bg-clip-text text-transparent`}>5+</div>
                <div className={`text-sm ${theme.colors.textMuted}`}>{language === "es" ? "Años Exp" : "Years Exp"}</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold bg-gradient-to-r ${theme.colors.gradient} bg-clip-text text-transparent`}>20+</div>
                <div className={`text-sm ${theme.colors.textMuted}`}>{language === "es" ? "Proyectos" : "Projects"}</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold bg-gradient-to-r ${theme.colors.gradient} bg-clip-text text-transparent`}>10+</div>
                <div className={`text-sm ${theme.colors.textMuted}`}>{language === "es" ? "Clientes" : "Clients"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}