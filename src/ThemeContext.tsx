import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Theme {
  id: string;
  name: string;
  nameEn: string;
  colors: {
    background: string;
    backgroundSecondary: string;
    backgroundTertiary: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    accent: string;
    accentSecondary: string;
    border: string;
    card: string;
    glow: string;
    gradient: string;
  };
}

const themes: Theme[] = [
  {
    id: "ocean",
    name: "Océano",
    nameEn: "Ocean",
    colors: {
      background: "from-slate-950 via-slate-900 to-gray-950",
      backgroundSecondary: "bg-slate-900",
      backgroundTertiary: "bg-slate-800",
      text: "text-gray-100",
      textSecondary: "text-gray-300",
      textMuted: "text-gray-500",
      accent: "cyan",
      accentSecondary: "blue",
      border: "border-slate-700/50",
      card: "bg-slate-900/80",
      glow: "rgba(6,182,212,0.15)",
      gradient: "from-cyan-500 to-blue-500"
    }
  },
  {
    id: "sunset",
    name: "Atardecer",
    nameEn: "Sunset",
    colors: {
      background: "from-orange-950 via-red-950 to-slate-950",
      backgroundSecondary: "bg-orange-900/30",
      backgroundTertiary: "bg-orange-900/50",
      text: "text-orange-100",
      textSecondary: "text-orange-200",
      textMuted: "text-orange-400/70",
      accent: "orange",
      accentSecondary: "red",
      border: "border-orange-700/50",
      card: "bg-orange-900/30",
      glow: "rgba(249,115,22,0.2)",
      gradient: "from-orange-500 to-pink-500"
    }
  },
  {
    id: "forest",
    name: "Bosque",
    nameEn: "Forest",
    colors: {
      background: "from-emerald-950 via-green-950 to-slate-950",
      backgroundSecondary: "bg-emerald-900/20",
      backgroundTertiary: "bg-emerald-800/30",
      text: "text-emerald-100",
      textSecondary: "text-emerald-200",
      textMuted: "text-emerald-400/70",
      accent: "emerald",
      accentSecondary: "green",
      border: "border-emerald-700/50",
      card: "bg-emerald-900/20",
      glow: "rgba(16,185,129,0.2)",
      gradient: "from-emerald-500 to-teal-500"
    }
  },
  {
    id: "violet",
    name: "Violeta",
    nameEn: "Violet",
    colors: {
      background: "from-violet-950 via-purple-950 to-slate-950",
      backgroundSecondary: "bg-violet-900/20",
      backgroundTertiary: "bg-violet-800/30",
      text: "text-violet-100",
      textSecondary: "text-violet-200",
      textMuted: "text-violet-400/70",
      accent: "violet",
      accentSecondary: "purple",
      border: "border-violet-700/50",
      card: "bg-violet-900/20",
      glow: "rgba(139,92,246,0.2)",
      gradient: "from-violet-500 to-purple-500"
    }
  },
  {
    id: "rose",
    name: "Rosa",
    nameEn: "Rose",
    colors: {
      background: "from-pink-950 via-rose-950 to-slate-950",
      backgroundSecondary: "bg-pink-900/20",
      backgroundTertiary: "bg-pink-800/30",
      text: "text-pink-100",
      textSecondary: "text-pink-200",
      textMuted: "text-pink-400/70",
      accent: "pink",
      accentSecondary: "rose",
      border: "border-pink-700/50",
      card: "bg-pink-900/20",
      glow: "rgba(236,72,153,0.2)",
      gradient: "from-pink-500 to-rose-500"
    }
  },
  {
    id: "amber",
    name: "Ámbar",
    nameEn: "Amber",
    colors: {
      background: "from-amber-950 via-yellow-950 to-slate-950",
      backgroundSecondary: "bg-amber-900/20",
      backgroundTertiary: "bg-amber-800/30",
      text: "text-amber-100",
      textSecondary: "text-amber-200",
      textMuted: "text-amber-400/70",
      accent: "amber",
      accentSecondary: "yellow",
      border: "border-amber-700/50",
      card: "bg-amber-900/20",
      glow: "rgba(245,158,11,0.2)",
      gradient: "from-amber-500 to-yellow-500"
    }
  },
  {
    id: "teal",
    name: "Teal",
    nameEn: "Teal",
    colors: {
      background: "from-teal-950 via-cyan-950 to-slate-950",
      backgroundSecondary: "bg-teal-900/20",
      backgroundTertiary: "bg-teal-800/30",
      text: "text-teal-100",
      textSecondary: "text-teal-200",
      textMuted: "text-teal-400/70",
      accent: "teal",
      accentSecondary: "cyan",
      border: "border-teal-700/50",
      card: "bg-teal-900/20",
      glow: "rgba(20,184,166,0.2)",
      gradient: "from-teal-500 to-cyan-500"
    }
  },
  {
    id: "slate",
    name: "Pizarra",
    nameEn: "Slate",
    colors: {
      background: "from-slate-950 via-gray-900 to-neutral-950",
      backgroundSecondary: "bg-neutral-800/50",
      backgroundTertiary: "bg-neutral-800",
      text: "text-neutral-100",
      textSecondary: "text-neutral-300",
      textMuted: "text-neutral-500",
      accent: "neutral",
      accentSecondary: "gray",
      border: "border-neutral-700/50",
      card: "bg-neutral-800/50",
      glow: "rgba(161,161,170,0.15)",
      gradient: "from-neutral-500 to-slate-500"
    }
  },
  {
    id: "lava",
    name: "Lava",
    nameEn: "Lava",
    colors: {
      background: "from-red-950 via-orange-950 to-rose-950",
      backgroundSecondary: "bg-red-900/20",
      backgroundTertiary: "bg-red-800/30",
      text: "text-red-100",
      textSecondary: "text-red-200",
      textMuted: "text-red-400/70",
      accent: "red",
      accentSecondary: "orange",
      border: "border-red-700/50",
      card: "bg-red-900/20",
      glow: "rgba(239,68,68,0.2)",
      gradient: "from-red-600 to-orange-500"
    }
  },
  {
    id: "frost",
    name: "Escarcha",
    nameEn: "Frost",
    colors: {
      background: "from-sky-950 via-blue-950 to-indigo-950",
      backgroundSecondary: "bg-sky-900/20",
      backgroundTertiary: "bg-sky-800/30",
      text: "text-sky-100",
      textSecondary: "text-sky-200",
      textMuted: "text-sky-400/70",
      accent: "sky",
      accentSecondary: "blue",
      border: "border-sky-700/50",
      card: "bg-sky-900/20",
      glow: "rgba(14,165,233,0.2)",
      gradient: "from-sky-500 to-blue-500"
    }
  }
];

interface ThemeContextType {
  theme: Theme;
  themes: Theme[];
  setTheme: (id: string) => void;
  t: (str: string) => string;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentThemeId, setCurrentThemeId] = useState("ocean");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved && themes.find(t => t.id === saved)) {
      setCurrentThemeId(saved);
    }
  }, []);

  const setTheme = (id: string) => {
    setCurrentThemeId(id);
    localStorage.setItem("portfolio-theme", id);
  };

  const theme = themes.find(t => t.id === currentThemeId) || themes[0];

  const t = (es: string, en: string, lang: string = "es") => {
    return lang === "es" ? es : en;
  };

  return (
    <ThemeContext.Provider value={{ theme, themes, setTheme, t }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}