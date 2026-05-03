import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ThemeSelector from "./components/ThemeSelector";
import { LanguageProvider } from "./LanguageContext";
import { ThemeProvider, useTheme } from "./ThemeContext";

function ThemedApp() {
  const { theme } = useTheme();
  
  return (
    <div className={`bg-gradient-to-br ${theme.colors.background} ${theme.colors.text} font-sans overflow-y-auto h-screen transition-all duration-500`}>
      <ThemeSelector />
      <section id="hero" className="min-h-screen"><Hero /></section>
      <section id="about" className="min-h-screen"><About /></section>
      <section id="projects" className="min-h-screen"><Projects /></section>
      <section id="skills" className="min-h-screen"><Skills /></section>
      <section id="experience" className="min-h-screen"><Experience /></section>
      <section id="contact" className="min-h-screen"><Contact /></section>
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