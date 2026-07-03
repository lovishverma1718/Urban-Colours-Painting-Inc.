import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Sparkles, Clock, Star, CheckCircle, Paintbrush, Building, Home as HomeIcon, Check } from "lucide-react";
import CTABanner from "../components/CTABanner";

export default function Home() {
  const whyChooseUs = [
    {
      title: "Experienced Professionals",
      description: "Our painters are fully certified, vetted, and highly skilled in residential and commercial techniques.",
      icon: Shield,
    },
    {
      title: "Premium Materials",
      description: "We use top-tier, eco-friendly Canadian paints and finishes that stand the test of time and weather.",
      icon: Award,
    },
    {
      title: "Clean & Respectful Crews",
      description: "We protect your furniture, floors, and landscaping, maintaining a tidy workspace and thorough post-job cleanup.",
      icon: Sparkles,
    },
    {
      title: "On-Time Project Delivery",
      description: "We respect your schedule. We start on time, finish on schedule, and communicate clearly throughout the process.",
      icon: Clock,
    },
  ];

  const services = [
    {
      title: "Residential Painting",
      image: "/images/residential painting.jpeg",
      description: "Complete interior and exterior painting services tailored to protect and beautify your home.",
    },
    {
      title: "Commercial Painting",
      image: "/images/Office Printing 1.png", // Correct spelling in workspace is 'Office Printing 1.png'
      description: "Professional retail, office, and warehouse painting scheduled to minimize disruption to your business.",
    },
    {
      title: "Interior Painting",
      image: "/images/interior designs.jpeg",
      description: "Meticulous surface prep and crisp finishes that breathe new life into bedrooms, kitchens, and living areas.",
    },
    {
      title: "Exterior Painting",
      image: "/images/exterior painting.jpeg",
      description: "Durable, weather-resistant coatings for siding, brick, trim, and decks built to withstand Canadian winters.",
    },
    {
      title: "Popcorn Ceiling Removal",
      image: "/images/Popcorn Ceiling Removal.png",
      description: "Clean, professional texture removal and ceiling smoothing to give your rooms a clean, modern look.",
    },
    {
      title: "Carpentry Services",
      image: "/images/carpaenter image 1.png", // Correct spelling in workspace is 'carpaenter image 1.png'
      description: "Trim, baseboard, wainscoting, and molding installations that add architectural depth to any space.",
    },
    {
      title: "Floor Coatings",
      image: "/images/Exterior Painting Image 4.png",
      description: "Heavy-duty epoxy and protective coatings for garages, basements, utility rooms, and commercial floors.",
    },
  ];

  const featuredProjects = [
    {
      category: "Exterior Painting",
      title: "Modern Residential Refinement",
      image: "/images/Exterior Painting Image 1.png",
      description: "Complete exterior transformation of a contemporary estate with weatherproof, dark-trimmed accents.",
    },
    {
      category: "Interior Painting",
      title: "Open-Concept Brightening",
      image: "/images/interior designs.jpeg",
      description: "Repainting of a spacious living room and dining area, emphasizing natural light and smooth ceiling textures.",
    },
    {
      category: "Commercial Office",
      title: "Tech Firm Collaborative Workspace",
      image: "/images/Office Printing 1.png",
      description: "Clean, collaborative workplace finish utilizing low-VOC, commercial-grade coatings for high-traffic zones.",
    },
    {
      category: "Kitchen Cabinetry",
      title: "Custom Heritage Kitchen",
      image: "/images/Kitchen Painting 1.png",
      description: "Meticulous cabinet refinishing and trim restoration, matching contemporary styles with historical home roots.",
    },
    {
      category: "Staircase Restoration",
      title: "Hardwood & Spindle Refresh",
      image: "/images/Staircase Painting 1.png",
      description: "Detailed two-tone painting of a multi-tier staircase, incorporating high-durability enamel finishes.",
    },
  ];

  const reviews = [
    {
      name: "Manav Mann",
      location: "Toronto, ON",
      rating: 5,
      text: "I had a great experience with Urban Color Painting. The team was professional, punctual, and paid attention to every detail. Their work quality was excellent, and they made sure everything looked clean and finished perfectly. They were also respectful, easy to communicate with, and completed the job on time. Highly recommend Urban Colour Painting to anyone looking for reliable and high-quality painters.",
    },
    {
      name: "Darcy Shier",
      location: "Vancouver, BC",
      rating: 5,
      text: "The entire team were great listeners even as I pointed to new meticulous painting jobs. The apartment is looking very updated and fresh without any blemishes. Thanks to Urban Colours Painting INC. I will soon be completing stages 2 and 3 of the renovations. This organization was able put other industrial groups in touch to finish the needed renovations.",
    },
    {
      name: "Cheryl Salmon",
      location: "Ottawa, ON",
      rating: 5,
      text: "Highly recommend Urban Colours. They have just finished painting the exterior of our house. They were fast and efficient, friendly, communication was great, they left the place clean and the price was very fair! They came in cheaper than 3 other quotes. I wouldn't hesitate to use them again.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* SECTION 1: Premium Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-brand-navy text-white overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/residential painting.jpeg"
            alt="Urban Colours Painting Exterior Project"
            className="w-full h-full object-cover"
          />
          {/* Subtle dark navy overlay (10-15%) */}
          <div className="absolute inset-0 bg-brand-navy/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col justify-center">
          <div className="max-w-3xl space-y-6">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/20 border border-brand-teal/30 text-brand-teal text-sm font-semibold tracking-wider uppercase">
              <CheckCircle size={14} />
              Trusted Residential & Commercial Painters
            </span>

            {/* Headline */}
            <h1 className="text-hero text-white leading-tight">
              Professional Painting Services Across Canada
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
              Transform your home or commercial property with expert craftsmanship, premium finishes, and exceptional attention to detail.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-brand-teal hover:bg-brand-hover text-white text-center font-semibold px-8 py-4 rounded-xl transition-premium shadow-lg cursor-pointer"
              >
                Request a Free Quote
              </Link>
              <Link
                to="/gallery"
                className="bg-white/10 hover:bg-white/20 text-white text-center font-semibold px-8 py-4 rounded-xl transition-premium border border-white/20 cursor-pointer"
              >
                View Our Projects
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/15 max-w-3xl">
              {[
                { title: "Residential", icon: HomeIcon },
                { title: "Commercial", icon: Building },
                { title: "Fully Insured", icon: Shield },
                { title: "Quality Workmanship", icon: Paintbrush },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 text-gray-300">
                  <item.icon size={18} className="text-brand-teal shrink-0" />
                  <span className="text-[15px] font-medium leading-none">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Company Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-brand-teal font-semibold text-[15px] uppercase tracking-wider block">
                Who We Are
              </span>
              <h2 className="text-section-title text-brand-navy">
                Painting Spaces with Precision and Pride
              </h2>
              <div className="space-y-4 text-body-text text-[17px] leading-relaxed">
                <p>
                  At Urban Colours Painting Inc., we believe a coat of paint does more than change a color—it elevates your environment, protects your investment, and creates spaces where memories are made and businesses thrive.
                </p>
                <p>
                  For years, our Canadian painting crews have built a reputation of exceptional workmanship, reliability, and clean practices. Whether refreshing a cozy family home or coating a major commercial center, we approach every project with structured preparation, high-quality materials, and absolute precision.
                </p>
                <p>
                  We handle the details so you don't have to. From the initial inspection and color consultations to protective covering and final walkthroughs, our focus remains on providing a seamless, stress-free customer experience.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-teal transition-colors group cursor-pointer"
                >
                  <span>Learn More About Our Team</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-section-bg transition-premium group-hover:scale-[1.01]" />
              <img
                src="/images/hero section image change.png"
                alt="Urban Colours Painted Exterior Home"
                className="relative rounded-2xl w-full h-[450px] object-cover shadow-soft border border-border-color transition-premium group-hover:shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Choose Urban Colours */}
      <section className="py-20 md:py-24 bg-section-bg border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-teal font-semibold text-[15px] uppercase tracking-wider block">
              The Urban Colours Difference
            </span>
            <h2 className="text-section-title text-brand-navy">
              Why Home & Business Owners Trust Us
            </h2>
            <p className="text-[17px] text-body-text max-w-2xl mx-auto">
              We stand apart through our commitment to meticulous preparation, professional conduct, and long-lasting premium results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-border-color shadow-soft hover:shadow-premium transition-premium group hover:-translate-y-1"
              >
                <div className="inline-flex p-3.5 rounded-xl bg-section-bg text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-premium mb-6">
                  <card.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  {card.title}
                </h3>
                <p className="text-body-text text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Services Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
              <span className="text-brand-teal font-semibold text-[15px] uppercase tracking-wider block">
                Our Areas of Expertise
              </span>
              <h2 className="text-section-title text-brand-navy">
                Complete Painting & Refinishing Solutions
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-teal transition-colors group cursor-pointer whitespace-nowrap"
            >
              <span>View All Services</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-border-color shadow-soft overflow-hidden hover:shadow-premium transition-premium group flex flex-col h-full hover:-translate-y-1"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-premium duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-premium" />
                </div>
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-teal transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-body-text text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-border-color mt-6">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-teal transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Featured Projects */}
      <section className="py-20 md:py-24 bg-section-bg border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-teal font-semibold text-[15px] uppercase tracking-wider block">
              Portfolio
            </span>
            <h2 className="text-section-title text-brand-navy">
              Featured Work Showcase
            </h2>
            <p className="text-[17px] text-body-text max-w-2xl mx-auto">
              A collection of residential, commercial, interior, and exterior painting projects delivered with precision.
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Project Image */}
                  <div className="w-full lg:w-1/2 group">
                    <div className="overflow-hidden rounded-2xl border border-border-color shadow-soft relative h-[320px] md:h-[400px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-premium duration-500 group-hover:scale-103"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-premium" />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="w-full lg:w-1/2 space-y-4">
                    <span className="inline-block px-3 py-1 rounded-md bg-brand-teal/10 text-brand-teal text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-navy leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-body-text text-[16px] leading-relaxed">
                      {project.description}
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row gap-x-6 gap-y-2 text-sm text-body-text">
                      <span className="flex items-center gap-1">
                        <Check size={16} className="text-brand-teal shrink-0" />
                        Complete preparation
                      </span>
                      <span className="flex items-center gap-1">
                        <Check size={16} className="text-brand-teal shrink-0" />
                        Premium coatings
                      </span>
                      <span className="flex items-center gap-1">
                        <Check size={16} className="text-brand-teal shrink-0" />
                        Clean work site
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-14">
            <Link
              to="/gallery"
              className="bg-brand-navy hover:bg-brand-teal text-white font-semibold px-8 py-4 rounded-xl transition-premium shadow-soft hover:shadow-md cursor-pointer"
            >
              View Full Project Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: Customer Reviews */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-teal font-semibold text-[15px] uppercase tracking-wider block">
              Client Testimonials
            </span>
            <h2 className="text-section-title text-brand-navy">
              What Our Customers Say
            </h2>
            <p className="text-[17px] text-body-text max-w-2xl mx-auto">
              Real reviews from real home and business owners across Canada who experienced the Urban Colours standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-border-color shadow-soft hover:shadow-premium transition-premium flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-dark-text italic text-sm md:text-base leading-relaxed">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-6 border-t border-border-color mt-6 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-brand-navy text-[16px]">
                      {review.name}
                    </h4>
                    <p className="text-xs text-body-text">
                      {review.location}
                    </p>
                  </div>
                  <span className="text-xs text-brand-teal font-semibold px-2.5 py-1 rounded bg-brand-teal/5 border border-brand-teal/10">
                    Verified Job
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Professional CTA Banner */}
      <CTABanner />
    </div>
  );
}
