import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { useLanguage } from "../LanguageContext";

const themePreviewStyles: Record<string, string> = {
  ocean: "from-cyan-500 to-blue-500",
  sunset: "from-orange-500 to-pink-500",
  forest: "from-emerald-500 to-teal-500",
  violet: "from-violet-500 to-purple-500",
  rose: "from-pink-500 to-rose-500",
  amber: "from-amber-500 to-yellow-500",
  teal: "from-teal-500 to-cyan-500",
  slate: "from-neutral-500 to-slate-500",
  lava: "from-red-600 to-orange-500",
  frost: "from-sky-500 to-blue-500"
};

export default function ThemeSelector() {
  const { theme, themes, setTheme } = useTheme();
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [previewTheme, setPreviewTheme] = useState<string | null>(null);

  const displayTheme = previewTheme 
    ? themes.find(th => th.id === previewTheme) || theme 
    : theme;

  const handleSelect = (id: string) => {
    setTheme(id);
    setPreviewTheme(null);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl transition-all ${displayTheme.colors.card} ${displayTheme.colors.border} border`}
      >
        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${themePreviewStyles[displayTheme.id]}`} />
        <span className={`text-sm font-medium ${displayTheme.colors.text}`}>
          {language === "es" ? displayTheme.name : displayTheme.nameEn}
        </span>
        <svg className={`w-4 h-4 ${displayTheme.colors.textSecondary} transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={`absolute top-full right-0 mt-2 w-72 p-3 rounded-2xl backdrop-blur-xl ${displayTheme.colors.card} ${displayTheme.colors.border} border shadow-2xl`}>
          <div className={`text-xs font-medium ${displayTheme.colors.textMuted} mb-3 uppercase tracking-wider`}>
            {t("Seleccionar tema", "Select theme")}
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {themes.map((th) => (
              <button
                key={th.id}
                onClick={() => setPreviewTheme(th.id)}
                onMouseLeave={() => setPreviewTheme(null)}
                className={`relative p-2 rounded-xl transition-all ${
                  theme.id === th.id 
                    ? `${th.colors.card} ring-2 ring-white/30` 
                    : `${th.colors.backgroundSecondary} hover:${th.colors.backgroundTertiary}`
                }`}
              >
                <div className={`w-full h-12 rounded-lg bg-gradient-to-br ${themePreviewStyles[th.id]} mb-2`} />
                <div className={`text-xs font-medium ${th.colors.text}`}>
                  {language === "es" ? th.name : th.nameEn}
                </div>
                {theme.id === th.id && (
                  <div className="absolute top-2 right-2">
                    <svg className={`w-4 h-4 ${th.colors.accent}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
          
          <div className="flex gap-2 mt-3 pt-3 border-t border-white/10">
            <button
              onClick={() => setIsOpen(false)}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium ${displayTheme.colors.textSecondary} hover:${displayTheme.colors.text} transition`}
            >
              {t("Cancelar", "Cancel")}
            </button>
            <button
              onClick={() => handleSelect(theme.id)}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium bg-gradient-to-r ${themePreviewStyles[theme.id]} text-white`}
            >
              {t("Aplicar", "Apply")}
            </button>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 -z-10" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}