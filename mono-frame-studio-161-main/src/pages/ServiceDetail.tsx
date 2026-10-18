import { Link, useParams } from "react-router-dom";
import { Check } from "lucide-react";
import Layout from "@/components/Layout";
import { CtaBand, CtaButton, PageHeader, ProjectCard, SectionHead } from "@/components/blocks";
import { getService, services } from "@/data/services";
import { projects } from "@/data/projects";
import NotFound from "./NotFound";

const related: Record<string, string[]> = {
  "electrical-engineering": ["Electrical Engineering", "Industrial Engineering"],
  "solar-energy": ["Solar and Renewable Energy", "Residential Projects"],
  "ict-networking": ["ICT and Networking"],
  "cctv-security": ["CCTV and Security"],
  automation: ["Automation", "Industrial Engineering"],
  "mep-engineering": ["Commercial and Building Services"],
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const s = getService(slug);
  if (!s) return <NotFound />;
  const rel = projects.filter((p) => related[s.slug]?.includes(p.category)).slice(0, 3);

  return (
    <Layout>
      <PageHeader eyebrow={`Service ${s.code}`} title={s.title} intro={s.description} image={s.image} />
      <section className="py-24">
        <div className="container-x grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHead eyebrow="Key capabilities" title="What's included." />
            <ul className="grid gap-px bg-border sm:grid-cols-2">
              {s.capabilities.map((c) => (
                <li key={c} className="flex gap-4 bg-background p-6"><Check className="shrink-0 text-primary" size={20} /><span className="font-medium">{c}</span></li>
              ))}
            </ul>
            <div className="mt-20">
              <SectionHead eyebrow="Delivery process" title="From survey to support." />
              <ol className="grid gap-6 md:grid-cols-5">
                {s.process.map((p, i) => (
                  <li key={p} className="border-t-2 border-signal pt-4">
                    <div className="font-mono text-xs text-primary">STEP 0{i + 1}</div>
                    <div className="mt-2 font-semibold">{p}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <aside className="h-fit bg-ink p-8 text-ink-foreground lg:sticky lg:top-28">
            <div className="eyebrow text-signal">Consultation</div>
            <h3 className="mt-4 text-2xl font-bold">Discuss your {s.title.split(" ")[0].toLowerCase()} project.</h3>
            <p className="mt-3 text-sm text-ink-foreground/70">Tell us about your site and requirements and an engineer will get back to you.</p>
            <div className="mt-8"><CtaButton to={`/contact?service=${s.slug}#quote`}>Request a Consultation</CtaButton></div>
            <div className="mt-10 border-t border-ink-foreground/10 pt-6">
              <div className="eyebrow mb-4 text-ink-foreground/50">Other services</div>
              <ul className="space-y-2 text-sm">
                {services.filter((o) => o.slug !== s.slug).map((o) => (
                  <li key={o.slug}><Link to={`/services/${o.slug}`} className="text-ink-foreground/75 hover:text-signal">{o.title}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      {rel.length > 0 && (
        <section className="bg-secondary py-24">
          <div className="container-x">
            <SectionHead eyebrow="Related projects" title="Selected work." />
            <div className="grid gap-10 md:grid-cols-3">{rel.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
          </div>
        </section>
      )}
      <CtaBand />
    </Layout>
  );
};

export default ServiceDetail;
