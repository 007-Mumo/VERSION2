
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Layout from "@/components/Layout";
import { CtaBand, PageHeader, SectionHead } from "@/components/blocks";
import mep from "@/assets/MEP.jpeg";
import electrical from "@/assets/SLD .jpg";
import { site } from "@/data/site";

const values = [
  {
    title: "Engineering-led problem solving",
    text: "We analyse before we install, so solutions fit the real requirement.",
  },
  {
    title: "Quality & attention to detail",
    text: "Neat terminations, labelled circuits and complete documentation.",
  },
  {
    title: "Safety, reliability & compliance",
    text: "Safe work practices and installations designed to perform long term.",
  },
  {
    title: "Sustainable technologies",
    text: "Efficient use of resources and renewable energy where it makes sense.",
  },
  {
    title: "Collaboration & accountability",
    text: "Clear communication and ownership from survey to handover.",
  },
];

const companySections = [
  {
    title: "Company background",
    text: "Learn about KES LTD, its engineering focus, purpose and company development.",
    to: "/about/company-background",
    number: "01",
  },
  {
    title: "Team & technical expertise",
    text: "Explore our technical disciplines, engineering capabilities and team expertise.",
    to: "/about/team-expertise",
    number: "02",
  },
 
  {
    title: "Geographic coverage",
    text: site.coverage || "Discover the areas and regions served by KES LTD.",
    to: "/about/geographic-coverage",
    number: "03",
  },
];

const About = () => (
  <Layout>
    <PageHeader
      eyebrow="About KES LTD"
      title="Technical Expertise. Practical Solutions."
      intro="Kamala Engineering Services LTD is a multidisciplinary engineering company delivering electrical, solar, ICT, security, automation and building services solutions."
      image={mep}
    />

    {/* Engineering approach */}
    <section className="py-20 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div className="w-full min-w-0 overflow-hidden bg-[#202833]">
          <img
            src={electrical}
            alt="KES LTD electrical single-line diagram"
            loading="lazy"
            className="block h-auto w-full object-contain"
          />
        </div>

        <div className="min-w-0 self-center">
          <SectionHead
            eyebrow="Our approach"
            title="Planned, designed, installed and supported."
          />

          <p className="text-lg leading-relaxed text-muted-foreground">
            We focus on dependable engineering through careful planning,
            technical design, installation, testing, commissioning and ongoing
            support — so systems perform as intended long after handover.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="border-l-2 border-signal pl-6">
              <div className="eyebrow text-primary">Mission</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To deliver reliable, safe and efficient engineering solutions
                that create lasting value for our clients.
              </p>
            </div>

            <div className="border-l-2 border-signal pl-6">
              <div className="eyebrow text-primary">Vision</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To be a trusted engineering partner for infrastructure and
                technology projects across Kenya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Core values */}
    <section className="bg-secondary bg-schematic-light py-20 lg:py-28">
      <div className="container-x">
        <SectionHead eyebrow="Core values" title="How we work." />

        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-5">
          {values.map((value, index) => (
            <div key={value.title} className="bg-background p-8">
              <div className="font-mono text-xs text-primary">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-6 font-bold">{value.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Clickable company information cards */}
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <SectionHead
          eyebrow="Explore KES LTD"
          title="Learn more about us."
        />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {companySections.map((section) => (
            <Link
              key={section.to}
              to={section.to}
              className="group flex min-h-48 flex-col border-t-2 border-ink pt-6 transition-colors duration-300 hover:border-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-4"
            >
              <span className="font-mono text-xs text-primary">
                {section.number}
              </span>

              <h3 className="mt-4 font-bold transition-colors group-hover:text-primary">
                {section.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {section.text}
              </p>

              <span className="mt-auto flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Explore section
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <CtaBand />
  </Layout>
);

export default About;
