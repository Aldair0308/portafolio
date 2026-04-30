import React, { createContext, useContext, useRef } from 'react';

/**
 * ScrollContext provides a mutable ref with the current scroll progress (0‑1).
 * CameraController updates this ref via GSAP ScrollTrigger.
 */
export const ScrollContext = createContext<{ progress: React.MutableRefObject<number> } | null>(null);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const progress = useRef(0);
  return <ScrollContext.Provider value={{ progress }}>{children}</ScrollContext.Provider>;
};

export const useScrollProgress = () => {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error('useScrollProgress must be used within ScrollProvider');
  return ctx.progress;
};
