import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Loader } from '@react-three/drei';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Playground from './components/Playground';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', component: <Hero /> },
  { id: 'about', component: <About /> },
  { id: 'projects', component: <Projects /> },
  { id: 'playground', component: <Playground /> },
  { id: 'skills', component: <Skills /> },
  { id: 'contact', component: <Contact /> },
];

export default function App() {
  return (
    <motion.div className="relative w-screen h-screen overflow-hidden bg-darkbg">
      <Canvas
        camera={{ position: [0, 1, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={<Html center>Loading...</Html>}>
          {sections.map((sec) => (
            <group key={sec.id}>{sec.component}</group>
          ))}
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Loader />
    </motion.div>
  );
}
