import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import TopStickyBar from "@/components/TopStickyBar";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // TopStickyBar should be visible at all times; no business hour checks are required.
  // (If you want to force hide/show for testing, we can add a query param override later.)
  const forceShow = true;

  // Define sticky bar messages directly in code (rotates every 6 seconds)
  const stickyMessages = [
    "Fast service available now — 9:00 AM to 6:00 PM. Contact us on WhatsApp for instant help!",
    "Get documents and verifications quickly — Start via WhatsApp",
    "Instant support available — Reply to our WhatsApp message",
  ];

  const [msgIndex, setMsgIndex] = useState(0);
  useEffect(() => {
    if (!stickyMessages.length) return;
    const id = setInterval(() => setMsgIndex(i => (i + 1) % stickyMessages.length), 4000);
    return () => clearInterval(id);
  }, [stickyMessages.length]);

  const stickyMessage = stickyMessages[msgIndex];

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />

        {/* Top sticky bar visible always */}
        

        <TopStickyBar
          className="bg-primary text-primary-foreground"
          show={true}
          forceShow={forceShow}
          controls={
            <div className="flex items-center gap-2">
              {stickyMessages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMsgIndex(i)}
                  title={`Show message ${i + 1}`}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    i === msgIndex ? "bg-primary-foreground" : "bg-primary-foreground/40"
                  )}
                />
              ))}
            </div>
          }
        >
          <span className="font-medium">{stickyMessage}</span>
        </TopStickyBar>

        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
