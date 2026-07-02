import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";

export default function Services() {
  const serviceList = [
    {
      title: "Residential Painting",
      image: "/images/residential painting.jpeg",
      description: "Full-service interior and exterior residential painting crafted to transform houses into beautiful homes. We handle houses of all sizes, from heritage restorations to modern architectural layouts.",
      benefits: [
        "Premium low-VOC/zero-VOC paint formulations",
        "Expert color matching and design consultations",
        "Complete protection of furniture, trims, and flooring",
        "Uniform, high-durability finish coats"
      ],
      link: "/contact"
    },
    {
      title: "Commercial Painting",
      image: "/images/Office Pending 2.png", // Correct spelling in workspace is 'Office Pending 2.png'
      description: "Fast, organized commercial painting services designed to meet corporate standards and fit tight project schedules. We coordinate around your operating hours to minimize business downtime.",
      benefits: [
        "Scheduled evening, weekend, and holiday crews",
        "Highly durable, abrasion-resistant paints",
        "Fully bonded, licensed, and WSIB/insured painters",
        "Detail-oriented project management and clear timelines"
      ],
      link: "/contact"
    },
    {
      title: "Interior Painting",
      image: "/images/Interior Painting 2.png",
      description: "Meticulous preparation and custom finishing for walls, ceilings, trims, cabinets, and doors. We repair surface imperfections to achieve smooth, premium walls that breathe life into rooms.",
      benefits: [
        "Drywall patching, taping, and sanding included",
        "Crisp borders and straight lines at all junctions",
        "Specialized finishes (matte, eggshell, satin, semi-gloss)",
        "Daily tidying and meticulous dust protection"
      ],
      link: "/contact"
    },
    {
      title: "Exterior Painting",
      image: "/images/exterior painting.jpeg", // Correct spelling in workspace is 'Exterior Painting Image three.png'
      description: "Durable protective coatings for wood, brick, stucco, vinyl siding, trims, decks, and fences. We utilize weather-tested primers and paints designed to withstand harsh Canadian temperature swings.",
      benefits: [
        "Thorough power washing and scraping prep",
        "Fungicide-treated, moisture-resistant primers",
        "Premium elastomeric and acrylic coatings",
        "Protects siding and woodwork from moisture and UV rot"
      ],
      link: "/contact"
    },
    {
      title: "Popcorn Ceiling Removal",
      image: "/images/Popcorn Ceiling Removal.png",
      description: "Transform outdated heavy textures into smooth, clean modern ceilings. Our dust-isolated extraction process keeps your living spaces clean and safe throughout the removal and refinishing stages.",
      benefits: [
        "Complete dust-containment and floor masking",
        "Professional scrape, skim coat, and fine sand",
        "Aesthetic modern priming and flat painting",
        "Increases home brightness and overall resale value"
      ],
      link: "/contact"
    },
    {
      title: "Carpentry Services",
      image: "/images/carpaenter image 1.png", // Correct spelling in workspace is 'carpaenter image 1.png'
      description: "Professional trim and woodwork installations that complete the premium feel of any painting project. We install baseboards, crowns, wainscoting, and door frame casings.",
      benefits: [
        "Precision miter joints and secure fastening",
        "Installation of baseboards, crowns, and accent walls",
        "Seamless caulking and hole-filling pre-paint",
        "Repairs to damaged wood trims and exterior boards"
      ],
      link: "/contact"
    },
    {
      title: "Floor Coatings",
      image: "/images/Exterior Painting Image 4.png",
      description: "High-performance protective floor coatings suitable for residential garages, basements, and commercial facility floors. Resistant to tire marks, oils, and physical impacts.",
      benefits: [
        "Professional concrete grinding and surface profiling",
        "Crack filling and expansion joint treatment",
        "Industrial-grade epoxy and polyaspartic coatings",
        "Textured slip-resistant finishes available"
      ],
      link: "/contact"
    }
  ];

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Professional Painting Services"
        subtitle="Discover our range of premium residential, commercial, and specialty finishing services across Canada."
        pageName="Services"
      />

      {/* Services Grid Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {serviceList.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16 border-b border-border-color pb-16 last:border-0 last:pb-0 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Service Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="h-[300px] md:h-[420px] overflow-hidden rounded-2xl border border-border-color shadow-soft relative group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-premium duration-500 group-hover:scale-103"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-premium" />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-brand-navy mb-3">
                        {service.title}
                      </h2>
                      <p className="text-body-text text-[16px] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-brand-teal">
                        Key Benefits
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-sm text-body-text">
                            <Check size={16} className="text-brand-teal shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Link
                        to={service.link}
                        className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-teal text-white font-semibold px-6 py-3 rounded-xl transition-premium shadow-soft hover:shadow-md cursor-pointer text-sm"
                      >
                        <span>Book Service / Request Quote</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner />
    </div>
  );
}
