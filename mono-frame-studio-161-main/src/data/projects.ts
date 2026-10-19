
import electrical from "@/assets/Meter Board Upgrade.jpeg";
import solar from "@/assets/svc-solar.jpg";
import ict from "@/assets/CCTV-IMAGE 2.jpg";
import cctv from "@/assets/Light Installation.jpeg";
import automation from "@/assets/svc-automation-.jpeg";
import mep from "@/assets/MEP.jpeg";
import residential from "@/assets/RESIDENTIAL.jpeg";
import db2 from "@/assets/DB2.jpeg";
import db3 from "@/assets/DB3.jpeg";
import info from "@/assets/INFO - SEMINAR.jpeg";
import residential2 from "@/assets/RESIDENTIAL 2.jpeg";
import residential3 from "@/assets/MUNAE 1.jpeg";
import residential4 from "@/assets/MUNAE 2.jpeg";
import cp from "@/assets/CONROL PANEL.jpeg";
import cp2 from "@/assets/AUTOMATION 3.jpeg";
import cp3 from "@/assets/AUTOMATION 4.jpeg";
import hero from "@/assets/HERO-IMAGE .jpg";
import ps2 from "@/assets/Power System Consulting.jpeg";
import ps3 from "@/assets/Power Systems Upgrade.jpeg";

// NOTE: These are representative sample entries.
// Replace titles, locations, clients and photos with real,
// publication-approved KES LTD projects.

