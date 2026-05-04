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
      name: "VILBA Web",
      desc: language === "es" 
        ? "Sitio web empresarial para servicios de construcción y Renta de Maquinaria. Laravel + MySQL + Bootstrap." 
        : "Business website for construction services and heavy equipment rental. Laravel + MySQL + Bootstrap.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      color: "from-cyan-500 to-blue-500",
      link: "https://aldair0308.github.io/vilba-web/index.html"
    },
    {
      name: language === "es" ? "Plataforma E-commerce" : "E-commerce Platform",
      desc: language === "es" 
        ? "Plataforma full-stack con pagos Stripe, panel de admin y analytics" 
        : "Full-stack platform with Stripe payments, admin panel and analytics",
      tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: language === "es" ? "Dashboard Analítico" : "Analytics Dashboard",
      desc: language === "es" 
        ? "Dashboard en tiempo real con WebSockets y visualizaciones" 
        : "Real-time dashboard with WebSockets and visualizations",
      tech: ["React", "WebSocket", "D3.js", "MongoDB"],
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className={`min-h-screen flex items-center justify-center px-3 md:px-4 py-16 ${theme.colors.backgroundSecondary}`}>
      <div className="max-w-lg md:max-w-6xl w-full">
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <a 
              key={i}
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative p-0.5 rounded-xl md:rounded-2xl bg-gradient-to-br ${project.color} hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
            >
              {/* Project Preview Image */}
              {/* Project Preview - Simple placeholder */}
              <div className="h-24 md:h-28 rounded-t-xl bg-gradient-to-br from-orange-600 to-orange-800 flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl tracking-widest">VILBA</span>
              </div>
              
              <div className={`relative p-4 md:p-5 rounded-b-xl ${theme.colors.card} border border-t-0 ${theme.colors.border} flex flex-col`}>
                <div className={`text-4xl md:text-5xl font-bold opacity-10 mb-2 ${theme.colors.text}`}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                
                <h3 className={`text-lg md:text-xl font-bold mb-2 ${theme.colors.text}`}>
                  {project.name}
                </h3>
                
                <p className={`text-xs md:text-sm mb-3 flex-grow ${theme.colors.textSecondary}`}>
                  {project.desc}
                </p>
                
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
                
                <div className={`flex items-center gap-2 text-xs md:text-sm font-medium ${theme.colors.accent}-400`}>
                  {language === "es" ? "Ver más" : "View more"}
                  <svg className="w-3 md:w-4 h-3 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}