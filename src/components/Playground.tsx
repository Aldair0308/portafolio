import React, { useRef } from 'react';
import { useBox, Physics } from '@react-three/cannon';
import { Box } from '@react-three/drei';

function FallingBox({ position }: { position: [number, number, number] }) {
  const [ref] = useBox(() => ({ mass: 1, position }));
  return (
    <Box ref={ref} args={[0.5, 0.5, 0.5]}>
      <meshStandardMaterial color="#00ff00" />
    </Box>
  );
}

export default function Playground() {
  const boxPositions: [number, number, number][] = [
    [-1, 2, 0],
    [1, 3, 0],
    [0, 4, 0],
  ];

  return (
    <Physics>
      {/* Ground Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      {boxPositions.map((pos, i) => (
        <FallingBox key={i} position={pos} />
      ))}
    </Physics>
  );
}
