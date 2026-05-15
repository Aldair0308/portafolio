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
      role: language === "es" ? "Full Stack Web Developer" : "Full Stack Web Developer",
      company: "Dirección General de Innovación — Gobierno del Estado de México",
      period: "Ene 2026 – Abr 2026",
      desc: language === "es"
        ? "Participé como desarrollador Full Stack en la creación de un sistema de gestión de riesgos para Oficialía Mayor del Gobierno del Estado de México. Desarrollo backend con FastAPI, frontend con templates HTML y gestión de base de datos MySQL. Despliegue del sistema y configuración con Docker. Implementación de autenticación y módulos administrativos para la gestión de información institucional."
        : "I participated as a Full Stack developer in creating a risk management system for the General Office of the Government of the State of Mexico. Backend development with FastAPI, frontend with HTML templates and MySQL database management. System deployment and Docker configuration. Implementation of authentication and administrative modules for institutional information management.",
      highlights: ["Python", "FastAPI", "MySQL", "Docker", "Git", "HTML", "CSS", "JavaScript"]
    },
    {
      role: language === "es" ? "Desarrollador Backend" : "Backend Developer",
      company: "UTVstay – Sistema de Gestión de Documentación de Estadías",
      period: "Ene 2025 – Ago 2025",
      desc: language === "es"
        ? "Desarrollo de un sistema backend con Laravel para la gestión de documentación de estadías. Implementación de autenticación, control de acceso y validaciones. Diseño de base de datos y estructura enfocada en seguridad y trazabilidad de la información."
        : "Development of a backend system with Laravel for internship documentation management. Implementation of authentication, access control and validations. Database design and structure focused on security and information traceability.",
      highlights: ["Laravel", "PHP", "MySQL", "Autenticación"]
    },
    {
      role: language === "es" ? "Desarrollador Backend" : "Backend Developer",
      company: "Merrash – Sitio Web Corporativo",
      period: "May 2024 – Ago 2024",
      desc: language === "es"
        ? "Desarrollo del backend de un sitio web corporativo utilizando Laravel. Implementación de lógica de negocio, gestión de contenido y estructura de datos con MySQL. Diseño de una arquitectura backend mantenible y preparada para futuras ampliaciones. Configuración de entornos de desarrollo y producción, priorizando estabilidad y buenas prácticas."
        : "Backend development of a corporate website using Laravel. Implementation of business logic, content management and data structure with MySQL. Design of a maintainable backend architecture ready for future expansions. Configuration of development and production environments, prioritizing stability and best practices.",
      highlights: ["Laravel", "PHP", "MySQL", "Arquitectura"]
    },
    {
      role: language === "es" ? "Desarrollador Backend" : "Backend Developer",
      company: "Pettech – Plataforma Tecnológica e Integración IoT",
      period: "Ene 2024 – Abr 2024",
      desc: language === "es"
        ? "Desarrollo de APIs REST con NestJS y TypeScript. Integración backend con aplicación móvil React Native. Implementación de lógica para comunicación y procesamiento de datos provenientes de un dispositivo ESP. Diseño modular enfocado en mantenibilidad y escalabilidad."
        : "REST API development with NestJS and TypeScript. Backend integration with React Native mobile app. Implementation of logic for communication and data processing from an ESP device. Modular design focused on maintainability and scalability.",
      highlights: ["NestJS", "TypeScript", "React Native", "IoT", "REST API"]
    }
  ];

  return (
    <section className={`min-h-screen flex items-center justify-center px-3 md:px-4 py-16 md:py-20 ${theme.colors.backgroundSecondary}`}>
      <div className="max-w-lg md:max-w-4xl w-full">
        {/* Section Header - Bigger on PC */}
        <div className="text-center mb-8 md:mb-16">
          <div className={`inline-block px-3 py-1 md:py-1 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 bg-gradient-to-r ${theme.colors.gradient} text-white`}>
            {language === "es" ? "Trayectoria" : "Journey"}
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl md:text-6xl font-bold ${theme.colors.text} mb-2 md:mb-4`}>
            {title}
          </h2>
          <p className={`text-sm md:text-lg ${theme.colors.textMuted} hidden md:block`}>{subtitle}</p>
          <div className={`w-16 md:w-24 h-0.5 mx-auto rounded-full bg-gradient-to-r ${theme.colors.gradient} mt-3 md:mt-4`} />
        </div>
        
        <div className="relative pl-6 md:pl-0">
          {/* Timeline line - Left on mobile, center on PC */}
          <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b ${theme.colors.gradient}`} />
          
          <div className="space-y-8 md:space-y-12">
            {experience.map((exp, i) => (
              <div key={i} className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className={`absolute left-2.5 md:left-1/2 w-3 md:w-4 h-3 md:h-4 rounded-full bg-gradient-to-r ${theme.colors.gradient} transform -translate-x-1/2 z-10`} />
                
                {/* Card */}
                <div className={`ml-6 md:ml-0 md:w-[45%] p-3 md:p-6 rounded-xl md:rounded-2xl ${theme.colors.card} border ${theme.colors.border} hover:scale-[1.02] md:hover:scale-105 transition-transform`}>
                  {/* Period Badge */}
                  <div className={`inline-block px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-medium mb-2 md:mb-3 bg-gradient-to-r ${theme.colors.gradient} text-white`}>
                    {exp.period}
                  </div>
                  
                  {/* Role & Company */}
                  <h3 className={`font-bold text-sm md:text-lg ${theme.colors.text}`}>
                    {exp.role}
                  </h3>
                  <p className={`text-xs md:text-sm mb-2 md:mb-3 ${theme.colors.accent}-400`}>
                    @{exp.company}
                  </p>
                  
                  {/* Description */}
                  <p className={`text-xs md:text-sm mb-3 md:mb-4 ${theme.colors.textSecondary}`}>
                    {exp.desc}
                  </p>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {exp.highlights.map((h, j) => (
                      <span 
                        key={j} 
                        className={`px-1.5 md:px-2 py-0.5 rounded text-xs ${theme.colors.backgroundTertiary} ${theme.colors.textSecondary}`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Spacer for PC */}
                <div className="hidden md:block md:w-[10%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}