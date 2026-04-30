import React, { useRef } from 'react';
import { useBox, Physics } from '@react-three/cannon';
import { Sphere, Torus } from '@react-three/drei';
import { useScrollProgress } from '../ScrollContext';
import { useFrame } from '@react-three/fiber';

function FloatingBody({
  shape,
  args,
  color,
  position,
}: {
  shape: 'sphere' | 'torus';
  args: any[];
  color: string;
  position: [number, number, number];
}) {
  const [ref] = useBox(() => ({ mass: 1, position }));
  // Apply subtle scroll-based offset for visual interest
  const scroll = useScrollProgress();
  useFrame(() => {
    if (ref.current) {
      // Slight horizontal shift based on scroll progress (range -0.5..0.5)
      const offset = (scroll.current - 0.5) * 2; // -1..1
      ref.current.position.x += offset * 0.001; // tiny drift
    }
  });

  return (
    <group ref={ref}>
      {shape === 'sphere' && <Sphere args={args}>
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
      </Sphere>}
      {shape === 'torus' && <Torus args={args}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.1} />
      </Torus>}
    </group>
  );
}

export default function Playground() {
  // Define positions for a few objects
  const objects = [
    { shape: 'sphere', args: [0.4, 32, 32], color: '#ff00ff', position: [-1, 2, 0] as [number, number, number] },
    { shape: 'torus', args: [0.5, 0.2, 16, 100], color: '#00ffff', position: [1, 3, 0] as [number, number, number] },
    { shape: 'sphere', args: [0.3, 32, 32], color: '#ffff00', position: [0, 4, 0] as [number, number, number] },
  ];

  return (
    <Physics>
      {/* Ground Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      {objects.map((obj, i) => (
        <FloatingBody
          key={i}
          shape={obj.shape as any}
          args={obj.args}
          color={obj.color}
          position={obj.position}
        />
      ))}
    </Physics>
  );
}
