import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { useLanguage } from "../LanguageContext";
import { designSkills, getSkillsByCategory, searchSkills, DesignSkill } from "../skills/designSkills";

interface Props {
  section?: DesignSkill["category"];
  onApply?: (skill: DesignSkill) => void;
}

export default function DesignPromptGenerator({ section, onApply }: Props) {
  const { theme } = useTheme();
  const { language, t } = useLanguage();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<DesignSkill["category"]>(section || "hero");
  const [selectedSkill, setSelectedSkill] = useState<DesignSkill | null>(null);
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const categories: DesignSkill["category"][] = ["hero", "about", "projects", "skills", "experience", "contact", "global"];
  const categoryLabels: Record<DesignSkill["category"], string> = {
    hero: language === "es" ? "Hero" : "Hero",
    about: language === "es" ? "Sobre Mí" : "About",
    projects: language === "es" ? "Proyectos" : "Projects",
    skills: language === "es" ? "Habilidades" : "Skills",
    experience: language === "es" ? "Experiencia" : "Experience",
    contact: language === "es" ? "Contacto" : "Contact",
    global: language === "es" ? "Global" : "Global"
  };

  const skills = search 
    ? searchSkills(search) 
    : getSkillsByCategory(activeCategory);

  const generatePromptForSkill = (skill: DesignSkill): string => {
    return `Rediseña la sección ${categoryLabels[skill.category]} del portafolio usando el estilo "${skill.name}". 
Requisitos:
- Mantener el tema actual: ${theme.id}
-keep bilingual support (ES/EN)
- Mantener animaciones existentes
-keep mouse effects
-keep responsive design

Estilo: ${language === "es" ? skill.descriptionEs : skill.description}

Tags: ${skill.tags.join(", ")}`;
  };

  const handleSelectSkill = (skill: DesignSkill) => {
    setSelectedSkill(skill);
    setGeneratedPrompt(generatePromptForSkill(skill));
  };

  const handleApply = () => {
    if (selectedSkill && onApply) {
      onApply(selectedSkill);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 py-20 ${theme.colors.backgroundSecondary}`}>
      <div className={`max-w-4xl w-full p-6 rounded-xl ${theme.colors.card} border ${theme.colors.border}`}>
        <h2 className={`text-2xl font-bold mb-6 ${theme.colors.text}`}>
          {t("Diseñador IA / AI Designer", "IA Designer")}
        </h2>
        
        <div className="mb-4">
          <input
            type="text"
            placeholder={t("Buscar estilos...", "Search styles...")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full p-3 rounded-lg ${theme.colors.backgroundTertiary} ${theme.colors.text}`}
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSearch("");
              }}
              className={`px-3 py-1 rounded-full text-sm transition ${
                activeCategory === cat 
                  ? `bg-gradient-to-r ${theme.colors.gradient} text-white` 
                  : `${theme.colors.backgroundTertiary} ${theme.colors.textSecondary}`
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {skills.slice(0, 9).map((skill) => (
            <button
              key={skill.id}
              onClick={() => handleSelectSkill(skill)}
              className={`p-3 rounded-lg text-left transition ${
                selectedSkill?.id === skill.id
                  ? `ring-2 ring-cyan-500 ${theme.colors.backgroundTertiary}`
                  : `${theme.colors.backgroundTertiary} hover:opacity-80`
              }`}
            >
              <div className={`font-medium text-sm ${theme.colors.text}`}>
                {language === "es" ? skill.nameEs : skill.name}
              </div>
              <div className={`text-xs ${theme.colors.textMuted}`}>
                {language === "es" ? skill.descriptionEs : skill.description}
              </div>
            </button>
          ))}
        </div>

        {selectedSkill && (
          <div className={`p-4 rounded-lg ${theme.colors.backgroundTertiary} mb-4`}>
            <h3 className={`font-medium mb-2 ${theme.colors.text}`}>
              {t("Prompt generado:", "Generated prompt:")}
            </h3>
            <pre className={`text-xs whitespace-pre-wrap ${theme.colors.textSecondary}`}>
              {generatedPrompt}
            </pre>
            <button
              onClick={handleApply}
              className={`mt-4 px-4 py-2 rounded-lg font-medium bg-gradient-to-r ${theme.colors.gradient} text-white`}
            >
              {t("Aplicar estilo", "Apply style")}
            </button>
          </div>
        )}

        <div className={`text-xs ${theme.colors.textMuted} mt-4`}>
          💡 {t(
            "Usa este prompt con OpenCode o Claude para regenerar la sección",
            "Use this prompt with OpenCode or Claude to regenerate the section"
          )}
        </div>
      </div>
    </div>
  );
}