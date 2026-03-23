// src/data/skills.js
export const skillsData = [
  {
    category: "SCADA & Control Systems",
    icon: "⚙️",
    color: "#00b4d8",
    items: [
      { name: "SCADA (WOIS)", level: 95 },
      { name: "DCS", level: 85 },
      { name: "HMI Development", level: 90 },
      { name: "Wescplorer", level: 85 },
      { name: "PLC Programming", level: 88 },
    ],
  },
  {
    category: "Industrial Protocols",
    icon: "🔌",
    color: "#f59e0b",
    items: [
      { name: "Modbus TCP/RTU", level: 92 },
      { name: "Profibus", level: 80 },
      { name: "OPC-UA", level: 75 },
      { name: "Industrial Ethernet", level: 85 },
    ],
  },
  {
    category: "Power & Instrumentation",
    icon: "⚡",
    color: "#22c55e",
    items: [
      { name: "Motores Wartsila 50DF", level: 90 },
      { name: "Turbinas a Vapor", level: 82 },
      { name: "Calderas Acuotubulares", level: 80 },
      { name: "Parque Solar / Subestaciones", level: 85 },
      { name: "Alta y Media Tensión", level: 78 },
    ],
  },
  {
    category: "Networking & IT",
    icon: "🌐",
    color: "#8b5cf6",
    items: [
      { name: "Cisco Networking (CCNA)", level: 85 },
      { name: "Windows Server", level: 82 },
      { name: "VLAN Segmentation", level: 88 },
      { name: "Cybersecurity OT", level: 72 },
    ],
  },
  {
    category: "Software Development",
    icon: "💻",
    color: "#ec4899",
    items: [
      { name: "React", level: 80 },
      { name: "C# / .NET", level: 75 },
      { name: "JavaScript", level: 78 },
      { name: "SQL Server / Power BI", level: 72 },
      { name: "Node.js", level: 65 },
    ],
  },
  {
    category: "Tools & Management",
    icon: "🛠️",
    color: "#f97316",
    items: [
      { name: "SAP", level: 75 },
      { name: "Scrum / Agile", level: 80 },
      { name: "Microsoft Project", level: 78 },
      { name: "Git / GitHub", level: 80 },
    ],
  },
];

export const certifications = [
  { name: "Programación y Diagramas PLC", issuer: "Instituto ITI Quezada", color: "#00b4d8" },
  { name: "HMI SCADA", issuer: "Udemy", color: "#00b4d8" },
  { name: "Power System Protection Fundamentals", issuer: "Udemy", color: "#f59e0b" },
  { name: "Seguridad Eléctrica NFPA 70E", issuer: "ASRY / Ege Haina", color: "#f59e0b" },
  { name: "CCNA: Introduction to Networks", issuer: "Cisco / Infotep", color: "#22c55e" },
  { name: "CCNA 2: Enrutamiento y Conmutación", issuer: "Cisco / Infotep", color: "#22c55e" },
  { name: "CCNA 3: Redes Empresariales", issuer: "Infotep", color: "#22c55e" },
  { name: "Scrum y Metodologías Ágiles", issuer: "ITLA", color: "#8b5cf6" },
  { name: "Administración Windows Server", issuer: "ITLA", color: "#8b5cf6" },
  { name: "SQL Server & Power BI Data Analyst", issuer: "Udemy", color: "#ec4899" },
  { name: "Fresadora CNC", issuer: "Infotep", color: "#f97316" },
];
