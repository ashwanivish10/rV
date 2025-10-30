import { Card } from "@/components/ui/card";
import { Search, MessageCircle, Download } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Choose Service",
      description: "Browse through 40+ digital services and select the one you need"
    },
    {
      number: "2",
      icon: MessageCircle,
      title: "Contact via WhatsApp",
      description: "Click on any service to connect with us instantly on WhatsApp"
    },
    {
      number: "3",
      icon: Download,
      title: "Get Instant Results",
      description: "Receive your documents and verification results quickly"
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your documents in three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center border-card-border relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6">
                {step.number}
              </div>
              
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-border" />
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
