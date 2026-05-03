import { useLanguage } from "../LanguageContext";
import { useTheme } from "../ThemeContext";

export default function Experience() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  
  const title = language === "es" ? "Experiencia" : "Experience";
  const subtitle = language === "es" 
    ? "Mi trayectoria profesional" 
    : "My professional journey";

  const experience = [
    {
      role: language === "es" ? "Desarrollador Full-Stack" : "Full-Stack Developer",
      company: "TechCo",
      period: language === "es" ? "2021 - Hoy" : "2021 - Present",
      desc: language === "es" 
        ? "Arquitectura de microservicios, CI/CD, liderazgo de equipo de 5 desarrolladores" 
        : "Microservices architecture, CI/CD, team leadership of 5 developers",
      highlights: language === "es" 
        ? ["AWS Lambda", "Kubernetes", "Team Lead"] 
        : ["AWS Lambda", "Kubernetes", "Team Lead"]
    },
    {
      role: language === "es" ? "Desarrollador Frontend" : "Frontend Developer",
      company: "Innovate Labs",
      period: language === "es" ? "2019 - 2021" : "2019 - 2021",
      desc: language === "es"
        ? "SPA con React + Redux, optimización de rendimiento"
        : "SPA with React + Redux, performance optimization",
      highlights: language === "es" 
        ? ["React", "Redux", "Performance"] 
        : ["React", "Redux", "Performance"]
    },
    {
      role: language === "es" ? "Desarrollador Junior" : "Junior Developer",
      company: "StartUp XYZ",
      period: language === "es" ? "2018 - 2019" : "2018 - 2019",
      desc: language === "es"
        ? "Desarrollo full-stack con Node.js y MongoDB"
        : "Full-stack development with Node.js and MongoDB",
      highlights: language === "es" 
        ? ["Node.js", "MongoDB", "REST API"] 
        : ["Node.js", "MongoDB", "REST API"]
    }
  ];

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 py-20 ${theme.colors.backgroundSecondary}`}>
      <div className="max-w-4xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 bg-gradient-to-r ${theme.colors.gradient} text-white`}>
            {language === "es" ? "Trayectoria" : "Journey"}
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold ${theme.colors.text} mb-4`}>
            {title}
          </h2>
          <p className={`text-lg ${theme.colors.textMuted}`}>{subtitle}</p>
          <div className={`w-24 h-1 mx-auto rounded-full bg-gradient-to-r ${theme.colors.gradient} mt-4`} />
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b ${theme.colors.gradient}`} />
          
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <div key={i} className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${theme.colors.gradient} transform -translate-x-1/2 z-10`} />
                
                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[45%] p-6 rounded-2xl ${theme.colors.card} border ${theme.colors.border} hover:scale-105 transition-transform`}>
                  {/* Period Badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${theme.colors.gradient} text-white`}>
                    {exp.period}
                  </div>
                  
                  {/* Role & Company */}
                  <h3 className={`font-bold text-lg ${theme.colors.text}`}>
                    {exp.role}
                  </h3>
                  <p className={`text-sm mb-3 ${theme.colors.accent}-400`}>
                    @{exp.company}
                  </p>
                  
                  {/* Description */}
                  <p className={`text-sm mb-4 ${theme.colors.textSecondary}`}>
                    {exp.desc}
                  </p>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h, j) => (
                      <span 
                        key={j} 
                        className={`px-2 py-1 rounded-md text-xs ${theme.colors.backgroundTertiary} ${theme.colors.textSecondary}`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Spacer for alternate layout */}
                <div className="hidden md:block md:w-[10%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}