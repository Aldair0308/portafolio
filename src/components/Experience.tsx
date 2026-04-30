import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: 'Desarrollador Full Stack',
      empresa: 'TechCo',
      periodo: 'Jun 2022 – Actualidad',
      descripcion:
        'Desarrollo de aplicaciones web con React, Node.js y bases de datos PostgreSQL. Implementación de CI/CD y arquitectura basada en micro‑servicios.',
    },
    {
      role: 'Ingeniero de Frontend',
      empresa: 'Innovate Labs',
      periodo: 'Ene 2020 – May 2022',
      descripcion:
        'Creación de interfaces interactivas usando React, Redux y TypeScript. Optimización del rendimiento y accesibilidad.',
    },
  ];

  return (
    <div className="bg-gray-800/70 backdrop-blur-md rounded-xl p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-neon mb-4">Experiencia</h2>
      {experiences.map((exp, i) => (
        <div key={i} className="mb-4">
          <h3 className="text-xl font-semibold text-white">
            {exp.role} @ {exp.empresa}
          </h3>
          <p className="text-sm text-gray-300 mb-1">{exp.periodo}</p>
          <p className="text-gray-200">{exp.descripcion}</p>
        </div>
      ))}
    </div>
  );
}
