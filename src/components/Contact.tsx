import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { useTheme } from "../ThemeContext";

export default function Contact() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 py-20 ${theme.colors.backgroundSecondary}`}>
      <div className={`max-w-md w-full p-8 rounded-xl ${theme.colors.card} backdrop-blur-lg border ${theme.colors.border}`}>
        <h2 className={`text-2xl font-bold text-center mb-6 ${theme.colors.text}`}>
          {t("Contacto", "Contact")}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder={t("Nombre", "Name")}
            className={`w-full p-3 rounded ${theme.colors.backgroundTertiary} ${theme.colors.text} focus:ring-2 focus:ring-cyan-500 outline-none`}
            required
          />
          <input
            type="email"
            placeholder={t("Correo", "Email")}
            className={`w-full p-3 rounded ${theme.colors.backgroundTertiary} ${theme.colors.text} focus:ring-2 focus:ring-cyan-500 outline-none`}
            required
          />
          <textarea
            placeholder={t("Mensaje", "Message")}
            rows={4}
            className={`w-full p-3 rounded ${theme.colors.backgroundTertiary} ${theme.colors.text} focus:ring-2 focus:ring-cyan-500 outline-none`}
            required
          />
          <button
            type="submit"
            className={`w-full p-3 font-bold rounded transition bg-gradient-to-r ${theme.colors.gradient} text-white`}
          >
            {sent ? (t("¡Enviado!", "Sent!")) : (t("Enviar", "Send"))}
          </button>
        </form>
        
        <a
          href="/resume.pdf"
          target="_blank"
          className={`block mt-4 text-center text-sm hover:underline ${theme.colors.accent}`}
        >
          {t("Descargar CV", "Download CV")}
        </a>
      </div>
    </section>
  );
}