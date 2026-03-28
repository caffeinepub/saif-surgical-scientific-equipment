import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-blue flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  role="img"
                  aria-label="Medical cross"
                >
                  <title>Medical cross</title>
                  <path
                    d="M10 2v16M2 10h16"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-lg leading-tight block">
                  Saif Surgical
                </span>
                <span className="text-xs text-blue-200 leading-tight block">
                  &amp; Scientific Equipment
                </span>
              </div>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed mb-4">
              Your trusted partner for surgical instruments, laboratory
              equipment and scientific tools in Anand, Gujarat.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:9898056315"
                className="flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" /> 9898056315
              </a>
              <a
                href="https://wa.me/919898056315"
                className="flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4 text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {(
                [
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/products", label: "Products" },
                  { to: "/contact", label: "Contact" },
                  { to: "/get-quote", label: "Get Quote" },
                ] as {
                  to: "/" | "/about" | "/products" | "/contact" | "/get-quote";
                  label: string;
                }[]
              ).map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4 text-white">
              Our Address
            </h3>
            <div className="flex items-start gap-2 text-sm text-blue-200 mb-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span className="leading-relaxed">
                Bhalej Rd, near Shah Petroleum,
                <br />
                Ganesh Chokdi, Sardar Ganj,
                <br />
                Anand, Gujarat 388001
              </span>
            </div>
            <p className="text-sm text-blue-200">
              Serving Anand, Gujarat &amp; Nearby Areas
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-300">
          <span>
            © {year} Saif Surgical &amp; Scientific Equipment. All rights
            reserved.
          </span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
