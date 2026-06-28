import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection to toggle header shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-premium bg-white ${
          isScrolled
            ? "shadow-soft border-b border-border-color py-3"
            : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Urban Colours Painting Ltd. Logo"
                className="h-10 w-auto object-contain transition-premium group-hover:scale-105"
              />
              <span className="font-bold text-lg text-brand-navy tracking-tight hidden sm:inline-block">
                Urban Colours <span className="text-brand-teal">Painting</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[16px] font-medium transition-colors hover:text-brand-teal relative py-1 ${
                    location.pathname === link.path
                      ? "text-brand-teal font-semibold"
                      : "text-body-text"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-teal rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:236-273-2019"
                className="flex items-center gap-2 text-brand-navy font-semibold text-sm hover:text-brand-teal transition-colors"
              >
                <Phone size={16} />
                <span>236-273-2019</span>
              </a>
              <Link
                to="/contact"
                className="bg-brand-navy hover:bg-brand-teal text-white text-[16px] font-semibold px-5 py-2.5 rounded-xl transition-premium shadow-soft hover:shadow-md cursor-pointer"
              >
                Request Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-brand-navy hover:text-brand-teal p-1 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Navigation */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-premium transform transition-transform duration-300 ease-out md:hidden flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="font-bold text-lg text-brand-navy">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-brand-navy hover:text-brand-teal p-1 cursor-pointer"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium py-1 transition-colors hover:text-brand-teal ${
                  location.pathname === link.path
                    ? "text-brand-teal font-semibold border-l-2 border-brand-teal pl-3"
                    : "text-body-text pl-3"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-6 border-t border-border-color bg-section-bg flex flex-col gap-4">
          <a
            href="tel:236-273-2019"
            className="flex items-center justify-center gap-2 text-brand-navy font-semibold py-3 border border-border-color rounded-xl hover:bg-white transition-colors"
          >
            <Phone size={16} />
            <span>236-273-2019</span>
          </a>
          <Link
            to="/contact"
            className="bg-brand-navy hover:bg-brand-teal text-white text-center font-semibold py-3 rounded-xl transition-colors shadow-soft"
          >
            Request Free Quote
          </Link>
        </div>
      </div>

      {/* Sidebar Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs md:hidden"
        />
      )}

      {/* Spacer to prevent content overlap since header is fixed */}
      <div className="h-[80px]" />
    </>
  );
}
