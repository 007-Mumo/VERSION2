import eng1 from "@/assets/Mechanical Engineer.jpeg";
import eng2 from "@/assets/Electrical Engineer.jpeg";

import { Link, Navigate, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, MapPin, Compass } from "lucide-react";

import Layout from "@/components/Layout";
import { CtaBand, PageHeader, SectionHead } from "@/components/blocks";
import { site } from "@/data/site";

type AboutSectionKey =
  | "company-background"
  | "team-expertise"
  | "geographic-coverage";

interface AboutSectionProps {
  section?: AboutSectionKey;
}

const gold = "text-[#D4A72C]";
const goldBorder = "border-[#D4A72C]";
const darkPanel = "bg-[#171A20] text-white";

const sectionContent: Record<
  AboutSectionKey,
  { eyebrow: string; title: string; intro: string }
> = {
  "company-background": {
    eyebrow: "Company background",
    title: "Built on engineering and partnership.",
    intro:
      "Kamala Engineering Services LTD was founded in 2021 by two partners: a Graduate Engineer in Electrical and Electronics Engineering and a Professional Engineer in Mechatronics Engineering with an MBA. The company brings together complementary technical and management perspectives to deliver practical engineering solutions.",
  },
  "team-expertise": {
    eyebrow: "Meet the team",
    title: "Engineering knowledge. Practical execution.",
    intro:
      "KES LTD is built around complementary engineering expertise, technical problem-solving and a commitment to reliable project delivery. Our approach connects engineering design, site coordination, installation and commissioning.",
  },
  "geographic-coverage": {
    eyebrow: "Geographic coverage",
    title: "Engineering solutions across Kenya.",
    intro:
      site.coverage ||
      "Based in Nairobi, Kenya, KES LTD focuses on delivering engineering and technical services for projects across Kenya. Our work is guided by project requirements, site conditions, safety and applicable technical standards.",
  },
};

const teamMembers = [
  {
    number: "01",
    role: "Professional Engineer — Vincent Ben Jumba, MBA, M.I.E.K",
    discipline: "Mechatronics Engineering and Management",
    qualification: "Mechatronics Engineering background with an MBA",
    institution:
      "Jomo Kenyatta University of Agriculture and Technology",
    description:
      "Brings multidisciplinary engineering and management experience to systems integration, automation, technical coordination and project delivery. Combines engineering knowledge with business and management perspectives to support technical decision-making and the effective coordination of engineering projects.",
    image: eng1,
    imageAlt: "Vincent Ben Jumba, Professional Engineer",
  },
  {
    number: "02",
    role: "Graduate Engineer — Brian Mumo Musyoki",
    discipline: "Electrical and Electronic Engineering",
    qualification: "BSc. Electrical and Electronic Engineering",
    institution: "University of Nairobi",
    description:
      "Contributes to electrical engineering design, power systems, renewable energy, ICT infrastructure, technical documentation and project coordination. Focuses on practical, safe and efficient engineering solutions through technical analysis, design development and coordinated project delivery.",
    image: eng2,
    imageAlt: "Brian Mumo Musyoki, Graduate Engineer",
  },
  
];

const expertiseAreas = [
  {
    title: "Electrical engineering",
    description:
      "Electrical design, power distribution, installation coordination, testing and commissioning.",
  },
  {
    title: "Renewable energy",
    description:
      "Solar PV system design, energy assessment and integration of appropriate energy solutions.",
  },
  {
    title: "ICT and security",
    description:
      "Structured cabling, network infrastructure, CCTV, access control and related security systems.",
  },
  {
    title: "Building services",
    description:
      "Coordination of electrical and associated building services with architectural and structural requirements.",
  },
];

const companyPrinciples = [
  {
    number: "01",
    title: "Engineering first",
    description:
      "Understand the technical requirement before selecting or implementing a solution.",
  },
  {
    number: "02",
    title: "Safety and compliance",
    description:
      "Give due consideration to safe working practices, applicable standards and regulatory requirements.",
  },
  {
    number: "03",
    title: "Coordination and accountability",
    description:
      "Maintain clear communication, coordinated documentation and responsibility throughout project delivery.",
  },
  {
    number: "04",
    title: "Reliable outcomes",
    description:
      "Focus on systems that are practical to operate, maintain and hand over.",
  },
];

