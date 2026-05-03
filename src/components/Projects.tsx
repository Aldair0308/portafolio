import { useLanguage } from "../LanguageContext";
import { useTheme } from "../ThemeContext";

export default function Projects() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const title = t("Proyectos", "Projects");
  const subtitle = language === "es" 
    ? "Proyectos recientes en los que he trabajado" 
    : "Recent projects I've worked on";
  
  const projects = [
    {
      name: language === "es" ? "Plataforma E-commerce" : "E-commerce Platform",
      desc: language === "es" 
        ? "Plataforma full-stack con pagos Stripe,panel de admin y analytics" 
        : "Full-stack platform with Stripe payments, admin panel and analytics",
      tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: language === "es" ? "Dashboard Analítico" : "Analytics Dashboard",
      desc: language === "es" 
        ? "Dashboard en tiempo real con WebSockets y visualizaciones" 
        : "Real-time dashboard with WebSockets and visualizations",
      tech: ["React", "WebSocket", "D3.js", "MongoDB"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: language === "es" ? "API RESTful" : "RESTful API",
      desc: language === "es" 
        ? "API escalable con autenticación JWT y documentación" 
        : "Scalable API with JWT authentication and documentation",
      tech: ["Node.js", "Express", "JWT", "Redis"],
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 py-20 ${theme.colors.backgroundSecondary}`}>
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 bg-gradient-to-r ${theme.colors.gradient} text-white`}>
            {language === "es" ? "Mi Trabajo" : "My Work"}
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold ${theme.colors.text} mb-4`}>
            {title}
          </h2>
          <p className={`text-lg ${theme.colors.textMuted}`}>{subtitle}</p>
          <div className={`w-24 h-1 mx-auto rounded-full bg-gradient-to-r ${theme.colors.gradient} mt-4`} />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={`group relative p-1 rounded-2xl bg-gradient-to-br ${project.color} hover:scale-105 transition-all duration-300`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity`} />
              <div className={`relative p-6 rounded-xl h-full ${theme.colors.card} border ${theme.colors.border} flex flex-col`}>
                {/* Project Number */}
                <div className={`text-6xl font-bold opacity-10 mb-4 ${theme.colors.text}`}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                
                {/* Project Title */}
                <h3 className={`text-xl font-bold mb-3 ${theme.colors.text}`}>
                  {project.name}
                </h3>
                
                {/* Description */}
                <p className={`text-sm mb-4 flex-grow ${theme.colors.textSecondary}`}>
                  {project.desc}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span 
                      key={j} 
                      className={`px-2 py-1 rounded-md text-xs font-medium ${theme.colors.backgroundTertiary} ${theme.colors.textSecondary}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* View More */}
                <div className={`flex items-center gap-2 text-sm font-medium text-${theme.colors.accent}-400 cursor-pointer hover:underline`}>
                  {language === "es" ? "Ver más" : "View more"}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}