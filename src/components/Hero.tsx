import { useEffect, useState, useCallback } from "react";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { language, setLanguage, t } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const addRipple = useCallback((x: number, y: number) => {
    const id = Date.now();
    setRipples(prev => [...prev.slice(-5), { x, y, id }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 800);
  }, []);

  useEffect(() => {
    let lastX = 0, lastY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
      const dist = Math.sqrt(Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2));
      if (dist > 50) {
        addRipple(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [addRipple]);

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-950 to-gray-900" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}/>

      {/* Dynamic mouse glow */}
      <div className="absolute inset-0 transition-all duration-75 ease-out pointer-events-none" style={{
        background: `
          radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(6,182,212,0.15) 0%, transparent 50%),
          radial-gradient(500px circle at ${100 - mousePos.x}% ${100 - mousePos.y}%, rgba(139,92,246,0.12) 0%, transparent 50%)
        `
      }}/>

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <div key={ripple.id} className="absolute rounded-full pointer-events-none animate-ping" style={{
          left: ripple.x, top: ripple.y, width: 80, height: 80,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)',
        }} />
      ))}

      <div style={{
        left: `${mousePos.x}%`, top: `${mousePos.y}%`,
        transform: 'translate(-50%, -50%)',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0.05) 40%, transparent 70%)',
        filter: 'blur(50px)',
      }} className="absolute pointer-events-none transition-all duration-75 ease-out" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 md:px-12 gap-8 lg:gap-16">
        
        {/* LEFT COLUMN - INFO */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          {/* Language Toggle */}
          <div className="mb-4 flex justify-center lg:justify-start gap-2">
            <button 
              onClick={() => setLanguage("es")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${language === "es" ? "bg-cyan-500 text-black" : "bg-gray-800 text-gray-400 hover:text-white"}`}
            >
              ES
            </button>
            <button 
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${language === "en" ? "bg-cyan-500 text-black" : "bg-gray-800 text-gray-400 hover:text-white"}`}
            >
              EN
            </button>
          </div>

          {/* Tag */}
          <div className="mb-6">
            <span className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium tracking-wide">
              {t("DESARROLLADOR FULLSTACK", "FULLSTACK DEVELOPER")}
            </span>
          </div>

          {/* Rainbow Effect Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              {t("Hola, soy", "Hi, I'm")}
            </span>
            <br />
            <span className="rainbow-text">
              Aldair
            </span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-gray-400 mb-6 font-light">
            {t("Creando experiencias digitales con tecnología moderna", "Building digital experiences with modern technology")}
          </p>

          {/* Description */}
          <p className="text-gray-500 mb-8 max-w-md">
            {t(
              "Desarrollador full-stack enfocado en aplicaciones escalables, código limpio y experiencias de usuario excepcionales.",
              "Full-stack developer focused on scalable applications, clean code, and exceptional user experiences."
            )}
          </p>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-sm text-gray-500">{t("Años Exp", "Years Exp")}</div>
            </div>
            <div className="w-px bg-gray-700/50" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">20+</div>
              <div className="text-sm text-gray-500">{t("Proyectos", "Projects")}</div>
            </div>
            <div className="w-px bg-gray-700/50" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm text-gray-500">{t("Clientes", "Clients")}</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:scale-105 transition shadow-lg shadow-cyan-500/25">
              {t("Ver Proyectos", "View Projects")}
            </button>
            <button className="px-8 py-4 bg-gray-800/50 border border-gray-600/50 text-white font-semibold rounded-xl hover:bg-gray-700/50 transition">
              {t("Contáctame", "Contact Me")}
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN - Code Editor */}
        <div className="w-full lg:w-1/2 max-w-xl order-1 lg:order-2">
          <div className="relative -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
          
          <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-700/60 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800/80 border-b border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-xs font-mono">portfolio.ts</span>
                <span className="ml-3 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded">TypeScript</span>
              </div>
            </div>

            <div className="p-5 font-mono text-sm md:text-base overflow-x-auto">
              <div className="flex">
                <div className="text-gray-600/50 mr-4 text-right select-none pr-3 border-r border-gray-800/50">
                  <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div>
                  <div>10</div><div>11</div><div>12</div><div>13</div><div>14</div><div>15</div>
                </div>
                <div className="pl-3 space-y-1">
                  <div><span className="text-purple-400">interface</span> <span className="text-cyan-400">Developer</span> {"{"}</div>
                  <div className="pl-4"><span className="text-gray-400">name:</span> <span className="text-yellow-300">"Aldair"</span>;</div>
                  <div className="pl-4"><span className="text-gray-400">role:</span> <span className="text-yellow-300">"Full-Stack"</span>;</div>
                  <div className="pl-4"><span className="text-gray-400">skills:</span> <span className="text-yellow-300">[</span><span className="text-orange-300">React</span><span className="text-gray-400">,</span> <span className="text-orange-300">Node</span><span className="text-gray-400">,</span> <span className="text-orange-300">TS</span><span className="text-yellow-300">]</span>;</div>
                  <div className="pl-4"><span className="text-gray-400">experience:</span> <span className="text-blue-300">5</span><span className="text-gray-400">{t("+ años", "+ years")}</span></div>
                  <div className="pl-4"><span className="text-gray-400">available:</span> <span className="text-green-400">true</span>;</div>
                  <div>{"}"}</div>
                  <div className="h-3" />
                  <div><span className="text-gray-500">{t("// Proyectos entregados", "// Projects delivered")}</span></div>
                  <div><span className="text-purple-400">const</span> <span className="text-cyan-400">projects</span> = <span className="text-purple-400">new</span> <span className="text-cyan-400">Portfolio</span>();</div>
                  <div><span className="text-cyan-400">projects</span>.<span className="text-blue-400">build</span>();</div>
                  <div><span className="text-green-400">await</span> <span className="text-cyan-400">deliver</span>(<span className="text-yellow-300">"excellence"</span>);</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-500 text-sm mb-3">{t("Explora", "Scroll to explore")}</span>
        <div className="w-7 h-12 border-2 border-gray-600/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Rainbow Effect Styles */}
      <style>{`
        .rainbow-text {
          background: linear-gradient(90deg, 
            #ff6b6b 0%, 
            #feca57 17%, 
            #48dbfb 33%, 
            #1dd1a1 50%, 
            #5f27cd 67%, 
            #ff6b6b 83%, 
            #feca57 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow-flow 3s ease-in-out infinite;
        }
        
        .rainbow-text::before {
          content: 'Aldair';
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(90deg, 
            rgba(255,255,255,0.9) 0%, 
            rgba(255,255,255,0.7) 20%, 
            rgba(255,255,255,0.5) 40%, 
            rgba(255,255,255,0.7) 60%, 
            rgba(255,255,255,0.9) 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow-shine 2s ease-in-out infinite;
          filter: blur(0.5px);
        }
        
        @keyframes rainbow-flow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes rainbow-shine {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}