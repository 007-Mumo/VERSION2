
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import navbarLogo from "@/assets/NAVBAR LOGO.png";

const Wordmark = ({ light }: { light: boolean }) => (
  <Link
    to="/"
    className="flex items-center"
    aria-label="KES LTD home"
  >
    <img
      src={navbarLogo}
      alt="KES LTD — Kamala Engineering Services"
      className="h-12 w-auto object-contain"
    />
  </Link>
);

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const quoteButtonClass =
    "inline-flex items-center justify-center rounded-full bg-signal px-6 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-signal-foreground transition-all duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        overHero ? "bg-transparent" : "bg-ink shadow-elegant"
      )}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Wordmark light={!overHero} />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative py-2 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors",
                  isActive
                    ? "text-signal"
                    : "text-ink-foreground/75 hover:text-ink-foreground"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}

          <Link to="/contact#quote" className={quoteButtonClass}>
            Request a Quote
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="rounded-full p-2 text-ink-foreground transition-colors hover:bg-ink-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="border-t border-ink-foreground/10 bg-ink lg:hidden">
          <div className="container-x space-y-1 py-6">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "block rounded-lg px-3 py-3 text-lg font-semibold transition-colors",
                    isActive
                      ? "text-signal"
                      : "text-ink-foreground/80 hover:bg-ink-foreground/5 hover:text-ink-foreground"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}

            <Link
              to="/contact#quote"
              className={cn(quoteButtonClass, "mt-4 flex w-full py-4")}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
