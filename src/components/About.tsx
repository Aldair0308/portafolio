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
    <section className={`min-h-screen flex items-center justify-center px-3 md:px-4 py-16 md:py-20 ${theme.colors.backgroundSecondary}`}>
      <div className="max-w-lg md:max-w-5xl w-full">
        {/* Section Header - Bigger on PC */}
        <div className="text-center mb-8 md:mb-16">
          <div className={`inline-block px-3 py-1 md:py-1 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 bg-gradient-to-r ${theme.colors.gradient} text-white`}>
            {language === "es" ? "Conóceme" : "Get to know me"}
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl md:text-6xl font-bold ${theme.colors.text} mb-3 md:mb-4`}>
            {title}
          </h2>
          <div className={`w-16 md:w-24 h-0.5 mx-auto rounded-full bg-gradient-to-r ${theme.colors.gradient} mt-3 md:mt-4`} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Photo Cards - 3 semi-stacked */}
          <div className="flex justify-center">
            <div className="relative w-28 h-28 md:w-72 md:h-72">
              {/* Card 3 - backmost */}
              <div className="absolute inset-0 -rotate-12 -translate-x-5 translate-y-2 rounded-2xl md:rounded-3xl bg-gradient-to-br from-violet-600/30 to-fuchsia-600/20 border border-violet-500/30 backdrop-blur-sm flex items-center justify-center shadow-xl">
                <span className="text-3xl md:text-7xl font-mono font-bold text-violet-400/40">{"{ }"}</span>
              </div>
              {/* Card 2 - middle */}
              <div className="absolute inset-0 -rotate-6 -translate-x-2 translate-y-4 rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-600/30 to-rose-600/20 border border-amber-500/30 backdrop-blur-sm flex items-center justify-center shadow-xl">
                <span className="text-3xl md:text-7xl font-mono font-bold text-amber-400/40">&lt;/&gt;</span>
              </div>
              {/* Card 1 - front with photo */}
              <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 ring-1 ring-white/5 z-10">
                <img src="images/aldair.png" alt="Aldair" className="w-full h-full object-cover" />
              </div>
              {/* Decorative elements */}
              <div className={`hidden md:block absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r ${theme.colors.gradient} opacity-50 animate-pulse z-0`} />
              <div className={`hidden md:block absolute -bottom-6 -left-6 w-8 h-8 rounded-full ${theme.colors.accent} opacity-30 z-0`} />
            </div>
          </div>
          
          {/* Content */}
          <div className={`${theme.colors.textSecondary} text-sm md:text-lg leading-relaxed space-y-4 md:space-y-6`}>
            <p className="text-center md:text-left">{description}</p>
            
            <div>
              <h3 className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 ${theme.colors.text}`}>{skillsTitle}</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className={`px-2 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-all hover:scale-105 hover:shadow-lg cursor-default ${theme.colors.backgroundTertiary} ${theme.colors.text}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-6 md:gap-8 pt-2 md:pt-4">
              <div className="text-center">
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${theme.colors.gradient} bg-clip-text text-transparent`}>5+</div>
                <div className={`text-xs md:text-sm ${theme.colors.textMuted}`}>{language === "es" ? "Años Exp" : "Years Exp"}</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${theme.colors.gradient} bg-clip-text text-transparent`}>20+</div>
                <div className={`text-xs md:text-sm ${theme.colors.textMuted}`}>{language === "es" ? "Proyectos" : "Projects"}</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${theme.colors.gradient} bg-clip-text text-transparent`}>10+</div>
                <div className={`text-xs md:text-sm ${theme.colors.textMuted}`}>{language === "es" ? "Clientes" : "Clients"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}