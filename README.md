# Portafolio 3D - Aldair

Este proyecto es un portafolio web interactivo en 3D, construido con **React**, **Vite**, **Three.js** (a través de **react‑three‑fiber**) y **@react-three/cannon** para física. Incluye animaciones con **GSAP** y **Framer Motion**, y está estilizado con **Tailwind CSS** y un tema cyber‑punk.

## Tecnologías
- React 18 + Vite
- Three.js + react‑three‑fiber
- @react-three/cannon (física) & @react-three/drei (helpers)
- GSAP + Framer Motion (animaciones)
- Tailwind CSS
- ESLint + Prettier (no configurado aún, pero recomendado)

## Instalación
```bash
git clone https://github.com/Aldair0308/portafolio.git
cd portafolio
npm install   # o yarn
npm run dev   # arranca en http://localhost:5173
```

## Scripts
- `dev` – Desarrollo con recarga en caliente.
- `build` – Genera la carpeta **dist** optimizada.
- `preview` – Previsualiza el build.

## Estructura de carpetas
```
src/
 ├─ components/      # Secciones 3D (Hero, About, Projects, …)
 ├─ App.tsx          # Configuración del Canvas y routing básico
 ├─ main.tsx         # Punto de entrada
 └─ index.css        # Tailwind imports
```

## Despliegue
Puedes desplegar fácilmente en **GitHub Pages**, **Vercel** o **Netlify**. El proyecto ya está configurado para ser servido como una SPA estática.

---
Este es un punto de partida; si deseas añadir más funcionalidades (carga de modelos GLB, shaders personalizados, efectos de partículas, etc.) puedes extender los componentes existentes.
