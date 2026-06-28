import { Link } from "react-router-dom";
import { Phone, Calendar } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-brand-navy text-white py-16 md:py-20 relative overflow-hidden">
      {/* Background visual lines */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#2A8F8A_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Ready to Refresh Your Property?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Get a free estimate and discover how Urban Colours Painting Ltd. delivers premium results with exceptional customer service and meticulous attention to detail.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-brand-teal hover:bg-brand-hover text-white font-semibold px-8 py-4 rounded-xl transition-premium shadow-lg flex items-center justify-center gap-2"
          >
            <Calendar size={18} />
            <span>Request a Free Quote</span>
          </Link>
          
          <a
            href="tel:236-273-2019"
            className="w-full sm:w-auto bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-xl transition-premium flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            <span>Call 236-273-2019</span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-gray-400">
          <span>✓ Free Visual Inspection</span>
          <span>✓ Fully Insured & Bonded</span>
          <span>✓ Satisfaction Guaranteed</span>
        </div>
      </div>
    </section>
  );
}
