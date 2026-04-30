import { useThree, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useScrollProgress } from '../ScrollContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * CameraController syncs the three.js camera position with the page scroll.
 * It lerps the camera between two positions based on scroll progress (0‑1).
 */
export default function CameraController() {
  const { camera } = useThree();
  const scrollProgress = useScrollProgress();

  // Initialize ScrollTrigger once (only on client)
  if (typeof window !== 'undefined' && !ScrollTrigger.isEnabled()) {
    ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        scrollProgress.current = self.progress; // 0‑1
      },
      scrub: true,
    });
  }

  // Lerp camera position each frame
  useFrame(() => {
    const startPos = [0, 1, 5];
    const endPos = [0, 3, 8];
    const t = scrollProgress.current;
    camera.position.lerpVectors(
      new (camera.position.constructor as any)(...startPos),
      new (camera.position.constructor as any)(...endPos),
      t,
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
}
