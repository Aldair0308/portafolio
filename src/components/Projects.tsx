import React from 'react';
import { Box } from '@react-three/drei';
import { useNavigate } from 'react-router-dom'; // placeholder, not used now

export default function Projects() {
  const positions = [
    [-2, 0, -3],
    [0, 0, -3],
    [2, 0, -3],
  ];

  return (
    <group>
      {positions.map((pos, i) => (
        <Box key={i} position={pos as any} args={[1, 1, 0.2]}>
          <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.3} />
        </Box>
      ))}
    </group>
  );
}
