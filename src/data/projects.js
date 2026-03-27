// src/data/projects.js
export const projectsData = [
  {
    id: "scada-network",
    title: "SCADA Network Architecture",
    subtitle: "Secure Redundant Industrial Network",
    description:
      "Diseño de una arquitectura de red SCADA segura y redundante integrando entornos IT y OT con segmentación VLAN adecuada y protocolos industriales.",
    tags: ["SCADA", "Cisco Packet Tracer", "VLAN", "OT/IT", "Industrial Protocols"],
    category: "industrial",
    links: {
      docs: "https://drive.google.com/drive/folders/1VXUMt1kgyA9bRzVHP9nyHruoZkFCZvrb?usp=drive_link",
      github: "https://github.com/abrahanalarcon",
    },
    color: "#00b4d8",
    icon: "⚡",
    status: "DEPLOYED",
  },
  {
    id: "movies-react",
    title: "Streaming Movies App",
    subtitle: "React + API Integration",
    description:
      "Aplicación web de catálogo de películas construida con React, consumiendo APIs externas con arquitectura de componentes modular y diseño responsivo.",
    tags: ["React", "REST API", "JavaScript", "CSS Modules"],
    category: "web",
    links: {
      live: "https://streamingmoviesreact.netlify.app/",
      github: "https://github.com/abrahanalarcon/movies-react",
    },
    color: "#f59e0b",
    icon: "🎬",
    status: "LIVE",
  },
 
  {
    id: "pokedex-maui",
    title: "Pokédex MAUI",
    subtitle: ".NET MAUI — Cross Platform",
    description:
      "Pokédex interactivo multiplataforma (Android, iOS, Windows) construido con .NET MAUI. Acceso a más de 1,000 Pokémon desde la API oficial.",
    tags: [".NET MAUI", "C#", "Android", "iOS", "REST API"],
    category: "Multiplatform",
    links: {
      github: "https://github.com/abrahanalarcon/Validation-Email",
    },
    color: "#8b5cf6",
    icon: "📱",
    status: "BUILD",
  },

  {
    id: "industrial-monitoring",
    title: "Industrial Monitoring Dashboard",
    subtitle: "React + SCADA Visualization",
    description:
      "Interfaz de monitoreo en tiempo real para visualización de procesos industriales, inspirada en sistemas SCADA. Arquitectura de datos en tiempo real.",
    tags: ["React", "Data Visualization", "REST API", "Industrial UX"],
    category: "industrial",
    links: {
      github: "https://github.com/abrahanalarcon",
      live: "https://coruscating-entremet-75bfe1.netlify.app/",
    },
    color: "#f59e0b",
    icon: "📊",
    status: "IN_PROGRESS",
  },
];

export const projectCategories = [
  { id: "all", label: "ALL SYSTEMS" },
  { id: "industrial", label: "INDUSTRIAL" },
  { id: "web", label: "WEB" },
  { id: "Multiplatform", label: "MULTIPLATFORM" },
];
