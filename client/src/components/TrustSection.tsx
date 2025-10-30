import { Card } from "@/components/ui/card";
import { Zap, Shield, Headphones } from "lucide-react";

export default function TrustSection() {
  const features = [
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Get your documents and verification results in minutes, not days"
    },
    {
      icon: Shield,
      title: "Secure & Verified",
      description: "All services are government-verified and completely secure"
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "24/7 customer support available via WhatsApp for all queries"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose RV Digital Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for all government digital services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center border-card-border hover-elevate">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
