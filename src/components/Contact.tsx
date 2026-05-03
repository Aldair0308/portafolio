import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { useTheme } from "../ThemeContext";

export default function Contact() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const socialLinks = [
    { name: "GitHub", icon: "🐙", url: "https://github.com" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
    { name: "Twitter", icon: "🐦", url: "https://twitter.com" },
    { name: "Email", icon: "📧", url: "mailto:hello@aldair.dev" }
  ];

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 py-20 ${theme.colors.backgroundSecondary}`}>
      <div className="max-w-4xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 bg-gradient-to-r ${theme.colors.gradient} text-white`}>
            {language === "es" ? "Hablemos" : "Let's Talk"}
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold ${theme.colors.text} mb-4`}>
            {t("Contacto", "Contact")}
          </h2>
          <p className={`text-lg ${theme.colors.textMuted}`}>
            {language === "es" 
              ? "¿Tienes un proyecto en mente? Hablemos." 
              : "Have a project in mind? Let's talk."}
          </p>
          <div className={`w-24 h-1 mx-auto rounded-full bg-gradient-to-r ${theme.colors.gradient} mt-4`} />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className={`p-8 rounded-2xl ${theme.colors.card} border ${theme.colors.border}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme.colors.text}`}>
                  {t("Nombre", "Name")}
                </label>
                <input
                  type="text"
                  required
                  className={`w-full p-4 rounded-xl ${theme.colors.backgroundTertiary} ${theme.colors.text} focus:ring-2 focus:ring-cyan-500 outline-none transition`}
                  placeholder={language === "es" ? "Tu nombre" : "Your name"}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme.colors.text}`}>
                  {t("Correo", "Email")}
                </label>
                <input
                  type="email"
                  required
                  className={`w-full p-4 rounded-xl ${theme.colors.backgroundTertiary} ${theme.colors.text} focus:ring-2 focus:ring-cyan-500 outline-none transition`}
                  placeholder={language === "es" ? "tu@email.com" : "your@email.com"}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme.colors.text}`}>
                  {t("Mensaje", "Message")}
                </label>
                <textarea
                  rows={4}
                  required
                  className={`w-full p-4 rounded-xl ${theme.colors.backgroundTertiary} ${theme.colors.text} focus:ring-2 focus:ring-cyan-500 outline-none transition resize-none`}
                  placeholder={language === "es" ? "Cuéntame sobre tu proyecto..." : "Tell me about your project..."}
                />
              </div>
              <button
                type="submit"
                className={`w-full py-4 rounded-xl font-bold transition-all hover:scale-105 bg-gradient-to-r ${theme.colors.gradient} text-white shadow-lg hover:shadow-xl`}
              >
                {sent ? t("¡Mensaje enviado! 🎉", "Message sent! 🎉") : t("Enviar mensaje", "Send message")}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Social Links */}
            <div className={`p-8 rounded-2xl ${theme.colors.card} border ${theme.colors.border}`}>
              <h3 className={`text-xl font-bold mb-6 ${theme.colors.text}`}>
                {language === "es" ? "Redes Sociales" : "Social Networks"}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.slice(0, 4).map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-xl ${theme.colors.backgroundTertiary} hover:scale-105 transition-transform`}
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className={`font-medium ${theme.colors.text}`}>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Availability */}
            <div className={`p-8 rounded-2xl ${theme.colors.card} border ${theme.colors.border}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
                <span className={`font-medium ${theme.colors.text}`}>
                  {language === "es" ? "Disponible para proyectos" : "Available for projects"}
                </span>
              </div>
              <p className={`text-sm ${theme.colors.textSecondary}`}>
                {language === "es" 
                  ? "Actualmente accepting nuevos proyectos freelance y posiciones full-time." 
                  : "Currently accepting new freelance projects and full-time positions."}
              </p>
            </div>
            
            {/* Resume Download */}
            <a
              href="/resume.pdf"
              target="_blank"
              className={`flex items-center justify-center gap-3 p-4 rounded-xl font-medium bg-gradient-to-r ${theme.colors.gradient} text-white hover:scale-105 transition-transform`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t("Descargar CV", "Download CV")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}