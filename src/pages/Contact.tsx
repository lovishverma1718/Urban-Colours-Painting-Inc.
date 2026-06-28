import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle } from "lucide-react";
import PageHero from "../components/PageHero";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Residential Painting",
    "Commercial Painting",
    "Interior Painting",
    "Exterior Painting",
    "Popcorn Ceiling Removal",
    "Carpentry Services",
    "Floor Coatings",
    "Other / Multiple Services"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // The target WhatsApp phone number (Canada code +1, followed by 10 digits, no spaces/dashes)
    // You can change this to whichever mobile number should receive the quote notifications.
    const targetPhoneNumber = "12362732019"; 

    // Format the message with clean bold headings for WhatsApp
    const formattedMessage = 
      `*New Quote Request - Urban Colours Painting*\n\n` +
      `• *Name:* ${formData.name}\n` +
      `• *Email:* ${formData.email}\n` +
      `• *Phone:* ${formData.phone}\n` +
      `• *Service Required:* ${formData.service}\n` +
      `• *Project Address:* ${formData.address}\n\n` +
      `*Details / Description:*\n${formData.message || "No description provided."}`;

    // Generate the URL encoded WhatsApp link
    const whatsappUrl = `https://wa.me/${targetPhoneNumber}?text=${encodeURIComponent(formattedMessage)}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Show the confirmation thank-you screen and reset the form fields
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      address: "",
      message: "",
    });
  };

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Let's Talk About Your Next Project"
        subtitle="Request a free, no-obligation estimate. Our team will contact you promptly to schedule a visual inspection."
        pageName="Contact"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Column 1: Contact Information */}
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-brand-teal font-semibold text-[15px] uppercase tracking-wider block">
                  Get in Touch
                </span>
                <h2 className="text-3xl font-bold text-brand-navy">
                  Contact Details & Hours
                </h2>
                <p className="text-body-text text-[16px] leading-relaxed">
                  Have questions about our coating methods, preparation, or schedules? Reach out to our offices directly.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone Card */}
                <div className="p-6 rounded-2xl bg-section-bg border border-border-color shadow-soft">
                  <Phone className="text-brand-teal mb-4" size={24} />
                  <h3 className="font-bold text-brand-navy mb-2">Call Us</h3>
                  <div className="flex flex-col text-sm text-body-text space-y-1">
                    <a href="tel:236-273-2019" className="hover:text-brand-teal transition-colors">
                      236-273-2019
                    </a>
                    <a href="tel:613-970-8136" className="hover:text-brand-teal transition-colors">
                      613-970-8136
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="p-6 rounded-2xl bg-section-bg border border-border-color shadow-soft">
                  <Mail className="text-brand-teal mb-4" size={24} />
                  <h3 className="font-bold text-brand-navy mb-2">Email Us</h3>
                  <div className="flex flex-col text-sm text-body-text space-y-1">
                    <a href="mailto:admin@urbancolourspainting.com" className="hover:text-brand-teal transition-colors break-all">
                      admin@urbancolourspainting.com
                    </a>
                    <a href="mailto:quote@urbancolourspainting.com" className="hover:text-brand-teal transition-colors break-all">
                      quote@urbancolourspainting.com
                    </a>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="p-6 rounded-2xl bg-section-bg border border-border-color shadow-soft">
                  <Clock className="text-brand-teal mb-4" size={24} />
                  <h3 className="font-bold text-brand-navy mb-2">Business Hours</h3>
                  <ul className="text-sm text-body-text space-y-1">
                    <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
                    <li>Sat: 9:00 AM - 4:00 PM</li>
                    <li>Sun: Closed</li>
                  </ul>
                </div>

                {/* Coverage Card */}
                <div className="p-6 rounded-2xl bg-section-bg border border-border-color shadow-soft">
                  <MapPin className="text-brand-teal mb-4" size={24} />
                  <h3 className="font-bold text-brand-navy mb-2">Service Areas</h3>
                  <p className="text-sm text-body-text leading-relaxed">
                    Providing premium painting services across multiple Canadian communities.
                  </p>
                </div>
              </div>

              {/* Service Areas Details */}
              <div className="p-8 rounded-2xl border border-border-color shadow-soft space-y-4">
                <h3 className="font-bold text-brand-navy text-lg">
                  Canadian Service Area Coverage
                </h3>
                <p className="text-sm text-body-text leading-relaxed">
                  Urban Colours Painting Ltd. is licensed and registered to serve major residential centers, commercial business parks, retail facilities, and municipal zones. We travel directly to your location with our self-contained crews, tools, and materials.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Ontario", "British Columbia", "Alberta", "Quebec", "Nova Scotia", "Saskatchewan"].map((prov) => (
                    <span key={prov} className="px-3 py-1 bg-brand-teal/5 border border-brand-teal/10 rounded-md text-xs font-semibold text-brand-teal">
                      {prov}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Free Quote Estimation Form */}
            <div className="p-8 md:p-10 rounded-2xl border border-border-color shadow-premium bg-white relative">
              
              {isSubmitted ? (
                <div className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10 transition-premium">
                  <div className="w-16 h-16 rounded-full bg-success-green/10 text-success-green flex items-center justify-center mb-6">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">
                    Thank You!
                  </h3>
                  <p className="text-body-text text-[16px] max-w-sm leading-relaxed mb-6">
                    Your request for a free quote has been successfully sent. An Urban Colours representative will review your project details and contact you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-brand-navy hover:bg-brand-teal text-white font-semibold px-6 py-3 rounded-xl transition-premium shadow-soft cursor-pointer text-sm"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : null}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">
                    Request a Free Estimate
                  </h3>
                  <p className="text-sm text-body-text">
                    Fill out the form below to receive a call to arrange your visual inspection.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border-color focus:border-brand-teal transition-premium bg-section-bg text-dark-text text-sm"
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border-color focus:border-brand-teal transition-premium bg-section-bg text-dark-text text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="e.g. 613-555-0199"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border-color focus:border-brand-teal transition-premium bg-section-bg text-dark-text text-sm"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      Required Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border-color focus:border-brand-teal transition-premium bg-section-bg text-dark-text text-sm"
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((svc) => (
                        <option key={svc} value={svc}>{svc}</option>
                      ))}
                    </select>
                  </div>

                  {/* Project Address */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="address" className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      Project Location / Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      placeholder="e.g. 123 Painter St, Toronto, ON"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border-color focus:border-brand-teal transition-premium bg-section-bg text-dark-text text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      Project Description / Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Please tell us a bit about the project dimensions, current state, or preferred completion dates..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border-color focus:border-brand-teal transition-premium bg-section-bg text-dark-text text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-brand-navy hover:bg-brand-teal text-white font-semibold py-4 rounded-xl transition-premium shadow-soft hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar size={18} />
                    <span>Request a Free Quote</span>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
