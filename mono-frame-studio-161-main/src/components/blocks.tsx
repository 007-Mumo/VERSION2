
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

export const PageHeader = ({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  image?: string;
}) => (
  <section className="relative overflow-hidden bg-primary pb-20 pt-40 text-primary-foreground">
    {image && (
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
    )}
    <div className="absolute inset-0 bg-schematic" />
    <div className="container-x relative">
      <div className="eyebrow mb-6 flex items-center gap-3 text-signal">
        <span className="h-px w-10 bg-signal" />
        {eyebrow}
      </div>
      <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] md:text-6xl">
        {title}
      </h1>
      {intro && (
        <p className="mt-8 max-w-2xl text-lg text-primary-foreground/75">
          {intro}
        </p>
      )}
    </div>
  </section>
);

export const SectionHead = ({
  eyebrow,
  title,
  className,
  light,
}: {
  eyebrow: string;
  title: ReactNode;
  className?: string;
  light?: boolean;
}) => (
  <div className={cn("mb-14", className)}>
    <div
      className={cn(
        "eyebrow mb-5 flex items-center gap-3",
        light ? "text-signal" : "text-tech"
      )}
    >
      <span className={cn("h-px w-10", light ? "bg-signal" : "bg-signal")} />
      {eyebrow}
    </div>
    <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
      {title}
    </h2>
  </div>
);

export const CtaButton = ({
  to,
  children,
  variant = "signal",
}: {
  to: string;
  children: ReactNode;
  variant?: "signal" | "outline" | "primary";
}) => (
  <Link
    to={to}
    className={cn(
      "group inline-flex items-center gap-3 rounded-full px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] transition-all",
      variant === "signal" &&
        "bg-signal text-signal-foreground hover:opacity-90",
      variant === "primary" &&
        "bg-primary text-primary-foreground hover:opacity-90",
      variant === "outline" &&
        "border border-primary-foreground/40 text-primary-foreground hover:border-signal hover:text-signal"
    )}
  >
    {children}
    <ArrowUpRight
      size={16}
      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  </Link>
);

export const ProjectCard = ({
  project,
  large,
}: {
  project: Project;
  large?: boolean;
}) => (
  <Link to={`/projects/${project.slug}`} className="group block">
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        large ? "aspect-[4/3]" : "aspect-[4/3]"
      )}
    >
      <img
        src={project.cover}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/30" />
      <span className="absolute left-0 top-0 bg-signal px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-signal-foreground">
        {project.category}
      </span>
    </div>
    <div className="flex items-start justify-between gap-4 border-b border-border py-5">
      <div>
        <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {project.location} · {project.status}
        </p>
      </div>
      <ArrowUpRight className="mt-1 shrink-0 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
    </div>
  </Link>
);

export const CtaBand = () => (
  <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
    <div className="absolute inset-0 bg-schematic" />
    <div className="container-x relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
      <div>
        <div className="eyebrow mb-5 text-signal">Start a project</div>
        <h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
          Have a project in mind? Let's engineer it properly.
        </h2>
      </div>
      <CtaButton to="/contact#quote">Request a Quote</CtaButton>
    </div>
  </section>
);
