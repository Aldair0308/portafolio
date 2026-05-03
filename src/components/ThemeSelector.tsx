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
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const currentSelected = selectedTheme || theme.id;
  const displayTheme = themes.find(th => th.id === currentSelected) || theme;

  const handleThemeClick = (id: string) => {
    setSelectedTheme(id);
    setTheme(id);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedTheme(null);
  };

  return (
    <div className="fixed top-2 right-2 md:top-4 md:right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full backdrop-blur-xl transition-all bg-slate-800/90 border border-slate-700/50"
      >
        <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gradient-to-r ${themePreviewStyles[displayTheme.id]}`} />
        <span className="text-xs md:text-sm font-medium text-gray-200 hidden md:inline">
          {language === "es" ? displayTheme.name : displayTheme.nameEn}
        </span>
        <svg className={`w-3 h-3 md:w-4 md:h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="absolute top-full right-0 mt-2 w-56 md:w-72 p-2 md:p-3 rounded-xl backdrop-blur-xl bg-slate-900/95 border border-slate-700/50 shadow-2xl">
            <div className="text-xs font-medium text-gray-500 mb-2 md:mb-3 uppercase tracking-wider">
              {t("Seleccionar tema", "Select theme")}
            </div>
            
            <div className="grid grid-cols-2 gap-1.5 md:gap-2">
              {themes.map((th) => (
                <button
                  key={th.id}
                  onClick={() => handleThemeClick(th.id)}
                  className={`relative p-1.5 md:p-2 rounded-lg transition-all ${
                    currentSelected === th.id 
                      ? "bg-slate-700 ring-2 ring-cyan-500/50" 
                      : "bg-slate-800/50 hover:bg-slate-700/50"
                  }`}
                >
                  <div className={`w-full h-8 md:h-12 rounded-md md:rounded-lg bg-gradient-to-br ${themePreviewStyles[th.id]} mb-1 md:mb-2`} />
                  <div className="text-xs font-medium text-gray-200">
                    {language === "es" ? th.name : th.nameEn}
                  </div>
                  {currentSelected === th.id && (
                    <div className="absolute top-1 md:top-2 right-1 md:right-2">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
            
            <div className="mt-2 md:mt-3 pt-2 md:pt-3 border-t border-slate-700/50">
              <button
                onClick={handleClose}
                className="w-full px-2 md:px-3 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              >
                {t("Listo", "Done")}
              </button>
            </div>
          </div>
          
          <div className="fixed inset-0 -z-10" onClick={handleClose} />
        </>
      )}
    </div>
  );
}