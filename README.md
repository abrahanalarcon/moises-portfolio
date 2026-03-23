# Moises Alarcon — Portfolio SCADA / IT/OT Engineer

Portfolio web profesional construido con **React + Vite**, diseño industrial SCADA dark theme.

---

## 🚀 Setup rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo
npm run dev

# 3. Build para producción
npm run build
```

---

## 📁 Estructura

```
src/
├── components/
│   ├── Navbar/          # Navegación sticky con status indicator
│   ├── Hero/            # Hero con HUD SCADA animado en tiempo real
│   ├── Experience/      # Cards con photo carousel al hover
│   ├── Projects/        # Grid con filtros por categoría
│   ├── Skills/          # Progress bars + certificaciones
│   ├── Contact/         # Formulario + info de contacto
│   └── Footer/          # Footer con status widget
├── data/
│   ├── experience.js    # ← EDITA aquí tu experiencia y educación
│   ├── projects.js      # ← EDITA aquí tus proyectos
│   └── skills.js        # ← EDITA aquí tus skills y certificaciones
├── hooks/
│   └── useScrollReveal.js
└── styles/
    └── global.css       # Variables CSS, reset, utilidades globales
```

---

## 🎨 Tipografía elegida

| Rol | Fuente | Por qué |
|-----|--------|---------|
| Títulos / Display | **Rajdhani** | Geométrica, industrial, perfecta para ingeniería |
| Monospace / Datos | **Space Mono** | Estética HMI/terminal, datos técnicos |
| Cuerpo / Body | **Exo 2** | Futurista, legible, complementa Rajdhani |

---

## 🎨 Paleta SCADA Industrial

| Variable | Color | Uso |
|----------|-------|-----|
| `--accent-cyan` | `#00b4d8` | Acento principal, datos activos |
| `--accent-amber` | `#f59e0b` | Warnings, métricas de carga |
| `--accent-green` | `#22c55e` | Estados online, disponibilidad |
| `--bg-primary` | `#080c10` | Fondo base |

---

## 📸 Fotos de experiencia

En `src/data/experience.js`, cada trabajo tiene un array `photos[]`.
Reemplaza las URLs de Unsplash con tus fotos reales de campo:

```js
photos: [
  '/img/ege-haina-sala-control.jpg',   // pon tus fotos en public/img/
  '/img/modbus-wiring.jpg',
  '/img/scada-screen.jpg',
],
```

---

## 🌐 Deploy

**Netlify (recomendado):**
```bash
npm run build
# Arrastra la carpeta dist/ a netlify.com
# O conecta el repositorio en Netlify Dashboard
```

**Vercel:**
```bash
npx vercel
```

---

## 📦 Dependencias principales

| Paquete | Uso |
|---------|-----|
| `react` + `react-dom` | Framework UI |
| `react-icons` | Iconos (FaGithub, FaLinkedin, etc.) |
| `driver.js` | Tour / onboarding de experiencia |
| `framer-motion` | Animaciones avanzadas (opcional) |

---

## ✅ Checklist antes de publicar

- [ ] Reemplazar fotos de Unsplash con fotos reales en `data/experience.js`
- [ ] Actualizar URL de proyectos en `data/projects.js`
- [ ] Agregar tu foto de perfil en `Hero.jsx` (img src)
- [ ] Verificar todos los links sociales
- [ ] Subir a GitHub y conectar con Netlify/Vercel
