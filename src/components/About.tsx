import React from 'react';
import { Html } from '@react-three/drei';

export default function About() {
  return (
    <Html
      position={[0, 0, 0]}
      style={{
        color: '#fff',
        textAlign: 'center',
        width: '300px',
        transform: 'translate(-50%, -50%)',
      }}
      center
    >
      <h1 className="text-4xl font-bold mb-4">Aldair - Desarrollo y Gestión de Software</h1>
      <p className="text-lg">
        Soy un desarrollador apasionado por crear soluciones de software robustas y escalables, con experiencia en gestión de proyectos y equipos.
      </p>
    </Html>
  );
}
