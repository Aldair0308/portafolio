import React from 'react';
import { Html } from '@react-three/drei';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <Html
      position={[0, 0, 0]}
      style={{
        background: 'rgba(0,0,0,0.6)',
        padding: '2rem',
        borderRadius: '0.5rem',
        color: '#fff',
        minWidth: '300px',
      }}
    >
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Mensaje enviado (simulado)');
        }}
      >
        <h2 className="text-2xl font-bold mb-2">Contacto</h2>
        <input
          type="text"
          placeholder="Nombre"
          className="p-2 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
          required
        />
        <input
          type="email"
          placeholder="Correo"
          className="p-2 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
          required
        />
        <textarea
          placeholder="Mensaje"
          className="p-2 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
          rows={4}
          required
        />
        <button
          type="submit"
          className="p-2 bg-neon text-black rounded hover:bg-neon/80 transition"
        >
          Enviar
        </button>
      </motion.form>
    </Html>
  );
}
