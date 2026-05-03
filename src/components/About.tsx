import { useLanguage } from "../LanguageContext";

export default function About() {
  const { t, language } = useLanguage();

  const title = language === "es" ? "Sobre Mí" : "About Me";
  const skillsTitle = language === "es" ? "Habilidades" : "Skills";
  const description = language === "es"
    ? "Desarrollador full-stack con más de 5 años de experiencia creando aplicaciones web con React, Node.js, TypeScript y servicios en la nube. Apasionado por la arquitectura limpia, código mantenible y entregar experiencias de usuario excepcionales."
    : "Full-stack developer with 5+ years of experience building web applications with React, Node.js, TypeScript and cloud services. Passionate about clean architecture, maintainable code and delivering exceptional user experiences.";

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-neon">
          {title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-6xl">
              👨‍💻
            </div>
          </div>
          
          <div className="text-gray-300 text-lg leading-relaxed">
            <p className="mb-6">{description}</p>
            
            <h3 className="text-xl font-semibold text-white mb-4">{skillsTitle}</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">PostgreSQL</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">MongoDB</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">AWS</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}