export const projectCategories = [
  "Electrical Engineering",
  "Solar and Renewable Energy",
  "CCTV and Security",
  "ICT and Networking",
  "Industrial Engineering",
  "Automation",
  "Residential Projects",
  "Commercial and Building Services",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  status: string;
  client?: string;
  featured?: boolean;
  cover: string;
  gallery: string[];
  overview: string;
  scope: string[];
  challenge: string;
  solution: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    slug: "building-services-coordination",
    title: "Building Services Coordination",
    category: "Commercial and Building Services",
    location: "Parklands , Garden city Mall",
    featured: true,
    status: "Renovation and Demolition",
    client: "Mr.Price  , Munae Road  ",
    cover: mep,
    gallery: [mep, residential2, residential3],
    overview:
      "This project focuses on coordinating electrical installations and associated building services within a commercial building. The engineering approach considers the integration of electrical distribution, cable containment, equipment locations, and other MEP (Mechanical, Electrical and Plumbing) services with the architectural and structural layouts. Key activities include reviewing service drawings, identifying installation requirements, coordinating routes, checking equipment accessibility, and supporting site execution. The objective is to improve installation clarity, reduce discrepancies between drawings and site conditions, and establish a coordinated basis for inspection, testing, commissioning, and handover.",
    scope: [
      "Drawing coordination",
      "Site inspections",
      "Testing",
      "Handover",
    ],
    challenge:
      "Building services coordination can be complicated by limited ceiling voids, congested risers, and restricted space for electrical containment, mechanical ductwork, water supply pipes, and drainage systems. Independently developed layouts may conflict at service crossings, plant rooms, and ceiling-mounted installations. Differences between approved drawings and actual site conditions can cause rework, material wastage, programme delays, and restricted maintenance access. Coordinating the sequence of installation between different trades is essential to prevent completed work from obstructing subsequent services.",
    solution:
      "The proposed engineering approach involves reviewing and coordinating MEP drawings against architectural and structural layouts before and during installation. Electrical routes, distribution board positions, service penetrations, and equipment locations are checked for potential clashes and accessibility. Identified discrepancies are referred to the relevant disciplines for resolution, while site inspections verify installations against approved drawings and specifications. Structured inspection and commissioning procedures support defect identification, corrective action, and handover. Approved changes are incorporated into as-built documentation to support future maintenance.",
    technologies: [
      "Cable containment",
      "Distribution boards",
      "MEP drawings",
    ],
  },

  {
    slug: "industrial-power-distribution-upgrade",
    title: "Industrial Power Distribution Upgrade",
    category: "Industrial Engineering",
    location: " Nairobi ,  Machakos",
    status: "Electrical power distribution upgrade",
    client : "Koma Gardens , Munae Road",
    featured: true,
    cover: electrical,
    gallery: [electrical, ps2, ps3],
    overview:
      "This project concerns the assessment and improvement of electrical power distribution within an industrial facility. The scope includes reviewing connected loads, examining the existing distribution arrangement, assessing distribution boards and protective devices, and developing a more organised and maintainable installation. Industrial distribution systems require suitable equipment ratings, effective fault protection, clear circuit identification, and reliable documentation. The engineering objective is to improve the clarity and maintainability of the distribution system while supporting safe operation, inspection, testing, and future modifications.",
    scope: [
      "Load survey",
      "Distribution design",
      "Switchgear installation",
      "Inspection & testing",
    ],
    challenge:
      "Ageing distribution boards and incomplete circuit schedules can make it difficult to identify circuit destinations, trace faults, isolate equipment, and plan maintenance. Existing equipment may require assessment to determine whether its current ratings, breaking capacity, and protective characteristics remain suitable for connected loads and prospective fault levels. Protection coordination between upstream and downstream devices must also be considered where applicable. Industrial upgrades can introduce additional constraints because modifications may interrupt production and therefore require careful work planning, safe isolation, and coordination with facility personnel.",
    solution:
      "The proposed solution begins with a load survey and review of the existing distribution arrangement. Circuit schedules are reconciled with the actual installation, and distribution boards, conductors, and protective devices are assessed against applicable design requirements. Equipment selection and protection coordination are reviewed in relation to load current, conductor capacity, and prospective fault conditions. Circuit identification and updated schedules improve traceability. Following installation, inspection and appropriate electrical testing are undertaken, defects are addressed, and as-built records are updated. Any claimed improvement in reliability or reduction in downtime should be supported by actual project evidence.",
    technologies: [
      "Switchgear",
      "Surge protection",
      "As-built documentation",
    ],
  },

  {
    slug: "office-structured-cabling-network",
    title: "Office Structured Cabling & Network",
    category: "ICT and Networking",
    location: "Kilimani , Nairobi ",
    status: "ACCESS CONTROL AND SECURITY TRAINING ",
    featured: true,
    cover: ict,
    gallery: [ict , cctv , info],
    overview:
      "This project focuses on planning and organising structured communications infrastructure for a multi-floor office environment. The system provides physical connectivity for computers, IP telephones, wireless access points, network switches, and other IP-based services. The design considers user outlet locations, cable routes, telecommunications rooms, rack capacity, patch-panel terminations, and wireless coverage requirements. A properly organised infrastructure supports consistent connectivity, easier troubleshooting, improved cable management, and future network expansion.",
    scope: [
      "Network design",
      "Cat6 cabling",
      "Rack & patching",
      "Wi-Fi configuration",
    ],
    challenge:
      "Unstructured cabling, poorly labelled connections, and inconsistent patching make network troubleshooting time-consuming, particularly in multi-floor buildings with distributed communications equipment. Cable routing must account for bend-radius requirements, installation conditions, suitable containment, and separation from potential sources of electrical interference. Wireless performance introduces additional challenges because signal coverage and capacity depend on access-point placement, building materials, interference, and the number of connected devices. Installing equipment alone does not guarantee adequate wireless coverage or network performance.",
    solution:
      "The proposed approach organises the cabling infrastructure around a documented network layout, including outlet positions, cable routes, rack terminations, and patch-panel connections. Category 6 cabling is installed in accordance with the selected system requirements and applicable standards. Both ends of cables are labelled, patching is organised, and rack documentation is maintained to simplify fault-finding. Wireless access-point locations are planned around the required coverage and capacity. Cable certification or appropriate link testing, equipment configuration checks, and connectivity verification are used to assess the completed installation.",
    technologies: [
      "Cat6",
      "Managed switches",
      "Wireless access points",
    ],
  },

  {
    slug: "process-control-panel-automation",
    title: "Process Control Panel Automation",
    category: "Automation",
    location: "Karen , Nairobi",
    status: "Consultation and design",
    client: "Two Rivers Mall",
    featured: true,
    cover: automation,
    gallery: [automation, cp, cp2, cp3],
    overview:
      "This project focuses on a process-control panel using a programmable logic controller (PLC) and human-machine interface (HMI) to automate and monitor an industrial process. The PLC processes signals from field devices and executes programmed operating sequences, while outputs control appropriate equipment such as relays, contactors, valves, or motor drives, depending on the application. The HMI provides an operator interface for viewing equipment status, monitoring process parameters, acknowledging alarms, and issuing authorised commands. The control panel integrates the required control equipment, power supplies, protection, terminals, and wiring into a documented and maintainable assembly.",
    scope: [
      "Control design",
      "Panel build",
      "Programming",
      "Commissioning",
    ],
    challenge:
      "Manual process operation can result in inconsistent operating sequences, limited process visibility, and increased reliance on operator intervention. Translating process requirements into reliable control logic requires careful definition of inputs, outputs, operating states, interlocks, alarms, and responses to abnormal conditions. Panel construction also requires attention to component selection, wiring identification, enclosure layout, heat dissipation, safe isolation, and maintenance access. Inadequate electrical drawings and programme documentation can make troubleshooting and future modification difficult. Safety-related functions must be distinguished from ordinary process control and implemented using an appropriately designed and validated safety system where required.",
    solution:
      "The proposed solution begins by defining the process sequence and control requirements. Input/output schedules, electrical schematics, operating sequences, interlocks, and alarm requirements provide the basis for PLC programming and panel construction. Components and protective devices are selected to suit the application, while panel wiring and terminal identification are organised to support inspection and maintenance. The PLC implements the required control sequence, and the HMI presents equipment status, operating information, and relevant alarms. Commissioning includes point-to-point checks, input/output verification, sequence testing, and checks of interlocks and abnormal operating conditions. Drawings, programme backups, parameter settings, and commissioning records are retained for maintenance.",
    technologies: [
      "PLC",
      "HMI",
      "Motor control",
    ],
  },
];

export const getProject = (slug?: string) =>
  projects.find((project) => project.slug === slug);
