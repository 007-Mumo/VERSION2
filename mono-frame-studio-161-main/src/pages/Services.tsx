import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Layout from "@/components/Layout";
import { CtaBand, CtaButton, PageHeader } from "@/components/blocks";
import { services } from "@/data/services";
import hero from "@/assets/svc-automation-.jpeg";
import { cn } from "@/lib/utils";

const Services = () => (
  <Layout>
    <PageHeader eyebrow="Services" title="Engineering services across power, energy, networks and security." intro="Six integrated disciplines, delivered by one accountable engineering team." image={hero} />
    <section className="py-20">
      <div className="container-x space-y-24">
        {services.map((s, i) => (
          <article key={s.slug} className="grid items-center gap-12 lg:grid-cols-2">
            <Link to={`/services/${s.slug}`} className={cn("group overflow-hidden", i % 2 && "lg:order-2")}>
              <img src={s.image} alt={s.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </Link>
            <div>
              <div className="font-mono text-xs text-primary">{s.code} /</div>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">{s.title}</h2>
              <p className="mt-5 text-muted-foreground">{s.description}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {s.capabilities.map((c) => (
                  <li key={c} className="flex gap-3 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-primary" />{c}</li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <CtaButton to={`/contact?service=${s.slug}#quote`} variant="primary">Request a Consultation</CtaButton>
                <Link to={`/services/${s.slug}`} className="eyebrow inline-flex items-center gap-2 text-primary hover:underline">View Service <ArrowUpRight size={14} /></Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
    <CtaBand />
  </Layout>
);

export default Services;
