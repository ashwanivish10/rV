import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/917007365477?text=Hello%2C%20I%20need%20help%20with%20digital%20services', '_blank');
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
      <Button
        size="icon"
        onClick={openWhatsApp}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5C] shadow-lg hover:shadow-xl transition-all duration-200"
        data-testid="button-floating-whatsapp"
      >
        <SiWhatsapp className="w-7 h-7 text-white" />
      </Button>
    </div>
  );
}
