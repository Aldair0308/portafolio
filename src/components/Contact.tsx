import React from 'react';
import { Html } from '@react-three/drei';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <Html
      center
      style={{
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black/30 backdrop-blur-lg border border-neon/30 rounded-xl p-8 w-full max-w-md mx-4"
      >
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
        </form>
      </motion.div>
    </Html>
  );
}
