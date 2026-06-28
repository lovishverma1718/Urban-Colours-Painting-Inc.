import { useState, useMemo } from "react";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";

type CategoryType = "All" | "Interior" | "Exterior" | "Commercial" | "Carpentry" | "Ceiling Removal";

interface GalleryItem {
  image: string;
  title: string;
  category: Exclude<CategoryType, "All">;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");

  const categories: CategoryType[] = [
    "All",
    "Interior",
    "Exterior",
    "Commercial",
    "Carpentry",
    "Ceiling Removal"
  ];

  const galleryItems: GalleryItem[] = useMemo(() => [
    // Interior
    { image: "/images/Interior Painting 1.png", title: "Living Room Accent Wall", category: "Interior" },
    { image: "/images/Interior Painting 2.png", title: "Dining Room Refinishing", category: "Interior" },
    { image: "/images/Interior Painting 3.png", title: "Hallway Detailing", category: "Interior" },
    { image: "/images/Bedroom Painting 1.png", title: "Master Bedroom Warm Tones", category: "Interior" },
    { image: "/images/Bedroom Painting 2.png", title: "Modern Bedroom Finish", category: "Interior" },
    { image: "/images/Kitchen Painting 1.png", title: "Custom Cabinet Spraying", category: "Interior" },
    { image: "/images/Kitchen Painting 2.png", title: "Kitchen Wall & Trim Refresh", category: "Interior" },
    { image: "/images/Washroom Painting Image 1.png", title: "Guest Washroom Protection", category: "Interior" },
    { image: "/images/Washroom Painting Image 2.png", title: "Master Bath High-Gloss", category: "Interior" },
    { image: "/images/Staircase Painting 1.png", title: "Hardwood Staircase Two-Tone", category: "Interior" },
    { image: "/images/Staircase Painting 2.png", title: "Stairwell Vaulted Ceiling", category: "Interior" },
    
    // Exterior
    { image: "/images/Exterior Painting Image 1.png", title: "Estate Siding & Trim", category: "Exterior" },
    { image: "/images/Exterior Painting Image 2.png", title: "Contemporary Facade Weather-Coat", category: "Exterior" },
    { image: "/images/Exterior Painting Image three.png", title: "Brick Stain & Front Entry", category: "Exterior" }, // Spelled 'three.png' in workspace
    { image: "/images/Exterior Painting Image 4.png", title: "Premium Backyard Deck Coat", category: "Exterior" },

    // Commercial
    { image: "/images/Office Printing 1.png", title: "Corporate Boardroom Spraying", category: "Commercial" }, // Spelled 'Office Printing 1.png' in workspace
    { image: "/images/Office Pending 2.png", title: "High-Traffic Hallway Coating", category: "Commercial" }, // Spelled 'Office Pending 2.png' in workspace
    { image: "/images/Office Painting 3.png", title: "Commercial Office Suite Open Concept", category: "Commercial" },

    // Carpentry
    { image: "/images/carpaenter image 1.png", title: "Wainscoting Board Installation", category: "Carpentry" }, // Spelled 'carpaenter image 1.png' in workspace
    { image: "/images/Carpenter Image 2.png", title: "Crown Molding Alignment", category: "Carpentry" },
    { image: "/images/Carpenter Image 3.png", title: "Custom Wall Trim Framing", category: "Carpentry" },

    // Ceiling Removal
    { image: "/images/Popcorn Ceiling Removal.png", title: "Popcorn Scrape & Smooth Ceiling", category: "Ceiling Removal" },
    { image: "/images/Popcorn Ceiling Removal 2.png", title: "Skim Coating Prep Stage", category: "Ceiling Removal" },
    { image: "/images/Popcorn Ceiling Removal Three.png", title: "Final Smooth Ceiling Finish", category: "Ceiling Removal" }, // Spelled 'Three.png' in workspace
  ], []);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, galleryItems]);

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Our Project Gallery"
        subtitle="Explore our completed residential and commercial projects. Filter by category to view our quality workmanship."
        pageName="Gallery"
      />

      {/* Filter and Grid Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-premium cursor-pointer ${
                  activeCategory === category
                    ? "bg-brand-teal text-white border-brand-teal shadow-soft"
                    : "bg-white text-body-text border-border-color hover:bg-section-bg hover:text-brand-navy"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Spacious Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-border-color shadow-soft overflow-hidden hover:shadow-premium transition-premium flex flex-col"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-premium duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/10 transition-premium" />
                </div>
                
                <div className="p-6 bg-white flex flex-col gap-1 border-t border-border-color">
                  <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-[17px] font-bold text-brand-navy group-hover:text-brand-teal transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-body-text">
              No images available in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner />
    </div>
  );
}
