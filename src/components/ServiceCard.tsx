import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon?: LucideIcon;
  title: string;
  isInstant?: boolean;
  serviceName: string;
}

export default function ServiceCard({ icon: Icon, title, isInstant = true, serviceName }: ServiceCardProps) {
  const handleClick = () => {
    const message = encodeURIComponent(`Hello, I want to avail the ${serviceName} service. Please provide more details.`);
    window.open(`https://wa.me/917007365477?text=${message}`, '_blank');
  };

  return (
    <Card 
      className="p-6 cursor-pointer hover-elevate active-elevate-2 transition-all duration-200 flex flex-col items-center text-center gap-3 min-h-[160px] justify-center border-card-border"
      onClick={handleClick}
      data-testid={`card-service-${serviceName.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
        {Icon ? <Icon className="w-7 h-7 text-primary" /> : <div className="w-4 h-4 rounded bg-primary/60" />}
      </div>
      
      <h3 className="text-sm font-medium text-foreground leading-tight line-clamp-2">
        {title}
      </h3>
      
      {isInstant && (
        <Badge variant="secondary" className="text-xs">
          Instant
        </Badge>
      )}
    </Card>
  );
}
