
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Layout from "@/components/Layout";
import { CtaBand, PageHeader, SectionHead } from "@/components/blocks";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { getProject, projects } from "@/data/projects";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { slug } = useParams();
  const p = getProject(slug);
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!p) return <NotFound />;

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const meta = [
    ["Category", p.category],
    ["Location", p.location],
    ["Status", p.status],
    ["Client", p.client ?? "Confidential"],
  ];

  return (
    <Layout>
      {/* HERO — preserve the existing image and layout */}
      <PageHeader
        eyebrow={p.category}
        title={p.title}
        image={p.cover}
      />

      {/* BACK TO PROJECTS — charcoal, immediately below the hero */}
      <section className="bg-ink py-6">
        <div className="container-x">
          <Link
            to="/projects"
            aria-label="Back to all projects"
            className="group inline-flex items-center gap-4 text-ink-foreground transition-colors duration-300 hover:text-signal"
          >
            <span
              aria-hidden="true"
              className="h-px w-12 bg-signal transition-all duration-300 group-hover:w-16"
            />
            <span className="text-xs font-bold uppercase tracking-[0.18em]">
              Back to Projects
            </span>
          </Link>
        </div>
      </section>

      {/* PROJECT METADATA — now below the back button */}
      <section className="border-b border-border">
        <div className="container-x grid grid-cols-2 md:grid-cols-4">
          {meta.map(([k, v]) => (
            <div
              key={k}
              className="border-r border-border py-8 pr-6 last:border-r-0"
            >
              <div className="eyebrow text-muted-foreground">{k}</div>
              <div className="mt-2 font-semibold">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SCOPE OF WORK AND PROJECT OVERVIEW */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* WHAT WE DELIVERED */}
            <div>
              <SectionHead
                eyebrow="Scope of work"
                title="What we delivered."
                className="mb-8"
              />

              <ul className="space-y-3">
                {p.scope.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-4 border-b border-border pb-3"
                  >
                    <span className="font-mono text-xs text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-2">
                {p.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="bg-secondary px-3 py-1.5 text-xs font-semibold"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* PROJECT OVERVIEW — below What we delivered */}
            <div className="border-l-2 border-signal pl-6 lg:pl-8">
              <div className="eyebrow text-primary">
                Project overview
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Project Overview
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {p.overview}
              </p>
            </div>
          </div>

          {/* TECHNICAL CHALLENGE AND ENGINEERING SOLUTION */}
          <div className="mt-16 grid gap-12 border-t border-border pt-12 lg:mt-24 lg:grid-cols-2 lg:gap-20">
            <div className="border-l-2 border-signal pl-6 lg:pl-8">
              <div className="eyebrow text-primary">
                Technical challenge
              </div>

              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {p.challenge}
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6 lg:pl-8">
              <div className="eyebrow text-primary">
                Engineering solution
              </div>

              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {p.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-x">
          <SectionHead eyebrow="Gallery" title="On site." />

          <div className="grid gap-4 md:grid-cols-3">
            {p.gallery.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(i)}
                className="group overflow-hidden"
                aria-label={`View project photo ${i + 1}`}
              >
                <img
                  src={img}
                  alt={`${p.title} photo ${i + 1}`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIOUS AND NEXT PROJECTS */}
      <nav
        className="container-x flex justify-between gap-6 py-12"
        aria-label="Project navigation"
      >
        <Link
          to={`/projects/${prev.slug}`}
          className="group flex items-center gap-3"
        >
          <ArrowLeft className="shrink-0 text-primary" />

          <span>
            <span className="eyebrow block text-muted-foreground">
              Previous
            </span>
            <span className="font-semibold group-hover:text-primary">
              {prev.title}
            </span>
          </span>
        </Link>

        <Link
          to={`/projects/${next.slug}`}
          className="group flex items-center gap-3 text-right"
        >
          <span>
            <span className="eyebrow block text-muted-foreground">
              Next
            </span>
            <span className="font-semibold group-hover:text-primary">
              {next.title}
            </span>
          </span>

          <ArrowRight className="shrink-0 text-primary" />
        </Link>
      </nav>

      <CtaBand />

      {/* IMAGE LIGHTBOX */}
      <Dialog
        open={lightbox !== null}
        onOpenChange={(open) => !open && setLightbox(null)}
      >
        <DialogContent className="max-w-5xl border-none bg-ink p-0 [&>button]:hidden">
          <DialogTitle className="sr-only">
            {p.title} gallery
          </DialogTitle>

          {lightbox !== null && (
            <div className="relative">
              <img
                src={p.gallery[lightbox]}
                alt={`${p.title} enlarged project photo`}
                className="max-h-[85vh] w-full object-contain"
              />

              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute right-3 top-3 rounded-full bg-ink/70 p-2 text-ink-foreground"
                aria-label="Close gallery"
              >
                <X />
              </button>

              {p.gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox(
                        (lightbox - 1 + p.gallery.length) %
                          p.gallery.length
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-signal p-3 text-signal-foreground"
                    aria-label="Previous image"
                  >
                    <ArrowLeft />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setLightbox((lightbox + 1) % p.gallery.length)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-signal p-3 text-signal-foreground"
                    aria-label="Next image"
                  >
                    <ArrowRight />
                  </button>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default ProjectDetail;
