import { Link } from "@tanstack/react-router";
import { Cross, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
  { to: "/products" as const, label: "Products" },
  { to: "/contact" as const, label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" data-ocid="nav.link">
            <img
              src="/assets/uploads/screenshot_2026-03-28_233510-019d35b2-bf1b-771b-a94c-3f1c31795016-1.png"
              alt="Saif Surgical & Scientific Equipment Logo"
              className="h-12 w-auto object-contain"
            />
            <div>
              <span className="font-display font-bold text-lg text-brand-navy leading-tight block">
                Saif Surgical
              </span>
              <span className="text-xs text-gray-500 leading-tight block">
                &amp; Scientific Equipment
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium transition-colors duration-200 hover:text-brand-blue text-gray-700"
                activeProps={{
                  className:
                    "text-sm font-medium transition-colors duration-200 text-brand-blue",
                }}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/get-quote"
              className="hidden md:inline-flex items-center gap-2 bg-brand-green hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200"
              data-ocid="nav.primary_button"
            >
              <Cross className="w-3.5 h-3.5" />
              Request a Quote
            </Link>
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 shadow-lg">
          <nav className="flex flex-col gap-1 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium px-3 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-50"
                activeProps={{
                  className:
                    "text-sm font-medium px-3 py-2 rounded-lg transition-colors bg-blue-50 text-brand-blue",
                }}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/get-quote"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-brand-green text-white text-sm font-semibold px-4 py-2 rounded-full text-center transition-colors hover:bg-emerald-600"
              data-ocid="nav.primary_button"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
