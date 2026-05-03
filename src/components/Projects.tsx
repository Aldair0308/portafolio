import { useLanguage } from "../LanguageContext";
import { useTheme } from "../ThemeContext";

export default function Projects() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const title = t("Proyectos", "Projects");
  
  const projects = [
    {
      name: t("Plataforma E-commerce", "E-commerce Platform"),
      desc: t("Plataforma full-stack con pagos Stripe", "Full-stack platform with Stripe payments"),
      tech: "React, Node.js, Stripe"
    },
    {
      name: t("Dashboard Analítico", "Analytics Dashboard"),
      desc: t("Dashboard en tiempo real con WebSockets", "Real-time dashboard with WebSockets"),
      tech: "React, WebSocket, D3.js"
    },
    {
      name: t("API RESTful", "RESTful API"),
      desc: t("API escalable con autenticación JWT", "Scalable API with JWT authentication"),
      tech: "Node.js, Express, JWT"
    }
  ];

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 py-20 ${theme.colors.backgroundSecondary}`}>
      <div className="max-w-5xl mx-auto w-full">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${theme.colors.text}`}>{title}</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className={`p-6 rounded-xl hover:scale-105 transition ${theme.colors.card} border ${theme.colors.border}`}>
              <h3 className={`text-xl font-semibold mb-2 ${theme.colors.text}`}>{project.name}</h3>
              <p className={`mb-4 ${theme.colors.textMuted}`}>{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.split(", ").map((tech, j) => (
                  <span key={j} className={`px-2 py-1 rounded text-xs ${theme.colors.backgroundTertiary} ${theme.colors.textSecondary}`}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}