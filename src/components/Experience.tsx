import { useLanguage } from "../LanguageContext";

export default function Experience() {
  const { language } = useLanguage();
  
  const title = language === "es" ? "Experiencia" : "Experience";

  const experience = [
    {
      role: language === "es" ? "Desarrollador Full-Stack" : "Full-Stack Developer",
      company: "TechCo",
      period: language === "es" ? "2021 - Actualidad" : "2021 - Present",
      desc: language === "es" 
        ? "Arquitectura de microservicios, CI/CD, liderazgo de equipo" 
        : "Microservices architecture, CI/CD, team leadership"
    },
    {
      role: language === "es" ? "Desarrollador Frontend" : "Frontend Developer",
      company: "Innovate Labs",
      period: language === "es" ? "2019 - 2021" : "2019 - 2021",
      desc: language === "es"
        ? "SPA con React + Redux, optimización de rendimiento"
        : "SPA with React + Redux, performance optimization"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-800 px-4 py-20">
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-neon">{title}</h2>
        
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-4 h-4 bg-neon rounded-full mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-white text-lg">{exp.role} @ {exp.company}</h3>
                <p className="text-sm text-gray-400">{exp.period}</p>
                <p className="text-gray-300 mt-1">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}