const coverageItems = [
  {
    title: "Nairobi and surrounding areas",
    description:
      "Coordination and delivery of engineering services for projects within Nairobi and neighbouring areas, subject to project requirements.",
  },
  {
    title: "Projects across Kenya",
    description:
      "Technical services may be provided in other parts of Kenya depending on the scope, programme and site requirements.",
  },
  {
    title: "Project-specific delivery",
    description:
      "Each engagement is assessed according to technical complexity, resources, access, compliance and required deliverables.",
  },
];

const AboutSection = ({ section }: AboutSectionProps) => {
  const location = useLocation();

  const routeSection =
    section ||
    (location.pathname.split("/").filter(Boolean).pop() as
      | AboutSectionKey
      | undefined);

  // The former certifications section is intentionally excluded.
  if (
    !routeSection ||
    !Object.prototype.hasOwnProperty.call(sectionContent, routeSection)
  ) {
    return <Navigate to="/about" replace />;
  }

  const content = sectionContent[routeSection];

  return (
    <Layout>
      <PageHeader
        eyebrow={content.eyebrow}
        title={content.title}
        intro={content.intro}
      />

      <section className="border-b border-border bg-background">
        <div className="container-x flex min-h-16 items-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-[#343A40] transition-colors hover:text-[#B58B20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] focus-visible:ring-offset-4"
          >
            <ArrowLeft size={16} />
            Back to About
          </Link>
        </div>
      </section>

      {routeSection === "company-background" && (
        <>
          <section className="py-20 lg:py-28">
            <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className={`eyebrow ${gold}`}>Our story</p>
                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                  Founded in 2021 with a shared engineering vision.
                </h2>
                <div className={`mt-8 h-1 w-20 ${goldBorder} border-t-2`} />
              </div>

              <div className="space-y-6 text-base leading-8 text-muted-foreground">
                <p>
                  Kamala Engineering Services LTD (KES LTD) was founded in
                  2021 by two partners whose professional backgrounds bring
                  together electrical and electronics engineering,
                  mechatronics engineering and business management.
                </p>
                <p>
                  The founding partnership combines the perspective of a
                  Graduate Engineer educated in Electrical and Electronics
                  Engineering at the University of Nairobi with that of a
                  Professional Engineer whose background is in Mechatronics
                  Engineering and who holds an MBA from Jomo Kenyatta
                  University of Agriculture and Technology.
                </p>
                <p>
                  This combination provides a foundation for approaching
                  engineering projects from both technical and organisational
                  perspectives: understanding system requirements, coordinating
                  disciplines, planning implementation and considering the
                  practical demands of project delivery.
                </p>
                <p>
                  KES LTD focuses on engineering and building-services
                  solutions, including electrical installations, solar energy,
                  ICT infrastructure, security systems and related technical
                  services. The specific scope of each project is determined
                  by its requirements, site conditions and applicable
                  regulatory obligations.
                </p>
                <p>
                  Since its establishment, the company’s direction has been
                  guided by a straightforward principle: engineering work
                  should be carefully considered, clearly coordinated and
                  delivered with attention to safety, functionality and
                  long-term reliability.
                </p>
              </div>
            </div>
          </section>

          <section className={`${darkPanel} py-20 lg:py-24`}>
            <div className="container-x">
              <SectionHead
                eyebrow="Our foundation"
                title="Two complementary professional perspectives."
                className="mb-12"
              />

              <div className="grid gap-6 md:grid-cols-2">
                {teamMembers.map((member) => (
                  <article
                    key={member.number}
                    className="group overflow-hidden border border-white/15 transition-colors hover:border-[#D4A72C]"
                  >
                    <div className="grid grid-cols-[minmax(150px,0.72fr)_minmax(0,1.28fr)] sm:grid-cols-[minmax(180px,0.75fr)_minmax(0,1.25fr)]">
                      <div className="flex min-h-[260px] items-center justify-center overflow-hidden bg-[#22262D] p-1 sm:min-h-[320px] sm:p-2">
                        <img
                          src={member.image}
                          alt={member.imageAlt}
                          loading="lazy"
                          className="h-full max-h-[420px] w-full object-contain object-center transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <span className={`font-mono text-sm ${gold}`}>
                          {member.number}
                        </span>
                        <h3 className="mt-3 text-xl font-bold">
                          {member.role}
                        </h3>
                        <p className={`mt-2 text-sm ${gold}`}>
                          {member.discipline}
                        </p>
                        <p className="mt-3 text-sm font-semibold text-white/90">
                          {member.qualification}
                        </p>
                        <p className="mt-1 text-sm text-white/60">
                          {member.institution}
                        </p>
                        <p className="mt-4 text-sm leading-7 text-white/70">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 lg:py-24">
            <div className="container-x">
              <SectionHead
                eyebrow="Our operating principles"
                title="The principles behind our work."
                className="mb-12"
              />

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {companyPrinciples.map((principle) => (
                  <article
                    key={principle.number}
                    className={`border-t-2 ${goldBorder} pt-6`}
                  >
                    <span className={`font-mono text-xs ${gold}`}>
                      {principle.number}
                    </span>
                    <h3 className="mt-4 font-bold">{principle.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {principle.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {routeSection === "team-expertise" && (
        <>
          <section className="py-20 lg:py-28">
            <div className="container-x">
              <SectionHead
                eyebrow="Meet the team"
                title="Technical knowledge with a practical outlook."
                className="mb-12"
              />

              {/* Responsive team gallery: stacked portraits on mobile, three-column cards on desktop. */}
              <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-16">
                {teamMembers.map((member) => (
                  <article
                    key={member.number}
                    className="group min-w-0"
                  >
                    <div className="flex aspect-square w-full items-center justify-center overflow-hidden bg-[#F1F2F3]">
                      <img
                        src={member.image}
                        alt={member.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="px-1 pb-2 pt-6 sm:px-2 sm:pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#B58B20]">
                        {member.number} / {member.discipline}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold uppercase leading-snug tracking-[0.045em] sm:text-lg lg:text-xl">
                        {member.role}
                      </h3>
                      <p className="mt-2 text-sm font-medium leading-snug text-foreground/80">
                        {member.qualification}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {member.institution}
                      </p>
                      <div className="my-4 h-px w-14 bg-[#D4A72C]" />
                      <p className="text-sm leading-7 text-muted-foreground">
                        {member.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className={`${darkPanel} py-20 lg:py-24`}>
            <div className="container-x">
              <SectionHead
                eyebrow="Technical capabilities"
                title="Disciplines that support project delivery."
                className="mb-12"
              />

              <div className="grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
                {expertiseAreas.map((area, index) => (
                  <article
                    key={area.title}
                    className="bg-[#171A20] p-7 lg:p-8"
                  >
                    <span className={`font-mono text-xs ${gold}`}>
                      0{index + 1}
                    </span>
                    <h3 className="mt-5 font-bold">{area.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/65">
                      {area.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {routeSection === "geographic-coverage" && (
        <>
          <section className="py-20 lg:py-28">
            <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div
                className={`${darkPanel} flex min-h-80 flex-col justify-between p-8 md:p-10`}
              >
                <div className="flex h-14 w-14 items-center justify-center border border-[#D4A72C]">
                  <MapPin size={28} className={gold} />
                </div>

                <div>
                  <p className={`eyebrow ${gold}`}>Our base</p>
                  <h2 className="mt-3 text-3xl font-bold">Nairobi, Kenya</h2>
                  <p className="mt-4 text-sm leading-7 text-white/70">
                    Engineering services delivered according to project
                    scope, site requirements and available resources.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {coverageItems.map((item, index) => (
                  <article
                    key={item.title}
                    className={`border-b border-border pb-8 ${
                      index === 0 ? "border-t border-border pt-8" : ""
                    }`}
                  >
                    <div className="flex items-start gap-5">
                      <span className={`font-mono text-xs ${gold}`}>
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-secondary py-16 lg:py-20">
            <div className="container-x grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
              <div
                className={`flex h-14 w-14 items-center justify-center border ${goldBorder}`}
              >
                <Compass size={26} className="text-[#B58B20]" />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Discuss your project requirements.
                </h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Share your location, project scope and required engineering
                  services so the appropriate next steps can be considered.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D4A72C] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#171A20] transition-colors hover:bg-[#E5BC4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] focus-visible:ring-offset-4"
              >
                Contact KES LTD
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </section>
        </>
      )}

      <CtaBand />
    </Layout>
  );
};

export default AboutSection;
