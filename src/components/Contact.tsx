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
    <section className={`min-h-screen flex items-center justify-center px-3 md:px-4 py-16 ${theme.colors.backgroundSecondary}`}>
      <div className="max-w-lg w-full">
        {/* Section Header - Smaller for mobile */}
        <div className="text-center mb-8 md:mb-12">
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${theme.colors.gradient} text-white`}>
            {language === "es" ? "Hablemos" : "Let's Talk"}
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold ${theme.colors.text} mb-2`}>
            {t("Contacto", "Contact")}
          </h2>
          <p className={`text-sm md:text-lg ${theme.colors.textMuted}`}>
            {language === "es" ? "¿Tienes un proyecto?" : "Have a project?"}
          </p>
          <div className={`w-16 h-0.5 mx-auto rounded-full bg-gradient-to-r ${theme.colors.gradient} mt-3`} />
        </div>
        
        {/* Form - Compact on mobile */}
        <div className={`p-4 md:p-6 rounded-xl ${theme.colors.card} border ${theme.colors.border} mb-4`}>
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            <input
              type="text"
              required
              className={`w-full p-3 md:p-4 rounded-lg ${theme.colors.backgroundTertiary} ${theme.colors.text} text-sm focus:ring-2 focus:ring-cyan-500 outline-none transition`}
              placeholder={t("Nombre / Name", "Name")}
            />
            <input
              type="email"
              required
              className={`w-full p-3 md:p-4 rounded-lg ${theme.colors.backgroundTertiary} ${theme.colors.text} text-sm focus:ring-2 focus:ring-cyan-500 outline-none transition`}
              placeholder={t("Email", "Email")}
            />
            <textarea
              rows={3}
              required
              className={`w-full p-3 md:p-4 rounded-lg ${theme.colors.backgroundTertiary} ${theme.colors.text} text-sm focus:ring-2 focus:ring-cyan-500 outline-none transition resize-none`}
              placeholder={t("Mensaje", "Message")}
            />
            <button
              type="submit"
              className={`w-full py-3 md:py-4 rounded-lg font-bold text-sm md:text-base bg-gradient-to-r ${theme.colors.gradient} text-white`}
            >
              {sent ? "✓" : t("Enviar", "Send")}
            </button>
          </form>
        </div>
        
        {/* Social Links - Grid 2x2 on mobile */}
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 p-3 rounded-lg ${theme.colors.backgroundTertiary} ${theme.colors.text}`}
            >
              <span>{social.icon}</span>
              <span className={`text-xs md:text-sm font-medium ${theme.colors.text}`}>{social.name}</span>
            </a>
          ))}
        </div>
        
        {/* Availability Badge */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className={`text-xs ${theme.colors.textSecondary}`}>
            {language === "es" ? "Disponible" : "Available"}
          </span>
        </div>
      </div>
    </section>
  );
}