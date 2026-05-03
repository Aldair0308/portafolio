import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ThemeSelector from "./components/ThemeSelector";
import DesignPromptGenerator from "./components/DesignPromptGenerator";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import { ThemeProvider, useTheme } from "./ThemeContext";

function t(es: string, en: string): string {
  const { language } = useLanguage();
  return language === "es" ? es : en;
}

function ThemedApp() {
  const { theme } = useTheme();
  const [showDesigner, setShowDesigner] = useState(false);
  
  return (
    <div className={`bg-gradient-to-br ${theme.colors.background} ${theme.colors.text} font-sans overflow-y-auto h-screen transition-all duration-500`}>
      <ThemeSelector />
      
      {/* AI Designer Toggle Button */}
      <button
        onClick={() => setShowDesigner(!showDesigner)}
        className={`fixed bottom-4 right-4 z-50 px-4 py-2 rounded-full font-medium bg-gradient-to-r ${theme.colors.gradient} text-white shadow-lg hover:scale-105 transition`}
      >
        🎨 {showDesigner ? t("Ver Portafolio", "View Portfolio") : t("Diseñador IA", "AI Designer")}
      </button>

      {showDesigner ? (
        <DesignPromptGenerator onApply={(skill: any) => {
          console.log("Applied skill:", skill);
        }} />
      ) : (
        <>
          <section id="hero" className="min-h-screen"><Hero /></section>
          <section id="about" className="min-h-screen"><About /></section>
          <section id="projects" className="min-h-screen"><Projects /></section>
          <section id="skills" className="min-h-screen"><Skills /></section>
          <section id="experience" className="min-h-screen"><Experience /></section>
          <section id="contact" className="min-h-screen"><Contact /></section>
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ThemedApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}