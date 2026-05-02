import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

const projects = [
  { title: "E‑commerce Platform", desc: "Full‑stack with Stripe payments" },
  { title: "Real‑time Dashboard", desc: "WebSocket analytics" },
  { title: "Mobile App", desc: "React Native + GraphQL" },
];

export default function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      anime({
        targets: gridRef.current.children,
        rotateY: [90, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        easing: "easeOutBack",
        duration: 800,
      });
    }
  }, []);

  return (
    <section className="min-h-screen bg-gray-800 text-gray-100 py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-neon">Projects</h2>
      <div ref={gridRef} className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-300">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}