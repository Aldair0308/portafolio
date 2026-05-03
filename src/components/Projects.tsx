import { useLanguage } from "../LanguageContext";
import { useTheme } from "../ThemeContext";

export default function Projects() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const title = t("Proyectos", "Projects");
  const subtitle = language === "es" 
    ? "Proyectos recientes" 
    : "Recent projects";
  
  const projects = [
    {
      name: language === "es" ? "E-commerce" : "E-commerce",
      desc: language === "es" 
        ? "Plataforma full-stack con pagos Stripe" 
        : "Full-stack with Stripe payments",
      tech: ["React", "Node.js", "Stripe"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: language === "es" ? "Dashboard" : "Dashboard",
      desc: language === "es" 
        ? "Dashboard en tiempo real" 
        : "Real-time dashboard",
      tech: ["React", "WebSocket", "D3.js"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: language === "es" ? "RESTful API" : "RESTful API",
      desc: language === "es" 
        ? "API escalable con JWT" 
        : "Scalable API with JWT",
      tech: ["Node.js", "Express", "JWT"],
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className={`min-h-screen flex items-center justify-center px-3 md:px-4 py-16 ${theme.colors.backgroundSecondary}`}>
      <div className="max-w-lg md:max-w-6xl w-full">
        {/* Section Header - Smaller for mobile */}
        <div className="text-center mb-8 md:mb-12">
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${theme.colors.gradient} text-white`}>
            {language === "es" ? "Mi Trabajo" : "My Work"}
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold ${theme.colors.text} mb-2`}>
            {title}
          </h2>
          <p className={`text-sm md:text-lg ${theme.colors.textMuted}`}>{subtitle}</p>
          <div className={`w-16 h-0.5 mx-auto rounded-full bg-gradient-to-r ${theme.colors.gradient} mt-3`} />
        </div>
        
        {/* Single column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={`relative p-0.5 rounded-xl md:rounded-2xl bg-gradient-to-br ${project.color} hover:scale-[1.02] transition-all duration-300`}
            >
              <div className={`relative p-4 md:p-5 rounded-xl ${theme.colors.card} border ${theme.colors.border}`}>
                {/* Project Number - Smaller */}
                <div className={`text-4xl md:text-5xl font-bold opacity-10 mb-2 ${theme.colors.text}`}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                
                {/* Project Title - Smaller */}
                <h3 className={`text-lg md:text-xl font-bold mb-2 ${theme.colors.text}`}>
                  {project.name}
                </h3>
                
                {/* Description - Smaller */}
                <p className={`text-xs md:text-sm mb-3 ${theme.colors.textSecondary}`}>
                  {project.desc}
                </p>
                
                {/* Technologies - Smaller tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tech.map((tech, j) => (
                    <span 
                      key={j} 
                      className={`px-2 py-0.5 rounded text-xs ${theme.colors.backgroundTertiary} ${theme.colors.textSecondary}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}