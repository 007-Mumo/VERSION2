
import solar from "@/assets/STOCK PANEL DESIGN.jpg";
import electrical from "@/assets/FAULTY WIRE.jpeg";
import cctv from "@/assets/STOCK CCTV.jpg";

export interface InsightSection {
  heading?: string;
  text: string;
  image?: string;
  imageCaption?: string;
}

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  body: InsightSection[];
}

export const insights: Insight[] = [
  {
    slug: "sizing-a-hybrid-solar-system",
    title: "How to Size a Hybrid Solar System Correctly",
    excerpt:
      "Why real consumption data, not rules of thumb, should drive your panel, inverter and battery choices.",
    category: "Solar Energy",
    date: "2026-09-12",
    readTime: "5 min read",
    image: solar,
    
body: [
  {
    text: "A hybrid solar PV system combines solar generation, battery storage and a grid or other backup supply to meet a property's electrical demand. Proper sizing requires more than selecting a panel count or inverter rating. It involves understanding energy consumption, peak demand, solar resource, battery autonomy and the way the system will operate throughout the day. A well-designed system balances reliability, performance, equipment compatibility and capital cost."
  },
  {
    heading: "1. Start with an electrical load assessment",
    text: "The first step is to establish how much electricity the property consumes and when that energy is required. Review utility bills, equipment schedules and operating hours. Where possible, use measured load data to identify daily energy consumption in kilowatt-hours (kWh), peak demand in kilowatts (kW) and significant variations between daytime and nighttime use. Identify critical loads, such as lighting, refrigeration, security equipment and network infrastructure, separately from discretionary loads that can be switched off or scheduled. This distinction helps determine which circuits should remain operational during a grid outage."
  },
  {
    heading: "2. Estimate the required solar PV capacity",
    text: "Solar array capacity is influenced by daily energy demand, available peak sun hours, module performance and system losses. A preliminary estimate can be made by dividing the daily energy that solar generation must supply by the expected daily energy yield per installed kilowatt of PV capacity. The estimate should account for temperature, shading, dust, module orientation, inverter conversion losses and other system-specific factors. Local solar resource data should be used rather than assuming that the array will operate at its rated capacity throughout the day. A detailed design should verify the expected monthly energy yield and seasonal performance."
  },
  {
    heading: "3. Select an inverter that matches the load",
    text: "The inverter must support the expected operating load, including the possibility of several appliances running simultaneously. Motors, pumps, compressors and some other equipment can draw significantly higher current during start-up than during normal operation. Check the inverter's continuous output rating, surge capability, overload duration, phase configuration and compatibility with the intended battery and PV array. For three-phase properties, assess how loads are distributed across phases and confirm that the inverter arrangement supports the required supply configuration. The inverter's power rating should be selected from the load assessment, not from the PV array capacity alone."
  },
  {
    heading: "4. Size battery storage around usable energy",
    text: "Battery capacity depends on the energy that must be supplied when solar generation is insufficient or unavailable. Establish the critical load, the required backup duration and the expected charging opportunities. Battery selection should account for usable depth of discharge, conversion losses, permitted charge and discharge rates, temperature and the manufacturer's operating limits. For example, a property that needs several hours of backup for essential circuits has a different storage requirement from one that expects to operate most of its normal load overnight. Confirm that the battery's continuous discharge capability can support the inverter and connected loads."
  },
  {
    heading: "5. Check compatibility between panels, inverter and batteries",
    text: "A system can contain correctly rated individual components and still be poorly designed if their electrical characteristics are incompatible. Verify the PV string open-circuit voltage, operating voltage, short-circuit current and maximum power current against the inverter's limits. Account for the lowest expected module temperature when checking maximum string voltage. Confirm that the number of modules connected to each MPPT falls within its operating voltage and current range. For battery systems, verify DC voltage compatibility, charge and discharge limits, communication requirements and approved battery configurations. Protective devices, isolation and cable sizing should be selected for the actual installation conditions."
  },
  {
    heading: "6. Design for grid interaction and backup operation",
    text: "A hybrid system should have a clearly defined operating strategy. Decide whether the priority is self-consumption, backup resilience, reduced grid imports or a combination of these objectives. Identify which circuits are supplied during an outage and confirm the system's behaviour when the battery reaches its minimum state of charge. Check the required changeover arrangements, anti-islanding provisions, earthing and neutral configuration, protection coordination and any applicable utility interconnection requirements. Essential loads should not be assumed to receive backup power unless the system architecture and changeover arrangement explicitly provide for it."
  },
  {
    heading: "7. Evaluate performance throughout the year",
    text: "A design that meets average daily demand may still experience shortages during periods of low solar irradiation or increased consumption. Evaluate expected generation and demand across the year, paying attention to seasonal variation, cloudy periods and the timing of peak loads. Simulation tools such as PVsyst can help estimate energy production, losses and system performance when supplied with suitable site, equipment and configuration data. Simulation results should be interpreted alongside the load assessment and backup requirements rather than treated as a guarantee of actual production."
  },
  {
    heading: "8. Commissioning, monitoring and maintenance",
    text: "After installation, verify polarity, cable terminations, protective devices, isolation, earthing and other applicable electrical safety requirements. Confirm inverter settings, battery communication, charging behaviour, grid interaction and the operation of backed-up circuits. Record test results, equipment settings and as-installed drawings. During operation, review energy production, battery state of charge, grid imports and fault records to identify performance issues. Periodic inspection and appropriate cleaning and maintenance help preserve reliability and make it easier to distinguish normal seasonal variation from equipment or installation faults."
  },
  {
    heading: "The KES LTD approach",
    text: "At Kamala Engineering Services LTD, solar system planning should begin with the property's actual electrical requirements and the client's priorities. Load assessment, equipment selection, system configuration, protection and expected energy performance need to be considered together. This engineering-led approach supports informed decisions about PV capacity, battery storage and inverter selection while reducing the risk of avoidable oversizing, insufficient backup or component incompatibility."
  }
],

  },
  {
    slug: "electrical-safety-inspections",
    title: "Why Periodic Electrical Inspections Matter",
    excerpt:
      "Testing and inspection catch deteriorating insulation, loose terminations and overloaded circuits before they fail.",
    category: "Electrical",
    date: "2026-08-20",
    readTime: "4 min read",
    image: electrical,
    
body: [
  {
    text: "Electrical installations are exposed to ageing, mechanical wear, environmental conditions and changes in how buildings are used. Connections can loosen, insulation can deteriorate, circuits can become overloaded and protective devices may no longer provide the intended level of protection. Periodic inspection and testing help establish the condition of an installation, identify defects and determine whether corrective work is necessary. The scope and frequency of inspection should reflect the installation type, its use, environmental conditions, maintenance history and applicable requirements."
  },
  {
    heading: "1. Begin with a visual inspection",
    text: "A visual inspection looks for defects that can be identified without relying solely on electrical measurements. Areas of concern include damaged cables, exposed live parts, loose or broken accessories, signs of overheating, unsuitable enclosures, poor cable support and inadequate protection against external influences. Inspect distribution boards for correct identification, suitable covers, evidence of moisture ingress and signs of thermal damage. Particular attention should be given to modifications, temporary wiring and areas where equipment has been added since the original installation. Any immediate danger should be assessed and addressed before routine testing continues."
  },
  {
    heading: "2. Check circuit loading and protective devices",
    text: "Circuit protection must be appropriate for the conductors, connected loads and expected operating conditions. Review circuit schedules, protective device ratings and the suitability of the installed equipment. Where necessary, assess whether the actual demand is consistent with the original design and whether additional equipment has introduced excessive loading. A protective device that is incorrectly selected, damaged or unsuitable for the installation may fail to provide the intended protection. The assessment should also consider discrimination or selectivity between protective devices where required by the design."
  },
  {
    heading: "3. Verify continuity of protective conductors",
    text: "Protective conductor continuity testing helps verify that the intended protective path is electrically continuous. This includes relevant circuit protective conductors and bonding connections, as applicable to the installation. A reliable protective path is important because it enables fault current to flow through the intended route so that the relevant protective measure can operate. Test methods, acceptance criteria and recorded results should follow the applicable standard and the characteristics of the circuit. Any unexpected result should be investigated rather than accepted without explanation."
  },
  {
    heading: "4. Assess insulation resistance",
    text: "Insulation resistance testing helps identify deterioration, contamination or damage affecting insulation between conductors and between live conductors and earth, as appropriate to the test. The circuit must be prepared safely before testing, and sensitive electronic equipment, surge protective devices and other components must be considered so they are not damaged by the test voltage. The selected test voltage and acceptance criteria depend on the circuit and the applicable requirements. Low or inconsistent readings may indicate a defect that needs further investigation before the circuit is returned to service."
  },
  {
    heading: "5. Verify polarity and earthing arrangements",
    text: "Correct polarity helps ensure that switching and protective devices operate on the intended conductors. The inspection should also consider the earthing arrangement, main earthing terminal, protective bonding and the condition of accessible connections. Where applicable, earth fault loop impedance and other relevant measurements help establish whether the protective measures are suitable for the installation. Earth electrode resistance testing may be necessary for particular earthing arrangements. These checks are not interchangeable: each verifies a different aspect of the electrical safety design."
  },
  {
    heading: "6. Test protective devices and additional protection",
    text: "Depending on the installation, testing may include residual current devices (RCDs), residual current circuit breakers with overcurrent protection (RCBOs) and other protective equipment. The inspection should confirm that the installed devices are appropriate for their intended purpose and that their operation meets the applicable requirements. Test-button operation alone does not replace the prescribed instrument tests where those tests are required. Results should be interpreted against the device specification, circuit arrangement and relevant standard."
  },
  {
    heading: "7. Inspect distribution boards and terminations",
    text: "Distribution boards contain critical connections and protective components that require suitable installation, identification and maintenance. Look for damaged enclosures, missing blanks, inadequate access, incorrect circuit labelling, evidence of overheating and signs of poor workmanship. Thermal imaging may help identify abnormal temperature patterns when conducted under suitable load conditions by a competent person, but it does not replace the required electrical tests. Connections should only be inspected, tightened or repaired using safe isolation procedures and appropriate manufacturer instructions."
  },
  {
    heading: "8. Record defects and corrective actions",
    text: "Inspection findings should be documented in a way that supports prioritisation and follow-up. Record the location, observed defect, relevant test results, risk or severity classification, recommended corrective action and responsible party. Distinguish immediate safety concerns from defects requiring planned remedial work. Following rectification, complete the necessary verification and update the installation records. Clear documentation provides a useful maintenance history and helps owners, facilities teams and contractors understand the condition of the installation."
  },
  {
    heading: "9. Keep drawings and test records current",
    text: "Accurate as-installed drawings, circuit schedules, equipment details and inspection reports reduce uncertainty during future maintenance and alterations. Records should identify the circuits tested, instruments or methods used where required, measured results, limitations and outstanding defects. When an installation is modified, the relevant drawings and schedules should be updated so that future work is based on the actual installation rather than outdated information. This is especially important in commercial properties and multi-occupancy buildings where several contractors may work on the same systems."
  },
  {
    heading: "The KES LTD approach",
    text: "A useful inspection is not simply a checklist exercise. It combines visual assessment, appropriate testing, technical interpretation and a clear record of the findings. Kamala Engineering Services LTD can present inspection findings in a structured format that helps clients understand defects, prioritise corrective work and plan maintenance. The exact scope of any inspection or testing engagement should be agreed in advance and carried out by suitably competent personnel in accordance with applicable requirements."
  }
],

  },
  {
    slug: "planning-cctv-coverage",
    title: "Planning CCTV Coverage That Actually Works",
    excerpt:
      "Camera count matters less than placement, lighting, resolution at distance and reliable recording.",
    category: "Security",
    date: "2026-07-05",
    readTime: "4 min read",
    image: cctv,
    
body: [
  {
    text: "An effective CCTV system is designed around security objectives, not simply the number of cameras installed. A camera may provide a useful overview of an entrance but still fail to capture enough detail to identify a person. Similarly, a high-resolution camera may produce poor footage if it is positioned against bright sunlight, mounted too high or operating with inadequate night-time illumination. Good system design considers the areas to be monitored, the required level of detail, lighting conditions, network capacity, recording retention and how footage will be accessed when an incident occurs."
  },
  {
    heading: "1. Define the surveillance objectives",
    text: "Begin by identifying what each monitored area needs to achieve. Detection establishes whether activity is occurring, observation provides more context, recognition helps distinguish familiar individuals or objects, and identification requires sufficient detail to support identification under the intended conditions. These objectives affect camera resolution, field of view, mounting position and lens selection. Entrances, reception areas, perimeter boundaries, corridors, parking areas and restricted rooms may each require different coverage priorities. Documenting these requirements before selecting equipment helps prevent blind spots and unnecessary camera expenditure."
  },
  {
    heading: "2. Conduct a site survey",
    text: "A site survey should identify access points, boundaries, circulation routes, valuable assets, potential concealment areas and locations where incidents are most likely to occur. Assess the availability of mounting points, cable routes, power supplies, network connectivity and suitable equipment locations. Consider architectural features, vegetation, signage and future construction that could obstruct a camera's view. A camera layout should be checked against the actual site rather than relying only on a floor plan. For larger installations, prepare a camera schedule that records each camera's location, purpose, viewing direction and proposed specification."
  },
  {
    heading: "3. Select suitable cameras and lenses",
    text: "Camera selection should account for resolution, sensor performance, lens type, field of view, low-light capability, environmental rating and compatibility with the recording platform. Fixed cameras suit defined views, while varifocal lenses provide flexibility when setting the required viewing angle. Wide-angle views cover larger areas but may provide less detail on distant subjects. Narrower views can improve detail at a specific point but may leave adjacent areas outside the field of view. The selection should balance coverage and usable detail at the actual distance to the target."
  },
  {
    heading: "4. Plan mounting height and viewing angles",
    text: "Camera position influences both the area covered and the usefulness of recorded footage. Cameras mounted too high may capture the tops of heads rather than useful facial details, while cameras mounted too low may be vulnerable to tampering or obstruction. Angles should be selected to capture the intended activity without unnecessary occlusion from doors, vehicles, columns or other objects. Entrances may benefit from a dedicated view at a suitable angle for observing people entering, while wider overview cameras can provide context for movement across a larger area. Review the proposed view before finalising mounting locations."
  },
  {
    heading: "5. Account for day and night lighting",
    text: "Lighting conditions can change significantly between daytime and night-time operation. Bright backgrounds, headlights, reflective surfaces and direct sunlight can reduce usable image detail. Assess whether the camera's wide dynamic range, low-light performance or infrared illumination is suitable for the environment. Infrared illumination can also be affected by nearby reflective surfaces, glass and objects close to the camera. Where identification is important, test the proposed camera position under realistic lighting conditions rather than relying solely on catalogue specifications."
  },
  {
    heading: "6. Calculate recording storage requirements",
    text: "Recording storage depends on the number of cameras, resolution, frame rate, compression settings, scene activity, recording schedule and required retention period. Continuous recording typically requires more storage than motion-based recording, although motion-based systems must be configured carefully to avoid missing relevant events. Calculate storage using the expected recording bitrate and retention period, then include suitable operational capacity and account for the recording system's supported disk configuration. Confirm that the recorder or video management system can support the required number of cameras, incoming bandwidth and playback performance."
  },
  {
    heading: "7. Design the network and power infrastructure",
    text: "IP CCTV systems rely on a stable network and suitable power delivery. Confirm switch port capacity, Power over Ethernet (PoE) support, total PoE power budget, cable lengths and the required network bandwidth. Larger systems may benefit from separating CCTV traffic from general user traffic through suitable network segmentation. Verify that uplinks can carry the expected camera traffic without congestion and that recording equipment has adequate connectivity. Where uptime is important, consider backup power for cameras, switches and recording equipment, as well as appropriate surge protection and equipment earthing."
  },
  {
    heading: "8. Secure access to footage and devices",
    text: "CCTV security includes protecting the cameras, network, recorder and recorded data. Change default credentials, use strong unique passwords, apply available firmware updates and restrict administrative access to authorised personnel. Disable unnecessary services and remote access paths, and use secure remote access methods where remote viewing is required. Define who can view, export and delete footage. Because CCTV footage can contain personal data, system design and operation should also consider applicable privacy and data protection obligations, including appropriate signage, access controls and retention practices."
  },
  {
    heading: "9. Commission and test the complete system",
    text: "Commissioning should confirm that every camera is online, correctly labelled, focused and recording as intended. Check live views, recorded playback, time synchronisation, night-time images, motion events where configured and remote access permissions. Verify storage estimates against actual recording settings and confirm that the system behaves appropriately after power or network interruptions. Prepare a camera schedule, network information, user access arrangements and handover documentation. Testing should include representative operating conditions so that problems are identified before the system is relied upon for security."
  },
  {
    heading: "10. Plan maintenance and future expansion",
    text: "Dust, weather, vegetation growth, vibration, equipment failure and network changes can reduce CCTV performance over time. Periodic maintenance should include lens cleaning, physical inspection, review of camera views, storage health checks, time verification and confirmation that recordings can be retrieved. Review whether the original surveillance objectives are still being met when a site changes or new areas are added. Allowing for spare network capacity, suitable cable routes and expandable recording infrastructure can make future upgrades easier and more economical."
  },
  {
    heading: "The KES LTD approach",
    text: "Kamala Engineering Services LTD approaches CCTV planning as an integrated security and infrastructure task. Camera positioning, image quality, lighting, network design, recording capacity, access security and maintenance requirements should be considered together. The aim is to develop a system that provides useful footage for its intended purpose, can be managed reliably and is appropriate to the site's operational requirements."
  }
],

  },
];

export const getInsight = (slug?: string) =>
  insights.find((insight) => insight.slug === slug);
