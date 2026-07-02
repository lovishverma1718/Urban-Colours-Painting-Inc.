import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Urban Colours Painting Inc. Logo"
                className="h-10 w-auto object-contain bg-white p-1 rounded"
              />
              <span className="font-bold text-lg text-white tracking-tight">
                Urban Colours <span className="text-brand-teal">Painting</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium residential and commercial painting services across Canada. Supporting our clients with craftsmanship, exceptional reliability, and beautiful, long-lasting finishes.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Globe size={16} className="text-brand-teal" />
              <span>urbancolourspainting.ca</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-brand-teal font-semibold text-[16px] uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Project Gallery", path: "/gallery" },
                { name: "Get in Touch", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Summary */}
          <div>
            <h3 className="text-brand-teal font-semibold text-[16px] uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Residential Painting",
                "Commercial Painting",
                "Interior Painting",
                "Exterior Painting",
                "Popcorn Ceiling Removal",
                "Carpentry Work",
                "Floor Coatings",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:underline"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-brand-teal font-semibold text-[16px] uppercase tracking-wider mb-5">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-brand-teal shrink-0 mt-0.5" />
                  <div className="flex flex-col text-sm text-gray-300">
                    <a href="tel:236-273-2019" className="hover:text-white transition-colors">
                      236-273-2019
                    </a>
                    <a href="tel:613-970-8136" className="hover:text-white transition-colors">
                      613-970-8136
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-brand-teal shrink-0 mt-0.5" />
                  <div className="flex flex-col text-sm text-gray-300">
                    <a href="mailto:admin@urbancolourspainting.com" className="hover:text-white transition-colors break-all">
                      admin@urbancolourspainting.com
                    </a>
                    <a href="mailto:quote@urbancolourspainting.com" className="hover:text-white transition-colors break-all">
                      quote@urbancolourspainting.com
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">
                    Serving residential & commercial properties across Canada
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            &copy; {currentYear} Urban Colours Painting Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Service Areas
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
