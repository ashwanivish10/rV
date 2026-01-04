import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/917007365477?text=Hello%2C%20I%20need%20help%20with%20digital%20services', '_blank');
  };

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="text-sm font-medium text-primary">40+ Digital Services Available</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          RV Digital Work & <br className="hidden sm:block" />
          <span className="text-primary">Cyber Work Solution</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Get instant access to government documents and verification services. 
          Aadhaar, PAN Card, Voter ID, Driving License, and more - all in one place.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            onClick={scrollToServices}
            className="w-full sm:w-auto"
            data-testid="button-browse-services"
          >
            Browse All Services
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={openWhatsApp}
            className="w-full sm:w-auto"
            data-testid="button-whatsapp-hero"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Contact on WhatsApp
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>Instant Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>Secure & Verified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>24/7 Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}
