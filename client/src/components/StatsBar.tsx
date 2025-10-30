import { CheckCircle, Zap, Shield, Clock } from "lucide-react";

export default function StatsBar() {
  const stats = [
    { icon: CheckCircle, label: "40+ Services", value: "40+" },
    { icon: Zap, label: "Instant Results", value: "Instant" },
    { icon: Shield, label: "Government Verified", value: "Verified" },
    { icon: Clock, label: "24/7 Available", value: "24/7" },
  ];

  return (
    <div className="bg-card border-y border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
