import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="bg-black/30 backdrop-blur-lg border border-neon/30 rounded-xl p-8 w-full max-w-md mx-4">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">Contacto</h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Mensaje enviado (simulado)');
        }}
      >
        <input
          type="text"
          placeholder="Nombre"
          className="p-3 rounded bg-gray-800/60 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-neon transition"
          required
        />
        <input
          type="email"
          placeholder="Correo"
          className="p-3 rounded bg-gray-800/60 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-neon transition"
          required
        />
        <textarea
          placeholder="Mensaje"
          className="p-3 rounded bg-gray-800/60 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-neon transition"
          rows={4}
          required
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05, backgroundColor: '#00ffff80' }}
          whileTap={{ scale: 0.95 }}
          className="p-3 bg-neon text-black rounded hover:bg-neon/80 transition"
        >
          Enviar
        </motion.button>
        <a href="/resume.pdf" target="_blank" className="mt-4 text-sm text-neon hover:underline">Descargar CV</a>
      </form>
    </div>
  );
}
