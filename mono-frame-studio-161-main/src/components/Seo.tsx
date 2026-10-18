import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE = "https://thekesltd.co.ke";
const pages: Record<string, [string, string]> = {
  "/": ["KES LTD — Electrical, Solar, ICT & Security Engineering in Kenya", "Kamala Engineering Services LTD delivers electrical, solar, ICT, CCTV, automation and MEP engineering across Kenya."],
  "/about": ["About KES LTD — Kamala Engineering Services", "Who we are, how we work and the engineering principles behind every KES LTD installation."],
  "/services": ["Engineering Services — KES LTD", "Electrical, solar, ICT and networking, CCTV and security, automation and MEP engineering services."],
  "/projects": ["Projects — KES LTD", "Engineering project case studies from KES LTD across Kenya."],
  "/insights": ["Insights — KES LTD", "Technical notes on electrical, solar, ICT and security engineering."],
  "/contact": ["Contact & Request a Quote — KES LTD", "Contact Kamala Engineering Services LTD or request a quote for your project."],
};

const setMeta = (attr: "name" | "property", key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.content = value;
};

/** Sets a unique canonical, title and description per route. Sample project/insight pages are noindex until real evidence is published. */
const Seo = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : "/";
    const pretty = path.split("/").pop()!.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    const [title, desc] = pages[path] ?? [`${pretty} — KES LTD`, `${pretty} — Kamala Engineering Services LTD.`];
    const url = BASE + (path === "/" ? "/" : path);
    document.title = title;
    setMeta("name", "description", desc);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    const sample = /^\/(projects|insights)\/.+/.test(path);
    setMeta("name", "robots", sample ? "noindex, follow" : "index, follow");
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = url;
  }, [pathname]);
  return null;
};
export default Seo;
