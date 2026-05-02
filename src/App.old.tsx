import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Loader } from '@react-three/drei';
import React, { Suspense } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Playground from './components/Playground';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import { motion } from 'framer-motion';
import { ScrollProvider } from './ScrollContext';
import CameraController from './components/CameraController';

export default function App() {
  return (
    <ScrollProvider>
      <motion.div className="relative w-screen h-screen overflow-hidden bg-darkbg">
        {/* Fixed 3D canvas as background layer */}
        <Canvas
          camera={{ position: [0, 1, 5], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          style={{ position: 'fixed', inset: 0, zIndex: -1 }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          {/* Camera controller will sync with scroll */}
          <CameraController />
          <Suspense fallback={<Html center>Loading...</Html>}>
            <Hero />
            <Projects />
            <Playground />
            <Skills />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>

        {/* Scrollable content overlay */}
        <div className="relative z-10 overflow-y-auto h-screen">
          <section className="min-h-screen flex items-center justify-center" id="about">
            <About />
          </section>
          <section className="min-h-screen flex items-center justify-center" id="experience">
            <Experience />
          </section>
          <section className="min-h-screen flex items-center justify-center" id="education">
            <Education />
          </section>
          <section className="min-h-screen flex items-center justify-center" id="contact">
            <Contact />
          </section>
        </div>
      </motion.div>
    </ScrollProvider>
  );
}
