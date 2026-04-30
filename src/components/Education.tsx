import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  const studies = [
    {
      titulo: 'Ingeniería en Sistemas Computacionales',
      institucion: 'Universidad Tecnológica de México',
      periodo: '2015 – 2020',
    },
    {
      titulo: 'Certificación Frontend React',
      institucion: 'Platzi',
      periodo: '2021',
    },
  ];

  return (
    <div className="bg-gray-800/70 backdrop-blur-md rounded-xl p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-neon mb-4">Educación</h2>
      {studies.map((edu, i) => (
        <div key={i} className="mb-3">
          <h3 className="text-xl font-semibold text-white">{edu.titulo}</h3>
          <p className="text-sm text-gray-300">{edu.institucion} – {edu.periodo}</p>
        </div>
      ))}
    </div>
  );
}
