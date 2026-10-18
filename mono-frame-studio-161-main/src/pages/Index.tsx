import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, Wrench, Leaf, Users, Cpu } from "lucide-react";
import Layout from "@/components/Layout";
import { CtaBand, CtaButton, ProjectCard, SectionHead } from "@/components/blocks";
import heroImage from "@/assets/Koma Gardens.jpeg";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { insights } from "@/data/insights";

const approach = [
  { icon: Cpu, title: "Engineering-led", text: "Every solution starts with analysis, design and documentation." },
  { icon: Wrench, title: "Quality workmanship", text: "Neat, labelled, tested installations built to last." },
  { icon: ShieldCheck, title: "Safety & compliance", text: "Safe working practices and compliant installations." },
  { icon: Leaf, title: "Sustainable", text: "Efficient use of resources and renewable technologies." },
  { icon: Users, title: "Accountable delivery", text: "Clear communication from survey to handover." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative flex h-screen min-h-[640px] items-center overflow-hidden bg-ink">
      <img src={heroImage} alt="KES engineer inspecting rooftop solar and switchgear" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-schematic opacity-60" />
      <div className="container-x relative z-10 text-primary-foreground">
        <div className="eyebrow reveal mb-8 flex items-center gap-3 text-signal">
          <span className="h-px w-12 bg-signal" /> 
        </div>
        <h1 className="reveal max-w-4xl text-5xl font-extrabold leading-[1.02] md:text-7xl lg:text-8xl">
          Engineering Solutions.
          <br />
          <span className="text-primary-foreground/70">Built for the Real World.</span>
        </h1>
        <p className="reveal-2 mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          Delivering reliable electrical, solar, ICT, security and automation solutions for residential, commercial and industrial projects across Kenya.
        </p>
        <div className="reveal-3 mt-10 flex flex-wrap gap-4">
          <CtaButton to="/projects">Explore Our Projects</CtaButton>
          <CtaButton to="/contact#quote" variant="outline">Request a Quote</CtaButton>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <div className="relative h-10 w-6 rounded-full border border-primary-foreground/40">
          <span className="scroll-dot absolute left-1/2 top-2 h-2 w-0.5 -translate-x-1/2 bg-signal" />
        </div>
        <span className="eyebrow text-primary-foreground/50">Scroll</span>
      </div>
    </section>

    {/* Services */}
    <section className="py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead eyebrow="What we do" title="Multidisciplinary engineering services." className="mb-0" />
          <Link to="/services" className="eyebrow flex items-center gap-2 text-primary hover:underline">All services <ArrowUpRight size={14} /></Link>
        </div>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="group relative overflow-hidden bg-background">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <div className="mb-4 font-mono text-xs text-primary">{s.code} /</div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <span className="eyebrow mt-6 inline-flex items-center gap-2 text-primary">View Service <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
              </div>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-signal transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* About */}
    <section className="relative overflow-hidden bg-primary py-28 text-primary-foreground">
      <div className="absolute inset-0 bg-schematic" />
      <div className="container-x relative grid gap-16 lg:grid-cols-2">
        <div>
          <SectionHead light eyebrow="About KES LTD" title="Technical Expertise. Practical Solutions." className="mb-8" />
          <p className="text-lg leading-relaxed text-primary-foreground/80">
            Kamala Engineering Services LTD is a multidisciplinary engineering company delivering dependable electrical and technology services through careful planning, technical design, installation, testing, commissioning and ongoing support.
          </p>
          <div className="mt-10"><CtaButton to="/about">About the company</CtaButton></div>
        </div>
        <div className="grid gap-px bg-primary-foreground/10 sm:grid-cols-2">
          {approach.map((a) => (
            <div key={a.title} className="bg-primary p-7">
              <a.icon className="text-signal" size={26} strokeWidth={1.5} />
              <h3 className="mt-5 font-bold">{a.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured projects */}
    <section className="bg-secondary py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead eyebrow="Featured projects" title="Engineering, delivered on site." className="mb-0" />
          <Link to="/projects" className="eyebrow flex items-center gap-2 text-primary hover:underline">All projects <ArrowUpRight size={14} /></Link>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {projects.filter((p) => p.featured).map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </div>
    </section>

    {/* Insights */}
    <section className="py-28">
      <div className="container-x">
        <SectionHead eyebrow="Insights" title="Technical notes from the field." />
        <div className="grid gap-10 md:grid-cols-3">
          {insights.map((i) => (
            <Link key={i.slug} to={`/insights/${i.slug}`} className="group">
              <div className="aspect-[16/10] overflow-hidden"><img src={i.image} alt={i.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
              <div className="eyebrow mt-6 text-primary">{i.category}</div>
              <h3 className="mt-3 text-xl font-bold group-hover:text-primary">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>


    <CtaBand />
  </Layout>
);

export default Index;
