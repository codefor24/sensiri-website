import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

function getNavLinkClass({ isActive }) {
  return [
    "text-base font-medium tracking-[0.02em] transition-colors duration-150 md:text-sm",
    isActive ? "text-accent" : "text-white/85 hover:text-white",
  ].join(" ");
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-nav shadow-[0_10px_30px_rgba(11,31,58,0.18)]">
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <NavLink
          to="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/sensiri-logo.jpeg"
            alt="Sensiri Infrastructures logo"
            className="h-11 w-11 rounded-lg object-cover sm:h-12 sm:w-12"
          />
          <div className="min-w-0">
            <p className="truncate text-base font-semibold uppercase tracking-[0.14em] text-white sm:text-lg">
              Sensiri
            </p>
            <p className="hidden text-[10px] uppercase tracking-[0.22em] text-white/60 sm:block">
              Infrastructures
            </p>
          </div>
        </NavLink>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/20 px-3 py-2 text-sm text-white transition-colors hover:border-white/35 hover:bg-white/5 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="flex flex-col gap-1">
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
          </span>
        </button>

        <div className="hidden items-center gap-10 md:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={getNavLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/contact"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-colors duration-150 hover:bg-secondary"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-nav md:hidden">
          <div className="mx-auto flex max-w-content flex-col px-4 py-4 sm:px-6">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `${getNavLinkClass({ isActive })} border-b border-white/10 py-3.5 last:border-b-0`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <Link
              to="/contact"
              className="mt-4 min-h-12 rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-primary transition-colors duration-150 hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
