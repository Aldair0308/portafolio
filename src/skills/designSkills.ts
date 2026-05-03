export interface DesignSkill {
  id: string;
  name: string;
  nameEs: string;
  category: "hero" | "about" | "projects" | "skills" | "experience" | "contact" | "global";
  description: string;
  descriptionEs: string;
  prompt: string;
  preview: string;
  tags: string[];
}

export const designSkills: DesignSkill[] = [
  {
    id: "hero-minimal",
    name: "Minimal Hero",
    nameEs: "Hero Minimalista",
    category: "hero",
    description: "Clean, minimal hero with centered content",
    descriptionEs: "Hero limpio y minimalista con contenido centrado",
    prompt: "hero-minimal",
    preview: "minimal",
    tags: ["clean", "centered", "simple"]
  },
  {
    id: "hero-split",
    name: "Split Layout Hero",
    nameEs: "Hero con División",
    category: "hero",
    description: "Text on left, visual on right",
    descriptionEs: "Texto a la izquierda, visual a la derecha",
    prompt: "hero-split",
    preview: "split",
    tags: ["split", "visual", "side-by-side"]
  },
  {
    id: "hero-fullscreen",
    name: "Fullscreen Hero",
    nameEs: "Hero Pantalla Completa",
    category: "hero",
    description: "Full viewport height with centered content",
    descriptionEs: "Altura completa con contenido centrado",
    prompt: "hero-fullscreen",
    preview: "fullscreen",
    tags: ["fullscreen", "immersive", "centered"]
  },
  {
    id: "hero-gradient",
    name: "Gradient Hero",
    nameEs: "Hero con Degradado",
    category: "hero",
    description: "Bold gradient background with text overlay",
    descriptionEs: "Fondo degradado con texto superpuesto",
    prompt: "hero-gradient",
    profile: "gradient",
    tags: ["gradient", "bold", "colorful"]
  },
  {
    id: "hero-typing",
    name: "Typing Text Hero",
    nameEs: "Hero con Texto Mecanográfico",
    category: "hero",
    description: "Animated typing effect for role/title",
    descriptionEs: "Efecto mecanográfico animado para rol/título",
    prompt: "hero-typing",
    preview: "typing",
    tags: ["animated", "typing", "dynamic"]
  },
  {
    id: "projects-grid",
    name: "Projects Grid",
    nameEs: "Proyectos en Cuadrícula",
    category: "projects",
    description: "Card grid layout for projects",
    descriptionEs: "Distribución de tarjetas en cuadrícula",
    prompt: "projects-grid",
    preview: "grid",
    tags: ["grid", "cards", "responsive"]
  },
  {
    id: "projects-list",
    name: "Projects List",
    nameEs: "Proyectos en Lista",
    category: "projects",
    description: "Vertical list with details",
    descriptionEs: "Lista vertical con detalles",
    prompt: "projects-list",
    preview: "list",
    tags: ["list", "detailed", "vertical"]
  },
  {
    id: "projects-masonry",
    name: "Masonry Projects",
    nameEs: "Proyectos Masonry",
    category: "projects",
    description: "Pinterest-style masonry layout",
    descriptionEs: "Distribución tipo Pinterest",
    prompt: "projects-masonry",
    preview: "masonry",
    tags: ["masonry", "pinterest", "organic"]
  },
  {
    id: "skills-progress",
    name: "Progress Bars",
    nameEs: "Barras de Progreso",
    category: "skills",
    description: "Animated progress bars",
    descriptionEs: "Barras de progreso animadas",
    prompt: "skills-progress",
    preview: "progress",
    tags: ["progress", "bars", "animated"]
  },
  {
    id: "skills-tags",
    name: "Skill Tags",
    nameEs: "Etiquetas de Habilidades",
    category: "skills",
    description: "Tag cloud for skills",
    descriptionEs: "Nube de etiquetas",
    prompt: "skills-tags",
    preview: "tags",
    tags: ["tags", "cloud", "simple"]
  },
  {
    id: "skills-icons",
    name: "Icon Skills",
    nameEs: "Habilidades con Iconos",
    category: "skills",
    description: "Skills with icons",
    descriptionEs: "Habilidades con iconos",
    prompt: "skills-icons",
    preview: "icons",
    tags: ["icons", "visual", "logos"]
  },
  {
    id: "experience-timeline",
    name: "Timeline",
    nameEs: "Línea de Tiempo",
    category: "experience",
    description: "Vertical timeline experience",
    descriptionEs: "Experiencia en línea de tiempo",
    prompt: "experience-timeline",
    preview: "timeline",
    tags: ["timeline", "vertical", "chronological"]
  },
  {
    id: "experience-cards",
    name: "Cards Experience",
    nameEs: "Experiencia en Tarjetas",
    category: "experience",
    description: "Card-based experience layout",
    descriptionEs: "Distribución en tarjetas",
    prompt: "experience-cards",
    preview: "cards",
    tags: ["cards", "compact", "detailed"]
  },
  {
    id: "contact-form",
    name: "Contact Form",
    nameEs: "Formulario de Contacto",
    category: "contact",
    description: "Full contact form with validation",
    descriptionEs: "Formulario completo con validación",
    prompt: "contact-form",
    preview: "form",
    tags: ["form", "validation", "full"]
  },
  {
    id: "contact-simple",
    name: "Simple Contact",
    nameEs: "Contacto Simple",
    category: "contact",
    description: "Minimal contact options",
    descriptionEs: "Opciones mínimas de contacto",
    prompt: "contact-simple",
    preview: "simple",
    tags: ["simple", "minimal", "links"]
  },
  {
    id: "global-dark",
    name: "Dark Mode",
    nameEs: "Modo Oscuro",
    category: "global",
    description: "Dark theme throughout",
    descriptionEs: "Tema oscuro en todo",
    prompt: "global-dark",
    preview: "dark",
    tags: ["dark", "theme", "night"]
  },
  {
    id: "global-light",
    name: "Light Mode",
    nameEs: "Modo Claro",
    category: "global",
    description: "Light theme throughout",
    descriptionEs: "Tema claro en todo",
    prompt: "global-light",
    preview: "light",
    tags: ["light", "theme", "day"]
  },
  {
    id: "global-neon",
    name: "Neon Glow",
    nameEs: "Brillo Neón",
    category: "global",
    description: "Neon glow effects",
    descriptionEs: "Efectos de brillo néon",
    prompt: "global-neon",
    preview: "neon",
    tags: ["neon", "glow", "vibrant"]
  },
  {
    id: "global-glass",
    name: "Glass Morphism",
    nameEs: "Cristal Morfismo",
    category: "global",
    description: "Glassmorphism effects",
    descriptionEs: "Efectos de cristal",
    prompt: "global-glass",
    preview: "glass",
    tags: ["glass", "blur", "modern"]
  },
  {
    id: "global-retro",
    name: "Retro",
    nameEs: "Retro",
    category: "global",
    description: "Retro/vintage style",
    descriptionEs: "Estilo retro/vintage",
    prompt: "global-retro",
    preview: "retro",
    tags: ["retro", "vintage", "nostalgic"]
  }
];

export function getSkillsByCategory(category: DesignSkill["category"]): DesignSkill[] {
  return designSkills.filter(s => s.category === category);
}

export function getSkillById(id: string): DesignSkill | undefined {
  return designSkills.find(s => s.id === id);
}

export function searchSkills(query: string): DesignSkill[] {
  const q = query.toLowerCase();
  return designSkills.filter(s => 
    s.name.toLowerCase().includes(q) ||
    s.nameEs.toLowerCase().includes(q) ||
    s.tags.some(t => t.includes(q))
  );
}