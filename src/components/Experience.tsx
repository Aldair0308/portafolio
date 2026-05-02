const experience = [
  { role: "Full‑Stack Engineer", company: "TechCo", period: "2021‑Present", desc: "Microservices, CI/CD, team lead" },
  { role: "Frontend Developer", company: "Innovate Labs", period: "2019‑2021", desc: "SPA with React + Redux" },
];

export default function Experience() {
  return (
    <section className="min-h-screen bg-gray-800 text-gray-100 py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-neon">Experience</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {experience.map((e, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-4 h-4 bg-neon rounded-full mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold">{e.role} @ {e.company}</h3>
              <p className="text-sm text-gray-400">{e.period}</p>
              <p className="text-gray-300">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}