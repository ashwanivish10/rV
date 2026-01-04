import { useMemo, useState, useRef, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
  Shield,
  X,
} from "lucide-react";

interface Service {
  icon: any;
  title: string;
  serviceName: string;
  isInstant?: boolean;
  category?: string;
}

const services: Service[] = [
  { icon: FileText, title: "TEC EXAM PASS", serviceName: "TEC Exam", isInstant: true, category: "Education" },
  { icon: Car, title: "Learning License Test", serviceName: "Learning License", isInstant: true, category: "Vehicle" },
  { icon: Vote, title: "Voter Card Original PDF", serviceName: "Voter Card PDF", isInstant: true, category: "Voter" },
  { icon: Link, title: "Voter Mobile Link", serviceName: "Voter Mobile Link", isInstant: true, category: "Voter" },
  { icon: Vote, title: "Voter Card New Apply", serviceName: "Voter Card Apply", category: "Voter" },
  { icon: Search, title: "Lost Voter Find", serviceName: "Lost Voter Find", isInstant: true, category: "Voter" },
  { icon: FileSearch, title: "Lost DL Find", serviceName: "Lost DL Find", isInstant: true, category: "Vehicle" },
  { icon: Car, title: "DL Number to DL PDF", serviceName: "DL PDF", isInstant: true, category: "Vehicle" },
  { icon: Search, title: "Lost PAN Find", serviceName: "Lost PAN Find", isInstant: true, category: "PAN & Tax" },
  { icon: CreditCard, title: "PAN Number to Details", serviceName: "PAN Details", isInstant: true, category: "PAN & Tax" },
  { icon: Printer, title: "PAN Card Manual PDF", serviceName: "PAN Card Manual", isInstant: true, category: "PAN & Tax" },
  { icon: Fingerprint, title: "Aadhaar to PAN", serviceName: "Aadhaar to PAN", isInstant: true, category: "Identity" },
  { icon: Wallet, title: "Aadhaar to Ration PDF", serviceName: "Aadhaar to Ration", isInstant: true, category: "Ration" },
  { icon: FileText, title: "Ration Number to PDF", serviceName: "Ration PDF", isInstant: true, category: "Ration" },
  { icon: Car, title: "RC Number to RC PDF", serviceName: "RC PDF", isInstant: true, category: "Vehicle" },
  { icon: ShieldCheck, title: "PUC Certificate", serviceName: "PUC Certificate", isInstant: true, category: "Vehicle" },
  { icon: Bike, title: "2 Wheeler RC", serviceName: "2 Wheeler RC", isInstant: true, category: "Vehicle" },
  { icon: Truck, title: "3 Wheeler RC", serviceName: "3 Wheeler RC", isInstant: true, category: "Vehicle" },
  { icon: Car, title: "4 Wheeler RC", serviceName: "4 Wheeler RC", isInstant: true, category: "Vehicle" },
  { icon: BadgeCheck, title: "LMS Certificate", serviceName: "LMS Certificate", category: "Education" },
  { icon: ClipboardList, title: "LMS Registration", serviceName: "LMS Registration", category: "Education" },
  { icon: Fingerprint, title: "Aadhaar Card Print (Finger)", serviceName: "Aadhaar Print Finger", isInstant: true, category: "Identity" },
  { icon: CreditCard, title: "PAN to Aadhaar Number", serviceName: "PAN to Aadhaar", isInstant: true, category: "PAN & Tax" },
  { icon: Wallet, title: "Ration to Aadhaar Number", serviceName: "Ration to Aadhaar", isInstant: true, category: "Ration" },
  { icon: Download, title: "RC PDF Download", serviceName: "RC Download", isInstant: true, category: "Vehicle" },
  { icon: Download, title: "Driving License PDF", serviceName: "DL Download", isInstant: true, category: "Vehicle" },
  { icon: Download, title: "Ration Card PDF", serviceName: "Ration Download", isInstant: true, category: "Ration" },
  { icon: FileBarChart, title: "Aadhaar to E-Shram PDF", serviceName: "E-Shram PDF", isInstant: true, category: "Identity" },
  { icon: Search, title: "Vehicle Challan Find", serviceName: "Challan Find", isInstant: true, category: "Vehicle" },
  { icon: Printer, title: "Manual Aadhaar Print", serviceName: "Aadhaar Manual", isInstant: true, category: "Identity" },
  { icon: Printer, title: "Manual Voter Card Print", serviceName: "Voter Manual", isInstant: true, category: "Voter" },
  { icon: Printer, title: "Manual PAN Card Print", serviceName: "PAN Manual", isInstant: true, category: "PAN & Tax" },
  { icon: Baby, title: "Birth Certificate", serviceName: "Birth Certificate", category: "Certificates" },
  { icon: Database, title: "UID Enrollment Details", serviceName: "UID Details", isInstant: true, category: "Identity" },
  { icon: ShieldCheck, title: "Aadhaar OTP", serviceName: "Aadhaar OTP", isInstant: true, category: "Identity" },
  { icon: Building, title: "NPCI Bank Status", serviceName: "NPCI Bank Status", isInstant: true, category: "Banking" },
  { icon: FileText, title: "E-Shram Card", serviceName: "E-Shram Card", isInstant: true, category: "Identity" },
  { icon: Link, title: "PAN Aadhaar Link", serviceName: "PAN Aadhaar Link", isInstant: true, category: "PAN & Tax" },
  { icon: Shield, title: "GST Verification", serviceName: "GST Verification", isInstant: true, category: "PAN & Tax" },
  { icon: FileCheck, title: "Learning PDF", serviceName: "Learning PDF", isInstant: true, category: "Education" },
  { icon: Search, title: "Learning Find", serviceName: "Learning Find", isInstant: true, category: "Education" },
  { icon: Car, title: "Chassis to RC Card", serviceName: "Chassis to RC", isInstant: true, category: "Vehicle" },
  { icon: FileSearch, title: "DL to Mobile Find", serviceName: "DL to Mobile", isInstant: true, category: "Vehicle" },
  { icon: IdCard, title: "Family ID Card", serviceName: "Family ID", isInstant: true, category: "Identity" },
];

