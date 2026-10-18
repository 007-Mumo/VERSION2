
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Layout from "@/components/Layout";
import { CtaBand, PageHeader } from "@/components/blocks";
import { insights } from "@/data/insights";
import hero from "@/assets/Light Installation.jpeg";

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const Insights = () => (
  <Layout>
    <PageHeader
      eyebrow="Insights"
      title="Technical notes and guidance."
      intro="Practical knowledge on power, solar, networks and security from our engineering team."
      image={hero}
    />

    <section className="py-16 lg:py-24">
      <div className="container-x">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow text-primary">Engineering knowledge</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Insights from the field.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Explore technical articles, project lessons and practical guidance
            across electrical engineering, renewable energy, ICT and security.
          </p>
        </div>

        <div className="divide-y divide-border border-t border-border">
          {insights.map((i, index) => (
            <Link
              key={i.slug}
              to={`/insights/${i.slug}`}
              className="group grid gap-6 py-8 transition-colors sm:grid-cols-[minmax(220px,0.85fr)_1.4fr] sm:gap-8 lg:gap-12"
            >
              {/* Image on the left */}
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                {i.image ? (
                  <img
                    src={i.image}
                    alt={i.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      KES LTD / {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}

                <span className="absolute left-3 top-3 bg-background px-3 py-2 font-mono text-xs text-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Insight details on the right */}
              <div className="flex min-w-0 flex-col justify-center">
                <div className="eyebrow flex flex-wrap items-center gap-x-4 gap-y-2 text-primary">
                  <span>{i.category}</span>
                  <span className="text-muted-foreground">
                    {fmt(i.date)}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                  {i.title}
                </h3>

                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                  {i.excerpt}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  Read insight
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <CtaBand />
  </Layout>
);

export default Insights;
