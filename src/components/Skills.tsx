import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

export default function Skills() {
  const groupRef = useRef<any>();
  const colors = ['#ff5555', '#55ff55', '#5555ff', '#ffff55'];
  const positions = [
    [-2, 1, -2],
    [2, 1, -2],
    [-2, 1, 2],
    [2, 1, 2],
  ];

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <Sphere key={i} args={[0.5, 32, 32]} position={pos as any}>
          <meshStandardMaterial color={colors[i % colors.length]} />
        </Sphere>
      ))}
    </group>
  );
}
