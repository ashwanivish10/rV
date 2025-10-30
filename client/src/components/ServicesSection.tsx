import ServiceCard from "./ServiceCard";
import { 
  FileText, 
  CreditCard, 
  UserCheck, 
  Car, 
  FileCheck, 
  Fingerprint, 
  Search, 
  Download, 
  Wallet, 
  Vote, 
  IdCard, 
  Link, 
  ShieldCheck, 
  FileSearch, 
  Printer, 
  Baby, 
  Building, 
  Bike, 
  Truck, 
  BadgeCheck,
  ClipboardList,
  Database,
  FileBarChart,
  Shield
} from "lucide-react";

interface Service {
  icon: any;
  title: string;
  serviceName: string;
  isInstant?: boolean;
}

const services: Service[] = [
  { icon: FileText, title: "TEC EXAM PASS", serviceName: "TEC Exam", isInstant: true },
  { icon: Car, title: "Learning License Test", serviceName: "Learning License", isInstant: true },
  { icon: Vote, title: "Voter Card Original PDF", serviceName: "Voter Card PDF", isInstant: true },
  { icon: Link, title: "Voter Mobile Link", serviceName: "Voter Mobile Link", isInstant: true },
  { icon: Vote, title: "Voter Card New Apply", serviceName: "Voter Card Apply" },
  { icon: Search, title: "Lost Voter Find", serviceName: "Lost Voter Find", isInstant: true },
  { icon: FileSearch, title: "Lost DL Find", serviceName: "Lost DL Find", isInstant: true },
  { icon: Car, title: "DL Number to DL PDF", serviceName: "DL PDF", isInstant: true },
  { icon: Search, title: "Lost PAN Find", serviceName: "Lost PAN Find", isInstant: true },
  { icon: CreditCard, title: "PAN Number to Details", serviceName: "PAN Details", isInstant: true },
  { icon: Printer, title: "PAN Card Manual PDF", serviceName: "PAN Card Manual", isInstant: true },
  { icon: Fingerprint, title: "Aadhaar to PAN", serviceName: "Aadhaar to PAN", isInstant: true },
  { icon: Wallet, title: "Aadhaar to Ration PDF", serviceName: "Aadhaar to Ration", isInstant: true },
  { icon: FileText, title: "Ration Number to PDF", serviceName: "Ration PDF", isInstant: true },
  { icon: Car, title: "RC Number to RC PDF", serviceName: "RC PDF", isInstant: true },
  { icon: ShieldCheck, title: "PUC Certificate", serviceName: "PUC Certificate", isInstant: true },
  { icon: Bike, title: "2 Wheeler RC", serviceName: "2 Wheeler RC", isInstant: true },
  { icon: Truck, title: "3 Wheeler RC", serviceName: "3 Wheeler RC", isInstant: true },
  { icon: Car, title: "4 Wheeler RC", serviceName: "4 Wheeler RC", isInstant: true },
  { icon: BadgeCheck, title: "LMS Certificate", serviceName: "LMS Certificate" },
  { icon: ClipboardList, title: "LMS Registration", serviceName: "LMS Registration" },
  { icon: Fingerprint, title: "Aadhaar Card Print (Finger)", serviceName: "Aadhaar Print Finger", isInstant: true },
  { icon: CreditCard, title: "PAN to Aadhaar Number", serviceName: "PAN to Aadhaar", isInstant: true },
  { icon: Wallet, title: "Ration to Aadhaar Number", serviceName: "Ration to Aadhaar", isInstant: true },
  { icon: Download, title: "RC PDF Download", serviceName: "RC Download", isInstant: true },
  { icon: Download, title: "Driving License PDF", serviceName: "DL Download", isInstant: true },
  { icon: Download, title: "Ration Card PDF", serviceName: "Ration Download", isInstant: true },
  { icon: FileBarChart, title: "Aadhaar to E-Shram PDF", serviceName: "E-Shram PDF", isInstant: true },
  { icon: Search, title: "Vehicle Challan Find", serviceName: "Challan Find", isInstant: true },
  { icon: Printer, title: "Manual Aadhaar Print", serviceName: "Aadhaar Manual", isInstant: true },
  { icon: Printer, title: "Manual Voter Card Print", serviceName: "Voter Manual", isInstant: true },
  { icon: Printer, title: "Manual PAN Card Print", serviceName: "PAN Manual", isInstant: true },
  { icon: Baby, title: "Birth Certificate", serviceName: "Birth Certificate" },
  { icon: Database, title: "UID Enrollment Details", serviceName: "UID Details", isInstant: true },
  { icon: ShieldCheck, title: "Aadhaar OTP", serviceName: "Aadhaar OTP", isInstant: true },
  { icon: Building, title: "NPCI Bank Status", serviceName: "NPCI Bank Status", isInstant: true },
  { icon: FileText, title: "E-Shram Card", serviceName: "E-Shram Card", isInstant: true },
  { icon: Link, title: "PAN Aadhaar Link", serviceName: "PAN Aadhaar Link", isInstant: true },
  { icon: Shield, title: "GST Verification", serviceName: "GST Verification", isInstant: true },
  { icon: FileCheck, title: "Learning PDF", serviceName: "Learning PDF", isInstant: true },
  { icon: Search, title: "Learning Find", serviceName: "Learning Find", isInstant: true },
  { icon: Car, title: "Chassis to RC Card", serviceName: "Chassis to RC", isInstant: true },
  { icon: FileSearch, title: "DL to Mobile Find", serviceName: "DL to Mobile", isInstant: true },
  { icon: IdCard, title: "Family ID Card", serviceName: "Family ID", isInstant: true },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Digital Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access 40+ government document and verification services instantly through WhatsApp
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              serviceName={service.serviceName}
              isInstant={service.isInstant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
