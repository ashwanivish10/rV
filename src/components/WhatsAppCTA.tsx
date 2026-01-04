import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppCTA() {
  const openWhatsApp = () => {
    window.open('https://wa.me/917007365477?text=Hello%2C%20I%20need%20help%20with%20digital%20services', '_blank');
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#25D366] mb-6">
          <SiWhatsapp className="w-12 h-12 text-white" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Connect on WhatsApp
        </h2>
        
        <p className="text-lg text-muted-foreground mb-4">
          Get instant support for all your document needs
        </p>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-card-border mb-8">
          <MessageCircle className="w-5 h-5 text-primary" />
          <span className="text-xl font-semibold text-foreground">+91 7007365477</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={openWhatsApp}
            className="bg-[#25D366] hover:bg-[#20BD5C] text-white"
            data-testid="button-whatsapp-cta"
          >
            <SiWhatsapp className="w-5 h-5 mr-2" />
            Chat on WhatsApp
          </Button>
        </div>
        
        <p className="mt-6 text-sm text-muted-foreground">
          Available 24/7 for all your document needs
        </p>
      </div>
    </section>
  );
}
