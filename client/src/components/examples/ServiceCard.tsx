import ServiceCard from '../ServiceCard';
import { FileText } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="max-w-xs">
        <ServiceCard
          icon={FileText}
          title="PAN Card PDF Download"
          isInstant={true}
          serviceName="PAN Card PDF"
        />
      </div>
    </div>
  );
}
