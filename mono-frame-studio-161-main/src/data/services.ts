import electrical from "@/assets/RESIDENTIAL.jpeg";
import solar from "@/assets/svc-solar.jpg";
import ict from "@/assets/CCTV-IMAGE 2.jpg";
import cctv from "@/assets/Light Installation.jpeg";
import automation from "@/assets/svc-automation-.jpeg";
import mep from "@/assets/MEP.jpeg";

export interface Service {
  slug: string;
  code: string;
  title: string;
  short: string;
  description: string;
  image: string;
  capabilities: string[];
  process: string[];
}

export const services: Service[] = [
  {
    slug: "electrical-engineering",
    code: "01",
    title: "Electrical Engineering & Power Systems",
    short: "Design, installation and commissioning of safe, compliant electrical systems.",
    description:
      "From load assessment and single-line diagrams to installation and commissioning, we deliver electrical systems engineered for safety, reliability and long service life in homes, commercial buildings and industrial facilities.",
    image: electrical,
    capabilities: [
      "Electrical design and installation",
      "Power distribution and switchgear",
      "Lighting design and installation",
      "Electrical drawings and technical documentation",
      "Testing, inspection and commissioning",
      "Backup power and power protection",
    ],
    process: ["Site survey & load assessment", "Design & documentation", "Installation", "Testing & commissioning", "Handover & support"],
  },
  {
    slug: "solar-energy",
    code: "02",
    title: "Solar Energy & Renewable Power",
    short: "Grid-tied, off-grid and hybrid solar systems with battery storage.",
    description:
      "We design and install solar PV systems sized to real consumption data, integrating inverters and battery storage to cut energy costs and keep critical loads running during outages.",
    image: solar,
    capabilities: [
      "Solar PV system design",
      "Grid-tied, off-grid and hybrid systems",
      "Battery energy storage",
      "Inverter and backup power integration",
      "Solar feasibility studies and performance analysis",
      "Installation, testing and maintenance",
    ],
    process: ["Energy audit", "System sizing & design", "Installation", "Commissioning", "Monitoring & maintenance"],
  },
  {
    slug: "ict-networking",
    code: "03",
    title: "ICT & Telecommunications",
    short: "Structured cabling, wireless and network infrastructure.",
    description:
      "We plan and build the physical and network layers that organisations depend on — structured cabling, racks, wireless coverage and network equipment configured for performance and security.",
    image: ict,
    capabilities: [
      "Structured cabling and network infrastructure",
      "Wi-Fi and wireless networking",
      "Fibre-optic infrastructure where applicable",
      "Network equipment installation and configuration",
      "ICT infrastructure planning and implementation",
    ],
    process: ["Requirements & survey", "Network design", "Cabling & installation", "Configuration & testing", "Documentation & support"],
  },
  {
    slug: "cctv-security",
    code: "04",
    title: "CCTV & Security Systems",
    short: "IP surveillance, access control and remote monitoring.",
    description:
      "We design surveillance and access control systems around the real risks of each site — camera placement, storage, network integration and remote viewing configured and tested end to end.",
    image: cctv,
    capabilities: [
      "CCTV system design and installation",
      "IP surveillance systems",
      "Access control and security integration",
      "Remote monitoring and system configuration",
      "Testing, maintenance and troubleshooting",
    ],
    process: ["Security assessment", "Coverage design", "Installation", "Configuration & remote access", "Maintenance"],
  },
  {
    slug: "automation",
    code: "05",
    title: "Automation & Smart Systems",
    short: "Industrial and building automation, controls and monitoring.",
    description:
      "We integrate controls, sensors and monitoring so that electrical, energy and ICT systems work together — improving efficiency, visibility and control in buildings and industrial processes.",
    image: automation,
    capabilities: [
      "Industrial and building automation",
      "Control systems and intelligent monitoring",
      "Smart-home integration",
      "Energy monitoring and system optimisation",
      "Integration of compatible electrical and ICT systems",
    ],
    process: ["Process review", "Control design", "Panel build & installation", "Integration & testing", "Optimisation"],
  },
  {
    slug: "mep-engineering",
    code: "06",
    title: "MEP & Building Services",
    short: "Coordinated building services from drawings to handover.",
    description:
      "We coordinate electrical building services with mechanical and plumbing disciplines, producing clear drawings and managing inspections, testing and commissioning through to handover.",
    image: mep,
    capabilities: [
      "Electrical building-services coordination",
      "Mechanical and plumbing coordination where offered",
      "MEP drawings and documentation",
      "Technical coordination and site inspections",
      "Testing, commissioning and handover support",
    ],
    process: ["Design review", "Coordination drawings", "Site supervision", "Testing & commissioning", "Handover"],
  },
];

export const getService = (slug?: string) => services.find((s) => s.slug === slug);
