import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';

// Card data for testimonials. In a real app, this would likely come from an API.
const testimonials = [
  {
    name: 'Rajesh Kumar',
    username: '@rajeshk',
    avatar: 'https://i.pravatar.cc/40?u=rajesh',
    quote: "RV Digital Service helped me instantly download my PAN and Aadhaar-related documents. Fast, reliable, and very convenient."
  },
  {
    name: 'Aishwarya Patil',
    username: '@aishpatil',
    avatar: 'https://i.pravatar.cc/40?u=aishwarya',
    quote: "I applied for my voter card and linked my mobile number without any hassle. RB Digital Service made the process very smooth."
  },
  {
    name: 'Vikram Singh',
    username: '@vikram_s',
    avatar: 'https://i.pravatar.cc/40?u=vikram',
    quote: "Lost my driving license number and found it instantly here. RC and DL PDF download was quick and accurate."
  },
  {
    name: 'Priya Sharma',
    username: '@priyasharma',
    avatar: 'https://i.pravatar.cc/40?u=priya',
    quote: "RV Digital Service saved me multiple visits to government offices. Aadhaar print and PAN services were done in minutes."
  },
  {
    name: 'Amit Patel',
    username: '@amitp',
    avatar: 'https://i.pravatar.cc/40?u=amit',
    quote: "From ration card PDF to NPCI bank status, everything was available at one place. Very useful digital service center."
  },
  {
    name: 'Neha Gupta',
    username: '@neha_g',
    avatar: 'https://i.pravatar.cc/40?u=neha',
    quote: "The instant services are a lifesaver. Voter, PAN, and Aadhaar-related work was completed quickly and safely."
  },
  {
    name: 'Suresh Menon',
    username: '@smenon',
    avatar: 'https://i.pravatar.cc/40?u=suresh',
    quote: "RV Digital Service is trustworthy and efficient. Certificates, vehicle documents, and verification services worked perfectly."
  }
];


// types
type Testimonial = typeof testimonials[number];

// Reusable Testimonial Card Component
const TestimonialCard: React.FC<Testimonial> = ({ name, username, avatar, quote }) => (
  <figure className="flex-shrink-0 w-72 h-44 cursor-pointer overflow-hidden rounded-xl p-5 bg-card backdrop-blur-lg border border-border shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex items-center gap-4">
      <img className="rounded-full border-2 border-border w-10 h-10" alt={name} src={avatar} />
      <div className="flex flex-col">
        <figcaption className="text-md font-bold text-foreground">{name}</figcaption>
        <p className="text-sm font-medium text-muted-foreground">{username}</p>
      </div>
    </div>
    <blockquote className="mt-3 text-sm text-foreground/80 line-clamp-3 whitespace-normal italic">
      “{quote}”
    </blockquote>
  </figure>
);

// Main Marquee Component
export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This effect handles the pause-on-hover functionality
    const marqueeElement = marqueeRef.current;
    if (marqueeElement) {
      const handleMouseEnter = () => (marqueeElement.style.animationPlayState = 'paused');
      const handleMouseLeave = () => (marqueeElement.style.animationPlayState = 'running');

      marqueeElement.addEventListener('mouseenter', handleMouseEnter);
      marqueeElement.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        marqueeElement.removeEventListener('mouseenter', handleMouseEnter);
        marqueeElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="w-full overflow-hidden relative py-12">
      {/* Inline CSS for the marquee animation and edge gradients */}
      <style>{`
        .animate-marquee { display: block; }
        .animate-marquee > .track { display:flex; gap:1rem; align-items:stretch; animation: marquee 28s linear infinite; }
        @keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }
      `}</style>

      {/* Gradient overlays for a fading effect on the edges */}
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

      {/* The marquee container that holds the animated content */}
      <div ref={marqueeRef} className="animate-marquee will-change-transform">
        <div className="track flex items-center gap-6">
          {/* Render the testimonials twice for a seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
