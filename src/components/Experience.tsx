import { useLanguage } from "../LanguageContext";
import { useTheme } from "../ThemeContext";

export default function Experience() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  
  const title = language === "es" ? "Experiencia" : "Experience";
  const subtitle = language === "es" ? "Trayectoria" : "Journey";

  const experience = [
    {
      role: language === "es" ? "Full-Stack Dev" : "Full-Stack Developer",
      company: "TechCo",
      period: "2021 - Hoy",
      desc: language === "es" ? "Microservicios, CI/CD, Team Lead" : "Microservices, CI/CD, Team Lead",
      highlights: ["AWS", "K8s", " Leadership"]
    },
    {
      role: language === "es" ? "Frontend Dev" : "Frontend Developer",
      company: "Innovate Labs",
      period: "2019 - 2021",
      desc: language === "es" ? "SPA con React + Redux" : "SPA with React + Redux",
      highlights: ["React", "Redux", "Perf"]
    },
    {
      role: language === "es" ? "Junior Dev" : "Junior Developer",
      company: "StartUp XYZ",
      period: "2018 - 2019",
      desc: language === "es" ? "Full-stack Node.js" : "Full-stack Node.js",
      highlights: ["Node", "Mongo", "API"]
    }
  ];

  return (
    <section className={`min-h-screen flex items-center justify-center px-3 md:px-4 py-16 ${theme.colors.backgroundSecondary}`}>
      <div className="max-w-lg md:max-w-4xl w-full">
        {/* Section Header - Smaller for mobile */}
        <div className="text-center mb-8 md:mb-12">
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${theme.colors.gradient} text-white`}>
            {subtitle}
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold ${theme.colors.text} mb-2`}>
            {title}
          </h2>
          <div className={`w-16 h-0.5 mx-auto rounded-full bg-gradient-to-r ${theme.colors.gradient} mt-3`} />
        </div>
        
        <div className="relative pl-6 md:pl-0">
          {/* Timeline line - Left aligned on mobile */}
          <div className={`absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b ${theme.colors.gradient}`} />
          
          <div className="space-y-6 md:space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <div className={`absolute left-2.5 md:left-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r ${theme.colors.gradient} transform -translate-x-1/2 z-10`} />
                
                {/* Card - Simpler on mobile */}
                <div className={`ml-6 md:ml-0 p-3 md:p-5 rounded-xl ${theme.colors.card} border ${theme.colors.border}`}>
                  {/* Period Badge */}
                  <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-2 bg-gradient-to-r ${theme.colors.gradient} text-white`}>
                    {exp.period}
                  </div>
                  
                  {/* Role & Company */}
                  <h3 className={`font-bold text-sm md:text-base ${theme.colors.text}`}>
                    {exp.role}
                  </h3>
                  <p className={`text-xs md:text-sm mb-2 ${theme.colors.accent}-400`}>
                    @{exp.company}
                  </p>
                  
                  {/* Description */}
                  <p className={`text-xs md:text-sm mb-2 ${theme.colors.textSecondary}`}>
                    {exp.desc}
                  </p>
                  
                  {/* Highlights - Smaller tags */}
                  <div className="flex flex-wrap gap-1">
                    {exp.highlights.map((h, j) => (
                      <span 
                        key={j} 
                        className={`px-1.5 py-0.5 rounded text-xs ${theme.colors.backgroundTertiary} ${theme.colors.textSecondary}`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}