export default function ServicesSection() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  // suggestion and keyboard navigation state
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const categories = useMemo(() => {
    const setCat = new Set<string>();
    services.forEach((s) => setCat.add(s.category || "Other"));
    return ["All", ...Array.from(setCat)];
  }, []);

  const filteredServices = useMemo(() => {
    const q = query.trim().toLowerCase();
    return services.filter((s) => {
      const matchesCategory = category === "All" ? true : (s.category || "Other") === category;
      const matchesQuery = !q || s.title.toLowerCase().includes(q) || s.serviceName.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  // Top suggestions (not filtered by category) — used for dropdown while typing
  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const starts = services.filter(s => s.title.toLowerCase().startsWith(q) || s.serviceName.toLowerCase().startsWith(q));
    const includes = services.filter(s => !starts.includes(s) && (s.title.toLowerCase().includes(q) || s.serviceName.toLowerCase().includes(q)));
    return [...starts, ...includes].slice(0, 6);
  }, [query]);

  useEffect(() => {
    // auto open/close suggestions when query or results change
    if (query.trim() && suggestions.length > 0) {
      setSuggestionsOpen(true);
    } else {
      setSuggestionsOpen(false);
    }
    setActiveIndex(0);
  }, [query, suggestions.length]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!(e.target instanceof Node)) return;
      if (!containerRef.current.contains(e.target)) {
        setSuggestionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (s: Service) => {
    setQuery("");
    setSuggestionsOpen(false);
    const message = encodeURIComponent(`Hello, I want to avail the ${s.serviceName} service. Please provide more details.`);
    window.open(`https://wa.me/917007365477?text=${message}`, '_blank');
  };

  function escapeRegExp(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlightMatch(text: string, q: string) {
    const queryText = q.trim();
    if (!queryText) return text;
    const parts = text.split(new RegExp(`(${escapeRegExp(queryText)})`, 'ig'));
    return (
      <>
        {parts.map((part, i) => (
          (part.toLowerCase() === queryText.toLowerCase()) ? (
            <span key={i} className="bg-primary/20 rounded px-0.5">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        ))}
      </>
    );
  }

  return (
    <section id="services" className="py-20 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Digital Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access 40+ government document and verification services instantly through WhatsApp
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-lg mx-auto mb-6">
          <label htmlFor="service-search" className="sr-only">Search services</label>
          <div className="relative" ref={containerRef}>
            <div className="absolute left-3 inset-y-0 flex items-center pointer-events-none">
              <Search className="text-muted-foreground h-4 w-4" />
            </div>
            <Input
              id="service-search"
              type="search"
              value={query}
              onChange={(e) => { setQuery(e.target.value); }}
              onKeyDown={(e) => {
                if (!suggestionsOpen) return;
                if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
                } else if (e.key === 'ArrowUp') {
                  e.preventDefault();
                  setActiveIndex((i) => Math.max(i - 1, 0));
                } else if (e.key === 'Enter') {
                  if (suggestions[activeIndex]) {
                    e.preventDefault();
                    handleSelect(suggestions[activeIndex]);
                  }
                } else if (e.key === 'Escape') {
                  setSuggestionsOpen(false);
                }
              }}
              placeholder="Search services..."
              className="h-9 pl-10 pr-10 text-sm"
              aria-autocomplete="list"
              aria-controls="service-suggestions"
              aria-expanded={suggestionsOpen}
            />
            {query && (
              <button
                type="button"
                onClick={() => { setQuery(""); setSuggestionsOpen(false); }}
                aria-label="Clear search"
                className="absolute right-1 inset-y-0 flex items-center justify-center text-muted-foreground h-9 w-9"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            {/* Suggestions dropdown */}
            {suggestionsOpen && (
              <div id="service-suggestions" role="listbox" className="absolute left-0 right-0 mt-2 z-50 bg-popover border border-border rounded-md shadow-lg max-h-60 overflow-auto">
                {suggestions.length === 0 ? (
                  <div className="px-3 py-2 text-sm text-muted-foreground">No matches</div>
                ) : (
                  suggestions.map((s, idx) => (
                    <button
                      key={`${s.serviceName}-${idx}`}
                      role="option"
                      aria-selected={idx === activeIndex}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => handleSelect(s)}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-muted ${idx === activeIndex ? 'bg-muted' : ''}`}
                    >
                      <div className="font-medium">
                        {highlightMatch(s.title, query)}
                      </div>
                      <div className="text-xs text-muted-foreground">{s.serviceName}</div>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Category filter pills */}
          <div className="mt-3 flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1 rounded-full text-sm font-medium ${category === c ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
                aria-pressed={category === c}
              >
                {c}
              </button>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-2">{filteredServices.length} result{filteredServices.length !== 1 ? 's' : ''}</p>
        </div>

        {filteredServices.length === 0 ? (
          <div className="text-center text-muted-foreground">No services found for "{query}"</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                serviceName={service.serviceName}
                isInstant={service.isInstant}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
