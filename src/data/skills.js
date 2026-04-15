// src/data/skills.js
export const skillsData = [
  {
    category: "SCADA & Control Systems",
    icon: "⚙️",
    color: "#00b4d8",
    items: [
      { name: "TIA PORTAL,WINCC", level: 99 },
      { name: "SCADA (WOIS)", level: 99 },
      { name: "DCS", level: 90 },
      { name: "HMI Development", level: 90 },
      { name: "Wescplorer", level: 99 },
      { name: "PLC Programming", level: 90 },
    ],
  },
  {
    category: "Industrial Protocols",
    icon: "🔌",
    color: "#f59e0b",
    items: [
      { name: "Modbus TCP/RTU", level: 92 },
      { name: "Profibus", level: 80 },
      { name: "OPC-UA", level: 99 },
      { name: "Industrial Ethernet", level: 95 },
    ],
  },
  {
    category: "Power & Instrumentation",
    icon: "⚡",
    color: "#22c55e",
    items: [
      { name: "Motores Wartsila 50DF", level: 100 },
      { name: "Turbinas a Vapor", level: 90 },
      { name: "Calderas Acuotubulares", level: 85 },
      { name: "Parque Solar / Subestaciones", level: 85 },
      { name: "Alta y Media Tensión", level: 95 },
    ],
  },
  {
    category: "Networking & IT",
    icon: "🌐",
    color: "#8b5cf6",
    items: [
      { name: "Fortigate", level: 95 },
      { name: "Cisco Networking (CCNA)", level: 95 },
      { name: "Windows Server", level: 95 },
      { name: "VLAN Segmentation", level: 95 },
      { name: "Cybersecurity OT", level: 85 },
    ],
  },
  {
    category: "Software Development",
    icon: "💻",
    color: "#ec4899",
    items: [
      { name: "React", level: 85 },
      { name: "C# / .NET", level: 85 },
      { name: "JavaScript", level: 78 },
      { name: "SQL Server / Power BI", level: 90 },
      { name: "Node.js", level: 65 },
    ],
  },
  {
    category: "Tools & Management",
    icon: "🛠️",
    color: "#f97316",
    items: [
      { name: "SAP", level: 85 },
      { name: "Scrum / Agile", level: 95 },
      { name: "Microsoft Project", level: 95 },
      { name: "Git / GitHub", level: 85 },
    ],
  },
];

export const certifications = [
  { name: "Programación y Diagramas PLC", issuer: "Instituto ITI Quezada", color: "#00b4d8", category: "industrial" },
  { name: "HMI SCADA", issuer: "Udemy", color: "#00b4d8", category: "industrial" },
  { name: "Power System Protection Fundamentals", issuer: "Udemy", color: "#f59e0b", category: "power" },
  { name: "Seguridad Eléctrica NFPA 70E", issuer: "ASRY / Ege Haina", color: "#f59e0b", category: "power" },
  { name: "CCNA: Introduction to Networks", issuer: "Cisco / Infotep", color: "#22c55e", category: "networks" },
  { name: "CCNA 2: Enrutamiento y Conmutación", issuer: "Cisco / Infotep", color: "#22c55e", category: "networks" },
  { name: "CCNA 3: Redes Empresariales", issuer: "Infotep", color: "#22c55e", category: "networks" },
  { name: "Scrum y Metodologías Ágiles", issuer: "ITLA", color: "#8b5cf6", category: "software" },
  { name: "Administración Windows Server", issuer: "ITLA", color: "#8b5cf6", category: "networks" },
  { name: "SQL Server & Power BI Data Analyst", issuer: "Udemy", color: "#ec4899", category: "software" },
  { name: "Programación Fresadora CNC", issuer: "Infotep", color: "#f97316", category: "industrial" },
  { name: "Responsive Web Site Development", issuer: "UDEMY", color: "#8b5cf6", category: "software" },
];
