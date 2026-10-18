import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Seo from "./Seo";
import { navLinks, site } from "@/data/site";
import { services } from "@/data/services";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 50);
    } else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const Footer = () => (
  <footer className="bg-ink text-ink-foreground">
    <div className="container-x grid gap-12 py-20 md:grid-cols-4">
      <div className="md:col-span-1">
        <div className="text-2xl font-extrabold">KES LTD</div>
        <p className="mt-3 text-sm text-ink-foreground/60">{site.legalName}</p>
        <p className="mt-6 text-sm leading-relaxed text-ink-foreground/60">
          Electrical, solar, ICT and automation engineering for residential, commercial and industrial clients.
        </p>
      </div>
      <div>
        <div className="eyebrow mb-5 text-signal">Services</div>
        <ul className="space-y-3 text-sm text-ink-foreground/70">
          {services.map((s) => (
            <li key={s.slug}><Link className="hover:text-ink-foreground" to={`/services/${s.slug}`}>{s.title}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <div className="eyebrow mb-5 text-signal">Company</div>
        <ul className="space-y-3 text-sm text-ink-foreground/70">
          {navLinks.slice(1).map((l) => (
            <li key={l.to}><Link className="hover:text-ink-foreground" to={l.to}>{l.label}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <div className="eyebrow mb-5 text-signal">Contact</div>
        <ul className="space-y-3 text-sm text-ink-foreground/70">
          <li><a href={`mailto:${site.email}`} className="hover:text-ink-foreground">{site.email}</a></li>
          <li><a href={`tel:${site.phoneHref}`} className="hover:text-ink-foreground">{site.phone}</a></li>
          <li>{site.address}</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-ink-foreground/10">
      <div className="container-x flex flex-col justify-between gap-2 py-6 text-xs text-ink-foreground/50 md:flex-row">
        <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
        <span>{site.coverage}</span>
      </div>
    </div>
  </footer>
);

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen">
    <ScrollToTop />
    <Seo />
    <Navigation />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
