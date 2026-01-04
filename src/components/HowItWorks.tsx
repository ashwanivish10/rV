import React from "react";
import GlowingCards, { GlowingCard } from "@/components/ui/glowing-cards";

// Compact government links (no icons) to allow more items in a professional list

export default function HowItWorks() {
  const governmentLinks = [
    { title: "Aadhaar (UIDAI)", url: "https://uidai.gov.in/", description: "Aadhaar enrollment, updates and status" },
    { title: "DigiLocker", url: "https://digilocker.gov.in/", description: "Access and store digital documents" },
    { title: "Income Tax / PAN", url: "https://www.incometax.gov.in/", description: "PAN and e-filing services" },
    { title: "NSDL PAN Services", url: "https://www.tin-nsdl.com/", description: "PAN download and status" },
    { title: "Voter Services (NVSP)", url: "https://www.nvsp.in/", description: "Voter registration and search" },
    { title: "Parivahan (RC/DL)", url: "https://parivahan.gov.in/", description: "Vehicle and driving license services" },
    { title: "e-Shram", url: "https://eshram.gov.in/", description: "E-Shram registrations and services" },
    { title: "GST Services", url: "https://www.gst.gov.in/", description: "GST registration and taxpayer services" },
    { title: "NPCI / UPI Status", url: "https://www.npci.org.in/", description: "Payments & UPI related services" },
    { title: "Passport Seva", url: "https://portal2.passportindia.gov.in/", description: "Passport application & tracking" },
    { title: "UMANG", url: "https://www.umang.gov.in/", description: "Access many government services in one app" },
    { title: "EPFO", url: "https://www.epfindia.gov.in/", description: "Employee Provident Fund services" },
    { title: "E-Governance (MyGov)", url: "https://www.mygov.in/", description: "Government initiatives & citizen services" },
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Government Digital Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Links to official government portals for common digital document services
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <GlowingCards className="mt-2" gap="1rem" padding="1rem" enableGlow>
          {governmentLinks.map((g, idx) => (
            <GlowingCard key={idx} className="w-56">
              <a
                href={g.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${g.title}`}
                className="block p-2 rounded-md h-full w-full text-left"
              >
                <div className="text-sm font-medium text-foreground truncate">{g.title}</div>
                <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{g.description}</div>
              </a>
            </GlowingCard>
          ))}
        </GlowingCards>

      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 mt-12">
        <h3 className="text-4xl font-semibold text-foreground mb-4 text-center">Photos</h3>
        {/* Use CSS columns for a masonry-like bento layout and show full images */}
        <div className="columns-2 sm:columns-3 lg:columns-6 gap-3 space-y-3">
          {Array.from({ length: 45 }).map((_, i) => {
            const src = `/images/photo_${i + 1}_2026-01-02_19-53-31.jpg`;
            return (
              <div key={i} className="break-inside-avoid relative overflow-hidden rounded-lg border border-border bg-background">
                <img src={src} alt={`photo ${i + 1}`} loading="lazy" className="w-full h-auto object-contain transition-transform duration-200 hover:scale-105 block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
