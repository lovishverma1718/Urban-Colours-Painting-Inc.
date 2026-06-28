import Breadcrumb from "./Breadcrumb";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  pageName: string;
}

export default function PageHero({ title, subtitle, pageName }: PageHeroProps) {
  return (
    <div>
      <section className="bg-brand-navy text-white relative py-16 md:py-24 overflow-hidden border-b border-brand-navy">
        {/* Subtle decorative grid/overlay pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Subtle gradient gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-navy/80" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              {subtitle}
            </p>
          )}
        </div>
      </section>
      
      {/* Attached Breadcrumb */}
      <Breadcrumb pageName={pageName} />
    </div>
  );
}
