import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <StatsBar />
      <ServicesSection />
      <HowItWorks />
      <TrustSection />
      <WhatsAppCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
