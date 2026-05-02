export default function About() {
  return (
    <section className="min-h-screen flex items-center bg-gray-900 text-gray-100 py-20 px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <div className="w-48 h-48 rounded-full bg-neon/20 flex items-center justify-center text-4xl">👨‍💻</div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-neon">About Me</h2>
          <p className="mb-4">
            Full‑stack developer with 5+ years building web apps using React, Node.js, TypeScript and cloud services.
            Passionate about clean architecture, CI/CD and delivering high‑quality user experiences.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>⚛️ React, Next.js</li>
            <li>🚀 Node.js, Express, NestJS</li>
            <li>🗄️ PostgreSQL, MongoDB</li>
            <li>☁️ AWS, Docker</li>
          </ul>
        </div>
      </div>
    </section>
  );
}