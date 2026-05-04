import { useEffect, useState, useCallback } from "react";
import { useLanguage } from "../LanguageContext";
import { useTheme } from "../ThemeContext";

const themeGlowColors: Record<string, string> = {
  ocean: "rgba(0,190,220,",
  sunset: "rgba(249,115,22,",
  forest: "rgba(16,185,129,",
  violet: "rgba(139,92,246,",
  rose: "rgba(236,72,153,",
  amber: "rgba(245,158,11,",
  teal: "rgba(20,184,166,",
  slate: "rgba(161,161,170,",
  lava: "rgba(239,68,68,",
  frost: "rgba(14,165,233,"
};

export default function Hero() {
  const { language, setLanguage, t } = useLanguage();
  const { theme } = useTheme();
  const glowColor = themeGlowColors[theme.id] || themeGlowColors.ocean;
  
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
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.colors.background}`} />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}/>

      {/* Dynamic mouse glow - Water effect */}
      <div className="absolute inset-0 transition-all duration-100 ease-out pointer-events-none" style={{
        background: `
          radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, ${glowColor}0.25) 0%, ${glowColor}0.1) 30%, transparent 60%),
          radial-gradient(600px circle at ${100 - mousePos.x}% ${100 - mousePos.y}%, ${glowColor}0.15) 0%, ${glowColor}0.05) 40%, transparent 70%)
        `
      }}/>

      {/* Water ripple effects with light reflections */}
      {ripples.map((ripple) => (
        <div key={ripple.id} className="absolute rounded-full pointer-events-none" style={{
          left: ripple.x, top: ripple.y, width: 120, height: 120,
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, rgba(255,255,255,0.4) 0%, ${glowColor}0.3) 20%, ${glowColor}0.1) 50%, transparent 70%)`,
          animation: 'waterRipple 1s ease-out forwards',
        }} />
      ))}

      {/* Main water glow with caustic light */}
      <div style={{
        left: `${mousePos.x}%`, top: `${mousePos.y}%`,
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: `radial-gradient(circle, rgba(255,255,255,0.25) 0%, ${glowColor}0.15) 25%, ${glowColor}0.08) 50%, ${glowColor}0.03) 75%, transparent 100%)`,
        filter: 'blur(40px)',
      }} className="absolute pointer-events-none transition-all duration-100 ease-out" />

      {/* Water caustic pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{
        background: `
          radial-gradient(ellipse at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 40%),
          radial-gradient(ellipse at 60% 20%, rgba(0,200,255,0.2) 0%, transparent 30%),
          radial-gradient(ellipse at 40% 80%, rgba(0,180,230,0.15) 0%, transparent 35%)
        `,
        animation: 'causticMove 8s ease-in-out infinite',
      }}/>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 md:px-8 gap-6 lg:gap-16">
        
        {/* LEFT COLUMN - INFO */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          {/* Language Toggle */}
          <div className="mb-4 flex justify-center lg:justify-start gap-2">
            <button 
              onClick={() => setLanguage("es")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${language === "es" ? "bg-cyan-500 text-black" : "bg-slate-800 text-gray-400"}`}
            >
              ES
            </button>
            <button 
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${language === "en" ? "bg-cyan-500 text-black" : "bg-slate-800 text-gray-400"}`}
            >
              EN
            </button>
          </div>

          {/* Tag */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium tracking-wide">
              {t("DESARROLLADOR FULLSTACK", "FULLSTACK DEVELOPER")}
            </span>
          </div>

          {/* Rainbow Effect Name */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-3">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              {t("Hola, soy", "Hi, I'm")}
            </span>
            <br />
            <span className="rainbow-text">
              Aldair
            </span>
          </h1>

          {/* Role */}
          <p className="text-lg md:text-xl text-gray-400 mb-4 font-light">
            {t("Creando experiencias digitales con tecnología moderna", "Building digital experiences with modern technology")}
          </p>

          {/* Description */}
          <p className={`${theme.colors.textMuted} mb-6 text-sm md:text-base max-w-sm mx-auto lg:mx-0`}>
            {t(
              "Desarrollador full-stack enfocado en aplicaciones escalables, código limpio y experiencias de usuario excepcionales.",
              "Full-stack developer focused on scalable applications, clean code, and exceptional user experiences."
            )}
          </p>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mb-6">
            <div className="text-center">
              <div className={`text-2xl md:text-3xl font-bold ${theme.colors.text}`}>5+</div>
              <div className={`text-xs ${theme.colors.textMuted}`}>{t("Años", "Years")}</div>
            </div>
            <div className={`w-px ${theme.colors.border.split('/')[0]}/30`} />
            <div className="text-center">
              <div className={`text-2xl md:text-3xl font-bold ${theme.colors.text}`}>20+</div>
              <div className={`text-xs ${theme.colors.textMuted}`}>{t("Proy", "Proj")}</div>
            </div>
            <div className={`w-px ${theme.colors.border.split('/')[0]}/30`} />
            <div className="text-center">
              <div className={`text-2xl md:text-3xl font-bold ${theme.colors.text}`}>10+</div>
              <div className={`text-xs ${theme.colors.textMuted}`}>{t("Cli", "Clients")}</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className={`px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r ${theme.colors.gradient} text-white font-semibold rounded-xl hover:scale-105 transition shadow-lg text-sm md:text-base cursor-pointer`}
            >
              {t("Ver Proyectos", "View Projects")}
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className={`px-6 py-3 md:px-8 md:py-4 ${theme.colors.backgroundSecondary} border ${theme.colors.border} ${theme.colors.text} font-semibold rounded-xl hover:${theme.colors.backgroundTertiary} transition text-sm md:text-base cursor-pointer`}
            >
              {t("Contáctame", "Contact Me")}
            </a>
            <a 
              href="/resume.pdf" 
              download
              className={`px-6 py-3 md:px-8 md:py-4 border-2 border-dashed border-cyan-400/60 ${theme.colors.text} font-semibold rounded-xl hover:bg-cyan-500/10 transition text-sm md:text-base flex items-center justify-center gap-2`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t("Descargar CV", "Download Resume")}
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN - Code Editor */}
        <div className="w-full lg:w-1/2 max-w-md lg:max-w-xl order-1 lg:order-2">
          <div className={`relative -inset-2 lg:-inset-4 bg-gradient-to-r ${theme.colors.gradient}/20 rounded-xl lg:rounded-2xl blur-xl`} />
          
          <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-lg lg:rounded-xl border border-gray-700/60 overflow-hidden shadow-2xl text-xs lg:text-sm">
            <div className={`flex items-center justify-between px-3 lg:px-4 py-2 lg:py-3 ${theme.colors.backgroundSecondary} border-b ${theme.colors.border}`}>
              <div className="flex items-center gap-1.5 lg:gap-2">
                <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <span className="text-gray-500 text-xs font-mono">portfolio.ts</span>
                <span className={`ml-1 lg:ml-3 px-1.5 lg:px-2 py-0.5 bg-${theme.colors.accent}-500/20 text-${theme.colors.accent}-400 text-xs rounded`}>TypeScript</span>
              </div>
            </div>

            <div className="p-3 lg:p-5 font-mono text-xs md:text-sm overflow-x-auto">
              <div className="flex">
                <div className="text-gray-600/50 mr-2 lg:mr-4 text-right select-none pr-2 lg:pr-3 border-r border-gray-800/50">
                  <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div><div>11</div><div>12</div><div>13</div><div>14</div><div>15</div>
                </div>
                <div className="pl-2 lg:pl-3 space-y-0.5 lg:space-y-1">
                  <div><span className="text-purple-400">interface</span> <span className={`text-${theme.colors.accent}-400`}>Developer</span> {"{"}</div>
                  <div className="pl-2 lg:pl-4"><span className="text-gray-400">name:</span> <span className="text-yellow-300">"Aldair"</span>;</div>
                  <div className="pl-2 lg:pl-4"><span className="text-gray-400">role:</span> <span className="text-yellow-300">"Full-Stack"</span>;</div>
                  <div className="pl-2 lg:pl-4"><span className="text-gray-400">skills:</span> <span className="text-yellow-300">[</span><span className="text-orange-300">React</span><span className="text-gray-400">,</span> <span className="text-orange-300">Node</span><span className="text-gray-400">,</span> <span className="text-orange-300">TS</span><span className="text-yellow-300">]</span>;</div>
                  <div className="pl-2 lg:pl-4"><span className="text-gray-400">experience:</span> <span className="text-blue-300">5</span><span className="text-gray-400">{t("+ años", "+ years")}</span></div>
                  <div className="pl-2 lg:pl-4"><span className="text-gray-400">available:</span> <span className="text-green-400">true</span>;</div>
                  <div>{"}"}</div>
                  <div className="h-2 md:h-3" />
                  <div><span className="text-gray-500">{t("// Proyectos", "// Projects")}</span></div>
                  <div><span className="text-purple-400">const</span> <span className={`text-${theme.colors.accent}-400`}>projects</span> = <span className="text-purple-400">new</span> <span className={`text-${theme.colors.accent}-400`}>Portfolio</span>();</div>
                  <div><span className={`text-${theme.colors.accent}-400`}>projects</span>.<span className="text-blue-400">build</span>();</div>
                  <div><span className="text-green-400">await</span> <span className={`text-${theme.colors.accent}-400`}>deliver</span>(<span className="text-yellow-300">"excellence"</span>);</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rainbow Animation Styles */}
      <style>{`
        @keyframes rainbow {
          0% { color: #ff0000; }
          14% { color: #ff7f00; }
          28% { color: #ffff00; }
          42% { color: #00ff00; }
          57% { color: #0000ff; }
          71% { color: #4b0082; }
          85% { color: #9400d3; }
          100% { color: #ff0000; }
        }
        
        @keyframes rainbow-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .rainbow-text {
          background: linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow-bg 3s ease infinite;
        }
      `}</style>
    </section>
  );
}