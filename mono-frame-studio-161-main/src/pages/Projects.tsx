import { useState } from "react";
import Layout from "@/components/Layout";
import { CtaBand, PageHeader, ProjectCard } from "@/components/blocks";
import { projectCategories, projects } from "@/data/projects";
import hero from "@/assets/svc-solar.jpg";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [filter, setFilter] = useState<string>("All");
  const available = projectCategories.filter((c) => projects.some((p) => p.category === c));
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <PageHeader eyebrow="Projects" title="Our engineering portfolio." intro="Electrical, solar, ICT, security, automation and building-services work delivered across Kenya." image={hero} />
      <section className="py-20">
        <div className="container-x">
          <div className="mb-14 flex flex-wrap gap-2 border-b border-border pb-6">
            {["All", ...available].map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
                  filter === c ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-accent"
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </div>
      </section>
      <CtaBand />
    </Layout>
  );
};

export default Projects;
