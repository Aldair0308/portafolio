import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

const skills = [
  { name: "React", level: 95 },
  { name: "Node.js", level: 90 },
  { name: "TypeScript", level: 92 },
  { name: "Docker", level: 85 },
  { name: "AWS", level: 80 },
];

export default function Skills() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (barRef.current) {
      anime({
        targets: barRef.current.querySelectorAll(".bar-fill"),
        width: (el) => el.getAttribute("data-level") + "%",
        easing: "easeOutCubic",
        duration: 1200,
        delay: anime.stagger(100),
      });
    }
  }, []);

  return (
    <section className="min-h-screen bg-gray-900 text-gray-100 py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-neon">Skills</h2>
      <div ref={barRef} className="max-w-2xl mx-auto space-y-4">
        {skills.map((s, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span>{s.name}</span>
              <span>{s.level}%</span>
            </div>
            <div className="h-4 bg-gray-700 rounded overflow-hidden">
              <div className="bar-fill h-full bg-neon" data-level={s.level} style={{ width: 0 }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}