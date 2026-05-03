import { useState } from "react";
import { useLanguage } from "../LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-20">
      <div className="max-w-md w-full bg-gray-800/80 backdrop-blur-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-neon mb-6 text-center">
          {t("Contacto", "Contact")}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder={t("Nombre", "Name")}
            className="w-full p-3 bg-gray-700 rounded text-white focus:ring-2 focus:ring-neon outline-none"
            required
          />
          <input
            type="email"
            placeholder={t("Correo", "Email")}
            className="w-full p-3 bg-gray-700 rounded text-white focus:ring-2 focus:ring-neon outline-none"
            required
          />
          <textarea
            placeholder={t("Mensaje", "Message")}
            rows={4}
            className="w-full p-3 bg-gray-700 rounded text-white focus:ring-2 focus:ring-neon outline-none"
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-neon text-black font-bold rounded hover:bg-neon/80 transition"
          >
            {sent ? (t("¡Enviado!", "Sent!")) : (t("Enviar", "Send"))}
          </button>
        </form>
        
        <a
          href="/resume.pdf"
          target="_blank"
          className="block mt-4 text-center text-neon text-sm hover:underline"
        >
          {t("Descargar CV", "Download CV")}
        </a>
      </div>
    </section>
  );
}