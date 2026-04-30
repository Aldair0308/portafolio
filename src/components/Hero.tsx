import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { gsap } from 'gsap';

export default function Hero() {
  const boxRef = useRef<any>();

  // Simple floating animation using GSAP
  React.useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current.rotation, {
        y: Math.PI * 2,
        repeat: -1,
        ease: 'none',
        duration: 10,
      });
    }
  }, []);

  // Slowly move forward/backward
  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.position.y = Math.sin(performance.now() / 1000) * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Box ref={boxRef} args={[1, 1, 1]}>
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
      </Box>
    </group>
  );
}
