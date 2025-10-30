import { MessageCircle, Mail, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              RV Digital Work & Cyber Work Solution
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted partner for instant government digital services and document verification.
            </p>
          </div>
          
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">Quick Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Aadhaar Card Services</li>
              <li>PAN Card Services</li>
              <li>Voter Card Services</li>
              <li>Driving License Services</li>
              <li>Ration Card Services</li>
              <li>Vehicle RC Services</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <SiWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span>+91 7007365477</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="mb-2">
            © {new Date().getFullYear()} RV Digital Work & Cyber Work Solution. All rights reserved.
          </p>
          <p className="text-xs">
            Disclaimer: We provide assistance for accessing government services. All documents are processed through official government portals.
          </p>
        </div>
      </div>
    </footer>
  );
}
