import { Target, Users, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";

export default function About() {
  const coreValues = [
    {
      title: "Compromise-Free Quality",
      description: "We never cut corners. From thorough washing and sanding to utilizing premium Canadian primers and paints, we ensure our finishes look beautiful and stay durable.",
      icon: Sparkles,
    },
    {
      title: "Customer-First Reliability",
      description: "We show up on time, respect your property, and communicate honestly. We treat our clients' houses and office buildings as if they were our own.",
      icon: Users,
    },
    {
      title: "Complete Transparency",
      description: "Our estimates are detailed and written down, with clear breakdowns. No hidden fees or surprise additions to your final invoice.",
      icon: Target,
    },
  ];

  const workProcess = [
    {
      step: "01",
      title: "Consultation & Estimate",
      description: "We visit your site, inspect the surfaces, discuss color palettes and finish types, and deliver a detailed, written estimate outlining all costs.",
    },
    {
      step: "02",
      title: "Thorough Preparation",
      description: "We mask floors, cover furniture, fill nail holes, patch drywall cracks, sand surfaces, and apply specialized primers. Proper prep makes up 70% of a premium paint job.",
    },
    {
      step: "03",
      title: "Precision Painting",
      description: "Our certified painters apply professional coats using high-grade brush, roller, or spray techniques, ensuring clean cut-ins and complete, uniform coverage.",
    },
    {
      step: "04",
      title: "Rigorous Inspection",
      description: "We review the finish under detailed lighting. We touch up minor spots, remove all masking tapes, vacuum, and clean the workspace thoroughly.",
    },
    {
      step: "05",
      title: "Final Walkthrough",
      description: "We walk through the completed spaces with you to inspect the work together, ensuring you are 100% satisfied with the craftsmanship and neatness.",
    },
  ];

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Our Story & Crafts"
        subtitle="Dedicated to enhancing Canadian homes and businesses with premium finishes, clean crews, and trusted craftsmanship."
        pageName="About"
      />

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Column */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-4 rounded-3xl bg-section-bg transition-premium group-hover:scale-[1.01]" />
                <img
                  src="/images/Interior Painting 3.png"
                  alt="Urban Colours Painting Team Work"
                  className="relative rounded-2xl w-full h-[400px] object-cover shadow-soft border border-border-color transition-premium group-hover:shadow-md"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/outside home painting.png"
                  alt="Urban Colours Painted Exterior House"
                  className="rounded-xl h-[180px] w-full object-cover border border-border-color shadow-sm"
                  loading="lazy"
                />
                <img
                  src="/images/Exterior Painting Image 4.png"
                  alt="Urban Colours Painted Deck/Floor"
                  className="rounded-xl h-[180px] w-full object-cover border border-border-color shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="space-y-6">
              <span className="text-brand-teal font-semibold text-[15px] uppercase tracking-wider block">
                Company Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
                An Established Reputation Built on Trust
              </h2>
              <div className="space-y-4 text-body-text text-[17px] leading-relaxed">
                <p>
                  Urban Colours Painting Inc. was founded with a clear objective: to bring a premium, high-integrity service model to the Canadian residential and commercial contracting industry. We realized that finding a painter who is not only skilled but also clean, punctual, and fully insured could be a challenge.
                </p>
                <p>
                  We set out to change that. By recruiting vetted professionals, training them in advanced coating systems, and establishing strict site-cleanliness protocols, we created an experience that feels premium from the first phone call to the final invoice.
                </p>
                <p>
                  Today, we serve residential homeowners, property managers, developers, and local businesses. We continue to invest in eco-friendly, low-VOC paint technologies and thorough preparation tools to ensure our craftsmanship is both beautiful and safe for your family or clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-24 bg-section-bg border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-teal font-semibold text-[15px] uppercase tracking-wider block">
              Our Core Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
              Values That Drive Our Craftsmanship
            </h2>
            <p className="text-[17px] text-body-text">
              These principles guide our choices, our site actions, and our client relationships every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-border-color shadow-soft hover:shadow-premium transition-premium group"
              >
                <div className="inline-flex p-3.5 rounded-xl bg-section-bg text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-premium mb-6">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-body-text text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-brand-teal font-semibold text-[15px] uppercase tracking-wider block">
              Step-by-Step Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
              Our Professional Work Process
            </h2>
            <p className="text-[17px] text-body-text">
              We eliminate guesswork. Our structured process guarantees consistent, top-quality results for every job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Visual connecting line for desktop */}
            <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-border-color z-0" />

            {workProcess.map((process, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-[60px] h-[60px] rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-lg border-4 border-white shadow-soft transition-premium group-hover:bg-brand-teal mb-6">
                  {process.step}
                </div>
                <h3 className="font-bold text-[18px] text-brand-navy mb-2 group-hover:text-brand-teal transition-colors">
                  {process.title}
                </h3>
                <p className="text-xs md:text-sm text-body-text leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner />
    </div>
  );
}
